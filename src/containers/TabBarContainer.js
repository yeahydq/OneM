/**
 * Created by guangqiang on 2017/9/4.
 */
import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Picture from '../components/pages/picture/picture'
import Reading from '../components/pages/reading/reading'
import Music from '../components/pages/music/music'
import Movie from '../components/pages/movie/movie'
import Me from '../components/pages/me/me'
import {Icon} from '../utils/icon'
import {commonStyle} from '../utils'
import deviceInfo from '../utils/deviceInfo'


export default class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // selectedTab: 'Movie'
      selectedTab: 'Me'
    }
  }

  // Dick: update it according to https://www.jianshu.com/p/9b1f84b72039
  _renderTabarItems(title, selectedTab,iconName,Component){
    return (
      <TabNavigator.Item
          selected={this.state.selectedTab === selectedTab}  
          title={title} 
          titleStyle={styles.tabText}  
          selectedTitleStyle={styles.selectedTabText}  
          renderIcon={() => <Icon name={iconName} size={20} color={commonStyle.textGrayColor}/>}
          renderSelectedIcon={() => <Icon name={iconName} size={20} color={commonStyle.black}/>}
          onPress={() => this.setState({ selectedTab: selectedTab })}
      >
          <Component />
      </TabNavigator.Item>
    )

  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator
            tabBarStyle={{height: commonStyle.tabBarHeight, paddingBottom: deviceInfo.isIphoneX ? 34 : 0}}
        >
          {this._renderTabarItems('电影','Movie', 'oneIcon|tb_Movie_o',Movie)}
          {this._renderTabarItems('音乐','Music', 'oneIcon|tb_Music_o',Music)}
          {this._renderTabarItems('图文','Picture', 'oneIcon|tb_Picture_o',Picture)}
          {this._renderTabarItems('阅读','Reading', 'oneIcon|tb_article_o',Reading)}
          {this._renderTabarItems('我的','Me', 'oneIcon|tb_mine_o',Me)}
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    fontSize: 11,
    color: commonStyle.textGrayColor,
    marginBottom: 5
  },
  selectedTabText: {
    fontSize: 11,
    color: commonStyle.black,
    marginBottom: 5
  }
})