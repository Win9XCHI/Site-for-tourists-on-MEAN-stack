module.exports.index = function(req, res) {
    res.render('index', {title: 'Express'});
};

module.exports.HomePage = function(req, res) {
    var Object = [{
        title: 'Від Попа до Попа',
        message: 'Щось про похід',
        date: [new Date(2019, 6, 20), new Date(2019, 7, 20)],
        money: 2000,
        Currency: 'UAH',
        Foto: 'images/2.jpg',
        quantityDay: 7,
        km: 54,
        Complexity: 2,
        RouteShort: 'Рахів - Ділове - вдсп. Ялинський - г. Піп Іван Мармароський - г. Межипотоки - г. Стіг - г. Вихід - г. Піп Іван Чорногірський - Дземброня - Ворохта',
        Information: '',
        Payment: '',
        Weather: '',
        Documents: '',
        Accommodation: '',
        Food: ['', ''],
        equipment: ['', ''],
        RouteLong: [{
            day: 1,
            info: 'QWE',
            foto: 'rftg.jpg'
                   }, 
                   {
            day: 2,
            info: 'RTY',
            foto: 'rftg.jpg'
                   }],
        Rewiews: {}
    }];

    var monthYear = false;
    var result = [];
    
    for (i = 0; i < Object.length; i++) {
        for (j = 0; j < Object[i].date.length; j++) {
            monthYear = false;
            for (n = 0; n < result.length; n++) {
               if (result[n].month == Object[i].date[j].getMonth() && result[n].year == Object[i].date[j].getFullYear()) {
                   result[n].MasObject.push(Object[i]);
                   monthYear = true;
               } 
            }
            if (!monthYear) {
                result.push({month: Object[i].date[j].getMonth(), year: Object[i].date[j].getFullYear(), MasObject: []});
                result[result.length - 1].MasObject.push(Object[i]);
            } else {
                            
            }
        }
    }
    //console.log(result[0].MasObject);
    
    /*var result = {
        MasObject: Object,
        CalendarItem: Item
    };*/
    
    res.render('Calendar', {resultO: result});
};

module.exports.DetailPage = function(req, res) {
    res.render('Detail', {title: 'Detail'});
};


