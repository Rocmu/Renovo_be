/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 */

/**
 * @api {get} /kubios/user-data-ten Get the user's HRV data from Kubios, all measurements from the last ten days
 * @apiName getDataTen
 * @apiGroup Hrv
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {String} token Users unique token.
 * @apiSuccess {Object} results User's requested data listed.
 * @apiSuccess {String} results.daily_result Dates of the requested results.
 * @apiSuccess {Number} results.readiness Readiness values of the requested results.
 * @apiSuccess {Number} results.pns PNS index values of the requested results.
 * @apiSuccess {Number} results.sns SNS index values of the requested results.
 * @apiSuccess {Number} results.rmssd RMSSD values of the requested results.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     "readiness": [
 *       61.597538461538456,
 *       65.88005185439562,
 *       86.2788257713594,
 *       47.57083076923077,
 *       58.25169230769231
 *      ],
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		"message": "jwt invalid token",
 *		"status": 403
 *	   }
 */

 /**
 * @api {get} /kubios/user-data-thirty Get the user's HRV data from Kubios, all measurements from the last thirty days
 * @apiName getDataThirty
 * @apiGroup Hrv
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {String} token Users unique token.
 * @apiSuccess {Object} results User's requested data listed.
 * @apiSuccess {String} results.daily_result Dates of the requested results.
 * @apiSuccess {Number} results.readiness Readiness values of the requested results.
 * @apiSuccess {Number} results.pns PNS index values of the requested results.
 * @apiSuccess {Number} results.sns SNS index values of the requested results.
 * @apiSuccess {Number} results.rmssd RMSSD values of the requested results.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     "readiness": [
 *       86.756398767647489,
 *       66.486730027803058,
 *       64.5975384831538456,
 *       78.756398767647489,
 *       76.486730027803058,
 *       61.597538461538456,
 *       65.88005185439562,
 *       86.2788257713594,
 *       47.57083076923077,
 *       58.25169230769231
 *      ],
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		  "message": "jwt invalid token",
 *		  "status": 403
 *	   }
 */

 /**
 * @api {get} /kubios/:id Get the user's observation period status (30 days) and save Kubios data to database
 * @apiName getUserData
 * @apiGroup Hrv
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {String} token Users unique token.
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} message Message regarding whether the user's observation period is still active.
 * @apiSuccess {Object} user User details
 * @apiSuccess {String} user.created_at The date when the user's account was created.
 * @apiSuccess {String} profile_lifespan Information for how many days the account has existed.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK*
 *
 *    {
 *      "message": "Seuranta-aika on aktiivinen.",
 *      "user": {
 *        "created_at": "2025-02-25T13:00:15.000Z"
 *       },
 *      "profile_lifespan": "Ollut voimassa 7.97663 päivää."
 *    }
 *
 * @apiSuccess {String} message Message regarding whether the user's observation period is still active.
 * @apiSuccess {Number} id User's unique ID.
 *
 *    {
 *      "message": "Hrv data tallennettu.",
 *      "user_id": 1
 *    }
 *
 * @apiSuccess {String} message Message regarding whether the user's observation period is still active.
 * @apiSuccess {String} data_saved Date for when hrv data was saved.
 *
 *    {
 *      "message": "Seuranta- aika on ohi.",
 *      "user_id": "2025-03-25T13:00:15.000Z"
 *    } *
 *
 * @apiError InvalidParam Params value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "User not found.",
 *       "status": 404
 *     }
 *
 * @apiError Fetch failed.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "message": "Kubios fetch failed.",
 *       "status": 400
 *     }
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jvt malformed",
 *       "status": 403
 *     }
 */
