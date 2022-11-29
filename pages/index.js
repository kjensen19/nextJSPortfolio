import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.socialFrame}>
          <a href='https://github.com/kjensen19' target="_blank" rel="noreferrer">
              <Image
                priority
                src="/images/GitHub-Mark-Light-32px.png"
                height={32}
                width={32}
                alt=""
                className={utilStyles.socImg}
                
              
              />
              </a>
              <a href='www.linkedin.com/in/kyle-jensen-solutions' target="_blank" rel="noreferrer">
              <Image
                priority
                src="/images/In-White-34.png"
                height={34}
                width={34}
                alt=""
                className={utilStyles.socImg}
                />
                </a>
        </div>
        <p>Hi, my name is Kyle. I am a software engineer, a collector of information only useful for cocktail parties and crossword puzzles, a lover of the oxford comma, and a consumer of coffee (and caffeine) in all forms. In what sometimes seems like another life I studied literature and my bookshelves still run the gamut from Rumi, to Sophocles, to Neal Stephenson, and everything in-between. In my downtime I love to cook, re-play old videogames, and spend time with my family.</p>
        <p>
          My passion is learning and this collection of projects is meant to showcase my trajectory as a developer. From a simple, slightly garish calculator to this obviously sophisticated piece of modern web design in a scant few months. After completing the accelerated fullstack program at Prime Digital Academy I'm looking for new problems to solve and exploring technologies that interest me: NextJS, OOP, testing frameworks cypress/jest/jmeter, and anything else that strikes my fancy! If you're looking for a passionate and dedicated developer who wants to learn, please check out my projects, github, and/or Linkedin and then feel free to contact me: kjensen19@gmail.com .
        </p>
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <p>Javascript React Redux Sagas NodeJS HTML CSS SQL NextJS MaterialUI Bootstrap APIs GIT GitHub</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={homeStyles.postHolder}>
          {allPostsData.map(({ id, date, title, img }) => (
          <Link href={`/posts/${id}`} key={id}>
            <div className={homeStyles.card} >
              
                {title}
              
              <Image
                priority
                src={img}
                height={144}
                width={200}
                alt=""
                className={homeStyles.img}
              />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </div>
          </Link>
        
          ))}
        </div>
      </section>
    </Layout>
  );
}



{/* <ul className={utilStyles.list}> */}
// </ul>
