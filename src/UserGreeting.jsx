

function UserGreeting(props){
    
    if(props.IsloggedIN)
        {
           return( 
           <div><h3>Welcome {props.name}</h3></div>)
        }
        return <h3> Please login </h3>

}

export default UserGreeting