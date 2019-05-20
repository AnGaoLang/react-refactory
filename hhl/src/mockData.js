import Mock from 'mockjs';
import FetchMock from 'fetch-mock';

// Mock.mock('/Home\/init/', 'get', {
//   'list|8': [{
//     'name': '@city',
//     'number|1-100': 100
//   }]
// })
// FetchMock.get('/Home\/init/', Mock.mock({
//   'list|8': [{
//     'name': '@city',
//     'number|1-100': 100
//   }]
// }));
const response = Mock.mock({
  'list|8': [{
    'name': '@city',
    'number|1-100': 100
  }]
});
FetchMock.once('/Home\/init/', () => {
  return response;
});
// 其他路由使用原生fetch，这段代码必须放最后
FetchMock.once('*', (url, options) => {
  FetchMock.restore();
  return fetch(url, options);
});