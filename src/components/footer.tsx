import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="links">
          <a
            href="https://github.com/SBRakeshRath/guessing-number-game-backend"
            target="_blank"
          >
            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
            Backend
          </a>
          <a
            href="https://github.com/SBRakeshRath/guessing-number-game-frontend"
            target="_blank"
          >
            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
            Frontend
          </a>
        </div>
      </div>
      <div className="bottom">This open source game is made with ❤️...</div>
    </footer>
  );
}
