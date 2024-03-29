import FlyIn from './FlyIn';
import Hero from './Hero';
import Title from './Title';
import WorkExp from './WorkExp';

const work = [
  {
    "company": "Trading Technologies (formerly Abel Noser Solutions)",
    "location": "New York, NY",
    "positions": [
      {
        "title": "Software Developer",
        "dates": ["Jun 2023", "Present"],
        "tags": [],
        "desc": [
          "Developed and deployed a gRPC production API with a SQL backend to enable clients to efficiently integrate existing systems with thousands of pages of proprietary metrics.",
          "Implemented custom SQL Server stored procedures to automate the production of client requested reports.",
          "Executed a full redesign to upgrade a legacy GWT website's UI to be more intuitive and visually appealing."
        ]
      }
    ]
  },
  {
    "company": "Stevens Institute of Technology",
    "location": "Hoboken, NJ",
    "positions": [
      {
        "title": "Web Development Course Grader",
        "dates": ["Jan 2023", "Dec 2023"],
        "tags": [],
        "desc": [
          "Transformed automated grading software to grade hundreds of students in minutes instead of hours by eliminating dozens of manual tasks.",
          "Answered student questions relating to web concepts such as routing, database access, and security."
        ]
      },
      {
        "title": "Algorithms Course Teacher's Assistant",
        "dates": ["Aug 2022", "Dec 2022"],
        "tags": [],
        "desc": [
          "Provided personalized assistance to hundreds of students on topics such as algorithmic complexity, recursion, and graph algorithms to bridge any gaps in their understanding.",
          "Taught recitations and led exercises for over thirty students using C++ to further reinforce class concepts."
        ]
      },
      {
        "title": "Computer Architecture Researcher",
        "dates": ["Jun 2022", "Aug 2022"],
        "tags": [],
        "desc": [
          "Developed an ARM assembly emulator in Node.js with the Next.js framework to facilitate the learning experience of students taking the computer architecture class.",
          "Created interactive visualizations for CPU registers, RAM values, and hardware circuits so that hundreds of students may better understand how their code runs on a hardware level."
        ]
      }
    ]
  },
  {
    "company": "BMW of NA",
    "location": "Woodcliff Lake, NJ",
    "positions": [
      {
        "title": "Data Science Intern",
        "dates": ["Jan 2022", "May 2022"],
        "tags": [],
        "desc": [
          "Created new data aggregations in Tableau to construct useful visualizations for the evaluation of the market relevance of dozens of electric car charging networks to determine areas of focus in testing.",
          "Authored several new tools with HTML and JavaScript to harness previously useless data.",
          "Modified and installed a new backend system using a JavaScript implementation of OCPP to test centralized control of car chargers over the internet for the improvement of electric grid efficiency."
        ]
      }
    ]
  },
  {
    "company": "Stevens Institute of Technology",
    "location": "Hoboken, NJ",
    "positions": [
      {
        "title": "Data Structures Course Assistant",
        "dates": ["Aug 2021", "Dec 2021"],
        "tags": [],
        "desc": [
          "Provided personalized assistance to dozens of students on topics such as linked lists, trees, and sorting algorithms to bridge any gaps in their understanding.",
          "Taught recitations and led exercises on data structures to forty students using Java."
        ]
      }
    ]
  }
];

export default function Work() {
  return (
    <main>
      <Hero>
        <Title>
          <FlyIn text={"Work Experience"} />
        </Title>
      </Hero>
      {work.map((exp, i) =>
        <WorkExp exp={exp} seq={i + 1} key={i} />
      )}
    </main>
  );
};
