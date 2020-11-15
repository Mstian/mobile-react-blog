import ArticleDetail from 'Src/components/ArticleDetail';
import{withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
const mapStateToProps = (state: any) => {
    // console.log(state, 'home state');
    return {
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

const ArticleDetailWrap:any = connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

export default withRouter(ArticleDetailWrap);