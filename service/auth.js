const userDAO = require('../dao/user-dao');
const bcrypt = require('bcrypt');

async function login(username, password) {
    try {
        const user = await userDAO.findUserByUsername(username);
        console.log(user.password);
        console.log(password);

        // we do not need to hash our plain text password
        // before we pass it to bcrypt.compare
        // bcrypt.compare will always return resolved Promise with a boolean value
        // indicating whether the password hashes match
        await bcrypt.compare(password, user.password).then(match => {
            console.log(match);
            if (match) {
                return {id: user.id, roles: user.roles};
            } else {
                return Promise.reject('wrong username or password');
            }
          })
          .catch();
      } catch(err) {
          return Promise.reject('user not found');
          console.error(err);
      }

}

module.exports = {login};