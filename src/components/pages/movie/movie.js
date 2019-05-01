/**
 * Created by guangqiang on 2017/9/4.
 */
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import Action from '../../../actions'
import {commonStyle} from '../../../utils/commonStyle'
import {SegmentedControl} from 'antd-mobile'
import ShowTimeList from './showTime/showTimeList'
import ComingNewList from './comeingNew/comeingNewList'
class MovieList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      hasMore: true,
      showTimeList: [],
      comeingNewList: [],
      attentionList: [],
      selectedTab: '正在热映'
    }
  }

  componentDidMount() {
    // getMovieShowTimeList is from src/actions/movie/index.js, seems auto be added to props by the reduce?
    // getMovieShowTimeList is the action(src/actions/movie/index.js) -> reducer(src/reducers/movie/movieList.js)
    Promise.all([this.props.getMovieShowTimeList(), this.props.getMovieComeingNewList()]).then(response => {
      this.setState({
        showTimeList: response[0].value.ms,             // https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290
        comeingNewList: response[1].value.moviecomings, // https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
        attentionList: response[1].value.attention      // https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
      })
      // console.log('Debug: response',response[1])
    })

    // use LogCat - emulatorxxx to chk
    console.log('Dick: this props:', this.props)
    console.log('Dick: this state:', this.state)
    // console.log('Dick: store state:', store.getState())


  }

  onValueChange = (value) => {
    this.setState({selectedTab: value})
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.navBarStyle}>
          <View style={styles.segContainer}>
            <SegmentedControl
              style={styles.tabStyle}
              selectedIndex={0}
              values={['正在热映', '即将上映']}
              onValueChange={(value)=> this.onValueChange(value)}
            />
          </View>
        </View>
        {
          this.state.selectedTab === '正在热映' ?
            <ShowTimeList dataArr={this.state.showTimeList}/> :
            <ComingNewList comingNewArr={this.state.comeingNewList} attentionArr={this.state.attentionList}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: commonStyle.white,
  },
  navBarStyle: {
    height: commonStyle.navHeight,
    backgroundColor: '#151C28',
  },
  segContainer: {
    marginTop: commonStyle.navStatusBarHeight,
    height: commonStyle.navContentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabStyle: {
    width: 180
  },
})

  // 1) STORE(state.movie.movieList) is controled by the reducers(src/reducers/movie/movieList.js)
  // 2) this.state is defined in UI componment(MovieList)
  // 3) props(this.props.getMovieShowTimeList()) seems controled by below dispatch action

  const _MovieList = connect(
  (state) => state.movie.movieList,

  Action.dispatch('movie')
        //    Action.dispatch('movie')
        // -> src/actions/index.js
        // -> src/actions/movie/index.js 
        // -> src/actionCreators/movie/index.js (Real actions)
)(MovieList)

// Dick: Below is for debug
import store from '../../../store'
console.log('Dick: store state:', store.getState())

export default _MovieList