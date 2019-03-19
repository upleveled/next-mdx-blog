import Container from '../Container';

export default () => (
  <>
    <style jsx>{`
      header {
        background: #ddd;
        margin-bottom: 2em;
      }
      nav {
        display: flex;
      }
      nav a {
        padding: 1em;
      }
      nav a:first-child {
        padding-left: 0;
      }
      nav a + a {
        margin-left: 0.5em;
      }
    `}</style>
    <header>
      <Container>
        <nav>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
        </nav>
      </Container>
    </header>
  </>
);
