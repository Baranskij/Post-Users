<template>
    <div class="serch-block">
        <input type="text" name="" id="" v-model="serchItem" class="serch-block__input" placeholder="Serch">
        <button @click="serches" class="serch-block__button">Serch</button>
    </div>
</template>
<script>
export default {
    props: ['getPosts','search'],
    data() {
        return {
            serchItem: ''
        }
    },
    methods: {
        serches() {
            if (this.serchItem.length > 3) {
                this.search(this.serchItem)
            } else {
                this.getPosts()
            }

        }
    }
}
</script>