$(() => {
    let data = {
        model1: "Kimono Outfit",
        model2: "Formal Outfit"
    }

    $('#title').html(data["model1"]);

    $('.search').click(() => {
        $('.searchform').toggleClass('toggleshow');
        if($('.searchform').hasClass('toggleshow')) {
            $('.searchform').css({'animation':'showsearch .3s'});
        } else {
            $('.searchform').css({'animation':'hidesearch .3s'});
        }
    });

    $('.container .content .model img:nth-child(2)').css({'animation':'switchimg .5s'});
    $('.container .content .model .text h1').css({'animation':'showtext .5s'});
    setTimeout(() => {
        $('.container .content .model img:nth-child(2)').css({'opacity':'1','margin-left':'120px'});
        $('.container .content .model .text h1').css({'opacity':'1'});
    });
    
    let lengthimg = $('#model img').length + 1;
    let x = 2;
    let num = 1;
    let model = "model";

    $('#next').click(() => {
        $('#back').addClass('arrow-active');
        num = num + 1;
        x = x + 1;
        
        if(x == lengthimg) {
            $('#next').removeClass('arrow-active');
        }
        
        if(x > lengthimg) {
            x = lengthimg;
            num = lengthimg - 1;
            $('#title').html(data[model + num]);
        } else {
            $('#title').html(data[model + num]);
            $(".container .content .model img:nth-child(" + (x - 1) + ")").css({'animation':'switchhide .3s'});
            setTimeout(() => {
                $(".container .content .model img:nth-child(" + (x - 1) + ")").css({'opacity':'0'});
            });
    
            $(".container .content .model img:nth-child(" + x + ")").css({'animation':'switchimg .5s'});
            setTimeout(() => {
                $(".container .content .model img:nth-child(" + x + ")").css({'opacity':'1','margin-left':'120px'});
            });
        }
        
        // console.log(model + num);
        // console.log(x);
    });

    $('#back').click(() => {
        $('#next').addClass('arrow-active');
        num = num - 1;
        x = x - 1;

        if(x < 3) {
            $('#back').removeClass('arrow-active');
        }
        
        if(x < 2) {
            x = 2;
            num = 1;
            $('#title').html(data[model + num]);
        } else {
            $('#title').html(data[model + num]);
            $(".container .content .model img:nth-child(" + (x + 1) + ")").css({'animation':'switchhide .3s'});
            setTimeout(() => {
                $(".container .content .model img:nth-child(" + (x + 1) + ")").css({'opacity':'0'});
            });
            
            $(".container .content .model img:nth-child(" + x + ")").css({'animation':'switchimg .5s'});
            setTimeout(() => {
                $(".container .content .model img:nth-child(" + x + ")").css({'opacity':'1','margin-left':'120px'});
            });
        }
        
        // console.log(model + num);
        // console.log(x);
    });
});