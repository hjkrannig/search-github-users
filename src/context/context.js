import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { apiUrls } from '../utils.js/constants';

const GithubContext = React.createContext()

// Provider, Consumer - GithubContext.Provider
const GithubProvider = ({ children }) => {
  // user, followers, repos
  const [githubUser, setGithubUser] = useState(mockUser)
  const [followers, setFollowers] = useState(mockFollowers)
  const [repos, setRepos] = useState(mockRepos)


  // request, error, loading
  const [request, setRequest] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  async function searchGithubUser(user) {
    // toggle error to default (no error)
    toggleError()
    setLoading(true)
    // userinfo
    const response = await axios(apiUrls.GetUser + user)
    .catch((err => console.log(err)))
    if (response) {
      setGithubUser(response.data)
      // display data only when everything was coming back...
      const { followers_url, repos_url } = response.data
      await Promise.allSettled([
        axios(repos_url + apiUrls.PerPage),
        axios(followers_url + apiUrls.PerPage)])
        .then((results) => {
          const [repos, followers] = results
          const status_ok = 'fulfilled'
          if (repos.status === status_ok) {
            setRepos(repos.value.data)
          }
          if (followers.status === status_ok) {
            setFollowers(followers.value.data)
          }
        })
        .catch((err) => console.log(err))
    } else {
      toggleError(true, '...no user matches!')
    }
    checkRequests()
    setLoading(false)
  }
  function checkRequests() {
    axios(apiUrls.RateLimit)
      .then(({ data }) => {
        const { remaining } = data.rate
        setRequest(remaining)
        if (!remaining) {
          toggleError(true, 'sorry, no more requests allowed...')
        }
      })
      .catch((err) => { console.log(err) })
  }
  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  useEffect(checkRequests, [])

  return <GithubContext.Provider value={
    {
      githubUser, searchGithubUser, followers, repos,
      loading, request, error
    }
  }>
    {children}
  </GithubContext.Provider>
}

export { GithubProvider, GithubContext }
