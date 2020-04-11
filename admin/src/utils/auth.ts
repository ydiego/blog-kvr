const jwt = require("jsonwebtoken");
const auth = (): boolean => {
  const token: string = localStorage.getItem("token") || "";
  let verify: boolean = true;
  if (!token) {
    verify = false;
  } else {
    jwt.verify(token, "kvr-blog", (err: any) => {
      verify = !err;
    });
  }
  return verify;
};

export default auth;
