import React from 'react'
import { useEffect } from 'react'
import $ from 'jquery';
function Slider() {
    useEffect(()=>{
        $.global = new Object();

        $.global.item = 1;
        $.global.total = 0;
        
        $(document).ready(function() 
            {
            
            var WindowWidth = $(window).width();
            var SlideCount = $('#slides li').length;
            var SlidesWidth = SlideCount * WindowWidth;
            
           $.global.item = 0;
            $.global.total = SlideCount; 
            
            $('.slide').css('width',WindowWidth+'px');
            $('#slides').css('width',SlidesWidth+'px');
        
           $("#slides li:nth-child(1)").addClass('alive');
            
          $('#left').click(function() { Slide('back'); }); 
          $('#right').click(function() { Slide('forward'); }); 
                
          });
        
        function Slide(direction)
            {
           
            if (direction == 'back') { var $target = $.global.item - 1; }
            if (direction == 'forward') { var $target = $.global.item + 1; }  
            
            if ($target == -1) { DoIt($.global.total-1); } 
            else if ($target == $.global.total) { DoIt(0); }  
            else { DoIt($target); }
            
            
            }
        
        function DoIt(target)
          {
           
            var $windowwidth = $(window).width();
            var $margin = $windowwidth * target; 
            var $actualtarget = target+1;
            
            $("#slides li:nth-child("+$actualtarget+")").addClass('alive');
            
            $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');	
            
            $.global.item = target; 
            
          $('#count').html($.global.item+1);
            
          }
        
    },[])

    return (
        <div className='slider'>
            <div id="slide-window">
        <ol id="slides" start={1}>
          <li className="slide color-0 alive" style={{backgroundImage: 'url(http://stuckincustoms.smugmug.com/Portfolio/i-JSxf5Nm/0/X3/Burning-Man-Day-6%20%28202%20of%201606%29-X3.jpg)'}} />
          <li className="slide color-1" style={{backgroundImage: 'url(http://stuckincustoms.smugmug.com/Portfolio/i-KMjVHRd/0/X3/Andramada-X3.jpg)'}} />
          <li className="slide color-2" style={{backgroundImage: 'url(http://stuckincustoms.smugmug.com/Burning-Man/i-dd9xmfn/0/X3/The%20Steamy%20Car-X3.jpg)'}} />
          <li className="slide color-3" style={{backgroundImage: 'url(http://stuckincustoms.smugmug.com/Portfolio/i-KscS8CF/0/X3/Burning-Man-Day-1%20%281006%20of%201210%29-X3.jpg)'}} />
          <li className="slide color-4" style={{backgroundImage: 'url(http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg)'}} />
        </ol>
        <span className="nav fa fa-chevron-left fa-3x" id="left" />
        <span className="nav fa fa-chevron-right fa-3x" id="right" />
        <div id="credit">Photography by Trey Ratcliff<br />Slide No.<span id="count">1</span><br /><span id="zoom">zoom</span></div>
      </div>
    );
            </div>

    )
}

export default Slider
