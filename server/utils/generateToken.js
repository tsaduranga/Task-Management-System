import jwt from 'jsonwebtoken'


const generateToken = (id) => {
  return jwt.sign({ id }, 'jsonwebtoken', {
    expiresIn: '30d',
  })
}

export default generateToken
