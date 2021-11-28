import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization
    if (!authorization || !authorization.toLowerCase().startsWith('bearer '))
      throw new Error()

    const token = authorization.substring(7)
    const sign = process.env.JWT_SECRET as jwt.Secret

    const decodedToken = jwt.verify(token, sign) as jwt.JwtPayload
    if (!decodedToken || !decodedToken.id) throw new Error()

    req.payload = decodedToken

    next()
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' })
  }
}

export default authenticationMiddleware
