<template>
  <main>
    <div class="page">
      <img src="../assets/logo.png" alt="brand-logo" id="brandLogo"/>

      <h3>Wer spielt&quest;</h3>
      <input v-model="playerName" id="player" placeholder="Name">
      <button class="close">
        <RouterLink :to="{ path: '/game', query: { player:playerName}}" id="play">Spielen</RouterLink>
      </button>

    </div>
    <div class="gradient"></div>

  </main>
</template>

<script src="../components/HomeScreen.js" lang="js"></script>
<style>
@import "@/assets/home/home.css";
</style>
