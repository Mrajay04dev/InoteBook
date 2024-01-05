const jwt = require("jsonwebtoken");

const JWT_SECRET = "ajayisgoodboy1@";
const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please Authenticate Using a Valid Token" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.newUser = decoded.user;  // Fix: Assign user data to req.newUser
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate Using a Valid Token" });
  }
};

module.exports = fetchuser;
