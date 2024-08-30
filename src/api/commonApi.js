import * as apiClient from './httpCommon';
import {apiRoutes} from './apiRoutes';

export const Register = async data =>
  (await apiClient.postAPICall(apiRoutes.Register(), data))?.data;
