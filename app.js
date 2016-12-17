var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/getData',function(req,res){

  res.send([{ name: '销量',
             type: 'bar',
             data: [5, 20, 36, 10, 10, 20]
           },{ name: '价格',
             type: 'bar',
             data: [15, 10, 26, 20, 13, 17]
           }]);
})
app.get('/getData2',function(req,res){

  res.send({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量','价格']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{ name: '销量',
             type: 'bar',
             data: [5, 20, 36, 10, 10, 20]
           },{ name: '价格',
             type: 'bar',
             data: [15, 10, 26, 20, 13, 17]
           }]
        });
})

module.exports = app;
