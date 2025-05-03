/**
 * @apiDefine all No authentication needed
 * @apiDefine token A valid authentication token needed
 */

/**
 * @api {post} /auth/kubios-login User login
 * @apiName postLogin
 * @apiGroup Authentication
 * @apiPermission all
 *
 * @apiBody {String} username Username
 * @apiBody {String} password User's password
 * @apiParamExample {json} Request-Example
 * {
 *  "username": "myusername",
 *  "password": "mypassword"
 * }
 *
 * @apiSuccess {String} message Result of the request
 * @apiSuccess {Object} user User details
 * @apiSuccess {Number} user.user_id User id
 * @apiSuccess {String} user.user_username Username as email
 * @apiSuccess {String} user.family_name user's lastname
 * @apiSuccess {String} user.given_name user's firstname
 * @apiSuccess {String} user.given_name user's firstname
 * @apiSuccess {Number} user_id User id
 * @apiSuccess {String} token Authentication token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Logged in successfully with Kubios",
 *       "user":"johndoe@example.com",
 *		   "user_id": 1,
 *		   "token": ...abc...
 *     }
 *
 * @apiError Invalidlogin Login information was invalid.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "Login with Kubios failed due bad username/password",
 *       "status": 401
 *     }
 */
