import React from 'react';

function Footer() {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul className="footer-nav">
        <li><a href="#">Home</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">tips</a></li>
          <li>&copy; {new Date().getFullYear()} Valet Industries,Inc</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
