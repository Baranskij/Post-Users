<template>
    <div >
        <div v-for="post in validPosts" :key="post.id" v-if="post.id == editId" class="modal">
            <input  type="text" :value="post.title" name="titel-post" class="titel-post">
            <div class="around">
                <button @click="editPostTitel" class="around-button success">Edit</button>
                <button @click="cancel" class="around-button danger">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['validPosts', 'editId', 'editPosts'],
    data() {
        return {
            title: {
                id: '',
                title: ''
            }
        }
    },
    methods: {
        editPostTitel() {
            this.title.title = document.querySelector('[name="titel-post"]').value
            this.title.id = this.editId
            this.editPosts(this.title)
            this.title.id = ''
        },
        cancel(){
            this.editId = 0
        }
    }
}
</script>
<style scoped>
    .modal {
        position: absolute;
        width: 350px;
        height: 350px;
        background-color: #fff;
        top: 10%;
        right: calc(50% - 350px/2);
        padding: 25px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .around {
        display: flex;
        justify-content: space-around;
    }
    .around-button{
        border: none;
        height: 30px;
        width: 70px;
        border-radius: 15px;
    }
    .danger {
        background-color: #da4848;
        color: #fff
    }
    .success {
        background-color: #5baa3c;
        color: #fff
    }
    .titel-post {
        height: 25px;
        border-radius: 5px;
        min-width: 250px;
        padding: 8px;
        border: 1px solid #8f92b9;
    }
    .titel-post:focus {
        border: none;
        box-shadow: -7px 6px 8px 0px #8f92b9;
    }
    .titel-post:focus-visible {
        outline: none;
        box-shadow: -7px 6px 8px 0px #8f92b9;
    }
</style>