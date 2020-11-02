import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';
import SuggestBlock from './suggestionBlock';

const url = "https://developerfunnel.herokuapp.com/hotellist";

var limit =4
class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:'',
            activePage:1,
            totalNoOfItems:1
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
                    <SuggestBlock/>
                    <ListingDisplay listData={this.state.hotellist} activePage={this.state.activePage} limit={limit} totalNoOfItems={this.state.totalNoOfItems} pageNumber={(data) => {this.setState({activePage:data})}}/>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props);
        sessionStorage.setItem('tripid',this.props.match.params.id)
        //axios.get(`${url}/${this.props.match.params.id}`)
        fetch((`${url}/${this.props.match.params.id}`))
        .then((res) => res.json())
        .then((data) => { 
            this.setState({
                hotellist:data.slice(0,data.length-1),
                totalNoOfItems:data.length-1
            })
        })
    }

}

export default Listing;