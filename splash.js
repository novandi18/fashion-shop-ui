$(() => {
    if(localStorage.getItem("welcome") === null) {
        $('.splash').css({'animation':'bgsplash .5s'});
        setTimeout(() => {
            $('.splash').css({'background-color':'rgba(0,0,0,.5)'});
        }, 500);
        
        setTimeout(() => {
            $('.splash .box').css({'animation':'showbox .3s'});
        }, 500);

        setTimeout(() => {
            $('.splash .box').css({'opacity':'1'});
        }, 800);

        $('#btnwelcome').click(() => {
            localStorage.setItem("welcome", "ok");
            $('.splash').css({'animation':'outbg .3s'});
            $('.splash .box').css({'animation':'out .3s'});
            
            setTimeout(() => {
                $('.splash').css({'display':'none'});
            }, 300);
        });
    } else {
        $('.splash').css({'display':'none'});
    }
});