<script>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Hehe boi</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink class="nav-link" :class="{ 'active-link': $route.path === '/' }" to="/">Home
                        </RouterLink>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <RouterLink class="nav-link" :class="{ 'active-link': $route.path === '/login' }" to="/login">Login
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.container-fluid {
    display: flex;
    justify-content: center;
}

.container-nav {
    margin: 5px;
    padding-left: 150px;
}

.active-link {
    text-decoration: underline;
    font-weight: bold;
    text-underline-offset: 4px;
}
</style>
