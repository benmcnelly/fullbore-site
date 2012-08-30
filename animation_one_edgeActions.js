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
         sym.play(2000);
         sym.playReverse();
         sym.$(".nextanimation").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         // insert code for scroll event here
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(5000);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-189631950");