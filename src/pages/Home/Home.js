import React  from "react";
import Header from "../../components/Header/Header";
import {Switch, Route} from "react-router-dom";
import NewHome from "../NewHome/NewHome";
import Explore from "../Explore/Explore";
import Profile from "../../components/Profile/Profile";

const Home = ({handleLogged}) => {
    return(
        <div>
        <Header isLogged={handleLogged}/>
         <Switch>
            <Route exact path="/instagram-like-app" component={NewHome}/>
            <Route exact path="/explore" component={Explore}/>
            <Route exact path="/:username" component={Profile}/>

        </Switch>
        </div>
    )
}


export default Home;