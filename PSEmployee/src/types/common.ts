export interface Employees {
  id: number;
  name: string;
  isArchive: boolean;
  role: "driver" | "waiter" | "cook"; 
  phone: string; 
  birthday: string; 
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface DataState {
  items: Employees[];
  isLoading: boolean;
  status: Status;
}
