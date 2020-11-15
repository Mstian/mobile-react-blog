import Comment from 'Components/Comment';
import {connect} from 'react-redux';
const mapStateToProps = (state:any) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const CommentWrap = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default CommentWrap;