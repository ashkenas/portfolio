import Container from './Container';
import FlyIn from './FlyIn';
import Hero from './Hero';

export default function Home() {
  return (<>
    <Hero>
      <p><FlyIn seq={1} text="Hi, I'm Jacob." /></p>
      <p><FlyIn seq={2} text="Interested in what I do? Have a look around!" /></p>
    </Hero>
    <Container>
      <p>Content A</p>
    </Container>
    <Container>
      <p>Content B</p>
    </Container>
  </>);
};
