import Search from 'Components/Search';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// // 需要redux时使用
// const mapStateToProps = (state:any) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch: any) => {
//     return {

//     }
// }  

const SearchWrap = connect()(Search);
export default withRouter(SearchWrap);