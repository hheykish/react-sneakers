import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "User",
    email: "usertester@gmail.com",
    password: "password",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
