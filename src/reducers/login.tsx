import {getLocalStorage} from 'Src/utils/tools'

let initialState = {uid:'', us: ''};

let uid:string = getLocalStorage('uid') || "" ;
let us = getLocalStorage('us') || "";
if (uid || us) {
    initialState = {
        uid: uid,
        us: us
    }
}

import {SETUSERINFO} from 'Src/constants'
const userInfo = (state = initialState, action:any) => {
    switch(action.type) {
        case SETUSERINFO:
            return {
                ...state,
                ...{
                    us: action.payload.us,
                    uid: action.payload.uid
                }
            }
        default:
            return state; 
    }
}
export default userInfo;