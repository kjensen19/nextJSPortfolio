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
        <p>Hi, my name is Kyle. I am a software engineer, a collector of information only useful for cocktail parties and crossword puzzles, a lover of the oxford comma, and a consumer of coffee in all forms.</p>
        <p>
          My passion is learning, and this collection of projects is meant to showcase my trajectory as a developer. I had fun with these and I am excited to build on that knowledge.
        </p>
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
