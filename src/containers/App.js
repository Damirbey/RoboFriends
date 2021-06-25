import React, {useState,useEffect} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { setSearchField } from "../actions/actions";
import {connect} from 'react-redux';
import 'tachyons';
import "./App.css";

const mapStateToProps = (state)=>{
    return {
        searchField:state.searchField
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange : (event)=>dispatch(setSearchField(event.target.value))
    }
}

function App(props){

    const [robots,setRobots] = useState([]);
    const {searchField,onSearchChange} = props;

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then((users)=>{setRobots(users)});
    },[]);
    
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onSearchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll> 
            </div>
        )
}

export default connect(mapStateToProps,mapDispatchToProps)(App);