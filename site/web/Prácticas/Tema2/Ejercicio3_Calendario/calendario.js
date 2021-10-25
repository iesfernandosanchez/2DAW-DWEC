let calendar = {
    init: function(inicio, final){
        let calendario = [];

        if(inicio == undefined){
            inicio = 9;
        }
        if(final == undefined){
            final = 11;
        }
        var festives = ["1/1/2021", "6/1/2021", "19/3/2021", "1/4/2021", "2/4/2021", "1/5/2021", "3/5/2021", "15/5/2021", "12/10/2021", "1/11/2021", "9/11/2021", "6/12/2021", "8/12/2021", "25/12/2021"];

        var today = new Date();
        var endGenerationCalendar = false;
        var day = 1;
        while(!endGenerationCalendar){
            var objFecha = new Date(today.getFullYear(),inicio-1,day);
            if(objFecha.getMonth() == final - 1){
                endGenerationCalendar = true;
            }else{
                events = []
                var itemDay = []	
                itemDay["date"] = objFecha.getDate() +"/"+ (objFecha.getMonth()+1) +"/"+ objFecha.getFullYear();
        
                if(festives.includes(itemDay["date"])){
                    events.push("festivo");
                }
        
                itemDay["event"] = events
                calendario.push(itemDay);
            }
            day++
        }
        return calendario;
    }

    ,print: function(calendario){
        console.log(calendario);
    }
}


