module.exports.index = function(req, res) {
    res.render('index', {title: 'Express'});
};

module.exports.HomePage = function(req, res) {
    var Object = [{
        title: 'Від Попа до Попа',
        expedition: false,
        message: 'Щось про похід',
        date: [new Date(2019, 6, 2), new Date(2019, 7, 20)],
        money: 3000,
        Currency: 'UAH',
        Foto: 'images/2.jpg',
        quantityDay: 7,
        km: 54,
        Complexity: 2,
        Region: 'Карпати',
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
    },
                 {
        title: 'Польські Високі Татри',
        expedition: true,
        message: 'Щось про похід',
        date: [new Date(2019, 6, 29), new Date(2020, 7, 20)],
        money: 150,
        Currency: 'EUR',
        Foto: 'images/PTatrs2.jpg',
        quantityDay: 6,
        km: 54,
        Complexity: 3,
        Region: 'Татри',             
        RouteShort: 'Закопане - г. Гевонт - г. Каспрови Верх - пер. Заврат - Долина п\'яти ставів - г. Шпігласов верх - оз. Морське Око - г. Риси - Закопане',
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
    },
                 {
        title: 'Похід Чорногорою',
        expedition: false,
        message: 'Щось про похід',
        date: [new Date(2019, 4, 20)],
        money: 2000,
        Currency: 'UAH',
        Foto: 'images/3.jpg',
        quantityDay: 4,
        km: 54,
        Complexity: 2,
        Region: 'Карпати',
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
    
    var k = 0, rab;
    
    while (k == 0) {
        k = 1;
        for (i = 0; i < result.length - 1; i++) {
            if ((result[i].month > result[i + 1].month && result[i].year <= result[i + 1].year) || result[i].year > result[i + 1].year) {      
                k = 0;
                rab = result[i];
                result[i] = result[i + 1];
                result[i + 1] = rab;            
            }
            
        }
    }
    
    
    
    
    res.render('Calendar', {resultO: result});
};

module.exports.DetailPage = function(req, res) {
    res.render('Detail', {title: 'Detail'});
};


