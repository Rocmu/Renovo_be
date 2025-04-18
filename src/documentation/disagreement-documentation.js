/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 *
*/

/**
 * @api {get} /disagreement/ Get all disagreement entries
 * @apiName getDisagreements
 * @apiGroup Disagreement
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiSuccess {Object} disagreement User's disagreement entries' values listed
 * @apiSuccess {Number} disagreement.disagreement_id Id of the disagreement entry.
 * @apiSuccess {String} disagreement.user_id User's unique ID.
 * @apiSuccess {String} disagreement.notes Additional information.
 * @apiSuccess {String} disagreement.created_at The date when the user's disagreement entry was created.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "disagreement_id": 2,
 *       "user_id": 1,
 *       "notes": "En koe itseäni niin palautuneeksi, kuin eilisen data väitti.",
 *       "created_at": "2025-04-10T07:35:46.000Z"
 *	   }
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
 * @api {post} /disagreement/ Create a disagreement entry for user
 * @apiName postDisagreement
 * @apiGroup Disagreement
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiBody {Object} disagreement User's disagreement entry values.
 * @apiBody {Number} disagreement.user_id User id
 * @apiBody {String} disagreement.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *		 "message": "New disagreement created",
 *		 "disagreement_id": 1
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
 *      		"field": "user_id",
 *      		"message": "Invalid value"
 *    		}
 *     	]
 *	  }
 */

 /**
 * @api {get} disagreement/user/:id Request all sickness entries from a specific user
 * @apiName getDisagreementsByUserId
 * @apiGroup Disagreement
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id User's unique ID.
 * @apiSuccess {Object} disagreement User's disagreement entry's values listed
 * @apiSuccess {Number} disagreement.disagreement_id Id of the disagreement entry.
 * @apiSuccess {String} disagreement.user_id User's unique ID.
 * @apiSuccess {String} disagreement.notes Additional information.
 * @apiSuccess {String} disagreement.created_at The date when the user's disagreement entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "disagreement_id": 2,
 *       "disagreement_id": 1,
 *       "notes": "En koe itseäni niin palautuneeksi, kuin eilisen data väitti.",
 *       "created_at": "2025-04-10T07:35:46.000Z"
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
 * @api {get} disagreement/:id Request a specific disagreement entry
 * @apiName getDisagreementById
 * @apiGroup Disagreement
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Disagreement entry's unique ID.
 * @apiSuccess {Object} disagreement User's disagreement entry's values listed
 * @apiSuccess {Number} disagreement.disagreement_id Id of the disagreement entry.
 * @apiSuccess {String} disagreement.user_id User's unique ID.
 * @apiSuccess {String} disagreement.notes Additional information.
 * @apiSuccess {String} disagreement.created_at The date when the user's disagreement entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     {
 *       "disagreement_id": 1,
 *       "user_id": 1,
 *       "notes": "En koe itseäni niin palautuneeksi, kuin eilisen data väitti.",
 *       "created_at": "2025-04-10T07:35:46.000Z"
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Disagreement not found",
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
 * @api {put} disagreement/:id Update a specific disagreement entry
 * @apiName putDisagreement
 * @apiGroup Disagreement
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Disagreement entry's unique ID.
 * @apiBody {Object} disagreement User's disagreement entry values.
 * @apiBody {Number} disagreement.user_id User id
 * @apiBody {String} disagreement.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Disagreement updated",
 *       "disagreement_id": "1",
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
 *            "field": "user_id",
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
 * @api {delete} disagreement/:id Delete a disagreement entry from user
 * @apiName deleteDisagreement
 * @apiGroup Disagreement
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Disagreement entry's unique ID.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Disagreement deleted",
 *       "disagreement_id": "1",
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Disagreement not found",
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
