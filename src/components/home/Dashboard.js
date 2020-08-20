import React from 'react';
import RequestServer from '../../requests/RequestServer';
import MessageController from '../../responses/MessageController';

export default function Dashboard() {
    
    async function buttonHandler() {
        var token = localStorage.getItem('token');
        if (token !== null || token !== ""){
            var response = await RequestServer.getAllUsers(token)
            var message = MessageController.accept(response)
            console.log("message: ", message)
        }
        
    }

    return (
        <>
            <p>This is private Dashboard</p>
            <button onClick = {() => {buttonHandler()}}>Get alll users</button>
        </>
    )
}