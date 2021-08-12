import {SYSTEM_ERROR} from '../config/CONSTANTS';
import axios from 'axios';
import { BASE_CONFIG, CONTENT_TYPE, GET_All_ACCOUNT_RECODE, PATCH_ACCOUNT_RECODE } from './CONSTANTS';


export const getAccountBook = (date, week) => {
    console.log("AccountBookService > getAccountBook called...");
    const serverApi = axios.create(BASE_CONFIG);
    return new Promise((resolve, reject)=> {
        try {            
            console.log(date, week);
            const data = {date:date, week:week};
            let config = CONTENT_TYPE();
            config.params = {date, week};
            serverApi.get(GET_All_ACCOUNT_RECODE(), config)
            .then((res) => {
                console.log("getAllCount > axios res", res);
                resolve(res.data);
            })
            .catch((err) => {
                console.log("getAllUsers > axios err=", err);
                reject("Error in getAllUsers axios!");
            });
        } catch (error) {
            console.error("in userServices > getAllUsers, Err===", error);
            reject(SYSTEM_ERROR);
        }
    });
}