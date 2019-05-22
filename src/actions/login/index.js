/**
 * Created by guangqiang on 2017/11/14.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import ActionCreator from '../../actionCreators/me'

// Dick:  https://segmentfault.com/a/1190000007041693  # createAction part
          //   1） actionType: string,
          //   2） payloadCreator: ActionFunctionAny<Payload>  => the function used to get the data
          //   3） metaCreator: ActionFunctionAny<Meta>   => same input function as payload_creator, 接收同样的参数,但是他的返回值会做为action中meta字段的值

// if loginValidator is not pass, it won't trigger login
const mockLogin = createAction(type.MOVIE_LIST, ActionCreator.login, ActionCreator.loginValidator)
// const eduAppLogin = createAction(type.EDU_APP_LOGIN, ActionCreator.login, ActionCreator.loginValidator)
const eduAppLogin = createAction(type.EDU_APP_LOGIN, ActionCreator.login)

const eduAppReg = createAction(type.EDU_APP_REG, ActionCreator.login, ActionCreator.loginValidator)

// const eduAppLogin = createAction(type.EDU_APP_REG, ActionCreator.login)
const eduAppLoginCurl = createAction(type.EDU_APP_REG, ActionCreator.login_curl)

const actionCreators = {
  mockLogin,
  eduAppLogin,
  eduAppReg,
  eduAppLoginCurl,
}

export default {actionCreators}