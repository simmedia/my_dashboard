<template>
  <div class="user">
    {{this.$route.params.id}} <br/>
    {{this.$route.params.id.email}}
    <!-- <div v-for="(user,index) in users" :key="index">
      {{user.name}}
    </div> -->
  </div>
</template>

<script>

export default {

  name: "User",
  data: () => ({
  })
};
</script>

<style>
</style>
