/**
 * Created by guangqiang on 2017/8/30.
 */
const host = {
  dev: {
    API_URL: 'https://api.douban.com',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    TIME_MOVIE_URL: 'https://api-m.mtime.cn',
    TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    EDUAPPBACKEND_URL : 'http://127.0.0.1:5000',
  },
  alpha: {
    API_URL: 'http://api.xxx.com',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    TIME_MOVIE_URL: 'https://api-m.mtime.cn',
    TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
    MSITE_URL: 'http://m.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com',
    EDUAPPBACKEND_URL : 'http://127.0.0.1:5000',
  },
  qa: {
    API_URL: 'http://api.xxx.com',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    TIME_MOVIE_URL: 'https://api-m.mtime.cn',
    TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
    MSITE_URL: 'http://m.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com',
    EDUAPPBACKEND_URL : 'http://127.0.0.1:5000',
  },
  pre: {
    API_URL: 'http://api.xxx.com',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    TIME_MOVIE_URL: 'https://api-m.mtime.cn',
    TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
    MSITE_URL: 'http://m.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com',
    EDUAPPBACKEND_URL : 'http://192.168.2.238:5000',
  },
  prd: {
    API_URL: 'http://v3.wufazhuce.com:8000/api',
    // API_URL: 'http://127.0.0.1:5000',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    TIME_MOVIE_URL: 'https://api-m.mtime.cn',
    TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
    MSITE_URL: 'http://m.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com',
    EDUAPPBACKEND_URL33 : 'https://api-m.mtime.cn',
    EDUAPPBACKEND_URL : 'http://192.168.2.238:500011',
  }
}
// ifconfig | grep inet\ | tail -1 | cut -d " " -f 2


let ENV = 'prd'
let currentHost = host[ENV]

const setHost = (env = 'dev') => {
  ENV = env
  currentHost = host[ENV]
}

const API_URL = currentHost.API_URL
const MSITE_URL = currentHost.MSITE_URL
const VENILOG_URL = currentHost.VENILOG_URL
const MIAMI_URL = currentHost.XIAMI_URL
const TIME_MOVIE_URL = currentHost.TIME_MOVIE_URL
const TIME_TICKET_URL = currentHost.TIME_TICKET_URL
const EDUAPPBACKEND_URL = currentHost.EDUAPPBACKEND_URL

export {
  ENV, 
  API_URL, 
  MSITE_URL, 
  VENILOG_URL, 
  MIAMI_URL, 
  TIME_MOVIE_URL, 
  TIME_TICKET_URL, 
  EDUAPPBACKEND_URL, 
  setHost
}
