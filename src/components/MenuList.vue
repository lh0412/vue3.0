<template>
    <!-- <ul id="menu">
        <li v-for="(item,index) in state.menulist" :key="index" @click="$router.push({path:item.path})">
            {{item.name}}
        </li>
    </ul> -->
    <el-menu 
        active-text-color="#ffd04b">
        <el-menu-item v-for="(item,index) in state.menulist" :key="index" @click="$router.push({path:item.path})">
           {{item.name}} 
        </el-menu-item>
    </el-menu>
</template>
<script setup>
import { defineProps, reactive } from "vue";
const state = reactive({
    menulist:[
        {path:'/',name:'test'},
        {path:'home',name:'home'}
    ]
})
</script>

