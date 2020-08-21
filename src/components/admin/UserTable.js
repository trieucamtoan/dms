import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import RequestServer from '../../requests/RequestServer';
import MessageController from '../../responses/MessageController';
import cellEditFactory from 'react-bootstrap-table2-editor';
import * as ReactBootstrap from "react-bootstrap";

const UserTable = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    //const privilleges = localStorage.getItem('privilleges');

    
    const getUserData = async() => {
        // var response = await RequestServer.getAllUsers(token)
        // var message = MessageController.accept(response)
        // if (message){
        //     setUsers(response.data)
        //     setLoading(true);
        // }
        // console.log("message: ", message)
        setUsers(props.parentUsers);
        setLoading(true);
    }

    const updateAUserInfo = async (oldValue, newValue, row, column) => {
        if (oldValue !== newValue){
            var userId = row.id
            if (column.dataField === "userName"){
                var userName = newValue
                var response = await RequestServer.updateUserUserName(token, userId, userName)
                var message = MessageController.accept(response)
                if (message){
                    console.log("i'm here")
                    // console.log("Row: ", row)
                    // console.log("Column: ", column)
                    // console.log(props.updateParentUserList(row));
                    //console.log(row)
                    // this.props.updateParentUserList(users)
                    // setUsers(response.data)
                    // setLoading(true);
                }
            }
            //Update user email
            if (column.dataField === "email"){
                var userEmail = newValue
                var response = await RequestServer.updateUserEmail(token, userId, userEmail)
                var message = MessageController.accept(response)
                if (message){
                    console.log("i'm here")
                    // setUsers(response.data)
                    // setLoading(true);
                }
            }
            else if(column.dataField === "password"){
                console.log("Hi")
            }
            else {
                console.log("hello")
            }
        }
    }

    const columns = [
        {dataField: "id", text: "id"},
        {dataField: "userName", text: "User Name"},
        // {dataField: "password", text: "Password"},
        {dataField: "email", text: "Email"},
        {dataField: "enabled", text: "Active", editable: false}
        // {dataField: "actions", text: "Actions"}
    ]

    useEffect(() => {
        getUserData();
    });
    
    return (
        <div className = "App">
            {loading ? 
            (
                <BootstrapTable
                keyField = "id"
                data = {users}
                columns = {columns}
                pagination = {paginationFactory()}
                cellEdit={cellEditFactory({
                    mode: 'dbclick',
                    // onStartEdit: (row, column, rowIndex, columnIndex) => { 
                    //     console.log('start to edit!!!'); 
                    // },
                    beforeSaveCell: (oldValue, newValue, row, column) => { 
                        updateAUserInfo(oldValue, newValue, row, column);
                    }
                    // afterSaveCell: (oldValue, newValue, row, column) => { 
                    //     console.log('After Saving Cell!!'); 
                    // }
                })}
                />
            ) : (
                <ReactBootstrap.Spinner animation = "border"/>
            )
        }
            
        </div>
        )
}

export default UserTable;