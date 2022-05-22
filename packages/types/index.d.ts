export * from "@prisma/client";
import { Task } from '@prisma/client'
export interface ICustumer { 
  name: string;
  username: string;
  email: string;
  password: string;
}

export type ITaskUser = Task & {
  User: {
    name: string;
  };
}