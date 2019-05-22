/**
 * Created by guangqiang on 2017/10/12.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import actions from '../../actionCreators/me'

const eduAppLogin = createAction(type.EDU_APP_LOGIN, actions.login)
const get_restrict_info = createAction(type.GET_RESTRICT_INFO, actions.get_restrict_info)

const actionCreators = {
    eduAppLogin,
    get_restrict_info,
}

export default {actionCreators}