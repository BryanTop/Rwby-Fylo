!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=17)}([function(e,t,o){e.exports=o.p+"images/c71bf7bf6985f3ac03fa893fb45bed38.svg"},function(e,t,o){e.exports=o.p+"images/376a8b95194fb33e0a203bf52f8cb467.svg"},function(e,t,o){e.exports=o.p+"images/e30b5cfdf57fca9fa66ac6e3af0ea346.png"},function(e,t,o){e.exports=o.p+"images/bb63956fe01de6ad8e7622bf44d33529.svg"},function(e,t,o){e.exports=o.p+"images/526544ae64c3d7a9cf06bc566728d2b9.png"},function(e,t,o){e.exports=o.p+"images/5f4b8b3e0d56ac7578b1468584142faf.svg"},function(e,t,o){e.exports=o.p+"images/ca8c71cfbd876e461e850fcdcf9c9b29.svg"},function(e,t,o){e.exports=o.p+"images/f558537850876022cbf1d99e525724f4.svg"},function(e,t,o){e.exports=o.p+"images/aedb3ae079501c43082669d8d427bf6b.svg"},function(e,t,o){e.exports=o.p+"images/99294b1f2757d664921ec643a982959a.png"},function(e,t,o){e.exports=o.p+"images/794c5a484aefc6409c3a4e7aceb10eee.svg"},function(e,t,o){e.exports=o.p+"images/b3515569886c2c451936553f5ba219f9.jpg"},function(e,t,o){e.exports=o.p+"images/35b4a108a499ded5e0dd0d19fe4b2d39.jpg"},function(e,t,o){e.exports=o.p+"images/e6d2c320fc2e31971e7e0d38fcaf6d74.jpg"},function(e,t,o){e.exports=o.p+"images/0f65814bd9f282828254e3382e223a57.svg"},function(e,t,o){e.exports=o.p+"images/47e54a44b879380ff8adb31f40249296.svg"},function(e,t,o){e.exports=o.p+"images/c90d96c2492a2d6f0863256f2bf9015d.svg"},function(e,t,o){"use strict";o.r(t);o(18),o(23),o(1),o(3),o(2),o(24),o(5),o(8),o(10),o(6),o(16),o(14),o(15),o(7),o(4),o(9),o(0),o(11),o(12),o(13)},function(e,t,o){var n=o(19),i=o(20);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function c(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function s(e,t){for(var o={},n=[],i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var f=c(l),v={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(r[f].references++,r[f].updater(v)):r.push({identifier:l,updater:g(v,t),references:1}),n.push(l)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function v(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function p(e,t,o){var n=o.css,i=o.media,a=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,m=0;function g(e,t){var o,n,i;if(t.singleton){var a=m++;o=u||(u=d(t)),n=v.bind(null,o,a,!1),i=v.bind(null,o,a,!0)}else o=d(t),n=p.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=c(o[n]);r[i].references--}for(var a=s(e,t),d=0;d<o.length;d++){var l=c(o[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=a}}}},function(e,t,o){var n=o(21),i=o(22),a=o(1),r=o(2),c=o(3);t=n(!1);var s=i(a),d=i(r),l=i(c);t.push([e.i,'body{background:#181f2a;font-family:"Open Sans";font-size:14px;margin:0;color:#fff;height:200em}.Btn{padding:10px 40px;border-radius:50px;background:#65e2d9;border:#65e2d9;color:#fff}.Btn:hover{color:#339ecc}header{background:#1c2431}#showcaseBgCurvy{background-image:url('+s+");background-size:cover;width:100vw;height:30em;position:relative;bottom:30em;z-index:1}nav{display:flex;margin:0 1em 1em 1em;padding:1em}nav .navChild{flex:4}nav .navbar{flex:1;padding:1em;margin:auto 2em}nav .navbar .navbarContent .navbarNav{display:flex !important;justify-content:space-between;list-style:none;display:inline}nav .navbar .navbarContent .navbarNav a:hover{color:#65e2d9;cursor:pointer}.showcase{position:relative;display:flex;flex-direction:column;margin:0 20em 0em 20em;z-index:2;padding:5em}.showcase .showcaseImg{display:flex;justify-content:center}.showcase .showcaseContent{display:flex;flex-direction:column;align-items:center;padding:5em;margin:0 5em;text-align:center}.mainContent{position:relative;bottom:30em;background:#181f2a;margin:auto;padding:2em 5em}#cards{display:flex;justify-content:space-evenly}#cards .cardHolder{width:35%}#cards .cardHolder .card{display:flex;flex-direction:column;align-items:center;text-align:center;padding:2.5em}#productivity{display:flex;align-items:center;margin:2.5em 5em;padding:2.5em}#productivity .productivityContent{display:flex;flex-direction:column;align-items:flex-start;width:70%;margin:0 5em}#productivity .productivityContent h2{font-size:30px;text-align:center;width:100%}#productivity .productivityContent a{color:#65e2d9}#reviewSection{background:url("+d+");background-repeat:no-repeat}#reviewSection .reviewCards{display:flex;margin:0;padding:2.5em 0.75em}#reviewSection .reviewCards .reviewCard{background:#202a3c;padding:2.5em;margin:0 1em}#reviewSection .reviewCards .reviewCard .reviewContent p{font-weight:400}#reviewSection .reviewCards .reviewCard .reviewPerson{display:flex}#reviewSection .reviewCards .reviewCard .reviewPerson img{border-radius:50%;width:50px;margin:10px}#reviewSection .reviewCards .reviewCard .reviewPerson div p:nth-child(1){font-weight:700}#reviewSection .reviewCards .reviewCard .reviewPerson div p:nth-child(2){font-weight:400;font-size:10px}#contactCard{margin:5em auto;padding:2.5em 5em;width:40%;background:#1c2431;position:relative;top:10em;z-index:1}#contactCard .contact{display:flex;flex-direction:column;align-items:center;text-align:center}#contactCard .contact h2{font-size:30px}#contactCard .contact div input{border-radius:50px;width:25em;height:2em}footer{height:40em;background:#0b1523;position:relative;bottom:35em;z-index:0}.footerContent{display:flex;justify-content:space-evenly;align-items:center;margin:1em 2.5em;height:inherit}.footerContent .footerLogo{flex:1}.footerContent .footerLogo .footerLogoContent{display:inline;display:flex;flex-direction:column;align-items:center;padding:20px}.footerContent .footerLogo .footerLogoContent div{display:flex;justify-content:flex-start}.footerContent .footerLogo .footerLogoContent div img{height:10px;position:relative;top:25px;left:120px}.footerContent .footerLogo .footerLogoContent div div{width:40%;margin:10px;position:relative;left:120px}.footerContent .footerLogo .footerLogoContent div div p{text-align:left}.footerContent .footerContact{flex:1}.footerContent .footerContact .footerContactContent{display:flex;flex-direction:column;align-items:center}.footerContent .footerContact .footerContactContent .contactPhone{display:flex}.footerContent .footerContact .footerContactContent .contactPhone img{margin:10px;height:20px}.footerContent .footerContact .footerContactContent .contactEmail{display:flex}.footerContent .footerContact .footerContactContent .contactEmail img{margin:10px;height:20px}.footerContent .footerNav{flex:1;height:inherit}.footerContent .footerNav .footerNavbarContent{display:flex;justify-content:space-around;height:inherit}.footerContent .footerNav .footerNavbarContent .navbarInnerContent{height:inherit}.footerContent .footerNav .footerNavbarContent .navbarInnerContent .footerNavbar{display:flex;flex-direction:column;justify-content:space-around;height:30%;position:relative;top:180px}.footerContent .footerNav .footerNavbarContent .navbarInnerContent .footerNavbar a{color:#fff;text-decoration:none}.footerContent .footerNav .footerNavbarContent .navbarInnerContent .footerNavbar a:hover{color:#65e2d9}.footerContent .footerSocial{flex:1}.footerContent .footerSocial .footerSocialInner{display:flex;justify-content:space-around;width:70%}.footerContent .footerSocial .footerSocialInner i{color:#fff}.footerContent .footerSocial .footerSocialInner i:hover{color:#65e2d9}.attributionSection{display:flex;justify-content:center;width:100vw;position:relative;bottom:35em}.attributionSection a{color:#fff}.attributionSection a:hover{color:#65e2d9}@media only screen and (max-width: 500px){#showcaseBgCurvy{background-image:url("+l+");height:15em;bottom:20em}.mainContent{bottom:20em;padding:5em 5em}nav .navChild{flex:1}nav .navbar{padding:1em 0}nav .navbar .navbarContent .navbarNav{justify-content:space-evenly}.showcase{margin:0 5em 0em 5em;padding:0}.showcase .showcaseImg{display:flex;justify-content:center}.showcase .showcaseImg img{width:20em}.showcase .showcaseContent{padding:0;margin:0 5em}#cards{display:block;width:100%;margin:auto}#cards .cardHolder{width:100%}#productivity{display:block;margin:1em 2.5em;padding:1em}#productivity .productivityImg img{width:20em}#productivity .productivityContent{width:100%;margin:0 2.5em}#reviewSection .reviewCards{display:block;margin:0.5em 1.25em;padding:1em 0}#reviewSection .reviewCards .reviewCard{padding:2.5em;margin:1em 1em}#contactCard{width:70%}#contactCard .contact div input{width:15em}footer{height:55em;padding-top:5em;bottom:25em}.footerContent{display:block;height:inherit}.footerContent .footerLogo{flex:1}.footerContent .footerLogo .footerLogoContent{display:inline;display:flex;flex-direction:column;align-items:center;padding:20px}.footerContent .footerLogo .footerLogoContent div{display:flex;justify-content:flex-start}.footerContent .footerLogo .footerLogoContent div img{height:10px;position:relative;top:25px;left:120px}.footerContent .footerLogo .footerLogoContent div div{width:40%;margin:10px;position:relative;left:120px}.footerContent .footerLogo .footerLogoContent div div p{text-align:left}.footerContent .footerContact{flex:1}.footerContent .footerContact .footerContactContent{display:flex;flex-direction:column;align-items:center}.footerContent .footerContact .footerContactContent .contactPhone{display:flex}.footerContent .footerContact .footerContactContent .contactPhone img{margin:10px;height:20px}.footerContent .footerContact .footerContactContent .contactEmail{display:flex}.footerContent .footerContact .footerContactContent .contactEmail img{margin:10px;height:20px}.footerContent .footerNav{flex:1;height:50%}.footerContent .footerNav .footerNavbarContent{display:flex;flex-direction:column;justify-content:flex-start;height:50%;width:25%;margin:auto}.footerContent .footerNav .footerNavbarContent .navbarInnerContent .footerNavbar{height:30%;top:20px}.footerContent .footerSocial{flex:1}.footerContent .footerSocial .footerSocialInner{display:flex;justify-content:center;width:100%}.footerContent .footerSocial .footerSocialInner i{margin:0 10px}.attributionSection{display:flex;justify-content:center;width:100vw;position:relative;bottom:25em}.attributionSection a{color:#fff}.attributionSection a:hover{color:#65e2d9}}\n",""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var i=(r=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([i]).join("\n")}var r,c,s;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&i[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),t.push(s))}},t}},function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,o){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="ie=edge"> <link rel=icon type=image/png sizes=32x32 href=./images/favicon-32x32.png> <link rel=stylesheet href=./src/styles/style.css> <script src=https://kit.fontawesome.com/e28f8925d0.js crossorigin=anonymous><\/script> <title>Frontend Mentor | Fylo landing page with dark theme and features grid</title> </head> <body> <header> <nav> <div class=navChild> <img src='+o(0)+" id=brandName alt=Fylo> </div> <div class=navbar> <div class=navbarContent> <div class=navbarNav> <a>Features</a> <a>Team</a> <a>Sign In</a> </div> </div> </div> </nav> <div class=showcase> <div class=child> <div class=showcaseImg> <img src="+o(4)+' alt="Intro Showcase"> </div> </div> <div class=showcaseChild> <div class=showcaseContent> <h1>All your files in one secure location, accessible anywhere.</h1> <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p> <button class=Btn>Get Started</button> </div> </div> </div> <div id=showcaseBgCurvy></div> </header> <div class=mainContent> <section id=cards> <div class=cardHolder> <div class=card> <img src='+o(5)+' alt="Access anywhere image"> <h3> Access your files, anywhere</h3> <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p> </div> <div class=card> <img src='+o(6)+" alt=Collaboration> <h3>Real-time collaboration</h3> <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p> </div> </div> <div class=cardHolder> <div class=card> <img src="+o(7)+' alt="Security Trust Image"> <h3>Security you can trust</h3> <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p> </div> <div class=card> <img src='+o(8)+' alt="Stroe any file image"> <h3>Store any type of file</h3> <p>Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p> </div> </div> </section> <section id=productivity> <div class=productivityChild> <div class=productivityImg> <img src='+o(9)+' alt="Stay productive image"> </div> </div> <div class=productivityChild> <div class=productivityContent> <h2>Stay productive, <br> wherever you are</h2> <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p> <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p> <a href="">See how Fylo works <img src='+o(10)+' alt="Arrow icon"></a> </div> </div> </section> <section id=reviewSection> <div class=reviewCards> <div class=reviewCard> <div class=review> <div class=reviewContent> <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p> </div> <div class=reviewPerson> <img src='+o(11)+' alt="profile image"> <div> <p>Satish Patel</p> <p>Founder & CEO, Huddle</p> </div> </div> </div> </div> <div class=reviewCard> <div class=review> <div class=reviewContent> <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p> </div> <div class=reviewPerson> <img src='+o(12)+' alt="profile image"> <div> <p>Bruce McKenzie</p> <p>Founder & CEO, Huddle</p> </div> </div> </div> </div> <div class=reviewCard> <div class=review> <div> <p class=reviewContent>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p> </div> <div class=reviewPerson> <img src='+o(13)+' alt="profile image"> <div> <p>Iva Boyd</p> <p>Founder & CEO, Huddle</p> </div> </div> </div> </div> </div> </section> <section id=contactCard> <div class=contact> <h2>Get early access today</h2> <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p> <div> <input type=text name="" id=""><button class=Btn type=submit>Get Started For Free</button> </div> </div> </section> </div> <footer> <div class=footerContent> <div class=footerLogo> <div class=footerLogoContent> <img src='+o(0)+" alt=fylo> <div> <img src="+o(14)+' alt="Location image"> <div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p> </div> </div> </div> </div> <div class=footerContact> <div class=footerContactContent> <div class=contactPhone> <img src='+o(15)+' alt="Phone image"> <p>+1-543-123-4567</p> </div> <div class=contactEmail> <img src='+o(16)+' alt="Email image"> <p>bryantop1326@gmail.com</p> </div> </div> </div> <div class=footerNav> <div class=footerNavbarContent> <div class=navbarInnerContent> <div class=footerNavbar> <div><a href="">About Us</a></div> <div><a href="">Jobs</a></div> <div><a href="">Press</a></div> <div><a href="">Blog</a></div> </div> </div> <div class=navbarInnerContent> <div class=footerNavbar> <div><a href=""> Contact Us</a></div> <div><a href="">Terms</a></div> <div><a href="">Privacy</a></div> </div> </div> </div> </div> <div class=footerSocial> <div class=footerSocialInner> <a href=""><i class="fab fa-facebook fa-2x"></i></a> <a href=""><i class="fab fa-twitter fa-2x"></i></a> <a href=""><i class="fab fa-instagram fa-2x"></i></a> </div> </div> </div> </footer> <div class=attributionSection> <p class=attribution> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target=_blank>Frontend Mentor</a>. Coded by <a href=#>Bryan Top AKA Rwby Panda</a>. </p> </div> </body> </html>'},function(e,t,o){e.exports=o.p+"images/a07f423b8bbf4a50c2c449b96795fcb6.png"}]);