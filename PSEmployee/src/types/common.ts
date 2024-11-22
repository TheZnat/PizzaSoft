export interface Employees {
  id: number;
  name: string;
  isArchive: boolean;
  role: "driver" | "waiter" | "cook"; // Перечисление ролей
  phone: string; // Телефон в виде строки
  birthday: string; // Дата в строковом формате
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
