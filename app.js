$(function() {

    /*validacja formularza*/

    document.addEventListener('DOMContentLoaded', function() {
        var form = document.querySelector('form');
        form.addEventListener('submit', function() {
            console.log(this.elements);
            var isValid = true;
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].id === 'exampleInputName') {

                    if (this.elements[i].value.length <= 5) {
                        this.elements[i].style.borderColor = 'red';
                        isValid = false;
                    } else {
                        this.elements[i].style.borderColor = '#9f449b';
                        isValid = true;
                    }
                };
                if (this.elements[i].id === 'exampleInputEmail1') {
                    if (this.elements[i].value.indexOf('@') === -1) {
                        this.elements[i].style.borderColor = 'red';
                        isValid = false;
                    } else {
                        this.elements[i].style.borderColor = '#9f449b';
                        isValid = true;
                    }
                };
                if (this.elements[i].id === 'exampleInputMessage') {
                    if (this.elements[i].value.length <= 5) {
                        this.elements[i].style.borderColor = 'red';
                        isValid = false;
                    } else {
                        this.elements[i].style.borderColor = '#9f449b';
                        isValid = true;
                    }
                };

                if (!isValid) {
                    event.preventDefault()
                }
            }
        });
    });


    /*galeria*/

    $(function() {
        var selectedClass = "";
        $(".category").click(function() {
            selectedClass = $(this).attr("data-rel");
            $(".portfolio-list").fadeTo(100, 0.1);
            $(".portfolio-list div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('scale-anm');
                $(".portfolio-list").fadeTo(300, 1);
            }, 300);

        });
    });


});


//counter
$(window).scroll(function() {
    var hT = $('.counterwrapper').offset().top,
        hH = $('.counterwrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); {
            $('.count').removeClass('count').addClass('counted');
        };
    }
});
