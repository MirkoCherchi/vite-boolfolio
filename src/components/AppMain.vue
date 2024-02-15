<script>
export default {
    name: 'Main',
    props: ['projects'],


};

</script>

<template>
    <main class="container py-5">
        <h1 class="text-center">Projects</h1>
        <div class="row mt-4">
            <div v-for="project in projects" class="col col-md-4 g-2">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>
