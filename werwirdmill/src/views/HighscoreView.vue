<template>
  <main>

    <table class="container">
      <tr>
        <td class="flex" colspan="2">
          Higscore
        </td>
      </tr>
      <tr>
        <td class="rows">
          Name

        </td>
        <td class="rows">
          Punkte

        </td>
      </tr>
      <tr>
        <td class="rows">
          username
        </td>
        <td class="rows">
          userpoints
        </td>
      </tr>
      <tr>
        <td class="rows" colspan="2">
        
        <RouterLink to="/game">Neue Runde</RouterLink>
    
        </td>
      </tr>
    </table>


  </main>
</template>




<!-- <script src="./../components/GameScreen.js" lang="js"></script> -->
<style>
@import "@/assets/game/score.css";
</style>