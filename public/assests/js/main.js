//add element to string on keyup event, show pen while key is pressed. 
'use strict'
function run() {
    let str="";
    $('textarea').keyup(function (event) {
        addCode($(this).val(),event.which);
        $(this).val('');
        console.log(str);
        $('#pen').css({
            fontSize : "0px"
        })
        event.stopPropagation();
    });

    $('textarea').keydown(function (event) {
        if(event.which === 9) event.preventDefault();
        $('#pen').css({
            fontSize : "25px"
        })
        event.stopPropagation();
    })

    function addCode(ch,asch) {
        if(asch === 9) str = str + String.fromCharCode(9);
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

    $('#viewCode').click(function(event){
        //ajax request...
        $.get('/view',
            function (data, textStatus, jqXHR) {
                if(jqXHR.status === 200) showCode();
                else console.log('better luck next time there are 5 participant already viewing screen');                
            },
            "text"
        );
        
    })

function showCode() {
    $('textarea').css({
        color : "black"
    }).val(str);
    //  countdown timer ..
    setTimeout(function(){
        $('textarea').css({
            color : "white"
        }).val('');
        console.log('3 sec timer started');
        $.ajax({
            type: "put",
            url: "/view",
            dataType: "text",
            success: function () {
                //remove countdown timer..
                console.log('times up');
            }
        });
    },3000);
}
}
run();