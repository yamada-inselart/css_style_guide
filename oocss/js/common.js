
(function(){
    
    
    /*------------------------
      アコーディオンパネル
    -------------------------*/   
    function accordion(selector){
        $(selector).click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass("active");
        });
    }
    
    
    /*------------------------
      マウスオーバー反転処理
    -------------------------*/   
    function rollover(selector){
        $(selector).hover(function(){
            var afterSrc = $(this).attr('src').replace(/^(.+)(\.[a-z]+)$/, '$1_on$2');
            $(this).attr('src',afterSrc);
        },function(){
            var afterSrc = $(this).attr('src').replace(/^(.+)_on(\.[a-z]+)$/, '$1$2');
            $(this).attr('src',afterSrc);
        }).each(function(){
            var afterSrc = $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/,"$1_on$2");
            $("<img>").attr('src',afterSrc);
        });
    }
    
    
    /*------------------------
      ページトップ
    -------------------------*/
    function pageTop(selector){
        this.initialize(selector);
        this.handleEvents();
    };

    pageTop.prototype.initialize = function(selector){
        this.flag = false;        
        this.topBtn = $(selector);

        if(this.topBtn.css('display') == 'block'){
            this.topBtn.hide();
        }
    };

    pageTop.prototype.handleEvents = function(){
        var self = this;

        this.topBtn.click(function(){
            self.clickEvent();
        });

        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            self.scrollEvent(scroll); 
        });  
    };

    pageTop.prototype.clickEvent = function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    };

    pageTop.prototype.scrollEvent = function(scroll){
        if(scroll > 600){
            if(this.flag == false){
                this.flag = true;
                this.topBtn.stop().fadeIn(500);
            }
        } else {
            if(this.flag){
                this.flag = false;
                this.topBtn.stop().fadeOut(300);
            }
        }
    };
        
    
    /*------------------------
      関数呼び出し
    -------------------------*/  
    $(function(){
        accordion('.accordion');
        rollover('.rollover');
        new pageTop('.pagetop');
    });
        
    
})();