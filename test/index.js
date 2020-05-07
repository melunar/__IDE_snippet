import Taro, {
  Component,
  // showLoading,
  // showToast,
  // showModal,
  // hideLoading
} from '@tarojs/taro'
import {
  View,
  // Text,
  // Block,
  // Image,
  // Button,
  // CoverView,
  // CoverImage,
  // ScrollView
} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(({}) => ({
  //
}))
export default class MyPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  // onload onlunch
  componentWillMount () {
    // console.log('@@ this.router.params', this.router.params)
    // const { dispatch } = this.props
  }
  // onshow
  componentDidShow () {}
  // function
  myHandler () {}
  // pageConfig
  // config = {
    //   // navigationStyle: 'custom',
    //   navigationBarTitleText: 'title',
    //   navigationBarTextStyle: 'black',
    //   navigationBarBackgroundColor: '#fff'
  // }
  // render
  render () {
    return (
      <View className>
        1111
    </View>
    )
  }
}
