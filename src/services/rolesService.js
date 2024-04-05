import axiosConfig from '../utils/axios';

const handleResponse = (error) => {
  if (
    error.response &&
    (error.response.status === 500 ||
      error.response.status === 400 ||
      error.response.status === 401 ||
      error.response.status === 422)
  ) {
    return error.response && error.response.data;
  }
  return error.response && error.response.data;
};

export const getRoleService = (data) =>
  axiosConfig
    .get(`${data}`)
    .then((response) => response.data)
    .catch(handleResponse);
export const createRoleService = (data) =>
  axiosConfig
    .post(``, data)
    .then((response) => response.data)
    .catch(handleResponse);
export const updateRoleService = (data) =>
  axiosConfig
    .post(``, data)
    .then((response) => response.data)
    .catch(handleResponse);
export const deleteRoleService = (data) =>
  axiosConfig
    .post(``, data)
    .then((response) => response.data)
    .catch(handleResponse);
