import "./rules.scss";

export default function Rules() {
  return (
    <div className="rules">
      <p>
        I have created a Number guessing game. It is not some typical number
        guessing game where computer will generate a random number and you have
        to guess it.
      </p>
      <p>
        In this game user has to guess the number which is average of all the
        guessed numbers.
      </p>
      <h2>Rules/Logic of the Game.</h2>
      <ul>
        <li>
          Initially there is a number <span>x</span> in the database.
        </li>
        <li>
          {" "}
          You have to guess the number <span>x</span>, which should be in the
          range of <span>1-1000</span>.
        </li>
        <li>
          If the guessed number is correct, then you win the game and will
          receive <span className="prize">INR 50</span>.
        </li>
        <li>
          If the guessed number is wrong then a new number <span>y</span> is
          generated which is <span>Round((x + guessed number)/2)</span>.
        </li>
        <li>
          If that number ever falls between <span>0-10</span> or <span>990-1000</span> then
          a new unique number is generated.
        </li>
        <li>User can guess the number once in every 5 seconds.</li>
        <li>
          Only first 5 users to guess the number will be considered as winners.
        </li>
        
        <li>Good luck!!</li>
      </ul>
      <h2>Tech Stack</h2>
      <ul>
        <li>
          {" "}
          Frontend: ReactJS, Typescript, Vite and SASS (No Fancy frameworks)
        </li>
        <li>
          Backend: NodeJS, ExpressJS, Fire Store (Literally I have used
          firestone for everything even for rate limiting the user requests 😂.
          And the score is a singe field in the database so I even used
          transaction in fireStore.)
        </li>
        <li>
          Authentication: Firebase (I am too lazy to write another
          authentication service from scratch and waste my 2-3 days and still it
          will have bugs 😅)
        </li>
        <p className="italic">
          Why authentication ?? If not then how will I know which is winner
        </p>
        <p>
          Hosting: Firebase Hosting, GCP cloud run (For the backend which is
          just a magic of Google) and API gateway (I will explain it in an
          another post why I used it)
        </p>
      </ul>
    </div>
  );
}
