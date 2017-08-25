import http from 'axios'

export function getStarships (page = 1) {
  return http.get(process.env.SWAPI_URL + 'starships/?page=' + page).then(response => {
    console.log(response.data)
    return response.data
  })
}
