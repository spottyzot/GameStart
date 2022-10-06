const pool = require('../connection.js')


//ALL USING USER ID AT THE MOMENT (can change to firebase AUTH ID)
module.exports = {

  updateAddress: (address, userID) => {
    //query to update user address
    const queryStr = `UPDATE users SET address = $1 WHERE fiyabase_authkey = $2`
    return pool.query(queryStr, [address, userID])
      .then(() => {
        return;
      })
      .catch((err) => {
        console.log(err, 'updateAddress')
      })
  },

  createUser: (userInfo) => {
    //query to insert new user
    const queryStr = `INSERT INTO users (first_name, last_name, username, password, email) VALUES ($1, $2, $3, $4, $5)`
    const {first_name, last_name, username, password, email_address} = userInfo
    return pool.query(queryStr, [first_name, last_name, username, password, email_address])
      .then(() => {
        console.log('this is inside this')
        return;
      })
      .catch((err) => {
        console.log(err, 'createUser');
      })
  },

  addConsoles: (system, userID) => {
    //query to add consoles to user table (should be done consecutively for each console)
    const queryStr = 'INSERT INTO consoles (ownerId, console) VALUES ($1, $2)';
    return pool.query(queryStr, [userID, system])
      .then(() => {
        return;
      })
      .catch((err) => {
        console.log(err, 'addConsoles');
      })
  },

  updateProfilePicture: (imageURL, userID) => {
    //query to update user profile with new profile picture url
    const queryStr = 'UPDATE users SET profilepic = $1 WHERE id = $2';
    return pool.query(queryStr, [imageURL, userID])
      .then(() => {
        return;
      })
      .catch((err) => {
        console.log(err, 'updateProfilePicture');
      })
  },

  getTradeAmount: (userID) => {
    //query to return total amount of trades successful
    const queryStr = 'SELECT * FROM trades WHERE trade_status = completed AND (partyid = $1 or counterpartyid = $1)';
    return pool.query(queryStr, [userID])
      .then((trades) => {
        //return the total amount of trades
        return trades.rows.length
      })
      .catch((err) => {
        console.log(err, 'getTradeAmount')
      })
  }
}