/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'_1346296103_spaceship',
            type:'image',
            rect:['59px','-141px','128px','128px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"1346296103_spaceship.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '322px'],
            ["style", "width", '260px']
         ],
         "${__1346296103_spaceship}": [
            ["style", "top", '-152px'],
            ["style", "left", '60px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid1", tween: [ "style", "${__1346296103_spaceship}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${__1346296103_spaceship}", "left", '77px', { fromValue: '60px'}], position: 545, duration: 1120 },
            { id: "eid9", tween: [ "style", "${__1346296103_spaceship}", "left", '94px', { fromValue: '77px'}], position: 1665, duration: 1145 },
            { id: "eid12", tween: [ "style", "${__1346296103_spaceship}", "left", '33px', { fromValue: '94px'}], position: 2810, duration: 690 },
            { id: "eid15", tween: [ "style", "${__1346296103_spaceship}", "left", '66.11px', { fromValue: '33px'}], position: 3500, duration: 1330 },
            { id: "eid7", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 545, duration: 1120 },
            { id: "eid11", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 1665, duration: 1145 },
            { id: "eid14", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 2810, duration: 690 },
            { id: "eid17", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '-1deg', { fromValue: '10deg'}], position: 3500, duration: 1330 },
            { id: "eid18", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '6deg', { fromValue: '-1deg'}], position: 4830, duration: 170 },
            { id: "eid19", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '-10deg', { fromValue: '6deg'}], position: 5000, duration: 500 },
            { id: "eid20", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '6deg', { fromValue: '-10deg'}], position: 5500, duration: 500 },
            { id: "eid2", tween: [ "style", "${__1346296103_spaceship}", "top", '-152px', { fromValue: '-152px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${__1346296103_spaceship}", "top", '123px', { fromValue: '-152px'}], position: 545, duration: 555 },
            { id: "eid4", tween: [ "style", "${__1346296103_spaceship}", "top", '88px', { fromValue: '123px'}], position: 1100, duration: 565 },
            { id: "eid10", tween: [ "style", "${__1346296103_spaceship}", "top", '120px', { fromValue: '88px'}], position: 1665, duration: 1145 },
            { id: "eid13", tween: [ "style", "${__1346296103_spaceship}", "top", '124px', { fromValue: '120px'}], position: 2810, duration: 690 },
            { id: "eid16", tween: [ "style", "${__1346296103_spaceship}", "top", '123px', { fromValue: '124px'}], position: 3500, duration: 1330 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-189631950");
