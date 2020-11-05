//Get Initial Stage
//Set Initial State
//Before Get Created
//render
//After Get Created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1 Get Initial State
    constructor(props){
        super()

        //2 Set Initial State
        this.state={
            title:'Life Cycle'
        }

        console.log(">>>>>>> stage 1 and 2 ")
    }

    //3 Before Get Created
    UNSAFE_componentWillMount(){
        console.log(">>>>>>> 3 inside componentWillMount")
    }

    //componentWillUpdate componentDidlUpdate 
    componentWillUpdate(){
        console.log(">>>>>>> inside componentWillUpdate")
    }

    componentDidUpdate(){
        console.log(">>>>>>> inside componentDidUpdate")
    }

    static getDerivedStateFromProps(props,state){
        console.log(">>>>>>> inside getDerivedStateFromProps props",props)
        console.log(">>>>>>> inside getDerivedStateFromProps state",state)
    }

    //shouldComponentUpdate
    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>>>> inside shouldComponentUpdate")
        if(nextState.title == this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 render
    render(){
        console.log(">>>>>>> stage 4")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success" onClick={()=>{this.setState({title:'Something Else'})}}>
                    Click Me
                </div>
            </div>
            
        )
    }

    //5 After Get Created 
    componentDidMount(){
        console.log(">>>>>>> 4 inside componentDidMount")
    }

    //componentWillUnmount
    componentWillUnmount(){
        alert("Do You Want to leave")
    }


}


export default LifeCycle;