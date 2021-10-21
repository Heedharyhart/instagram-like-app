import React from 'react'
import Feeds from '../../components/Feeds/Feeds';
import './newhome.css'
import Suggestions from '../../components/Suggestions/Suggestions';

const NewHome = () => {
    return (
        <div className="div-newhome">
           <Feeds/>
           <Suggestions/>
        </div>
    )
}

export default NewHome;
