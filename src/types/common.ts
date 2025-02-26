export type BaseResponse<T> = {
  message: string;
  item: T;
};

export type BaseResponseList<T> = {
  message: string;
  items: T[];
  pagination: Pagination;
  status: string;
};

export type Pagination = {
  total: number;
  totalPages: number;
  currentPage: number;
  setPage?: (page: number) => void;
};
