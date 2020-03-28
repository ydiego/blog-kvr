const jwt = require("jsonwebtoken");
const auth = () => {
  const token = localStorage.getItem('token')
  let verify = true
  if (!token) {
    verify =  false
  } else {
    jwt.verify(token, 'kvr-blog', (err) => {
      verify = !err
    })
  }
  return verify
}

export default auth