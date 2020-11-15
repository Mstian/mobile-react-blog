import User from 'Components/User';

import {connect} from 'react-redux';

const mapStatetoProps = (state:any) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(User);


