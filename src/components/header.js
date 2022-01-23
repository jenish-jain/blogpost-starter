import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { configs } from '../configurations/configs.js';

export function Header() {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <header class='site-header'>
      <a href='/' rel='home' class='home'>
        {configs.blogName}
      </a>
      {/* <nav class='site-nav'>
        <a href='/posts'>Writing</a>
      </nav> */}
    </header>
  );
}
