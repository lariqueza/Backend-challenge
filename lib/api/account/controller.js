/**
 * @swagger
 * /api/account/role:
 *  get:
 *    summary: Get Team Account Roles
 *    tags:
 *      - Company
 *    description: Get array of valid roles for team account
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Company account details
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *              example: success
 *            data:
 *              type: array
 *              description: an ARRAY of objects
 *              example: [{"value":"owner","label":"Owner","restricted":true},{"value":"full_access","label":"Full Access","restricted":false},{"value":"viewer","label":"Viewer","restricted":false}]
 */
export const getRoles = (req, res) => res.sendStatus(200);

/**
 * @swagger
 * /api/account/profile:
 *  put:
 *    summary: Update Team Account
 *    tags:
 *      - Company
 *    description: Update team account details of the currently logged in user
 *    produces: application/json
 *    consumes: application/json
 *    parameters:
 *      - in: body
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            job_title:
 *              type: string
 *            photo_url:
 *              type: string
 *    responses:
 *      201:
 *        description: Updated
 *        schema:
 *          $ref: '#/definitions/successResponsePlain'
 */
export const updateProfile = (req, res) => res.sendStatus(200);

/**
 * @swagger
 * /api/account/member:
 *  delete:
 *    summary: Delete a Team Member
 *    tags:
 *      - Company
 *    description: Delete team member
 *    produces: application/json
 *    consumes: application/json
 *    parameters:
 *      - in: body
 *        schema:
 *          type: object
 *          required:
 *            - account_id
 *          properties:
 *            account_id:
 *              type: integer
 *    responses:
 *      200:
 *        description: Deleted
 *        schema:
 *          $ref: '#/definitions/successResponsePlain'
 */
export const deleteMember = (req, res) => res.sendStatus(200);

/**
 * @swagger
 * /api/account/search:
 *  get:
 *    summary: Search Candidates
 *    tags:
 *      - Company
 *    description: List candidates
 *    consumes: application/json
 *    produces: application/json
 *    parameters:
 *      - in: query
 *        name: sort_by
 *        type: string
 *        description: Chooose to sort by `quality` of `last_active`. Defaults to `last_active`
 *      - in: query
 *        name: page
 *        type: integer
 *        description: Page number. Defaults to 0. Shows 10 results per page
 *      - in: query
 *        name: keyword
 *        type: array
 *        items:
 *          type: string
 *        description: Keywords field
 *      - in: query
 *        name: location
 *        type: array
 *        items:
 *          type: string
 *        description: Location from autocomplete
 *      - in: query
 *        name: include_relocate
 *        type: string
 *        description: Boolean string. Flag to include candidates that are willing to relocate to the specified location. Location param must be present
 *      - in: query
 *        name: job_title
 *        type: array
 *        items:
 *          type: string
 *        description: Candidate's job title. IE 'frontend'
 *      - in: query
 *        name: job_type
 *        type: array
 *        items:
 *          type: string
 *        description: Permanent, Part-time, intern etc
 *      - in: query
 *        name: skill
 *        type: array
 *        items:
 *          type: string
 *        description: Candidate's primary and secondary skills
 *      - in: query
 *        name: years_experience
 *        type: array
 *        items:
 *          type: string
 *        description: Maps to seniorities. May have issues with 6+. Fixed set of possible values that is tightly coupled with what was used during signup
 *      - in: query
 *        name: min_salary
 *        type: integer
 *        description: Minimum expected salary
 *      - in: query
 *        name: max_salary
 *        type: integer
 *        description: Maximum expected salary
 *      - in: query
 *        name: remote
 *        type: string
 *        description: Boolean string. Include remote candidates or not
 *      - in: query
 *        name: visa
 *        type: string
 *        description: Boolean String. When true, EXCLUDE candidates that require visa sponsorship. Defaults to false.
 *      - in: query
 *        name: exclude_dealt_with
 *        type: string
 *        description: Boolean string. When true, EXCLUDE candidates that you have dealt with in the past. Defaults to true.
 *      - in: query
 *        name: last_active_value
 *        type: integer
 *        description: Last active value
 *      - in: query
 *        name: last_active_type
 *        type: string
 *        description: Last active type - ie day , month, week, year etc
 *      - in: query
 *        name: exclude_skipped
 *        type: string
 *        description: Boolean string. Flag to toggle whether to include skipped candidates. Defaults to true.
 *      - in: query
 *        name: special_page
 *        type: integer
 *        description: Special page mode to retrieve 30 candidates. 'true'
 *      - in: query
 *        name: ui
 *        type: string
 *        description: Unique string generated for tracking purposes. Passed into pages > 0
 *      - in: query
 *        name: default
 *        type: string
 *        description: Boolean String. Indicates if the user has used the default search terms without modification
 *    responses:
 *      200:
 *        description: OK
 *        schema:
 *          type: object
 *          properties:
 *           results_count:
 *             type: integer
 *             example: 1665
 *           ids:
 *             type: array
 *             items:
 *               type: integer
 *             example: [123, 34, 44]
 *           values:
 *             type: object
 *           ui:
 *             type: string
 *             example: 4b8dfd07-babc-4ce3-9cd9-cbb17352115b
 */
export const searchUsers = (req, res) => res.sendStatus(200);

export const addMember = (req, res) => res.sendStatus(200);
