export interface ITodo {
  id: string | number;
  title: string;
  deadline: string;
  completed: boolean;
  description?: string;
  files?: any[];
}
