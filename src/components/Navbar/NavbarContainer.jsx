import React from 'react';
import s from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Message from "../Dialogs/Message/Message";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {addPosActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";



let mapStateToProps = (state) => {
    return {
        state: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar);

export default NavbarContainer;