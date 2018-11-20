
function plotGraph(url,country)
{

this.url = url;
this.country = country;

/**var data = [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [100, 85, 100,98, 78, 55,98, 97, 87,99, 14, 23],
    type: 'bar'
  }];
  
  Plotly.newPlot('myDiv', data);
*/

Plotly.d3.csv(url, function(err, rows){
    
      function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }


    
var trace1 = {
    type: "bar",
    name: 'Call Success',
    x: unpack(rows, 'Month'),
    y: unpack(rows, 'Success'),
    line: {color: '#17BECF'}
  }
  

  
  var data = [trace1];
  
  var layout = {
    title: 'Telco Tower Call Success Rate - '+ country,
    autosize: false,
    width: 500,
    height: 300,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 100,
      pad: 4
    },
    paper_bgcolor: '#F5F5F5',
    plot_bgcolor: '#E8E8E8'
  };
 
  
  Plotly.newPlot('myDiv', data, layout);
  })
}