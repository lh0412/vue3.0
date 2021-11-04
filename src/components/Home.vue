<template>
    <div class="home-wrap">
       <el-table 
        :data="listdata"
        style="width: 100%"
        :row-class-name="tableRowClassName"
       >
          <el-table-column v-for="colum in colums" :key="colum" :label="colum.label" :prop="colum.prop" />
       </el-table> 
    </div>
</template>
<script lang="ts">
export default {
    data(){
        return {
            listdata:[
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                }
            ],
            colums:[
                {
                    label:'日期',
                    prop:'date'
                },
                {
                    label:'姓名',
                    prop:'name'
                },
                {
                    label:'地址',
                    prop:'address'
                }
            ]
        }
    },
    methods: {
       tableRowClassName({ row, rowIndex }){
            if (rowIndex === 1) {
                return 'warning-row'
            } else if (rowIndex === 3) {
                return 'success-row'
            }
       }
    }
}

</script>
<style scoped>
.el-table .warning-row {
  --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-background-color: var(--el-color-success-lighter);
}
</style>