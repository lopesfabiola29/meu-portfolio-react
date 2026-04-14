import fotoProjeto from '../img/projeto.png'

const projetos = [
  {
    id: 1, // Adicionado um ID para servir de "key" no React
    titulo: 'Meu Portfólio',
    desc: 'Design elegante com suporte a tema escuro.',
    imagem: fotoProjeto,
    url: 'https://github.com/lopesfabiola29/meu-portfolio'
  },
  {
    id: 2,
    titulo: 'Meu Portfólio React',
    desc: 'Estiloso e Moderno.',
    imagem: fotoProjeto,
    url: 'https://github.com/lopesfabiola29/meu-portfolio-react'
  }
];

const Projects = () => {
  return (
    <section id="projetos">
      <div className="cabecalho-secao">
        <h2>Projetos em Destaque</h2>
        <span className="linha"></span>
      </div>
      
      <div className="grade-projetos" id="lista-projetos">
        {projetos.map((p) => (
          <article key={p.id} className="cartao-projeto">
            <img src={p.imagem} alt={p.titulo} className="capa-projeto" />
            <div className="info-projeto">
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
              <a href={p.url} className="link-projeto">Explorar Projeto no GitHub →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
