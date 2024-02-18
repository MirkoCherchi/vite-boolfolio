<script>
export default {
    name: 'Header',
};

</script>

<template>
    <header class="bg-success">
        <div class="container d-flex justify-content-between py-3">
            <div>Logo</div>
            <div>
                <ul class="d-flex gap-3 list-unstyled p-0 m-0">
                    <li><router-link class="text-white" :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link class="text-white" :to="{ name: 'projects' }">Projects</router-link></li>
                    <li><router-link class="text-white" :to="{ name: 'profile' }">Profile</router-link></li>

                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss"></style>
