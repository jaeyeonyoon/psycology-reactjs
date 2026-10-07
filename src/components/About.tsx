import { useTranslation } from "react-i18next";
import Container from './Container';
import Accordions, { type AccordionProp } from './Accordions';


function About() {
  const { t } = useTranslation();
  const accordionProps: AccordionProp[] = [
    {
      summary: 'about_me',
      details:
        'I believe that everyone holds an inherent potential for learning and growth and am committed to respecting each persons cultural identity. I have experience working with adolescents and adults that come from various cultural backgrounds. I also have had the privilege to provide support to individuals that experience anxiety, depression, life transitions, self-esteem, stress management, and, grief and loss.',
    },
    {
      summary: 'populations',
      details:
        'Children (Ages 6 and up), Adolescents, Adults, Parents and Caregivers',
    },
    {
      summary: 'theraputic_approaches',
      details:
        'Solution Focused Therapy (SFT), Congitive Behavioral Therapy (CBT), Narrative Therapy, Acceptance and Commitment Therapy (ACT)',
    },
    {
      summary: 'education_and_trainings',
      details:
        'Education: Masters degree in Counselling, Bachelor of Arts: Psychology.  Trainings: Green Stream RMPTI',
    },
    {
      summary: 'affiliations',
      details:
        'College of Alberta Psychologists (CAP), Psychologist Association of Alberta (PAA)',
    },
    { summary: 'professional_experiences', details: '' },
    {
      summary: 'languages_spoken',
      details: 'English - Fluent, Tagalog - Basic',
    },
    {
      summary: 'fun_fact',
      details:
        'Desserts are my weakness and when I have some free time, I love trying new things to bake and baking bread has been fun to explore!',
    },
  ];

  // TODO: About section
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

        {/* TODO: sm:flex-col doesn't seem to be working */}
        <div className="flex flex-row gap-5 items-center justify-center">
          <div className=" h-full">
            {accordionProps.map((accordionProp) => (
              <Accordions accordionProp={accordionProp} />
            ))}
          </div>
          <img
            className="rounded-2xl shadow max-w-1/2 mx-10"
            src="./src/assets/jb-profile-pic-cropped.png"
          />
        </div>
      </section>
    </Container>
  );
}

export default About;