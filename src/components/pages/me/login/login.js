/**
 * Created by guangqiang on 2017/11/14.
 */
import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, ScrollView, NativeModules, Platform} from 'react-native'
import {BaseComponent} from '../../../base/baseComponent'
import {Icon, deviceInfo, Toast, commonStyle, storage} from '../../../../utils'
import {Actions} from 'react-native-router-flux'
import {sharePlatform} from '../../../../constants/commonType'
import {connect} from 'react-redux'
import Action from '../../../../actions'

const LoginModule = NativeModules.loginModule
import store from '../../../../store'

export default class Login extends BaseComponent {
// class Login extends BaseComponent {

  constructor(props) {
    super(props)
    this.state = {
      userName: 'dick_mobile',
      password: 'python',
      secret: true,
      auth_token: undefined,

    }
  }

  navigationBarProps() {
    return {
      title: '登录',
      leftIcon: {
        name: 'nav_back_o',
        size: 20,
        color: commonStyle.white
      },
      titleStyle: {
        color: commonStyle.white
      },
      navBarStyle: {
        backgroundColor: '#161C28',
        borderBottomWidth: 0,
      }
    }
  }

  renderInput() {
    return (
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', padding: 10, backgroundColor: commonStyle.white, borderBottomWidth: commonStyle.lineWidth, borderBottomColor: commonStyle.lineColor, alignItems: commonStyle.center}}>
          <Icon name={`oneIcon|user_name_o`} size={20} color={'#646464'}/>
          <TextInput
            style={{flex: 1, marginHorizontal: 10, fontSize: 14}}
            placeholder={'登录邮箱/手机号码'}
            onChangeText={text => {
              text = text.replace(/ /g, '_')
              this.setState({userName: text})
            }}
            defaultValue={'defaultValue'}
            value={this.state.userName}
          />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 10, backgroundColor: commonStyle.white, paddingVertical: 6, alignItems: commonStyle.center}}>
          <Icon name={`oneIcon|pwd_o`} size={20} color={'#646464'}/>
          <TextInput
            style={{flex: 1, marginHorizontal: 10,  fontSize: 14}}
            placeholder={'密码'}
            defaultValue={'defaultValue'}
            secureTextEntry={this.state.secret}
            onChangeText={text => {
              text = text.replace(/ /g, '_')
              this.setState({password: text})
            }}
            value={this.state.password}
          />
          <Switch
            onValueChange={value => {
              this.setState({secret: value})
            }}
            value={this.state.secret}/>
        </View>
      </View>
    )
  }

  loginClick() {
    let params = {}
    params.userName = this.state.userName
    params.password = this.state.password
    // params.iconurl = 'http://ovyjkveav.bkt.clouddn.com/17-11-9/48949929.jpg'
    // params.gender = '男'
    // params.province = '上海'
    // params.city = '333静安333'
    // let actions = this.props.mockLogin(params)
    // let actions = this.props.eduAppLoginCurl(params)
    let actions = this.props.eduAppLogin(params)
    console.log('Dick: here1')
    console.log('Dick: this props:', this.props)
    console.log('Dick: this state:', this.state)
    console.log('Dick: store state:', store.getState())

    if (actions instanceof Promise) {
      // console.log(this.props.eduAppLogin(params))
      actions.then(response => {
            console.log('Debug eduAppLogin response: ',response)
            storage.save('userInfo', params)         // Dick: logout in src/components/pages/me/setting.js -> logoutClick() 
            var token=response.value.auth_token
            storage.save('authtoken', token)
            this.props.callback && this.props.callback('login') // callback is defined in src/components/pages/me/me.js , line 52
            Toast.showSuccess('登录成功', () => Actions.pop())
        },
        (err) => {
          console.log(err.message) // jser down
          this.props.callback && this.props.callback('fail') // callback is defined in src/components/pages/me/me.js , line 52
          Toast.showSuccess('登录失败', () => Actions.pop())
        })

      console.log('Dick: here2')

      // actions.then((value) => {
      //   console.log('Debug: 1',value);
      // }), (value) => console.log(value);
      
      // Promise.all([this.props.mockLogin(params)]).then(response => {
      //   console.log('Debug: response',response)
      // }),
      // (response => console.log('Debug: response',response))
        // console.log('Debug: response',response[1])

      // storage.save('userInfo', params)         // Dick: logout in src/components/pages/me/setting.js -> logoutClick() 
      // this.props.callback && this.props.callback('login') // callback is defined in src/components/pages/me/me.js , line 52
      // Toast.showSuccess('登录成功', () => Actions.pop())
      // Toast.showSuccess('登录成功', )

    }

    // Promise.all([this.props.getMovieShowTimeList(), this.props.getMovieComeingNewList()]).then(response => {
    //   this.setState({
    //     showTimeList: response[0].value.ms,             // https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290
    //     comeingNewList: response[1].value.moviecomings, // https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
    //     attentionList: response[1].value.attention      // https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
    //   })
    //   // console.log('Debug: response',response[1])
    // })
  }

  authLogin(platform) {
    LoginModule.login(sharePlatform[platform], (response) => {
      storage.save('userInfo', response)
      this.props.callback && this.props.callback('login')
      Toast.showSuccess('授权成功！')
      Actions.pop()
    })
  }

  renderLoginBtn() {
    return (
      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.loginClick()}
        >
          {/* <Text style={{color: commonStyle.white, fontSize: 17}}>登录 {this.props.logindy.auth_token}</Text> */}
          <Text style={{color: commonStyle.white, fontSize: 17}}>登录</Text>
        </TouchableOpacity>
        <View style={{flexDirection: commonStyle.row, alignItems: commonStyle.center, marginTop: 15, marginHorizontal: 30, justifyContent: commonStyle.between}}>
          <TouchableOpacity onPress={() => Actions.userRegister()}>
            <Text style={{color: '#0746AB', fontSize: 15, fontWeight: 'bold'}}>免费注册</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#555555', fontSize: 15, fontWeight: 'bold'}}>找回密码</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderLoginPanel() {
    return (
      <View>
        <View style={{flexDirection: commonStyle.row, marginTop: 40, alignItems: commonStyle.center, marginHorizontal: 50, justifyContent: commonStyle.center}}>
          <Text style={{height: 1, flex: 1, backgroundColor: '#B8B8B7'}}>-</Text>
          <Text style={{marginHorizontal: 10, color: '#B8B8B7'}}>第三方账号登录</Text>
          <Text style={{height: 1, flex: 1, backgroundColor: '#B8B8B7'}}>-</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: commonStyle.center, marginTop: 20, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => this.authLogin('WECHAT')}
          >
            <Icon name={`oneIcon|weixin_s`} size={60} color={'#49BB04'}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => this.authLogin('QQ')}
          >
            <Icon name={`oneIcon|qq_s`} size={60} color={'#57B4FF'}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => this.authLogin('SINA')}
          >
            <Icon name={`oneIcon|weibo_s`} size={60} color={'#D51705'}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  _render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderInput()}
          {this.renderLoginBtn()}
          {this.renderLoginPanel()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.bgColor
  },
  loginBtn: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 12,
    width: deviceInfo.deviceWidth - 40,
    backgroundColor: '#0D70C5',
    alignItems: commonStyle.center,
    justifyContent: commonStyle.center,
    borderRadius: 25
  }
})


// const _Login = connect(
//   state => state.me.login,
//   Action.dispatch('login')
// )(Login)

// export default _Login