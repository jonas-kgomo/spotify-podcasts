import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';

// Data from the pageQuery below is available as props to your page component!
const PodcastPage = ({
  data: {
    allSimplecastPodcastEpisode: { edges: episodes },
  },
}) => {
  return (
    <Layout>
      <h1>My Podcast Episodes</h1>
      <ul>
        {episodes.map(({ node }) => (
          <li key={node.id}>
            <article>
              <h2>
                Episode {node.number}: {node.title}
              </h2>
              <p>Published {node.publishedAt}</p>
              <hr />
              <p>{node.description}</p>
              <a href={`/podcasts/${node.slug}`}>Listen</a>
              <a href={node.enclosureUrl}>Download</a>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PodcastPageQuery {
    allSimplecastPodcastEpisode {
      edges {
        node {
          id
          slug
          enclosureUrl
          number
          publishedAt(formatString: "MMMM D, Y")
          title
          description
        }
      }
    }
  }
`;

export default PodcastPage;