
   	
	
$(function(){
 var windowWidth=$(window).width();
	if (windowWidth > 1200) {

        $(window).scroll(function() {
            $('.animatedEntrance').each(function() {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass("shake"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                }
            });
        });

    }


    if (windowWidth < 1200) {
        /////////////////////////////////////
        //  Disable Mobile Animated
        /////////////////////////////////////
        $("body").removeClass("noIE");
    }


    $('.noIE .animated:not(.animation-done)').waypoint(function() {



        var animation = $(this).data('animation');

        $(this).addClass('animation-done').addClass(animation);

    }, {
        triggerOnce: true,
        offset: '90%'
    });
    });



/*validacja formularza*/

document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('form');
    console.log(form);

    form.addEventListener('submit', function(){
        console.log(this.elements);
        var isValid=true;
        for(var i = 0; i<this.elements.length; i++){
            //this.elements[i];


            if(this.elements[i].id==='exampleInputName'){
                // console.log(this.elements[i].id==='name')
                if(this.elements[i].value.length<=5){
                    this.elements[i].style.borderColor = 'red';
                    isValid=false;
                }
                else{
                    this.elements[i].style.borderColor = '#9f449b';
                    isValid=true;
                }
            };
            if(this.elements[i].id==='exampleInputEmail1'){
                if(this.elements[i].value.indexOf('@')===-1) {
                    this.elements[i].style.borderColor = 'red';
                    isValid = false;
                }
                else{
                    this.elements[i].style.borderColor = '#9f449b';
                    isValid=true;
                }
            };
            if(this.elements[i].id==='exampleInputMessage'){
                if(this.elements[i].value.length<=5){
                    this.elements[i].style.borderColor = 'red';
                    isValid=false;
                }
                else{
                    this.elements[i].style.borderColor = '#9f449b';
                    isValid=true;
                }
            };


            if(!isValid){
                event.preventDefault()}
        }

    });

});
