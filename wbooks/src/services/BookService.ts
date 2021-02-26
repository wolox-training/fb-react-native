import { BOOKS_MOCK } from '@constants/mockBooks';

export const BookService = {
  getBooks: () => {
    return new Promise(resolve => {
      resolve({ ok: true, data: BOOKS_MOCK, problem: null });
    });
  }
};

export default BookService;
