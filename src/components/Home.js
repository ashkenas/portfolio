import Container from './Container';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Title from './Title';

export default function Home() {
  return (<>
    <Hero>
      <Title><FlyIn seq={0} text="Hi, I'm Jacob." /></Title>
      <Subtitle><FlyIn seq={1} text="Interested in what I do? Have a look around!" /></Subtitle>
    </Hero>
    <Container>
      <p>Content A</p>
    </Container>
    <Container>
      <p>Content B</p>
    </Container>
  </>);
};
