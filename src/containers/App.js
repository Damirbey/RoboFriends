import React, {useEffect} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { setSearchField , requestRobots } from "../actions/actions";
import {connect} from 'react-redux';
import 'tachyons';
import "./App.css";

const mapStateToProps = (state)=>{
    return {
        searchField:state.searchRobots.searchField,
        robots:state.getRobots.robots,
        isPending:state.getRobots.isPending,
        error:state.getRobots.error
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange : (event)=>dispatch(setSearchField(event.target.value)),
        requestRobots:()=>dispatch(requestRobots())
    }
}

function App(props){

    const {searchField,onSearchChange,robots,requestRobots} = props;

    useEffect(()=>{
        requestRobots();
    },[requestRobots]);
    
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