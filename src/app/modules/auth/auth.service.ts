import {
  createNewAccessTokenWithRefreshToken,
  createUserTokens,
} from "../../utils/userTokens";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcryptjs from "bcryptjs";
const login = async (payload: Partial<IUser>) => {
  const { email, password } = payload;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    throw new Error("User not found");
  }
  const isPasswordCorrect = await bcryptjs.compare(
    password as string,
    userExists.password
  );
  if (!isPasswordCorrect) {
    throw new Error("Invalid password");
  }
  const { accessToken, refreshToken } = createUserTokens(userExists);
  return { accessToken, refreshToken };
};
const getNewAccessToken = async (refreshToken: string) => {
  const newAccessToken = await createNewAccessTokenWithRefreshToken(
    refreshToken
  );
  return { accessToken: newAccessToken };
};
export const authService = {
  login,
  getNewAccessToken,
};
