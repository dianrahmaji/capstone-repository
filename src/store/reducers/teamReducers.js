import { FETCH_TEAM, LOADING_TEAM } from '../constants/teamConstants';

export const teamReducer = (
  state = { teamLoading: false, error: null, teamData: [] },
  action
) => {
  switch (action.type) {
    case LOADING_TEAM: {
      return { ...state, teamLoading: true };
    }
    case FETCH_TEAM: {
      return { teamLoading: false, error: null, teamData: action.payload };
    }
    default:
      return state;
  }
};
