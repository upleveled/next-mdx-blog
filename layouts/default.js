import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
export default ({ children }) => (
  <>
    <Meta />
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
    <Footer />
  </>
);
