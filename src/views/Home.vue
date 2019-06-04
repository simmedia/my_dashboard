<template>
  <div class="home">
    <div class="jumbotron">
      <img src="../assets/logo.png" width="150px" alt>
      <h1>SIMMEDIA</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.jumbotron {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 1s ease;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  h1 {
    margin-top: 50px;
    font-size: 3.5rem;
    letter-spacing: 1mm;
    color: #0984e3;
    text-shadow: 2px 2px 5px rgba(128, 128, 128, 0.637);
  }
}
</style>

