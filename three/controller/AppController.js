const axios = require('axios');
const service = require("./AppService");
const constants = require("../constants");

class AppController {
    fetch(query) {
        let list = [];
        return new Promise((resolve, reject) => {
            axios.get(constants.searchURL(query, 1))
            .then(response => response.data)
            .then(result => {
                list = list.concat(result.data.map((a) => { return a.Title}))
                if(result.total_pages > 1) {
                    //fetch more in sync
                    let multiple = [];
                    let counter = 0;
                    while(counter + 2 <= result.total_pages) {
                        multiple[counter] = this.getPaginated(query, counter + 2);
                        counter++;
                    }
                    Promise.all(multiple)
                    .then(data => [].concat.apply([], data))
                    .then(data => data.map(e => list.push(e)))
                    .then(fullList => {
                        list = list.sort();
                    })
                    .then(f => {
                        resolve({status: true, data: list})
                    })
                } else {
                    if(result.total === 0) {
                        reject("Empty")
                    } else{
                        resolve({status: true, data: list});
                    }
                }
            })
        });
    }

    getPaginated(query, page) {
        return axios.get(constants.searchURL(query, page))
            .then(result => result.data.data.map((t) => t.Title))
            .catch(err => [])
    }
}

module.exports = AppController;
