import React, { useEffect, useState } from 'react';


const GitHubUsersFunctional = () => {
    const [users, setUsers] = useState([]);

    useEffect(  ()=> { 
        console.log("inainte de async");
        async function fetchMyAPI() {
            console.log("fetchMyAPI");
            try {
                const res = await fetch("https://api.github.com/users");
                const user = await res.json();
                setUsers(user);
                }catch(error){
                    console.log(error);
                }
        }  
        console.log("inainte");
        fetchMyAPI();
        console.log("dupa");
    }, []);


    return (
        <div >
             { users.length > 0 ?
                    users.map((user) => (
                        <div key = {user.id}> 
                            <h5>{user.login}</h5>
                            <img width={100} src={user.avatar_url}/>
                        </div>
                    )) : 
                    "No user available" } 
        </div>    
    )
}

export default GitHubUsersFunctional;