import {Component} from 'react';
import axios from 'axios';

const getServerLocation = () => {
    return 'http://localhost:8080'
}

class RequestServer extends Component{

    async register(user){
        try {
            var response = await axios.post(getServerLocation() + '/register', user)
            return response
        }
        catch (error){
            console.log(error)
            return null
        }
    }

    async login(user){
        try {
            var response = await axios.post(getServerLocation() + '/login', user)
            return response
        }
        catch (error){
            console.log(error)
            return null
        }
    }

    async getAllUsers(token) {
        try {
            var response = await axios.get(getServerLocation() + '/user/all', {
            headers: {
                'Authorization' : `Bearer ${token}`
            }})
            return response
        }
        catch (error){
            console.log(error)
            return null
        }
    }

    async updateUserUserName(token, id, username){
        try {
            var response = await axios.put(getServerLocation() + '/user/' + id + '/username', username, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }})
            return response
        }
        catch(error){
            console.log(error)
            return null
        }
    }

    async updateUserEmail(token, id, email){
        try {
            var response = await axios.put(getServerLocation() + '/user/' + id + '/email', email, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }})
            return response
        }
        catch(error){
            console.log(error)
            return null
        }
    }

    async updateUserPassword(token, id, password){
        try {
            var response = await axios.put(getServerLocation() + '/user/' + id + '/password', password, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }})
            return response
        }
        catch(error){
            console.log(error)
            return null
        }
    }
}
//Using new operator so we can access function inside the class from outside
export default new RequestServer();

