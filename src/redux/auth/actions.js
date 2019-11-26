import {httpClient}  from '../../helpers/httpClient';
import CONSTANTS from '../../settings/constants';
import {
  SET_ACCESS_TOKEN
} from './types';


export const redirectAuthUrl = () => {
    const request= {
        client_id:CONSTANTS.CLIENT_ID,
        response_type: "token",
        redirect_uri: CONSTANTS.REDIRECT_URI,
      }
      const query = httpClient.toQueryString(request);
      const url = `https://accounts.spotify.com/authorize${query}`
      window.location.href = url
}

export const saveAccessToken = (accessToken)=> async dispatch=>{
  const loadingType = SET_ACCESS_TOKEN;
  dispatch({
      type: loadingType,
      payload: accessToken
  })
}