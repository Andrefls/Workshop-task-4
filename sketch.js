// set up let 

let slider1, slider2, slider3, slider4, slider5, slider6, slider7;
let l1, l2, l3, l4, l5, l6, l7, l8;
let checkbox, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6;
let input;
let submitButton;
let feelings;
let greeting;
let listFeelings = [];

// functions

function preload() {
  
  l1 = loadImage ("zoideimg/facezoide.png");
  l2 = loadImage ("zoideimg/eyezoide.png");
  l3 = loadImage ("zoideimg/circleszoide.png");
  l4 = loadImage ("zoideimg/waveszoide.png");
  l5 = loadImage ("zoideimg/carpetzoide.png");
  l6 = loadImage ("zoideimg/spiralzoide.png");
  l7 = loadImage ("zoideimg/stripeszoide.png");
}

function setup() {

  //resize images

  l1.resize (300, 0);
  l2.resize (300, 0);
  l3.resize (300, 0);
  l4.resize (300, 0);
  l5.resize (300,0);
  l6.resize (300,0);
  l7.resize (300, 0);

  // create canvas

  createCanvas(300, 1000);

  // adjust pixel density

  pixelDensity (1);

  // create checkboxes

  checkbox = createCheckbox ('face', true);
  checkbox.position (120, 440);
  checkbox1 = createCheckbox ('eye', true);
  checkbox1.position (20,460);
  checkbox2 = createCheckbox ('circle', true);
  checkbox2.position (120,460);
  checkbox3 = createCheckbox ('waves', true);
  checkbox3.position (240,460);
  checkbox4 = createCheckbox ('carpet', true);
  checkbox4.position (20,480);
  checkbox5 = createCheckbox ('spiral', true);
  checkbox5.position (120,480);
  checkbox6 = createCheckbox ('stripes', true);
  checkbox6.position (240,480);

  //create sliders

  slider1 = createSlider (0, 255);
  slider1.position (20, 540);
  slider1.size (260);
  slider2 = createSlider (0, 255);
  slider2.position (20, 560);
  slider2.size (260);
  slider3 = createSlider (0, 255);
  slider3.position (20, 580);
  slider3.size (260);
  slider4 = createSlider (0, 255);
  slider4.position (20, 600);
  slider4.size (260);
  slider5 = createSlider (0, 255);
  slider5.position (20, 620);
  slider5.size (260);
  slider6 = createSlider (0, 255);
  slider6.position (20, 640);
  slider6.size (260);
  slider7 = createSlider (0, 255);
  slider7.position (20, 660);
  slider7.size (260);

  // input box

  input = createInput();
  input.position (50, 740);
  submitButton = createButton ('submit');

  // put the submit button next to the box

  submitButton.position (input.x + input.width, input.y);
  submitButton.mousePressed(yourFeelings);

  // create a level 2 heading

  greeting = createElement ('h2', 'How do you feel?');
  greeting.style ('color','gray');

  // put the heading above the input box

  greeting.position (input.x, input.y -50);
}

function yourFeelings() {
  feelings = input.value ();
  input.value (''); // reset input value to an empty string)
  listFeelings.push (feelings);
}

// functions

function draw (){
  background (255);

  // synchronise checkbox tick 
  // slider action

  if (checkbox.checked()){
    let val = slider1.value();
    let f = l1;
    tint (255, slider1.value());
    image (f,0,0);
  }
  if (checkbox1.checked()){
    let val = slider2.value();
    let e = l2;
    tint (255, slider2.value());
    image (e,0,0);
  }
  if (checkbox2.checked()){
    let val = slider3.value();
    let c = l3;
    tint (255, slider3.value());
    image (c,0,0);
  }
if (checkbox3.checked()){
  let val = slider4.value();
  let w = l4;
  tint (255, slider4.value());
  image (w,0,0);
}
if (checkbox4.checked()){
  let val = slider5.value();
  let a = l5;
  tint (255, slider5.value());
  image (a,0,0);
}
if (checkbox5.checked()){
  let val = slider6.value();
  let s = l6;
  tint (255, slider6.value());
  image (s,0,0);
}
if (checkbox6.checked()){
  let val = slider7.value();
  let sp = l7;
  tint (255, slider7.value());
  image (sp,0,0);
}
// draw feeling box

for (x=0; x < listFeelings.length; x++){
  text (listFeelings [x], 20, 800 + x * 20);
}

// write intructions for sliders and layers
text('Choose your layers', 95, height - 570);
text('Set Transparency, Then answer the Question', 30, height - 470);
}