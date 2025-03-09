import { getAuth } from "firebase/auth";
import "./inputFrom.scss";
import { useRef, useState } from "react";
export default function InputForm() {
  const guessRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function formSubmit(event: React.FormEvent) {
    event.preventDefault();
    const guess = guessRef.current!.value;
    const backendUrl = import.meta.env.VITE_BACKEND_URL + "guess-the-number";
    // console.log(import.meta.env.VITE_BACKEND_URL);

    const auth = getAuth();

    if (isLoading) {
      return;
    }
    setMessage("");

    if (
      guess === "" ||
      isNaN(parseInt(guess)) ||
      parseInt(guess) < 1 ||
      parseInt(guess) > 1000
    ) {
      setMessage("Please enter a valid number between 1-1000");
      return;
    }
    if (auth.currentUser === null) {
      setMessage("Bro you forgot to login!!!!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: parseInt(guess),
          idToken: await auth.currentUser?.getIdToken(),
        }),
      });
      const data = await res.json();
      setMessage(data.message);
      guessRef.current?.parentElement
        ?.getElementsByClassName("progressLoader")[0]
        .classList.add("addProgressLoader");

      setTimeout(() => {
        guessRef.current?.parentElement
          ?.getElementsByClassName("progressLoader")[0]
          .classList.remove("addProgressLoader");
      }, 5000);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
        return;
      }
      setMessage("Something went wrong, please try again later");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="input-form">
      <h1>Guessing Game</h1>
      <form onSubmit={formSubmit}>
        <input
          type="number"
          id="guess"
          name="guess"
          placeholder="Guess between 1-1000"
          ref={guessRef}
        />
        <button
          type="button"
          className="randomButton"
          onClick={() => {
            const randomNumber = Math.floor(Math.random() * 1000) + 1;
            guessRef.current!.value = randomNumber.toString();
          }}
        >
          <img src="https://img.icons8.com/office/40/dice.png" alt="dice" />
        </button>
        <button type="submit" disabled={isLoading} className="submitButton ">
          {
            isLoading ? "Checking" : "guess"
          }
          <div
            className="progressLoader"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div className="loader"></div>
          </div>
        </button>
      </form>
      <p className="message">
        {message.trim() === "" ? "Can you win??" : message}
      </p>
    </div>
  );
}
