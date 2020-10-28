import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const locationurl = "https://developerfunnel.herokuapp.com/location";
const hotelurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(props){
        super()

        this.state={
            location:'',
            hotel:''
        }
        console.log("in constructor")
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.city_name}
                    </option>
                )
            })
        }
    }

    handleCity=(event) => {
        console.log(event.target.value)
        fetch(`${hotelurl}${event.target.value}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({hotel:data})
        })
    }

    handleHotel = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>-----SELECT CITY------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>-----SELECT HOTEL------</option>
                        {this.renderHotel(this.state.hotel)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(locationurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            this.setState({location:err})
        })
       
    }
}

export default withRouter(Search);