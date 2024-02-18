<script>
import axios from "axios";
export default {
    name: "SingleProject",
    data() {
        return {
            project: {},
            baseUrl: "http://127.0.0.1:8000",
            apiUrl: {
                projects: "/api/projects",
            },
        };
    },
    methods: {
        getProject() {
            axios
                .get(
                    this.baseUrl + this.apiUrl.projects + "/" + this.$route.params.slug
                )
                .then((response) => {
                    this.project = response.data.result;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.getProject();
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card my-5">
                    <div class="card-body">
                        <h1 class="card-title text-center">{{ project.title }}</h1>
                        <hr />

                        <p class="card-text">{{ project.description }}</p>

                        <router-link :to="{ name: 'projects' }">Tutti i progetti</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
