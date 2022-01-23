/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { configs } from '../configurations/configs.js';

export function PostPreviews({ posts }) {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    // this is pretty hacky and extremely fragile
    // we’re basically doing CSS calculations that will break if the CSS changes
    setColumns(Math.min(4, Math.floor((window.innerWidth * 0.9 + 48) / 298)));
  }, []);

  return (
    <div class='post-previews'>
      {posts.map((post, index) => (
        <div class='post-preview' key={`featured-post-${index}`}>
          {post.site && (
            <p class='post-preview-site'>
              <img src={`https://res.cloudinary.com/${configs.cloudinaryConfigs.cloudName}/image/fetch/w_32,h_32,c_fill,g_face,q_auto,f_auto/${configs.sitesInfo[post.site].icon}`} alt={configs.sitesInfo[post.site].name} loading='lazy' height={16} width={16} />
              {configs.sitesInfo[post.site].name}
            </p>
          )}
          {index < columns 
          && 
          <img src={post.thumb} alt='' class='post-preview-image' loading='lazy' width={250} height={125} />}

          <h3 class='post-preview-title'>
            <a href={post.url || `/${post.slug}`} class='post-preview-title-link'>
              {post.title}
            </a>
          </h3>
          <p class='post-preview-description'>{post.description}</p>
          <span aria-hidden='true' class='post-preview-link'>
            Read this post &rarr;
          </span>
        </div>
      ))}
    </div>
  );
}
