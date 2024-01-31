<template>
    <div class="pagination-block">
        <button @click="paginationBack" name="back" class="hidden pagination-block__button">back</button>
        <button @click="paginationNext" name="next" class="pagination-block__button">next</button>
    </div>
</template>
<script>
export default {
    props: ['getsCount', 'max'],
    data() {
        return{
            countPosts: 0,
        }
    },
    methods: {
        paginationNext() {

            this.countPosts = this.countPosts + 10;
            this.getsCount(this.countPosts);

            this.countPaginations()
        },
        paginationBack() {

            if (this.max > 10) {
                this.countPosts = this.countPosts - 10;
                this.getsCount(this.countPosts);
            }

            this.countPaginations()

        },
        countPaginations() {
            const next = document.querySelector('[name="next"]');
            const back = document.querySelector('[name="back"]');
            let count = this.max - this.countPosts

            if (count < 11) {
                next.classList.add('hidden')
            } else {
                next.classList.remove('hidden')
            }
            if (count == 0 || count == this.max) {
                back.classList.add('hidden')
            } else {
                back.classList.remove('hidden')
            }
        }
    }
}
</script>
<style scoped>
.pagination-block {
    padding: 15px;
    display: flex;
    gap: 8px;
    justify-content: center;
}
.pagination-block__button {
    border: none;
    height: 30px;
    width: 70px;
    background-color: #b1abab;
    border-radius: 15px;
}
.pagination-block__button:hover {
    background-color: #7d7272;
    box-shadow: -9px 11px 12px -3px #b3b2b2;
}
</style>