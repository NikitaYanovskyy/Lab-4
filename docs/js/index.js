$(document).ready(()=>{
    var checkMenu = false;
    $('.menu-button-wrapper').click(()=>{
        if(checkMenu == false){
            $('.menu').css({
                'left': '0'
            })
            $('.menu-button-wrapper').css({
                'left': '180px'
            })
            $('.menu-button').addClass('width-change');
            checkMenu = true
        }else{
            $('.menu').css({
                'left': '-180px'
            })
            $('.menu-button-wrapper').css({
                'left': '0'
            })
            $('.menu-button').removeClass('width-change');
            checkMenu = false
        }
    })
})