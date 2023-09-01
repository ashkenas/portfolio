import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Title from './Title';
import Project from './Project';
import Container from './Container';
import Loader from './Loader';

export default function Projects() {
  const { data } = useLoaderData();
  return (
    <main>
      <Hero>
        <Title>
          <FlyIn text="Projects" />
        </Title>
      </Hero>
      <Suspense fallback={<Loader />}>
        <Await
          resolve={data}
          errorElement={
            <Container>
              <Title level={2}>500</Title>
              <p>Unable to load projects. Please try again later.</p>
            </Container>
          }
          children={(projects) =>
            projects.map((project, i) =>
              <Project project={project} seq={i + 1} key={i} />
            )
          }
        />
      </Suspense>
    </main>
  );
};
