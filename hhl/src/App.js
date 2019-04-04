import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'src/redux/reducers';
import './mockData.js';


import VerificationIndex from 'src/page/verification/index/index';
import VerificationError from 'src/page/verification/error/error';
import VerificationMore from 'src/page/verification/more/more';
import VerificationFake from 'src/page/verification/fake/fake';
import VerificationFail from 'src/page/verification/fail/fail';
import real from 'src/page/real/real';
import luckyDraw from 'src/page/luckydraw/luckydraw';
import './App.css';
import 'src/assets/css/common.css';
import 'src/assets/js/flexable.js';

import { Context } from './context.js';

const store = createStore(rootReducer);

class App extends Component {

  render() {
    // console.log(store.getState())
    return (
      <Provider store={store}>
        <Context.Provider>
          <Router>
            <Switch>
              <Route exact path="/" component={VerificationIndex}></Route>
              <Route exact path="/VerificationMore" component={VerificationMore}></Route>
              <Route exact path="/VerificationError" component={VerificationError}></Route>
              <Route exact path="/VerificationFake" component={VerificationFake}></Route>
              <Route exact path="/VerificationFail" component={VerificationFail}></Route>
              <Route exact path="/real" component={real}></Route>
              <Route exact path="/luckyDraw" component={luckyDraw}></Route>
            </Switch>
          </Router>
        </Context.Provider>
      </Provider>
    );
  }
}


export default App;