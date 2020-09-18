import React from 'react';
import './App.css'

import {Provider} from 'react-redux'
import { configureStore} from "./core/configureStore";
import HomePage from "./components/HomePage";

const store = configureStore();

const App = () =>{
        return (
            <Provider store={store}>
                <HomePage />
            </Provider>
        )
}

export default App;
