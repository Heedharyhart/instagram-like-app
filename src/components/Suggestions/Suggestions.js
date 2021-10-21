import React, {Component} from 'react';
import User from '../User/User'; 

class Suggestions extends React.Component {
    state= {
        users:null,
    }

    async componentDidMount(){
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await resp.json()
        this.setState({users:users});
    }
    render() {
        const {users}=this.state
        return (
            <div style={{width:'30%', alignSelf:'flex-start', display:'flex',flexDirection:'column',marginLeft:'5px'}}>
                <div style={{fontWeight:'bold', color:'silver', marginButtom:'10px'}}>Suggestions For You</div>
                {
                    users && 
                    users.map(({...user}) => <User key={user.id} {...user}/>)
                }
            </div>
        )
    }
}

export default Suggestions;
