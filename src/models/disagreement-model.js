import promisePool from '../utils/database.js';

//Retrieve all disagreements from the database.
const listAllDisagreements = async () => {
  try {
    const sql = 'SELECT * FROM Disagreement';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (error) {
    console.error('listAllDisagreements', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieves all user's disagreements by user ID.
const listDisagreementsByUserId = async (id) => {
  try {
    const sql = 'SELECT * FROM Disagreement WHERE user_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows;
  } catch (error) {
    console.error('listDisagreementsByUserId', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieve disagreement by ID.
const selectDisagreementById = async (id) => {
  try {
    const sql = 'SELECT * FROM Disagreement WHERE disagreement_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);

    if (rows.length === 0) {
      return { error: 404, message: 'Disagreement not found' };
    }

    return rows[0];
  } catch (error) {
    console.error('selectDisagreementById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Create new disagreement in the database.
const insertDisagreement = async (disagreement) => {
  try {
    const sql = 'INSERT INTO Disagreement (user_id, notes) VALUES (?, ?)';
    const params = [
      disagreement.user_id,
      disagreement.notes || null
    ];
    const [result] = await promisePool.query(sql, params);
    return { message: 'New disagreement created', disagreement_id: result.insertId };
  } catch (error) {
    console.error('insertDisagreement', error);
    return { error: 409, message: 'Disagreement already exists or invalid data' };
  }
};

//Update existing disagreement.
const updateDisagreementById = async (disagreement) => {
  try {
    const sql = 'UPDATE Disagreement SET notes=? WHERE disagreement_id=? AND user_id=?';
    const params = [
      disagreement.notes || null,
      disagreement.disagreement_id,
      disagreement.user_id
    ];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Disagreement not found' };
    }

    return { message: 'Disagreement updated', disagreement_id: disagreement.disagreement_id };
  } catch (error) {
    console.error('updateDisagreementById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Delete disagreement by ID.
const deleteDisagreementById = async (id) => {
  try {
    const sql = 'DELETE FROM Disagreement WHERE disagreement_id = ?';
    const params = [id];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Disagreement not found' };
    }

    return { message: 'Disagreement deleted', disagreement_id: id };
  } catch (error) {
    console.error('deleteDisagreementById', error);
    return { error: 500, message: 'Database error' };
  }
};

export {
  listAllDisagreements,
  listDisagreementsByUserId,
  selectDisagreementById,
  insertDisagreement,
  updateDisagreementById,
  deleteDisagreementById,
};
