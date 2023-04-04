(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="148",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yu=0,Oo=1,ju=2,gc=1,Zu=2,Mr=3,_i=0,tn=1,kr=2,$r=3,kn=0,qi=1,zo=2,No=3,Uo=4,Ku=5,Gi=100,Ju=101,Qu=102,ko=103,Bo=104,th=200,eh=201,nh=202,ih=203,_c=204,xc=205,rh=206,sh=207,ah=208,oh=209,lh=210,ch=0,uh=1,hh=2,Fa=3,dh=4,fh=5,ph=6,mh=7,ao=0,gh=1,_h=2,Ln=0,xh=1,vh=2,yh=3,Mh=4,bh=5,vc=300,Ki=301,Ji=302,Oa=303,za=304,Rs=306,Na=1e3,an=1001,Ua=1002,be=1003,Vo=1004,Ws=1005,je=1006,Sh=1007,Cr=1008,xi=1009,wh=1010,Th=1011,yc=1012,Eh=1013,ci=1014,ui=1015,Lr=1016,Ah=1017,Ch=1018,$i=1020,Lh=1021,Ph=1022,on=1023,Dh=1024,Rh=1025,di=1026,Qi=1027,Ih=1028,Fh=1029,Oh=1030,zh=1031,Nh=1033,Hs=33776,Xs=33777,qs=33778,$s=33779,Go=35840,Wo=35841,Ho=35842,Xo=35843,Uh=36196,qo=37492,$o=37496,Yo=37808,jo=37809,Zo=37810,Ko=37811,Jo=37812,Qo=37813,tl=37814,el=37815,nl=37816,il=37817,rl=37818,sl=37819,al=37820,ol=37821,ll=36492,vi=3e3,Vt=3001,kh=3200,Bh=3201,Mc=0,Vh=1,cn="srgb",Pr="srgb-linear",Ys=7680,Gh=519,cl=35044,ul="300 es",ka=1035;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,hl=180/Math.PI;function Br(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[o&255]+pe[o>>8&255]+pe[o>>16&255]+pe[o>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function we(o,t,e){return Math.max(t,Math.min(e,o))}function Wh(o,t){return(o%t+t)%t}function Zs(o,t,e){return(1-e)*o+e*t}function dl(o){return(o&o-1)===0&&o!==0}function Ba(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Yr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ie(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],_=n[8],f=i[0],p=i[3],g=i[6],M=i[1],y=i[4],b=i[7],v=i[2],A=i[5],L=i[8];return r[0]=a*f+s*M+l*v,r[3]=a*p+s*y+l*A,r[6]=a*g+s*b+l*L,r[1]=c*f+u*M+d*v,r[4]=c*p+u*y+d*A,r[7]=c*g+u*b+d*L,r[2]=h*f+m*M+_*v,r[5]=h*p+m*y+_*A,r[8]=h*g+m*b+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=u*a-s*c,h=s*l-u*r,m=c*r-a*l,_=e*d+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return t[0]=d*f,t[1]=(i*c-u*n)*f,t[2]=(s*n-i*a)*f,t[3]=h*f,t[4]=(u*e-i*l)*f,t[5]=(i*r-s*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(a*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new ke;function bc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function bs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Js={[cn]:{[Pr]:fi},[Pr]:{[cn]:gs}},ye={legacyMode:!0,get workingColorSpace(){return Pr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Js[t]&&Js[t][e]!==void 0){const n=Js[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ie={r:0,g:0,b:0},nn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Qs(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Zr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=Wh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qs(a,r,t+1/3),this.g=Qs(a,r,t),this.b=Qs(a,r,t-1/3)}return ye.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ye.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ye.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ye.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=cn){const n=Sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ye.fromWorkingColorSpace(Zr(this,ie),t),we(ie.r*255,0,255)<<16^we(ie.g*255,0,255)<<8^we(ie.b*255,0,255)<<0}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(Zr(this,ie),e);const n=ie.r,i=ie.g,r=ie.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=u<=.5?d/(a+s):d/(2-a-s),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(Zr(this,ie),e),t.r=ie.r,t.g=ie.g,t.b=ie.b,t}getStyle(t=cn){return ye.fromWorkingColorSpace(Zr(this,ie),t),t!==cn?`color(${t} ${ie.r} ${ie.g} ${ie.b})`:`rgb(${ie.r*255|0},${ie.g*255|0},${ie.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(jr);const n=Zs(nn.h,jr.h,e),i=Zs(nn.s,jr.s,e),r=Zs(nn.l,jr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ft.NAMES=Sc;let Ai;class wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=bs("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Tc{constructor(t=null){this.isSource=!0,this.uuid=Br(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(ta(i[a].image)):r.push(ta(i[a]))}else r=ta(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ta(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;class Be extends Si{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=an,i=an,r=je,a=Cr,s=on,l=xi,c=Be.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Br(),this.name="",this.source=new Tc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=vc;Be.DEFAULT_ANISOTROPY=1;class Wt{constructor(t=0,e=0,n=0,i=1){Wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],f=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(m+1)/2,v=(g+1)/2,A=(u+h)/4,L=(d+f)/4,x=(_+p)/4;return y>b&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=L/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=L/r,i=x/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-f)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yi extends Si{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ec extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xh extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],m=r[a+1],_=r[a+2],f=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(s===1){t[e+0]=h,t[e+1]=m,t[e+2]=_,t[e+3]=f;return}if(d!==f||l!==h||c!==m||u!==_){let p=1-s;const g=l*h+c*m+u*_+d*f,M=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const v=Math.sqrt(y),A=Math.atan2(v,g*M);p=Math.sin(p*A)/v,s=Math.sin(s*A)/v}const b=s*M;if(l=l*p+h*b,c=c*p+m*b,u=u*p+_*b,d=d*p+f*b,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return t[e]=s*_+u*d+l*m-c*h,t[e+1]=l*_+u*h+c*d-s*m,t[e+2]=c*_+u*m+s*h-l*d,t[e+3]=u*_-s*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),d=s(r/2),h=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,d=l*i+r*n-a*e,h=-r*e-a*n-s*i;return this.x=c*l+h*-r+u*-s-d*-a,this.y=u*l+h*-a+d*-r-c*-s,this.z=d*l+h*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new F,fl=new Mi;class Vr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],d=t[l+1],h=t[l+2];u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>a&&(a=d),h>s&&(s=h)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),d=t.getY(l),h=t.getZ(l);u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>a&&(a=d),h>s&&(s=h)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)ti.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(ti)}else n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox),na.applyMatrix4(t.matrixWorld),this.union(na);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Kr.subVectors(this.max,hr),Ci.subVectors(t.a,hr),Li.subVectors(t.b,hr),Pi.subVectors(t.c,hr),Rn.subVectors(Li,Ci),In.subVectors(Pi,Li),ei.subVectors(Ci,Pi);let e=[0,-Rn.z,Rn.y,0,-In.z,In.y,0,-ei.z,ei.y,Rn.z,0,-Rn.x,In.z,0,-In.x,ei.z,0,-ei.x,-Rn.y,Rn.x,0,-In.y,In.x,0,-ei.y,ei.x,0];return!ia(e,Ci,Li,Pi,Kr)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Ci,Li,Pi,Kr))?!1:(Jr.crossVectors(Rn,In),e=[Jr.x,Jr.y,Jr.z],ia(e,Ci,Li,Pi,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ti.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new F,new F,new F,new F,new F,new F,new F,new F],ti=new F,na=new Vr,Ci=new F,Li=new F,Pi=new F,Rn=new F,In=new F,ei=new F,hr=new F,Kr=new F,Jr=new F,ni=new F;function ia(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){ni.fromArray(o,r);const s=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const qh=new Vr,dr=new F,ra=new F;class oo{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(ra)),this.expandByPoint(dr.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new F,sa=new F,Qr=new F,Fn=new F,aa=new F,ts=new F,oa=new F;class $h{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.direction).multiplyScalar(e).add(this.origin),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sa.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qr),s=Fn.dot(this.direction),l=-Fn.dot(Qr),c=Fn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,_;if(u>0)if(d=a*l-s,h=a*s-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const f=1/u;d*=f,h*=f,m=d*(d+a*h+2*s)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+s)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+s)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Qr).multiplyScalar(h).add(sa),m}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(s=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(s=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){aa.subVectors(e,t),ts.subVectors(n,t),oa.crossVectors(aa,ts);let a=this.direction.dot(oa),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const l=s*this.direction.dot(ts.crossVectors(Fn,ts));if(l<0)return null;const c=s*this.direction.dot(aa.cross(Fn));if(c<0||l+c>a)return null;const u=-s*Fn.dot(oa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,d,h,m,_,f,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=s,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=m,g[7]=_,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,m=a*d,_=s*u,f=s*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=h-f*c,e[9]=-s*l,e[2]=f-h*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*d,_=c*u,f=c*d;e[0]=h+f*s,e[4]=_*s-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-s,e[2]=m*s-_,e[6]=f+h*s,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*d,_=c*u,f=c*d;e[0]=h-f*s,e[4]=-a*d,e[8]=_+m*s,e[1]=m+_*s,e[5]=a*u,e[9]=f-h*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*d,_=s*u,f=s*d;e[0]=l*u,e[4]=_*c-m,e[8]=h*c+f,e[1]=l*d,e[5]=f*c+h,e[9]=m*c-_,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,_=s*l,f=s*c;e[0]=l*u,e[4]=f-h*d,e[8]=_*d+m,e[1]=d,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*d+_,e[10]=h-f*d}else if(t.order==="XZY"){const h=a*l,m=a*c,_=s*l,f=s*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+f,e[5]=a*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=s*u,e[10]=f*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yh,t,jh)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),On.crossVectors(n,Fe),On.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),On.crossVectors(n,Fe)),On.normalize(),es.crossVectors(Fe,On),i[0]=On.x,i[4]=es.x,i[8]=Fe.x,i[1]=On.y,i[5]=es.y,i[9]=Fe.y,i[2]=On.z,i[6]=es.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],_=n[2],f=n[6],p=n[10],g=n[14],M=n[3],y=n[7],b=n[11],v=n[15],A=i[0],L=i[4],x=i[8],w=i[12],P=i[1],U=i[5],Z=i[9],I=i[13],R=i[2],k=i[6],j=i[10],Y=i[14],V=i[3],tt=i[7],K=i[11],B=i[15];return r[0]=a*A+s*P+l*R+c*V,r[4]=a*L+s*U+l*k+c*tt,r[8]=a*x+s*Z+l*j+c*K,r[12]=a*w+s*I+l*Y+c*B,r[1]=u*A+d*P+h*R+m*V,r[5]=u*L+d*U+h*k+m*tt,r[9]=u*x+d*Z+h*j+m*K,r[13]=u*w+d*I+h*Y+m*B,r[2]=_*A+f*P+p*R+g*V,r[6]=_*L+f*U+p*k+g*tt,r[10]=_*x+f*Z+p*j+g*K,r[14]=_*w+f*I+p*Y+g*B,r[3]=M*A+y*P+b*R+v*V,r[7]=M*L+y*U+b*k+v*tt,r[11]=M*x+y*Z+b*j+v*K,r[15]=M*w+y*I+b*Y+v*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],_=t[3],f=t[7],p=t[11],g=t[15];return _*(+r*l*d-i*c*d-r*s*h+n*c*h+i*s*m-n*l*m)+f*(+e*l*m-e*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+p*(+e*c*d-e*s*m-r*a*d+n*a*m+r*s*u-n*c*u)+g*(-i*s*u-e*l*d+e*s*h+i*a*d-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],_=t[12],f=t[13],p=t[14],g=t[15],M=d*p*c-f*h*c+f*l*m-s*p*m-d*l*g+s*h*g,y=_*h*c-u*p*c-_*l*m+a*p*m+u*l*g-a*h*g,b=u*f*c-_*d*c+_*s*m-a*f*m-u*s*g+a*d*g,v=_*d*l-u*f*l-_*s*h+a*f*h+u*s*p-a*d*p,A=e*M+n*y+i*b+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=M*L,t[1]=(f*h*r-d*p*r-f*i*m+n*p*m+d*i*g-n*h*g)*L,t[2]=(s*p*r-f*l*r+f*i*c-n*p*c-s*i*g+n*l*g)*L,t[3]=(d*l*r-s*h*r-d*i*c+n*h*c+s*i*m-n*l*m)*L,t[4]=y*L,t[5]=(u*p*r-_*h*r+_*i*m-e*p*m-u*i*g+e*h*g)*L,t[6]=(_*l*r-a*p*r-_*i*c+e*p*c+a*i*g-e*l*g)*L,t[7]=(a*h*r-u*l*r+u*i*c-e*h*c-a*i*m+e*l*m)*L,t[8]=b*L,t[9]=(_*d*r-u*f*r-_*n*m+e*f*m+u*n*g-e*d*g)*L,t[10]=(a*f*r-_*s*r+_*n*c-e*f*c-a*n*g+e*s*g)*L,t[11]=(u*s*r-a*d*r-u*n*c+e*d*c+a*n*m-e*s*m)*L,t[12]=v*L,t[13]=(u*f*i-_*d*i+_*n*h-e*f*h-u*n*p+e*d*p)*L,t[14]=(_*s*i-a*f*i-_*n*l+e*f*l+a*n*p-e*s*p)*L,t[15]=(a*d*i-u*s*i+u*n*l-e*d*l-a*n*h+e*s*h)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,d=s+s,h=r*c,m=r*u,_=r*d,f=a*u,p=a*d,g=s*d,M=l*c,y=l*u,b=l*d,v=n.x,A=n.y,L=n.z;return i[0]=(1-(f+g))*v,i[1]=(m+b)*v,i[2]=(_-y)*v,i[3]=0,i[4]=(m-b)*A,i[5]=(1-(h+g))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+y)*L,i[9]=(p-M)*L,i[10]=(1-(h+f))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),s=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const c=1/r,u=1/a,d=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),d=(e+t)*l,h=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new F,rn=new te,Yh=new F(0,0,0),jh=new F(1,1,1),On=new F,es=new F,Fe=new F,pl=new te,ml=new Mi;class Gr{constructor(t=0,e=0,n=0,i=Gr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(we(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Gr.DefaultOrder="XYZ";Gr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zh=0;const gl=new F,Ri=new Mi,Sn=new te,ns=new F,fr=new F,Kh=new F,Jh=new Mi,_l=new F(1,0,0),xl=new F(0,1,0),vl=new F(0,0,1),Qh={type:"added"},yl={type:"removed"};class Ee extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DefaultUp.clone();const t=new F,e=new Gr,n=new Mi,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new ke}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ee.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ee.DefaultMatrixWorldAutoUpdate,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(fr,ns,this.up):Sn.lookAt(ns,fr,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(yl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),_=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DefaultUp=new F(0,1,0);Ee.DefaultMatrixAutoUpdate=!0;Ee.DefaultMatrixWorldAutoUpdate=!0;const sn=new F,wn=new F,la=new F,Tn=new F,Ii=new F,Fi=new F,Ml=new F,ca=new F,ua=new F,ha=new F;class Cn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),wn.subVectors(n,e),la.subVectors(t,e);const a=sn.dot(sn),s=sn.dot(wn),l=sn.dot(la),c=wn.dot(wn),u=wn.dot(la),d=a*c-s*s;if(d===0)return r.set(-2,-1,-1);const h=1/d,m=(c*l-s*u)*h,_=(a*u-s*l)*h;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Tn),l.set(0,0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(s,Tn.z),l}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),wn.subVectors(t,e),sn.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),sn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Cn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Ii.subVectors(i,n),Fi.subVectors(r,n),ca.subVectors(t,n);const l=Ii.dot(ca),c=Fi.dot(ca);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,i);const u=Ii.dot(ua),d=Fi.dot(ua);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ii,a);ha.subVectors(t,r);const m=Ii.dot(ha),_=Fi.dot(ha);if(_>=0&&m<=_)return e.copy(r);const f=m*c-l*_;if(f<=0&&c>=0&&_<=0)return s=c/(c-_),e.copy(n).addScaledVector(Fi,s);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return Ml.subVectors(r,i),s=(d-u)/(d-u+(m-_)),e.copy(i).addScaledVector(Ml,s);const g=1/(p+f+h);return a=f*g,s=h*g,e.copy(n).addScaledVector(Ii,a).addScaledVector(Fi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let td=0;class Wr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=qi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cc extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new F,is=new bt;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lc extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pc extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class mn extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ed=0;const qe=new te,da=new Ee,Oi=new F,Oe=new Vr,pr=new Vr,ue=new F;class $n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bc(t)?Pc:Lc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];pr.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(Oe.min,pr.min),Oe.expandByPoint(ue),ue.addVectors(Oe.max,pr.max),Oe.expandByPoint(ue)):(Oe.expandByPoint(pr.min),Oe.expandByPoint(pr.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ue.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ue));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ue.fromBufferAttribute(s,c),l&&(Oi.fromBufferAttribute(t,c),ue.add(Oi)),i=Math.max(i,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<s;P++)c[P]=new F,u[P]=new F;const d=new F,h=new F,m=new F,_=new bt,f=new bt,p=new bt,g=new F,M=new F;function y(P,U,Z){d.fromArray(i,P*3),h.fromArray(i,U*3),m.fromArray(i,Z*3),_.fromArray(a,P*2),f.fromArray(a,U*2),p.fromArray(a,Z*2),h.sub(d),m.sub(d),f.sub(_),p.sub(_);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(I),M.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),c[P].add(g),c[U].add(g),c[Z].add(g),u[P].add(M),u[U].add(M),u[Z].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,U=b.length;P<U;++P){const Z=b[P],I=Z.start,R=Z.count;for(let k=I,j=I+R;k<j;k+=3)y(n[k+0],n[k+1],n[k+2])}const v=new F,A=new F,L=new F,x=new F;function w(P){L.fromArray(r,P*3),x.copy(L);const U=c[P];v.copy(U),v.sub(L.multiplyScalar(L.dot(U))).normalize(),A.crossVectors(x,U);const I=A.dot(u[P])<0?-1:1;l[P*4]=v.x,l[P*4+1]=v.y,l[P*4+2]=v.z,l[P*4+3]=I}for(let P=0,U=b.length;P<U;++P){const Z=b[P],I=Z.start,R=Z.count;for(let k=I,j=I+R;k<j;k+=3)w(n[k+0]),w(n[k+1]),w(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new F,r=new F,a=new F,s=new F,l=new F,c=new F,u=new F,d=new F;if(t)for(let h=0,m=t.count;h<m;h+=3){const _=t.getX(h+0),f=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,f),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),s.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,d=s.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let f=0,p=l.length;f<p;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*u;for(let g=0;g<u;g++)h[_++]=c[m++]}return new pn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $n,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new te,zi=new $h,fa=new oo,mr=new F,gr=new F,_r=new F,pa=new F,rs=new F,ss=new bt,as=new bt,os=new bt,ma=new F,ls=new F;class dn extends Ee{constructor(t=new $n,e=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const s=this.morphTargetInfluences;if(r&&s){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],d=r[l];u!==0&&(pa.fromBufferAttribute(d,t),a?rs.addScaledVector(pa,u):rs.addScaledVector(pa.sub(e),u))}e.add(rs)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),t.ray.intersectsSphere(fa)===!1)||(bl.copy(r).invert(),zi.copy(t.ray).applyMatrix4(bl),n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const f=d[m],p=i[f.materialIndex],g=Math.max(f.start,h.start),M=Math.min(s.count,Math.min(f.start+f.count,h.start+h.count));for(let y=g,b=M;y<b;y+=3){const v=s.getX(y),A=s.getX(y+1),L=s.getX(y+2);a=cs(this,p,t,zi,c,u,v,A,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(s.count,h.start+h.count);for(let f=m,p=_;f<p;f+=3){const g=s.getX(f),M=s.getX(f+1),y=s.getX(f+2);a=cs(this,i,t,zi,c,u,g,M,y),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const f=d[m],p=i[f.materialIndex],g=Math.max(f.start,h.start),M=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let y=g,b=M;y<b;y+=3){const v=y,A=y+1,L=y+2;a=cs(this,p,t,zi,c,u,v,A,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let f=m,p=_;f<p;f+=3){const g=f,M=f+1,y=f+2;a=cs(this,i,t,zi,c,u,g,M,y),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}}function nd(o,t,e,n,i,r,a,s){let l;if(t.side===tn?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side===_i,s),l===null)return null;ls.copy(s),ls.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(ls);return c<e.near||c>e.far?null:{distance:c,point:ls.clone(),object:o}}function cs(o,t,e,n,i,r,a,s,l){o.getVertexPosition(a,mr),o.getVertexPosition(s,gr),o.getVertexPosition(l,_r);const c=nd(o,t,e,n,mr,gr,_r,ma);if(c){i&&(ss.fromBufferAttribute(i,a),as.fromBufferAttribute(i,s),os.fromBufferAttribute(i,l),c.uv=Cn.getUV(ma,mr,gr,_r,ss,as,os,new bt)),r&&(ss.fromBufferAttribute(r,a),as.fromBufferAttribute(r,s),os.fromBufferAttribute(r,l),c.uv2=Cn.getUV(ma,mr,gr,_r,ss,as,os,new bt));const u={a,b:s,c:l,normal:new F,materialIndex:0};Cn.getNormal(mr,gr,_r,u.normal),c.face=u}return c}class Hr extends $n{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(d,2));function _(f,p,g,M,y,b,v,A,L,x,w){const P=b/L,U=v/x,Z=b/2,I=v/2,R=A/2,k=L+1,j=x+1;let Y=0,V=0;const tt=new F;for(let K=0;K<j;K++){const B=K*U-I;for(let G=0;G<k;G++){const Q=G*P-Z;tt[f]=Q*M,tt[p]=B*y,tt[g]=R,c.push(tt.x,tt.y,tt.z),tt[f]=0,tt[p]=0,tt[g]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(G/L),d.push(1-K/x),Y+=1}}for(let K=0;K<x;K++)for(let B=0;B<L;B++){const G=h+B+k*K,Q=h+B+k*(K+1),J=h+(B+1)+k*(K+1),rt=h+(B+1)+k*K;l.push(G,Q,rt),l.push(Q,J,rt),V+=6}s.addGroup(m,V,w),m+=V,h+=Y}}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Me(o){const t={};for(let e=0;e<o.length;e++){const n=tr(o[e]);for(const i in n)t[i]=n[i]}return t}function id(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Dc(o){return o.getRenderTarget()===null&&o.outputEncoding===Vt?cn:Pr}const rd={clone:tr,merge:Me};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends Rc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Ui=1;class od extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ne(Ni,Ui,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ne(Ni,Ui,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ne(Ni,Ui,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ne(Ni,Ui,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Ne(Ni,Ui,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ne(Ni,Ui,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),d=t.toneMapping,h=t.xr.enabled;t.toneMapping=Ln,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=d,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Ic extends Be{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hr(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:kn});r.uniforms.tEquirect.value=e;const a=new dn(i,r),s=e.minFilter;return e.minFilter===Cr&&(e.minFilter=je),new od(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ga=new F,cd=new F,ud=new ke;class si{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ga.subVectors(n,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),i=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new oo,us=new F;class lo{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,a=new si){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],m=n[9],_=n[10],f=n[11],p=n[12],g=n[13],M=n[14],y=n[15];return e[0].setComponents(s-i,d-l,f-h,y-p).normalize(),e[1].setComponents(s+i,d+l,f+h,y+p).normalize(),e[2].setComponents(s+r,d+c,f+m,y+g).normalize(),e[3].setComponents(s-r,d-c,f-m,y-g).normalize(),e[4].setComponents(s-a,d-u,f-_,y-M).normalize(),e[5].setComponents(s+a,d+u,f+_,y+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function hd(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,m=u.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,h):(e?o.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:s,update:l}}class Is extends $n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,d=t/s,h=e/l,m=[],_=[],f=[],p=[];for(let g=0;g<u;g++){const M=g*h-a;for(let y=0;y<c;y++){const b=y*d-r;_.push(b,-M,0),f.push(0,0,1),p.push(y/s),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<s;M++){const y=M+c*g,b=M+c*(g+1),v=M+1+c*(g+1),A=M+1+c*g;m.push(y,b,A),m.push(b,v,A)}this.setIndex(m),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(p,2))}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}var dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd="vec3 transformed = vec3( position );",vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Id=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ef=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Af=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,$f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,rp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,sp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ap=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_p=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,St={alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,begin_vertex:xd,beginnormal_vertex:vd,bsdfs:yd,iridescence_fragment:Md,bumpmap_pars_fragment:bd,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ed,color_fragment:Ad,color_pars_fragment:Cd,color_pars_vertex:Ld,color_vertex:Pd,common:Dd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:zd,emissivemap_pars_fragment:Nd,encodings_fragment:Ud,encodings_pars_fragment:kd,envmap_fragment:Bd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Gd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:ef,envmap_vertex:Hd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:$d,fog_pars_fragment:Yd,gradientmap_pars_fragment:jd,lightmap_fragment:Zd,lightmap_pars_fragment:Kd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Qd,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:rf,lights_phong_fragment:sf,lights_phong_pars_fragment:af,lights_physical_fragment:of,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:uf,lights_fragment_end:hf,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:ff,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:_f,map_particle_fragment:xf,map_particle_pars_fragment:vf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Mf,morphcolor_vertex:bf,morphnormal_vertex:Sf,morphtarget_pars_vertex:wf,morphtarget_vertex:Tf,normal_fragment_begin:Ef,normal_fragment_maps:Af,normal_pars_fragment:Cf,normal_pars_vertex:Lf,normal_vertex:Pf,normalmap_pars_fragment:Df,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Of,output_fragment:zf,packing:Nf,premultiplied_alpha_fragment:Uf,project_vertex:kf,dithering_fragment:Bf,dithering_pars_fragment:Vf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Xf,shadowmap_vertex:qf,shadowmask_pars_fragment:$f,skinbase_vertex:Yf,skinning_pars_vertex:jf,skinning_vertex:Zf,skinnormal_vertex:Kf,specularmap_fragment:Jf,specularmap_pars_fragment:Qf,tonemapping_fragment:tp,tonemapping_pars_fragment:ep,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:rp,uv_pars_vertex:sp,uv_vertex:ap,uv2_pars_fragment:op,uv2_pars_vertex:lp,uv2_vertex:cp,worldpos_vertex:up,background_vert:hp,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:vp,distanceRGBA_frag:yp,equirect_vert:Mp,equirect_frag:bp,linedashed_vert:Sp,linedashed_frag:wp,meshbasic_vert:Tp,meshbasic_frag:Ep,meshlambert_vert:Ap,meshlambert_frag:Cp,meshmatcap_vert:Lp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Rp,meshphong_vert:Ip,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:zp,meshtoon_vert:Np,meshtoon_frag:Up,points_vert:kp,points_frag:Bp,shadow_vert:Vp,shadow_frag:Gp,sprite_vert:Wp,sprite_frag:Hp},st={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ke},uv2Transform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}}},un={basic:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ft(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Me([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Me([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ft(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Me([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Me([st.points,st.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Me([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Me([st.common,st.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Me([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Me([st.sprite,st.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Me([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Me([st.lights,st.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};un.physical={uniforms:Me([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new bt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const hs={r:0,b:0,g:0};function Xp(o,t,e,n,i,r,a){const s=new Ft(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function _(p,g){let M=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?e:t).get(y));const b=o.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?f(s,l):y&&y.isColor&&(f(y,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Rs)?(u===void 0&&(u=new dn(new Hr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:tr(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=y.encoding!==Vt,(d!==y||h!==y.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dn(new Is(2,2),new Gn({name:"BackgroundMaterial",uniforms:tr(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=y.encoding!==Vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,g){p.getRGB(hs,Dc(o)),n.buffers.color.setClear(hs.r,hs.g,hs.b,g,a)}return{getClearColor:function(){return s},setClearColor:function(p,g=1){s.set(p),l=g,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(s,l)},render:_}}function qp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function d(R,k,j,Y,V){let tt=!1;if(a){const K=f(Y,j,k);c!==K&&(c=K,m(c.object)),tt=g(R,Y,j,V),tt&&M(R,Y,j,V)}else{const K=k.wireframe===!0;(c.geometry!==Y.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=Y.id,c.program=j.id,c.wireframe=K,tt=!0)}V!==null&&e.update(V,34963),(tt||u)&&(u=!1,x(R,k,j,Y),V!==null&&o.bindBuffer(34963,e.get(V).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function f(R,k,j){const Y=j.wireframe===!0;let V=s[R.id];V===void 0&&(V={},s[R.id]=V);let tt=V[k.id];tt===void 0&&(tt={},V[k.id]=tt);let K=tt[Y];return K===void 0&&(K=p(h()),tt[Y]=K),K}function p(R){const k=[],j=[],Y=[];for(let V=0;V<i;V++)k[V]=0,j[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:Y,object:R,attributes:{},index:null}}function g(R,k,j,Y){const V=c.attributes,tt=k.attributes;let K=0;const B=j.getAttributes();for(const G in B)if(B[G].location>=0){const J=V[G];let rt=tt[G];if(rt===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;K++}return c.attributesNum!==K||c.index!==Y}function M(R,k,j,Y){const V={},tt=k.attributes;let K=0;const B=j.getAttributes();for(const G in B)if(B[G].location>=0){let J=tt[G];J===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),V[G]=rt,K++}c.attributes=V,c.attributesNum=K,c.index=Y}function y(){const R=c.newAttributes;for(let k=0,j=R.length;k<j;k++)R[k]=0}function b(R){v(R,0)}function v(R,k){const j=c.newAttributes,Y=c.enabledAttributes,V=c.attributeDivisors;j[R]=1,Y[R]===0&&(o.enableVertexAttribArray(R),Y[R]=1),V[R]!==k&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),V[R]=k)}function A(){const R=c.newAttributes,k=c.enabledAttributes;for(let j=0,Y=k.length;j<Y;j++)k[j]!==R[j]&&(o.disableVertexAttribArray(j),k[j]=0)}function L(R,k,j,Y,V,tt){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(R,k,j,V,tt):o.vertexAttribPointer(R,k,j,Y,V,tt)}function x(R,k,j,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const V=Y.attributes,tt=j.getAttributes(),K=k.defaultAttributeValues;for(const B in tt){const G=tt[B];if(G.location>=0){let Q=V[B];if(Q===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const J=Q.normalized,rt=Q.itemSize,q=e.get(Q);if(q===void 0)continue;const Et=q.buffer,dt=q.type,_t=q.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ht=Q.data,Ot=ht.stride,Mt=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let xt=0;xt<G.locationSize;xt++)v(G.location+xt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let xt=0;xt<G.locationSize;xt++)b(G.location+xt);o.bindBuffer(34962,Et);for(let xt=0;xt<G.locationSize;xt++)L(G.location+xt,rt/G.locationSize,dt,J,Ot*_t,(Mt+rt/G.locationSize*xt)*_t)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)v(G.location+ht,Q.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<G.locationSize;ht++)b(G.location+ht);o.bindBuffer(34962,Et);for(let ht=0;ht<G.locationSize;ht++)L(G.location+ht,rt/G.locationSize,dt,J,rt*_t,rt/G.locationSize*ht*_t)}}else if(K!==void 0){const J=K[B];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(G.location,J);break;case 3:o.vertexAttrib3fv(G.location,J);break;case 4:o.vertexAttrib4fv(G.location,J);break;default:o.vertexAttrib1fv(G.location,J)}}}}A()}function w(){Z();for(const R in s){const k=s[R];for(const j in k){const Y=k[j];for(const V in Y)_(Y[V].object),delete Y[V];delete k[j]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const k=s[R.id];for(const j in k){const Y=k[j];for(const V in Y)_(Y[V].object),delete Y[V];delete k[j]}delete s[R.id]}function U(R){for(const k in s){const j=s[k];if(j[R.id]===void 0)continue;const Y=j[R.id];for(const V in Y)_(Y[V].object),delete Y[V];delete j[R.id]}}function Z(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:b,disableUnusedAttributes:A}}function $p(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,d),e.update(u,r,d)}this.setMode=a,this.render=s,this.renderInstances=l}function Yp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),g=o.getParameter(36348),M=o.getParameter(36349),y=h>0,b=a||t.has("OES_texture_float"),v=y&&b,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:A}}function jp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new si,s=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const _=d.length!==0||h||n!==0||i;return i=h,e=u(d,m,0),n=d.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,h,m){const _=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,g=o.get(d);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,y=M*4;let b=g.clippingState||null;l.value=b,b=u(_,h,y,m);for(let v=0;v!==y;++v)b[v]=e[v];g.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,_){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,_!==!0||p===null){const g=m+f*4,M=h.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,b=m;y!==f;++y,b+=4)a.copy(d[y]).applyMatrix4(M,s),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Zp(o){let t=new WeakMap;function e(a,s){return s===Oa?a.mapping=Ki:s===za&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Oa||s===za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ld(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Kp extends Rc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,Sl=[.125,.215,.35,.446,.526,.582],li=20,_a=new Kp,wl=new Ft;let xa=null;const ai=(1+Math.sqrt(5))/2,Bi=1/ai,Tl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ai,Bi),new F(0,ai,-Bi),new F(Bi,0,ai),new F(-Bi,0,ai),new F(ai,Bi,0),new F(-ai,Bi,0)];class El{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xa),t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Lr,format:on,encoding:vi,depthBuffer:!1},i=Al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(r)),this._blurMaterial=Qp(r,t,e)}return i}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,i){const s=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(wl),u.toneMapping=Ln,u.autoClear=!1;const m=new Cc({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new dn(new Hr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(wl),f=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(s.up.set(0,l[g],0),s.lookAt(c[g],0,0)):M===1?(s.up.set(0,0,l[g]),s.lookAt(0,c[g],0)):(s.up.set(0,l[g],0),s.lookAt(0,0,c[g]));const y=this._cubeSize;ds(i,M*y,g>2?y:0,y,y),u.setRenderTarget(i),f&&u.render(_,s),u.render(t,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Tl[(i-1)%Tl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new dn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),f=r/_,p=isFinite(r)?1+Math.floor(u*f):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const g=[];let M=0;for(let L=0;L<li;++L){const x=L/f,w=Math.exp(-x*x/2);g.push(w),L===0?M+=w:L<p&&(M+=2*w)}for(let L=0;L<g.length;L++)g[L]=g[L]/M;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const b=this._sizeLods[i],v=3*b*(i>y-Wi?i-y+Wi:0),A=4*(this._cubeSize-b);ds(e,v,A,3*b,2*b),l.setRenderTarget(e),l.render(d,_a)}}function Jp(o){const t=[],e=[],n=[];let i=o;const r=o-Wi+1+Sl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-Wi?l=Sl[a-o+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,f=3,p=2,g=1,M=new Float32Array(f*_*m),y=new Float32Array(p*_*m),b=new Float32Array(g*_*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,x=A>2?0:-1,w=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];M.set(w,f*_*A),y.set(h,p*_*A);const P=[A,A,A,A,A,A];b.set(P,g*_*A)}const v=new $n;v.setAttribute("position",new pn(M,f)),v.setAttribute("uv",new pn(y,p)),v.setAttribute("faceIndex",new pn(b,g)),t.push(v),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Al(o,t,e){const n=new yi(o,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Qp(o,t,e){const n=new Float32Array(li),i=new F(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Cl(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ll(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tm(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Oa||l===za,u=l===Ki||l===Ji;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=t.get(s);return e===null&&(e=new El(o)),d=c?e.fromEquirectangular(s,d):e.fromCubemap(s,d),t.set(s,d),d.texture}else{if(t.has(s))return t.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new El(o));const h=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function em(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(o,t,e,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function s(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],34962);const m=d.morphAttributes;for(const _ in m){const f=m[_];for(let p=0,g=f.length;p<g;p++)t.update(f[p],34962)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let f=0;if(m!==null){const M=m.array;f=m.version;for(let y=0,b=M.length;y<b;y+=3){const v=M[y+0],A=M[y+1],L=M[y+2];h.push(v,A,A,L,L,v)}}else{const M=_.array;f=_.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const v=y+0,A=y+1,L=y+2;h.push(v,A,A,L,L,v)}}const p=new(bc(h)?Pc:Lc)(h,1);p.version=f;const g=r.get(d);g&&t.remove(g),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function im(o,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,s,h*l),e.update(m,r,1)}function d(h,m,_){if(_===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,h*l,_),e.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function rm(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sm(o,t){return o[0]-t[0]}function am(o,t){return Math.abs(t[1])-Math.abs(o[1])}function om(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Wt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let g=r.get(u);if(g===void 0||g.count!==p){let j=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var _=j;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let P=0;b===!0&&(P=1),v===!0&&(P=2),A===!0&&(P=3);let U=u.attributes.position.count*P,Z=1;U>t.maxTextureSize&&(Z=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const I=new Float32Array(U*Z*4*p),R=new Ec(I,U,Z,p);R.type=ui,R.needsUpdate=!0;const k=P*4;for(let Y=0;Y<p;Y++){const V=L[Y],tt=x[Y],K=w[Y],B=U*Z*4*Y;for(let G=0;G<V.count;G++){const Q=G*k;b===!0&&(a.fromBufferAttribute(V,G),I[B+Q+0]=a.x,I[B+Q+1]=a.y,I[B+Q+2]=a.z,I[B+Q+3]=0),v===!0&&(a.fromBufferAttribute(tt,G),I[B+Q+4]=a.x,I[B+Q+5]=a.y,I[B+Q+6]=a.z,I[B+Q+7]=0),A===!0&&(a.fromBufferAttribute(K,G),I[B+Q+8]=a.x,I[B+Q+9]=a.y,I[B+Q+10]=a.z,I[B+Q+11]=K.itemSize===4?a.w:1)}}g={count:p,texture:R,size:new bt(U,Z)},r.set(u,g),u.addEventListener("dispose",j)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const y=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let v=0;v<f;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<f;v++){const A=p[v];A[0]=v,A[1]=m[v]}p.sort(am);for(let v=0;v<8;v++)v<f&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(sm);const g=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const A=s[v],L=A[0],x=A[1];L!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+v)!==g[L]&&u.setAttribute("morphTarget"+v,g[L]),M&&u.getAttribute("morphNormal"+v)!==M[L]&&u.setAttribute("morphNormal"+v,M[L]),i[v]=x,y+=x):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),M&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const b=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",b),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function lm(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Oc=new Be,zc=new Ec,Nc=new Xh,Uc=new Ic,Pl=[],Dl=[],Rl=new Float32Array(16),Il=new Float32Array(9),Fl=new Float32Array(4);function lr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Pl[i];if(r===void 0&&(r=new Float32Array(i),Pl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function se(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ae(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Fs(o,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function cm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function um(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2fv(this.addr,t),ae(e,t)}}function hm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;o.uniform3fv(this.addr,t),ae(e,t)}}function dm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4fv(this.addr,t),ae(e,t)}}function fm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ae(e,t)}else{if(se(e,n))return;Fl.set(n),o.uniformMatrix2fv(this.addr,!1,Fl),ae(e,n)}}function pm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ae(e,t)}else{if(se(e,n))return;Il.set(n),o.uniformMatrix3fv(this.addr,!1,Il),ae(e,n)}}function mm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ae(e,t)}else{if(se(e,n))return;Rl.set(n),o.uniformMatrix4fv(this.addr,!1,Rl),ae(e,n)}}function gm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function _m(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2iv(this.addr,t),ae(e,t)}}function xm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;o.uniform3iv(this.addr,t),ae(e,t)}}function vm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4iv(this.addr,t),ae(e,t)}}function ym(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Mm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2uiv(this.addr,t),ae(e,t)}}function bm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;o.uniform3uiv(this.addr,t),ae(e,t)}}function Sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4uiv(this.addr,t),ae(e,t)}}function wm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Oc,i)}function Tm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nc,i)}function Em(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uc,i)}function Am(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zc,i)}function Cm(o){switch(o){case 5126:return cm;case 35664:return um;case 35665:return hm;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return Mm;case 36295:return bm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Am}}function Lm(o,t){o.uniform1fv(this.addr,t)}function Pm(o,t){const e=lr(t,this.size,2);o.uniform2fv(this.addr,e)}function Dm(o,t){const e=lr(t,this.size,3);o.uniform3fv(this.addr,e)}function Rm(o,t){const e=lr(t,this.size,4);o.uniform4fv(this.addr,e)}function Im(o,t){const e=lr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Fm(o,t){const e=lr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Om(o,t){const e=lr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function zm(o,t){o.uniform1iv(this.addr,t)}function Nm(o,t){o.uniform2iv(this.addr,t)}function Um(o,t){o.uniform3iv(this.addr,t)}function km(o,t){o.uniform4iv(this.addr,t)}function Bm(o,t){o.uniform1uiv(this.addr,t)}function Vm(o,t){o.uniform2uiv(this.addr,t)}function Gm(o,t){o.uniform3uiv(this.addr,t)}function Wm(o,t){o.uniform4uiv(this.addr,t)}function Hm(o,t,e){const n=this.cache,i=t.length,r=Fs(e,i);se(n,r)||(o.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Oc,r[a])}function Xm(o,t,e){const n=this.cache,i=t.length,r=Fs(e,i);se(n,r)||(o.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Nc,r[a])}function qm(o,t,e){const n=this.cache,i=t.length,r=Fs(e,i);se(n,r)||(o.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Uc,r[a])}function $m(o,t,e){const n=this.cache,i=t.length,r=Fs(e,i);se(n,r)||(o.uniform1iv(this.addr,r),ae(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||zc,r[a])}function Ym(o){switch(o){case 5126:return Lm;case 35664:return Pm;case 35665:return Dm;case 35666:return Rm;case 35674:return Im;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return zm;case 35667:case 35671:return Nm;case 35668:case 35672:return Um;case 35669:case 35673:return km;case 5125:return Bm;case 36294:return Vm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Cm(e.type)}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Ym(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Ol(o,t){o.seq.push(t),o.map[t.id]=t}function Jm(o,t,e){const n=o.name,i=n.length;for(va.lastIndex=0;;){const r=va.exec(n),a=va.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Ol(e,c===void 0?new jm(s,o,t):new Zm(s,o,t));break}else{let d=e.map[s];d===void 0&&(d=new Km(s),Ol(e,d)),e=d}}}class _s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Jm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function zl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Qm=0;function tg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function eg(o){switch(o){case vi:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Nl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+tg(o.getShaderSource(t),a)}else return i}function ng(o,t){const e=eg(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function ig(o,t){let e;switch(t){case xh:e="Linear";break;case vh:e="Reinhard";break;case yh:e="OptimizedCineon";break;case Mh:e="ACESFilmic";break;case bh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function sg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function br(o){return o!==""}function Ul(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(o){return o.replace(og,lg)}function lg(o,t){const e=St[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Va(e)}const cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(o){return o.replace(cg,ug)}function ug(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Mr&&(t="SHADOWMAP_TYPE_VSM"),t}function dg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ki:case Ji:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ao:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case _h:t="ENVMAP_BLENDING_ADD";break}return t}function mg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gg(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=hg(e),c=dg(e),u=fg(e),d=pg(e),h=mg(e),m=e.isWebGL2?"":rg(e),_=sg(r),f=i.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[_].filter(br).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(br).join(`
`),g.length>0&&(g+=`
`)):(p=[Vl(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),g=[m,Vl(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?St.tonemapping_pars_fragment:"",e.toneMapping!==Ln?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",St.encodings_pars_fragment,ng("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),a=Va(a),a=Ul(a,e),a=kl(a,e),s=Va(s),s=Ul(s,e),s=kl(s,e),a=Bl(a),s=Bl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=M+p+a,b=M+g+s,v=zl(i,35633,y),A=zl(i,35632,b);if(i.attachShader(f,v),i.attachShader(f,A),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(v).trim(),U=i.getShaderInfoLog(A).trim();let Z=!0,I=!0;if(i.getProgramParameter(f,35714)===!1){Z=!1;const R=Nl(i,v,"vertex"),k=Nl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+R+`
`+k)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||U==="")&&(I=!1);I&&(this.diagnostics={runnable:Z,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:g}})}i.deleteShader(v),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new _s(i,f)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=ag(i,f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=A,this}let _g=0;class xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vg(t),e.set(t,n)),n}}class vg{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}}function yg(o,t,e,n,i,r,a){const s=new Ac,l=new xg,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,w,P,U,Z){const I=U.fog,R=Z.geometry,k=x.isMeshStandardMaterial?U.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),Y=j&&j.mapping===Rs?j.image.height:null,V=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const tt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=tt!==void 0?tt.length:0;let B=0;R.morphAttributes.position!==void 0&&(B=1),R.morphAttributes.normal!==void 0&&(B=2),R.morphAttributes.color!==void 0&&(B=3);let G,Q,J,rt;if(V){const Ot=un[V];G=Ot.vertexShader,Q=Ot.fragmentShader}else G=x.vertexShader,Q=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),rt=l.getFragmentShaderID(x);const q=o.getRenderTarget(),Et=x.alphaTest>0,dt=x.clearcoat>0,_t=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:G,fragmentShader:Q,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:q===null?o.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:vi,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Vh,tangentSpaceNormalMap:x.normalMapType===Mc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Vt,clearcoat:dt,clearcoatMap:dt&&!!x.clearcoatMap,clearcoatRoughnessMap:dt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:dt&&!!x.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!x.iridescenceMap,iridescenceThicknessMap:_t&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===qi,alphaMap:!!x.alphaMap,alphaTest:Et,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:B,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Ln,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kr,flipSided:x.side===tn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(w,x),M(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function y(x){const w=_[x.type];let P;if(w){const U=un[w];P=rd.clone(U.uniforms)}else P=x.uniforms;return P}function b(x,w){let P;for(let U=0,Z=c.length;U<Z;U++){const I=c[U];if(I.cacheKey===w){P=I,++P.usedTimes;break}}return P===void 0&&(P=new gg(o,w,x,r),c.push(P)),P}function v(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:L}}function Mg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function bg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Wl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,h,m,_,f,p){let g=o[t];return g===void 0?(g={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:f,group:p},o[t]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=f,g.group=p),t++,g}function s(d,h,m,_,f,p){const g=a(d,h,m,_,f,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function l(d,h,m,_,f,p){const g=a(d,h,m,_,f,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function c(d,h){e.length>1&&e.sort(d||bg),n.length>1&&n.sort(h||Gl),i.length>1&&i.sort(h||Gl)}function u(){for(let d=t,h=o.length;d<h;d++){const m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Sg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Wl,o.set(n,[a])):i>=r.length?(a=new Wl,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function wg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ft};break;case"SpotLight":e={position:new F,direction:new F,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new F,halfWidth:new F,halfHeight:new F};break}return o[t.id]=e,e}}}function Tg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Eg=0;function Ag(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Cg(o,t){const e=new wg,n=Tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,a=new te,s=new te;function l(u,d){let h=0,m=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,g=0,M=0,y=0,b=0,v=0,A=0,L=0,x=0;u.sort(Ag);const w=d!==!0?Math.PI:1;for(let U=0,Z=u.length;U<Z;U++){const I=u[U],R=I.color,k=I.intensity,j=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=R.r*k*w,m+=R.g*k*w,_+=R.b*k*w;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const tt=I.shadow,K=n.get(I);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=I.shadow.matrix,b++}i.directional[f]=V,f++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(R).multiplyScalar(k*w),V.distance=j,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[g]=V;const tt=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,tt.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[g]=tt.matrix,I.castShadow){const K=n.get(I);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=Y,A++}g++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(R).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=V,M++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),V.distance=I.distance,V.decay=I.decay,I.castShadow){const tt=I.shadow,K=n.get(I);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,K.shadowCameraNear=tt.camera.near,K.shadowCameraFar=tt.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=V,p++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(k*w),V.groundColor.copy(I.groundColor).multiplyScalar(k*w),i.hemi[y]=V,y++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==M||P.hemiLength!==y||P.numDirectionalShadows!==b||P.numPointShadows!==v||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=A+L-x,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=x,P.directionalLength=f,P.pointLength=p,P.spotLength=g,P.rectAreaLength=M,P.hemiLength=y,P.numDirectionalShadows=b,P.numPointShadows=v,P.numSpotShadows=A,P.numSpotMaps=L,i.version=Eg++)}function c(u,d){let h=0,m=0,_=0,f=0,p=0;const g=d.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const b=u[M];if(b.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(b.isSpotLight){const v=i.spot[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const v=i.rectArea[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),s.identity(),a.copy(b.matrixWorld),a.premultiply(g),s.extractRotation(a),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),f++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Hl(o,t){const e=new Cg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Lg(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new Hl(o,t),e.set(r,[l])):a>=s.length?(l=new Hl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Pg extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dg extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(o,t,e){let n=new lo;const i=new bt,r=new bt,a=new Wt,s=new Pg({depthPacking:Bh}),l=new Dg,c={},u=e.maxTextureSize,d={0:tn,1:_i,2:kr},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Rg,fragmentShader:Ig}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new $n;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new dn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc,this.render=function(b,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const L=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),P=o.state;P.setBlending(kn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,Z=b.length;U<Z;U++){const I=b[U],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const k=R.getFrameExtents();if(i.multiply(k),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,R.mapSize.y=r.y)),R.map===null){const Y=this.type!==Mr?{minFilter:be,magFilter:be}:{};R.map=new yi(i.x,i.y,Y),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const j=R.getViewportCount();for(let Y=0;Y<j;Y++){const V=R.getViewport(Y);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(a),R.updateMatrices(I,Y),n=R.getFrustum(),y(v,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===Mr&&g(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,x,w)};function g(b,v){const A=t.update(f);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yi(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(v,null,A,h,f,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(v,null,A,m,f,null)}function M(b,v,A,L,x,w){let P=null;const U=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)P=U;else if(P=A.isPointLight===!0?l:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const Z=P.uuid,I=v.uuid;let R=c[Z];R===void 0&&(R={},c[Z]=R);let k=R[I];k===void 0&&(k=P.clone(),R[I]=k),P=k}return P.visible=v.visible,P.wireframe=v.wireframe,w===Mr?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:d[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=x),P}function y(b,v,A,L,x){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Mr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const U=t.update(b),Z=b.material;if(Array.isArray(Z)){const I=U.groups;for(let R=0,k=I.length;R<k;R++){const j=I[R],Y=Z[j.materialIndex];if(Y&&Y.visible){const V=M(b,Y,L,A.near,A.far,x);o.renderBufferDirect(A,null,U,V,b,j)}}}else if(Z.visible){const I=M(b,Z,L,A.near,A.far,x);o.renderBufferDirect(A,null,U,I,b,null)}}const P=b.children;for(let U=0,Z=P.length;U<Z;U++)y(P[U],v,A,L,x)}}function Og(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const H=new Wt;let et=null;const ct=new Wt(0,0,0,0);return{setMask:function(mt){et!==mt&&!D&&(o.colorMask(mt,mt,mt,mt),et=mt)},setLocked:function(mt){D=mt},setClear:function(mt,zt,le,fe,Zn){Zn===!0&&(mt*=fe,zt*=fe,le*=fe),H.set(mt,zt,le,fe),ct.equals(H)===!1&&(o.clearColor(mt,zt,le,fe),ct.copy(H))},reset:function(){D=!1,et=null,ct.set(-1,0,0,0)}}}function r(){let D=!1,H=null,et=null,ct=null;return{setTest:function(mt){mt?Et(2929):dt(2929)},setMask:function(mt){H!==mt&&!D&&(o.depthMask(mt),H=mt)},setFunc:function(mt){if(et!==mt){switch(mt){case ch:o.depthFunc(512);break;case uh:o.depthFunc(519);break;case hh:o.depthFunc(513);break;case Fa:o.depthFunc(515);break;case dh:o.depthFunc(514);break;case fh:o.depthFunc(518);break;case ph:o.depthFunc(516);break;case mh:o.depthFunc(517);break;default:o.depthFunc(515)}et=mt}},setLocked:function(mt){D=mt},setClear:function(mt){ct!==mt&&(o.clearDepth(mt),ct=mt)},reset:function(){D=!1,H=null,et=null,ct=null}}}function a(){let D=!1,H=null,et=null,ct=null,mt=null,zt=null,le=null,fe=null,Zn=null;return{setTest:function(Gt){D||(Gt?Et(2960):dt(2960))},setMask:function(Gt){H!==Gt&&!D&&(o.stencilMask(Gt),H=Gt)},setFunc:function(Gt,vn,Xe){(et!==Gt||ct!==vn||mt!==Xe)&&(o.stencilFunc(Gt,vn,Xe),et=Gt,ct=vn,mt=Xe)},setOp:function(Gt,vn,Xe){(zt!==Gt||le!==vn||fe!==Xe)&&(o.stencilOp(Gt,vn,Xe),zt=Gt,le=vn,fe=Xe)},setLocked:function(Gt){D=Gt},setClear:function(Gt){Zn!==Gt&&(o.clearStencil(Gt),Zn=Gt)},reset:function(){D=!1,H=null,et=null,ct=null,mt=null,zt=null,le=null,fe=null,Zn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,f=[],p=null,g=!1,M=null,y=null,b=null,v=null,A=null,L=null,x=null,w=!1,P=null,U=null,Z=null,I=null,R=null;const k=o.getParameter(35661);let j=!1,Y=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Y>=2);let tt=null,K={};const B=o.getParameter(3088),G=o.getParameter(2978),Q=new Wt().fromArray(B),J=new Wt().fromArray(G);function rt(D,H,et){const ct=new Uint8Array(4),mt=o.createTexture();o.bindTexture(D,mt),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let zt=0;zt<et;zt++)o.texImage2D(H+zt,0,6408,1,1,0,6408,5121,ct);return mt}const q={};q[3553]=rt(3553,3553,1),q[34067]=rt(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Et(2929),l.setFunc(Fa),ne(!1),xe(Oo),Et(2884),oe(kn);function Et(D){h[D]!==!0&&(o.enable(D),h[D]=!0)}function dt(D){h[D]!==!1&&(o.disable(D),h[D]=!1)}function _t(D,H){return m[D]!==H?(o.bindFramebuffer(D,H),m[D]=H,n&&(D===36009&&(m[36160]=H),D===36160&&(m[36009]=H)),!0):!1}function ht(D,H){let et=f,ct=!1;if(D)if(et=_.get(H),et===void 0&&(et=[],_.set(H,et)),D.isWebGLMultipleRenderTargets){const mt=D.texture;if(et.length!==mt.length||et[0]!==36064){for(let zt=0,le=mt.length;zt<le;zt++)et[zt]=36064+zt;et.length=mt.length,ct=!0}}else et[0]!==36064&&(et[0]=36064,ct=!0);else et[0]!==1029&&(et[0]=1029,ct=!0);ct&&(e.isWebGL2?o.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Ot(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const Mt={[Gi]:32774,[Ju]:32778,[Qu]:32779};if(n)Mt[ko]=32775,Mt[Bo]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(Mt[ko]=D.MIN_EXT,Mt[Bo]=D.MAX_EXT)}const xt={[th]:0,[eh]:1,[nh]:768,[_c]:770,[lh]:776,[ah]:774,[rh]:772,[ih]:769,[xc]:771,[oh]:775,[sh]:773};function oe(D,H,et,ct,mt,zt,le,fe){if(D===kn){g===!0&&(dt(3042),g=!1);return}if(g===!1&&(Et(3042),g=!0),D!==Ku){if(D!==M||fe!==w){if((y!==Gi||A!==Gi)&&(o.blendEquation(32774),y=Gi,A=Gi),fe)switch(D){case qi:o.blendFuncSeparate(1,771,1,771);break;case zo:o.blendFunc(1,1);break;case No:o.blendFuncSeparate(0,769,0,1);break;case Uo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qi:o.blendFuncSeparate(770,771,1,771);break;case zo:o.blendFunc(770,1);break;case No:o.blendFuncSeparate(0,769,0,1);break;case Uo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,v=null,L=null,x=null,M=D,w=fe}return}mt=mt||H,zt=zt||et,le=le||ct,(H!==y||mt!==A)&&(o.blendEquationSeparate(Mt[H],Mt[mt]),y=H,A=mt),(et!==b||ct!==v||zt!==L||le!==x)&&(o.blendFuncSeparate(xt[et],xt[ct],xt[zt],xt[le]),b=et,v=ct,L=zt,x=le),M=D,w=!1}function ee(D,H){D.side===kr?dt(2884):Et(2884);let et=D.side===tn;H&&(et=!et),ne(et),D.blending===qi&&D.transparent===!1?oe(kn):oe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const ct=D.stencilWrite;c.setTest(ct),ct&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(32926):dt(32926)}function ne(D){P!==D&&(D?o.frontFace(2304):o.frontFace(2305),P=D)}function xe(D){D!==Yu?(Et(2884),D!==U&&(D===Oo?o.cullFace(1029):D===ju?o.cullFace(1028):o.cullFace(1032))):dt(2884),U=D}function $t(D){D!==Z&&(j&&o.lineWidth(D),Z=D)}function Nt(D,H,et){D?(Et(32823),(I!==H||R!==et)&&(o.polygonOffset(H,et),I=H,R=et)):dt(32823)}function He(D){D?Et(3089):dt(3089)}function Se(D){D===void 0&&(D=33984+k-1),tt!==D&&(o.activeTexture(D),tt=D)}function E(D,H,et){et===void 0&&(tt===null?et=33984+k-1:et=tt);let ct=K[et];ct===void 0&&(ct={type:void 0,texture:void 0},K[et]=ct),(ct.type!==D||ct.texture!==H)&&(tt!==et&&(o.activeTexture(et),tt=et),o.bindTexture(D,H||q[D]),ct.type=D,ct.texture=H)}function S(){const D=K[tt];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(D){Q.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function ft(D){J.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function At(D,H){let et=d.get(H);et===void 0&&(et=new WeakMap,d.set(H,et));let ct=et.get(D);ct===void 0&&(ct=o.getUniformBlockIndex(H,D.name),et.set(D,ct))}function Lt(D,H){const ct=d.get(H).get(D);u.get(H)!==ct&&(o.uniformBlockBinding(H,ct,D.__bindingPointIndex),u.set(H,ct))}function Ut(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},tt=null,K={},m={},_=new WeakMap,f=[],p=null,g=!1,M=null,y=null,b=null,v=null,A=null,L=null,x=null,w=!1,P=null,U=null,Z=null,I=null,R=null,Q.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Et,disable:dt,bindFramebuffer:_t,drawBuffers:ht,useProgram:Ot,setBlending:oe,setMaterial:ee,setFlipSided:ne,setCullFace:xe,setLineWidth:$t,setPolygonOffset:Nt,setScissorTest:He,activeTexture:Se,bindTexture:E,unbindTexture:S,compressedTexImage2D:W,compressedTexImage3D:nt,texImage2D:ut,texImage3D:ot,updateUBOMapping:At,uniformBlockBinding:Lt,texStorage2D:O,texStorage3D:lt,texSubImage2D:it,texSubImage3D:at,compressedTexSubImage2D:vt,compressedTexSubImage3D:C,scissor:pt,viewport:ft,reset:Ut}}function zg(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return g?new OffscreenCanvas(E,S):bs("canvas")}function y(E,S,W,nt){let it=1;if((E.width>nt||E.height>nt)&&(it=nt/Math.max(E.width,E.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const at=S?Ba:Math.floor,vt=at(it*E.width),C=at(it*E.height);f===void 0&&(f=M(vt,C));const O=W?M(vt,C):f;return O.width=vt,O.height=C,O.getContext("2d").drawImage(E,0,0,vt,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+C+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return dl(E.width)&&dl(E.height)}function v(E){return s?!1:E.wrapS!==an||E.wrapT!==an||E.minFilter!==be&&E.minFilter!==je}function A(E,S){return E.generateMipmaps&&S&&E.minFilter!==be&&E.minFilter!==je}function L(E){o.generateMipmap(E)}function x(E,S,W,nt,it=!1){if(s===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at=S;return S===6403&&(W===5126&&(at=33326),W===5131&&(at=33325),W===5121&&(at=33321)),S===33319&&(W===5126&&(at=33328),W===5131&&(at=33327),W===5121&&(at=33323)),S===6408&&(W===5126&&(at=34836),W===5131&&(at=34842),W===5121&&(at=nt===Vt&&it===!1?35907:32856),W===32819&&(at=32854),W===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function w(E,S,W){return A(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==be&&E.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function P(E){return E===be||E===Vo||E===Ws?9728:9729}function U(E){const S=E.target;S.removeEventListener("dispose",U),I(S),S.isVideoTexture&&_.delete(S)}function Z(E){const S=E.target;S.removeEventListener("dispose",Z),k(S)}function I(E){const S=n.get(E);if(S.__webglInit===void 0)return;const W=E.source,nt=p.get(W);if(nt){const it=nt[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(E),Object.keys(nt).length===0&&p.delete(W)}n.remove(E)}function R(E){const S=n.get(E);o.deleteTexture(S.__webglTexture);const W=E.source,nt=p.get(W);delete nt[S.__cacheKey],a.memory.textures--}function k(E){const S=E.texture,W=n.get(E),nt=n.get(S);if(nt.__webglTexture!==void 0&&(o.deleteTexture(nt.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)o.deleteFramebuffer(W.__webglFramebuffer[it]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[it]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let it=0;it<W.__webglColorRenderbuffer.length;it++)W.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[it]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let it=0,at=S.length;it<at;it++){const vt=n.get(S[it]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(S[it])}n.remove(S),n.remove(E)}let j=0;function Y(){j=0}function V(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function tt(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function K(E,S){const W=n.get(E);if(E.isVideoTexture&&He(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const nt=E.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(W,E,S);return}}e.bindTexture(3553,W.__webglTexture,33984+S)}function B(E,S){const W=n.get(E);if(E.version>0&&W.__version!==E.version){dt(W,E,S);return}e.bindTexture(35866,W.__webglTexture,33984+S)}function G(E,S){const W=n.get(E);if(E.version>0&&W.__version!==E.version){dt(W,E,S);return}e.bindTexture(32879,W.__webglTexture,33984+S)}function Q(E,S){const W=n.get(E);if(E.version>0&&W.__version!==E.version){_t(W,E,S);return}e.bindTexture(34067,W.__webglTexture,33984+S)}const J={[Na]:10497,[an]:33071,[Ua]:33648},rt={[be]:9728,[Vo]:9984,[Ws]:9986,[je]:9729,[Sh]:9985,[Cr]:9987};function q(E,S,W){if(W?(o.texParameteri(E,10242,J[S.wrapS]),o.texParameteri(E,10243,J[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,J[S.wrapR]),o.texParameteri(E,10240,rt[S.magFilter]),o.texParameteri(E,10241,rt[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,P(S.magFilter)),o.texParameteri(E,10241,P(S.minFilter)),S.minFilter!==be&&S.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===be||S.minFilter!==Ws&&S.minFilter!==Cr||S.type===ui&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Lr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Et(E,S){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",U));const nt=S.source;let it=p.get(nt);it===void 0&&(it={},p.set(nt,it));const at=tt(S);if(at!==E.__cacheKey){it[at]===void 0&&(it[at]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[at].usedTimes++;const vt=it[E.__cacheKey];vt!==void 0&&(it[E.__cacheKey].usedTimes--,vt.usedTimes===0&&R(S)),E.__cacheKey=at,E.__webglTexture=it[at].texture}return W}function dt(E,S,W){let nt=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=35866),S.isData3DTexture&&(nt=32879);const it=Et(E,S),at=S.source;e.bindTexture(nt,E.__webglTexture,33984+W);const vt=n.get(at);if(at.version!==vt.__version||it===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const C=v(S)&&b(S.image)===!1;let O=y(S.image,C,!1,u);O=Se(S,O);const lt=b(O)||s,ut=r.convert(S.format,S.encoding);let ot=r.convert(S.type),pt=x(S.internalFormat,ut,ot,S.encoding,S.isVideoTexture);q(nt,S,lt);let ft;const At=S.mipmaps,Lt=s&&S.isVideoTexture!==!0,Ut=vt.__version===void 0||it===!0,D=w(S,O,lt);if(S.isDepthTexture)pt=6402,s?S.type===ui?pt=36012:S.type===ci?pt=33190:S.type===$i?pt=35056:pt=33189:S.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===di&&pt===6402&&S.type!==yc&&S.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ci,ot=r.convert(S.type)),S.format===Qi&&pt===6402&&(pt=34041,S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$i,ot=r.convert(S.type))),Ut&&(Lt?e.texStorage2D(3553,1,pt,O.width,O.height):e.texImage2D(3553,0,pt,O.width,O.height,0,ut,ot,null));else if(S.isDataTexture)if(At.length>0&&lt){Lt&&Ut&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,et=At.length;H<et;H++)ft=At[H],Lt?e.texSubImage2D(3553,H,0,0,ft.width,ft.height,ut,ot,ft.data):e.texImage2D(3553,H,pt,ft.width,ft.height,0,ut,ot,ft.data);S.generateMipmaps=!1}else Lt?(Ut&&e.texStorage2D(3553,D,pt,O.width,O.height),e.texSubImage2D(3553,0,0,0,O.width,O.height,ut,ot,O.data)):e.texImage2D(3553,0,pt,O.width,O.height,0,ut,ot,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Lt&&Ut&&e.texStorage3D(35866,D,pt,At[0].width,At[0].height,O.depth);for(let H=0,et=At.length;H<et;H++)ft=At[H],S.format!==on?ut!==null?Lt?e.compressedTexSubImage3D(35866,H,0,0,0,ft.width,ft.height,O.depth,ut,ft.data,0,0):e.compressedTexImage3D(35866,H,pt,ft.width,ft.height,O.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?e.texSubImage3D(35866,H,0,0,0,ft.width,ft.height,O.depth,ut,ot,ft.data):e.texImage3D(35866,H,pt,ft.width,ft.height,O.depth,0,ut,ot,ft.data)}else{Lt&&Ut&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,et=At.length;H<et;H++)ft=At[H],S.format!==on?ut!==null?Lt?e.compressedTexSubImage2D(3553,H,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(3553,H,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?e.texSubImage2D(3553,H,0,0,ft.width,ft.height,ut,ot,ft.data):e.texImage2D(3553,H,pt,ft.width,ft.height,0,ut,ot,ft.data)}else if(S.isDataArrayTexture)Lt?(Ut&&e.texStorage3D(35866,D,pt,O.width,O.height,O.depth),e.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ut,ot,O.data)):e.texImage3D(35866,0,pt,O.width,O.height,O.depth,0,ut,ot,O.data);else if(S.isData3DTexture)Lt?(Ut&&e.texStorage3D(32879,D,pt,O.width,O.height,O.depth),e.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ut,ot,O.data)):e.texImage3D(32879,0,pt,O.width,O.height,O.depth,0,ut,ot,O.data);else if(S.isFramebufferTexture){if(Ut)if(Lt)e.texStorage2D(3553,D,pt,O.width,O.height);else{let H=O.width,et=O.height;for(let ct=0;ct<D;ct++)e.texImage2D(3553,ct,pt,H,et,0,ut,ot,null),H>>=1,et>>=1}}else if(At.length>0&&lt){Lt&&Ut&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,et=At.length;H<et;H++)ft=At[H],Lt?e.texSubImage2D(3553,H,0,0,ut,ot,ft):e.texImage2D(3553,H,pt,ut,ot,ft);S.generateMipmaps=!1}else Lt?(Ut&&e.texStorage2D(3553,D,pt,O.width,O.height),e.texSubImage2D(3553,0,0,0,ut,ot,O)):e.texImage2D(3553,0,pt,ut,ot,O);A(S,lt)&&L(nt),vt.__version=at.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function _t(E,S,W){if(S.image.length!==6)return;const nt=Et(E,S),it=S.source;e.bindTexture(34067,E.__webglTexture,33984+W);const at=n.get(it);if(it.version!==at.__version||nt===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const vt=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,O=[];for(let H=0;H<6;H++)!vt&&!C?O[H]=y(S.image[H],!1,!0,c):O[H]=C?S.image[H].image:S.image[H],O[H]=Se(S,O[H]);const lt=O[0],ut=b(lt)||s,ot=r.convert(S.format,S.encoding),pt=r.convert(S.type),ft=x(S.internalFormat,ot,pt,S.encoding),At=s&&S.isVideoTexture!==!0,Lt=at.__version===void 0||nt===!0;let Ut=w(S,lt,ut);q(34067,S,ut);let D;if(vt){At&&Lt&&e.texStorage2D(34067,Ut,ft,lt.width,lt.height);for(let H=0;H<6;H++){D=O[H].mipmaps;for(let et=0;et<D.length;et++){const ct=D[et];S.format!==on?ot!==null?At?e.compressedTexSubImage2D(34069+H,et,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(34069+H,et,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+H,et,0,0,ct.width,ct.height,ot,pt,ct.data):e.texImage2D(34069+H,et,ft,ct.width,ct.height,0,ot,pt,ct.data)}}}else{D=S.mipmaps,At&&Lt&&(D.length>0&&Ut++,e.texStorage2D(34067,Ut,ft,O[0].width,O[0].height));for(let H=0;H<6;H++)if(C){At?e.texSubImage2D(34069+H,0,0,0,O[H].width,O[H].height,ot,pt,O[H].data):e.texImage2D(34069+H,0,ft,O[H].width,O[H].height,0,ot,pt,O[H].data);for(let et=0;et<D.length;et++){const mt=D[et].image[H].image;At?e.texSubImage2D(34069+H,et+1,0,0,mt.width,mt.height,ot,pt,mt.data):e.texImage2D(34069+H,et+1,ft,mt.width,mt.height,0,ot,pt,mt.data)}}else{At?e.texSubImage2D(34069+H,0,0,0,ot,pt,O[H]):e.texImage2D(34069+H,0,ft,ot,pt,O[H]);for(let et=0;et<D.length;et++){const ct=D[et];At?e.texSubImage2D(34069+H,et+1,0,0,ot,pt,ct.image[H]):e.texImage2D(34069+H,et+1,ft,ot,pt,ct.image[H])}}}A(S,ut)&&L(34067),at.__version=it.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ht(E,S,W,nt,it){const at=r.convert(W.format,W.encoding),vt=r.convert(W.type),C=x(W.internalFormat,at,vt,W.encoding);n.get(S).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,C,S.width,S.height,S.depth,0,at,vt,null):e.texImage2D(it,0,C,S.width,S.height,0,at,vt,null)),e.bindFramebuffer(36160,E),Nt(S)?h.framebufferTexture2DMultisampleEXT(36160,nt,it,n.get(W).__webglTexture,0,$t(S)):(it===3553||it>=34069&&it<=34074)&&o.framebufferTexture2D(36160,nt,it,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ot(E,S,W){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let nt=33189;if(W||Nt(S)){const it=S.depthTexture;it&&it.isDepthTexture&&(it.type===ui?nt=36012:it.type===ci&&(nt=33190));const at=$t(S);Nt(S)?h.renderbufferStorageMultisampleEXT(36161,at,nt,S.width,S.height):o.renderbufferStorageMultisample(36161,at,nt,S.width,S.height)}else o.renderbufferStorage(36161,nt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const nt=$t(S);W&&Nt(S)===!1?o.renderbufferStorageMultisample(36161,nt,35056,S.width,S.height):Nt(S)?h.renderbufferStorageMultisampleEXT(36161,nt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const nt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<nt.length;it++){const at=nt[it],vt=r.convert(at.format,at.encoding),C=r.convert(at.type),O=x(at.internalFormat,vt,C,at.encoding),lt=$t(S);W&&Nt(S)===!1?o.renderbufferStorageMultisample(36161,lt,O,S.width,S.height):Nt(S)?h.renderbufferStorageMultisampleEXT(36161,lt,O,S.width,S.height):o.renderbufferStorage(36161,O,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function Mt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const nt=n.get(S.depthTexture).__webglTexture,it=$t(S);if(S.depthTexture.format===di)Nt(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,nt,0,it):o.framebufferTexture2D(36160,36096,3553,nt,0);else if(S.depthTexture.format===Qi)Nt(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,nt,0,it):o.framebufferTexture2D(36160,33306,3553,nt,0);else throw new Error("Unknown depthTexture format")}function xt(E){const S=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Mt(S.__webglFramebuffer,E)}else if(W){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(36160,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]=o.createRenderbuffer(),Ot(S.__webglDepthbuffer[nt],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ot(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function oe(E,S,W){const nt=n.get(E);S!==void 0&&ht(nt.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&xt(E)}function ee(E){const S=E.texture,W=n.get(E),nt=n.get(S);E.addEventListener("dispose",Z),E.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=S.version,a.memory.textures++);const it=E.isWebGLCubeRenderTarget===!0,at=E.isWebGLMultipleRenderTargets===!0,vt=b(E)||s;if(it){W.__webglFramebuffer=[];for(let C=0;C<6;C++)W.__webglFramebuffer[C]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),at)if(i.drawBuffers){const C=E.texture;for(let O=0,lt=C.length;O<lt;O++){const ut=n.get(C[O]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Nt(E)===!1){const C=at?S:[S];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const lt=C[O];W.__webglColorRenderbuffer[O]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[O]);const ut=r.convert(lt.format,lt.encoding),ot=r.convert(lt.type),pt=x(lt.internalFormat,ut,ot,lt.encoding,E.isXRRenderTarget===!0),ft=$t(E);o.renderbufferStorageMultisample(36161,ft,pt,E.width,E.height),o.framebufferRenderbuffer(36160,36064+O,36161,W.__webglColorRenderbuffer[O])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,nt.__webglTexture),q(34067,S,vt);for(let C=0;C<6;C++)ht(W.__webglFramebuffer[C],E,S,36064,34069+C);A(S,vt)&&L(34067),e.unbindTexture()}else if(at){const C=E.texture;for(let O=0,lt=C.length;O<lt;O++){const ut=C[O],ot=n.get(ut);e.bindTexture(3553,ot.__webglTexture),q(3553,ut,vt),ht(W.__webglFramebuffer,E,ut,36064+O,3553),A(ut,vt)&&L(3553)}e.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(C,nt.__webglTexture),q(C,S,vt),ht(W.__webglFramebuffer,E,S,36064,C),A(S,vt)&&L(C),e.unbindTexture()}E.depthBuffer&&xt(E)}function ne(E){const S=b(E)||s,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let nt=0,it=W.length;nt<it;nt++){const at=W[nt];if(A(at,S)){const vt=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(at).__webglTexture;e.bindTexture(vt,C),L(vt),e.unbindTexture()}}}function xe(E){if(s&&E.samples>0&&Nt(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,nt=E.height;let it=16384;const at=[],vt=E.stencilBuffer?33306:36096,C=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,null),e.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,null,0);e.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,C.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){at.push(36064+lt),E.depthBuffer&&at.push(vt);const ut=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ut===!1&&(E.depthBuffer&&(it|=256),E.stencilBuffer&&(it|=1024)),O&&o.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[lt]),ut===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),O){const ot=n.get(S[lt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ot,0)}o.blitFramebuffer(0,0,W,nt,0,0,W,nt,it,9728),m&&o.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),O)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,C.__webglColorRenderbuffer[lt]);const ut=n.get(S[lt]).__webglTexture;e.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,ut,0)}e.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function $t(E){return Math.min(d,E.samples)}function Nt(E){const S=n.get(E);return s&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(E){const S=a.render.frame;_.get(E)!==S&&(_.set(E,S),E.update())}function Se(E,S){const W=E.encoding,nt=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ka||W!==vi&&(W===Vt?s===!1?t.has("EXT_sRGB")===!0&&nt===on?(E.format=ka,E.minFilter=je,E.generateMipmaps=!1):S=wc.sRGBToLinear(S):(nt!==on||it!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=oe,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Nt}function Ng(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===xi)return 5121;if(r===Ah)return 32819;if(r===Ch)return 32820;if(r===wh)return 5120;if(r===Th)return 5122;if(r===yc)return 5123;if(r===Eh)return 5124;if(r===ci)return 5125;if(r===ui)return 5126;if(r===Lr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Lh)return 6406;if(r===on)return 6408;if(r===Dh)return 6409;if(r===Rh)return 6410;if(r===di)return 6402;if(r===Qi)return 34041;if(r===Ph)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ka)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Ih)return 6403;if(r===Fh)return 36244;if(r===Oh)return 33319;if(r===zh)return 33320;if(r===Nh)return 36249;if(r===Hs||r===Xs||r===qs||r===$s)if(a===Vt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Go||r===Wo||r===Ho||r===Xo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qo||r===$o)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===qo)return a===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===$o)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yo||r===jo||r===Zo||r===Ko||r===Jo||r===Qo||r===tl||r===el||r===nl||r===il||r===rl||r===sl||r===al||r===ol)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Yo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ko)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tl)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===el)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nl)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===il)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rl)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sl)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===al)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ol)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ll)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===ll)return a===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===$i?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Ug extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fs extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),g=this._getHandJoint(c,f);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Bg extends Be{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:di,u!==di&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===di&&(n=ci),n===void 0&&u===Qi&&(n=$i),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}class Vg extends Si{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const _=e.getContextAttributes();let f=null,p=null;const g=[],M=[],y=new Set,b=new Map,v=new Ne;v.layers.enable(1),v.viewport=new Wt;const A=new Ne;A.layers.enable(2),A.viewport=new Wt;const L=[v,A],x=new Ug;x.layers.enable(1),x.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=g[B];return G===void 0&&(G=new ya,g[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=g[B];return G===void 0&&(G=new ya,g[B]=G),G.getGripSpace()},this.getHand=function(B){let G=g[B];return G===void 0&&(G=new ya,g[B]=G),G.getHandSpace()};function U(B){const G=M.indexOf(B.inputSource);if(G===-1)return;const Q=g[G];Q!==void 0&&Q.dispatchEvent({type:B.type,data:B.inputSource})}function Z(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",I);for(let B=0;B<g.length;B++){const G=M[B];G!==null&&(M[B]=null,g[B].disconnect(G))}w=null,P=null,t.setRenderTarget(f),h=null,d=null,u=null,i=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:h}),p=new yi(h.framebufferWidth,h.framebufferHeight,{format:on,type:xi,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let G=null,Q=null,J=null;_.depth&&(J=_.stencil?35056:33190,G=_.stencil?Qi:di,Q=_.stencil?$i:ci);const rt={colorFormat:32856,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(rt),i.updateRenderState({layers:[d]}),p=new yi(d.textureWidth,d.textureHeight,{format:on,type:xi,depthTexture:new Bg(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const q=t.properties.get(p);q.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let G=0;G<B.removed.length;G++){const Q=B.removed[G],J=M.indexOf(Q);J>=0&&(M[J]=null,g[J].disconnect(Q))}for(let G=0;G<B.added.length;G++){const Q=B.added[G];let J=M.indexOf(Q);if(J===-1){for(let q=0;q<g.length;q++)if(q>=M.length){M.push(Q),J=q;break}else if(M[q]===null){M[q]=Q,J=q;break}if(J===-1)break}const rt=g[J];rt&&rt.connect(Q)}}const R=new F,k=new F;function j(B,G,Q){R.setFromMatrixPosition(G.matrixWorld),k.setFromMatrixPosition(Q.matrixWorld);const J=R.distanceTo(k),rt=G.projectionMatrix.elements,q=Q.projectionMatrix.elements,Et=rt[14]/(rt[10]-1),dt=rt[14]/(rt[10]+1),_t=(rt[9]+1)/rt[5],ht=(rt[9]-1)/rt[5],Ot=(rt[8]-1)/rt[0],Mt=(q[8]+1)/q[0],xt=Et*Ot,oe=Et*Mt,ee=J/(-Ot+Mt),ne=ee*-Ot;G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ne),B.translateZ(ee),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const xe=Et+ee,$t=dt+ee,Nt=xt-ne,He=oe+(J-ne),Se=_t*dt/$t*xe,E=ht*dt/$t*xe;B.projectionMatrix.makePerspective(Nt,He,Se,E,xe,$t)}function Y(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;x.near=A.near=v.near=B.near,x.far=A.far=v.far=B.far,(w!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,P=x.far);const G=B.parent,Q=x.cameras;Y(x,G);for(let rt=0;rt<Q.length;rt++)Y(Q[rt],G);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const J=B.children;for(let rt=0,q=J.length;rt<q;rt++)J[rt].updateMatrixWorld(!0);Q.length===2?j(x,v,A):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){d!==null&&(d.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.getPlanes=function(){return y};let V=null;function tt(B,G){if(c=G.getViewerPose(l||a),m=G,c!==null){const Q=c.views;h!==null&&(t.setRenderTargetFramebuffer(p,h.framebuffer),t.setRenderTarget(p));let J=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let rt=0;rt<Q.length;rt++){const q=Q[rt];let Et=null;if(h!==null)Et=h.getViewport(q);else{const _t=u.getViewSubImage(d,q);Et=_t.viewport,rt===0&&(t.setRenderTargetTextures(p,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(p))}let dt=L[rt];dt===void 0&&(dt=new Ne,dt.layers.enable(rt),dt.viewport=new Wt,L[rt]=dt),dt.matrix.fromArray(q.transform.matrix),dt.projectionMatrix.fromArray(q.projectionMatrix),dt.viewport.set(Et.x,Et.y,Et.width,Et.height),rt===0&&x.matrix.copy(dt.matrix),J===!0&&x.cameras.push(dt)}}for(let Q=0;Q<g.length;Q++){const J=M[Q],rt=g[Q];J!==null&&rt!==void 0&&rt.update(J,G,l||a)}if(V&&V(B,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let Q=null;for(const J of y)G.detectedPlanes.has(J)||(Q===null&&(Q=[]),Q.push(J));if(Q!==null)for(const J of Q)y.delete(J),b.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of G.detectedPlanes)if(!y.has(J))y.add(J),b.set(J,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const rt=b.get(J);J.lastChangedTime>rt&&(b.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}m=null}const K=new Fc;K.setAnimationLoop(tt),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function Gg(o,t){function e(f,p){p.color.getRGB(f.fogColor.value,Dc(o)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,g,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,y)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),_(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?s(f,p,g,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===tn&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===tn&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const g=t.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,g,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===tn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Wg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=i[M.id];b===void 0&&(_(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",p));const v=y.program;n.updateUBOMapping(M,v);const A=t.render.frame;r[M.id]!==A&&(h(M),r[M.id]=A)}function u(M){const y=d();M.__bindingPointIndex=y;const b=o.createBuffer(),v=M.__size,A=M.usage;return o.bindBuffer(35345,b),o.bufferData(35345,v,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,b),b}function d(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],b=M.uniforms,v=M.__cache;o.bindBuffer(35345,y);for(let A=0,L=b.length;A<L;A++){const x=b[A];if(m(x,A,v)===!0){const w=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let Z=0;Z<P.length;Z++){const I=P[Z],R=f(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,w+U,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,U),U+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function m(M,y,b){const v=M.value;if(b[y]===void 0){if(typeof v=="number")b[y]=v;else{const A=Array.isArray(v)?v:[v],L=[];for(let x=0;x<A.length;x++)L.push(A[x].clone());b[y]=L}return!0}else if(typeof v=="number"){if(b[y]!==v)return b[y]=v,!0}else{const A=Array.isArray(b[y])?b[y]:[b[y]],L=Array.isArray(v)?v:[v];for(let x=0;x<A.length;x++){const w=A[x];if(w.equals(L[x])===!1)return w.copy(L[x]),!0}}return!1}function _(M){const y=M.uniforms;let b=0;const v=16;let A=0;for(let L=0,x=y.length;L<x;L++){const w=y[L],P={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let Z=0,I=U.length;Z<I;Z++){const R=U[Z],k=f(R);P.boundary+=k.boundary,P.storage+=k.storage}if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,L>0){A=b%v;const Z=v-A;A!==0&&Z-P.boundary<0&&(b+=v-A,w.__offset=b)}b+=P.storage}return A=b%v,A>0&&(b+=v-A),M.__size=b,M.__cache={},this}function f(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}function Hg(){const o=bs("canvas");return o.style.display="block",o}function kc(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Hg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let d=null,h=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vi,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const f=this;let p=!1,g=0,M=0,y=null,b=-1,v=null;const A=new Wt,L=new Wt;let x=null,w=t.width,P=t.height,U=1,Z=null,I=null;const R=new Wt(0,0,w,P),k=new Wt(0,0,w,P);let j=!1;const Y=new lo;let V=!1,tt=!1,K=null;const B=new te,G=new bt,Q=new F,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return y===null?U:1}let q=e;function Et(T,N){for(let X=0;X<T.length;X++){const z=T[X],$=t.getContext(z,N);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${so}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",At,!1),q===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),q=Et(N,T),q===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,_t,ht,Ot,Mt,xt,oe,ee,ne,xe,$t,Nt,He,Se,E,S,W,nt,it,at,vt,C,O,lt;function ut(){dt=new em(q),_t=new Yp(q,dt,o),dt.init(_t),C=new Ng(q,dt,_t),ht=new Og(q,dt,_t),Ot=new rm,Mt=new Mg,xt=new zg(q,dt,ht,Mt,_t,C,Ot),oe=new Zp(f),ee=new tm(f),ne=new hd(q,_t),O=new qp(q,dt,ne,_t),xe=new nm(q,ne,Ot,O),$t=new lm(q,xe,ne,Ot),it=new om(q,_t,xt),S=new jp(Mt),Nt=new yg(f,oe,ee,dt,_t,O,S),He=new Gg(f,Mt),Se=new Sg,E=new Lg(dt,_t),nt=new Xp(f,oe,ee,ht,$t,u,a),W=new Fg(f,$t,_t),lt=new Wg(q,Ot,_t,ht),at=new $p(q,dt,Ot,_t),vt=new im(q,dt,Ot,_t),Ot.programs=Nt.programs,f.capabilities=_t,f.extensions=dt,f.properties=Mt,f.renderLists=Se,f.shadowMap=W,f.state=ht,f.info=Ot}ut();const ot=new Vg(f,q);this.xr=ot,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(w,P,!1))},this.getSize=function(T){return T.set(w,P)},this.setSize=function(T,N,X){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,P=N,t.width=Math.floor(T*U),t.height=Math.floor(N*U),X!==!1&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(w*U,P*U).floor()},this.setDrawingBufferSize=function(T,N,X){w=T,P=N,U=X,t.width=Math.floor(T*X),t.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,N,X,z){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,N,X,z),ht.viewport(A.copy(R).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,N,X,z){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,N,X,z),ht.scissor(L.copy(k).multiplyScalar(U).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){ht.setScissorTest(j=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(T=!0,N=!0,X=!0){let z=0;T&&(z|=16384),N&&(z|=256),X&&(z|=1024),q.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",At,!1),Se.dispose(),E.dispose(),Mt.dispose(),oe.dispose(),ee.dispose(),$t.dispose(),O.dispose(),lt.dispose(),Nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ct),ot.removeEventListener("sessionend",mt),K&&(K.dispose(),K=null),zt.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ot.autoReset,N=W.enabled,X=W.autoUpdate,z=W.needsUpdate,$=W.type;ut(),Ot.autoReset=T,W.enabled=N,W.autoUpdate=X,W.needsUpdate=z,W.type=$}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Lt(T){const N=T.target;N.removeEventListener("dispose",Lt),Ut(N)}function Ut(T){D(T),Mt.remove(T)}function D(T){const N=Mt.get(T).programs;N!==void 0&&(N.forEach(function(X){Nt.releaseProgram(X)}),T.isShaderMaterial&&Nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,z,$,gt){N===null&&(N=J);const yt=$.isMesh&&$.matrixWorld.determinant()<0,wt=Hu(T,N,X,z,$);ht.setMaterial(z,yt);let Tt=X.index,It=1;z.wireframe===!0&&(Tt=xe.getWireframeAttribute(X),It=2);const Pt=X.drawRange,Dt=X.attributes.position;let jt=Pt.start*It,De=(Pt.start+Pt.count)*It;gt!==null&&(jt=Math.max(jt,gt.start*It),De=Math.min(De,(gt.start+gt.count)*It)),Tt!==null?(jt=Math.max(jt,0),De=Math.min(De,Tt.count)):Dt!=null&&(jt=Math.max(jt,0),De=Math.min(De,Dt.count));const yn=De-jt;if(yn<0||yn===1/0)return;O.setup($,z,wt,X,Tt);let Kn,Zt=at;if(Tt!==null&&(Kn=ne.get(Tt),Zt=vt,Zt.setIndex(Kn)),$.isMesh)z.wireframe===!0?(ht.setLineWidth(z.wireframeLinewidth*rt()),Zt.setMode(1)):Zt.setMode(4);else if($.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),ht.setLineWidth(Rt*rt()),$.isLineSegments?Zt.setMode(1):$.isLineLoop?Zt.setMode(2):Zt.setMode(3)}else $.isPoints?Zt.setMode(0):$.isSprite&&Zt.setMode(4);if($.isInstancedMesh)Zt.renderInstances(jt,yn,$.count);else if(X.isInstancedBufferGeometry){const Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ks=Math.min(X.instanceCount,Rt);Zt.renderInstances(jt,yn,ks)}else Zt.render(jt,yn)},this.compile=function(T,N){function X(z,$,gt){z.transparent===!0&&z.side===$r?(z.side=tn,z.needsUpdate=!0,Xe(z,$,gt),z.side=_i,z.needsUpdate=!0,Xe(z,$,gt),z.side=$r):Xe(z,$,gt)}h=E.get(T),h.init(),_.push(h),T.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights(f.physicallyCorrectLights),T.traverse(function(z){const $=z.material;if($)if(Array.isArray($))for(let gt=0;gt<$.length;gt++){const yt=$[gt];X(yt,T,z)}else X($,T,z)}),_.pop(),h=null};let H=null;function et(T){H&&H(T)}function ct(){zt.stop()}function mt(){zt.start()}const zt=new Fc;zt.setAnimationLoop(et),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(T){H=T,ot.setAnimationLoop(T),T===null?zt.stop():zt.start()},ot.addEventListener("sessionstart",ct),ot.addEventListener("sessionend",mt),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(N),N=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,N,y),h=E.get(T,_.length),h.init(),_.push(h),B.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(B),tt=this.localClippingEnabled,V=S.init(this.clippingPlanes,tt,N),d=Se.get(T,m.length),d.init(),m.push(d),le(T,N,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(Z,I),V===!0&&S.beginShadows();const X=h.state.shadowsArray;if(W.render(X,T,N),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(d,T),h.setupLights(f.physicallyCorrectLights),N.isArrayCamera){const z=N.cameras;for(let $=0,gt=z.length;$<gt;$++){const yt=z[$];fe(d,T,yt,yt.viewport)}}else fe(d,T,N);y!==null&&(xt.updateMultisampleRenderTarget(y),xt.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(f,T,N),O.resetDefaultState(),b=-1,v=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function le(T,N,X,z){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){z&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const yt=$t.update(T),wt=T.material;wt.visible&&d.push(T,yt,wt,X,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ot.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ot.render.frame),!T.frustumCulled||Y.intersectsObject(T))){z&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const yt=$t.update(T),wt=T.material;if(Array.isArray(wt)){const Tt=yt.groups;for(let It=0,Pt=Tt.length;It<Pt;It++){const Dt=Tt[It],jt=wt[Dt.materialIndex];jt&&jt.visible&&d.push(T,yt,jt,X,Q.z,Dt)}}else wt.visible&&d.push(T,yt,wt,X,Q.z,null)}}const gt=T.children;for(let yt=0,wt=gt.length;yt<wt;yt++)le(gt[yt],N,X,z)}function fe(T,N,X,z){const $=T.opaque,gt=T.transmissive,yt=T.transparent;h.setupLightsView(X),gt.length>0&&Zn($,N,X),z&&ht.viewport(A.copy(z)),$.length>0&&Gt($,N,X),gt.length>0&&Gt(gt,N,X),yt.length>0&&Gt(yt,N,X),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Zn(T,N,X){const z=_t.isWebGL2;K===null&&(K=new yi(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")?Lr:xi,minFilter:Cr,samples:z&&r===!0?4:0})),f.getDrawingBufferSize(G),z?K.setSize(G.x,G.y):K.setSize(Ba(G.x),Ba(G.y));const $=f.getRenderTarget();f.setRenderTarget(K),f.clear();const gt=f.toneMapping;f.toneMapping=Ln,Gt(T,N,X),f.toneMapping=gt,xt.updateMultisampleRenderTarget(K),xt.updateRenderTargetMipmap(K),f.setRenderTarget($)}function Gt(T,N,X){const z=N.isScene===!0?N.overrideMaterial:null;for(let $=0,gt=T.length;$<gt;$++){const yt=T[$],wt=yt.object,Tt=yt.geometry,It=z===null?yt.material:z,Pt=yt.group;wt.layers.test(X.layers)&&vn(wt,N,X,Tt,It,Pt)}}function vn(T,N,X,z,$,gt){T.onBeforeRender(f,N,X,z,$,gt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(f,N,X,z,T,gt),$.transparent===!0&&$.side===$r?($.side=tn,$.needsUpdate=!0,f.renderBufferDirect(X,N,z,$,T,gt),$.side=_i,$.needsUpdate=!0,f.renderBufferDirect(X,N,z,$,T,gt),$.side=$r):f.renderBufferDirect(X,N,z,$,T,gt),T.onAfterRender(f,N,X,z,$,gt)}function Xe(T,N,X){N.isScene!==!0&&(N=J);const z=Mt.get(T),$=h.state.lights,gt=h.state.shadowsArray,yt=$.state.version,wt=Nt.getParameters(T,$.state,gt,N,X),Tt=Nt.getProgramCacheKey(wt);let It=z.programs;z.environment=T.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(T.isMeshStandardMaterial?ee:oe).get(T.envMap||z.environment),It===void 0&&(T.addEventListener("dispose",Lt),It=new Map,z.programs=It);let Pt=It.get(Tt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===yt)return Ro(T,wt),Pt}else wt.uniforms=Nt.getUniforms(T),T.onBuild(X,wt,f),T.onBeforeCompile(wt,f),Pt=Nt.acquireProgram(wt,Tt),It.set(Tt,Pt),z.uniforms=wt.uniforms;const Dt=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=S.uniform),Ro(T,wt),z.needsLights=qu(T),z.lightsStateVersion=yt,z.needsLights&&(Dt.ambientLightColor.value=$.state.ambient,Dt.lightProbe.value=$.state.probe,Dt.directionalLights.value=$.state.directional,Dt.directionalLightShadows.value=$.state.directionalShadow,Dt.spotLights.value=$.state.spot,Dt.spotLightShadows.value=$.state.spotShadow,Dt.rectAreaLights.value=$.state.rectArea,Dt.ltc_1.value=$.state.rectAreaLTC1,Dt.ltc_2.value=$.state.rectAreaLTC2,Dt.pointLights.value=$.state.point,Dt.pointLightShadows.value=$.state.pointShadow,Dt.hemisphereLights.value=$.state.hemi,Dt.directionalShadowMap.value=$.state.directionalShadowMap,Dt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Dt.spotShadowMap.value=$.state.spotShadowMap,Dt.spotLightMatrix.value=$.state.spotLightMatrix,Dt.spotLightMap.value=$.state.spotLightMap,Dt.pointShadowMap.value=$.state.pointShadowMap,Dt.pointShadowMatrix.value=$.state.pointShadowMatrix);const jt=Pt.getUniforms(),De=_s.seqWithValue(jt.seq,Dt);return z.currentProgram=Pt,z.uniformsList=De,Pt}function Ro(T,N){const X=Mt.get(T);X.outputEncoding=N.outputEncoding,X.instancing=N.instancing,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Hu(T,N,X,z,$){N.isScene!==!0&&(N=J),xt.resetTextureUnits();const gt=N.fog,yt=z.isMeshStandardMaterial?N.environment:null,wt=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:vi,Tt=(z.isMeshStandardMaterial?ee:oe).get(z.envMap||yt),It=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pt=!!z.normalMap&&!!X.attributes.tangent,Dt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,De=!!X.morphAttributes.color,yn=z.toneMapped?f.toneMapping:Ln,Kn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=Kn!==void 0?Kn.length:0,Rt=Mt.get(z),ks=h.state.lights;if(V===!0&&(tt===!0||T!==v)){const Re=T===v&&z.id===b;S.setState(z,T,Re)}let ce=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ks.state.version||Rt.outputEncoding!==wt||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==Tt||z.fog===!0&&Rt.fog!==gt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==S.numPlanes||Rt.numIntersection!==S.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Pt||Rt.morphTargets!==Dt||Rt.morphNormals!==jt||Rt.morphColors!==De||Rt.toneMapping!==yn||_t.isWebGL2===!0&&Rt.morphTargetsCount!==Zt)&&(ce=!0):(ce=!0,Rt.__version=z.version);let Jn=Rt.currentProgram;ce===!0&&(Jn=Xe(z,N,$));let Io=!1,ur=!1,Bs=!1;const ve=Jn.getUniforms(),Qn=Rt.uniforms;if(ht.useProgram(Jn.program)&&(Io=!0,ur=!0,Bs=!0),z.id!==b&&(b=z.id,ur=!0),Io||v!==T){if(ve.setValue(q,"projectionMatrix",T.projectionMatrix),_t.logarithmicDepthBuffer&&ve.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,ur=!0,Bs=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Re=ve.map.cameraPosition;Re!==void 0&&Re.setValue(q,Q.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ve.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||$.isSkinnedMesh)&&ve.setValue(q,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){ve.setOptional(q,$,"bindMatrix"),ve.setOptional(q,$,"bindMatrixInverse");const Re=$.skeleton;Re&&(_t.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),ve.setValue(q,"boneTexture",Re.boneTexture,xt),ve.setValue(q,"boneTextureSize",Re.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vs=X.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&_t.isWebGL2===!0)&&it.update($,X,z,Jn),(ur||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,ve.setValue(q,"receiveShadow",$.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qn.envMap.value=Tt,Qn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),ur&&(ve.setValue(q,"toneMappingExposure",f.toneMappingExposure),Rt.needsLights&&Xu(Qn,Bs),gt&&z.fog===!0&&He.refreshFogUniforms(Qn,gt),He.refreshMaterialUniforms(Qn,z,U,P,K),_s.upload(q,Rt.uniformsList,Qn,xt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_s.upload(q,Rt.uniformsList,Qn,xt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ve.setValue(q,"center",$.center),ve.setValue(q,"modelViewMatrix",$.modelViewMatrix),ve.setValue(q,"normalMatrix",$.normalMatrix),ve.setValue(q,"modelMatrix",$.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Re=z.uniformsGroups;for(let Gs=0,$u=Re.length;Gs<$u;Gs++)if(_t.isWebGL2){const Fo=Re[Gs];lt.update(Fo,Jn),lt.bind(Fo,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function Xu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function qu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,N,X){Mt.get(T.texture).__webglTexture=N,Mt.get(T.depthTexture).__webglTexture=X;const z=Mt.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const X=Mt.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,X=0){y=T,g=N,M=X;let z=!0,$=null,gt=!1,yt=!1;if(T){const Tt=Mt.get(T);Tt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),z=!1):Tt.__webglFramebuffer===void 0?xt.setupRenderTarget(T):Tt.__hasExternalTextures&&xt.rebindTextures(T,Mt.get(T.texture).__webglTexture,Mt.get(T.depthTexture).__webglTexture);const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(yt=!0);const Pt=Mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Pt[N],gt=!0):_t.isWebGL2&&T.samples>0&&xt.useMultisampledRTT(T)===!1?$=Mt.get(T).__webglMultisampledFramebuffer:$=Pt,A.copy(T.viewport),L.copy(T.scissor),x=T.scissorTest}else A.copy(R).multiplyScalar(U).floor(),L.copy(k).multiplyScalar(U).floor(),x=j;if(ht.bindFramebuffer(36160,$)&&_t.drawBuffers&&z&&ht.drawBuffers(T,$),ht.viewport(A),ht.scissor(L),ht.setScissorTest(x),gt){const Tt=Mt.get(T.texture);q.framebufferTexture2D(36160,36064,34069+N,Tt.__webglTexture,X)}else if(yt){const Tt=Mt.get(T.texture),It=N||0;q.framebufferTextureLayer(36160,36064,Tt.__webglTexture,X||0,It)}b=-1},this.readRenderTargetPixels=function(T,N,X,z,$,gt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){ht.bindFramebuffer(36160,wt);try{const Tt=T.texture,It=Tt.format,Pt=Tt.type;if(It!==on&&C.convert(It)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Pt===Lr&&(dt.has("EXT_color_buffer_half_float")||_t.isWebGL2&&dt.has("EXT_color_buffer_float"));if(Pt!==xi&&C.convert(Pt)!==q.getParameter(35738)&&!(Pt===ui&&(_t.isWebGL2||dt.has("OES_texture_float")||dt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-z&&X>=0&&X<=T.height-$&&q.readPixels(N,X,z,$,C.convert(It),C.convert(Pt),gt)}finally{const Tt=y!==null?Mt.get(y).__webglFramebuffer:null;ht.bindFramebuffer(36160,Tt)}}},this.copyFramebufferToTexture=function(T,N,X=0){const z=Math.pow(2,-X),$=Math.floor(N.image.width*z),gt=Math.floor(N.image.height*z);xt.setTexture2D(N,0),q.copyTexSubImage2D(3553,X,0,0,T.x,T.y,$,gt),ht.unbindTexture()},this.copyTextureToTexture=function(T,N,X,z=0){const $=N.image.width,gt=N.image.height,yt=C.convert(X.format),wt=C.convert(X.type);xt.setTexture2D(X,0),q.pixelStorei(37440,X.flipY),q.pixelStorei(37441,X.premultiplyAlpha),q.pixelStorei(3317,X.unpackAlignment),N.isDataTexture?q.texSubImage2D(3553,z,T.x,T.y,$,gt,yt,wt,N.image.data):N.isCompressedTexture?q.compressedTexSubImage2D(3553,z,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,yt,N.mipmaps[0].data):q.texSubImage2D(3553,z,T.x,T.y,yt,wt,N.image),z===0&&X.generateMipmaps&&q.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,N,X,z,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,wt=T.max.z-T.min.z+1,Tt=C.convert(z.format),It=C.convert(z.type);let Pt;if(z.isData3DTexture)xt.setTexture3D(z,0),Pt=32879;else if(z.isDataArrayTexture)xt.setTexture2DArray(z,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,z.flipY),q.pixelStorei(37441,z.premultiplyAlpha),q.pixelStorei(3317,z.unpackAlignment);const Dt=q.getParameter(3314),jt=q.getParameter(32878),De=q.getParameter(3316),yn=q.getParameter(3315),Kn=q.getParameter(32877),Zt=X.isCompressedTexture?X.mipmaps[0]:X.image;q.pixelStorei(3314,Zt.width),q.pixelStorei(32878,Zt.height),q.pixelStorei(3316,T.min.x),q.pixelStorei(3315,T.min.y),q.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?q.texSubImage3D(Pt,$,N.x,N.y,N.z,gt,yt,wt,Tt,It,Zt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Pt,$,N.x,N.y,N.z,gt,yt,wt,Tt,Zt.data)):q.texSubImage3D(Pt,$,N.x,N.y,N.z,gt,yt,wt,Tt,It,Zt),q.pixelStorei(3314,Dt),q.pixelStorei(32878,jt),q.pixelStorei(3316,De),q.pixelStorei(3315,yn),q.pixelStorei(32877,Kn),$===0&&z.generateMipmaps&&q.generateMipmap(Pt),ht.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xt.setTextureCube(T,0):T.isData3DTexture?xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xt.setTexture2DArray(T,0):xt.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){g=0,M=0,y=null,ht.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Xg extends kc{}Xg.prototype.isWebGL1Renderer=!0;class qg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class uo extends $n{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],d=new F,h=new F,m=[],_=[],f=[],p=[];for(let g=0;g<=n;g++){const M=[],y=g/n;let b=0;g==0&&a==0?b=.5/e:g==n&&l==Math.PI&&(b=-.5/e);for(let v=0;v<=e;v++){const A=v/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+y*s),d.y=t*Math.cos(a+y*s),d.z=t*Math.sin(i+A*r)*Math.sin(a+y*s),_.push(d.x,d.y,d.z),h.copy(d).normalize(),f.push(h.x,h.y,h.z),p.push(A+b,1-y),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const y=u[g][M+1],b=u[g][M],v=u[g+1][M],A=u[g+1][M+1];(g!==0||a>0)&&m.push(y,b,A),(g!==n-1||l<Math.PI)&&m.push(b,v,A)}this.setIndex(m),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(p,2))}static fromJSON(t){return new uo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $g extends Wr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bc extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ma=new te,Xl=new F,ql=new F;class Yg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $l=new te,xr=new F,ba=new F;class jg extends Yg{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),$l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l)}}class Zg extends Bc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kg extends Bc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yl(){return(typeof performance>"u"?Date:performance).now()}class jl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);const Zl={type:"change"},Sa={type:"start"},Kl={type:"end"};class Qg extends Si{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Se),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zl),n.update(),r=i.NONE},this.update=function(){const C=new F,O=new Mi().setFromUnitVectors(t.up,new F(0,1,0)),lt=O.clone().invert(),ut=new F,ot=new Mi,pt=2*Math.PI;return function(){const At=n.object.position;C.copy(At).sub(n.target),C.applyQuaternion(O),s.setFromVector3(C),n.autoRotate&&r===i.NONE&&w(L()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Lt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;return isFinite(Lt)&&isFinite(Ut)&&(Lt<-Math.PI?Lt+=pt:Lt>Math.PI&&(Lt-=pt),Ut<-Math.PI?Ut+=pt:Ut>Math.PI&&(Ut-=pt),Lt<=Ut?s.theta=Math.max(Lt,Math.min(Ut,s.theta)):s.theta=s.theta>(Lt+Ut)/2?Math.max(Lt,s.theta):Math.min(Ut,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(s),C.applyQuaternion(lt),At.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ut.distanceToSquared(n.object.position)>a||8*(1-ot.dot(n.object.quaternion))>a?(n.dispatchEvent(Zl),ut.copy(n.object.position),ot.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",xe),n.domElement.removeEventListener("wheel",He),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ne),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Se)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new jl,l=new jl;let c=1;const u=new F;let d=!1;const h=new bt,m=new bt,_=new bt,f=new bt,p=new bt,g=new bt,M=new bt,y=new bt,b=new bt,v=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(C){l.theta-=C}function P(C){l.phi-=C}const U=function(){const C=new F;return function(lt,ut){C.setFromMatrixColumn(ut,0),C.multiplyScalar(-lt),u.add(C)}}(),Z=function(){const C=new F;return function(lt,ut){n.screenSpacePanning===!0?C.setFromMatrixColumn(ut,1):(C.setFromMatrixColumn(ut,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(lt),u.add(C)}}(),I=function(){const C=new F;return function(lt,ut){const ot=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;C.copy(pt).sub(n.target);let ft=C.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),U(2*lt*ft/ot.clientHeight,n.object.matrix),Z(2*ut*ft/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(lt*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),Z(ut*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C){h.set(C.clientX,C.clientY)}function Y(C){M.set(C.clientX,C.clientY)}function V(C){f.set(C.clientX,C.clientY)}function tt(C){m.set(C.clientX,C.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*_.x/O.clientHeight),P(2*Math.PI*_.y/O.clientHeight),h.copy(m),n.update()}function K(C){y.set(C.clientX,C.clientY),b.subVectors(y,M),b.y>0?R(x()):b.y<0&&k(x()),M.copy(y),n.update()}function B(C){p.set(C.clientX,C.clientY),g.subVectors(p,f).multiplyScalar(n.panSpeed),I(g.x,g.y),f.copy(p),n.update()}function G(C){C.deltaY<0?k(x()):C.deltaY>0&&R(x()),n.update()}function Q(C){let O=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function J(){if(v.length===1)h.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),O=.5*(v[0].pageY+v[1].pageY);h.set(C,O)}}function rt(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),O=.5*(v[0].pageY+v[1].pageY);f.set(C,O)}}function q(){const C=v[0].pageX-v[1].pageX,O=v[0].pageY-v[1].pageY,lt=Math.sqrt(C*C+O*O);M.set(0,lt)}function Et(){n.enableZoom&&q(),n.enablePan&&rt()}function dt(){n.enableZoom&&q(),n.enableRotate&&J()}function _t(C){if(v.length==1)m.set(C.pageX,C.pageY);else{const lt=vt(C),ut=.5*(C.pageX+lt.x),ot=.5*(C.pageY+lt.y);m.set(ut,ot)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*_.x/O.clientHeight),P(2*Math.PI*_.y/O.clientHeight),h.copy(m)}function ht(C){if(v.length===1)p.set(C.pageX,C.pageY);else{const O=vt(C),lt=.5*(C.pageX+O.x),ut=.5*(C.pageY+O.y);p.set(lt,ut)}g.subVectors(p,f).multiplyScalar(n.panSpeed),I(g.x,g.y),f.copy(p)}function Ot(C){const O=vt(C),lt=C.pageX-O.x,ut=C.pageY-O.y,ot=Math.sqrt(lt*lt+ut*ut);y.set(0,ot),b.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),R(b.y),M.copy(y)}function Mt(C){n.enableZoom&&Ot(C),n.enablePan&&ht(C)}function xt(C){n.enableZoom&&Ot(C),n.enableRotate&&_t(C)}function oe(C){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",ne)),nt(C),C.pointerType==="touch"?E(C):$t(C))}function ee(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):Nt(C))}function ne(C){it(C),v.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ne)),n.dispatchEvent(Kl),r=i.NONE}function xe(C){it(C)}function $t(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ti.DOLLY:if(n.enableZoom===!1)return;Y(C),r=i.DOLLY;break;case Ti.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;j(C),r=i.ROTATE}break;case Ti.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;j(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Sa)}function Nt(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;tt(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;B(C);break}}function He(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(Sa),G(C),n.dispatchEvent(Kl))}function Se(C){n.enabled===!1||n.enablePan===!1||Q(C)}function E(C){switch(at(C),v.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;rt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Et(),r=i.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Sa)}function S(C){switch(at(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_t(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ht(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(C),n.update();break;default:r=i.NONE}}function W(C){n.enabled!==!1&&C.preventDefault()}function nt(C){v.push(C)}function it(C){delete A[C.pointerId];for(let O=0;O<v.length;O++)if(v[O].pointerId==C.pointerId){v.splice(O,1);return}}function at(C){let O=A[C.pointerId];O===void 0&&(O=new bt,A[C.pointerId]=O),O.set(C.pageX,C.pageY)}function vt(C){const O=C.pointerId===v[0].pointerId?v[1]:v[0];return A[O.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",xe),n.domElement.addEventListener("wheel",He,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class t_ extends gn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ga(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const e_={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Ga,toHexString:Ga},Dr={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},n_={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,e=1){const n=Dr.fromHexString(o);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([o,t,e],n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Dr.toHexString(i)}},i_={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const n=Dr.fromHexString(o);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:o,g:t,b:e},n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Dr.toHexString(i)}},r_=[e_,Dr,n_,i_];function s_(o){return r_.find(t=>t.match(o))}class a_ extends gn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=s_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ga(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class wa extends gn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class o_ extends gn{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},e=g=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))};let r=!1,a,s,l,c,u;const d=5,h=g=>{a=g.clientX,s=l=g.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const M=g.clientX-a,y=g.clientY-s;Math.abs(y)>d?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>d&&_()}if(!r){const M=g.clientY-l;u-=M*this._step*this._arrowKeyMultiplier(g),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,M,y,b,v)=>(g-M)/(y-M)*(v-b)+b,e=g=>{const M=this.$slider.getBoundingClientRect();let y=t(g,M.left,M.right,this._min,this._max);this._snapClampSetValue(y)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=g=>{e(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),a=!1},u=g=>{g.touches.length>1||(this._hasScrollBar?(s=g.touches[0].clientX,l=g.touches[0].clientY,a=!0):c(g),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=g=>{if(a){const M=g.touches[0].clientX-s,y=g.touches[0].clientY-l;Math.abs(M)>Math.abs(y)?c(g):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else g.preventDefault(),e(g.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},m=this._callOnFinishChange.bind(this),_=400;let f;const p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const y=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class l_ extends gn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class c_ extends gn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const u_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function h_(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Jl=!1;class ho{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:a=!0,touchStyles:s=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),s&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Jl&&a&&(h_(u_),Jl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new l_(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new o_(this,t,e,n,i,r);case"boolean":return new t_(this,t,e);case"string":return new c_(this,t,e);case"function":return new wa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new a_(this,t,e,n)}addFolder(t){return new ho({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof wa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof wa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}var d_=`uniform float uTime;
uniform float uBigWavesElevation;
uniform vec3 uBigWavesFrequency;
uniform float uBigWavesSpeed;

uniform float u_bass;
uniform float u_mid;

uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallWavesIterations;

varying vec2 vUv;
varying float vElevation;
varying float vNoise;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  
  
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  
  float elevation = 
    sin((modelPosition.z * uBigWavesFrequency.z + abs(u_bass) * 0.05) + uTime * uBigWavesSpeed) *
    sin((modelPosition.y * uBigWavesFrequency.y + abs(u_mid) * 0.05) + uTime * uBigWavesSpeed) *
    sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) *
    uBigWavesElevation;

  
  if(u_bass > 70.0)
  {
    for(float i = 1.0; i <= 4.0; i++)
    {
      elevation -= abs(
        snoise(
          vec3(
            modelPosition.xz * (uBigWavesElevation + u_bass) * i,
            uTime * uSmallWavesSpeed
          )
        ) * uSmallWavesElevation * u_bass / i
      );
    }
  }
  modelPosition.xyz += elevation; 

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  gl_PointSize = 10.;

  
  vUv = uv;
  vElevation = elevation;
}`,f_=`uniform float uTime;
uniform vec2 mouse;
uniform vec2 rez;
uniform sampler2D texture;

uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying vec2 vUv;
varying float vElevation;

void main(){

  float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;

  vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);

  gl_FragColor = vec4( color, 1.0 );

}`;function En(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Vc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ve={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},er={duration:.5,overwrite:!1,delay:0},fo,ge,Jt,Ke=1e8,Bt=1/Ke,Wa=Math.PI*2,p_=Wa/4,m_=0,Gc=Math.sqrt,g_=Math.cos,__=Math.sin,he=function(t){return typeof t=="string"},qt=function(t){return typeof t=="function"},Pn=function(t){return typeof t=="number"},po=function(t){return typeof t>"u"},xn=function(t){return typeof t=="object"},Ae=function(t){return t!==!1},mo=function(){return typeof window<"u"},ps=function(t){return qt(t)||he(t)},Wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_e=Array.isArray,Ha=/(?:-?\.?\d|\.)+/gi,Hc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ta=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xc=/[+-]=-?[.\d]+/,qc=/[^,'"\[\]\s]+/gi,x_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Ye,Xa,go,Ge={},Ss={},$c,Yc=function(t){return(Ss=bi(t,Ge))&&Pe},_o=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ws=function(t,e){return!e&&console.warn(t)},jc=function(t,e){return t&&(Ge[t]=e)&&Ss&&(Ss[t]=e)||Ge},Rr=function(){return 0},v_={suppressEvents:!0,isStart:!0,kill:!1},xs={suppressEvents:!0,kill:!1},y_={suppressEvents:!0},xo={},Bn=[],qa={},Zc,ze={},Ea={},Ql=30,vs=[],vo="",yo=function(t){var e=t[0],n,i;if(xn(e)||qt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=vs.length;i--&&!vs[i].targetTest(e););n=vs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new yu(t[i],n)))||t.splice(i,1);return t},pi=function(t){return t._gsap||yo(Je(t))[0]._gsap},Kc=function(t,e,n){return(n=t[e])&&qt(n)?t[e]():po(n)&&t.getAttribute&&t.getAttribute(e)||n},Ce=function(t,e){return(t=t.split(",")).forEach(e)||t},Yt=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},Yi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},M_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ts=function(){var t=Bn.length,e=Bn.slice(0),n,i;for(qa={},Bn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jc=function(t,e,n,i){Bn.length&&!ge&&Ts(),t.render(e,n,i||ge&&e<0&&(t._initted||t._startAt)),Bn.length&&!ge&&Ts()},Qc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qc).length<2?e:he(t)?t.trim():t},tu=function(t){return t},en=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},b_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},bi=function(t,e){for(var n in e)t[n]=e[n];return t},tc=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Es=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Tr=function(t){var e=t.parent||Ht,n=t.keyframes?b_(_e(t.keyframes)):en;if(Ae(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},S_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},eu=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Os=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Wn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},mi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},w_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$a=function(t,e,n,i){return t._startAt&&(ge?t._startAt.revert(xs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},T_=function o(t){return!t||t._ts&&o(t.parent)},ec=function(t){return t._repeat?nr(t._tTime,t=t.duration()+t._rDelay)*t:0},nr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},As=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zs=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||Bt)||0))},Ns=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=de(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zs(t),n._dirty||mi(n,t)),t},nu=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=As(t.rawTime(),e),(!e._dur||Xr(0,e.totalDuration(),n)-e._tTime>Bt)&&e.render(n,!0)),mi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Bt}},hn=function(t,e,n,i){return e.parent&&Wn(e),e._start=de((Pn(n)?n:n||t!==Ht?$e(t,n,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),eu(t,e,"_first","_last",t._sort?"_start":0),Ya(e)||(t._recent=e),i||nu(t,e),t._ts<0&&Ns(t,t._tTime),t},iu=function(t,e){return(Ge.ScrollTrigger||_o("scrollTrigger",e))&&Ge.ScrollTrigger.create(e,t)},ru=function(t,e,n,i,r){if(bo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ge&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zc!==Ue.frame)return Bn.push(t),t._lazy=[r,i],1},E_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ya=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},A_=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&E_(t)&&!(!t._initted&&Ya(t))||(t._ts<0||t._dp._ts<0)&&!Ya(t))?0:1,s=t._rDelay,l=0,c,u,d;if(s&&t._repeat&&(l=Xr(0,t._tDur,e),u=nr(l,s),t._yoyo&&u&1&&(a=1-a),u!==nr(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ge||i||t._zTime===Bt||!e&&t._zTime){if(!t._initted&&ru(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Bt:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&$a(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Wn(t,1),!n&&!ge&&(Qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},C_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ir=function(t,e,n,i){var r=t._repeat,a=de(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:de(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Ns(t,t._tTime=t._tDur*s),t.parent&&zs(t),n||mi(t.parent,t),t},nc=function(t){return t instanceof Te?mi(t):ir(t,t._dur)},L_={_start:0,endTime:Rr,totalDuration:Rr},$e=function o(t,e,n){var i=t.labels,r=t._recent||L_,a=t.duration()>=Ke?r.endTime(!1):t._dur,s,l,c;return he(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(_e(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},Er=function(t,e,n){var i=Pn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ae(l.vars.inherit)&&l.parent;a.immediateRender=Ae(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new re(e[0],a,e[r+1])},Yn=function(t,e){return t||t===0?e(t):e},Xr=function(t,e,n){return n<t?t:n>e?e:n},me=function(t,e){return!he(t)||!(e=x_.exec(t))?"":e[1]},P_=function(t,e,n){return Yn(n,function(i){return Xr(t,e,i)})},ja=[].slice,su=function(t,e){return t&&xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xn(t[0]))&&!t.nodeType&&t!==Ye},D_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return he(i)&&!e||su(i,1)?(r=n).push.apply(r,Je(i)):n.push(i)})||n},Je=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):he(t)&&!n&&(Xa||!rr())?ja.call((e||go).querySelectorAll(t),0):_e(t)?D_(t,n):su(t)?ja.call(t,0):t?[t]:[]},Za=function(t){return t=Je(t)[0]||ws("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Je(e,n.querySelectorAll?n:n===t?ws("Invalid scope")||go.createElement("div"):t)}},au=function(t){return t.sort(function(){return .5-Math.random()})},ou=function(t){if(qt(t))return t;var e=xn(t)?t:{each:t},n=gi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,d=i;return he(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],d=i[1]),function(h,m,_){var f=(_||e).length,p=a[f],g,M,y,b,v,A,L,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ke])[1],!w){for(L=-Ke;L<(L=_[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=a[f]=[],g=l?Math.min(w,f)*u-.5:i%w,M=w===Ke?0:l?f*d/w-.5:i/w|0,L=0,x=Ke,A=0;A<f;A++)y=A%w-g,b=M-(A/w|0),p[A]=v=c?Math.abs(c==="y"?b:y):Gc(y*y+b*b),v>L&&(L=v),v<x&&(x=v);i==="random"&&au(p),p.max=L-x,p.min=x,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=me(e.amount||e.each)||0,n=n&&f<0?_u(n):n}return f=(p[h]-p.min)/p.max||0,de(p.b+(n?n(f):f)*p.v)+p.u}},Ka=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=de(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Pn(n)?0:me(n))}},lu=function(t,e){var n=_e(t),i,r;return!n&&xn(t)&&(i=n=t.radius||Ke,t.values?(t=Je(t.values),(r=!Pn(t[0]))&&(i*=i)):t=Ka(t.increment)),Yn(e,n?qt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ke,u=0,d=t.length,h,m;d--;)r?(h=t[d].x-s,m=t[d].y-l,h=h*h+m*m):h=Math.abs(t[d]-s),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:a,r||u===a||Pn(a)?u:u+me(a)}:Ka(t))},cu=function(t,e,n,i){return Yn(_e(t)?!e:n===!0?!!(n=0):!i,function(){return _e(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},R_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},I_=function(t,e){return function(n){return t(parseFloat(n))+(e||me(n))}},F_=function(t,e,n){return hu(t,e,0,1,n)},uu=function(t,e,n){return Yn(n,function(i){return t[~~e(i)]})},O_=function o(t,e,n){var i=e-t;return _e(t)?uu(t,o(0,t.length),e):Yn(n,function(r){return(i+(r-t)%i)%i+t})},z_=function o(t,e,n){var i=e-t,r=i*2;return _e(t)?uu(t,o(0,t.length-1),e):Yn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ir=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?qc:Ha),n+=t.substr(e,i-e)+cu(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},hu=function(t,e,n,i,r){var a=e-t,s=i-n;return Yn(r,function(l){return n+((l-t)/a*s||0)})},N_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=he(t),s={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(_e(t)&&!_e(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(o(t[c-1],t[c]));d--,r=function(_){_*=d;var f=Math.min(h,~~_);return u[f](_-f)},n=e}else i||(t=bi(_e(t)?[]:{},t));if(!u){for(l in e)Mo.call(s,t,l,"get",e[l]);r=function(_){return To(_,s)||(a?t.p:t)}}}return Yn(n,r)},ic=function(t,e,n){var i=t.labels,r=Ke,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Qe=function(t,e,n){var i=t.vars,r=i[e],a=Jt,s=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Bn.length&&Ts(),s&&(Jt=s),u=l?r.apply(c,l):r.call(c),Jt=a,u},Sr=function(t){return Wn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ge),t.progress()<1&&Qe(t,"onInterrupt"),t},Xi,du=[],fu=function(t){if(!mo()){du.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=qt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Rr,render:To,add:Mo,kill:Q_,modifier:J_,rawVars:0},a={targetTest:0,get:0,getSetter:wo,aliases:{},register:0};if(rr(),t!==i){if(ze[e])return;en(i,en(Es(t,r),a)),bi(i.prototype,bi(r,Es(t,a))),ze[i.prop=e]=i,t.targetTest&&(vs.push(i),xo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jc(e,i),t.register&&t.register(Pe,i,Le)},kt=255,wr={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Aa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*kt+.5|0},pu=function(t,e,n){var i=t?Pn(t)?[t>>16,t>>8&kt,t&kt]:0:wr.black,r,a,s,l,c,u,d,h,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wr[t])i=wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&kt,i&kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&kt,t&kt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ha),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Aa(l+1/3,r,a),i[1]=Aa(l,r,a),i[2]=Aa(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Hc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ha)||wr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/kt,a=i[1]/kt,s=i[2]/kt,d=Math.max(r,a,s),h=Math.min(r,a,s),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===r?(a-s)/m+(a<s?6:0):d===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},mu=function(t){var e=[],n=[],i=-1;return t.split(Vn).forEach(function(r){var a=r.match(Hi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},rc=function(t,e,n){var i="",r=(t+i).match(Vn),a=e?"hsla(":"rgba(",s=0,l,c,u,d;if(!r)return t;if(r=r.map(function(h){return(h=pu(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=mu(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Vn,"1").split(Hi),d=c.length-1;s<d;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Vn),d=c.length-1;s<d;s++)i+=c[s]+r[s];return i+c[d]},Vn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),U_=/hsl[a]?\(/,gu=function(t){var e=t.join(" "),n;if(Vn.lastIndex=0,Vn.test(e))return n=U_.test(e),t[1]=rc(t[1],n),t[0]=rc(t[0],n,mu(t[1])),!0},Fr,Ue=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,d,h,m,_=function f(p){var g=o()-i,M=p===!0,y,b,v,A;if(g>t&&(n+=g-e),i+=g,v=i-n,y=v-a,(y>0||M)&&(A=++d.frame,h=v-d.time*1e3,d.time=v=v/1e3,a+=y+(y>=r?4:r-y),b=1),M||(l=c(f)),b)for(m=0;m<s.length;m++)s[m](v,h,A,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){$c&&(!Xa&&mo()&&(Ye=Xa=window,go=Ye.document||{},Ge.gsap=Pe,(Ye.gsapVersions||(Ye.gsapVersions=[])).push(Pe.version),Yc(Ss||Ye.GreenSockGlobals||!Ye.gsap&&Ye||{}),u=Ye.requestAnimationFrame,du.forEach(fu)),l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Fr=1,_(2))},sleep:function(){(u?Ye.cancelAnimationFrame:clearTimeout)(l),Fr=0,c=Rr},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,g,M){var y=g?function(b,v,A,L){p(b,v,A,L),d.remove(y)}:p;return d.remove(p),s[M?"unshift":"push"](y),rr(),y},remove:function(p,g){~(g=s.indexOf(p))&&s.splice(g,1)&&m>=g&&m--},_listeners:s},d}(),rr=function(){return!Fr&&Ue.wake()},Ct={},k_=/^[\d.\-M][\d.\-,\s]/,B_=/["']/g,V_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(B_,"").trim():+c,i=l.substr(s+1).trim();return e},G_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},W_=function(t){var e=(t+"").split("("),n=Ct[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[V_(e[1])]:G_(t).split(",").map(Qc)):Ct._CE&&k_.test(t)?Ct._CE("",t):n},_u=function(t){return function(e){return 1-t(1-e)}},xu=function o(t,e){for(var n=t._first,i;n;)n instanceof Te?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},gi=function(t,e){return t&&(qt(t)?t:Ct[t]||W_(t))||e},wi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ce(t,function(s){Ct[s]=Ge[s]=r,Ct[a=s.toLowerCase()]=n;for(var l in r)Ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ct[s+"."+l]=r[l]}),r},vu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ca=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Wa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*__((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:vu(s);return r=Wa/r,l.config=function(c,u){return o(t,c,u)},l},La=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:vu(n);return i.config=function(r){return o(t,r)},i};Ce("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;wi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;wi("Elastic",Ca("in"),Ca("out"),Ca());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};wi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);wi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});wi("Circ",function(o){return-(Gc(1-o*o)-1)});wi("Sine",function(o){return o===1?1:-g_(o*p_)+1});wi("Back",La("in"),La("out"),La());Ct.SteppedEase=Ct.steps=Ge.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Bt;return function(s){return((i*Xr(0,a,s)|0)+r)*n}}};er.ease=Ct["quad.out"];Ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return vo+=o+","+o+"Params,"});var yu=function(t,e){this.id=m_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Kc,this.set=e?e.getSetter:wo},sr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ir(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Fr||Ue.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ir(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(rr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ns(this,n),!r._dp||r.parent||nu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ec(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ec(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?nr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?As(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(Xr(-Math.abs(this._delay),this._tDur,i),!0),zs(this),w_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ae(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?As(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=y_);var i=ge;return ge=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ge=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime($e(this,n),Ae(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ae(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Bt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=qt(n)?n:tu,s=function(){var c=i.then;i.then=null,qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){Sr(this)},o}();en(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var Te=function(o){Vc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ae(n.sortChildren),Ht&&hn(n.parent||Ht,En(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&iu(En(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Er(0,arguments,this),this},e.from=function(i,r,a){return Er(1,arguments,this),this},e.fromTo=function(i,r,a,s){return Er(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Tr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new re(i,r,$e(this,a),1),this},e.call=function(i,r,a){return hn(this,re.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new re(i,a,$e(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Tr(a).immediateRender=Ae(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,d){return s.startAt=a,Tr(s).immediateRender=Ae(s.immediateRender),this.staggerTo(i,r,s,l,c,u,d)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:de(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,m,_,f,p,g,M,y,b,v,A,L;if(this!==Ht&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),h=u,b=this._start,y=this._ts,g=!y,d&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(h=de(u%p),u===l?(f=this._repeat,h=c):(f=~~(u/p),f&&f===u/p&&(h=c,f--),h>c&&(h=c)),v=nr(this._tTime,p),!s&&this._tTime&&v!==f&&this._tTime-v*p-this._dur<=0&&(v=f),A&&f&1&&(h=c-h,L=1),f!==v&&!this._lock){var x=A&&v&1,w=x===(A&&f&1);if(f<v&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(L?0:de(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;xu(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=C_(this,de(s),de(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&!r&&!f&&(Qe(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=-Bt);break}}m=_}else{m=this._last;for(var P=i<0?i:h;m;){if(_=m._prev,(m._act||P<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,a||ge&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=P?-Bt:Bt);break}}m=_}}if(M&&!r&&(this.pause(),M.render(h>=s?0:-Bt)._zTime=h>=s?1:-1,this._ts))return this._start=b,zs(this),this.render(i,r,a);this._onUpdate&&!r&&Qe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Qe(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Pn(r)||(r=$e(this,r,i)),!(i instanceof sr)){if(_e(i))return i.forEach(function(s){return a.add(s,r)}),this;if(he(i))return this.addLabel(i,r);if(qt(i))i=re.delayedCall(0,i);else return this}return this!==i?hn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ke);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof re?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return he(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(Os(this,i),i===this._recent&&(this._recent=this._last),mi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(Ue.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=$e(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=re.delayedCall(0,r||Rr,a);return s.data="isPause",this._hasPause=1,hn(this,s,$e(this,i))},e.removePause=function(i){var r=this._first;for(i=$e(this,i);r;)r._start===i&&r.data==="isPause"&&Wn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)zn!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Je(i),l=this._first,c=Pn(r),u;l;)l instanceof re?M_(l._targets,s)&&(c?(!zn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=$e(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,_=re.to(a,en({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Bt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ir(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,d||[])}},r));return h?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,en({startAt:{time:$e(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ic(this,$e(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ic(this,$e(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Bt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return mi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mi(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=Ke,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,hn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ir(a,a===Ht&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ht._ts&&(Jc(Ht,As(i,Ht)),Zc=Ue.frame),Ue.frame>=Ql){Ql+=Ve.autoSleep||120;var r=Ht._first;if((!r||!r._ts)&&Ve.autoSleep&&Ue._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ue.sleep()}}},t}(sr);en(Te.prototype,{_lock:0,_hasPause:0,_forcing:0});var H_=function(t,e,n,i,r,a,s){var l=new Le(this._pt,t,e,0,1,Eu,null,r),c=0,u=0,d,h,m,_,f,p,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ir(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),h=n.match(Ta)||[];d=Ta.exec(i);)_=d[0],f=i.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:_.charAt(1)==="="?Yi(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Ta.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Xc.test(i)||g)&&(l.e=0),this._pt=l,l},Mo=function(t,e,n,i,r,a,s,l,c,u){qt(i)&&(i=i(r||0,t,a));var d=t[e],h=n!=="get"?n:qt(d)?c?t[e.indexOf("set")||!qt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=qt(d)?c?j_:wu:So,_;if(he(i)&&(~i.indexOf("random(")&&(i=Ir(i)),i.charAt(1)==="="&&(_=Yi(h,i)+(me(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Ja)return!isNaN(h*i)&&i!==""?(_=new Le(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?K_:Tu,0,m),c&&(_.fp=c),s&&_.modifier(s,this,t),this._pt=_):(!d&&!(e in t)&&_o(e,i),H_.call(this,t,e,h,i,m,l||Ve.stringFilter,c))},X_=function(t,e,n,i,r){if(qt(t)&&(t=Ar(t,r,e,n,i)),!xn(t)||t.style&&t.nodeType||_e(t)||Wc(t))return he(t)?Ar(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=Ar(t[s],r,e,n,i);return a},Mu=function(t,e,n,i,r,a){var s,l,c,u;if(ze[t]&&(s=new ze[t]).init(r,s.rawVars?e[t]:X_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Le(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Xi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},zn,Ja,bo=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,_=i.keyframes,f=i.autoRevert,p=t._dur,g=t._startAt,M=t._targets,y=t.parent,b=y&&y.data==="nested"?y.vars.targets:M,v=t._overwrite==="auto"&&!fo,A=t.timeline,L,x,w,P,U,Z,I,R,k,j,Y,V,tt;if(A&&(!_||!r)&&(r="none"),t._ease=gi(r,er.ease),t._yEase=m?_u(gi(m===!0?r:m,er.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(R=M[0]?pi(M[0]).harness:0,V=R&&i[R.prop],L=Es(i,xo),g&&(g._zTime<0&&g.progress(1),e<0&&h&&s&&!f?g.render(-1,!0):g.revert(h&&p?xs:v_),g._lazy=0),a){if(Wn(t._startAt=re.set(M,en({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!g&&Ae(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ge||!s&&!f)&&t._startAt.revert(xs),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!g){if(e&&(s=!1),w=en({overwrite:!1,data:"isFromStart",lazy:s&&!g&&Ae(l),immediateRender:s,stagger:0,parent:y},L),V&&(w[R.prop]=V),Wn(t._startAt=re.set(M,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ge?t._startAt.revert(xs):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Bt,Bt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ae(l)||l&&!p,x=0;x<M.length;x++){if(U=M[x],I=U._gsap||yo(M)[x]._gsap,t._ptLookup[x]=j={},qa[I.id]&&Bn.length&&Ts(),Y=b===M?x:b.indexOf(U),R&&(k=new R).init(U,V||L,t,Y,b)!==!1&&(t._pt=P=new Le(t._pt,U,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(K){j[K]=P}),k.priority&&(Z=1)),!R||V)for(w in L)ze[w]&&(k=Mu(w,L,t,Y,U,b))?k.priority&&(Z=1):j[w]=P=Mo.call(t,U,w,"get",L[w],Y,b,0,i.stringFilter);t._op&&t._op[x]&&t.kill(U,t._op[x]),v&&t._pt&&(zn=t,Ht.killTweensOf(U,j,t.globalTime(e)),tt=!t.parent,zn=0),t._pt&&l&&(qa[I.id]=1)}Z&&Au(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,_&&e<=0&&A.render(Ke,!0,!0)},q_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,d,h;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(c=d[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Ja=1,t.vars[e]="+=0",bo(t,s),Ja=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Yt(n)+me(u.e)),u.b&&(u.b=c.s+me(u.b))},$_=function(t,e){var n=t[0]?pi(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=bi({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},Y_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(_e(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},Ar=function(t,e,n,i,r){return qt(t)?t.call(e,n,i,r):he(t)&&~t.indexOf("random(")?Ir(t):t},bu=vo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Su={};Ce(bu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Su[o]=1});var re=function(o){Vc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Tr(i))||this;var l=s.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,f=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,M=i.parent||Ht,y=(_e(n)||Wc(n)?Pn(n[0]):"length"in i)?[n]:Je(n),b,v,A,L,x,w,P,U;if(s._targets=y.length?yo(y):ws("GSAP target "+n+" not found. https://greensock.com",!Ve.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||h||ps(c)||ps(u)){if(i=s.vars,b=s.timeline=new Te({data:"nested",defaults:f||{},targets:M&&M.data==="nested"?M.vars.targets:y}),b.kill(),b.parent=b._dp=En(s),b._start=0,h||ps(c)||ps(u)){if(L=y.length,P=h&&ou(h),xn(h))for(x in h)~bu.indexOf(x)&&(U||(U={}),U[x]=h[x]);for(v=0;v<L;v++)A=Es(i,Su),A.stagger=0,g&&(A.yoyoEase=g),U&&bi(A,U),w=y[v],A.duration=+Ar(c,En(s),v,w,y),A.delay=(+Ar(u,En(s),v,w,y)||0)-s._delay,!h&&L===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),b.to(w,A,P?P(v,w,y):0),b._ease=Ct.none;b.duration()?c=u=0:s.timeline=0}else if(_){Tr(en(b.vars.defaults,{ease:"none"})),b._ease=gi(_.ease||i.ease||"none");var Z=0,I,R,k;if(_e(_))_.forEach(function(j){return b.to(y,j,">")}),b.duration();else{A={};for(x in _)x==="ease"||x==="easeEach"||Y_(x,_[x],A,_.easeEach);for(x in A)for(I=A[x].sort(function(j,Y){return j.t-Y.t}),Z=0,v=0;v<I.length;v++)R=I[v],k={ease:R.e,duration:(R.t-(v?I[v-1].t:0))/100*c},k[x]=R.v,b.to(y,k,Z),Z+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||s.duration(c=b.duration())}else s.timeline=0;return m===!0&&!fo&&(zn=En(s),Ht.killTweensOf(y),zn=0),hn(M,En(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!c&&!_&&s._start===de(M._time)&&Ae(d)&&T_(En(s))&&M.data!=="nested")&&(s._tTime=-Bt,s.render(Math.max(0,-u)||0)),p&&iu(En(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Bt&&!u?l:i<Bt?0:i,h,m,_,f,p,g,M,y,b;if(!c)A_(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,y=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,a);if(h=de(d%f),d===l?(_=this._repeat,h=c):(_=~~(d/f),_&&_===d/f&&(h=c,_--),h>c&&(h=c)),g=this._yoyo&&_&1,g&&(b=this._yEase,h=c-h),p=nr(this._tTime,f),h===s&&!a&&this._initted)return this._tTime=d,this;_!==p&&(y&&this._yEase&&xu(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(de(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(ru(this,u?i:h,a,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!s&&!r&&!_&&(Qe(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:!h&&g?-Bt:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&$a(this,i,r,a),Qe(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Qe(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&$a(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Wn(this,1),!r&&!(u&&!s)&&(d||s||g)&&(Qe(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Fr||Ue.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||bo(this,l),c=this._ease(l/this._dur),q_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Ns(this,0),this.parent||eu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Sr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zn&&zn.vars.overwrite!==!0)._first||Sr(this),this.parent&&a!==this.timeline.totalDuration()&&ir(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Je(i):s,c=this._ptLookup,u=this._pt,d,h,m,_,f,p,g;if((!r||r==="all")&&S_(s,l))return r==="all"&&(this._pt=0),Sr(this);for(d=this._op=this._op||[],r!=="all"&&(he(r)&&(f={},Ce(r,function(M){return f[M]=1}),r=f),r=$_(s,r)),g=s.length;g--;)if(~l.indexOf(s[g])){h=c[g],r==="all"?(d[g]=r,_=h,m={}):(m=d[g]=d[g]||{},_=r);for(f in _)p=h&&h[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Os(this,p,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&Sr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Er(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return Er(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ht.killTweensOf(i,r,a)},t}(sr);en(re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ce("staggerTo,staggerFrom,staggerFromTo",function(o){re[o]=function(){var t=new Te,e=ja.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var So=function(t,e,n){return t[e]=n},wu=function(t,e,n){return t[e](n)},j_=function(t,e,n,i){return t[e](i.fp,n)},Z_=function(t,e,n){return t.setAttribute(e,n)},wo=function(t,e){return qt(t[e])?wu:po(t[e])&&t.setAttribute?Z_:So},Tu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},K_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Eu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},To=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},J_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},Q_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Os(this,e,"_pt"):e.dep||(n=1),e=i;return!n},t0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Au=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Le=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Tu,this.d=l||this,this.set=c||So,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=t0,this.m=n,this.mt=r,this.tween=i},o}();Ce(vo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return xo[o]=1});Ge.TweenMax=Ge.TweenLite=re;Ge.TimelineLite=Ge.TimelineMax=Te;Ht=new Te({sortChildren:!1,defaults:er,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ve.stringFilter=gu;var ar=[],ys={},e0=[],sc=0,Pa=function(t){return(ys[t]||e0).map(function(e){return e()})},Qa=function(){var t=Date.now(),e=[];t-sc>2&&(Pa("matchMediaInit"),ar.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Ye.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Pa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),sc=t,Pa("matchMedia"))},Cu=function(){function o(e,n){this.selector=n&&Za(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){qt(n)&&(r=i,i=n,n=qt);var a=this,s=function(){var c=Jt,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Za(r)),Jt=a,d=i.apply(a,arguments),qt(d)&&a._r.push(d),Jt=c,a.selector=u,a.isReverted=!1,d};return a.last=s,n===qt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof re&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof sr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=ar.indexOf(this);~s&&ar.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),n0=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){xn(n)||(n={matches:n});var a=new Cu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ye.matchMedia(n[c]),l&&(ar.indexOf(a)<0&&ar.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Qa):l.addEventListener("change",Qa)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Cs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return fu(i)})},timeline:function(t){return new Te(t)},getTweensOf:function(t,e){return Ht.getTweensOf(t,e)},getProperty:function(t,e,n,i){he(t)&&(t=Je(t)[0]);var r=pi(t||{}).get,a=n?tu:Qc;return n==="native"&&(n=""),t&&(e?a((ze[e]&&ze[e].get||r)(t,e,n,i)):function(s,l,c){return a((ze[s]&&ze[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=Je(t),t.length>1){var i=t.map(function(u){return Pe.quickSetter(u,e,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}t=t[0]||{};var a=ze[e],s=pi(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;Xi._pt=0,d.init(t,n?u+n:u,Xi,0,[t]),d.render(1,d),Xi._pt&&To(1,Xi)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Pe.to(t,bi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Ht.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gi(t.ease,er.ease)),tc(er,t||{})},config:function(t){return tc(Ve,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ze[s]&&!Ge[s]&&ws(e+" effect requires "+s+" plugin.")}),Ea[e]=function(s,l,c){return n(Je(s),en(l||{},r),c)},a&&(Te.prototype[e]=function(s,l,c){return this.add(Ea[e](s,xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ct[t]=gi(e)},parseEase:function(t,e){return arguments.length?gi(t,e):Ct},getById:function(t){return Ht.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Te(t),i,r;for(n.smoothChildTiming=Ae(t.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)r=i._next,(e||!(!i._dur&&i instanceof re&&i.vars.onComplete===i._targets[0]))&&hn(n,i,i._start-i._delay),i=r;return hn(Ht,n,0),n},context:function(t,e){return t?new Cu(t,e):Jt},matchMedia:function(t){return new n0(t)},matchMediaRefresh:function(){return ar.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Qa()},addEventListener:function(t,e){var n=ys[t]||(ys[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ys[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:O_,wrapYoyo:z_,distribute:ou,random:cu,snap:lu,normalize:F_,getUnit:me,clamp:P_,splitColor:pu,toArray:Je,selector:Za,mapRange:hu,pipe:R_,unitize:I_,interpolate:N_,shuffle:au},install:Yc,effects:Ea,ticker:Ue,updateRoot:Te.updateRoot,plugins:ze,globalTimeline:Ht,core:{PropTween:Le,globals:jc,Tween:re,Timeline:Te,Animation:sr,getCache:pi,_removeLinkedListItem:Os,reverting:function(){return ge},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return fo=t}}};Ce("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Cs[o]=re[o]});Ue.add(Te.updateRoot);Xi=Cs.to({},{duration:0});var i0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},r0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=i0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Da=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(he(r)&&(l={},Ce(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}r0(s,r)}}}},Pe=Cs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ge?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Da("roundProps",Ka),Da("modifiers"),Da("snap",lu))||Cs;re.version=Te.version=Pe.version="3.11.5";$c=1;mo()&&rr();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ac,Nn,ji,Eo,hi,oc,Ao,s0=function(){return typeof window<"u"},Dn={},oi=180/Math.PI,Zi=Math.PI/180,Vi=Math.atan2,lc=1e8,Co=/([A-Z])/g,a0=/(left|right|width|margin|padding|x)/i,o0=/[\s,\(]\S/,fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},to=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},l0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},c0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},u0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Lu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},h0=function(t,e,n){return t.style[e]=n},d0=function(t,e,n){return t.style.setProperty(e,n)},f0=function(t,e,n){return t._gsap[e]=n},p0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},m0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},g0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Xt="transform",ln=Xt+"Origin",_0=function o(t,e){var n=this,i=this.target,r=i.style;if(t in Dn){if(this.tfm=this.tfm||{},t!=="transform")t=fn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=An(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:An(i,t);else return fn.transform.split(",").forEach(function(a){return o.call(n,a,e)});if(this.props.indexOf(Xt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,e,"")),t=Xt}(r||e)&&this.props.push(t,e,r[t])},Du=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},x0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Co,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Ao(),(!r||!r.isStart)&&!n[Xt]&&(Du(n),i.uncache=1)}},Ru=function(t,e){var n={target:t,props:[],revert:x0,save:_0};return t._gsap||Pe.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Iu,eo=function(t,e){var n=Nn.createElementNS?Nn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Nn.createElement(t);return n.style?n:Nn.createElement(t)},_n=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Co,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,or(e)||e,1)||""},cc="O,Moz,ms,Ms,Webkit".split(","),or=function(t,e,n){var i=e||hi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(cc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?cc[a]:"")+t},no=function(){s0()&&window.document&&(ac=window,Nn=ac.document,ji=Nn.documentElement,hi=eo("div")||{style:{}},eo("div"),Xt=or(Xt),ln=Xt+"Origin",hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Iu=!!or("perspective"),Ao=Pe.core.reverting,Eo=1)},Ra=function o(t){var e=eo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(ji.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ji.removeChild(e),this.style.cssText=r,a},uc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Fu=function(t){var e;try{e=t.getBBox()}catch{e=Ra.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ra||(e=Ra.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+uc(t,["x","cx","x1"])||0,y:+uc(t,["y","cy","y1"])||0,width:0,height:0}:e},Ou=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fu(t))},Or=function(t,e){if(e){var n=t.style;e in Dn&&e!==ln&&(e=Xt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Co,"-$1").toLowerCase())):n.removeAttribute(e)}},Un=function(t,e,n,i,r,a){var s=new Le(t._pt,e,n,0,1,a?Pu:Lu);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},hc={deg:1,rad:1,turn:1},v0={grid:1,flex:1},Hn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=hi.style,l=a0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",_,f,p,g;return i===a||!r||hc[i]||hc[a]?r:(a!=="px"&&!h&&(r=o(t,e,n,"px")),g=t.getCTM&&Ou(t),(m||a==="%")&&(Dn[e]||~e.indexOf("adius"))?(_=g?t.getBBox()[l?"width":"height"]:t[u],Yt(m?r/_*d:r/100*_)):(s[l?"width":"height"]=d+(h?a:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Nn||!f.appendChild)&&(f=Nn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===Ue.time&&!p.uncache?Yt(r/p.width*d):((m||a==="%")&&!v0[_n(f,"display")]&&(s.position=_n(t,"position")),f===t&&(s.position="static"),f.appendChild(hi),_=hi[u],f.removeChild(hi),s.position="absolute",l&&m&&(p=pi(f),p.time=Ue.time,p.width=f[u]),Yt(h?_*r/d:_&&r?d/_*r:0))))},An=function(t,e,n,i){var r;return Eo||no(),e in fn&&e!=="transform"&&(e=fn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Dn[e]&&e!=="transform"?(r=Nr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ps(_n(t,ln))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ls[e]&&Ls[e](t,e,n)||_n(t,e)||Kc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Hn(t,e,r,n)+n:r},y0=function(t,e,n,i){if(!n||n==="none"){var r=or(e,t,1),a=r&&_n(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var s=new Le(this._pt,t.style,e,0,1,Eu),l=0,c=0,u,d,h,m,_,f,p,g,M,y,b,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=_n(t,e)||i,t.style[e]=n),u=[n,i],gu(u),n=u[0],i=u[1],h=n.match(Hi)||[],v=i.match(Hi)||[],v.length){for(;d=Hi.exec(i);)p=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(f=h[c++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),p.charAt(1)==="="&&(p=Yi(m,p)+b),g=parseFloat(p),y=p.substr((g+"").length),l=Hi.lastIndex-y.length,y||(y=y||Ve.units[e]||b,l===i.length&&(i+=y,s.e+=y)),b!==y&&(m=Hn(t,e,f,y)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:g-m,m:_&&_<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?Pu:Lu;return Xc.test(i)&&(s.e=0),this._pt=s,s},dc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},M0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dc[n]||n,e[1]=dc[i]||i,e.join(" ")},b0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Dn[s]&&(l=1,s=s==="transformOrigin"?ln:Xt),Or(n,s);l&&(Or(n,Xt),a&&(a.svg&&n.removeAttribute("transform"),Nr(n,1),a.uncache=1,Du(i)))}},Ls={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Le(t._pt,e,n,0,0,b0);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},zr=[1,0,0,1,0,0],zu={},Nu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fc=function(t){var e=_n(t,Xt);return Nu(e)?zr:e.substr(7).match(Hc).map(Yt)},Lo=function(t,e){var n=t._gsap||pi(t),i=t.style,r=fc(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?zr:r):(r===zr&&!t.offsetParent&&t!==ji&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,ji.appendChild(t)),r=fc(t),l?i.display=l:Or(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):ji.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},io=function(t,e,n,i,r,a){var s=t._gsap,l=r||Lo(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,d=s.xOffset||0,h=s.yOffset||0,m=l[0],_=l[1],f=l[2],p=l[3],g=l[4],M=l[5],y=e.split(" "),b=parseFloat(y[0])||0,v=parseFloat(y[1])||0,A,L,x,w;n?l!==zr&&(L=m*p-_*f)&&(x=b*(p/L)+v*(-f/L)+(f*M-p*g)/L,w=b*(-_/L)+v*(m/L)-(m*M-_*g)/L,b=x,v=w):(A=Fu(t),b=A.x+(~y[0].indexOf("%")?b/100*A.width:b),v=A.y+(~(y[1]||y[0]).indexOf("%")?v/100*A.height:v)),i||i!==!1&&s.smooth?(g=b-c,M=v-u,s.xOffset=d+(g*m+M*f)-g,s.yOffset=h+(g*_+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[ln]="0px 0px",a&&(Un(a,s,"xOrigin",c,b),Un(a,s,"yOrigin",u,v),Un(a,s,"xOffset",d,s.xOffset),Un(a,s,"yOffset",h,s.yOffset)),t.setAttribute("data-svg-origin",b+" "+v)},Nr=function(t,e){var n=t._gsap||new yu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=_n(t,ln)||"0",u,d,h,m,_,f,p,g,M,y,b,v,A,L,x,w,P,U,Z,I,R,k,j,Y,V,tt,K,B,G,Q,J,rt;return u=d=h=f=p=g=M=y=b=0,m=_=1,n.svg=!!(t.getCTM&&Ou(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),L=Lo(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),io(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,L)),v=n.xOrigin||0,A=n.yOrigin||0,L!==zr&&(U=L[0],Z=L[1],I=L[2],R=L[3],u=k=L[4],d=j=L[5],L.length===6?(m=Math.sqrt(U*U+Z*Z),_=Math.sqrt(R*R+I*I),f=U||Z?Vi(Z,U)*oi:0,M=I||R?Vi(I,R)*oi+f:0,M&&(_*=Math.abs(Math.cos(M*Zi))),n.svg&&(u-=v-(v*U+A*I),d-=A-(v*Z+A*R))):(rt=L[6],Q=L[7],K=L[8],B=L[9],G=L[10],J=L[11],u=L[12],d=L[13],h=L[14],x=Vi(rt,G),p=x*oi,x&&(w=Math.cos(-x),P=Math.sin(-x),Y=k*w+K*P,V=j*w+B*P,tt=rt*w+G*P,K=k*-P+K*w,B=j*-P+B*w,G=rt*-P+G*w,J=Q*-P+J*w,k=Y,j=V,rt=tt),x=Vi(-I,G),g=x*oi,x&&(w=Math.cos(-x),P=Math.sin(-x),Y=U*w-K*P,V=Z*w-B*P,tt=I*w-G*P,J=R*P+J*w,U=Y,Z=V,I=tt),x=Vi(Z,U),f=x*oi,x&&(w=Math.cos(x),P=Math.sin(x),Y=U*w+Z*P,V=k*w+j*P,Z=Z*w-U*P,j=j*w-k*P,U=Y,k=V),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,g=180-g),m=Yt(Math.sqrt(U*U+Z*Z+I*I)),_=Yt(Math.sqrt(j*j+rt*rt)),x=Vi(k,j),M=Math.abs(x)>2e-4?x*oi:0,b=J?1/(J<0?-J:J):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Nu(_n(t,Xt)),Y&&t.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Yt(m),n.scaleY=Yt(_),n.rotation=Yt(f)+s,n.rotationX=Yt(p)+s,n.rotationY=Yt(g)+s,n.skewX=M+s,n.skewY=y+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ln]=Ps(c)),n.xOffset=n.yOffset=0,n.force3D=Ve.force3D,n.renderTransform=n.svg?w0:Iu?Uu:S0,n.uncache=0,n},Ps=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ia=function(t,e,n){var i=me(e);return Yt(parseFloat(e)+parseFloat(Hn(t,"x",n+"px",i)))+i},S0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Uu(t,e)},ii="0deg",vr="0px",ri=") ",Uu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,_=n.scaleX,f=n.scaleY,p=n.transformPerspective,g=n.force3D,M=n.target,y=n.zOrigin,b="",v=g==="auto"&&t&&t!==1||g===!0;if(y&&(d!==ii||u!==ii)){var A=parseFloat(u)*Zi,L=Math.sin(A),x=Math.cos(A),w;A=parseFloat(d)*Zi,w=Math.cos(A),a=Ia(M,a,L*w*-y),s=Ia(M,s,-Math.sin(A)*-y),l=Ia(M,l,x*w*-y+y)}p!==vr&&(b+="perspective("+p+ri),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(v||a!==vr||s!==vr||l!==vr)&&(b+=l!==vr||v?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+ri),c!==ii&&(b+="rotate("+c+ri),u!==ii&&(b+="rotateY("+u+ri),d!==ii&&(b+="rotateX("+d+ri),(h!==ii||m!==ii)&&(b+="skew("+h+", "+m+ri),(_!==1||f!==1)&&(b+="scale("+_+", "+f+ri),M.style[Xt]=b||"translate(0, 0)"},w0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,_=n.xOrigin,f=n.yOrigin,p=n.xOffset,g=n.yOffset,M=n.forceCSS,y=parseFloat(a),b=parseFloat(s),v,A,L,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zi,c*=Zi,v=Math.cos(l)*d,A=Math.sin(l)*d,L=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Zi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,A*=w)),v=Yt(v),A=Yt(A),L=Yt(L),x=Yt(x)):(v=d,x=h,A=L=0),(y&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(y=Hn(m,"x",a,"px"),b=Hn(m,"y",s,"px")),(_||f||p||g)&&(y=Yt(y+_-(_*v+f*L)+p),b=Yt(b+f-(_*A+f*x)+g)),(i||r)&&(w=m.getBBox(),y=Yt(y+i/100*w.width),b=Yt(b+r/100*w.height)),w="matrix("+v+","+A+","+L+","+x+","+y+","+b+")",m.setAttribute("transform",w),M&&(m.style[Xt]=w)},T0=function(t,e,n,i,r){var a=360,s=he(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?oi:1),c=l-i,u=i+c+"deg",d,h;return s&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*lc)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*lc)%a-~~(c/a)*a)),t._pt=h=new Le(t._pt,e,n,i,c,l0),h.e=u,h.u="deg",t._props.push(n),h},pc=function(t,e){for(var n in e)t[n]=e[n];return t},E0=function(t,e,n){var i=pc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,d,h,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xt]=e,s=Nr(n,1),Or(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],a[Xt]=e,s=Nr(n,1),a[Xt]=c);for(l in Dn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=me(c),_=me(u),d=m!==_?Hn(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Le(t._pt,s,l,d,h-d,to),t._pt.u=_||0,t._props.push(l));pc(s,i)};Ce("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});Ls[t>1?"border"+o:o]=function(s,l,c,u,d){var h,m;if(arguments.length<4)return h=a.map(function(_){return An(s,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,f){return m[_]=h[f]=h[f]||h[(f-1)/2|0]}),s.init(l,m,d)}});var ku={name:"css",register:no,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,d,h,m,_,f,p,g,M,y,b,v,A,L,x;Eo||no(),this.styles=this.styles||Ru(t),x=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(u=e[f],!(ze[f]&&Mu(f,e,n,i,t,r)))){if(m=typeof u,_=Ls[f],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ir(u)),_)_(this,t,f,u,n)&&(L=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",Vn.lastIndex=0,Vn.test(c)||(p=me(c),g=me(u)),g?p!==g&&(c=Hn(t,f,c,g)+g):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,f),a.push(f),x.push(f,0,s[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,t,r):l[f],he(c)&&~c.indexOf("random(")&&(c=Ir(c)),me(c+"")||(c+=Ve.units[f]||me(An(t,f))||""),(c+"").charAt(1)==="="&&(c=An(t,f))):c=An(t,f),h=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),f in fn&&(f==="autoAlpha"&&(h===1&&An(t,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,s.visibility),Un(this,s,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=fn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),y=f in Dn,y){if(this.styles.save(f),b||(v=t._gsap,v.renderTransform&&!e.parseTransform||Nr(t,e.parseTransform),A=e.smoothOrigin!==!1&&v.smooth,b=this._pt=new Le(this._pt,s,Xt,0,1,v.renderTransform,v,0,-1),b.dep=1),f==="scale")this._pt=new Le(this._pt,v,"scaleY",v.scaleY,(M?Yi(v.scaleY,M+d):d)-v.scaleY||0,to),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){x.push(ln,0,s[ln]),u=M0(u),v.svg?io(t,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==v.zOrigin&&Un(this,v,"zOrigin",v.zOrigin,g),Un(this,s,f,Ps(c),Ps(u)));continue}else if(f==="svgOrigin"){io(t,u,1,A,0,this);continue}else if(f in zu){T0(this,v,f,h,M?Yi(h,M+u):u);continue}else if(f==="smoothOrigin"){Un(this,v,"smooth",v.smooth,u);continue}else if(f==="force3D"){v[f]=u;continue}else if(f==="transform"){E0(this,u,t);continue}}else f in s||(f=or(f)||f);if(y||(d||d===0)&&(h||h===0)&&!o0.test(u)&&f in s)p=(c+"").substr((h+"").length),d||(d=0),g=me(u)||(f in Ve.units?Ve.units[f]:p),p!==g&&(h=Hn(t,f,c,g)),this._pt=new Le(this._pt,y?v:s,f,h,(M?Yi(h,M+d):d)-h,!y&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?u0:to),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=c0);else if(f in s)y0.call(this,t,f,c,M?M+u:u);else if(f in t)this.add(t,f,c||t[f],M?M+u:u,i,r);else if(f!=="parseTransform"){_o(f,u);continue}y||(f in s?x.push(f,0,s[f]):x.push(f,1,c||t[f])),a.push(f)}}L&&Au(this)},render:function(t,e){if(e.tween._time||!Ao())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:An,aliases:fn,getSetter:function(t,e,n){var i=fn[e];return i&&i.indexOf(",")<0&&(e=i),e in Dn&&e!==ln&&(t._gsap.x||An(t,"x"))?n&&oc===n?e==="scale"?p0:f0:(oc=n||{})&&(e==="scale"?m0:g0):t.style&&!po(t.style[e])?h0:~e.indexOf("-")?d0:wo(t,e)},core:{_removeProperty:Or,_getMatrix:Lo}};Pe.utils.checkPrefix=or;Pe.core.getStyleSaver=Ru;(function(o,t,e,n){var i=Ce(o+","+t+","+e,function(r){Dn[r]=1});Ce(t,function(r){Ve.units[r]="deg",zu[r]=1}),fn[i[13]]=o+","+t,Ce(n,function(r){var a=r.split(":");fn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ve.units[o]="px"});Pe.registerPlugin(ku);var Ms=Pe.registerPlugin(ku)||Pe;Ms.core.Tween;const Ds={x:0,y:0};window.addEventListener("mousemove",o=>{Ds.x=o.clientX/Ze.width-.5,Ds.y=o.clientY/Ze.height-.5});const We=new ho({width:300}),Xn={},jn=document.querySelector("canvas.webgl"),qr=new qg;qr.background=new Ft(4342338);let Bu=window.devicePixelRatio;jn.width=window.innerWidth*Bu;jn.height=window.innerHeight*Bu;jn.style.maxWidth=window.innerWidth+"px";jn.style.maxHeight=window.innerHeight+"px";const A0=jn.width,C0=jn.height;let yr,ms,mc,Vu,Gu,ro;const L0=o=>{const t=()=>{ms.isPlaying()?ms.pause():ms.play()};o.preload=()=>{ms=o.loadSound("./sound/song.mp3")},o.setup=()=>{mc=document.querySelector("#toggle-btn"),mc.addEventListener("click",()=>{t()}),yr=new p5.FFT},o.draw=()=>{yr.analyze();const e=yr.getEnergy("bass"),n=yr.getEnergy("mid"),i=yr.getEnergy("bass");Vu=o.map(e,0,255,-100,100),Gu=o.map(n,0,255,-200,200),ro=o.map(i,0,255,0,255)}};new p5(L0);const P0=new uo(1,100,100),D0=new Is(15,15,20,20);Xn.depthColor="#d57e43";Xn.surfaceColor="#2bda2e";const Qt=new Gn({vertexShader:d_,fragmentShader:f_,uniforms:{uTime:{value:0},rez:{value:[A0,C0]},mouse:{value:Ds},uBigWavesElevation:{value:.2},uBigWavesFrequency:{value:new F(4,4,4)},uBigWavesSpeed:{value:1.5},u_bass:{value:0},u_mid:{value:0},u_treble:{value:0},uSmallWavesElevation:{value:.002},uSmallWavesFrequency:{value:3},uSmallWavesSpeed:{value:.2},uSmallWavesIterations:{value:4},uDepthColor:{value:new Ft(Xn.depthColor)},uSurfaceColor:{value:new Ft(Xn.surfaceColor)},uColorOffset:{value:.08},uColorMultiplier:{value:5}},side:kr}),R0=new $g({color:4342338,side:kr});We.addColor(Xn,"depthColor").onChange(()=>{Qt.uniforms.uDepthColor.value.set(Xn.depthColor)});We.addColor(Xn,"surfaceColor").onChange(()=>{Qt.uniforms.uSurfaceColor.value.set(Xn.surfaceColor)});We.add(Qt.uniforms.uBigWavesElevation,"value").min(0).max(1).step(.001).name("uBigWavesElevation");We.add(Qt.uniforms.uBigWavesFrequency.value,"x").min(0).max(10).step(.001).name("uBigWavesFrequencyX");We.add(Qt.uniforms.uBigWavesFrequency.value,"y").min(0).max(10).step(.001).name("uBigWavesFrequencyY");We.add(Qt.uniforms.uBigWavesFrequency.value,"z").min(0).max(10).step(.001).name("uBigWavesFrequencyZ");We.add(Qt.uniforms.uBigWavesSpeed,"value").min(0).max(4).step(.001).name("uBigWavesSpeed");We.add(Qt.uniforms.uSmallWavesElevation,"value").min(0).max(1).step(.001).name("uSmallWavesElevation");We.add(Qt.uniforms.uSmallWavesFrequency,"value").min(0).max(30).step(.001).name("uSmallWavesFrequency");We.add(Qt.uniforms.uSmallWavesSpeed,"value").min(0).max(4).step(.001).name("uSmallWavesSpeed");We.add(Qt.uniforms.uSmallWavesIterations,"value").min(0).max(5).step(1).name("uSmallWavesIterations");We.add(Qt.uniforms.uColorOffset,"value").min(0).max(1).step(.001).name("uColorOffset");We.add(Qt.uniforms.uColorMultiplier,"value").min(0).max(10).step(.001).name("uColorMultiplier");const Us=new dn(P0,Qt),Po=new dn(D0,R0);Po.position.y=-1.5;Po.rotation.x=-Math.PI*.5;qr.add(Us,Po);const Ze={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ze.width=window.innerWidth,Ze.height=window.innerHeight,qn.aspect=Ze.width/Ze.height,qn.updateProjectionMatrix(),Ur.setSize(Ze.width,Ze.height),Ur.setPixelRatio(Math.min(window.devicePixelRatio,2))});const qn=new Ne(75,Ze.width/Ze.height,.1,100);qn.position.set(0,4,6);qr.add(qn);const cr=new Qg(qn,jn);cr.enableDamping=!0;cr.enableZoom=!0;cr.minPolarAngle=Math.PI*.25;cr.maxPolarAngle=Math.PI*.5;const I0=new Kg(16777215,.5),Do=new Zg(16777215,.5);Do.position.set(2,3,4);Do.lookAt(Us.position);qr.add(I0,Do);const Ur=new kc({canvas:jn});Ur.setSize(Ze.width,Ze.height);Ur.setPixelRatio(Math.min(window.devicePixelRatio,2));document.querySelector("#start").addEventListener("click",()=>{Ms.to(qn.position,{duration:2,x:-3,y:0,z:3,ease:"power3.inOut"}),Ms.to(Us.rotation,{duration:1,x:-3,y:0,z:3,ease:"power3.inOut"}),cr.addEventListener("end",()=>{Ms.killTweensOf(qn.rotation)})});const F0=new Jg,Wu=()=>{cr.update();let o=F0.getElapsedTime();Us.rotation.y=o*.5,Qt.uniforms.uTime.value=o,Qt.uniforms.mouse.value=Ds,Qt.uniforms.u_bass.value=Vu,Qt.uniforms.u_mid.value=Gu,Qt.uniforms.uDepthColor.value=new Ft(`hsl(${ro}, 100%, 50%)`),Qt.uniforms.uSurfaceColor.value=new Ft(`hsl(${ro+100}, 100%, 50%)`),Ur.render(qr,qn),window.requestAnimationFrame(Wu)};Wu();
//# sourceMappingURL=index-4a335da0.js.map
