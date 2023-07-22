<template>
    <div class="login-register">
        <div class="login-register-form">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input v-if="isLogin" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <input v-else type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button @click="isLogin = !isLogin" class="btn btn-primary">
                {{ isLogin ? "Login" : "Register" }}
            </button>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            isLogin: true,
        };
    },
};
</script>
    
<style>
.login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.login-register-form {
    /* max-width: 350px; */
    padding: 20px;
    border-radius: 5px;
    /* Add box curve of 2px */
    border: 1px solid #ccc;
    /* Add border */
    background-color: #fff;
    /* Add background color */
}
</style>
    

<style></style>