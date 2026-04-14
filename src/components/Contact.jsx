
const Contact = () => {
  return (
    <section id="contato" className="cartao-contato">
      <h3>Vamos construir algo juntos? <br /> Entre em contato pelas redes sociais!</h3>
      <div className="redes-sociais">
        <a href="mailto:lopesfabiola29@gmail.com" title="E-mail">
          <i className="fas fa-envelope"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/fabiolalopes" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;