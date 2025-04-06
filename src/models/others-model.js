import promisePool from '../utils/database.js';

//Retrieve all others records from the database.
const listAllOthers = async () => {
  try {
    const sql = 'SELECT * FROM Others';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (error) {
    console.error('listAllOthers', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieves all user's others records by user ID.
const listOthersByUserId = async (id) => {
  try {
    const sql = 'SELECT * FROM Others WHERE user_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows;
  } catch (error) {
    console.error('listOthersByUserId', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieve others record by ID.
const selectOthersById = async (id) => {
  try {
    const sql = 'SELECT * FROM Others WHERE others_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);

    if (rows.length === 0) {
      return { error: 404, message: 'Others record not found' };
    }

    return rows[0];
  } catch (error) {
    console.error('selectOthersById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Create new others record in the database.
const insertOthers = async (others) => {
  try {
    const sql = 'INSERT INTO Others (user_id, others_date, description, intensity, notes) VALUES (?, ?, ?, ?, ?)';
    const params = [
      others.user_id,
      others.others_date,
      others.description,
      others.intensity,
      others.notes || null
    ];
    const [result] = await promisePool.query(sql, params);
    return { message: 'New others record created', others_id: result.insertId };
  } catch (error) {
    console.error('insertOthers', error);
    return { error: 409, message: 'Others record already exists or invalid data' };
  }
};

//Update existing others record.
const updateOthersById = async (others) => {
  try {
    const sql = 'UPDATE Others SET others_date=?, description=?, intensity=?, notes=? WHERE others_id=? AND user_id=?';
    const params = [
      others.others_date,
      others.description,
      others.intensity,
      others.notes || null,
      others.others_id,
      others.user_id
    ];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Others record not found' };
    }

    return { message: 'Others record updated', others_id: others.others_id };
  } catch (error) {
    console.error('updateOthersById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Delete others record by ID.
const deleteOthersById = async (id) => {
  try {
    const sql = 'DELETE FROM Others WHERE others_id = ?';
    const params = [id];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Others record not found' };
    }

    return { message: 'Others record deleted', others_id: id };
  } catch (error) {
    console.error('deleteOthersById', error);
    return { error: 500, message: 'Database error' };
  }
};

export {
  listAllOthers,
  listOthersByUserId,
  selectOthersById,
  insertOthers,
  updateOthersById,
  deleteOthersById,
};
