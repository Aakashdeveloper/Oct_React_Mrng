import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>My React App</h1>
            <p>This is React App for Learning</p>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));