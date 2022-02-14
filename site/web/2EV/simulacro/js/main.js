  
var app;
document.addEventListener("DOMContentLoaded", function(event) { 
    app = new App();  
    var gastos = app.getCookie("gastos");
    if(gastos == ''){
        //app.loadDataFromJSON('json/contabilidad.json');    
        app.generateRandomData();
    }else{        
        app.loadData(app.JSONtransformToObject(gastos));
    }
    app.renderScreen();
});
