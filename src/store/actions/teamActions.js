import axios from 'axios';
import { LOADING_TEAM, FETCH_TEAM } from '../constants/teamConstants';

export const fetchTeam = (searchText) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TEAM });

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/team/search`,
      { params: { searchText } }
    );

    dispatch({ type: FETCH_TEAM, payload: data });
  } catch (error) {}
};
