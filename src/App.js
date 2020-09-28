import React from 'react';
import {Provider} from 'react-redux';
import { configureStore } from "./core/configureStore";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import LogIn from "./components/User/LogIn";
import MovieBox from "./components/MovieBox";
import EditMovie from "./components/EditMovie";
import ProtectedRoute from "./components/ProtectedRoute";
import Actor from "./components/Actor";
import Register from "./components/User/Register";
import './App.css';

const store = configureStore();

const App = () =>(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <ProtectedRoute path='/movie/:id' component={MovieBox} />
                        <ProtectedRoute path='/actor/:id' component={Actor} />
                        <ProtectedRoute path='/edit/:id' component={EditMovie} />
                        <Route path='/login' component={LogIn} />
                        <Route path='/register' component={Register} />
                        <Redirect to='/home'/>
                    </Switch>
                    <div className="footer">
                        created by Anastasia Gordienko
                    </div>
                </BrowserRouter>
            </Provider>
);

export default App;
