
  google.load('visualization','1.0', {'packages': ['corechart']});
  google.setOnLoadCallback(chartType);

  function chartType(){
    const data = new google.visualization.DataTable();
    data.addColumn('string','Tipo');
    data.addColumn('number','Cantidad');
    data.addRows(
      [
        ['Fuego',12],
        ['Volador',19],
        ['Dragon', 3],
        ['Planta', 14],
        ['Veneno',33],
        ['Agua', 32],
        ['Hielo', 5],
        ['Insecto',12],
        ['Fantasma', 3],
        ['Normal',24],
        ['Electrico',9],
        ['Tierra', 14],
        ['Pelea',8],
        ['Psiquico',14],
        ['Roca',11]
      ]
    );

    var options= {'title':'Porcentaje por Tipo de Pokemon',
                  'width':1000,
                  'height':600                  
                 };
                  
    var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
    chart.draw(data,options);
  }

  

