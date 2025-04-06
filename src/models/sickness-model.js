import promisePool from '../utils/database.js';

//Retrieve all sickness records from the database.
const listAllSicknesses = async () => {
  try {
    const sql = 'SELECT * FROM Sickness';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (error) {
    console.error('listAllSicknesses', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieves all user's sickness records by user ID.
const listSicknessesByUserId = async (id) => {
  try {
    const sql = 'SELECT * FROM Sickness WHERE user_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows;
  } catch (error) {
    console.error('listSicknessesByUserId', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieve sickness record by ID.
const selectSicknessById = async (id) => {
  try {
    const sql = 'SELECT * FROM Sickness WHERE sickness_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);

    if (rows.length === 0) {
      return { error: 404, message: 'Sickness record not found' };
    }

    return rows[0];
  } catch (error) {
    console.error('selectSicknessById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Create new sickness record in the database.
const insertSickness = async (sickness) => {
  try {
    const sql = 'INSERT INTO Sickness (user_id, sickness_date, description, impact, notes) VALUES (?, ?, ?, ?, ?)';
    const params = [
      sickness.user_id,
      sickness.sickness_date,
      sickness.description,
      sickness.impact,
      sickness.notes || null
    ];
    const [result] = await promisePool.query(sql, params);
    return { message: 'New sickness record created', sickness_id: result.insertId };
  } catch (error) {
    console.error('insertSickness', error);
    return { error: 409, message: 'Sickness record already exists or invalid data' };
  }
};

//Update existing sickness record.
const updateSicknessById = async (sickness) => {
  try {
    const sql = 'UPDATE Sickness SET sickness_date=?, description=?, impact=?, notes=? WHERE sickness_id=? AND user_id=?';
    const params = [
      sickness.sickness_date,
      sickness.description,
      sickness.impact,
      sickness.notes || null,
      sickness.sickness_id,
      sickness.user_id
    ];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Sickness record not found' };
    }

    return { message: 'Sickness record updated', sickness_id: sickness.sickness_id };
  } catch (error) {
    console.error('updateSicknessById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Delete sickness record by ID.
const deleteSicknessById = async (id) => {
  try {
    const sql = 'DELETE FROM Sickness WHERE sickness_id = ?';
    const params = [id];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Sickness record not found' };
    }

    return { message: 'Sickness record deleted', sickness_id: id };
  } catch (error) {
    console.error('deleteSicknessById', error);
    return { error: 500, message: 'Database error' };
  }
};

export {
  listAllSicknesses,
  listSicknessesByUserId,
  selectSicknessById,
  insertSickness,
  updateSicknessById,
  deleteSicknessById,
};
