import { create } from 'apisauce'
import CONSTANTS from '../settings/constants';


// define the api
const api = create({
    baseURL: CONSTANTS.SPOTIFY_API_URL,
    headers: { 'content-type': 'application/json' },
})


const toQueryString = (json) => {
  return (
    '?' +
    Object.keys(json)
      .map(function(key) {
        let objectType;
        if (typeof json[key] === 'object') {
          objectType = JSON.stringify(json[key]);
        } else {
          objectType = encodeURIComponent(json[key]);
        }
        let r = encodeURIComponent(key) + '=' + objectType;
        return r;
      })
      .join('&')
  );
};

/**
 * Consulta Http por metodo GET.
 *
 * @param url String de consulta http
 * @param request parametros en formato JSON
 */

const get = async (url, request, customHeaders = null) => {
  if(customHeaders){
    api.setHeaders(customHeaders)    
  }
  const response = await api.get(url,request);
  return response;
};

/**
 * Consulta Http por metodo POST.
 *
 * @param url String de consulta http
 * @param request parametros en formato JSON
 * @param customHeaders Headers custom a la request
 */

const post = async (url, request, customHeaders = null) => {

  const response = await api.post(url, request, {headers:customHeaders});
  return response
};

const setBaseURL = (url)=>{
  if(url){
    api.setBaseURL(url)
    console.log(`omg i am now at ${api.getBaseURL()}`)
  }
}

const httpClient = {
  post,
  get,
  setBaseURL,
  toQueryString
}

export {httpClient}