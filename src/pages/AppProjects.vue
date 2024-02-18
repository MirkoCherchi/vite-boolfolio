<script>
import axios from 'axios';
export default {
    name: "AppProjects",
    data() {
        return {
            projects: [],
            baseUrl: "http://127.0.0.1:8000",
            apiUrl: {
                projects: "/api/projects",
            },
        };
    },
    methods: {
        getProjects() {
            axios
                .get(this.baseUrl + this.apiUrl.projects)
                .then((response) => {
                    this.projects = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.getProjects();
    },
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
                        <!-- <a href="#" class="btn btn-primary">Dettaglio</a> -->
                        <router-link class="btn btn-primary"
                            :to="{ name: 'single-project', params: { slug: project.slug } }">Dettaglio</router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
