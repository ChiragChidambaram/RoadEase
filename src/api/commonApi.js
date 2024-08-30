import * as apiClient from './httpCommon';
import {apiRoutes} from './apiRoutes';

export const Register = async data =>
  (await apiClient.postAPICall(apiRoutes.Register(), data))?.data;
export const LoginApi = async data =>
  (await apiClient.postAPICall(apiRoutes.Login(), data))?.data;
export const AuthorityPost = async data =>
  (await apiClient.getAPICall(apiRoutes.AuthorityPost(), data))?.data;
