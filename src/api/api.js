import * as axios from 'axios'




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": '274619bf-c707c44db-90e2-34bfeccdc4fc'}
})



export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                    return response.data;
                })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. please profileAPI object')
        return profileAPI.getProfile(userId)
            
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
            
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);

    },
    updateStatus(status) {
        return instance.put('profile/status/', {status:status})  //{status:status}
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me` )
    },
    login(email, password, remember) {
        return instance.post('auth/me', {email, password, remember})
    },
    logout() {
        return instance.delete('auth/me')
    }
}