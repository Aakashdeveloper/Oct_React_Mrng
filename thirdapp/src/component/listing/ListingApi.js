import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filter
                </div>
                <div className="col-md-10">
                    <ListingDisplay listData={this.state.hotellist}/>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props);
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => { 
            this.setState({hotellist:response.data})
        })
    }

}

export default Listing;