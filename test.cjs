const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const js=html.match(/<script>([\s\S]*)<\/script>/)[1];
function inp(v){const e=el();e.value=v==null?'':String(v);return e}
function el(){const e={innerHTML:'',textContent:'',value:'3',className:'',style:{},dataset:{},
  onclick:null,onchange:null,oninput:null,
  querySelector(s){ if(s==='.nf')return e._nf||(e._nf=el());
    if(s==='button')return e._btn||(e._btn=el()); return el();},
  querySelectorAll(s){ if(s==='input')return e._inputs||(e._inputs=[inp(''),inp(''),inp(''),inp('')]); return [];},
  appendChild(){}};return e;}
const registry={};
global.document={
  querySelector(s){ if(!registry[s])registry[s]=el(); return registry[s];},
  querySelectorAll(s){ return [];},
  createElement(){const e=el();e._inputs=[inp(''),inp(''),inp(''),inp('')];return e;},
};
global.window={scrollTo(){}};
global.matchMedia=()=>({matches:false});
eval(js+';globalThis.__api={buildProfile,shallow,pile,corrFactors,factors,nqBerezantsev};');
const {buildProfile,shallow,pile,corrFactors}=globalThis.__api;
function setv(id,v){document.querySelector(id).value=String(v)}
function run(mode,L,gwt,settle,geo){
  for(const k in geo)setv(k,geo[k]);
  setv('#ce','1');setv('#cb','65–115');setv('#cs','1');
  setv('#gwt',gwt);setv('#settle',settle);
  const LL=L.map(x=>({...x}));
  const sig=buildProfile(LL,gwt,corrFactors());
  return mode==1?shallow(LL,sig,gwt,settle):pile(LL,sig,gwt);
}
const L1=[
 {z:0.75,t:'sand',nf:8},{z:1.5,t:'sand',nf:10},{z:2.25,t:'sand',nf:15},{z:3,t:'sand',nf:15},
 {z:3.75,t:'sand',nf:18},{z:4.5,t:'sand',nf:20},{z:5.25,t:'sand',nf:16},{z:6,t:'sand',nf:25}];
let out=run(1,L1,3,40,{'#shape':'rect','#B':'3','#L':'5','#Df':'1.5'});
console.log('=== SHALLOW ===');
console.log((out.match(/class="big">[^<]*/g)||[]).join(' | '));
console.log((out.match(/<b>[^<]*<\/b>/g)||[]).slice(0,14).join(' | '));
const L2=[{z:0,t:'sand',nf:6},{z:3,t:'clay',nf:2},{z:9,t:'sand',nf:38}];
out=run(2,L2,3,40,{'#D':'0.4','#PL':'14'});
console.log('=== PILE ===');
console.log((out.match(/class="big">[^<]*/g)||[]).join(' | '));
console.log((out.match(/<b>[^<]*<\/b>/g)||[]).slice(0,10).join(' | '));
