

<script>
import Login from './components/Login.vue'
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue'
import router from './router';

//define 
export default defineComponent({
    name: 'appvue',
    components: {
        Navbar //call Navbar from import Navbar
    },
    router,//call router from import router
});
</script>


<template>
    <Navbar />
    <div class="">
        <router-view></router-view>
    </div>
</template>



<style></style>
