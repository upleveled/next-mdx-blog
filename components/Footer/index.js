import Container from '../Container';
import TwitterLogo from '../TwitterLogo';
import InstagramLogo from '../InstagramLogo';

export default () => (
  <>
    <style jsx>{`
      footer {
        margin-top: 3rem;
      }
      footer a {
        padding: 1em;
      }
    `}</style>
    <footer>
      <Container>
        <a href="https://twitter.com/karlhorky">
          <TwitterLogo />
          Twitter
        </a>
        <a href="https://instagram.com/karlhorky/">
          <InstagramLogo />
          Instagram
        </a>
      </Container>
    </footer>
  </>
);
