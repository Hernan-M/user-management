class Utils{

    static dateFormat(date){

        let day = date.getDate();
        let month = (date.getMonth()+1);
        let year = date.getFullYear();

        if( day < 10 ){
            day = '0'+ day;

        }else if(month < 10){
            month = '0' + month;
        }

        return day +'/'+ month +'/'+ year;

    }

    static hourFormat(date){

        

        let hour = date.getHours();
        let minute = date.getMinutes();

        if( minute < 10 ){
            minute = '0'+ minute;

        }else if(hour < 10){
            hour = '0' + hour;
        }


        return hour +':'+ minute;

    }
}