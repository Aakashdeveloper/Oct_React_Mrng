import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews} from '../actions';
import LatestDisplay from '../component/Home/Latest_Display';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
            </div>
        )
    }
}

//receive state from store
function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article
    }
}

// provide dispatch to call action
Home.protoTypes = {
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home);