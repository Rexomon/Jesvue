

<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue'


//define 
export default defineComponent({
    name: 'appvue',
    components: {
        Navbar //call Navbar from import Navbar
    },

});
</script>


<template>
    <header>
        <Navbar />
    </header>

    <RouterView />
</template>



<style></style>
