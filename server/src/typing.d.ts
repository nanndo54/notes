import jwt from 'jsonwebtoken'

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    export interface Request {
      payload: jwt.JwtPayload
    }
  }
}
