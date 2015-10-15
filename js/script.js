// JavaScript Document
$(document).ready(function() {
    jQuery.fn.exists = function() {
        return this.length > 0;
    }

    if ($('#fullPage').exists()) {
        $('#fullPage').fullpage({
            autoScrolling: false,
            css3: true,
            fitToSection: false,
            // scrollOverflow: false,
            // scrollBar: true
        });
    }

    if ($('#findTempo').exists()) {
        $(document).on('click', '#findTempo .cityOption label input[type="radio"]', function() {
            if ($(this).is(':checked')) {
                $('#findTempo .cityOption label').removeClass('checked');
                $(this).parent().addClass('checked');
            }
        });
    }

    if ($('#findTempo .findFilter .dateTime').exists()) {
        $('#date').datetimepicker({
            format: 'DD-MM-YYYY'
        });
        $('#date input').click(function(event) {
            $('#date').data("DateTimePicker").show();
        });
        $('#time').datetimepicker({
            format: 'LT'
        });
        $('#time input').click(function(event) {
            $('#time').data("DateTimePicker").show();
        });
    }

    if ($('ul.search_list li.dateTime').exists()) {
        $('#date').datetimepicker({
            format: 'DD-MM-YYYY',
        });
        $('#date input').click(function(event) {
            $('#date').data("DateTimePicker").show();
        });
        $('#time').datetimepicker({
            format: 'LT'
        });
        $('#time input').click(function(event) {
            $('#time').data("DateTimePicker").show();
        });
    }

    if ($('#yourDetails').exists()) {
        $('#yourDetails').popup({
            autozindex: true,
            escape: false,
            blur: false
        });
    }

    if ($('#fareDetails').exists()) {
        $('#fareDetails').popup({
            autozindex: true,
            escape: false,
            blur: false,
            background: false,
            onopen: function() {
                $('#yourDetails').hide();
            },
            onclose: function() {
                $('#yourDetails').show();
            }
        });
    }

    if ($('#thankYou').exists()) {
        $('#thankYou').popup({
            autozindex: true,
            escape: false,
            blur: false,
            background: false,
            onopen: function() {
                $('#fareDetails').hide();
            },
            onclose: function() {
                $('#fareDetails').show();
            }
        });
    }

    if ($('.ScrollPanel').exists()) {
        $(".ScrollPanel").mCustomScrollbar({
            scrollInertia: 100
        });
    }

    if ($('.MoreBtn').exists()) {
        $('.MoreBtn').click(function() {
            $(this).toggleClass('active');
            $('.FilterHolder').slideToggle(100);
        });
    }

    if ($('.ApplyHolder').exists()) {
        $('.ModifyBtn').click(function() {
            $('.ApplyHolder').show();
            $('.ModifyBtn').closest('ul').hide();
        });
        $('.ApplyBtn').click(function() {
            $('.ModifySearch').show();
            $('.ApplyBtn').closest('ul').hide();
        });
    }

    if ($('.processHolder .waves').exists()) {
        waveImg();
    }

    if ($('.filter_dropdown').exists()) {
        $('.filter_dropdown .filter_action .defaultBtn').click(function() {
            if (!$('.chk01').is(':checked')) {
                alert('Not checked');
                return false;
            }
        });
    }

    if ($('#videoPopup').exists()) {
        $('#videoPopup').popup({
            autozindex: true,
            escape: false,
            blur: false,
            scrolllock: true
        });
    }

    if ($('#findTempo .findFilter .submission button').exists()) {
        $('#findTempo .findFilter .submission button').click(function() {
            if ($('#findTempo .findFilter .selectCity select').val() == '0') {
                alert('You should select a city.');
                return false;
            }
        });
    }

    if ($('.mobProcess').exists()) {
        $('.mobProcess').owlCarousel({
            singleItem: true,
            autoPlay: 3000,
            navigation: false,
            transitionStyle: "fade",
            afterInit: function(elem) {
                var that = this;
                that.owlControls.prependTo(elem);

                $.each(this.owl.userItems, function(i) {
                    var titleData = jQuery(this).find('img').attr('title');
                    var paginationLinks = jQuery('.owl-controls .owl-pagination .owl-page span');
                    $(paginationLinks[i]).append(titleData);

                    var altData = jQuery(this).find('img').attr('alt');
                    var paginationBlock = jQuery('.owl-controls .owl-pagination .owl-page span');
                    $(paginationBlock[i]).addClass(altData);
                });
            },
            afterUpdate: function() {
                $.each(this.owl.userItems, function(i) {
                    var titleData = jQuery(this).find('img').attr('title');
                    var paginationLinks = jQuery('.owl-controls .owl-pagination .owl-page span');
                    $(paginationLinks[i]).append(titleData);

                    var altData = jQuery(this).find('img').attr('alt');
                    var paginationBlock = jQuery('.owl-controls .owl-pagination .owl-page span');
                    $(paginationBlock[i]).addClass(altData);
                });
            }

            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        });
    }

    if ($(window).width() <= 800) {
        if ($('#header').exists()) {
            $('#header .mblNav').click(function() {
                $('body').toggleClass('nav-open');
                $(this).toggleClass('active');
                $('#header .headerNav').toggleClass('active');
                $('.nav-overlay').toggleClass('active');
            });

            $('#header .logo').click(function() {
                $('body').removeClass('nav-open');
                $('#header .mblNav').removeClass('active');
                $('#header .headerNav').removeClass('active');
                $('.nav-overlay').removeClass('active');
            });

            $('.nav-overlay').click(function() {
                $('body').removeClass('nav-open');
                $('#header .mblNav').removeClass('active');
                $('#header .headerNav').removeClass('active');
                $('.nav-overlay').removeClass('active');
            });
        }

        contentPos();

        if ($('.contact_cnt').exists()) {
            $('#name').attr('placeholder', 'Name');
            $('#email').attr('placeholder', 'Email');
            $('#location option[value="0"]').html('Location');
            $('#subject').attr('placeholder', 'Subject');
            $('#question').attr('placeholder', 'Question');

            $('.contact_cnt .each_row .defaultBtn').click(function() {
                if ($('#location').val() == '0') {
                    alert('You should select a location.');
                    return false;
                }
            });
        }
    }
});

$(window).resize(function() {
    if ($('.processHolder .waves').exists()) {
        waveImg();
    }

    if ($(window).width() <= 800) {
        if ($('#header').exists()) {
            $('#header .mblNav').click(function() {
                $('body').toggleClass('nav-open');
                $(this).toggleClass('active');
                $('#header .headerNav').toggleClass('active');
                $('.nav-overlay').toggleClass('active');
            });

            $('#header .logo').click(function() {
                $('body').removeClass('nav-open');
                $('#header .mblNav').removeClass('active');
                $('#header .headerNav').removeClass('active');
                $('.nav-overlay').removeClass('active');
            });

            $('.nav-overlay').click(function() {
                $('body').removeClass('nav-open');
                $('#header .mblNav').removeClass('active');
                $('#header .headerNav').removeClass('active');
                $('.nav-overlay').removeClass('active');
            });
        }

        contentPos();

        if ($('.contact_cnt').exists()) {
            $('#name').attr('placeholder', 'Name');
            $('#email').attr('placeholder', 'Email');
            $('#location option[value="0"]').html('Location');
            $('#subject').attr('placeholder', 'Subject');
            $('#question').attr('placeholder', 'Question');

            $('.contact_cnt .each_row .defaultBtn').click(function() {
                if ($('#location').val() == '0') {
                    alert('You should select a location.');
                    return false;
                }
            });
        }
    }
});

function waveImg() {
    var truck = $('.processHolder .binkImg img.smallTruck').height();
    $('.processHolder .waves').css('height', truck);
}

function contentPos() {
    var headerHgt = $('#header').outerHeight();
    $('#header .headerNav').css('top', headerHgt);
    $('.nav-overlay').css('top', headerHgt);
    $('#innerPage').css('padding-top', headerHgt);
}