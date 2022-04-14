import { Routes } from 'nest-router';

export const v1Module: Routes = [
  {
    path: '/v1',
    children: [
      { path: '', module: '' },
    ],
  },
];
