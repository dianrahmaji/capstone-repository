import {
  FETCH_REPOSITORY,
  FETCH_SINGLE_REPOSITORY,
  LOADING_REPOSITORY,
  FETCH_FOLDER,
  LOADING_FOLDER,
} from '../constants/repositoryConstants';

export const repositoryReducer = (
  state = {
    repositoryLoading: false,
    folderLoading: false,
    repositoryData: [],
    singleRepositoryData: {},
    folder: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case LOADING_REPOSITORY: {
      return { ...state, repositoryLoading: true };
    }
    case FETCH_REPOSITORY: {
      return {
        repositoryLoading: false,
        error: null,
        repositoryData: action.payload,
      };
    }
    case FETCH_SINGLE_REPOSITORY: {
      return {
        ...state,
        repositoryLoading: false,
        singleRepositoryData: action.payload,
      };
    }
    default:
      return state;
  }
};

export const folderReducer = (
  state = {
    folderLoading: false,
    folder: {},
    error: null,
  },
  action
) => {
  switch (action.type) {
    case LOADING_FOLDER: {
      return { ...state, folderLoading: true };
    }
    case FETCH_FOLDER: {
      return {
        folderLoading: false,
        error: null,
        folder: action.payload,
      };
    }
    default:
      return state;
  }
};
