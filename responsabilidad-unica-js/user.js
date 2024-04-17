function getFullName(name, lastname){
    return `${name} ${lastname}`.toUpperCase();
}

function createUser(name, lastname){
    return { userId: Date.now(), name, lastname };
}

module.exports = { getFullName, createUser };