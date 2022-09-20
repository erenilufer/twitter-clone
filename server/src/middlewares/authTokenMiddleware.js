const jwt = require("jsonwebtoken");

const authTokenMiddleware = (req, res, next) => {
  const header = req.headers;
  console.log(header);
  const token = req.headers.authorization?.split(" ")[1]; // Bearer ${TOKEN} that gives token
  if (!token)
    return res
      .status(401)
      .json({ error: { message: "Token is not provided", code: 401 } });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        err: {
          name: "TOKEN_EXPIRED",
          message: "JWT Token Expired",
        },
      });
    }
    console.log(decoded);

    req.user = decoded;
    next();
  });
};
module.exports = authTokenMiddleware;
