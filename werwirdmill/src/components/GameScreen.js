import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      question: '',
      answers: {},
      selectedDiv: null,
      score: 0,
      categoryLevel: 0,
      amounts: ['1.000.000 Euro', '500.000 Euro', '125.000 Euro', '64.000 Euro', '32.000 Euro', '16.000 Euro', '8000 Euro', '4000 Euro', '2000 Euro', '1000 Euro', '500 Euro', '300 Euro', '200 Euro', '100 Euro', '50 Euro'],
      
    }
  },
  methods: {
    async getQuestion() {
      const { data } = await axios.get('https://yesno.wtf/api');

      this.question = data.question;

      // Zufällige Reihenfolge der Antworten erstellen
      const shuffledAnswers = this.shuffleArray([data.answer, 'B: Bleiben Sie dran!', 'C: Die Spannung steigt', 'D: Ende offen']);

      this.answers = {
        A: shuffledAnswers[0],
        B: shuffledAnswers[1],
        C: shuffledAnswers[2],
        D: shuffledAnswers[3]
      };
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    selectedAnswer(div) {
      this.selectedDiv = div
    },
    // soll geklickte antwort egal ob A-D einlesen, nachfrage schicken an backend ob korrekt oder falsch
    // anschließend ausgeben, rot / grün umranden für false/true, wenn antwort zurück ist
    // wenn korrekt +1 punk und 1 kathegorie höher im geld ( geld farblich dann hervorheben), + neue frage
    // wenn falsch highscore an highscore seite weiterleiten mit namen und ergebnis an backend schicken
    // user zur highscore seite weiterleiten gleichzeitig ->
    // ergebnis soll dann gespeichert werden vom backend und dann zurückgesendet werden zu frontend
    // higscore ausgeben
    // neues spiel frage ja/nein

    clickAnswer(answer) {
      this.selectedDiv = answer
      console.log(this.selectedDiv) // zeugt selectedDiv an A-D

      axios
        .post('http://example.com/api/check-answer', { answer })
        .then((response) => {
          if (response.data.correct) {
            this.score++
            this.categoryLevel++
          } else {
            // Highscore an highscore Seite weiterleiten
          }

          // Neue Frage anzeigen
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  beforeMount() {
    this.getQuestion();
  }
}
