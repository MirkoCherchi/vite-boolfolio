<script>
export default {
    name: "NotFound",
};
</script>

<template>
    <div class="container">
        <h2 class="text-center">Page Not Found</h2>
        <p><router-link :to="{ name: 'home' }">Torna alla Home</router-link></p>
    </div>
</template>

<style lang="scss" scoped></style>
