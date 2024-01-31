<template>
    <div class="relative">
        <div>
            <serch :search="search"
                   :getPosts="getPosts"></serch>
        <div class="table-block">
            <v_table :rows="validPosts" v-if="validPosts.length > 0"
                    :editId=editId>
                <column prop="id" title="ID" />
                <column prop="title" title="Title"/>
                <column prop="body" title="Body"/>
            </v_table>
        </div>
        </div>
        <div v-if="validPosts.length > 0"> 
            <pagination 
                :getsCount="getPosts"
                :max="maxPost"
            ></pagination>
        </div>
        <v_edit :validPosts = validPosts
            :editId=editId
            :editPosts="editPosts">

        </v_edit>
    </div>
</template>
<script>
import v_table from './v_table.vue'
import column from './v_column.vue'
import pagination from './pagination.vue'
import serch from './v-serch.vue'
import v_edit from './v-edit.vue'
export default {
    components: {
        column,
        v_table,
        pagination,
        serch,
        v_edit
    },
    props: ['validPosts', 'getPosts', 'maxPost', 'search', 'editId', 'editPosts'],
    data(){
        return {
            serchItem:'',
        }
    },
    async mounted() {
        this.getPosts()
    },
    methods: {
        serches(){
            if(this.serchItem.length > 3){
                this.search(this.serchItem)
            }else{
                this.getPosts()
            }
        },
    }
}
</script>
<style>
    .serch-block{
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        justify-content: center;
        margin-bottom: 10px;
    }
    .serch-block__input {
        border: none;
        height: 25px;
        border-radius: 5px;
        min-width: 250px;
    }
    .serch-block__input:focus {
        border: none;
        box-shadow: -7px 6px 8px 0px #8f92b9;
    }
    .serch-block__input:focus-visible {
        outline: none;
        box-shadow: -7px 6px 8px 0px #8f92b9;
    }
    .serch-block__button {
        border: none;
        height: 30px;
        width: 70px;
        background-color: #c5c6d1;;
        border-radius: 15px;
    }
    .serch-block__button:hover {
        background-color: #8f92b9;;
        box-shadow: -9px 11px 12px -3px #8f92b9;;
    }
    .relative {
        position: relative;
    }
</style>