export const initialState = {
  books: [],
  isLoading: false,
  hasError: false
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false
      };
    case 'GET_BOOKS_FAILURE':
      return {
        ...state,
        hasError: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
