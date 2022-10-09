import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

import { Experience, PageInfo, Project, Skill, Social } from '../typings'


import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchsocials } from '../utils/fetchSocials'
import { fetchpageInfo } from '../utils/fetchPageInfo'
import { urlFor } from '../sanity'
import Image from 'next/image'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        {/* <title>{pageInfo?.name} - Portfolio</title> */}
        <meta name="description" content="NAND KISHORE personal portfolio" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start '>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              className='h-8 w-8 rounded-full filter grayscale hover:grayscale-0 bg-[#F7AB0A]'
              src={urlFor(pageInfo?.heroImage).url()}
              alt="" width={30} height={30} />
          </div>
        </footer>

      </Link>

    </div >
  )
}

export default Home


// getStaticProps 
export const getStaticProps: GetStaticProps<Props> = async () => {


  const pageInfo: PageInfo = await fetchpageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchsocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    // NextJs will attempt to re-generate the page;
    // - When a request  comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }

}
