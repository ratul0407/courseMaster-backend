import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourse = async (course: ICourse) => {
  return await Course.create(course);
};

const getAllCourse = async () => {
  return await Course.find({});
};

export const courseService = {
  createCourse,
  getAllCourse,
};
