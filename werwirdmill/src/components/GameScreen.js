import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      playerName:'',
      question: '',
      answers: {},
      selectedDiv: null,
      score: 0,
      categoryLevel: 0,
      amounts: ['1.000.000 Euro', '500.000 Euro', '125.000 Euro', '64.000 Euro', '32.000 Euro', '16.000 Euro', '8000 Euro', '4000 Euro', '2000 Euro', '1000 Euro', '500 Euro', '300 Euro', '200 Euro', '100 Euro', '50 Euro'],
      
    }
  },
  methods: {

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

    async getQuestion() {
      const { data } = await axios.get('http://127.0.0.1:5000/random_question');
      this.question = data.question;
    
      // Extrahiere Antworttexte aus data.answers
      const answerTexts = [];
      for (let i = 0; i < data.answers.length; i++) {
        answerTexts.push(data.answers[i].answer);
      }
    
      // Mische die Antworttexte
      const shuffledAnswers = this.shuffleArray(answerTexts);
    
      // Verteile die gemischten Antworten auf A-D
      this.answers = { A: shuffledAnswers[0], B: shuffledAnswers[1], C: shuffledAnswers[2], D: shuffledAnswers[3] };
    
      return { id: data.question_id }; // Gibt die ID der Frage zurück
    },
    
    // clickAnswer() Funktion mit ID als Parameter
    clickAnswer(answer) {
      this.getQuestion().then((question) => {
        const id = question.id; // Extrahiere die ID aus der Frage
    
        this.selectedDiv = answer;
        console.log(this.selectedDiv); // Zeigt selectedDiv von A-D an
        console.log(id)
    
        const url = `http://127.0.0.1:5000/is_correct/${id}/${this.question}`;
    
        axios.get(url)
          .then((response) => {
            if (response.data.correct) {
              this.score++;
              this.categoryLevel += 5; // Erhöht die Kategorieebene um 5
            } else {
              // Highscore an highscore Seite weiterleiten .post hier
            }
    
            // Neue Frage anzeigen
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }


  },
  beforeMount() {
    this.getQuestion();
  },
  mounted(){
    // überprüfung spielername vorhanden
    if (this.$route.query.player){
      this.playerName = this.$route.query.player; // get name
    }
  }
}
