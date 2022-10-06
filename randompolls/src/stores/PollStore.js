import { writable } from "svelte/store";

const PollStore  = writable([
   {
      id: 1,
      question: 'Motorcycle or Car?',
      answerA: 'Motorcycle',
      answerB: 'Car',
      votesA: 20,
      votesB: 5,
   },
]);

export default PollStore;