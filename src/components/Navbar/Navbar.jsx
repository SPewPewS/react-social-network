import React from 'react';
import s from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Message from "../Dialogs/Message/Message";
import MyButton from "../common/Button/MyButton";


const Navbar = (props) => {

    let friendsElements = props.state.map(friends => <Sidebar friends={friends.name} /> )


    return (<nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' style={({isActive}) => ({color: isActive ? 'white' : '' })}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={({isActive}) => isActive ? s.activeLink : ''}>Users</NavLink>
            </div>

            <div>

                <div className={s.friendsList}>
                    <h3 className={s.friends }>Friends</h3>
                    <div className={s.friendsShow}>
                {friendsElements}
                    </div>
                </div>
            </div>



        </nav>

    );
}

export default Navbar;