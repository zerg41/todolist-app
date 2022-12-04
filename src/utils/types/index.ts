export interface ITodo {
  id: string | number;
  title: string;
  deadline: string;
  completed: boolean;
  description?: string;
  files?: any[];
}

export interface IMockData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IUploadedFile {
  name: string;
  extension: string;
}
