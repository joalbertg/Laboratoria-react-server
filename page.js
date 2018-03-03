const data = {
  headerTitulo: 'Getting Started',
  headerDescripcion: 'Descripcion',
  mainSectionTitulo: 'Main Section',
  mainSectionArticles: [
    { titulo: 'Titulo 1', descripcion: 'Descripcion 1' },
    { titulo: 'Titulo 2', descripcion: 'Descripcion 2' },
    { titulo: 'Titulo 3', descripcion: 'Descripcion 3' }
  ],
  asideTitulo: 'Links',
  asideLinks: [
    { href: '#', texto: 'Link 1' },
    { href: '#', texto: 'Link 2' },
    { href: '#', texto: 'Link 3' },
    { href: '#', texto: 'Link 4' },
    { href: '#', texto: 'Link 5' }
  ],
};

const Header = ({ titulo, parrafo }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{parrafo}</p>
  </header>
);

const Article = ({ titulo, descripcion }) => (
  <article>
    <h3>{titulo}</h3>
    <p>{descripcion}</p>
    <hr />
  </article>
);

const Section = ({ title, articles }) => {
  const options = {
    style: {
      width: '70%',
      float: 'left'
    },
    id: 'main'
  };

  const listArticles = articles.map((element, index) => {
    const articleProps = {
      key: index.toString(),
      titulo: element.titulo,
      descripcion: element.descripcion
    };
    return <Article  {...articleProps} />
  });

  return (
    <section {...options}>
      <h2>{title}</h2>
      {listArticles}
    </section>
  );
};

const Aside = ({ links, title }) => {
  const options = {
    style: {
      width: '25%',
      float: 'right'
    }
  };

  const listLinks = links.map((element, index) => (
    <li key={index}>
      <a href={element.href}>{element.texto}</a>
    </li>)
  );

  return (
    <aside {...options}>
      <h4>{title}</h4>
      {listLinks}
    </aside>);
};

const Page = ({ headerTitulo, headerDescripcion, mainSectionTitulo, mainSectionArticles, asideTitulo, asideLinks }) => {
  const headerProps = {
    titulo: headerTitulo,
    parrafo: headerDescripcion
  };

  const objSection = {
    title: mainSectionTitulo,
    articles: mainSectionArticles
  };

  const objAside = {
    title: asideTitulo,
    links: asideLinks
  };

  return (
    <div>
      <Header  {...headerProps} />
      <Section {...objSection} />
      <Aside {...objAside} />
    </div>
  );
};

ReactDOM.render(
  <Page {...data} />,
  document.getElementById('container')
);
