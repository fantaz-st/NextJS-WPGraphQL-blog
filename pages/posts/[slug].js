import { getPostData, fetchApi } from '../../helpers/fetchApi';

import { postContentQuery, allSlugsQuery } from '../../helpers/queryLists';
import Layout from '../../components/Layout/Layout';
import PostHeader from '../../components/Post/PostHeader';

import PostContent from '../../components/Post/PostContent/PostContent';
import PostTableOfContents from '../../components/Post/PostTableOfContents';

const SinglePost = ({ data: { title, content, author, categories, date } }) => {
  /* if (categories.nodes.some((cat) => cat.name === 'banner')) {
    console.log('banner');
    return <PostContent content={content} />;
  } */
  return (
    <>
      <Layout>
        <article>
          <PostHeader title={title} author={author} date={date} categories={categories} />
          <PostTableOfContents />
          <PostContent content={content} />
        </article>
      </Layout>
    </>
  );
};

export default SinglePost;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;

  const query = postContentQuery(slug);
  const postData = await fetchApi(query);

  return {
    props: {
      data: postData.postBy,
    },
  };
};

export const getStaticPaths = async () => {
  const allSlugs = await fetchApi(allSlugsQuery);

  const slugArray = allSlugs.posts.nodes.map((slug) => `/posts/${slug.slug}`);

  return {
    paths: slugArray || [],
    fallback: true,
  };
};
