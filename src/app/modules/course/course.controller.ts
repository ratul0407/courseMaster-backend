import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { courseService } from "./course.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
const createCourse = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await courseService.createCourse(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Course created successfully",
      data: result,
    });
  }
);
const getAllCourse = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await courseService.getAllCourse();
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Course created successfully",
      data: result,
    });
  }
);
export const courseController = {
  createCourse,
  getAllCourse,
};
