const uuid = require('uuid').v4;

// sid - username
const sessions = {};

const isValidSession = function(sid) {
    return sessions[sid]; 
}

const isValidateUsername = function(username) {
    if (!username) {
        return false;
    }
    const clean = username.replace(/[^A-Za-z0-9_]+/g, '');
    if (clean !== username || username === 'dog') {
        return false;
    }
    return true;
};

const checkPassword = function({username, password}) {
    return true;
} 
const createSession = function(username) {
    if (!username) {
        return {error:'missing-name'};
    }
    if (!isValidateUsername(username)) {
        return {error:'invalid-name'} ;
    }
    const sid = uuid();
    sessions[sid] = {
        username
    };
    return  sid ; 
}

const remove = function(sid) {
    delete sessions[sid];
}
const createUUID = function() {
    return uuid();
}
const session = {
    sessions,
    createUUID,
    isValidSession,
    isValidateUsername,
    createSession,
    remove,
    checkPassword
};

module.exports = session;
