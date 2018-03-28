import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <Menu inverted>
        <Menu.Item header>Adventure Tracker</Menu.Item>
        <Menu.Item as={Link} to='/' name='Home'>
        </Menu.Item>
        <Menu.Item as={Link} to='/adventures' name='Adventures'>
        </Menu.Item>
        <Menu.Item as={Link} to='/about' name='About'>
        </Menu.Item>
        <Menu.Item as={Link} to='/contact' name='Contact'>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
