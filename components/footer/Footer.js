import "./footer.scss";

export default function Footer() {
  let year = new Date();
  year = year.getFullYear();

  return (
    <footer className="footer container">
      <div className="footer__info">{year}, Pokemon</div>
      <div className="footer__contact">
        <a href="https://klgrch.ru">klgrch.ru</a>
      </div>
    </footer>
  );
}
