/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        settings = {

            // Carousels
            carousels: {
                speed: 4,
                fadeIn: true,
                fadeDelay: 250,
                loop: true
            },

        };

    // Breakpoints.
    breakpoints({
        wide: ['1281px', '1680px'],
        normal: ['961px', '1280px'],
        narrow: ['841px', '960px'],
        narrower: ['737px', '840px'],
        mobile: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
        mode: 'fade',
        speed: 350,
        noOpenerFade: true,
        alignment: 'center'
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Nav.

    // Button.
    $(
            '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>'
        )
        .appendTo($body);

    // Panel.
    $(
            '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            target: $body,
            visibleClass: 'navPanel-visible'
        });

    // Carousels.
    $('.carousel').each(function() {

        var $t = $(this),
            $forward = $('<span class="forward"></span>'),
            $backward = $('<span class="backward"></span>'),
            $reel = $t.children('.reel'),
            $items = $reel.children('article');

        var pos = 0,
            leftLimit,
            rightLimit,
            itemWidth,
            reelWidth,
            timerId;

        // Items.
        if (settings.carousels.fadeIn) {

            $items.addClass('loading');

            $t.scrollex({
                mode: 'middle',
                top: '-20vh',
                bottom: '-20vh',
                enter: function() {

                    var timerId,
                        limit = $items.length - Math.ceil($window.width() / itemWidth);

                    timerId = window.setInterval(function() {
                        var x = $items.filter('.loading'),
                            xf = x.first();

                        if (x.length <= limit) {

                            window.clearInterval(timerId);
                            $items.removeClass('loading');
                            return;

                        }

                        xf.removeClass('loading');

                    }, settings.carousels.fadeDelay);

                }
            });

        }

        // Main.
        $t._update = function() {
            pos = 0;
            rightLimit = (-1 * reelWidth) + $window.width();
            leftLimit = 0;
            $t._updatePos();
        };

        $t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

        // Forward.
        $forward
            .appendTo($t)
            .hide()
            .mouseenter(function(e) {
                timerId = window.setInterval(function() {
                    pos -= settings.carousels.speed;

                    if (pos <= rightLimit) {
                        window.clearInterval(timerId);
                        pos = rightLimit;
                    }

                    $t._updatePos();
                }, 10);
            })
            .mouseleave(function(e) {
                window.clearInterval(timerId);
            });

        // Backward.
        $backward
            .appendTo($t)
            .hide()
            .mouseenter(function(e) {
                timerId = window.setInterval(function() {
                    pos += settings.carousels.speed;

                    if (pos >= leftLimit) {

                        window.clearInterval(timerId);
                        pos = leftLimit;

                    }

                    $t._updatePos();
                }, 10);
            })
            .mouseleave(function(e) {
                window.clearInterval(timerId);
            });

        // Init.
        $window.on('load', function() {

            reelWidth = $reel[0].scrollWidth;

            if (browser.mobile) {

                $reel
                    .css('overflow-y', 'hidden')
                    .css('overflow-x', 'scroll')
                    .scrollLeft(0);
                $forward.hide();
                $backward.hide();

            } else {

                $reel
                    .css('overflow', 'visible')
                    .scrollLeft(0);
                $forward.show();
                $backward.show();

            }

            $t._update();

            $window.on('resize', function() {
                reelWidth = $reel[0].scrollWidth;
                $t._update();
            }).trigger('resize');

        });

    });

})(jQuery);




new WOW().init();





// form

shifty.setBezierFunction('whipBack', 0.185, 0.615, 0.350, 1.360);
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var DIRTY_CLASS = 'touched';
var UNDERLINE = {
    HEIGHT: 40,
    PATH: function(midY) {
        midY = midY || 0;
        return 'M0,10 C20,10 30,{y} 50,{y} C70,{y} 80,10 100,10'.replace(/{y}/g, midY);
    }
};
var pathTweens = [{
    from: { y: 10 },
    to: { y: 30 },
    duration: 160,
    easing: 'easeTo'
}, {
    from: { y: 30 },
    to: { y: 10 },
    duration: 200,
    easing: 'whipBack'
}];

function init() {
    var animatedInputs = document.querySelectorAll('.animated-input');
    animatedInputs.forEach(function(el) {
        buildUnderline(el);
        var inputEl = el.querySelector('input');
        inputEl.addEventListener('focus', inputFocus);
        inputEl.addEventListener('keyup', inputKeyUp);
    });
}

init();

function buildUnderline(el) {
    var svg = document.createElementNS(SVG_NAMESPACE, 'svg');
    svg.setAttribute('height', UNDERLINE.HEIGHT);
    svg.setAttribute('width', '100%');
    svg.setAttribute('viewBox', '0 0 100 ' + UNDERLINE.HEIGHT);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.classList.add('underline');

    var path = document.createElementNS(SVG_NAMESPACE, 'path');
    path.setAttribute('d', UNDERLINE.PATH(10));
    path.classList.add('underline-path');

    svg.appendChild(path);
    el.appendChild(svg);
}

function inputFocus(ev) {
    var underlinePath = ev.target.parentNode.querySelector('.underline-path');
    tweenSequence(pathTweens, function(state) {
        underlinePath.setAttribute('d', UNDERLINE.PATH(state.y));
    });
}

function inputKeyUp(ev) {
    if (ev.target.value.length > 0) {
        ev.target.parentNode.classList.add(DIRTY_CLASS);
        ev.target.removeEventListener('focus', inputFocus);
        return;
    }
    if (ev.target.parentNode.classList.contains(DIRTY_CLASS)) {
        ev.target.parentNode.classList.remove(DIRTY_CLASS);
        ev.target.addEventListener('focus', inputFocus);
    }
}

function tweenSequence(tweenArray, stepFunction) {
    tweenArray.forEach(function(tween, index) {
        tween.step = stepFunction;
        tween.finish = (index + 1 < tweenArray.length) ? function() {
            shifty.tween(tweenArray[index + 1]);
        } : null;
    });
    shifty.tween(tweenArray[0]);
}