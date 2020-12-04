import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from "./component/header";
import {Home, Feature, About} from './pages'

function App() {
    return (
        <div className="app">
            <div className="browser">
                <Header/>
                <div className="viewport">
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/features">
                            <Feature/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
