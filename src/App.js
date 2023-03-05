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

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error");
        console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",  this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",  this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

                <div >
                    <HeaderContainer/>
                    <div className='container '>
                        <div className='app-wrapper'>
                            <NavbarContainer store={this.props.store}/>


                            <div className='app-wrapper-content'>
                                <Routes>

                                    <Route path='/dialogs/*' element={<DialogsContainer store={this.props.store}/>}/>
                                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                    <Route path="/profile/" element={<ProfileContainer/>}/>
                                    <Route path='/users' element={<UsersContainer pageTitle={"рпрорпро"}/>}/>
                                    <Route path='/login' element={<Login/>}/>
                                    <Route path='/formTest' element={<FormTest/>}/>
                                    <Route path='*' element={<div>404 NOT FOUND</div>}/>
                                    <Route path='/' element={<ProfileContainer/>}/>

                                </Routes>

                            </div>


                            {/*<Footer />*/}
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