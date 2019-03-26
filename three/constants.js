module.exports = {
    searchURL: (query, page = 1) => {
        return `https://jsonmock.hackerrank.com/api/movies/search/?Title=${query}&page=${page}`
    }
}
