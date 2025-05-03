import 'dotenv/config';
import fetch from 'node-fetch';
import { checkKubios, createKubiosEntry } from '../models/kubios-model.js';
import { selectCreatedAt } from '../models/user-model.js';
import {customError} from '../middlewares/error-handler.js';

// Kubios API base URL should be set in .env
const baseUrl = process.env.KUBIOS_API_URI;

/**
* Check if patient monitoring is over, and all data will be saved to database.
* @async
* @param {Request} req Request object including Kubios id token
* @param {Response} res Kubios table status
* @param {NextFunction} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/

const getUserData = async (req, res, next) => {

  const {kubiosIdToken} = req.user;
  const headers = new Headers();
  headers.append('User-Agent', process.env.KUBIOS_USER_AGENT);
  headers.append('Authorization', kubiosIdToken);

  //Check if Kubios- table in database is empty
  const kubiosSatus = await checkKubios(req.params.id)

  //If empty
  if (kubiosSatus.error == 404) {
    console.log(kubiosSatus.error)
    try {
      const userCreated = await selectCreatedAt(req.params.id)

      const current_date = new Date();
      const created_at = new Date(userCreated.created_at);
      const difference = current_date - created_at;
      const inDays = difference / 60 / 60 / 24 / 1000;
      console.log(current_date)
      console.log(inDays);

      const print = created_at.toISOString();
      const date = print.slice(0, 11)
      console.log(date + ' menee funktiolle')

      //Check if the profile has existed either 30 days or longer
      if (inDays >= 30) {
        //If the profile's lifespan is over/equal to 30 days
        try {
          const response = await fetch(
            baseUrl + `/result/self?from=${date}00%3A00%3A00%2B00%3A00`,
            {
              method: 'GET',
              headers: headers,
            },
          );
          const results = await response.json();

          for (let i = 0; i < results.results.length; i++) {
            const newKubios = {
              result_date: results.results[i].daily_result,
              readiness: results.results[i].result.readiness,
              pns_index: results.results[i].result.pns_index,
              sns_index: results.results[i].result.sns_index,
              rmssd: results.results[i].result.rmssd_ms,
              phy_age: Math.round(results.results[i].result.physiological_age),
              bpm : Math.round(results.results[i].result.mean_hr_bpm)
            }
            const insertEntry = await createKubiosEntry(req.params.id, newKubios);
            console.log('New Kubios entry' + insertEntry)
          }
          return res.json(
            {
              message: 'Hrv data on tallennettu.',
              user_id: req.params.id
            }
          );
        } catch(error) {
          console.log('Request error', error)
          return next(customError('Kubios fetch failed.', 400));
        }
      }
      //If the profile has existed less than 30 days
      return res.json(
        {message: 'Seuranta-aika aktiivinen.',
        user: userCreated,
        profile_lifespan: `Ollut voimassa ${inDays} päivää.`
        }
      );
    } catch (error){
      console.log('Request error', error)
      return next(customError('User not found.', 404));
    }
  } else {
    //If table is not empty, the HRV data has already been saved.
    return res.json(
      {message: 'Seuranta-aika on ohi.',
       data_saved: kubiosSatus.created_at
      }
    )
  };
};

export {getUserData};
