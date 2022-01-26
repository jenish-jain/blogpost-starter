import { h } from 'preact';
import { Helmet } from 'react-helmet';
import { useSettings } from '../context/settings.js';
import { configs } from '../configurations/configs.js';

export function SEO({
  title = 'Your own blog site!',
  description = 'An easy to set up custom blog site, built with MDX and preact',
  url = configs.websiteUrl,
  image = 'https://avatars.dicebear.com/api/big-ears-neutral/post.svg',
  post = false,
}) {
  const { darkMode } = useSettings();

  return (
    <Helmet defer={false}>
      <link rel='shortcut icon' type='image/x-icon' href='https://avatars.dicebear.com/api/big-ears-neutral/post.svg' />
      <title>{title}</title>
      <link rel='canonical' href={url} />
      <meta name='description' content={description} />
      <meta name='image' content={image} />

      <meta property='og:type' content={post ? 'article' : 'website'} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      <meta name='twitter:widgets:theme' content={darkMode ? 'dark' : 'light'} />
      <meta name='twitter:dnt' content='on' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={configs.twitterHandel} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <body class={darkMode ? 'dark' : 'light'} />
    </Helmet>
  );
}
