/** @jsx h */
import { h } from 'preact';
import { SEO } from '../components/seo.js';
import { Layout } from '../components/layout.js';
import { Block } from '../components/block.js';
import { Intro } from '../components/intro.js';
import { PostPreviews } from '../components/post-previews.js';

export default function Posts({ posts }) {
  return [
    <SEO
      title='An mdx blogsite'
      description="A blog site build with toast, mdx and lots of chai."
    />,
    <Layout>
      <Block color="yellow">
        <Intro
          headline={`These are ${posts.length} things i thought would be helpful for others`}
          post
        >
          <p>
            This is my personal thought dump.
          </p>
        </Intro>
      </Block>
      <Block color="white">
        <section id="previews">
          <PostPreviews posts={posts} />
        </section>
      </Block>
    </Layout>,
  ];
}