import { login } from 'Src/apis';
import { SETUSERINFO } from 'Src/constants';
import { Toast } from 'antd-mobile';
import { setLocalStorage, clearLocalStorae } from 'Src/utils/tools';
// import { ADDNUMBER, MINNUMBER, ADDTWO } from 'Src//constants';

interface LoginInfo {
  us: string;
  ps: string;
}
export const loginAndSetUserInfo = (data: LoginInfo) => {
  return (dispatch: any) => {
    login(data).then((res: any) => {
      if (res.err === 0) {
        Toast.success('登录成功');
        dispatch({
          type: SETUSERINFO,
          payload: {
            us: res.us,
            uid: res.uid,
          },
        });
        setLocalStorage({
          key: 'us',
          value: res.us,
        });
        setLocalStorage({
          key: 'uid',
          value: res.uid,
        });
      } else {
        Toast.fail(res.err + ' ' + res.msg);
      }
    });
  };
};

export const logoutAndQuit = () => {
  clearLocalStorae('us');
  clearLocalStorae('uid');
  return {
    type: SETUSERINFO,
    payload: {
      us: '',
      uid: '',
    }
  };
};
