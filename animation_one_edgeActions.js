/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${__1346296103_spaceship}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         
         // play the timeline from the given position (ms or label)
         sym.play(2000);
         sym.playReverse();
         
         sym.$("nextanimation").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-189631950");