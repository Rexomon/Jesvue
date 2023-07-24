<script>
import { mapActions } from 'pinia';
import { useDataStore } from '../stores/counter';

export default {
    name: "LoginPage",
    data() {
        return {
            input: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(useDataStore, ["handleLogin"]), handleLoginPage() {
            const value = {
                input: this.input,
                password: this.password
            };

            this.handleLogin(value, this.$route.query.code)
        }
    }

};
</script>
<template>
    <div class="login-register">
        <div class="login-register-form">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="input" />
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    v-model="password" />
                <label for="floatingPassword">Password</label>
            </div>
            <p class="jenck">Don't have an account?
                <RouterLink class="jnck " to="/register">Sign Up</RouterLink>
            </p>
            <button type="submit" @click="handleLoginPage" class="btn btn-primary btn-hover">
                Submit
            </button>
        </div>
    </div>
</template>
    
    
<style >
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
    height: 50vh;
}

.login-register-form {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(160, 230, 190, 0.744) 0px 2px 4px 0px,
        rgba(119, 215, 138, 0.756) 0px 2px 16px 0px;
    padding: 40px 25px;
    border: 1px solid #ccc;
    width: 60vh;
    margin: 250px auto 0;

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
    
