<template>
  <main>
    <div class="page">
      <img src="../assets/logo.png" alt="brand-logo" id="brandLogo"/>

      <h3>Wer spielt&quest;</h3>
      <input id="player" placeholder="Name">
      <button class="close">
        <RouterLink to="/game" id="play">Spielen</RouterLink>
      </button>

      <h2>
        <RouterLink to="/game" class="btn">Spielen</RouterLink>
      </h2>

    </div>
    <div class="gradient"></div>

  </main>
</template>

<script lang="js">
export default {
  mounted() {
    document.addEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onMouseMove(event) {
      const gradient = document.querySelector(".gradient");
      gradient.style.backgroundImage = `radial-gradient(at ${event.clientX}px ${event.clientY}px, rgba(159,0,191,.9) 0, #4D4FA7 70%)`;
    },
  },
};
</script>

<style>
@import "@/assets/home.css";
</style>
