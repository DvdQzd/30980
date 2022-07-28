let Users = [];

const add = (username, password, address) => {
    const userExists = get(username);
    if(userExists) {
        throw new Error
    }

    const user = {username, password, address};
    Users.push(user);
    return user;
};

const get = (username) => (Users.find(el => el.username === username));


module.exports = {
    add,
    get
}