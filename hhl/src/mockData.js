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
FetchMock.mock('*', () => {
  return response
})