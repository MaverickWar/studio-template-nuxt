// The contact form's rules, shared by the server route (and easy to test).
export type Contact = { name: string; email: string; message: string }
export type ContactErrors = Partial<Record<keyof Contact, string>>

export function checkContact(input: Partial<Contact>): ContactErrors {
  const errors: ContactErrors = {}
  if (!input.name?.trim()) errors.name = 'Please add your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email?.trim() ?? '')) errors.email = 'Please add an email address we can reply to.'
  if (!input.message?.trim()) errors.message = 'Please tell us a little about what you need.'
  return errors
}
