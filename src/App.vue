

<script>
import { mapWritableState, mapActions } from "pinia"
import { useDataStore } from './stores/counter';
import Navbar from './components/Navbar.vue';


//define 
export default {
    name: 'appvue',
    components: {
        Navbar //call Navbar from import Navbar
    },

    methods: {
        ...mapActions(useDataStore, ["getUsername"])
    },

    created() {

        if (localStorage.access_token) {
            this.getUsername()
            this.isLogin = true
        }
    },
    computed: {
        ...mapWritableState(useDataStore, ["isLogin"])
    }
};
</script>


<template>
    <header>
        <Navbar />
    </header>

    <RouterView />
</template>



<style></style>
