import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userService } from "./user.service";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const reuslt = await userService.createUser(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "User created successfully",
      data: reuslt,
    });
  }
);
const getMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.user as JwtPayload;
    const result = await userService.getMe(userId);
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "User retrieved successfully!",
      data: result,
    });
  }
);
export const userController = {
  createUser,
  getMe,
};
