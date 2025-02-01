import "./rules.scss"

export default function Rules() {
  return (
    <div className="rules">
      <ul>
        <li>Guess a number between 1-1000.</li>
        <li>You can retry in every 5 Seconds.</li>
        <li>If you guess the correct number, you win a $1!</li>
        <li>
          In every wrong guess the number gets changed using Formula Round((Old
          Number + Your Guess) / 2)
        </li>
        <li>
          If the number ever fall between 0-10 or 990-1000 and any user guess it
          incorrectly on the first attempt the number changed to a random number
          again.
        </li>
        <li>
          There will be only first 5 winners after that the game will end.
        </li>
        <li>Good luck!!</li>
      </ul>
    </div>
  );
}
