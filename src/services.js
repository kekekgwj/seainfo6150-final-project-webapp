

export const checkSession = () => {
    return fetch('/api/session', {
        method: 'GET',
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if( response.ok ) {
            return response.json();
        }
        return response.json().then( err => Promise.reject(err));
    });
};

export const performLogin = ({username}) => {
    return fetch('/api/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify( {username} )
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject( err) );
    })
};

export const endSession = () => {
    return fetch('/api/session', {
        method: 'DELETE',
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            return Promise.resolve();
        }
        return response.json().then( err => Promise.reject( err) );
    })

};

export const getMovieData = (id) => {
    return fetch(`/api/movie?id=${id}`, {
        method: 'GET'
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject( err) );
    })
}
export const getMovieListData = () => {
    return fetch('/api/movielist', {
        method: 'GET'
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject( err) );
    })
}

export const getUserReview = () => {
    return fetch(`/api/home`, {
        method: 'GET'
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject( err) );
    })
}


export const sendReviw = (review) => {
    return fetch('/api/review', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify(review)
    })
    .catch( () => {
        return Promise.reject( {error: 'network-error'} );
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then( err => Promise.reject( err) );
    })
};