<template>
    <div class="panel">
        <ul class="panel-tab">
            <li v-for="(active) in tabPanel"
                :key="active.id"
                @click="activeList = active.listItem"
                class="panel-tab__list"
            >{{ active.name }}</li> 
        </ul>
        <div v-if="activeList == 'Post'" class="component">
            <posts
                :validPosts="validPosts"
                :getPosts="getPosts"
                :maxPost="maxPost"
                :search="searchPosts"
                :editPosts="editPosts"
                :editId="getEditId"
                
            ></posts>
           
        </div>
        <div v-if="activeList == 'User'" class="component">
            <posts
                :validPosts="validUsers"
                :getPosts="getUser"
                :maxPost="maxUser"
                :search="searchUser"
                :editPosts="editUser"
                :editId="getEditId"
                
            ></posts>
           
        </div>
    </div>
</template>
<script>
import posts from './v-posts.vue'
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
        posts
    },
    data (){
        return {
            tabPanel: [
                { id: 1, name: 'Post', listItem: 'Post' },
                { id: 2, name: 'User', listItem: 'User' },
            ],
            activeList: 'Post',
        }
    },
    watch: {
        'activeList'() {
            if (this.activeList == 'User') {
                this.getUser()
            }
            if (this.activeList == 'Post') {
                this.getPosts()
            }
        },
    },
    computed: mapGetters(["validPosts", "maxPost", "getEditId", "validUsers", "maxUser"]),
    
    methods: {
        ...mapActions(["getPosts", "searchPosts", "editPosts", "getUser", "searchUser", "editUser"]),
    }
}
</script>
<style>
    .panel {
        width: 100%;
        display: flex;
        gap: 25px;
    }
    .panel-tab {
        min-width: 130px;
        height: 50vh;
        background-color: #e3e3e3;
        box-shadow: -9px 11px 12px -3px #b3b2b2;
        border-radius: 8px;
        padding: 25px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 0;
    }
.panel-tab__list {
    border: 1px solid #d1baba;
    padding: 5px;
    border-radius: 5px;
}
.panel-tab__list:hover {
    background-color: #d1baba;
    box-shadow: -9px 11px 12px -3px #b3b2b2;
}
.component {
    width: 100%;
    background-color: #e3e3e3;
    box-shadow: -9px 11px 12px -3px #b3b2b2;
    border-radius: 8px;
    padding: 20px 15px;
}
.vu-table {
    width: 100%;
    min-height: 510px;
}
.vu-table__thead {
    height: 50px;
    background-color: #cfcfdd;
}
.vu-table__tbody {
    background-color: #ceced7;
}
.vu-table__tbody-th:hover {
    cursor: pointer;
    background-color:#bcbcd6;
}
.hidden{
    display: none;
}
</style>