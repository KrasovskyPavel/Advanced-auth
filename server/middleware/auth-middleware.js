import ApiError from "../errors/api-error.js";
import tokenService from "../service/token-service.js";

export default function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    console.log("authorizationHeader", authorizationHeader);
    if (!authorizationHeader) {
      throw next(ApiError.UnauthorizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    console.log("accessToken", accessToken);
    if (!accessToken) {
      throw next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    console.log("userData", userData);
    if (!userData) {
      throw next(ApiError.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
}
