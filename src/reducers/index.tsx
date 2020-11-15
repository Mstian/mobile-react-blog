import {combineReducers} from 'redux';
import count from './count';
import article from './article';
import userInfo from './login';
const rootReducer = combineReducers({
    count,
    article,
    userInfo
});
export default rootReducer;