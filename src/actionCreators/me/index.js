/**
 * Created by guangqiang on 2017/11/25.
 */
import {getFetch, postFetch, postFetchForValidator} from '../../utils/network/request/HttpExtension'
import {PATH} from '../../constants/urls'
import {Required, ValidateUtil} from '../../utils/validatorUtil'
import {RegExpr} from '../../utils'
import {ApiSource} from '../../constants/commonType'
// import {API_URL, MIAMI_URL, TIME_MOVIE_URL, TIME_TICKET_URL, EDUAPPBACKEND_URL} from '../../../constants/urlConfig'

// const login = params =>  postFetchForValidator(PATH.EDU_APP_LOGIN, params)
const login = params =>  postFetch(PATH.EDU_APP_LOGIN, params, ApiSource.EDUAPPBACKEND)
// const register = params =>  postFetchForValidator(PATH.EDU_APP_REG, params)

// const login = params =>  postFetchForValidator(PATH.EDU_APP_REG, params)
const login_curl = params =>  getFetch(PATH.EDU_APP_REG, params, ApiSource.EDUAPPBACKEND)

const get_restrict_info = params => getFetch(PATH.EDU_APP_RESTRICT_INFO, params, ApiSource.EDUAPPBACKEND)

// const movieCommentList = params => getFetch(PATH.MOVIE_COMMENT_LIST, params, ApiSource.TIMETICKET)

const register = params =>  postFetchForValidator(PATH.MUSIC_ID_LIST, params)
// const register = params =>  getFetch(PATH.EDU_APP_REG, params)

const loginValidator = () => ({
  validator: {
    data: ValidateUtil([
      {
        func: (params, state, payload) => Required(params.userName), msg: '请输入用户名'
      },
      {
        func: (params, state, payload) => Required(params.password), msg: '请输入密码'
      }
    ])
  }
})

const registerValidator = () => ({
  validator: {
    data: ValidateUtil([
      {
        func: (params, state, payload) => Required(params.userName), msg: '请输入手机号'
      },
      {
        func: (params, state, payload) => RegExpr.checkMobile(params.userName), msg: '手机号格式不正确'
      },
      {
        func: (params, state, payload) => Required(params.code), msg: '请输入验证码'
      },
      {
        func: (params, state, payload) => Required(params.password), msg: '请输入密码'
      }
    ])
  }
})

export default {
  login,
  login_curl,
  register,
  loginValidator,
  registerValidator,
  get_restrict_info
}