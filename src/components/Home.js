import BigNavButton from './BigNavButton';
import Container from './Container';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Title from './Title';

export default function Home() {
  return (
    <main>
      <Hero>
        <Title>
          <FlyIn seq={0} text="Hi, I'm |Jacob|." />
        </Title>
        <Subtitle>
          <FlyIn seq={1} text="Interested in what I do? Have a look around!" />
        </Subtitle>
      </Hero>
      <Container seq={1}>
        <Title level={2}>About Me</Title>
        <p>A little bit of this, a little bit of that. And a lot a bit of that other thing.</p>
      </Container>
      <BigNavButton seq={2} to='./work'>
        <Title level={2}>Work Experience</Title>
        <p>Also known as everything I was paid to do.</p>
      </BigNavButton>
      <BigNavButton seq={3} to='./projects'>
        <Title level={2}>Projects</Title>
        <p>Also known as everything I wish I was paid to do.</p>
      </BigNavButton>
    </main>
  );
};
