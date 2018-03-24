import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <Menu>
        <Menu.Item header>Adventure Tracker</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name="home"/>
        </Menu.Item>
        <Menu.Item as={Link} to='/adventures' name='Adventures'>
        </Menu.Item>
        <Menu.Item as={Link} to='/adventures/new' name='Add An Adventure'>
        </Menu.Item>
        <Menu.Item as={Link} to='/about' name='About'>
        </Menu.Item>
        <Menu.Item as={Link} to='/contact' name='Contact Us'>
          <Icon name="mail"/>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
