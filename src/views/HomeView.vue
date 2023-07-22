<script>

</script>

<template>
    <div class="home">
        <h1>Macam-macam kata</h1>
        <div class="card-container">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Asu</h5>
                    <p class="card-text">Asu adalah bahasa jawannya anjing, jadi jika kamu adalah asu berarti kamu anjing
                    </p>
                    <a href="#" class="btn btn-primary">Pergi jika kamu bukan Asu</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Kontol</h5>
                    <p class="card-text">Kamu jangan mau jadi kontol, kalo kamu mirip kontol yaudah deritamu kalo begitu</p>
                    <a href="#" class="btn btn-primary">Pergi jika kamu bukan Kontol</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Yang Baca Asu</h5>
                    <p class="card-text">Seorang yang membacanya adalah asu. Jadi janganlah kamu membacanya</p>
                    <a href="#" class="btn btn-primary-disabled">Ternyata kamu asu</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    margin: 20px;
    border-radius: 10px;
}

.home h1 {
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
