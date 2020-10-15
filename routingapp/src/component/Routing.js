import React from 'react';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import {BrowserRouter,Route,Link} from 'react-router-dom';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/post">Post</Link>
                    <Link to="/profile">Profile</Link>
                </header>
                <Route exact path="/" component={Home}/>
                <Route path="/post" component={Post}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;