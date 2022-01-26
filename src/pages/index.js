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
      <Block color="black">
        <Intro
          headline={`${posts.length} times I’ve sat down to write something as a blog.`}
          post
        >
          <p>
            I like to share my learnings, process of building something with others. I am not a regular writer but you can expect something rolling every few months ;)
          </p>
        </Intro>
      </Block>
      <Block color="dirty-white">
        <section id="previews">
          <PostPreviews posts={posts} />
        </section>
      </Block>
    </Layout>,
  ];
}
