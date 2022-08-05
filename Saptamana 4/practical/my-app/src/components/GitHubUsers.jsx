import React, { Component } from 'react';

class GitHubUsers extends Component {


    constructor(){
        super();
        this.state = {users:[]};
        console.log("Constructor !"); 
    }

    async componentDidMount(){
        console.log("Component Did Mount !");
        
        //imi aduc date dintr-un api
        try{
        // const res = await fetch("https://jsonplaceholder.typicode.com/users");
        //  const res = await fetch("https://api.github.com/users");
        const res = await fetch("https://api.github.com/users");
        const users = await res.json();
        this.setState({users: users});
        }catch (error){
            console.log(error)
        }
    }

    // componentDidUpdate(){
    //     console.log("Component Did Update !");  
    // }

    render() {
        console.log("Render !");
        const {users} = this.state;
       
        // return <div> { users.length > 0 && <h1> {users[0].login} </h1> } </div>; 
         return <div> { users.length > 0 ? users[0].login : "No user available" } </div>; 
        //randare conditionala doar daca userul este diferit de null
    }
}
 
export default GitHubUsers;