import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import homeStyles from '../styles/Home.module.css'

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
        <p>Hi, I'm Kyle. I'm a software engineer, a collector of information only useful for cocktail parties and crossword puzzles, and a consumer of caffeine in all forms.</p>
        <p>
          More clever text goes here
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={homeStyles.postHolder}>
          {allPostsData.map(({ id, date, title }) => (
          <div className={homeStyles.card} key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </div>
        
          ))}
        </div>
      </section>
    </Layout>
  );
}



{/* <ul className={utilStyles.list}> */}
// </ul>
