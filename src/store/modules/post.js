import axios from "axios";

export default {
    actions: {
        async getPosts({ commit, getters, dispatch}, skip = 0) {
            const url = 'https://dummyjson.com/posts?limit=10&skip=' + skip
            
            await axios.get(url)

            .then(response => {
                const total = response.data.total
                const posts = response.data.posts
                commit('updatePosts', posts)
                commit('totalPosts', total)
            })
            .catch(response => {
                console.log('response', response);
            })
        },
         async searchPosts({ commit, getters, dispatch}, searchItem = '') {
            const url = 'https://dummyjson.com/posts/search?q=' + searchItem
            
            await axios.get(url)

            .then(response => {
                const posts = response.data.posts
                commit('updatePosts', posts)
            })
            .catch(response => {
                console.log('response', response);
            })
        },
        async editPosts({ commit, getters, dispatch}, title) {
            const res = await fetch('https://dummyjson.com/posts/'+ title.id, {
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title.title,
                })
            })
            const posts = await res.json()
            const titel = posts
            commit('editMutationPost', title)            
        },


        async getUser({ commit, getters, dispatch}, skip = 0) {
            const url = 'https://dummyjson.com/users?limit=10&skip=' + skip
            
            await axios.get(url)

            .then(response => {
                const totalUser = response.data.total
                const user = response.data.users
                commit('updateUser', user)
                commit('totalUsers', totalUser)
            })
            .catch(response => {
                console.log('response', response);
            })
        },
        async searchUser({ commit, getters, dispatch}, searchItem = '') {
            const url = 'https://dummyjson.com/users/search?q=' + searchItem
            
            await axios.get(url)

            .then(response => {
                const user = response.data.users
                commit('updateUser', user)
            })
            .catch(response => {
                console.log('response', response);
            })
        },
        async editUser({ commit, getters, dispatch}, title) {
            const res = await fetch('https://dummyjson.com/users/'+ title.id, {
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: title.title,
                })
            })
            const users = await res.json()
            const user = users
            commit('editMutationUser', user)            
        },
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        updateUser(state, user){
            state.user = user
        },
        totalPosts(state, total){
            state.total = total
        },
        totalUsers(state, totalUser){
            state.totalUser = totalUser
        },
        editMutationPost(state, title) {
            let posts = state.posts
            posts.forEach(element => {
                if(element.id == title.id){
                    element.title = title.title
                }
            });
        },
        editMutationUser(state, user) {
            let users = state.user
            
            users.forEach(element => {
                if(element.id == user.id){
                    element.firstName = user.firstName
                }
            });
        }

    },
    state: {
        posts: [],
        user: [],
        total: null,
        totalUser: null,
        editId: null,
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => {
            return p.title && p.body
            })
        },
        validUsers(state) {
            return state.user.filter(p => {
                p.title = p.firstName;
                p.body = p.lastName
            return p.firstName && p.lastName
            })
        },
        allPosts(state) {
            return state.posts
        },
        maxPost(state) {
            return state.total
        },
        maxUser(state) {
            return state.totalUser
        },
        getEditId(state) {
            return state.editId
        },

    },
}