import FlyIn from './FlyIn';
import Hero from './Hero';
import Title from './Title';
import Project from './Project';

const projects = [
  {
    "title": "Qwirky",
    "desc": "Qwirky is an online real-time multiplayer board game based on the hit game Qwirkle. Players can add their friends to start competitive matches through an intuitive interface.\n\nNow in beta!",
    "tags": ["SASS", "JS", "Node.js", "React", "Websockets", "MongoDB"],
    "link": "https://qwirky.jacobashkenas.com/"
  },
  {
    "title": "DCinbox",
    "desc": "DCinbox is the only email repository for constituent newsletters from congress. With over 170,000 emails in its database, researchers can query keywords, pull full datasets per voting district, generate infographics, and much more.",
    "tags": ["CSS", "JS", "HTML", "PHP", "PostgreSQL", "AWS", "Emails"],
    "link": "https://www.dcinbox.com/"
  },
  {
    "title": "Stevens Room Locator",
    "desc": "An interactive room locator for finding vacant classrooms on the Stevens Institute of Technology campus. Users can filter rooms by building, times available, seating capacity, and more. Interactive schedule interfaces allow students to view what classes are in each room, who teaches them, and how many students are registered.",
    "tags": ["CSS", "JS", "React", "Vercel", "Serverless Functions", "Web Scraping"],
    "link": "https://rooms.ja2.us"
  },
  {
    "title": "Crib Dragger+",
    "desc": "An interactive solver that exploits the Many Time Pad vulnerability to crack a series of encrypted messages. The guided process makes decryption quick and easy, providing the user with the full plaintext of each message as well as the computed key used for encryption.",
    "tags": ["CSS", "JS", "React", "Cryptography"],
    "link": "https://mtp.ja2.us"
  },
  {
    "title": "LaTeXLess",
    "desc": "An online homework editor for generating well-formatted documents with proper mathematical syntax without learning the nuances of LaTeX. Uses interactive equation editors and a server-side LaTeX compiler to ensure a smooth user experience without requiring knowledge of the typesetting language.",
    "tags": ["CSS", "JS", "React", "GraphQL", "MongoDB", "LaTeX"]
  },
  {
    "title": "Coverage Finder",
    "desc": "A desktop application for finding the teacher best fit to cover a class in the absence of another. Using a database of teacher schedules, it uses attributes such as availability, main subject taught, coverage frequency (how often a given teacher covers classes), and whether or not a teacher prefers to cover classes. Reduced a time consuming daily task to a few milliseconds.",
    "tags": ["WPF", "C#", "XAML", "Email"]
  }
];

export default function Projects() {
  return (
    <main>
      <Hero>
        <Title>
          <FlyIn text="Projects" />
        </Title>
      </Hero>
      {projects.map((project, i) =>
        <Project project={project} seq={i + 1} key={i} />
      )}
    </main>
  );
};
