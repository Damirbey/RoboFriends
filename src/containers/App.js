import React, {Component} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import 'tachyons';
import "./App.css";

class App extends Component{

    constructor(){
        super();
        this.state = {
            robots:[],
            searchField:""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then((users)=>{this.setState({robots:users})});
    }
    searchFieldChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onSearchChange={this.searchFieldChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll> 
            </div>
        )
    }


}

export default App;