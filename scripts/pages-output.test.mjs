import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'
import { once } from 'node:events'
import test from 'node:test'

const outputDirectory = resolve('dist')

test('Pages output serves the chooser and both option sites', async (context) => {
  const server = createServer(async (request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname
    const relativePath = pathname.startsWith('/hackthon/')
      ? pathname.slice('/hackthon'.length)
      : null
    const target = relativePath && resolve(outputDirectory, `.${relativePath}`)
    const safeTarget = typeof target === 'string'
      && (target.startsWith(`${outputDirectory}${sep}`) || target === outputDirectory)

    try {
      if (!safeTarget) throw new Error('Outside Pages output')
      const targetStat = await stat(target)
      const file = targetStat.isDirectory() ? resolve(target, 'index.html') : target
      const html = await readFile(file)
      const contentType = file.endsWith('.js') ? 'text/javascript'
        : file.endsWith('.css') ? 'text/css'
          : file.endsWith('.svg') ? 'image/svg+xml'
            : file.endsWith('.png') ? 'image/png'
              : 'text/html; charset=utf-8'
      response.writeHead(200, { 'content-type': contentType })
      response.end(html)
    } catch {
      response.writeHead(404)
      response.end('Not found')
    }
  })

  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  context.after(() => new Promise((resolveClose, reject) => {
    server.close((error) => error ? reject(error) : resolveClose())
  }))

  const address = server.address()
  const origin = `http://127.0.0.1:${address.port}`
  const chooser = await fetch(`${origin}/hackthon/`)
  const chooserHtml = await chooser.text()

  assert.equal(chooser.status, 200)
  assert.match(chooserHtml, /href=["']\.\/option-1\//)
  assert.match(chooserHtml, /href=["']\.\/option-2\//)
  assert.equal((await fetch(`${origin}/hackthon/chooser.css`)).status, 200)

  for (const route of ['/hackthon/option-1/', '/hackthon/option-2/']) {
    const page = await fetch(`${origin}${route}`)
    assert.equal(page.status, 200, `${route} should resolve to its app page`)
    const html = await page.text()
    const assets = [...html.matchAll(/(?:src|href)=["']([^"']+\.(?:js|css))["']/g)].map((match) => match[1])
    assert.ok(assets.length >= 2, `${route} should reference its app bundles`)

    for (const asset of assets) {
      const response = await fetch(new URL(asset, origin))
      assert.equal(response.status, 200, `${asset} should be included in the Pages output`)
    }
  }
})
