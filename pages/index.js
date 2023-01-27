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
        <h2 className={homeStyles.tags}></h2>
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
          <p className={homeStyles.content}>Hi, my name is Kyle. I am a software engineer, a collector of information only useful for crossword puzzles, and a lover of the oxford comma.</p>
          <p className={homeStyles.quote}>One learns by doing a thing; for though you think you know it, you have no certainty until you try.<br></br> ―Sophocles</p> 
            <div className={homeStyles.skillsContainer}>
              <header className={utilStyles.heading2Xl} ><a download href={'KyleJensenResume.pdf'}>Resume</a></header>
              <div className={homeStyles.skillsLists}>
                <ul className={homeStyles.skills}>Languages <li>Javascript</li><li>Python</li><li>Go</li></ul>
                <ul className={homeStyles.skills}>Frontend <li>React</li><li>NextJS</li><li>HTML</li><li>CSS</li><li>Redux</li><li>Bootstrap</li></ul> 
                <ul className={homeStyles.skills}>Backend <li>Node.js</li><li>Gin</li><li>Django</li><li>REST APIs</li></ul>
                <ul className={homeStyles.skills}>Database <li>SQL</li><li>PostgreSQL</li><li>DynamoDB</li></ul>
                <ul className={homeStyles.skills}>Cloud(AWS) <li>Lambda</li><li>Cognito</li><li>API Gateway</li></ul> 
                <ul className={homeStyles.skills}>Testing <li>Postman</li><li>Jest</li><li>Cypress</li></ul>
                <ul className={homeStyles.skills}>Collab <li>GIT</li><li>GitHub</li><li>Agile</li><li>Trello</li></ul>
              </div>
            </div>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        <div className={homeStyles.postHolder}>
        <h2 className={utilStyles.heading2Xl} style={{'position':'absolute', 'top':'0'}}>Projects</h2>
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
