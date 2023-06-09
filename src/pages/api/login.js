function login(username, password) {
    return new Promise(async (resolve, reject) => {
      const collection = await getMongoCollection(utilizadoresCollectionName);
      collection.findOne(
        { username, password },
        (err, user) => {
          if (err) {
            reject(err);
          } else if (user) {
            resolve(user);
          } else {
            reject(new Error("Invalid username or password"));
          }
        }
      );
    });
  }

  module.exports = { login }