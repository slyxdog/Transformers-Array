var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for(var i=0;i<chrs.length;i++){
var w = document.createElement("div");
 
var n = document.createElement("p");

var c = document.createElement("p");

var v = document.createElement("p"); 
var a = document.createElement("h4");
 
var img = document.createElement("img");


n.innerHTML = "Name: "+chrs[i].name;
c.innerHTML = chrs[i].class;
   if (chrs[i].afl == "decepticon"){
c.innerHTML = "Decepticon".toUpperCase();
  } else {
c.innerHTML = "Autobot".toUpperCase();}
a.innerHTML = img;
  if(chrs[i].afl=="decepticon"){
    a.innerHTML = 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png';
  } else {
    a.innerHTML = 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png';
  }
v.innerHTML = chrs[i].vehicle;
  if(chrs[i].vehicle === 'truck'){
    v.style.color = "blue";
  } else if (chrs[i].vehicle === 'tank') {
    v.style.color = "green";
  } else if (chrs[i].vehicle === 'car'){
    v.style.color = "gold";
  } else if(chrs[i].vehicle ==='plane') {
    v.style.color = "white";
  }
  
if (chrs[i].afl== "decepticon") {
  n.classList.add("decepticon","character");
  c.classList.add("decepticon","character");
  v.classList.add("decepticon","character");
  a.classList.add("decepticon","character");
} else{
  n.classList.add("autobot","character");
  c.classList.add("autobot","character");
  v.classList.add("autobot","character");
  a.classList.add("autobot","character");
}
  
document.body.appendChild(n);
document.body.appendChild(c);
document.body.appendChild(v);
document.body.appendChild(a);
document.body.appendChild(img); 
} 

 
  
  


// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white