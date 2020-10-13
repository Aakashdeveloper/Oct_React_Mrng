import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>My React App</h1>
            <p>This is React App for Learning</p>
            <Footer year="2020" month="Oct"/>
        </React.Fragment>
    )
}

export default Home;