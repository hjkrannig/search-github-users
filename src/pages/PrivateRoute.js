import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Navigate} from 'react-router-dom'
import { ROUTES as page} from '../utils.js/constants'
import UserGroups from '../utils.js/usergroups'
import axios from 'axios'

const PrivateRoute = ({children,}) => {
  const {isAuthenticated, user, } = useAuth0()
  const isUser = isAuthenticated && user
  if (!isUser) {
    return <Navigate to={page.login} />
  }

  // Todo: Code noch bereinigen. Versuche die roles aus auth0
  //      einzulesen sind noch nicht abgeschlossen.

  // console.log({user});

  // if (UserGroups.user.indexOf(user.email) >= 0) {
  //   console.log(`User ${user.name} is user...`);
  // } 
  // if (UserGroups.admin.indexOf(user.email) >=0 ) {
  //   console.log(`User ${user.name} is admin...`);
  // } 

  // not allowed!
  if (UserGroups.admin.indexOf(user.email) < 0 ) {
    return <Navigate to={page.not_allowed} />
  } 
    

  // Versuche mit user.group in auth0
  const auth0_cookie = localStorage.getItem(
    '@@auth0spajs@@::Tlvx6bMS6FvEY6gbi20aTRAwiMmnDgCG::default::openid profile email')

  let token = JSON.parse(auth0_cookie).body.token
  const domain = process.env.REACT_APP_AUTH_DOMAIN
  const options = {
    method: 'GET',
    url: `https://${domain}/api/v2/users/${user.sub}/roles`,
    headers: {
      authorization: 'Bearer ' + token,
    }
  }
  // response: unauthorized request 400
  // axios.request(options)
  // .then (response => console.log(response.data))
  // .catch((err) => console.log(err))

  return children // return <>{children}</>
}

export default PrivateRoute

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://{yourDomain}/api/v2/users/USER_ID/roles',
//   headers: {authorization: 'Bearer MGMT_API_ACCESS_TOKEN'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
