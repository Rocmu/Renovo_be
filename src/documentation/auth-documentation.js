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
 *       "user": {
 *			"email": "johndoe@example.com",
 *			"family_name": "Doe",
 *			"given_name": "John",
 *			"sub": "...abc..."
 *		},
 *		"user_id": 1,
 *		"token": ...abc...
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

  /**
    * @api {get} /auth/me User information of a current user
    * @apiName getMe
    * @apiGroup Authentication
    * @apiPermission token
    * @apiheader {String} Authorization Bearer token
    *
    * @apiSuccess {Object} user User info.
    * @apiSuccess {Number} user.user_id Id of the User.
    * @apiSuccess {String} user.username Username of the User as email.
    * @apiSuccess {String} user.created_at Timestamp for when user was created.
    * @apiSuccess {Number} user.user_level User's role and system authority.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
              "user": {
                "user_id": 1,
                "username": "johndoe@example.com",
                "created_at": "2025-04-03 13:11:51",
                "user_level": "regular"
       },
    *
    * @apiError InvalidToken Authentication token was invalid.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 403 Forbidden
    *     {
    *       "message": "jvt malformed",
    *       "status": 403
    *     }
    */
