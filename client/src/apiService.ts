import axios from 'axios';
import { ReleaseInterface, ListInterface } from './interfaces';

const baseUrl = 'http://localhost:3001';

export const pullRelease = async (url: string): Promise<ReleaseInterface> => {
  const encodedUrl = btoa(url);
  const { data } = await axios.get(baseUrl + '/release/' + encodedUrl);
  return data;
};

export const listUserLists = async (): Promise<ListInterface[]> => {
  const { data } = await axios.get(baseUrl + '/lists');
  return data;
};

export const getListReleases = async (listId: string): Promise<ReleaseInterface[]> => {
  const { data } = await axios.get(baseUrl + '/list/' + listId);
  return data;
};
