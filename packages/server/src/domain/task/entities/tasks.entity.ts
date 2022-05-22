import { STATE } from '@prisma/client'

export class Task {
  id?: number;
  description: string;
  state: STATE;
  userId: number;
}