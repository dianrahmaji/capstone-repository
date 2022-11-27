import axios from 'axios';
import {
  LOADING_DOCUMENT,
  FETCH_DOCUMENT,
} from '../constants/documentConstants';

export const fetchDocument = (searchText) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_DOCUMENT });

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/document/search`,
      { params: { searchText } }
    );

    dispatch({ type: FETCH_DOCUMENT, payload: data });
  } catch (error) {}
};
