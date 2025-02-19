import { useQuiz } from "../Contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, quizNum } = useQuiz();
  if (answer === null) return null;
  if (index < quizNum - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === quizNum - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
