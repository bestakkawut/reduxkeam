import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
// import './style/reset.css'
import App from './App';
// import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log('store update : ',store.getState());
    
})


const MyApp = () =>(
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
