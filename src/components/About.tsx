import { useTranslation } from "react-i18next";
import Container from './Container';
import Accordions, { type AccordionProp } from './Accordions';


function About() {
  const { t } = useTranslation();
  const accordionProps: AccordionProp[] = [
    {
      id: 1,
      summary: 'about_me',
      details: (
        <div className="p-4">
          <p className="p-4">
            Hi there! I believe that everyone holds an inherent potential for
            learning and growth and am committed to respecting each persons
            cultural identity. I have experience working with adolescents and
            adults that come from various cultural backgrounds. I also have had
            the privilege to provide support to individuals that experience
            anxiety, depression, life transitions, self-esteem, stress
            management, and, grief and loss.
          </p>
          <p className="p-4">
            I practice Solution Focused Therapy, Cognitive Behavioural Therapy
            (CBT), Narrative Therapy, Acceptance and Commitment Therapy (ACT)
            approaches and techniques when appropriate. You are taking the steps
            to seek for counselling support to navigate life's obstacles and
            challenges and I look forward to working collaboratively alongside
            you!
          </p>
          <p className="p-4">
            I am dedicated to fostering a practice that is inclusive and
            respectful of the diverse ways we experience and express ourselves.
            If you’re interested in exploring how we might work together, I
            welcome you to reach out.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      summary: 'populations',
      details: (
        <ul className="p-4">
          <li className="list-disc mx-4">Children (Ages 6 and up)</li>
          <li className="list-disc mx-4">Adolescents</li>
          <li className="list-disc mx-4">Adults</li>
          <li className="list-disc mx-4">Parents and Caregivers</li>
        </ul>
      ),
    },
    {
      id: 3,
      summary: 'theraputic_approaches',
      details: (
        <ul className="p-4">
          <li className="list-disc mx-4">Acceptance and Commitment (ACT)</li>
          <li className="list-disc mx-4">Cognitive Behavioural (CBT)</li>
          <li className="list-disc mx-4">Compassion Focused</li>
          <li className="list-disc mx-4">Culturally Sensitive</li>
          <li className="list-disc mx-4">Dialectical Behavior (DBT)</li>
          <li className="list-disc mx-4">Mindfulness-Based (MBCT)</li>
          <li className="list-disc mx-4">Multicultural</li>
          <li className="list-disc mx-4">Person-Centered</li>
          <li className="list-disc mx-4">Solution Focused Brief (SFBT)</li>
          <li className="list-disc mx-4">Strength-Based</li>
        </ul>
      ),
    },
    {
      id: 4,
      summary: 'education_and_trainings',
      details: (
        <div>
          <h2 className="font-bold">Education</h2>
          <ul className="p-4">
            <li className="list-disc mx-4">Masters degree in Counselling</li>
            <li className="list-disc mx-4">Bachelor of Arts: Psychology</li>
          </ul>
          <h3 className="font-bold">Trainings</h3>
          <ul className="p-4">
            <li className="list-disc mx-4">Green Stream RMPTI</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      summary: 'affiliations',
      details: (
        <ul className="p-4">
          <li className="list-disc mx-4">
            College of Alberta Psychologists (CAP)
          </li>
          <li className="list-disc mx-4">
            Psychologist Association of Alberta (PAA)
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      summary: 'languages_spoken',
      details: (
        <ul className="p-4">
          <li className="list-disc mx-4">English - Fluent</li>
          <li className="list-disc mx-4">Tagalog - Basic</li>
        </ul>
      ),
    },
  ];

  return (
    <Container>
      <section
        id="about"
        className="flex flex-col p-8 items-center justify-center min-h-screen"
      >
        <div className="mb-10">
          <h1 className="text-6xl md:text-7xl text-black font-semibold">
            {t('about_me')}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <img
            className="rounded-2xl shadow max-w-1/2 mx-10"
            src="./src/assets/jb-profile-pic-cropped.png"
          />
          <div className=" h-full">
            {accordionProps.map((accordionProp) => (
              <Accordions
                key={accordionProp.id}
                accordionProp={accordionProp}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default About;