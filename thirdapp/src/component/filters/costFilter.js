import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{

    filterCost = (e) => {
        let costType = (e.target.value).split(',');
        let lcost = Number(costType[0]);
        let hcost = Number(costType[1]);
        let TripType = sessionStorage.getItem('tripid');
        let rrurl;
        if(costType==""){
            rrurl = `${rurl}/${TripType}`
        }else{
            rrurl = `${rurl}/${TripType}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(rrurl)
        .then((response)=>{this.props.costperType(response.data)})

        
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Filter</center>
                <div onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="room"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,9000" name="room"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001,20000" name="room"/>9001-20000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter