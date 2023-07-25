<template>
  <div>Nuxt module playground!</div>
</template>

<script setup>
import { useApplication } from "#imports";
const { data } = useApplication();

console.log(data);
</script>
