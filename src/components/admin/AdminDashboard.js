import React, { useState, useEffect } from 'react';
import RequestServer from '../../requests/RequestServer';
import MessageController from '../../responses/MessageController';
import UserTable from './UserTable';
import AddUser from './AddUser';
import AddUserModal from './AddUserModal';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');
    
    const getUserData = async() => {
        var response = await RequestServer.getAllUsers(token)
        var message = MessageController.accept(response)
        if (message){
            setUsers(response.data)
        }
        console.log("message: ", message)
    }

    const updateUserList = (user) => {
        
        setUsers({
            ...users, 
            user
        })
    }


    useEffect(() => {
        getUserData();
    }, []);

    console.log("USERS FROM PARENT COMPONENT " ,users);
    return (
        <div align = "center">
            <h2 >List of Users</h2>
            {/* <AddUser updateParentUserList = {updateUserList} /> */}
            <AddUserModal/>
            <UserTable parentUsers = {users} updateParentUserList = {updateUserList}/>
        </div>
        )
}

export default AdminDashboard;