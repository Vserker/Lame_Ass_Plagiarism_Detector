
//input
function startover(){
    alert("invalid data");
    location.reload();
}

var date1y=parseInt(prompt('\n--First Date--\nYear: '))
const date1m_f=()=>{let data=parseInt(prompt('\nMonth: '));
                  return data<13 && data>0? data : startover(); //putting a anonomyous func here makes it execute later like for setTimeout.
}
const date1d_f=()=>{let data=parseInt(prompt('\Day: '));
                  return data<32 && data>0? data : startover();
}
var date1m=date1m_f();
var date1d=date1d_f();

const date2y=parseInt(prompt('\n--Second Date--\nYear: '))
const date2m_f=()=>{let data=parseInt(prompt('\nMonth: '));
                  return data<13 && data>0? data : startover();
}
const date2d_f=()=>{let data=parseInt(prompt('\Day: '));
                  return data<32 && data>0? data : startover();
}                  
var date2m=date2m_f();
var date2d=date2d_f();


//months and days
const months={
    '1':31,
    '2':28,
    '3':31,
    '4':30,
    '5':31,
    '6':30,
    '7':31,
    '8':31,
    '9':30,
    '10':31,
    '11':31,
    '12':31
}


//Days before dates
var months_to_days1=0
var months_to_days2=0

//for first date:
for (let i=1;i<date1m;i++){
    months_to_days1=months_to_days1+months[i.toString()]
}
days_b_date1=(365*date1y)+(Math.trunc(date1y/4))+date1d+months_to_days1

//for second date:
for (let i=1;i<date2m;i++){
    months_to_days2=months_to_days2+months[i.toString()]
}
days_b_date2=(365*date2y)+(Math.trunc(date2y/4))+date2d+months_to_days2


//RESULT:
alert("The days between: "+(days_b_date1-days_b_date2))
