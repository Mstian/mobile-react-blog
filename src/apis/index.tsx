import axios from '../utils/axios';

interface ArticleFace {
  pageIndex: number;
  pageSize: number;
}
interface ArticleDetailFace {
  id: string;
}
interface LoginInfo {
  us: string;
  ps: string;
}
interface RegisterInfo extends LoginInfo {
  rps: string;
}
interface keywordsInfo {
  kw: string;
}
interface UserPublish {
  uid: string;
}
interface LeaveMessage {
  uid: string;
  content: string;
  commentator: string;
}
// 获取文章列表
export const getArticleList = (data: ArticleFace) => {
  return axios.post('/api/article/get', data);
};
// 获取文章详情
export const getArticleById = (data: ArticleDetailFace) => {
  return axios.get('/api/article/getbyid', data);
};
// 获取工具列表
export const getTools = () => {
  return axios.get('/api/tools/gettools', {});
};
// 获取学习列表
export const getStudys = () => {
  return axios.get('/api/study/getallstudy', {});
};
// 注册
export const register = (data: RegisterInfo) => {
  return axios.post('/api/user/reg', {
    us: data.us,
    ps: data.ps,
    rps: data.rps,
  });
};
// 登录
export const login = (data: LoginInfo) => {
  return axios.post('/api/user/login', { us: data.us, ps: data.ps });
};
// 查询
export const search = (data: keywordsInfo) => {
  return axios.get('/api/article/getbykw', { kw: data.kw });
};
// 我的发布
export const userPublishList = (data: UserPublish) => {
  return axios.post('/api/article/userpublish', { uid: data.uid });
};
// 我的分享
export const userShare = (data: UserPublish) => {
  return axios.post('/api/article/usershare', { uid: data.uid });
};
// 我的草稿箱
export const userDraft = (data: UserPublish) => {
  return axios.post('/api/article/usercraft', { uid: data.uid });
};
// 获取留言列表
export const userComment = () => {
  return axios.get('/api/comment/get', {});
};
// 提交留言
export const leavingMessage = (data: LeaveMessage) => {
  return axios.post('/api/comment/add', {
    uid: data.uid,
    content: data.content,
    commentator: data.commentator,
  });
};
