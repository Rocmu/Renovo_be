/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 *
*/

/**
 * @api {get} /shifts/ Get all shits
 * @apiName getShifts
 * @apiGroup Shifts
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiSuccess {Object} shift User's shift values listed
 * @apiSuccess {Number} shift.shift_id Id of the shift entry.
 * @apiSuccess {String} shift.user_id User's unique ID.
 * @apiSuccess {String} shift.start_date The date when the user's shift begins.
 * @apiSuccess {String} shift.start_time The time when the user's shift begins.
 * @apiSuccess {String} shift.end_time The time when the user's shift ends.
 * @apiSuccess {String} shift.end_date The date when the user's shift ends.
 * @apiSuccess {String} shift.created_at The date when the user's shift entry was created.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "shift_id": 2,
 *       "user_id": 1,
 *       "start_date": "2025-04-17T21:00:00.000Z",
 *       "start_time": "19:30:00",
 *       "end_time": "03:30:00",
 *       "end_date": "2025-04-18T21:00:00.000Z",
 *	  "created_at": "2025-04-10T05:59:16.000Z"
 *     }
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		    "message": "invalid token",
 *		    "status": 403
 *	   }
 */

/**
 * @api {post} /shifts/ Create a shift for user
 * @apiName postShift
 * @apiGroup Shifts
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiBody {Object} shift User's shift values.
 * @apiBody {Number} shift.user_id User id
 * @apiBody {String} shift.start_date The date when the user's shift begins.
 * @apiBody {String} shift.start_time The time when the user's shift begins.
 * @apiBody {String} shift.end_time The time when the user's shift ends.
 * @apiBody {String} shift.end_date The date when the user's shift ends.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *		    "message": "New shift created",
 *		    "shift_id": 1
 *	   }
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		    "message": "jwt malformed",
 *		    "status": 403
 *	   }
 *
* @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *
 *	   {
 *  	    "message": "Bad Request",
 *  	    "status": 400,
 *  	    "errors": [
 *    		    {
 *      		    "field": "start_date",
 *      		    "message": "Invalid value"
 *    		    }
 *     	    ]
 *	   }
 */

 /**
 * @api {get} /shifts/user/:id Request all shifts from a specific user
 * @apiName getShiftsByUserId
 * @apiGroup Shifts
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id User's unique ID.
 * @apiSuccess {Object} shift User's shift values listed
 * @apiSuccess {Number} shift.shift_id Id of the shift entry.
 * @apiSuccess {String} shift.user_id User's unique ID.
 * @apiSuccess {String} shift.start_date The date when the user's shift begins.
 * @apiSuccess {String} shift.start_time The time when the user's shift begins.
 * @apiSuccess {String} shift.end_time The time when the user's shift ends.
 * @apiSuccess {String} shift.end_date The date when the user's shift ends.
 * @apiSuccess {String} shift.created_at The date when the user's shift entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "shift_id": 2,
 *       "user_id": 1,
 *       "start_date": "2025-04-17T21:00:00.000Z",
 *       "start_time": "19:30:00",
 *       "end_time": "03:30:00",
 *       "end_date": "2025-04-18T21:00:00.000Z",
 *	  "created_at": "2025-04-10T05:59:16.000Z"
 *     }
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jwt malformed",
 *       "status": 403
 *     }
 */

  /**
 * @api {get} /shifts/:id Request a specific shift
 * @apiName getShiftById
 * @apiGroup Shifts
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Shift's unique ID.
 * @apiSuccess {Object} shift User's shift values listed
 * @apiSuccess {Number} shift.shift_id Id of the shift entry.
 * @apiSuccess {String} shift.user_id User's unique ID.
 * @apiSuccess {String} shift.start_date The date when the user's shift begins.
 * @apiSuccess {String} shift.start_time The time when the user's shift begins.
 * @apiSuccess {String} shift.end_time The time when the user's shift ends.
 * @apiSuccess {String} shift.end_date The date when the user's shift ends.
 * @apiSuccess {String} shift.created_at The date when the user's shift entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     {
 *       "shift_id": 1,
 *       "user_id": 1,
 *       "start_date": "2025-04-16T21:00:00.000Z",
 *       "start_time": "19:30:00",
 *       "end_time": "03:30:00",
 *       "end_date": "2025-04-17T21:00:00.000Z",
 *	  "created_at": "2025-04-10T05:59:16.000Z"
 *     }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Shift not found",
 *       "status": 404,
 *     }
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jwt malformed",
 *       "status": 403
 *     }
 */

 /**
 * @api {put} /shifts/:id Update a specific shift
 * @apiName putShift
 * @apiGroup Shifts
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Shift's unique ID.
 * @apiBody {Object} shift User's shift values.
 * @apiBody {Number} shift.user_id User id
 * @apiBody {String} shift.start_date The date when the user's shift begins.
 * @apiBody {String} shift.start_time The time when the user's shift begins.
 * @apiBody {String} shift.end_time The time when the user's shift ends.
 * @apiBody {String} shift.end_date The date when the user's shift ends.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Shift updated.",
 *       "shift_id": "1",
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Bad Request",
 *       "status": 400,
 *       "error": [
 *          {
 *            "field": "start_date",
 *            "message": "Invalid value"
 *          }
 *       ]
 *     }
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 400 Bad Request
 *     {
 *       "message": "jwt malformed",
 *       "status": 403
 *     }
 */

 /**
 * @api {delete} /shifts/:id Delete a shift from user
 * @apiName deleteShift
 * @apiGroup Shifts
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Shit's unique ID.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Shift deleted.",
 *       "shift_id": "1",
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Shift not found",
 *       "status": 404,
 *     }
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jwt malformed",
 *       "status": 403
 *     }
 */
