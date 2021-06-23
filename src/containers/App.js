import React, {useState,useEffect} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import 'tachyons';
import "./App.css";

function App(){

    const [robots,setRobots] = useState([]);
    const [searchField,setSearchField] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then((users)=>{setRobots(users)});
    },[]);
    
    const searchFieldChange=(event)=>{
        setSearchField(event.target.value);
    }

        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onSearchChange={searchFieldChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll> 
            </div>
        )
}

export default App;