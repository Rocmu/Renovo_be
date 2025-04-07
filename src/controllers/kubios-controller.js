import 'dotenv/config';
import fetch from 'node-fetch';

// import {customError} from '../middlewares/error-handler.js';

// Kubios API base URL should be set in .env
const baseUrl = process.env.KUBIOS_API_URI;

/**
* Get user data from Kubios API example
* TODO: Implement error handling
* @async
* @param {Request} req Request object including Kubios id token
* @param {Response} res
* @param {NextFunction} next
*/
const getDataTen = async (req, res, next) => {
  const {kubiosIdToken} = req.user;
  const headers = new Headers();
  headers.append('User-Agent', process.env.KUBIOS_USER_AGENT);
  headers.append('Authorization', kubiosIdToken);

const date = new Date();
console.log('')
console.log('alkuperäinen päivä ' + date)
const year = date.getFullYear();
const month = date.getMonth();
//const current_month = month + 1
const day = date.getDate();

const difference = day - 10

//JOS difference ON NEGATIIVINEN
if (difference < 1) {
    //PALATAANKO VIIME VUODELLE?
    // JOS KYLLÄ
    if (month == 0) {
        //Edellinen vuosi, joulukuu, 10 päivää sitten
        console.log('Palataan edelliseen vuoteen')
        date.setFullYear(year-1)
        date.setMonth(12)
        date.setDate(day-10)
    // JOS EI
    } else {
        //Nykyinen vuosi, edellinen kuukausi, 10 päivää sitten
        console.log('Palataan edelliseen kuukauteen')
        date.setFullYear(year)
        date.setMonth(month)
        date.setDate(day-10)
    }
//JOS difference ON POSITIIVINEN
} else {
    //Nykyinen vuosi, nykyinen kuukausi, 10 päivää sitten
    console.log('Pysytään tässä kuukaudessa')
    date.setFullYear(year)
    date.setMonth(month)
    date.setDate(day-10)
}

console.log('Uusi: ' + date)
const print = date.toISOString();
const getTenDays = print.slice(0, 11)

  try {
    const response = await fetch(
      baseUrl + `/result/self?from=${getTenDays}00%3A00%3A00%2B00%3A00`,
      {
        method: 'GET',
        headers: headers,
      },
    );
    const results = await response.json();

    console.log(results.results)

    let readinessArray = []
    let pnsArray = []
    let snsArray = []
    let rmssdArray = []
    //let created = []

    for (let i = 0; i < results.results.length; i++) {
      readinessArray.push(results.results[i].result.readiness)
      pnsArray.push(results.results[i].result.pns_index)
      snsArray.push(results.results[i].result.sns_index)
      rmssdArray.push(results.results[i].result.rmssd_ms)
      //created.push(results.results[i].create_timestamp)
    };
    //return res.json(results);
    return res.status(200).json({
      readiness: readinessArray,
      pns: pnsArray,
      sns: snsArray,
      rmssd: rmssdArray,
      //ajat-tarkistus: created
      });

  } catch (error){
    next(error)
  }
};

const getDataThirty = async (req, res, next) => {
  const {kubiosIdToken} = req.user;
  const headers = new Headers();
  headers.append('User-Agent', process.env.KUBIOS_USER_AGENT);
  headers.append('Authorization', kubiosIdToken);

  const date = new Date();
  console.log('')
  console.log('alkuperäinen päivä ' + date)

  const year = date.getFullYear();
  const month = date.getMonth();
  //const current_month = month + 1
  const day = date.getDate();

  const difference = day - 30

  //JOS difference ON NEGATIIVINEN
  if (difference < 1) {
      //PALATAANKO VIIME VUODELLE?
      // JOS KYLLÄ
      if (month == 0) {
          //Edellinen vuosi, joulukuu, 30 päivää sitten
          console.log('Palataan edelliseen vuoteen')
          date.setFullYear(year-1)
          date.setMonth(12)
          date.setDate(day-30)
      // JOS EI
      } else {
          //Nykyinen vuosi, edellinen kuukausi, 30 päivää sitten
          console.log('Palataan edelliseen kuukauteen')
          date.setFullYear(year)
          date.setMonth(month)
          date.setDate(day-30)
      }
  //JOS difference ON POSITIIVINEN
  } else {
      //Nykyinen vuosi, nykyinen kuukausi, 30 päivää sitten
      console.log('Pysytään tässä kuukaudessa')
      date.setFullYear(year)
      date.setMonth(month)
      date.setDate(day-30)
  }

  console.log('Uusi: ' + date)
  const print = date.toISOString();
  const getThirtyDays = print.slice(0, 11)

  try {
    const response = await fetch(
      baseUrl + `/result/self?from=${getThirtyDays}00%3A00%3A00%2B00%3A00`,
      {
        method: 'GET',
        headers: headers,
      },
    );
    const results = await response.json();

    console.log(results.results)

    let readinessArray = []
    let pnsArray = []
    let snsArray = []
    let rmssdArray = []
    //let created = []

    for (let i = 0; i < results.results.length; i++) {
      readinessArray.push(results.results[i].result.readiness)
      pnsArray.push(results.results[i].result.pns_index)
      snsArray.push(results.results[i].result.sns_index)
      rmssdArray.push(results.results[i].result.rmssd_ms)
      //created.push(results.results[i].create_timestamp)
    };
    //return res.json(results);
    return res.status(200).json({
      readiness: readinessArray,
      pns: pnsArray,
      sns: snsArray,
      rmssd: rmssdArray,
      //ajat-tarkistus: created
      });

  } catch (error){
    next(error)
  }
};

export {getDataTen, getDataThirty};
