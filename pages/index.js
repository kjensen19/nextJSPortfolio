import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image';
import primeResume from '../public/images/primeResume.png'
import shiningforce from '../public/images/shiningforce.png'


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
        <div className={homeStyles.buildingBlocks}>
          <p className={homeStyles.content}>Hi, my name is Kyle. I am a software engineer, a collector of information only useful for cocktail parties and crossword puzzles, a lover of the oxford comma, and a consumer of coffee and caffeine in all forms. In what sometimes seems like another life I studied literature and my bookshelves still run the gamut from Rumi, to Sophocles, to Neal Stephenson, and everything in-between. In my downtime I love to cook, re-play old videogames, and spend time with my family.</p>
          <div className={homeStyles.quoteContainer}>
            <p className={homeStyles.quote}>Set your life on fire. Seek those who fan the flames - Jalāl ad-Dīn Muhammad Balkhī</p>
            <p className={homeStyles.quote}>One learns by doing a thing; for though you think you know it, you have no certainty until you try ― Sophocles</p>
            <p className={homeStyles.quote}>What is hard, in hacking as in fiction, is not writing, it is deciding what to write ― Neal Stephenson</p>
          </div>
          <div className={homeStyles.sfContainer}>
            <Image
              priority
              src={shiningforce}
              alt="Shining Force II"
              className={homeStyles.sfPic}
            />
          </div>
        </div>
        <div className={homeStyles.buildingBlocks}>
          <div className={homeStyles.primeResume}>
            <Image
              priority
              src={primeResume}
              alt="First webpage/resume"
              className={homeStyles.resPic}
              />
            </div>
          <p className={homeStyles.content}>My passion is learning and this collection of projects is meant to showcase my trajectory as a developer. From the simple, slightly garish resume that I built in order to get into Prime to this obviously sophisticated piece of modern web design in a scant few months. After completing the accelerated fullstack program at Prime I am looking for new things to build and new problems to <span style={{'text-decoration': 'line-through'}}>create</span> solve.</p>
        </div>
        <div className={homeStyles.buildingBlocks}>
          <div className={homeStyles.content} style={{'margin-right': '.5rem'}}>
            <h2 className={utilStyles.headingXl}>Skills: </h2>
            <p> Javascript React Redux Sagas NodeJS HTML CSS SQL NextJS MaterialUI Bootstrap APIs GIT GitHub</p>
          </div>
          <div className={homeStyles.content} style={{'margin-left': '.5rem'}}>
            <h2 className={utilStyles.headingXl}>Learning:</h2>
            <p>AWS: Lambda Amplify Dynamo IAM, Testing: Jest Cypress <br></br>Other: NextJS</p>
          </div>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.heading2Xl}>Projects</h2>
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
