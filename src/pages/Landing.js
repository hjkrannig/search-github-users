import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import githubUsersImg from '../images/github-users.png'

const Landing = () => {
  const { logout } = useAuth0()

  return <Wrapper>
    <div className="container">
      <h1>Landing Page</h1>
      <h3>Here's what you gonna see...</h3>
      <img src={githubUsersImg} alt="github user" />
      <p>
        You need admin-support to be granted to our desktop-page.
         Contact me...
      </p>
      <button className='btn'
            onClick=
              {()=>logout({returnTo:window.location.origin})}>logout
      </button>
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    height: 50vh;
    width: 0 auto;
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Landing;
