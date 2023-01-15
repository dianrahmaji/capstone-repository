import axios from 'axios';
import {
  LOADING_REPOSITORY,
  FETCH_REPOSITORY,
  FETCH_SINGLE_REPOSITORY,
  FETCH_FOLDER,
  LOADING_FOLDER,
  FETCH_FOLDER_FROM_DOCUMENT,
} from '../constants/repositoryConstants';

export const fetchRepository = (searchText) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_REPOSITORY });

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/team/repository`,
      { params: { searchText } }
    );

    dispatch({ type: FETCH_REPOSITORY, payload: data });
  } catch (error) {}
};

export const fetchSingleRepository = (repositoryId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_REPOSITORY });

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/team/repository/${repositoryId}`
    );

    dispatch({ type: FETCH_SINGLE_REPOSITORY, payload: data });
  } catch (error) {}
};

export const fetchFolder = (folderId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_FOLDER });

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/folder/search/${folderId}`
    );

    dispatch({ type: FETCH_FOLDER, payload: data });
  } catch (error) {}
};

export const fetchFolderByDocumentId = (documentId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_FOLDER });

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/folder/search/document/${documentId}`
    );

    console.log(data);
    console.log(documentId);

    const document = data.documents.filter((doc) => doc._id === documentId);

    dispatch({
      type: FETCH_FOLDER_FROM_DOCUMENT,
      payload: { data, document: document[0] },
    });
  } catch (error) {}
};
