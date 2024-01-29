import BigNavButton from './BigNavButton';
import Container from './Container';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Title from './Title';
import '../styles/Home.scss';

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
        <p>
          Building a smarter, better connected web, one project at a time.
          Known to tinker with everything web-connected, interoperability on
          any scale, and hardware on ocassion. 
        </p>
      </Container>
      <BigNavButton seq={2} to='./work'>
        <Title level={2}>Work Experience</Title>
        <p>See where I've been and what I did there.</p>
      </BigNavButton>
      <BigNavButton seq={3} to='./projects'>
        <Title level={2}>Projects</Title>
        <p>
          Information about and links to many of the projects I have worked on.
          These include research tools, quality of life tools, games, class
          projects, and various other applications.
        </p>
      </BigNavButton>
      <div className="logos">
        <a href="https://www.linkedin.com/in/jacob-ashkenas/"
          aria-label="Go to Jacob Ashkenas's LinkedIn page."
          target="_blank" rel="noreferrer">
          <img alt="LinkedIn Logo" src="LI-In-Bug.png" height={60} />
        </a>
        <a href="https://github.com/ashkenas"
          aria-label="Go to Jacob Ashkenas's GitHub page."
          target="_blank" rel="noreferrer">
          <img alt="GitHub Logo" src="github-mark.png" height={60} />
        </a>
      </div>
    </main>
  );
};
