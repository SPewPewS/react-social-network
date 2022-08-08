import './App.css';
import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Routes} from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import FormTest from "./components/Test/FormTest/FormTest";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

                <div>
                    <HeaderContainer/>
                    <div className='container '>
                        <div className='app-wrapper container'>
                            <NavbarContainer store={this.props.store}/>

                            <div className='app-wrapper-content'>
                                <Routes>
                                    <Route path='/dialogs/*' element={<DialogsContainer store={this.props.store}/>}/>
                                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                    <Route path="/profile/" element={<ProfileContainer/>}/>
                                    <Route path='/users' element={<UsersContainer/>}/>
                                    <Route path='/login' element={<Login/>}/>
                                    <Route path='/formTest' element={<FormTest/>}/>

                                </Routes>
                            </div>


                        </div>

                    </div>
                </div>

        )
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);