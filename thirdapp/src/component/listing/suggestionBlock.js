import React,{Component} from 'react';
import axios from 'axios';
import SuggestionDisplay from './suggestionDisplay';

var url = "https://developerfunnel.herokuapp.com/hotels?city="

class SuggestBlock extends Component{
    constructor(){
        super()

        this.state={
            suggestion:''
        }
    }

    render(){
        return(
            <div>
                <SuggestionDisplay sudata={this.state.suggestion}/>
            </div>
        )
    }

    componentDidMount(){
        let weather = sessionStorage.getItem('currentWeather');
        weather = Number(weather);
        let surl;
        if(weather>27){
            surl = `${url}6`
        }else{
            surl = `${url}5`
        }
        axios.get(`${surl}`)
        .then((response) => {this.setState({suggestion:response.data})})
    }
}

export default SuggestBlock;