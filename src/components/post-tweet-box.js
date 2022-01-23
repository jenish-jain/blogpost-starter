/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { configs } from '../configurations/configs.js';

export function PostTweetBox({ quote, retweetId = false }) {
  const [location, setLocation] = useState(configs.websiteUrl);

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  const url = new URL('https://twitter.com/');

  if (retweetId) {
    url.pathname = '/intent/retweet';
    url.search = new URLSearchParams({ tweet_id: retweetId });
  } else {
    url.pathname = '/compose/tweet';
    url.search = new URLSearchParams({
      text: `“${quote}” —@${configs.twitterHandel}`,
      url: location,
      related: `${configs.twitterHandel}`,
    });
  }
  return (
    <div class="post-tweet-box">
      <p>{quote}</p>
      <p class="post-tweet-link">
        <a href={url}>Tweet this</a>
      </p>
    </div>
  );
}
