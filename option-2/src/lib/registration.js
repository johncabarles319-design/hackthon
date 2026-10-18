export function validateRegistration({ name, email }) {
  const errors = {}

  if (name.trim().length < 2) {
    errors.name = 'Enter at least 2 characters.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}
