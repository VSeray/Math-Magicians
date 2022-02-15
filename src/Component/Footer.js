import React from 'react';

function Footer() {
  return (
    <footer>
      Math Magicians &copy; Copyright &nbsp;
      {new Date().getFullYear()}
      , audited by Vana Seraydarian.
    </footer>
  );
}

export default Footer;
