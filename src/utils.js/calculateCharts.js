export function calculateLanguageChartData(repos) {
  // most popular and mostly used languages
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) {
      return total
    } else if (!total[language]) {
      total[language] = {
        label: language, value: 1, stars: stargazers_count
      }
    } else {
      total[language].value += 1
      total[language].stars += stargazers_count
    }
    return total
  }, {})

  // creating sorted and sliced array for 
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)
  // console.log(mostUsed)

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars }
    })
  // console.log(mostPopular)

  return { mostUsed, mostPopular }
}


export function calculateReposeChartDate(repos) {

  // most popular repos
  let { stars, forks } = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item
    total.stars[stargazers_count] = {
      label: name, value: stargazers_count
    }
    total.forks[forks] = { label: name, value: forks }
    return total
  }, { stars: {}, forks: {} })

  // creating sliced-arrays from the end of the objects
  // and show them ascending...
  stars = Object.values(stars)
    .slice(-5)
    .reverse()
  // console.log(stars)

  forks = Object.values(forks)
    .slice(-5)
    .reverse()
  // console.log(forks)

  return { stars, forks }
}