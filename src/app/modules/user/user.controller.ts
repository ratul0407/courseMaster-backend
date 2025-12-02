import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userService } from "./user.service";
import httpStatus from "http-status-codes";
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

export const userController = {
  createUser,
};
