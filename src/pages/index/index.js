import request from 'al-request';
import { connect } from 'labrador-redux';
import wx, { Component, PropTypes } from 'labrador';
import { handleChangeTitle } from '../../redux/modules/index/actions';
import { sleep } from "../../utils/utils";
import Title from '../../components/title/title'

class Node extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      motto: "Hello World",
      userInfo: {}
    };
  }

  handleChange = () => {
    const {onHandleChangeTitle,IndexReducer} = this.props;
    onHandleChangeTitle('组件新title');
  }

  children() {
    const {IndexReducer:{title}} = this.props;
    return {
      title: {
        component: Title,
        props    : {
          title: title,
          desc : '接收父组件的数据传递'
        }
      }
    };
  }

  async onLoad() {
    const {IndexReducer:{title}} = this.props;
    wx.startPullDownRefresh();
  }

  async onPullDownRefresh() {
    await sleep(1000);
    wx.stopPullDownRefresh();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onHandleChangeTitle: (data) => dispatch(handleChangeTitle(data)),
  };
}

export default connect(
  state => ({
    IndexReducer: state.IndexReducer,
  }),
  mapDispatchToProps,
)(Node);
