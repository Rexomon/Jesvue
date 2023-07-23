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
                <RouterLink class="jnck" to="/login"> Login</RouterLink>
            </p>
            <button type="submit" @click="handleRegisterPage" class="btn btn-primary btn-hover">
                Register
            </button>
        </div>
    </div>
</template>
    
    
<style>
.jenck,
.jnck {
    margin: 2px;
    font-size: 15px;
    text-decoration: none;
}

.login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.login-register-form {
    padding: 50px;
    border-radius: 5px;
    /* Add box curve of 2px */
    border: 1px solid #ccc;
    /* Add border */
    background-color: #fff;
    /* Add background color */
}

.jnck:hover {
    color: darkcyan;
    /* Change the color on hover */
    cursor: pointer;
    /* Show pointer cursor on hover */
}

/* Add hover effect to the login/register button */
.btn-hover {
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
    /* Add transition effect to background color and transform */
}

.btn-hover:hover {
    background-color: #007bff;
    /* Change background color on hover */
    transform: scale(1.05);
    /* Scale up the button on hover */
}
</style>
