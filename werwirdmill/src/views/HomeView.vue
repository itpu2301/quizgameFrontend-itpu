<template>
  <main>
    <div class="page">
      <img src="../assets/logo.png" alt="brand-logo" id="brandLogo" />
      <h3>Wer spielt&quest;</h3>
      <input v-model="playerName" id="player" placeholder="Name">
      <button class="close" @click="handlePlayClick">Spielen</button>
    </div>
    <div class="gradient"></div>
  </main>
</template>

<script src="../components/HomeScreen.js" lang="js"></script>
<style>
@import "@/assets/home/home.css";
</style>
