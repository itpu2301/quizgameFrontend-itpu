import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      playerName: '',
      question: '',
      answers: {},
      selectedDiv: null,
      score: 0,
      categoryLevel: 0,
      amounts: [
        '1.000.000 Euro',
        '500.000 Euro',
        '125.000 Euro',
        '64.000 Euro',
        '32.000 Euro',
        '16.000 Euro',
        '8000 Euro',
        '4000 Euro',
        '2000 Euro',
        '1000 Euro',
        '500 Euro',
        '300 Euro',
        '200 Euro',
        '100 Euro',
        '50 Euro'
      ]
    }
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
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

    async getQuestion() {
      const { data } = await axios.get('http://127.0.0.1:5000/random_question')
      this.question = data.question

      const answerTexts = []
      for (let i = 0; i < data.answers.length; i++) {
        answerTexts.push(data.answers[i].answer)
      }

      const shuffledAnswers = this.shuffleArray(answerTexts)

      this.answers = {
        A: { text: shuffledAnswers[0], id: data.answers[0].id },
        B: { text: shuffledAnswers[1], id: data.answers[1].id },
        C: { text: shuffledAnswers[2], id: data.answers[2].id },
        D: { text: shuffledAnswers[3], id: data.answers[3].id }
      }

      return { id: data.question_id } 
    },

    clickAnswer(answer) {
      this.getQuestion().then((question) => {
        const id = question.id 

        this.selectedDiv = answer
        console.log(this.selectedDiv) // Zeigt selectedDiv von A-D an

        const selectedAnswer = this.answers[answer]
        const url = `http://127.0.0.1:5000/is_correct/${id}/${selectedAnswer.id}`

        axios
          .get(url)
          .then((response) => {
            if (response.data.correct) {
              console.log('%cRichtig', 'color: green') 

              // Weitere Aktionen bei richtiger Antwort
            } else {
              console.log('%cFalsch', 'color: red') 
              // Weitere Aktionen bei falscher Antwort
            }
            // Neue Frage anzeigen oder andere Logik
          })
          .catch((error) => {
            console.error(error)
          })
      })
    },
    







  },
  beforeMount() {
    this.getQuestion()
  },
  mounted() {
    // überprüfung spielername vorhanden
    if (this.$route.query.player) {
      this.playerName = this.$route.query.player // get name
    }
  }
}
