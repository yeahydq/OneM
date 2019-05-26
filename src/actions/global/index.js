/**
 * Created by guangqiang on 2017/10/12.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import actions from '../../actionCreators/global'

const getGlobalConfig = createAction(type.APP_CONFIG, actions.getGlobalConfig)

const actionCreators = {
    getGlobalConfig,
}

export default {actionCreators}