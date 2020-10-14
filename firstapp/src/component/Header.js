import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'My React App',
            keyword:'User Text Here'
        }
    }

    handleChange = (event)=>{
        //console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        let {title} = this.state;
        return(
            <Fragment>
                <header>
                    <div className="logo">{title}</div>
                    <center>
                        <input type="text" onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
             </Fragment>
        )
    }
    
}
export default Header;