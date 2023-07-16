import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import './globals.css'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <header>
        <title>Masahiro&#39;s Portofolio</title>
      </header>

      <Header socials={ socials }/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={ pageInfo } />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={ pageInfo }/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={ experiences } />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={ skills }/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={ projects }/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
      
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = fetchPageInfo();
  const experiences: Experience[] = fetchExperiences();
  const skills: Skill[] = fetchSkills();
  const projects: Project[] = fetchProjects();
  const socials: Social[] = fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
}

export default Home;