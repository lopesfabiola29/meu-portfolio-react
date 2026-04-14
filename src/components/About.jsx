import fotoPerfil from '../img/perfil.jpeg'

const About = () => {
  return (
    <section id="sobre" className="cartao-apresentacao">
      <div className="foto-perfil">
        <img src={fotoPerfil} alt="Fabiola Foto Perfil" />
      </div>
      <div className="conteudo-texto">
        <h1>Fabiola da Silva Lopes</h1>
        <p>Sou correspondente da Caixa Econômica Federal, Bacharel e Técnica em Administração, atualmente cursando <strong>Tecnologia em Sistemas para Internet</strong>.</p>
        <p className="descricao">Uno minha experiência em gestão com a tecnologia para impulsionar negócios, otimizar processos e gerar resultados concretos, estando em constante evolução.</p>
      </div>
    </section>
  );
};

export default About;