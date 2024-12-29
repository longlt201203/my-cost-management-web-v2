export interface ApiResponse<T> {
  data: T;
  message?: string;
  pagination?: null;
}

export interface ApiError {
  code: string;
  message: string;
  detail: any;
  status: number;
}
