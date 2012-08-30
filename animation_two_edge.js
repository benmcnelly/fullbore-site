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
            id:'Spike_Ballistic_Muzzle_Flash',
            type:'image',
            rect:['64px','-81px','300px','300px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"Spike_Ballistic_Muzzle_Flash.png",'0px','0px'],
            transform:[[],['-100deg'],[],['0.717','0.427']]
         },
         {
            id:'boat',
            type:'image',
            rect:['330px','-55px','443px','360px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"boat.png",'0px','0px'],
            transform:[[],[],[],['0.356','0.356']]
         },
         {
            id:'_1346296103_spaceship',
            type:'image',
            rect:['438px','33px','128px','128px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"1346296103_spaceship.png",'0px','0px'],
            transform:[[],[],[],['0.563','0.563']]
         },
         {
            id:'Text',
            type:'text',
            rect:['191px','143px','551px','74px','auto','auto'],
            opacity:0,
            text:"Don't try to reach new people with old  methods.<br>Gives us a chance to surprise you!",
            align:"center",
            font:['Times New Roman, Times, serif',[1.56,"em"],"rgba(255,255,255,1.00)","300","none","italic"],
            textShadow:["rgba(0,0,0,0.65)",2,0,5]
         },
         {
            id:'Spike_Ballistic_Muzzle_Flash2',
            type:'image',
            rect:['571px','-93px','300px','300px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Spike_Ballistic_Muzzle_Flash2.png",'0px','0px'],
            transform:[[],['88deg'],['0deg'],['0.525','0.125']]
         },
         {
            id:'Text2',
            type:'text',
            rect:['147px','92px','auto','auto','auto','auto'],
            cursor:['pointer'],
            text:"Find out more about how we do what we do...",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',18,"rgba(192,246,255,1.00)","normal","underline","italic"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['329px','47px','auto','auto','auto','auto'],
            text:"?",
            align:"left",
            font:['Georgia, \'Times New Roman\', Times, serif',116,"rgba(192,246,255,1)","normal","none","italic"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Spike_Ballistic_Muzzle_Flash}": [
            ["style", "top", '-80.97px'],
            ["transform", "scaleY", '0.42667'],
            ["transform", "rotateZ", '-100deg'],
            ["transform", "scaleX", '0.71653'],
            ["style", "opacity", '0'],
            ["style", "left", '63.87px'],
            ["transform", "skewX", '0deg']
         ],
         "${_Text3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '329px'],
            ["style", "font-size", '101px'],
            ["style", "top", '69px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '1']
         ],
         "${_Text2}": [
            ["style", "top", '92px'],
            ["style", "text-decoration", 'underline'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(192,246,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '147px'],
            ["style", "font-size", '18px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '0px'],
            ["style", "left", '191px'],
            ["style", "font-style", 'italic'],
            ["style", "text-decoration", 'none'],
            ["subproperty", "textShadow.blur", '5px'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '300'],
            ["style", "word-spacing", '0em'],
            ["style", "opacity", '0'],
            ["style", "font-size", '1.56em'],
            ["style", "top", '143px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '74px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "width", '551px'],
            ["style", "font-family", 'Times New Roman, Times, serif']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '750px'],
            ["style", "height", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${__1346296103_spaceship}": [
            ["style", "top", '233px'],
            ["transform", "scaleY", '0.5625'],
            ["transform", "rotateZ", '-10deg'],
            ["transform", "scaleX", '0.5625'],
            ["style", "opacity", '1'],
            ["style", "left", '428px']
         ],
         "${_Spike_Ballistic_Muzzle_Flash2}": [
            ["style", "top", '-93.36px'],
            ["transform", "scaleY", '0.12534'],
            ["transform", "rotateZ", '88deg'],
            ["transform", "scaleX", '0.52504'],
            ["style", "opacity", '0'],
            ["style", "left", '571.02px'],
            ["transform", "skewX", '0deg']
         ],
         "${_boat}": [
            ["style", "top", '145px'],
            ["transform", "scaleY", '0.35556'],
            ["transform", "rotateZ", '-10deg'],
            ["transform", "scaleX", '0.35556'],
            ["style", "left", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8500,
         autoPlay: true,
         labels: {
            "stophere": 8500
         },
         timeline: [
            { id: "eid160", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 7863, duration: 637, easing: "easeInQuad" },
            { id: "eid104", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "opacity", '1', { fromValue: '0.000000'}], position: 7540, duration: 13, easing: "easeInQuad" },
            { id: "eid138", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "opacity", '0.94827586206897', { fromValue: '1'}], position: 7553, duration: 52, easing: "easeInQuad" },
            { id: "eid139", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "opacity", '0', { fromValue: '0.9482759833335876'}], position: 7605, duration: 9, easing: "easeInQuad" },
            { id: "eid12", tween: [ "style", "${_boat}", "top", '-55px', { fromValue: '145px'}], position: 0, duration: 420 },
            { id: "eid16", tween: [ "style", "${_boat}", "top", '-41px', { fromValue: '-55px'}], position: 420, duration: 80 },
            { id: "eid21", tween: [ "style", "${_boat}", "top", '-32.12px', { fromValue: '-41px'}], position: 500, duration: 250 },
            { id: "eid171", tween: [ "style", "${_Text3}", "font-size", '101px', { fromValue: '101px'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid170", tween: [ "style", "${_Text3}", "font-size", '0px', { fromValue: '101px'}], position: 683, duration: 0, easing: "easeInQuad" },
            { id: "eid115", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "skewX", '-3.34deg', { fromValue: '0deg'}], position: 7540, duration: 36, easing: "easeInQuad" },
            { id: "eid111", tween: [ "style", "${__1346296103_spaceship}", "opacity", '0.97413793103448', { fromValue: '1'}], position: 7540, duration: 13, easing: "easeInQuad" },
            { id: "eid112", tween: [ "style", "${__1346296103_spaceship}", "opacity", '0', { fromValue: '0.9741380214691162'}], position: 7553, duration: 8, easing: "easeInQuad" },
            { id: "eid85", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "left", '92.87px', { fromValue: '63.87px'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid89", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "left", '497.72px', { fromValue: '92.87px'}], position: 7316, duration: 260, easing: "easeInQuad" },
            { id: "eid114", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "left", '556.83px', { fromValue: '497.72px'}], position: 7576, duration: 18, easing: "easeInQuad" },
            { id: "eid125", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "left", '565.56px', { fromValue: '556.83px'}], position: 7594, duration: 126, easing: "easeInQuad" },
            { id: "eid106", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleY", '0.10512', { fromValue: '0.12534'}], position: 7540, duration: 13, easing: "easeInQuad" },
            { id: "eid108", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleY", '-0.15789', { fromValue: '0.10512'}], position: 7553, duration: 8, easing: "easeInQuad" },
            { id: "eid127", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleY", '-0.2978', { fromValue: '-0.15789'}], position: 7561, duration: 15, easing: "easeInQuad" },
            { id: "eid130", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleY", '-0.15789', { fromValue: '-0.2978'}], position: 7576, duration: 18, easing: "easeInQuad" },
            { id: "eid133", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleY", '-0.01798', { fromValue: '-0.15789'}], position: 7594, duration: 11, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${__1346296103_spaceship}", "scaleY", '0.40689', { fromValue: '0.5625'}], position: 7000, duration: 82, easing: "easeInQuad" },
            { id: "eid63", tween: [ "transform", "${__1346296103_spaceship}", "scaleY", '0.5625', { fromValue: '0.40689'}], position: 7082, duration: 68, easing: "easeInQuad" },
            { id: "eid56", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 4059, duration: 756, easing: "easeInQuad" },
            { id: "eid109", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "left", '563.02px', { fromValue: '571.02px'}], position: 7540, duration: 21, easing: "easeInQuad" },
            { id: "eid128", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "left", '538.02px', { fromValue: '563.02px'}], position: 7561, duration: 15, easing: "easeInQuad" },
            { id: "eid131", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "left", '550.98px', { fromValue: '538.02px'}], position: 7576, duration: 18, easing: "easeInQuad" },
            { id: "eid105", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleX", '0.71866', { fromValue: '0.52504'}], position: 7540, duration: 13, easing: "easeInQuad" },
            { id: "eid107", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash2}", "scaleX", '1.01513', { fromValue: '0.71866'}], position: 7553, duration: 8, easing: "easeInQuad" },
            { id: "eid19", tween: [ "transform", "${_boat}", "rotateZ", '6deg', { fromValue: '-10deg'}], position: 500, duration: 250, easing: "easeInOutSine" },
            { id: "eid26", tween: [ "transform", "${_boat}", "rotateZ", '9deg', { fromValue: '6deg'}], position: 750, duration: 195, easing: "easeInOutSine" },
            { id: "eid28", tween: [ "transform", "${_boat}", "rotateZ", '-42deg', { fromValue: '9deg'}], position: 945, duration: 305, easing: "easeInOutSine" },
            { id: "eid31", tween: [ "transform", "${_boat}", "rotateZ", '1deg', { fromValue: '-42deg'}], position: 1250, duration: 205, easing: "easeInOutSine" },
            { id: "eid36", tween: [ "transform", "${_boat}", "rotateZ", '-8deg', { fromValue: '1deg'}], position: 1455, duration: 175, easing: "easeInOutSine" },
            { id: "eid83", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleY", '0.75957', { fromValue: '0.42667'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid88", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleY", '0.61934', { fromValue: '0.75957'}], position: 7316, duration: 260, easing: "easeInQuad" },
            { id: "eid117", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleY", '0.35012', { fromValue: '0.61934'}], position: 7576, duration: 9, easing: "easeInQuad" },
            { id: "eid119", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleY", '0.15789', { fromValue: '0.35012'}], position: 7585, duration: 9, easing: "easeInQuad" },
            { id: "eid82", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleX", '0.68491', { fromValue: '0.71653'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid87", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleX", '0.59472', { fromValue: '0.68491'}], position: 7316, duration: 260, easing: "easeInQuad" },
            { id: "eid116", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleX", '0.59453', { fromValue: '0.59472'}], position: 7576, duration: 9, easing: "easeInQuad" },
            { id: "eid118", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleX", '0.73134', { fromValue: '0.59453'}], position: 7585, duration: 9, easing: "easeInQuad" },
            { id: "eid124", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "scaleX", '0.17518', { fromValue: '0.73134'}], position: 7594, duration: 126, easing: "easeInQuad" },
            { id: "eid86", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "top", '-80.97px', { fromValue: '-80.97px'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid90", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "top", '-91.96px', { fromValue: '-80.97px'}], position: 7316, duration: 260, easing: "easeInQuad" },
            { id: "eid113", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "top", '-88.2px', { fromValue: '-91.96px'}], position: 7576, duration: 18, easing: "easeInQuad" },
            { id: "eid126", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "top", '-91.77px', { fromValue: '-88.2px'}], position: 7594, duration: 126, easing: "easeInQuad" },
            { id: "eid10", tween: [ "style", "${__1346296103_spaceship}", "top", '33px', { fromValue: '233px'}], position: 0, duration: 420, easing: "easeInOutSine" },
            { id: "eid14", tween: [ "style", "${__1346296103_spaceship}", "top", '54px', { fromValue: '33px'}], position: 420, duration: 80, easing: "easeInOutSine" },
            { id: "eid23", tween: [ "style", "${__1346296103_spaceship}", "top", '55px', { fromValue: '54px'}], position: 500, duration: 250, easing: "easeInOutSine" },
            { id: "eid30", tween: [ "style", "${__1346296103_spaceship}", "top", '92px', { fromValue: '55px'}], position: 750, duration: 500, easing: "easeInOutSine" },
            { id: "eid34", tween: [ "style", "${__1346296103_spaceship}", "top", '58.57px', { fromValue: '92px'}], position: 1250, duration: 205, easing: "easeInOutSine" },
            { id: "eid38", tween: [ "style", "${__1346296103_spaceship}", "top", '66.57px', { fromValue: '58.57px'}], position: 1455, duration: 175, easing: "easeInOutSine" },
            { id: "eid42", tween: [ "style", "${__1346296103_spaceship}", "top", '76.55px', { fromValue: '66.57px'}], position: 1630, duration: 70, easing: "easeInSine" },
            { id: "eid44", tween: [ "style", "${__1346296103_spaceship}", "top", '77.22px', { fromValue: '76.55px'}], position: 1700, duration: 300 },
            { id: "eid46", tween: [ "style", "${__1346296103_spaceship}", "top", '76.42px', { fromValue: '77.22px'}], position: 2000, duration: 250 },
            { id: "eid48", tween: [ "style", "${__1346296103_spaceship}", "top", '60.83px', { fromValue: '76.42px'}], position: 2250, duration: 200 },
            { id: "eid50", tween: [ "style", "${__1346296103_spaceship}", "top", '65.57px', { fromValue: '60.83px'}], position: 2450, duration: 180, easing: "easeOutSine" },
            { id: "eid62", tween: [ "style", "${__1346296103_spaceship}", "top", '72.28px', { fromValue: '65.57px'}], position: 7000, duration: 82, easing: "easeInQuad" },
            { id: "eid65", tween: [ "style", "${__1346296103_spaceship}", "top", '9.76px', { fromValue: '72.28px'}], position: 7082, duration: 68, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${__1346296103_spaceship}", "top", '-7.25px', { fromValue: '9.76px'}], position: 7151, duration: 115, easing: "easeInQuad" },
            { id: "eid75", tween: [ "style", "${__1346296103_spaceship}", "top", '-6.25px', { fromValue: '-7.25px'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid11", tween: [ "style", "${_boat}", "left", '318px', { fromValue: '320px'}], position: 0, duration: 420, easing: "easeInOutSine" },
            { id: "eid15", tween: [ "style", "${_boat}", "left", '319px', { fromValue: '318px'}], position: 420, duration: 80, easing: "easeInOutSine" },
            { id: "eid20", tween: [ "style", "${_boat}", "left", '315.52px', { fromValue: '319px'}], position: 500, duration: 250, easing: "easeInOutSine" },
            { id: "eid39", tween: [ "style", "${_boat}", "left", '-109.48px', { fromValue: '315.52px'}], position: 750, duration: 4250, easing: "easeInOutSine" },
            { id: "eid162", tween: [ "style", "${_Text3}", "opacity", '0.000000', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid81", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "opacity", '1', { fromValue: '0'}], position: 7266, duration: 29, easing: "easeInQuad" },
            { id: "eid140", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash}", "opacity", '0', { fromValue: '1'}], position: 7540, duration: 74, easing: "easeInQuad" },
            { id: "eid110", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "top", '-92px', { fromValue: '-93.36px'}], position: 7540, duration: 21, easing: "easeInQuad" },
            { id: "eid129", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "top", '-92.26px', { fromValue: '-92px'}], position: 7561, duration: 15, easing: "easeInQuad" },
            { id: "eid132", tween: [ "style", "${_Spike_Ballistic_Muzzle_Flash2}", "top", '-92px', { fromValue: '-92.26px'}], position: 7576, duration: 18, easing: "easeInQuad" },
            { id: "eid164", tween: [ "style", "${_Text3}", "top", '268px', { fromValue: '69px'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid84", tween: [ "transform", "${_Spike_Ballistic_Muzzle_Flash}", "rotateZ", '-96deg', { fromValue: '-100deg'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid22", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 500, duration: 250, easing: "easeInOutSine" },
            { id: "eid25", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '31deg', { fromValue: '28deg'}], position: 750, duration: 195, easing: "easeInOutSine" },
            { id: "eid27", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '-20deg', { fromValue: '31deg'}], position: 945, duration: 305, easing: "easeInOutSine" },
            { id: "eid32", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '6deg', { fromValue: '-20deg'}], position: 1250, duration: 205, easing: "easeInOutSine" },
            { id: "eid35", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '-3deg', { fromValue: '6deg'}], position: 1455, duration: 175, easing: "easeInOutSine" },
            { id: "eid57", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '4deg', { fromValue: '-3deg'}], position: 7000, duration: 17, easing: "easeInQuad" },
            { id: "eid58", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '-5deg', { fromValue: '4deg'}], position: 7017, duration: 15, easing: "easeInQuad" },
            { id: "eid59", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '2deg', { fromValue: '-5deg'}], position: 7033, duration: 20, easing: "easeInQuad" },
            { id: "eid66", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '19deg', { fromValue: '2deg'}], position: 7053, duration: 98, easing: "easeInQuad" },
            { id: "eid69", tween: [ "transform", "${__1346296103_spaceship}", "rotateZ", '83deg', { fromValue: '19deg'}], position: 7151, duration: 115, easing: "easeInQuad" },
            { id: "eid9", tween: [ "style", "${__1346296103_spaceship}", "left", '426px', { fromValue: '428px'}], position: 0, duration: 420, easing: "easeInOutSine" },
            { id: "eid13", tween: [ "style", "${__1346296103_spaceship}", "left", '429.7px', { fromValue: '426px'}], position: 420, duration: 80, easing: "easeInOutSine" },
            { id: "eid24", tween: [ "style", "${__1346296103_spaceship}", "left", '436.69px', { fromValue: '429.7px'}], position: 500, duration: 250, easing: "easeInOutSine" },
            { id: "eid29", tween: [ "style", "${__1346296103_spaceship}", "left", '437.68px', { fromValue: '436.69px'}], position: 750, duration: 500, easing: "easeInOutSine" },
            { id: "eid33", tween: [ "style", "${__1346296103_spaceship}", "left", '439.67px', { fromValue: '437.68px'}], position: 1250, duration: 205, easing: "easeInOutSine" },
            { id: "eid37", tween: [ "style", "${__1346296103_spaceship}", "left", '435.17px', { fromValue: '439.67px'}], position: 1455, duration: 175, easing: "easeInOutSine" },
            { id: "eid40", tween: [ "style", "${__1346296103_spaceship}", "left", '418.12px', { fromValue: '435.17px'}], position: 1630, duration: 70, easing: "easeInSine" },
            { id: "eid43", tween: [ "style", "${__1346296103_spaceship}", "left", '375.48px', { fromValue: '418.12px'}], position: 1700, duration: 300 },
            { id: "eid45", tween: [ "style", "${__1346296103_spaceship}", "left", '327.12px', { fromValue: '375.48px'}], position: 2000, duration: 250 },
            { id: "eid47", tween: [ "style", "${__1346296103_spaceship}", "left", '281.4px', { fromValue: '327.12px'}], position: 2250, duration: 200 },
            { id: "eid49", tween: [ "style", "${__1346296103_spaceship}", "left", '261.17px', { fromValue: '281.4px'}], position: 2450, duration: 180 },
            { id: "eid41", tween: [ "style", "${__1346296103_spaceship}", "left", '10.17px', { fromValue: '261.17px'}], position: 2630, duration: 2370, easing: "easeOutSine" },
            { id: "eid61", tween: [ "style", "${__1346296103_spaceship}", "left", '11.11px', { fromValue: '10.17px'}], position: 7000, duration: 82, easing: "easeInQuad" },
            { id: "eid64", tween: [ "style", "${__1346296103_spaceship}", "left", '28.77px', { fromValue: '11.11px'}], position: 7082, duration: 68, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${__1346296103_spaceship}", "left", '197.77px', { fromValue: '28.77px'}], position: 7151, duration: 115, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${__1346296103_spaceship}", "left", '270.88px', { fromValue: '197.4px'}], position: 7266, duration: 50, easing: "easeInQuad" },
            { id: "eid74", tween: [ "style", "${__1346296103_spaceship}", "left", '754.4px', { fromValue: '270.88px'}], position: 7316, duration: 278, easing: "easeInQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-201456471");
