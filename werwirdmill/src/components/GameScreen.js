import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      answer: {},
      question:{},
    };
  },
  methods: {
    async getAnswer() {
      const { data } = await axios.get("https://yesno.wtf/api");
      this.answer = data;
    },
    async getQuestion() {
      const { data } = await axios.get("https://yesno.wtf/api");
      this.question = data;
    },

  },
  beforeMount() {
    this.getAnswer();
    this.getQuestion();
  },
};