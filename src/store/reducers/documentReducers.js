import {
  FETCH_DOCUMENT,
  LOADING_DOCUMENT,
} from '../constants/documentConstants';

export const documentReducer = (
  state = { documentLoading: false, error: null, documentData: [] },
  action
) => {
  switch (action.type) {
    case LOADING_DOCUMENT: {
      return { ...state, documentLoading: true };
    }
    case FETCH_DOCUMENT: {
      return {
        ...state,
        documentLoading: false,
        error: null,
        documentData: action.payload,
      };
    }
    default:
      return state;
  }
};
