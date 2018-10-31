import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
// import { HashRouter, Route } from 'react-router'
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// const reducer = (state=0,action) =>{
//     switch(action.type){
//         case "INC":
//             return state += action.payload
//         case "DEC":
//             return state -= 1
//         default:
//     }
// }

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log('store update : ',store.getState());
    
})

// store.dispatch({
//     type:"INC",
//     payload:500
// })

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
