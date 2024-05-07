export default {
  data() {
    return {
      playerName: '' // Initialisieren des Spielernamens
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onMouseMove(event) {
      const gradient = document.querySelector(".gradient");
      gradient.style.backgroundImage = `radial-gradient(at ${event.clientX}px ${event.clientY}px, rgba(159,0,191,.9) 0, #4D4FA7 70%)`;
    },
    handlePlayClick() {
      if (!this.playerName) {
        alert("Bitte geben Sie einen Spielernamen ein!");
        return;
      }
      this.$router.push({ path: '/game', query: { player: this.playerName } });
    },
  },
};