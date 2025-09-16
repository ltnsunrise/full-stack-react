import { expressjwt } from 'express-jwt'

export const requireAuth = expressjwt({
  // eslint-disable-next-line no-undef
  secret: () => process.env.JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'auth', // Attach the decoded token to req.auth
})
