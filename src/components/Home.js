import Container from './Container';
import Hero from './Hero';

export default function Home() {
  return (<>
    <Hero>
      <p>Welcome</p>
    </Hero>
    <Container>
      <p>Content A</p>
    </Container>
    <Container>
      <p>Content B</p>
    </Container>
  </>);
};
