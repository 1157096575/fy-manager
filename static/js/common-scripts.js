var Script = function () {
    var getHost = function(url) { //获取 host
        var host = "null";
        if (typeof url == "undefined"|| null == url)
            url = window.location.href;
        var regex = /.*\:\/\/([^\/|:]*).*/;
        var match = url.match(regex);
        if (typeof match != "undefined"
            && null != match) {
            host = match[1];
        }
        if (typeof host != "undefined"
            && null != host) {
            var strAry = host.split(".");
            if (strAry.length > 1) {
                host = strAry[strAry.length - 2] + "." + strAry[strAry.length - 1];
            }
        }
        return host;
    };
    var cookieTools = { // cookie操作
        get : function (name){
            var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
            if(arr != null){
                return unescape(arr[2]);
            }
            return "";
        },
        set : function (name, value, days,domain){
            if (typeof days == "undefined"){
                domain = domain?domain:getHost();
                //document.cookie = name + "=" + escape(value) + "; path=/; domain="+domain;
                document.cookie = name + "=" + escape(value) + ";";
            }else{
                var expdate = new Date();
                var msecs = (typeof days === 'number') ? days * 24 * 60 * 60 * 1000 : 0;
                expdate.setTime(expdate.getTime() + msecs);
                //document.cookie = name + "=" + escape(value) + "; path=/; domain="+tools.getHost()+"; expires=" + expdate.toUTCString();
                document.cookie = name + "=" + escape(value) + "; expires=" + expdate.toUTCString();
            }
        },
        del : function (name){
            var expdate = new Date();
            expdate.setTime(expdate.getTime() - 1000);
            this.set(name, "", expdate);
        }
    };


   //sidebar dropdown menu
   $('#sidebar .sub-menu > a').click(function () {
        $('#sidebar .sub > li').removeClass('active');

        var last = $('.sub-menu.open', $('#sidebar'));
        last.removeClass("open");

        $('.arrow', last).removeClass("open");
        $('.sub', last).slideUp(200);
        var sub = $(this).next();

        if (sub.is(":visible")) {
            $('.arrow', $(this)).removeClass("open");
            $(this).parent().removeClass("open");
            sub.slideUp(200);
        } else {
            $('.arrow', $(this)).addClass("open");
            $(this).parent().addClass("open");
            sub.slideDown(200);
        }
        var o = ($(this).offset());
        diff = 200 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });
    var liIndex = sessionStorage.getItem('liIndex') || -1;
    $('#sidebar .sub > li').each(function(i){
        var index = i;
        var _$this = $(this);
        if(liIndex == i) _$this.addClass('active');
        _$this.on('click',function(){
            liIndex = index;
            sessionStorage.setItem('liIndex',index);
            _$this.siblings().removeClass('active');
            _$this.addClass('active');
        });
    });
    var subMenuIndex = sessionStorage.getItem('subMenuIndex') || -1;
    $('#sidebar .sub-menu').each(function(i){
        var index = i;
        var _$this = $(this);
        if(subMenuIndex == i) _$this.addClass('active');
        _$this.on('click',function(){
            cookieTools.del('todopage');
            cookieTools.del('paramFrom');
            subMenuIndex = index;
            sessionStorage.setItem('subMenuIndex',index);
            _$this.siblings().removeClass('active');
            _$this.addClass('active');
        });
    });

    $('#sidebar .on-sub').on('click',function(){
        var _$this = $(this);
        if(_$this.find('.sub').length == 0){
            sessionStorage.setItem('liIndex',-1);
            sessionStorage.setItem('subMenuIndex',-1);

            var last = $('.sub-menu.open', $('#sidebar'));
            last.removeClass("open");
            $('.arrow', last).removeClass("open");
            $('.sub', last).slideUp(200);
        }
        var _sib = _$this.siblings();
        _sib.removeClass('active');
        _$this.addClass('active');
    });

//    sidebar toggle
    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.icon-reorder').click(function () {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-180px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '180px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });

    // custom scrollbar
    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', cursorborder: ''});

    //$("html").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', cursorborder: '', zindex: '1000'});


    //tool tips
    $('.tooltips').tooltip();

    //popovers
    $('.popovers').popover();

}();



