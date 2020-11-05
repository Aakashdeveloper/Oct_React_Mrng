import React from 'react';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/post" component={Post}/>
                <Route path="/details/:topic" component={PostDetails}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/lifeCycle" component={LifeCycle}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;