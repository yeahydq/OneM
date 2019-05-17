/**
 * Created by guangqiang on 2017/8/29.
 */
// export default loggerMiddleware = () => {
//   return ({getState, dispatch}) => next => action => {
//     // console.log('before dispatch state:', getState())
//     // console.log('action:', action)
//     next(action)
//     // console.log('after dispatch state:', getState())
//   }
// }

export default loggerMiddleware = () => {
  return ({getState, dispatch}) => next => action => {
    console.log('before dispatch state:', getState())
    if (typeof action === 'function') {
      console.log('dispatching a function: ', action);
    } else {
        console.log('dispatching: ', action);
    }
    result = next(action)
    console.log('after dispatch state:', getState())
    return result
  }
}
