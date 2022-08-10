import axios from "axios";


let instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "ffb12bf6-39cb-412c-9ea1-a0403c00b419"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    },
    follow(id) {
       return  instance.post(`follow/${id}`, {})
            .then(response => response.data)

    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }

}



export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)

    }

}









export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`);
    }


}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }


}
/*
export const unFollowAPI = {
    unFollow(id) {
        instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}


export const followAPI = {
    follow(id) {
        instance.post(`follow/${id}`, {})
            .then(response => response.data)
    }
}
*/

