import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/HomeComponent';
import Header from './Header';
import Footer from './Footer';
import ListingApi from './listing/ListingApi';
import HotelDetails from './Details/hotelDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path='/' component={Home}/>
                    <Route path="/list/:id" component={ListingApi}/>
                    <Route path="/details/:id" component={HotelDetails}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;