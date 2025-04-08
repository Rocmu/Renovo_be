import promisePool from "../utils/database.js";

/**
   * CHECK IF KUBIOS TABLE HAS CONTENT
   * @param {*} user_id
   * @returns either data found (user), data not found or db error
*/

const checkKubios = async (user_id) => {
  try {
    const sql = 'SELECT * FROM kubios WHERE user_id=?';
    const params = [user_id];
    const [rows] = await promisePool.query(sql, params);

    // if nothing is found with the user id, result array is empty [], the insertUser- funtion is called (the one above)
    if (rows.length === 0) {
      return {error: 404, message: 'Kubios data not found'};
    }
    // Remove password property from result
    delete rows[0].password;
    return rows[0];
  } catch (error) {
    console.error('checkKubios', error);
    return {error: 500, message: 'db error'};
  }
};

/**
 * Create a new kubios entry, done once the user's hrv observation period is complete.
 * @param {*} user_id
 * @param {*} data Object that contains the user's hrv data
 * @returns
 */

const createKubiosEntry = async (user_id, data) => {
  try {
    const [result] = await promisePool.query('INSERT INTO Kubios (user_id, result_date, readiness, pns_index, sns_index, rmssd) VALUES (?, ?, ?, ?, ?, ?)',
      [user_id, data.result_date, data.readiness, data.pns_index, data.sns_index, data.rmssd]
    );
    console.log('createKubiosEntry', result);
    return {message: 'New Kubios entry created.', result};
  } catch(error) {
    console.log(error);
    throw new Error('database error');
  }
}

export {checkKubios, createKubiosEntry};
