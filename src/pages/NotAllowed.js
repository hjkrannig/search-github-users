import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES as page } from '../utils.js/constants';


const NotAllowed = () => {
  return <Wrapper>
    <div>
      <h1>404</h1>
      <h3>
        sorry, you are not authorized to visit the desktop-page...
      </h3>
      <Link to={page.landing} className="btn">
        back to landing-page</Link>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default NotAllowed;
