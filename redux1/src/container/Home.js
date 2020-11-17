import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions';
import PropTypes from 'prop-types';
import DisplayMovies from '../component/DisplayMovies';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayMovies datalist={this.props.mydata}/>
            </div>
        )
    }
}

//to receive data from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home)