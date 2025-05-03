import 'dotenv/config';
import fetch from 'node-fetch';
import {customError} from '../middlewares/error-handler.js';

// Kubios API base URL should be set in .env
const baseUrl = process.env.KUBIOS_API_URI;

/**
* Set a date for Kubios data request
* @sync
* @param {Request} req Request Express request object.
* @param {Response} res Express response object.
* @param {NextFunction} next Next middleware function.
* @return {String} A new date for data request.
*/
function setDate(days) {

    const date = new Date();
    console.log('Current date ' + date)
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const difference = day - days

    //If difference is below zero
    if (difference < 1) {
        // If the date goes back to the previous year
        if (month == 0) {
            //Previous year, December, 10 or 30 days ago
            console.log('Return to the previous year.')
            date.setFullYear(year-1)
            date.setMonth(12)
            date.setDate(day-days)
        // JOS EI
        } else {
            //Current year, previous month, 10 or 30 days ago
            console.log('Palataan edelliseen kuukauteen')
            date.setFullYear(year)
            date.setMonth(month)
            date.setDate(day-days)
        }
    //If difference is positive
    } else {
        //Current year, current month, 10 or 30 days ago
        console.log('Pysytään tässä kuukaudessa')
        date.setFullYear(year)
        date.setMonth(month)
        date.setDate(day-days)
    };

    console.log('New date: ' + date)
    const print = date.toISOString();
    const getDays = print.slice(0, 11)
    return getDays;
};

/**
* Get user data from the past 10 days Kubios API example
* @async
* @param {Request} req Request Express request object.
* @param {Response} res Express response object.
* @param {NextFunction} next Next middleware function.
* @return {Promise<Object>} JSON response with data array or error.
*/
const getDataTen = async (req, res, next) => {
  const {kubiosIdToken} = req.user;
  const headers = new Headers();
  headers.append('User-Agent', process.env.KUBIOS_USER_AGENT);
  headers.append('Authorization', kubiosIdToken);

  const getMeasurements = setDate(10);

  try {
    const response = await fetch(
      baseUrl + `/result/self?from=${getMeasurements}00%3A00%3A00%2B00%3A00`,
      {
        method: 'GET',
        headers: headers,
      },
    );

    const results = await response.json();

    if (results.error) {
      const error = new Error(response.message);
      error.status = response.error;
      return next(error);
    }

    console.log(results.results)

    let readinessArray = []
    let pnsArray = []
    let snsArray = []
    let rmssdArray = []
    let phyAgeArray = []
    let bpmArray = []
    let result_dateArray = []

    for (let i = 0; i < results.results.length; i++) {
      readinessArray.push(results.results[i].result.readiness)
      pnsArray.push(results.results[i].result.pns_index)
      snsArray.push(results.results[i].result.sns_index)
      rmssdArray.push(results.results[i].result.rmssd_ms)
      phyAgeArray.push(Math.round(results.results[i].result.physiological_age))
      bpmArray.push(Math.round(results.results[i].result.mean_hr_bpm))
      result_dateArray.push(new Date(results.results[i].daily_result).toLocaleDateString("fi-FI"))
    };
    return res.status(200).json({
      daily_result: result_dateArray,
      readiness: readinessArray,
      pns: pnsArray,
      sns: snsArray,
      rmssd: rmssdArray,
      phy_age: phyAgeArray,
      bpm: bpmArray
      });

  } catch (error) {
    console.log('Request error', error);
    return next(customError('Kubios fetch failed.', 400));
  }
};

/**
* Get user data from the past 30 days Kubios API example
* @async
* @param {Request} req Request Express request object.
* @param {Response} res Express response object.
* @param {NextFunction} next Next middleware function.
* @return {Promise<Object>} JSON response with data array or error.
*/
const getDataThirty = async (req, res, next) => {
  const {kubiosIdToken} = req.user;
  const headers = new Headers();
  headers.append('User-Agent', process.env.KUBIOS_USER_AGENT);
  headers.append('Authorization', kubiosIdToken);

  const getMeasurements = setDate(30);

  try {
    const response = await fetch(
      baseUrl + `/result/self?from=${getMeasurements}00%3A00%3A00%2B00%3A00`,
      {
        method: 'GET',
        headers: headers,
      },
    );

    const results = await response.json();

    if (results.error) {
      const error = new Error(response.message);
      error.status = response.error;
      return next(error);
    }

    console.log(results.results)

    let readinessArray = []
    let pnsArray = []
    let snsArray = []
    let rmssdArray = []
    let phyAgeArray = []
    let bpmArray = []
    let result_dateArray = []

    for (let i = 0; i < results.results.length; i++) {
      readinessArray.push(results.results[i].result.readiness)
      pnsArray.push(results.results[i].result.pns_index)
      snsArray.push(results.results[i].result.sns_index)
      rmssdArray.push(results.results[i].result.rmssd_ms)
      phyAgeArray.push(Math.round(results.results[i].result.physiological_age))
      bpmArray.push(Math.round(results.results[i].result.mean_hr_bpm))
      result_dateArray.push(new Date(results.results[i].daily_result).toLocaleDateString("fi-FI"))
    };
    return res.status(200).json({
      daily_result: result_dateArray,
      readiness: readinessArray,
      pns: pnsArray,
      sns: snsArray,
      rmssd: rmssdArray,
      phy_age: phyAgeArray,
      bpm: bpmArray
      });

  } catch (error){
      console.log('Request error', error);
      return next(customError('Kubios fetch failed.', 400));
  }
};

export {getDataTen, getDataThirty};
