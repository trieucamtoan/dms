import {Component} from 'react';

class MessageController extends Component {
    accept(message){
        //Determine message type
        console.log("Message Controller Return Message : ", message)
        if (message === null || message === undefined){
            console.log("Returning in here")
            return false
        }
        //Handle PUT request with empty response
        else if (message.status === 200){
            return true
        }
        else if (message.status === 400){
            return false
        }

        //Handling error 405 Method Not Allowed, 403 Forbidden

        //Handling GET request and error request
        else {
            return message
        }
    }
}
//Using new operator so we can access function inside the class from outside
export default new MessageController();