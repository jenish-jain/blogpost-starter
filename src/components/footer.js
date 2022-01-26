import { h } from 'preact';

export function Footer() {
  return (
    <footer class="footer">
      <span>powered by thoughts</span>
      <nav class="footer-nav">
        <a href="/posts">posts</a>
        <a href="https://github.com/jenish-jain/blogpost-starter">source code</a>
      </nav>
    </footer>
  );
}
