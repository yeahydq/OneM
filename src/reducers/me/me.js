/**
 * Created by guangqiang on 2017/10/12.
 */
import type from '../../constants/actionType'
import {handleActions} from 'redux-actions'

const initialState = {
    restrictInfo: [],
  }

const originalReducers = {}

originalReducers[type.GET_RESTRICT_INFO + type.FETCH_SUCCESS_SUFFIX] = (state, action) => {
  return {
    ...state,
    restrictInfo: action.payload ? (action.payload.data ? action.payload.data : undefined) : undefined
  }
}

originalReducers[type.GET_RESTRICT_INFO + type.FETCH_ERROR_SUFFIX] = (state, action) => {
  return {
    ...state
  }
}

  
const reducer = handleActions(originalReducers, initialState)

export default reducer