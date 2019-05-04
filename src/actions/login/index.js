/**
 * Created by guangqiang on 2017/11/14.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import ActionCreator from '../../actionCreators/me'

// Dick:  https://segmentfault.com/a/1190000007041693  # createAction part
          //   1） actionType: string,
          //   2） payloadCreator: ActionFunctionAny<Payload>  => the function used to get the data
          //   3） metaCreator: ActionFunctionAny<Meta>   => validate the parameters before get the data?
const mockLogin = createAction(type.MOVIE_LIST, ActionCreator.login, ActionCreator.loginValidator)
// const mockLogin = createAction(type.MOVIE_LIST, ActionCreator.login)
const eduAppLogin = createAction(type.EDU_APP_REG, ActionCreator.login, ActionCreator.loginValidator)

const actionCreators = {
  mockLogin,
  eduAppLogin,
}

export default {actionCreators}