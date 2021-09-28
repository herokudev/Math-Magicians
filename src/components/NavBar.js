import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator/',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote/',
      text: 'Quote',
    },
  ];

  return (
    <nav className="nav-menu">
      <h1 className="nav-title">Math Magicians</h1>
      <ul className="nav-menu-list">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
