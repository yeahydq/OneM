/**
 * Created by guangqiang on 2017/11/14.
 */
import type from '../../constants/actionType'
import {handleActions} from 'redux-actions'

const initialState = {
    userId: [],
    userName: [],
    auth_token: [],
  }

const originalReducers = {}

originalReducers[type.EDU_APP_LOGIN + type.FETCH_SUCCESS_SUFFIX] = (state, action) => {
    return {
      ...state,
      auth_token: action.payload.auth_token
    }
  }

//   originalReducers[type.MOVIE_COMEING_NEW_LIST + type.FETCH_SUCCESS_SUFFIX] = (state, action) => {
//     return {
//       ...state,
//       comeingNewList: action.payload.moviecomings,
//       attentionList: action.payload.attention
//     }
//   }
  
//   originalReducers[type.MOVIE_TRAILER_LIST + type.FETCH_SUCCESS_SUFFIX] = (state, action) => ({
//     ...state,
//     trailerList: action.payload.videoList
//   })
  
  const reducer = handleActions(originalReducers, initialState)
  
  export default reducer