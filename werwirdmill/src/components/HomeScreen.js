export default {
  data(){
    return {
      playerName:'' //übergabe playername
    };
  },
    methods: {
      onMouseMove(event) {
        const gradient = document.querySelector(".gradient");
        gradient.style.backgroundImage = `radial-gradient(at ${event.clientX}px ${event.clientY}px, rgba(159,0,191,.9) 0, #4D4FA7 70%)`;
      },
    },
    mounted() {
      document.addEventListener("mousemove", this.onMouseMove);
    },
  };