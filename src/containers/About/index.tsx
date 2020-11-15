import About from 'Components/About';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const AboutWrap = connect(mapStateToProps, mapDispatchToProps)(About);
export default AboutWrap;