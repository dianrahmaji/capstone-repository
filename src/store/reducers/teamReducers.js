import {
  FETCH_TEAM,
  FETCH_SINGLE_TEAM,
  LOADING_TEAM,
} from '../constants/teamConstants';

export const teamReducer = (
  state = { teamLoading: false, error: null, teamData: [], singleTeamData: {} },
  action
) => {
  switch (action.type) {
    case LOADING_TEAM: {
      return { ...state, teamLoading: true };
    }
    case FETCH_TEAM: {
      return { teamLoading: false, error: null, teamData: action.payload };
    }
    case FETCH_SINGLE_TEAM: {
      const singleTeamArr = state.teamData.filter(
        (team) => team._id === action.payload
      );
      const singleTeam = singleTeamArr[0];

      return { ...state, teamLoading: false, singleTeamData: singleTeam };
    }
    default:
      return state;
  }
};
