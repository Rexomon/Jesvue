<script>
import { mapActions } from 'pinia';
import { useDataStore } from '../stores/counter';

export default {
    name: "RegisterPage",
    data() {
        return {
            username: "",
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(useDataStore, ["handleRegister"]),
        handleRegisterPage() {
            const { username, email, password } = this

            const value = { username, email, password }

            this.handleRegister(value)
        }
    }
};
</script>

<template>
    <div class="login-register">
        <div class="login-register-form">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Username" v-model="username" />
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    v-model="password" />
                <label for="floatingPassword">Password</label>
            </div>
            <p class="jenck">Already have an account?
                <RouterLink class="jnck" to="/login">Login</RouterLink>
            </p>
            <button type="submit" @click="handleRegisterPage" class="btn btn-primary btn-hover">
                Register
            </button>
        </div>
    </div>
</template>
    

<style>
/* CSS already includeed with LoginPage.vue */
</style>
