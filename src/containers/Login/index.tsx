import {connect} from 'react-redux';
import Login from 'Components/Login';
import { loginAndSetUserInfo } from 'Src/actions/login';
// redux
const mapStateToProps = (state:any) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        login: async (data:any) => {dispatch(loginAndSetUserInfo(data))}
    }
}
const LoginWrap = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginWrap;
