import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image';
import primeResume from '../public/images/primeResume.png'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
//Quotes could be placed in an array and then mapped over instead of hardcoded (could enable randomizing)
//Need to look into if calling the linkedin/github here and in layout is serving any purpose. sizing maybe?
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
                alt="github icon"
                className={utilStyles.socImg}
                
              
              />
              </a>
              <a href='www.linkedin.com/in/kyle-jensen-solutions' target="_blank" rel="noreferrer">
              <Image
                priority
                src="/images/In-White-34.png"
                height={34}
                width={34}
                alt="LinkedIn Icon"
                className={utilStyles.socImg}
                />
                </a>
        </div>
        <div className={homeStyles.buildingBlocks}>
          <p className={homeStyles.content}>Hi, my name is Kyle. I am a software engineer, a collector of information only useful for cocktail parties and crossword puzzles, and a lover of the oxford comma.</p>
          <div className={homeStyles.quoteContainer}>
            <p className={homeStyles.quote}>One learns by doing a thing; for though you think you know it, you have no certainty until you try ― Sophocles</p>
          </div>
        </div>
        <h2 className={utilStyles.heading2Xl}>Past & Present</h2>
        <div className={homeStyles.buildingBlocks}>
          <Link href={'https://kjensen19.github.io/'} id='resLink'>
            <div className={homeStyles.primeResume}>
              <Image
                priority
                src={primeResume}
                alt="First webpage/resume"
                className={homeStyles.resPic}
                />
              </div>
            </Link>
          <p className={homeStyles.content}>My passion is learning and this collection of projects showcases my versatility, adaptability. From the simple, slightly garish resume to the left that I made in July to this obviously sophisticated piece of modern web design in a scant few months. I am looking for new things to build and new problems to <span style={{'textDecoration': 'line-through'}}>create</span> solve.</p>
        </div>
          <h2 className={utilStyles.heading2Xl} style={{'paddingBottom': '4rem'}}>Skills</h2>
          <div className={homeStyles.doubleContent} style={{'marginRight': '.5rem'}}>
            <p>Languages: Javascript Python Go C#</p>
            <p>Frontend: React NextJS HTML CSS Redux Redux-sagas MaterialUI Bootstrap</p> 
            <p>Backend: Node.js .NET Gin Django+REST Entity APIs JSON HTTP OAuth2 Passport</p>
            <p>Database: SQL PostgreSQL MySQL Supabase DynamoDB</p>
            <p>Cloud: AWS: Lambda IAM Cognito API gateway Google Cloud Platform</p> 
            <p>Testing: Postman Jest Cypress </p>
            <p>Collab: GIT GitHub Agile Trello</p>
          </div> 
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.heading2Xl} style={{'paddingBottom': '4rem'}}>Projects</h2>
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
                alt="Post image"
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
