import {REACT_APP_BASE_URL} from '@env';

let url = REACT_APP_BASE_URL || 'http://172.16.11.37:3000/';

export const Url = {
  baseApiUrl: url,
};

export const apiRoutes = {
  Register: () => 'auth/signup',
  Login: () => 'auth/signin',
  AuthorityPost:()=>'post/get/community'
};
