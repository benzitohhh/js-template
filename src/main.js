// ============REACT==========================
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Hello = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <p>Hello world</p>
//       </div>
//     );
//   }
// });
// ReactDOM.render(<Hello />, document.getElementById('container'));


// ============Read in CSV from file===========
// var d3 = require('d3');
// var FILE = "data/myData.csv";
// d3.csv(FILE, function(d) {
//   // OPTIONAL: do mapping here
//   return d;
// }, function(error, input_rows) {
//   // do stuff
// });


// ============Read in CSV from inline string==
// var d3 = require('d3');
// var CSV_STRING = '\
// Accession Number,Target Name,"""Cluster""",priority_date,granted_date,expiry_date,inactive_date\n\
// 2013D75068,Ahold Coffee Company Bv,Capsule,2011-09-14,,2031-09-14,2018-03-20\n\
// 2011Q79421,Biserkon Holdings Ltd,Capsule,2010-06-18,,2030-06-18,2019-07-27\n\
// ';
// var input_rows = d3.csv.parse(CSV_STRING);


// ===========Add an nvd3 chart=================
// var nv = require('nvd3');
// function nv_render(chart, container, data) {
//   function generate() {
//     d3.select(container)
//       .style({height: "500px"})
//       .style({width: "100%"})
//       .datum(data)
//       .transition().duration(0) // no transitions please!
//       .call(chart)
//     ;
//     // On Window resize...
//     nv.utils.windowResize(function() {
//       chart.update(); // Call nvd3 update
//       if (chart.callback) {
//         chart.callback(chart); // Call the callback
//       }
//     });
//     return chart;
//   }
//   nv.addGraph({ generate: generate, callback: chart.callback });
// }
// var chart = nv.models.multiBarChart();
// var data = [{ key: 'someKey', values: [{x: 1, y: 23}, {x: 2, y: 555}]}];
// nv_render(chart, '#container', data);


// ===========Add a hicharts chart=============
// Note: this uses files from the "/vendor" folder (as hicharts does not support browserify)
// $('#container').highcharts({
//   title: {
//     text: 'Monthly Average Temperature',
//     x: -20 //center
//   },
//   subtitle: {
//     text: 'Source: WorldClimate.com',
//     x: -20
//   },
//   xAxis: {
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   },
//   yAxis: {
//     title: {
//       text: 'Temperature (°C)'
//     },
//     plotLines: [{
//       value: 0,
//       width: 1,
//       color: '#808080'
//     }]
//   },
//   tooltip: {
//     valueSuffix: '°C'
//   },
//   legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'middle',
//     borderWidth: 0
//   },
//   series: [{
//     name: 'Tokyo',
//     data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//   }, {
//     name: 'New York',
//     data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
//   }, {
//     name: 'Berlin',
//     data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
//   }, {
//     name: 'London',
//     data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//   }]
// });
