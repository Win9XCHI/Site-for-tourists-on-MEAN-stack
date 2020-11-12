//Router file for controllers in app_api folder
var express = require('express');
var router = express.Router();

var ctrProject = require('../controllers/projects');

/* authorization
 * METHOD: post, URL: api/authorization
 * INPUT: Email (string in body request) and Password (string in body request)
 * OUTPUT: set cookie (Name or 'no')
 */
router.post('/authorization', ctrProject.Authorization);

/* Output project and task on page
 * METHOD: get, URL: api/
 * INPUT: -
 * OUTPUT: Objects "Project" without projects with status='F' (as mongoose model)
 */
router.get('/', ctrProject.OutputHome);

module.exports = router;
