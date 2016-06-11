/*
*
 * Created by Jdt on 2016-06-04.
$(function(){

    console.log('hejka');
    console.log($('#undefined'));
    console.log($('.progress'));
    var pathObj = {
        "ikona": {
            "strokepath": [
                {
                    "path": "M63.233,172.136 C49.819,164.078 36.270,156.255 22.585,148.668 C8.900,141.079 2.193,129.463 2.464,113.817 C2.735,98.172 2.735,82.527 2.464,66.882 C2.193,51.236 8.900,39.620 22.585,32.031 C36.270,24.443 49.819,16.621 63.233,8.563 C76.647,0.506 90.060,0.506 103.474,8.563 C116.888,16.621 130.437,24.443 144.122,32.031 C157.807,39.620 164.514,51.236 164.243,66.882 C163.972,82.527 163.972,98.172 164.243,113.817 C164.514,129.463 157.807,141.079 144.122,148.668 C130.437,156.255 116.888,164.078 103.474,172.136 C90.060,180.193 76.647,180.193 63.233,172.136 Z",
                    "duration": 1300
                },
                {
                    "path": "M108.660,74.113 L103.248,75.196 C102.975,75.979 102.658,76.738 102.301,77.475 L105.365,82.071 C106.300,83.471 106.113,85.336 104.924,86.526 L101.527,89.924 C100.844,90.606 99.941,90.958 99.029,90.958 C98.351,90.958 97.670,90.763 97.071,90.365 L92.475,87.301 C91.740,87.656 90.981,87.975 90.199,88.247 L89.114,93.660 C88.785,95.312 87.335,96.499 85.652,96.499 L80.848,96.499 C79.165,96.499 77.715,95.312 77.386,93.660 L76.303,88.247 C75.520,87.975 74.762,87.657 74.025,87.301 L69.429,90.365 C68.832,90.763 68.149,90.958 67.471,90.958 C66.559,90.958 65.656,90.606 64.973,89.924 L61.576,86.526 C60.386,85.336 60.200,83.471 61.135,82.071 L64.199,77.475 C63.844,76.740 63.525,75.981 63.252,75.198 L57.840,74.113 C56.188,73.784 55.000,72.334 55.000,70.652 L55.000,65.847 C55.000,64.165 56.188,62.715 57.840,62.385 L63.252,61.303 C63.525,60.520 63.842,59.761 64.199,59.025 L61.135,54.428 C60.200,53.028 60.386,51.162 61.576,49.972 L64.973,46.576 C65.656,45.893 66.559,45.541 67.471,45.541 C68.149,45.541 68.830,45.736 69.429,46.134 L74.025,49.198 C74.760,48.843 75.518,48.524 76.301,48.252 L77.386,42.839 C77.715,41.187 79.165,39.999 80.848,39.999 L85.652,39.999 C87.335,39.999 88.785,41.187 89.114,42.839 L90.197,48.252 C90.980,48.524 91.738,48.842 92.475,49.198 L97.071,46.134 C97.668,45.736 98.351,45.541 99.029,45.541 C99.941,45.541 100.844,45.893 101.527,46.576 L104.924,49.972 C106.113,51.162 106.300,53.028 105.365,54.428 L102.301,59.025 C102.656,59.759 102.975,60.518 103.248,61.301 L108.660,62.385 C110.312,62.715 111.500,64.165 111.500,65.847 L111.500,70.652 C111.500,72.334 110.312,73.784 108.660,74.113 ZM107.967,65.847 L102.555,64.763 C101.329,64.518 100.323,63.642 99.913,62.461 C99.685,61.807 99.418,61.175 99.122,60.563 C98.578,59.437 98.670,58.107 99.363,57.066 L102.427,52.469 L99.030,49.072 L94.433,52.137 C93.844,52.529 93.161,52.730 92.475,52.730 C91.949,52.730 91.423,52.612 90.935,52.376 C90.321,52.078 89.688,51.814 89.036,51.586 C87.855,51.176 86.979,50.171 86.735,48.945 L85.652,43.531 L80.848,43.532 L79.764,48.945 C79.519,50.171 78.643,51.176 77.462,51.586 C76.808,51.814 76.175,52.081 75.563,52.378 C75.075,52.612 74.550,52.730 74.025,52.730 C73.339,52.730 72.656,52.529 72.066,52.137 L67.470,49.072 L64.073,52.469 L67.137,57.066 C67.832,58.107 67.923,59.438 67.377,60.565 C67.078,61.178 66.814,61.811 66.587,62.463 C66.176,63.644 65.171,64.520 63.945,64.764 L58.531,65.847 L58.533,70.652 L63.945,71.736 C65.171,71.981 66.176,72.856 66.587,74.038 C66.814,74.691 67.082,75.324 67.378,75.936 C67.922,77.062 67.830,78.391 67.137,79.433 L64.073,84.030 L67.470,87.427 L72.066,84.362 C72.656,83.970 73.339,83.769 74.025,83.769 C74.551,83.769 75.077,83.886 75.565,84.123 C76.179,84.421 76.812,84.685 77.463,84.913 C78.644,85.323 79.520,86.328 79.765,87.554 L80.848,92.968 L85.652,92.968 L86.736,87.554 C86.981,86.328 87.857,85.323 89.038,84.913 C89.692,84.685 90.324,84.418 90.937,84.121 C91.425,83.886 91.950,83.769 92.475,83.769 C93.161,83.769 93.844,83.970 94.433,84.362 L99.030,87.427 L102.427,84.030 L99.363,79.433 C98.668,78.391 98.577,77.060 99.123,75.934 C99.422,75.320 99.685,74.688 99.913,74.036 C100.323,72.855 101.329,71.979 102.555,71.734 L107.969,70.652 L107.967,65.847 ZM83.250,80.609 C76.425,80.609 70.891,75.074 70.891,68.250 C70.891,61.425 76.425,55.890 83.250,55.890 C90.074,55.890 95.609,61.425 95.609,68.250 C95.609,75.074 90.074,80.609 83.250,80.609 ZM83.250,57.435 C77.279,57.435 72.436,62.278 72.436,68.250 C72.436,74.221 77.279,79.064 83.250,79.064 C89.221,79.064 94.064,74.221 94.064,68.250 C94.064,62.278 89.221,57.435 83.250,57.435 ZM83.250,75.312 C79.348,75.312 76.187,72.151 76.187,68.250 C76.187,64.347 79.348,61.187 83.250,61.187 C87.152,61.187 90.312,64.347 90.312,68.250 C90.312,72.151 87.152,75.312 83.250,75.312 ZM83.250,62.952 C80.326,62.952 77.953,65.325 77.953,68.250 C77.953,71.174 80.326,73.546 83.250,73.546 C86.174,73.546 88.547,71.174 88.547,68.250 C88.547,65.325 86.174,62.952 83.250,62.952 Z",
                    "duration": 1800
                }
            ],
            "dimensions": {
                "width": 167,
                "height": 181
            }
        }
    };

     Setup and Paint your lazyline!

    $(document).ready(function(){
        $('#undefined').lazylinepainter(
            {
                "svgData": pathObj,
                "strokeWidth": 2,
                "strokeColor": "#e09b99"
            }).lazylinepainter('paint');
    });
});
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *

*/
    
	
	
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

/*
$('.carousel').carousel();*/
