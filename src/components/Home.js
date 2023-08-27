import BigNavButton from './BigNavButton';
import Container from './Container';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Title from './Title';

export default function Home() {
  return (<>
    <Hero>
      <Title><FlyIn seq={0} text="Hi, I'm |Jacob|." /></Title>
      <Subtitle><FlyIn seq={1} text="Interested in what I do? Have a look around!" /></Subtitle>
    </Hero>
    <Container seq={1}>
      <Title level={2}>About Me</Title>
      <p>I am a person. I do things. Why are you looking through my commit history?</p>
    </Container>
    <BigNavButton seq={2} to='./projects'>
      <Title level={2}>Projects</Title>
    </BigNavButton>
    <BigNavButton seq={3} to='./work'>
      <Title level={2}>Work Experience</Title>
    </BigNavButton>
  </>);
};
