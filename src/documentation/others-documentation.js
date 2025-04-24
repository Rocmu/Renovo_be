/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 *
*/

/**
 * @api {get} /others/ Get all others entries
 * @apiName getOthers
 * @apiGroup Others
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiSuccess {Object} others User's others entries' values listed
 * @apiSuccess {Number} others.Others_id Id of the others entry.
 * @apiSuccess {String} others.user_id User's unique ID.
 * @apiSuccess {String} others.others_date The date when an event that doesn't fit other entry types occurs.
 * @apiSuccess {String} others.descrition Descriptive information regarding the user's event or circumstance.
 * @apiSuccess {String} others.intensity Level of impact on the user's well being.
 * @apiSuccess {String} others.notes Additional information.
 * @apiSuccess {String} others.created_at The date when the user's exercise entry was created.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "Others_id": 2,
 *       "user_id": 1,
 *       "others_date": "2025-04-30",
 *       "description": "Ahdistuskohtaus.",
 *       "intensity": "Medium",
 *       "notes": "Menty töihin.",
 *       "created_at": "2025-05-24 13:11:5"
 *      }
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		"message": "jwt malformed",
 *		"status": 403
 *	   }
 */

/**
 * @api {post} /others Create an others entry for user
 * @apiName postOthers
 * @apiGroup Others
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiBody {Object} others User's others entry values.
 * @apiBody {Number} others.user_id User id
 * @apiBody {String} others.others_date The date when an event that doesn't fit other entry types occurs.
 * @apiBody {String} others.descrition Descriptive information regarding the user's event or circumstance.
 * @apiBody {String} others.intensity Level of impact on the user's well being.
 * @apiBody {String} others.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *		 "message": "New others record created",
 *		 "others_id": 1
 *	   }
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *		"message": "jwt malformed",
 *		"status": 403
 *	   }
 *
* @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *
 *	   {
 *  	"message": "Bad Request",
 *  	"status": 400,
 *  	"errors": [
 *    		{
 *      		"field": "others_date",
 *      		"message": "Invalid value"
 *    		}
 *     	]
 *	  }
 */

 /**
 * @api {get} others/user/:id Request all others entries from a specific user
 * @apiName getOthersByUserId
 * @apiGroup Others
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Users unique ID.
 * @apiSuccess {Object} others User's others entries' values listed
 * @apiSuccess {Number} others.Others_id Id of the others entry.
 * @apiSuccess {String} others.user_id User's unique ID.
 * @apiSuccess {String} others.others_date The date when an event that doesn't fit other entry types occurs.
 * @apiSuccess {String} others.descrition Descriptive information regarding the user's event or circumstance.
 * @apiSuccess {String} others.intensity Level of impact on the user's well being.
 * @apiSuccess {String} others.notes Additional information.
 * @apiSuccess {String} others.created_at The date when the user's exercise entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "Others_id": 2,
 *       "user_id": 1,
 *       "others_date": "2025-04-30",
 *       "description": "Ahdistuskohtaus.",
 *       "intensity": "Medium",
 *       "notes": "Menty töihin.",
 *       "created_at": "2025-05-24 13:11:5"
 *      }
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
 * @api {get} others/:id Request a specific others entry
 * @apiName getOthersById
 * @apiGroup Others
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Others entry's unique id.
 * @apiSuccess {Object} others User's others entries' values listed
 * @apiSuccess {Number} others.Others_id Id of the others entry.
 * @apiSuccess {String} others.user_id User's unique ID.
 * @apiSuccess {String} others.others_date The date when an event that doesn't fit other entry types occurs.
 * @apiSuccess {String} others.descrition Descriptive information regarding the user's event or circumstance.
 * @apiSuccess {String} others.intensity Level of impact on the user's well being.
 * @apiSuccess {String} others.notes Additional information.
 * @apiSuccess {String} others.created_at The date when the user's exercise entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     {
 *       "Others_id": 2,
 *       "user_id": 1,
 *       "others_date": "2025-04-30",
 *       "description": "Ahdistuskohtaus.",
 *       "intensity": "Medium",
 *       "notes": "Menty töihin.",
 *       "created_at": "2025-05-24 13:11:5"
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Others record not found",
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
 * @api {put} others/:id Update a specific others entry
 * @apiName putOthers
 * @apiGroup Others
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Others entry's unique id.
 * @apiBody {Object} others User's others entry values.
 * @apiBody {Number} others.user_id User id
 * @apiBody {String} others.others_date The date when an event that doesn't fit other entry types occurs.
 * @apiBody {String} others.descrition Descriptive information regarding the user's event or circumstance.
 * @apiBody {String} others.intensity Level of impact on the user's well being.
 * @apiBody {String} others.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Others record updated",
 *       "others_id": "1",
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
 *            "field": "others_date",
 *            "message": "Invalid value"
 *          }
 *       ]
 *     }
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *    HTTP/1.1 403 Forbidden
 *     {
 *       "message": "jwt malformed",
 *       "status": 403
 *     }
 */

 /**
 * @api {delete} exercise/:id Delete an exercise entry from user
 * @apiName deleteExercise
 * @apiGroup Exercise
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Exercise entry's unique ID.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Others record deleted",
 *       "others_id": "1",
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Others record not found",
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
