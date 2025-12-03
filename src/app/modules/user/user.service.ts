import { envVars } from "../../config/env";
import { IUser, Role } from "./user.interface";
import { User } from "./user.model";
import bcryptjs from "bcryptjs";
const createUser = async (user: IUser) => {
  const isUserExist = await User.findOne({ email: user.email });
  if (isUserExist) {
    throw new Error("User already exist");
  }
  const password = await bcryptjs.hash(
    user.password,
    Number(envVars.BCRYPT_SALT_ROUND)
  );
  return await User.create({ ...user, password, role: Role.STUDENT });
};

const getMe = async (id: string) => {
  const user = await User.findById(id).select("-password");
  return { data: user };
};
export const userService = {
  createUser,
  getMe,
};
