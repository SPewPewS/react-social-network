import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type PropsType = MapStatePropsType & OwnPropsType & MapDispatchPropsType;

/*{
    pageTitle: string
    currentPage: number,
    pageSize: number,
    getUsers: (currentPage: number, pageSize: number) => void,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: () => void,
    unfollow: () => void
    setCurrentPage: (pageNumber: number) => void,
    toggleFollowingProgress?: Array<any>
}*/

type OwnPropsType = {
    pageTitle: string
}

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
}

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    /*setCurrentPage: (pageNumber: number) => void,
    toggleFollowingProgress?: Array<any>*/
    getUsers: (currentPage: number, pageSize: number) => void,

}

class UsersContainer extends React.Component<PropsType | any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(100);
            } );*/
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
        /*this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data=> {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            } );*/
    }

    render() {

        return <>

            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            /*toggleFollowingProgress={this.props.toggleFollowingProgress}*/
            followingInProgress={this.props.followingInProgress}

        />
        </>
    }

}




let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


/*export default connect (mapStateToProps,{
    follow, unfollow,
    setCurrentPage,
    getUsers: getUsersThunkCreator
})(UsersContainer);*/
//
// {follow, unfollow, setUsers,
//     setCurrentPage, setUsersTotalCount, toggleIsFetching}

export default compose(
    /*withAuthRedirect,*/
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType> (mapStateToProps,

        {follow, unfollow, getUsers: getUsersThunkCreator
})

)(UsersContainer)

/*
export default compose(
    /!*withAuthRedirect,*!/
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType> (mapStateToProps,

        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: getUsersThunkCreator
        })


)(UsersContainer)
*/
