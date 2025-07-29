import type { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
  description: string;
};

const initialState: User[] = [
  {
    id: '0',
    name: 'Tianna Jenkins',
    description:
      'Experienced Software Engineer with a strong background in full-stack web development, specializing in React, Node.js, and cloud-native applications.',
  },
  {
    id: '1',
    name: 'Kevin Grant',
    description:
      'Currently seeking new opportunities. Former Marketing Specialist with a focus on digital strategy, content creation, and brand development.',
  },
  {
    id: '2',
    name: 'Madison Price',
    description:
      'Chief Executive Officer at Google, leading innovation and strategic initiatives across global teams to shape the future of technology and artificial intelligence.',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState, userId: string) =>
  state.users.find((user) => user.id === userId);
