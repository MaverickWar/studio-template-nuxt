// Receives the contact form. It checks the message and logs it; send it on from here (an email
// service such as Resend, a database, or a Slack webhook) using keys kept in .env, never in the code.
export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<Contact>>(event)
  const errors = checkContact(body ?? {})
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 422, statusMessage: 'Some fields need another look', data: errors })
  }
  console.log('New message from', body.email)
  return { ok: true }
})
