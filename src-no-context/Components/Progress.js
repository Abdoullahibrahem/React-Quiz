function Progress({ quizNum, index, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={quizNum}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{quizNum}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
