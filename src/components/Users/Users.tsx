import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";


type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}


let Users: React.FC<PropsType> = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
        />
        <div>
        {
            props.users.map(u => <User key={u.id} user={u}
                                       followingInProgress={props.followingInProgress}
                                       follow={props.follow}
                                       unfollow={props.unfollow}

            />
            )
        }
        </div>
    </div>
}

export default Users;