
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${__1346296103_spaceship}","click",function(sym,e){sym.play(2000);sym.playReverse();sym.$(".nextanimation").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","scroll",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(5000);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-189631950");