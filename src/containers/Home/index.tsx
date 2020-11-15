import DrawerMenu from 'Components/Home/drawer';
import {connect} from 'react-redux';
import {logoutAndQuit} from 'Src/actions/login';
const mapStateToProps = (state: any) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: () => {dispatch(logoutAndQuit())}
    }
}

const HomeMap:any = connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);

export default HomeMap;