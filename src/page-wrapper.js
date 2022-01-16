/** @jsx h */
import { Fragment, h } from 'preact';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/preact';
import { PostWrapper } from './components/post-wrapper.js';
import { PostAside } from './components/post-aside.js';
import { PostImage } from './components/post-image.js';
import { PostTweetBox } from './components/post-tweet-box.js';

function BaseComponent({ type, children, ...props }) {
  return type === 'post' ? <PostWrapper {...props}>{children}</PostWrapper> : <div {...props}>{children}</div>;
}

export default ({ children, type = 'page', ...meta }) => {
  return (
    <div>
      <Helmet>
        <html lang='en' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/styles/index.css' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff87d4' />
        <meta name='msapplication-TileColor' content='#ffe742' />
        <meta name='theme-color' content='#ffe742' />
      </Helmet>
      <MDXProvider
        components={{
          PostAside,
          PostImage,
          PostTweetBox,
        }}
      >
        <BaseComponent type={type} {...meta}>
          {children}
        </BaseComponent>
      </MDXProvider>
    </div>
  );
};
