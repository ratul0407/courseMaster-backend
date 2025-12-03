import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.service";
import { ITokens, setTokenCookie } from "../../utils/setTokenCookie";
import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";
const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("I was here");
    const result = await authService.login(req.body);
    const tokenInfo: ITokens = {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    };
    setTokenCookie(res, tokenInfo);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Login Successful",
      data: result,
    });
  }
);

const getNewAccessToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req?.cookies?.refreshToken;

    if (!refreshToken) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "No refresh token received from the cookies"
      );
    }
    const tokenInfo = await authService.getNewAccessToken(refreshToken);

    setTokenCookie(res, tokenInfo);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "Access Token created successfully!",
      data: tokenInfo,
      success: true,
    });
  }
);

const logOut = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "User logged Out successfully!",
      data: null,
      success: true,
    });
  }
);
export const authController = {
  login,
  getNewAccessToken,
  logOut,
};
