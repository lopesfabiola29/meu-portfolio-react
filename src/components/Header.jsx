
const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="barra-navegacao">
      <div className="logo">F S L<span>| Portfólio</span></div>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        <button id="botao-tema" aria-label="Alternar tema" onClick={toggleTheme}>
          <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;