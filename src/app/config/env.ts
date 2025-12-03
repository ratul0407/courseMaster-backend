import dotenv from "dotenv";
dotenv.config();

export const envVars = {
  PORT: process.env.PORT as string,
  DB_URL: process.env.DB_URL as string,
  NODE_ENV: process.env.NODE_ENV as "production" | "development",
  FRONTEND_URL: process.env.FRONTEND_URL as string,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
  JWT_ACCESS_SECRET: process.env.ACCESS_SECRET as string,
  JWT_ACCESS_EXPIRES_IN: process.env.ACCESS_EXPIRES_IN as string,
  JWT_REFRESH_SECRET: process.env.REFRESH_SECRET as string,
  JWT_REFRESH_EXPIRES_IN: process.env.REFRESH_EXPIRES_IN as string,
};
