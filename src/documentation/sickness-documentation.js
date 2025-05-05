/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 *
*/

/**
 * @api {get} /sickness/ Get all sickness entries
 * @apiName getSicknesses
 * @apiGroup Sickness
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiSuccess {Object} sickness User's ilness entries' values listed
 * @apiSuccess {Number} sickness.Sickness_id Id of the sickness entry.
 * @apiSuccess {String} sickness.user_id User's unique ID.
 * @apiSuccess {String} sickness.sickness_date The date when the user's illness begins.
 * @apiSuccess {String} sickness.description Descriptive information regarding the user's illness.
 * @apiSuccess {String} sickness.impact The impact level to the user's current well being.
 * @apiSuccess {String} sickness.notes Additional information.
 * @apiSuccess {String} sickness.created_at The date when the user's shift entry was created.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "Sickness_id": 2,
 *       "user_id": 1,
 *       "sickness_date": "2025-04-29",
 *       "description": "Kova kuume.",
 *       "impact": "High",
 *       "notes": "Jääty pois töistä.",
 *		   "created_at": "2025-04-16 15:18:45"
 *      }
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		    "message": "jvt malformed",
 *		    "status": 403
 *	   }
 */

/**
 * @api {post} /sickness/ Create a sickness entry for user
 * @apiName postSickness
 * @apiGroup Sickness
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiBody {Object} sickness User's sickness entry values.
 * @apiBody {Number} sickness.user_id User id
 * @apiBody {String} sickness.sickness_date The date when the user's illness begins.
 * @apiBody {String} sickness.description Descriptive information regarding the user's illness.
 * @apiBody {String} sickness.impact The impact level to the user's current well being.
 * @apiBody {String} sickness.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *		    "message": "New sickness record created",
 *		    "sickness_id": 1
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
 *      		    "field": "sickness_date",
 *      		    "message": "Invalid value"
 *    		    }
 *     	    ]
 *	   }
 */

 /**
 * @api {get} /sickness/user/:id Request all sickness entries from a specific user
 * @apiName getSicknessesByUserId
 * @apiGroup Sickness
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id User's unique ID.
 * @apiSuccess {Object} sickness User's sickness values listed
 * @apiSuccess {Number} sickness.Sickness_id Id of the sickness entry.
 * @apiSuccess {String} sickness.user_id User's unique ID.
 * @apiSuccess {String} sickness.sickness_date The date when the user's illness begins.
 * @apiSuccess {String} sickness.description Descriptive information regarding the user's illness.
 * @apiSuccess {String} sickness.impact The impact level to the user's current well being.
 * @apiSuccess {String} sickness.notes Additional information.
 * @apiSuccess {String} sickness.created_at The date when the user's shift entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "Sickness_id": 2,
 *       "user_id": 1,
 *       "sickness_date": "2025-04-29",
 *       "description": "Kova kuume.",
 *       "impact": "High",
 *       "notes": "Jääty pois töistä.",
 *		   "created_at": "22025-04-29 15:18:45"
 *      }
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jvt malformed",
 *       "status": 403
 *     }
 */

 /**
 * @api {get} /sickness/:id Request a specific sickness entry
 * @apiName getSicknessById
 * @apiGroup Sickness
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Sickness entry's unique ID.
 * @apiSuccess {Object} sickness User's sickness entry's values listed
 * @apiSuccess {Number} sickness.Sickness_id Id of the sickness entry.
 * @apiSuccess {String} sickness.user_id User's unique ID.
 * @apiSuccess {String} sickness.sickness_date The date when the user's illness begins.
 * @apiSuccess {String} sickness.description Descriptive information regarding the user's illness.
 * @apiSuccess {String} sickness.impact The impact level to the user's current well being.
 * @apiSuccess {String} sickness.notes Additional information.
 * @apiSuccess {String} sickness.created_at The date when the user's shift entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     {
 *       "Sickness_id": 1,
 *       "user_id": 1,
 *       "sickness_date": "2025-04-29",
 *       "description": "Kova kuume.",
 *       "impact": "High",
 *       "notes": "Jääty pois töistä.",
 *		   "created_at": "2025-04-29 15:18:45"
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Sickness record not found",
 *       "status": 404,
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

 /**
 * @api {put} /sickness/:id Update a specific sickness entry
 * @apiName putSickness
 * @apiGroup Sickness
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Sickness entry's unique ID.
 * @apiBody {Object} sickness User's sickness entry values.
 * @apiBody {Number} sickness.user_id User id
 * @apiBody {String} sickness.sickness_date The date when the user's illness begins.
 * @apiBody {String} sickness.description Descriptive information regarding the user's illness.
 * @apiBody {String} sickness.impact The impact level to the user's current well being.
 * @apiBody {String} sickness.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Sickness record updated",
 *       "sickness_id": "1",
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
 *            "field": "sickness_date",
 *            "message": "Invalid value"
 *          }
 *       ]
 *     }
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jvt malformed",
 *       "status": 403
 *     }
 */

 /**
 * @api {delete} /sickness/:id Delete a sickness entry from user
 * @apiName deleteSickness
 * @apiGroup Sickness
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Sickness entry's unique ID.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Sickness record deleted",
 *       "sickness_id": "1",
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Sickness record not found",
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
