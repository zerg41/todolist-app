import { nanoid } from 'nanoid';
import type { ITodo } from 'utils/types';

export const mockTodos: ITodo[] = [
  {
    id: nanoid(),
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
    completed: true,
  },
  {
    id: nanoid(),
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Mock Task',
    description: 'something important',
    deadline: '2022-10-21 12:00:31',
    files: [],
    completed: false,
  },
];
