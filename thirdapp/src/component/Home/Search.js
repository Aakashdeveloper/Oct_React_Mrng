import React,{Component} from 'react';
import './Search.css';

const locationurl = "https://developerfunnel.herokuapp.com/location"

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:''
        }
        console.log("in constructor")
    }
    render(){
        console.log("in render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>-----SELECT CITY------</option>
                    </select>
                    <select className="reataurantsinput">
                        <option>-----SELECT HOTEL------</option>
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log("in componentDidMount")
    }
}

export default Search