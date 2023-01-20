import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import MotionLayout from '../../components/motionLayout';

export default function Post({ postData }) {

  // MotionLayout applies the page load animation declared in motionLayout.js to each post
  // Layout applies the style laid out in layout component
    return (
      <MotionLayout>
        <Layout>
            <Head>
              <title>{postData.title}</title>
            </Head>
            <article>
              <h1 className={utilStyles.headingXl}>{postData.title}</h1>
              <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
      </MotionLayout>
    );
  }

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

