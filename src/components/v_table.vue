
<script>
export default {
    name: 'v_table',
    props: {
        rows: {
            type: Array,
            required: true
        },
    },
    data(){
        return {
            test: null
        }
    },
    mounted() {
        this.edit()
    },
    methods: {
        renderColumns(h, row, columnsOptions) {             
            return columnsOptions.map((column, index) => {                 
                return h('td', { class: 'vu-table__tbody-td' }, [ 
                    column.scopedSlot ? column.scopedSlot({ row, items: this.rows }) : row[column.prop]
                ],
                )
            })
        },
        edit(){
            let row = document.querySelectorAll('.vu-table__tbody-th')
            row.forEach(el => {
                el.addEventListener('click', e => {
                    let parent = e.target.parentNode
                    this.$store.state.post.editId = parent.id
                })
            })
        }
    },
    render(h) { 
        const columnsOptions = this.$slots.default.filter(item => {
            return (item.componentOptions && item.componentOptions.tag === 'column')
        }).map(column => {            
            return Object.assign({}, column.componentOptions.propsData, {
                scopedSlot: column?.data?.scopedSlots?.default
            }
            )
        })
        const columnsHead = columnsOptions.map((column, index) => {             
            return h('th', { class: 'vu-table__thead-th', key: index }, column.title)
        })
       
        const rows = this.rows.map((row, index) => { 
            return h('tr', { key: index, attrs: {id: `${row.id}`, title: 'Редактировать'} , class: `vu-table__tbody-th`},  [this.renderColumns(h, row, columnsOptions)])
        })
        
        return h('table', { class: 'vu-table' }, [
            h('thead', { class: 'vu-table__thead' }, [
                h('tr', [columnsHead])
            ]),
            h('tbody', { class: 'vu-table__tbody'},  [rows]
            ),  
        ])
    },
};

</script>