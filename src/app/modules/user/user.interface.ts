export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "INSTRUCTOR",
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  role: Role;
}
