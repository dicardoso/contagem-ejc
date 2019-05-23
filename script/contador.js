function countdown_load99(){

var on_event="XXXIII EJC - PNSA"; //Mensagem no dia do evento
var yr=2019;
var mo=07;
var da=19;
var hr=18;
var min=00;
var sec=0;
var month='';
var month=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var bottom_event="";
var now_d=new Date();
var now_year=now_d.getYear();

if (now_year < 1000)now_year+=1900;var now_month=now_d.getMonth();
var now_day=now_d.getDate();
var now_hour=now_d.getHours();
var now_min=now_d.getMinutes();
var now_sec=now_d.getSeconds();
var now_val= month[now_month]+" "+now_day+", "+now_year+" "+now_hour+":"+now_min+":"+now_sec;event_val=month[mo-1]+" "+da+", "+yr+" "+hr+":"+min+":"+sec;difference=Date.parse(event_val)-Date.parse(now_val);differenceday=Math.floor(difference/(60*60*1000*24)*1);differencehour=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);

differencemin=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
differencesec=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

if(document.getElementById('pageinval35')){
    if(differenceday <= 0 && differencehour <= 0 && differencemin <= 0 && differencesec <= 1 && now_day == da){
        document.getElementById('pageinval35').innerHTML=on_event;
    }
    else if (differenceday <= -1){
        document.getElementById('pageinval35').innerHTML="Evento : "+on_event+" ... já passou";
    }
    else {
        document.getElementById('dias').innerHTML=differenceday;
        document.getElementById('horas').innerHTML=differencehour;
        document.getElementById('min').innerHTML=differencemin;
        document.getElementById('seg').innerHTML=+differencesec;
        //document.getElementById('pageinval35').innerHTML="<center><font size='5'>"+differenceday+" dias<br/> "+differencehour+" horas<br/> "+differencemin+" minutos<br/> "+differencesec+" segundos "+bottom_event;
    }
}
setTimeout("countdown_load99()",1000);
}
countdown_load99();

