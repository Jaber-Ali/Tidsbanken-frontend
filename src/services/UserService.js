const axios = require('axios');

export const getUser = (email) => {
    axios.get('https://tidsbanken-experis.azurewebsites.net/api/user/'+email)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
export const findUser = (email) => {
    axios.get('https://tidsbanken-experis.azurewebsites.net/api/findUser', {
        params: {
            email: email
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}