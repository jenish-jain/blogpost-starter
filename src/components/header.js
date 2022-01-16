import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export function Header() {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <header class='site-header'>
      <a href='/' rel='home' class='home'>
        Jenish's Blogs
      </a>
      {/* <nav class='site-nav'>
        <a href='/posts'>Writing</a>
      </nav> */}
    </header>
  );
}
