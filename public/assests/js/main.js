//add element to string on keyup event, show pen while key is pressed. 
let str="";
let code=[];

$('textarea').keyup(function (event) { 
    addCode($(this).val(),event.which);
    $(this).val('');
    console.log(str);
    console.log(code);
    $('#pen').css({
        fontSize : "0px"
    })
});

$('textarea').keydown(function (event) {
    $('#pen').css({
        fontSize : "25px"
    })
})

function addCode(ch,asch) {
    if(asch === 13) {
        code.push(str);
        str='';
    }
    else if(asch === 8){
        str = str.slice(0,str.length - 1);
    }
    else if(asch === 46){
        str = str.slice(1);
    }
    else {
        str = str + ch;
    }   
}



// view the whole code on click of button view code for 1 sec only
// screen time less than 5 users at a time ask from server..
// after 1 sec is successful put request to server .. and un view the code ..
