import DataStore from '../../utils/network/request/DataStore'

const getGlobalConfig = params => {
  let url = `https://s3.ap-east-1.amazonaws.com/eduappgz/urls.json`;
  dataDtore = new DataStore()
  dataStore.fetchData(url)
      .then(data => {
          let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
          this.setState({
              showText: showData
          })
      })
      .catch(error => {
          error && console.log(error.toString());
      })
}

export default {
  getGlobalConfig
}