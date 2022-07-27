let Users = [];

const add = (name, password) => {
    const userExists = get(name);
    if(userExists) {
        throw new Error
    }

    const user = {name, password};
    Users.push(user);
    return user;
};

const get = (name) => (Users.find(el => el.name === name));


module.exports = {
    add,
    get
}