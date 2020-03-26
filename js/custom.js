if($(".list-slides").length > 0){
    var owl = $(".list-slides").owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        rtl:true,
        nav:false,
        dots:true,
        video: true,
        // videoWidth: 300,
        // videoHeight: 300,
    });

    owl.on('changed.owl.carousel', function(event) {
        if( $(this).find('.owl-item.active').next().find('div').hasClass('item-video') ){
            let video = $(this).find('.owl-item.active').next().find('.item-video video')
            video.get(0).play();
            owl.trigger('stop.owl.autoplay');

            $(video).bind('stop pause', function(e) {
                owl.trigger('play.owl.autoplay');
            });
        }
    })
}


if($(".list-projects").length > 0){
    $(".list-projects").owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:9000,
        autoplayHoverPause:true,
        rtl:true,
        nav:true,
        dots:true,
    });
}


if($(".list-achievements").length > 0){
    $(".list-achievements").owlCarousel({
        items:2,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:9000,
        autoplayHoverPause:true,
        rtl:true,
        dots:true,
        navigation: false,
        scrollPerPage: true,
        slideBy: 2
    });
}


if($(".list-library").length > 0){
    $(".list-library").owlCarousel({
        items:2,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:9000,
        autoplayHoverPause:true,
        rtl:true,
        navigation: false,
        dots:true,
        scrollPerPage: true,
        slideBy: 2
    });
}


if($(".list-news").length > 0){
    $(".list-news").owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:9000,
        autoplayHoverPause:true,
        rtl:true,
        nav:true,
        dots:false,
    });
}


if($(".open-search").length > 0){
    $(".open-search").on('click', function(){
        $(this).closest(".search").find("form").toggleClass('active');
    });
}

if($(".single-achievement").length > 0){
    $(window).on('scroll', function() { 
        if( !$('.single-achievement').hasClass('scrolled') && $(window).scrollTop() >= $('.single-achievement').offset().top + $('.single-achievement').outerHeight() - window.innerHeight) { 
            $('.single-achievement').addClass('scrolled')
            scrollSpeed();
        } 
    });
    function scrollSpeed(){
        (function($) {
            $.fn.countTo = function(options) {
                options = options || {};
                return $(this).each(function() {
                    // set options for current element
                    var settings = $.extend({},
                        $.fn.countTo.defaults,
                        {
                            from: $(this).data("from"),
                            to: $(this).data("to"),
                            speed: $(this).data("speed"),
                            refreshInterval: $(this).data("refresh-interval"),
                            decimals: $(this).data("decimals")
                        },
                        options
                    );
            
                    // how many times to update the value, and how much to increment the value on each update
                    var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;
            
                    // references & variables that will change with each update
                    var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data("countTo") || {};
            
                    $self.data("countTo", data);
            
                    // if an existing interval can be found, clear it first
                    if (data.interval) {
                        clearInterval(data.interval);
                    }
                    data.interval = setInterval(updateTimer, settings.refreshInterval);
            
                    // initialize the element with the starting value
                    render(value);
            
                    function updateTimer() {
                        value += increment;
                        loopCount++;
                        render(value);
                        if (typeof settings.onUpdate == "function") {
                            settings.onUpdate.call(self, value);
                        }
                        if (loopCount >= loops) {
                            // remove the interval
                            $self.removeData("countTo");
                            clearInterval(data.interval);
                            value = settings.to;
                
                            if (typeof settings.onComplete == "function") {
                                settings.onComplete.call(self, value);
                            }
                        }
                    }
            
                    function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                    }
                });
            };
            
            $.fn.countTo.defaults = {
                from: 0, // the number the element should start at
                to: 0, // the number the element should end at
                speed: 1000, // how long it should take to count between the target numbers
                refreshInterval: 100, // how often the element should be updated
                decimals: 0, // the number of decimal places to show
                formatter: formatter, // handler for formatting the value before rendering
                onUpdate: null, // callback method for every time the element is updated
                onComplete: null // callback method for when the element finishes updating
            };
        
            function formatter(value, settings) {
                return value.toFixed(settings.decimals);
            }
        })(jQuery);
            
        jQuery(function($) {
            // custom formatting example
            $(".count-number").data("countToOptions", {
                formatter: function(value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
                }
            });
        
            // start all the timers
            $(".timer").each(count);
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                $this.countTo(options);
            }
        });
    
    }
}


if ($(window).width() < 786) {
    $('.filter img').on('click', function(){
        $('.filter > div').toggle();
    });
}

if ($(window).width() < 786) {
    var list = $("ul.menu li  a");
        list.click(function (event) {
            var submenu = this.parentNode.getElementsByTagName("ul").item(0);
            if(submenu!=null){
                event.preventDefault();
                $(submenu).slideToggle('fast');
                $(submenu).closest("li").toggleClass("active");
            }
        }
    );

    $('.toggleMenu').on('click', function(){
        $('.menu').toggleClass('open');
    });
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("header").addClass("scroll-fixed");
    } else {
        $("header").removeClass("scroll-fixed");
    }
});