import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews} from '../actions';
import LatestDisplay from '../component/Home/Latest_Display';
import ArticleDisplay from '../component/Home/Article_Display';
import GalleryDisplay from '../component/Home/Gallery_Display';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
                <ArticleDisplay adata={this.props.datalist.articleNews}/>
                <GalleryDisplay gdata={this.props.gallist.galleryNews}/>
            </div>
        )
    }
}

//receive state from store
function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

// provide dispatch to call action
Home.protoTypes = {
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home);