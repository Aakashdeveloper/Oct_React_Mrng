import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataAsPerFilter(sortedData){
        this.setState({hotellist:sortedData})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                   <RoomFilter roomperType={(data) => {this.setDataAsPerFilter(data)}}/>
                   <CostFilter costperType={(data) => {this.setDataAsPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay listData={this.state.hotellist}/>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props);
        sessionStorage.setItem('tripid',this.props.match.params.id)
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => { 
            this.setState({hotellist:response.data})
        })
    }

}

export default Listing;