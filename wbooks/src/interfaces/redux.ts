export interface BookState {
  books: [];
  isLoading: boolean;
  hasError: boolean;
}
export interface GetBooksActionTypes {
  type: string;
  payload: any;
}
