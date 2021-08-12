export const GET_All_ACCOUNT_RECODE = () => "http://localhost:8080/api/account/get";
export const CONTENT_TYPE = () => { return {headers:{ 'Access-Control-Allow-Origin': '*', "Content-Type":"application/json"}}};
export const BASE_CONFIG = () => { return {
    baseUrl: "http://localhost:8080/api/account/get"
    ,headers:{ 'Access-Control-Allow-Origin': '*', "Content-Type":"application/json"}}};

export const PATCH_ACCOUNT_RECODE = () => "/account/patch";