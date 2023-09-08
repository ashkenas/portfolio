import { Suspense } from 'react';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Loader from './Loader';
import Title from './Title';
import { Await, useLoaderData } from 'react-router-dom';
import Container from './Container';
import WorkExp from './WorkExp';

export default function Work() {
  const { data } = useLoaderData();
  return (
    <main>
      <Hero>
        <Title>
          <FlyIn text={"Work Experience"} />
        </Title>
      </Hero>
      <Suspense fallback={<Loader />}>
        <Await
          resolve={data}
          errorElement={
            <Container>
              <Title level={2}>500</Title>
              <p>Unable to load work experience. Please try again later.</p>
            </Container>
          }
          children={(work) =>
            work.map((exp, i) =>
              <WorkExp exp={exp} seq={i + 1} key={i} />
            )
          }
        />
      </Suspense>
    </main>
  );
};
