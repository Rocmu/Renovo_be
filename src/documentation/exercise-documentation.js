/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 *
*/

/**
 * @api {get} /exercise/ Get all exercise entries
 * @apiName getExercises
 * @apiGroup Exercise
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiSuccess {Object} exercise User's exercise entries' values listed
 * @apiSuccess {Number} exercise.Exercise_id Id of the exercise entry.
 * @apiSuccess {String} exercise.user_id User's unique ID.
 * @apiSuccess {String} exercise.exercise_date The date when the user's exercise occurs.
 * @apiSuccess {String} exercise.exercise_type Type of activity or sport in question.
 * @apiSuccess {String} exercise.start_time The time when the exercise starts.
 * @apiSuccess {String} exercise.end_time The time when the exercise ends.
 * @apiSuccess {String} exercise.level The impact level to the user's current well being.
 * @apiSuccess {String} exercise.notes Additional information.
 * @apiSuccess {String} exercise.created_at The date when the user's exercise entry was created.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "Exercise_id": 2,
 *       "user_id": 1,
 *       "exercise_date": "2025-04-30",
 *       "exercise_type": "Uinti",
 *       "start_time": "15:30:00",
 *       "end_time": "16:30:00",
 *       "level": "High",
 *       "notes": "Treenataan kunnolla, kun kisat ensi viikolla.",
 *	     "created_at": "2025-04-23 13:11:51"
 *     }
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
 * @api {post} /exercise/ Create an exercise entry for user
 * @apiName postExercise
 * @apiGroup Exercise
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiBody {Object} exercise User's exercise entry values.
 * @apiBody {Number} exercise.user_id User id
 * @apiBody {String} exercise.exercise_date The date when the user's exercise occurs.
 * @apiBody {String} exercise.exercise_type Type of activity or sport in question.
 * @apiBody {String} exercise.start_time The time when the exercise starts.
 * @apiBody {String} exercise.end_time The time when the exercise ends.
 * @apiBody {String} exercise.level The impact level to the user's current well being.
 * @apiBody  {String} exercise.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *		 "message": "New exercise created",
 *		 "exercise_id": 1
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
 *      		    "field": "exercise_date",
 *      		    "message": "Invalid value"
 *    		    }
 *     	    ]
 *	  }
 */

 /**
 * @api {get} /exercise/user/:id Request all exercise entries from a specific user
 * @apiName getExercisesByUserId
 * @apiGroup Exercise
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id User's unique ID.
 * @apiSuccess {Object} exercise User's exercise entries' values listed
 * @apiSuccess {Number} exercise.Exercise_id Id of the exercise entry.
 * @apiSuccess {String} exercise.user_id User's unique ID.
 * @apiSuccess {String} exercise.exercise_date The date when the user's exercise occurs.
 * @apiSuccess {String} exercise.exercise_type Type of activity or sport in question.
 * @apiSuccess {String} exercise.start_time The time when the exercise starts.
 * @apiSuccess {String} exercise.end_time The time when the exercise ends.
 * @apiSuccess {String} exercise.level The impact level to the user's current well being.
 * @apiSuccess {String} exercise.notes Additional information.
 * @apiSuccess {String} exercise.created_at The date when the user's exercise entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *	   ...
 *
 *     {
 *       "Exercise_id": 2,
 *       "user_id": 1,
 *       "exercise_date": "2025-04-12",
 *       "exercise_type": "Uinti",
 *       "start_time": "15:30:00",
 *       "end_time": "16:30:00",
 *       "level": "High",
 *       "notes": "Treenataan kunnolla, kun kisat ensi viikolla.",
 *		   "created_at": "2025-04-23 13:11:51"
 *      }
 *
 *     ...
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *        "message": "jwt malformed",
 *        "status": 403
 *     }
 */

 /**
 * @api {get} /exercise/:id Request a specific exercise entry
 * @apiName getExerciseById
 * @apiGroup Exercise
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Exercise entry's unique token.
 * @apiSuccess {Object} exercise User's exercise entries' values listed
 * @apiSuccess {Number} exercise.Exercise_id Id of the exercise entry.
 * @apiSuccess {String} exercise.user_id User's unique ID.
 * @apiSuccess {String} exercise.exercise_date The date when the user's exercise occurs.
 * @apiSuccess {String} exercise.exercise_type Type of activity or sport in question.
 * @apiSuccess {String} exercise.start_time The time when the exercise starts.
 * @apiSuccess {String} exercise.end_time The time when the exercise ends.
 * @apiSuccess {String} exercise.level The impact level to the user's current well being.
 * @apiSuccess {String} exercise.notes Additional information.
 * @apiSuccess {String} exercise.created_at The date when the user's exercise entry was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     {
 *       "Exercise_id": 1,
 *       "user_id": 1,
 *       "exercise_date": "2025-04-30",
 *       "exercise_type": "Uinti",
 *       "start_time": "15:30:00",
 *       "end_time": "16:30:00",
 *       "level": "High",
 *       "notes": "Treenataan kunnolla, kun kisat ensi viikolla.",
 *		   "created_at": "2025-04-23 13:11:51"
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "message": "Exercise not found",
 *        "status": 404,
 *     }
 *
 * @apiError InvalidToken Authentication token was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *        "message": "jwt malformed",
 *        "status": 403
 *     }
 */

 /**
 * @api {put} /exercise/:id Update a specific exercise entry
 * @apiName putExercise
 * @apiGroup Exercise
 * @apiPermission token
 * @apiheader {String} Authorization Bearer token
 *
 * @apiParam {Number} id Users unique ID.
 * @apiBody {Object} exercise User's exercise entry values.
 * @apiBody {Number} exercise.user_id User id
 * @apiBody {String} exercise.exercise_date The date when the user's exercise occurs.
 * @apiBody {String} exercise.exercise_type Type of activity or sport in question.
 * @apiBody {String} exercise.start_time The time when the exercise starts.
 * @apiBody {String} exercise.end_time The time when the exercise ends.
 * @apiBody {String} exercise.level The impact level to the user's current well being.
 * @apiBody  {String} exercise.notes Additional information.
 *
 * @apiSuccess {String} message Result of the request
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "message": "Exercise updated",
 *        "exercise_id": "1",
 *      }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "message": "Bad Request",
 *        "status": 400,
 *        "error": [
 *           {
 *             "field": "exercise_date",
 *             "message": "Invalid value"
 *           }
 *        ]
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
 * @api {delete} /exercise/:id Delete an exercise entry from user
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
 *       "message": "Exercise deleted",
 *       "exercise_id": "1",
 *     }
 *
 * @apiError InvalidValue Input value was invalid/missing.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Exercise not found",
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
