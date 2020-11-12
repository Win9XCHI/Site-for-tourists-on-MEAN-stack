//Controller file for app_api folder

/* Output query status and message 
 * INPUT: Object "response", status query, content query
 * OUTPUT: status query, content query
 */
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/* authorization
 * METHOD: post, URL: api/authorization
 * INPUT: Email (string in body request) and Password (string in body request)
 * OUTPUT: set cookie (Name or 'no')
 */
module.exports.Authorization = function (req, res) {
    var Email = 'my@i.ua';
        var Password = 'asrgdrg';
        
        if (req.body.email == Email && req.body.password == Password) {
            res.cookie('Name', 'Yehor');
        } else {
            res.cookie('Name', 'No');
        }
        sendJsonResponse(res, 200, 'true');
};

/* Output project and task on page
 * METHOD: get, URL: api/
 * INPUT: -
 * OUTPUT: Objects "Project" without projects with status='F' (as mongoose model)
 */
module.exports.OutputHome = function (req, res) {
    resultO = [
        {
            month: 4,
            year: 2020,
            MasObject: [{
                title: 'Похід Чорногорою',
                Foto: 'images/3 small.jpg',
                message: 'Щось про похід'
            }, {
                title: 'Похід у Мармароси',
                Foto: 'images/2 small.jpg',
                message: 'Щось про похід'
            }]
}, 
        {
            month: 7,
            year: 2020,
            MasObject: [{
                title: 'Похід Чорногорою',
                Foto: 'images/3 small.jpg',
                message: 'Щось про похід'
            }, {
                title: 'Похід у Мармароси',
                Foto: 'images/2 small.jpg',
                message: 'Щось про похід'
            }]
}];
    sendJsonResponse(res, 200, resultO);
};
