import axios from '../utils/axios';

interface ArticleFace {
    pageIndex: number,
    pageSize: number
}
export const getArticleList = (data:ArticleFace) => {
    return axios.post('http://www.tianleilei.cn/api/article/get',data);
}