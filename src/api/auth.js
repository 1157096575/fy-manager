import INDEX from 'api/index'

const API_URL = INDEX.API_URL;

export default {
    API_URL:API_URL,
    login: function (context, params) {
        return context.$axios({
            url: API_URL + '/login',
            method: 'POST',
            params: params
        });
    },
    signOut: function (context, params) {
        return context.$axios({
            'url': API_URL + '/logout',
            'method': 'GET',
            'params': params
        });
    }
}

