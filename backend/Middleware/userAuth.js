const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    //console.log(authHeader,"MIddleware ONE")
    const authToken = authHeader && authHeader.split(" ")[1];
    //console.log(authToken,"MIddleware TWO")
    if (!authToken)
      return res.json({
        loginfail: true,
        status: false,
        message: "no auth token",
      });
    const decode = jwt.verify(authToken, "JWT");
const userId = decode.id;
     const user = await userModel.findOne({ _id: userId });
    
    if (!user) {
      return res.json({
        message: "Unauthorized access",
        status: false,
        loginFail: true,
      });
    }
    req.user = user;
    next()
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Unauthorized access",
      status: false,
      loginFail: true,
    });
  }
};
