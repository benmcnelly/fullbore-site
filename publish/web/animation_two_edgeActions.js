
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.stop(stophere);sym.getSymbol("Text3").deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","click",function(sym,e){window.open("http://www.google.com","_blank");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-201456471");