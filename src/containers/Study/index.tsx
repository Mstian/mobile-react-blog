import Study from 'Components/Study';
import {connect} from 'react-redux';

// // 需要redux时使用
// const mapStateToProps = (state:any) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch: any) => {
//     return {

//     }
// }  

const StudyWrap = connect()(Study);
export default StudyWrap;