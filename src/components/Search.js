import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
import FormRowSelect from './FormRowSelect';
import FormRow from './FormRow';
import {githubUsers} from '../utils.js/githubUsers';


const Search = () => {
  const [search, setSearch] = React.useState('')
  const [userOption, setUserOption] = React.useState(githubUsers[0])
  const {
    request, error, loading, 
    searchGithubUser } = useContext(GithubContext)

  // usersinfo for example: 
  // wesbos, sdras, cassidoo, jlengstorf, courthead, 
  // marcysutton,KyleAMathews

  function handleSubmit(e) {
    e.preventDefault()
    if (search) {
      searchGithubUser(search)
    }
  }

  function optionOnChange(e) {
      setUserOption(e.target.value)
      setSearch(e.target.value)
  }

  return <section className='section'>
    <Wrapper className='section-center'>
      {error.show && <ErrorWrapper>
        <p>{error.msg}</p>
      </ErrorWrapper>
      }
      <form onSubmit={handleSubmit}>

        {/* select-box */}
        <div className="form-control">
          <MdSearch />
          <FormRowSelect
            labelText='*' name='githubUsers' 
            value={userOption} 
            onChange={optionOnChange}
            optionList={githubUsers} 
          />
          {/* search-field */}
          <FormRow name='search' type='text'
            value={search} labelText='*'
            placeholder='enter search for user'
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* search-button */}
          {request > 0 && !loading &&
            <button type='submit'>search</button>}
        </div>
      </form>
      <h3>requests: {request}/60</h3>
    </Wrapper>
  </section>;
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem; */
    border-radius: 5px;
    padding: 0.5rem 1rem;
    select {
      background-color: transparent;
      color: var(--clr-grey-3);
      font-size: 1.1rem;
      border-color: var(--clr-grey-10);
    }
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
