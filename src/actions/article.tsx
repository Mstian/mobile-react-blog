import {GETARTICLE} from '../constants';
import axios from '../utils/axios';

function receiveArticle(json: any) {
    return {
        type: GETARTICLE,
        payload: {
            data: json
        }
    }
}
interface ArticleRequestParams {
    pageIndex: number,
    pageSize: number
}
export const getArticle = (data:ArticleRequestParams) => {
    let temp = {
        pageIndex: data.pageIndex,
        pageSize: data.pageSize
    };
    return (dispatch:any) => {
        return axios.post('http://www.tianleilei.cn/api/article/get',temp).then((data)=>{
            dispatch(receiveArticle(data));
        })
    }
}

