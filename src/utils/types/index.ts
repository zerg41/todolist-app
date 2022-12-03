export interface ITodo {
  id: string | number;
  title: string;
  deadline: string;
  completed: boolean;
  description?: string;
  files?: any[];
}

export interface IUploadedFile {
  name: string;
  extension: string;
}
