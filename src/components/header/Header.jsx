import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/tmovie.png';

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
];

const Header = () => {
  const { pathname } = useLocation();

  const active = headerNav.findIndex(e => e.path === pathname);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Nav.Link as={Link} to="/" style={{ color: '#fff' }}>
          <Navbar.Brand>
            <img alt="" src={logo} width="30" className="d-inline-block align-top" />
          </Navbar.Brand>
          tMovies
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              headerNav.map((e, i) => (
                <Nav.Link as={Link} key={i} active={i === active} to={e.path}>
                  {e.display}
                </Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;