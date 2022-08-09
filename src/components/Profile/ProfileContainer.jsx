import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {Navigate} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}



class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.router.params.userId ;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }

           // userId = 24650;
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }


    render() {

        if(!this.props.isAuth) return <Navigate to={"/login"}/>;
        return (

            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>



    );

}


}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})


let AuthRedirect = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}) (withRouter(AuthRedirect));