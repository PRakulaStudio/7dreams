$(document).ready(function () {
    var videoHtml =
        "<video id='video' width='100%' height='auto' autoplay='autoplay' loop='loop' preload='auto' muted>"
        + "<source src='video.mp4' type='video/mp4'>"
        + "</video>";

    var imgHtml = "<img src='images_tmp/main_sec_bg.jpg' alt=''>";

    //popups
    $('.pop').click(function (e) {
        e.preventDefault();
        var mylink = $(this);
        var popup = $(mylink.data('pop'));
        popup.addClass('opened');
        if (mylink.hasClass('serv')) {
            console.log($('.serv_type', popup));
            var srv = mylink.data('type');
            $('.serv_type', popup).val(srv);
        }
    })
    $('.pop_wrap .close').click(function (e) {
        e.preventDefault();
        var popup = $(this).closest('.pop_wrap');
        popup.removeClass('opened');
        $('#type').val('');
    })

    //OnOff sound
    $("#video").muted = true;
    $('#sound').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('dis')) {
            $(this).removeClass('dis');
            $(this).children('a').text('Включить звук');
            $("#video").prop('muted', true);
        } else {
            $(this).addClass('dis');
            $(this).children('a').text('Выключить звук');
            $("#video").prop('muted', false);
        }
    })

    //smooth scroll
    $('#dropdown a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('#dropdown a').removeClass('active');
        $(this).addClass('active');
        jQuery('html,body').animate({scrollTop: jQuery(el).offset().top - 80}, 700);
        return false;
    });

    //emotions slider
    $('#em_slider').bxSlider({
        auto: true,
        pager: false,
        controls: false,
        pause: 5000,
        speed: 1000
    });

    //brands slider
    $('#brands_slider').bxSlider({
        minSlides: 4,
        maxSlides: 4,

        ticker: true,
        speed: 15000
    });

    //menu toggler
    $('#menu_toggler').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('opened')
        $('#dropdown').toggleClass('opened');
    })

    //contacts cloth close
    $('#c_close').click(function (e) {
        e.preventDefault();
        $('#c_cloth').fadeOut(300);
    })

    //hover elements
    if ($(window).width() < 720) {
        $('.hover').click(function (e) {
            $('.hover').children('.hover_el').removeClass('visible');
            e.preventDefault();
            $(this).find('.hover_el').addClass('visible');
        })
    }

    //viewportchecker
    $('.why_moving').viewportChecker({
        callbackFunction: function (elem, action) {
            $('.why_moving .oneitem').each(function () {
                var item = $(this);
                var index = $(this).index();
                console.log(index);
                setTimeout(function () {
                    item.addClass('visible')
                }, 1500 * index)
            })

        }
    });

    //submit forms
    jQuery("#same_hol").validate({
        submitHandler: function () {
            jQuery.ajax({
                url: "/ajax/same_hol.php",
                type: "POST",
                dataType: "html",
                data: jQuery("#same_hol").serialize(),
                success: function (response) {
                    window.location.href = "/thanks.html";
                },
                error: function (response) {
                    alert('Произошла ошибка при отправке формы');
                }
            });
        },
        rules: {
            phone: {
                required: true,
                maxlength: 20
            }
        },
        messages: {
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен иметь максимум 20 символов"
            }
        }
    });

    jQuery("#free_calc").validate({
        submitHandler: function () {
            jQuery.ajax({
                url: "/ajax/free_calc.php",
                type: "POST",
                dataType: "html",
                data: jQuery("#free_calc").serialize(),
                success: function (response) {
                    window.location.href = "/thanks.html";
                },
                error: function (response) {
                    alert('Произошла ошибка при отправке формы');
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                maxlength: 20
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения"
            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен иметь максимум 20 символов"
            }
        }
    });

    jQuery("#get_gift").validate({
        submitHandler: function () {
            jQuery.ajax({
                url: "/ajax/get_gift.php",
                type: "POST",
                dataType: "html",
                data: jQuery("#get_gift").serialize(),
                success: function (response) {
                    window.location.href = "/thanks.html";
                },
                error: function (response) {
                    alert('Произошла ошибка при отправке формы');
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                maxlength: 20
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения"
            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен иметь максимум 20 символов"
            }
        }
    });

    jQuery("#estimate").validate({
        submitHandler: function () {
            jQuery.ajax({
                url: "/ajax/estimate.php",
                type: "POST",
                dataType: "html",
                data: jQuery("#estimate").serialize(),
                success: function (response) {
                    window.location.href = "/thanks.html";
                },
                error: function (response) {
                    alert('Произошла ошибка при отправке формы');
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                maxlength: 20
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения"
            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен иметь максимум 20 символов"
            }
        }
    });

    jQuery(".feedback").each(function (index, form) {
        $(form).validate({
            submitHandler: function () {
                jQuery.ajax({
                    url: "/ajax/feedback.php",
                    type: "POST",
                    dataType: "html",
                    data: jQuery(form).serialize(),
                    success: function (response) {
                        window.location.href = "/thanks.html";
                    },
                    error: function (response) {
                        alert('Произошла ошибка при отправке формы');
                    }
                });
            },
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true,
                    maxlength: 20
                }
            },
            messages: {
                name: {
                    required: "Это поле обязательно для заполнения"
                },
                phone: {
                    required: "Это поле обязательно для заполнения",
                    minlength: "Телефон должен иметь максимум 20 символов"
                }
            }
        })
    });

    jQuery(".call-form").each(function (index, form) {
        $(form).validate({
            submitHandler: function () {
                jQuery.ajax({
                    url: "/ajax/free_calc.php",
                    type: "POST",
                    dataType: "html",
                    data: jQuery(form).serialize(),
                    success: function (response) {
                        window.location.href = "/thanks.html";
                    },
                    error: function (response) {
                        alert('Произошла ошибка при отправке формы');
                    }
                });
            },
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true,
                    maxlength: 20
                }
            },
            messages: {
                name: {
                    required: "Это поле обязательно для заполнения"
                },
                phone: {
                    required: "Это поле обязательно для заполнения",
                    minlength: "Телефон должен иметь максимум 20 символов"
                }
            }
        })
    });


})

$(window).scroll(function () {
    var offset = $(window).scrollTop();
    if (offset > 100) {
        $('#hover_menu').css('top', '0px');
    } else {
        var height = $('#hover_menu').height();
        $('#hover_menu').css('top', -height + 'px');
    }


})

$(window).load(function () {
    //dinamics table heights
    $('.full_height').each(function () {
        var new_height = $(this).parents('.oneitem').height();
        $(this).height(new_height - parseInt($(this).css("padding")) * 2);
    })
})

$(window).resize(function () {
    //dinamics table heights
    $('.full_height').each(function () {
        var new_height = $(this).parent('.oneitem').height();
        $(this).height(new_height - parseInt($(this).css("padding")) * 2);
    })

    //hover elements
    if ($(window).width() < 720) {
        $('.hover').click(function (e) {
            $('.hover').children('.hover_el').removeClass('visible');
            e.preventDefault();
            $(this).find('.hover_el').addClass('visible');
        })
    }
})
