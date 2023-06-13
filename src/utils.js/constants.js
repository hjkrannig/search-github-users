export const ROUTES = { 
  dashboard: '/', 
  login: '/login',
  not_allowed: '/not_allowed',
  landing: '/landing',
 }

export const chartColors = ['#f0db4f', '#f0dbff', '#0ff00f', '#0fdffa', '#f2f0af', '#e66b6b'].sort((a, b) => Math.random() - 0.5)


export const apiUrls = {
  Root: 'https://api.github.com',
  GetUser: 'https://api.github.com/users/',
  PerPage: '?per_page=100',
  ReposAdd: '/repos?per_page=100',
  FollowersAdd: '/followers/?per_page=100',
  RateLimit: 'https://api.github.com/rate_limit',
}
