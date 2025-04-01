import promisePool from '../utils/database.js';

/**
 * TODO for ME: ADD A CALL TO DATABASE FOR A CASUAL LOGIN JUST FOR RENOVO, EVEN IF KUBIOS SERVER IS DOWN
 */

/**
 * Fetch user by id
 * @param {number} userId id of the user
 * @returns {object} user found or undefined if not
 */
 const selectUserById = async (userId) => {
  try {
    const [rows] = await promisePool.query('SELECT user_id, username, created_at, user_level FROM Users WHERE user_id=?',
      [userId]
    );
    console.log(rows);
    return rows[0];
  } catch(error) {
    console.log(error);
    throw new Error('database error');
  }
};

/**
 * Create a new user to database
 * @param {*} user
 * @param {*} user.username User's username
 * @param {*} user.password User's password
 * @returns
 */

const insertUser = async (user) => {
  try {
    const [result] = await promisePool.query('INSERT INTO Users (username, password) VALUES (?, ?)',
      [user.username, user.password]
    );
    console.log('insertUser', result);
    return result.insertId;
  } catch(error) {
    console.log(error);
    throw new Error('database error');
  }
};

/**
   * CHECK IF USER ALREADY EXHISTS in the database, IF NOT, the insertUser- funtion is used (the one above)
   * @param {*} username (= email)
   * @returns either user found (user), user not found or db error
   */

const selectUserByEmail = async (username) => {
  try {
    const sql = 'SELECT * FROM Users WHERE username=?';
    const params = [username];
    const [rows] = await promisePool.query(sql, params);

    // if nothing is found with the user id, result array is empty [], the insertUser- funtion is called (the one above)
    if (rows.length === 0) {
      return {error: 404, message: 'user not found'};
    }
    // Remove password property from result
    delete rows[0].password;
    return rows[0];
  } catch (error) {
    console.error('selectUserByEmail', error);
    return {error: 500, message: 'db error'};
  }
};

export {selectUserById, insertUser, selectUserByEmail}
