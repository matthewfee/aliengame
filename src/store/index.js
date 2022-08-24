import { createStore } from "vuex";

export default createStore({
  state: {
    uiState: "start",
    characterChoices: ["baker", "mechanic", "artist"],
    character: "",
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: "What's your dog's name?",
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: "What's your favorite hobby?",
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: "What's your favorite color?",
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: "Is cereal soup?",
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: "What’s the most imaginative insult you can come up with?",
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: "If peanut butter wasn’t called peanut butter, what would it be called?",
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  getters: {},
  mutations: {
    pickCharacter(state, character) {
      state.character = character;
    },
    updateUIState(state, newUIState) {
      state.uiState = newUIState;
    },
    pickQuestion(state, character) {
      // eslint-disable-next-line no-unused-expressions

      console.log(character);
      // eslint-disable-next-line no-unused-expressions
      character === state.character ? (state.score += 10) : (state.score -= 10);

      if (state.questionIndex < state.questions.length - 1) {
        // eslint-disable-next-line no-plusplus
        state.questionIndex++;
      } else {
        state.uiState = state.score > 0 ? "won" : "lost";
      }
    },
    restartGame(state) {
      state.score = 0;
      state.questionIndex = 0;
      state.character = "";
      state.uiState = "start";
    },
  },
});
