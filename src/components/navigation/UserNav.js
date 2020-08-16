import React from 'react';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router';

export default function UserNav() {
    return (
        <div className="navbar-nav mr-auto">
            <Link to = '/logout' className="nav-link">Logout</Link>
        </div>
    )
}