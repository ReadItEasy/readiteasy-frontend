(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/readiteasy-frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"04f3":function(t,e,a){},1873:function(t,e,a){"use strict";var n=a("e55c"),r=a.n(n);r.a},"29c8":function(t,e,a){"use strict";var n=a("04f3"),r=a.n(n);r.a},"2e0a":function(t,e,a){"use strict";var n=a("3693"),r=a.n(n);r.a},3550:function(t,e,a){},3693:function(t,e,a){},4116:function(t,e,a){"use strict";var n=a("de60"),r=a.n(n);r.a},"434d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("4160"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar",{staticClass:"fixed-header"}),a("router-view",{staticClass:"content"})],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav header",attrs:{id:"nav"}},[a("router-link",{staticClass:"brand",attrs:{to:"/"}},[t._v("ReadItEasy")]),[a("Burger"),a("Sidebar",[a("nav",{staticClass:"sidebar-panel-nav"},[a("router-link",{attrs:{to:{name:"languages"}}},[t._v("Languages")]),t.loggedIn?[a("router-link",{attrs:{to:{name:"profile"}}},[t._v("Profile")]),a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])]:[a("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")]),a("router-link",{attrs:{to:{name:"register"}}},[t._v("Register")])]],2)])]],2)},i=[],c=a("5530"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("default",[t._m(0)])],2)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[a("span",{staticClass:"burger-bar burger-bar--1"}),a("span",{staticClass:"burger-bar burger-bar--2"}),a("span",{staticClass:"burger-bar burger-bar--3"})])}],d={computed:{isBurgerActive:function(){return this.$store.state.isNavOpen}},methods:{toggle:function(){this.$store.dispatch("toggleNav")}}},p=d,g=(a("ca77"),a("2877")),m=Object(g["a"])(p,u,l,!1,null,"29037d0b",null),f=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[t.isPanelOpen?a("div",{staticClass:"sidebar-backdrop",on:{click:t.closeSidebarPanel}}):t._e(),a("transition",{attrs:{name:"slidebar"}},[t.isPanelOpen?a("div",{staticClass:"sidebar-panel"},[t._t("default")],2):t._e()])],1)},v=[],b={computed:{isPanelOpen:function(){return this.$store.state.isNavOpen}},methods:{closeSidebarPanel:function(){this.$store.dispatch("toggleNav")}}},w=b,_=(a("ad93"),Object(g["a"])(w,h,v,!1,null,"ecedd2be",null)),k=_.exports,y=a("2f62"),x=Object(c["a"])({},Object(y["b"])(["loggedIn"])),C={components:{Burger:f,Sidebar:k},methods:{logout:function(){this.$store.dispatch("logout")}},computed:Object(c["a"])({},x)},S=C,N=(a("29c8"),Object(g["a"])(S,s,i,!1,null,"0314e748",null)),O=N.exports,L={components:{NavBar:O}},W=L,E=(a("034f"),Object(g["a"])(W,r,o,!1,null,null,null)),$=E.exports,I=(a("45fc"),a("8c4f")),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("ReadItEasy")]),a("p",[t._v(" Welcome to ReadItEasy, an app with the purpose of helping you read in a target language. Currently, we have just a few books in only chinese, but more content will arrive soon! ")]),a("p",[t._v(" Start reading right now with one of my favorite chinese books: "),a("router-link",{attrs:{to:{path:"/mandarin/book/活着/1"}}},[t._v("To Live")]),t._v(" by Hua Yu. ")],1),a("br"),a("p",[t._v(" If you create an account, you can save your known words. Unknown words will then appear in red, so you can see at a glance the words you don't yet know in a book. ")]),a("p",[t._v(" With this information, you can then evaluate if a particular book suits your level. This level is up to you. Some people like to have a smooth reading experience, so they target books where they know at least 98% of the words. Others are more obstinate and choose books where they barely know half of the words. For both cases, ReadItEasy can help you quickly look up definitions and statistics for a given word. ")])])},j=[],D={},R=D,K=Object(g["a"])(R,T,j,!1,null,"44674874",null),M=K.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"reader-tool"}},[a("v-touch",{on:{swiperight:t.doSomething}},[a("ReaderDrawer",{directives:[{name:"show",rawName:"v-show",value:t.showReaderDrawer,expression:"showReaderDrawer"}],attrs:{clickedWord:t.clickedWord,bookName:t.bookName,targetLanguage:t.targetLanguage}})],1),a("transition",{attrs:{name:"slide-fade"}},[a("div",{style:"tablet"===t.$mq||"mobile"===t.$mq?"no-resize":t.showReaderDrawer?"padding-left:10px;padding-right:310px":"padding-left:160px;padding-right:160px",attrs:{id:"reader-content"},on:{click:t.onClickHandler}},[a("h1",[t._v(t._s(t.bookName.replace(/_/g," ")))]),a("h2",[t._v("Chapter "+t._s(t.chapterNumber))]),a("div",[t.chapterNumber>1?a("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:t.bookName,targetLanguage:t.targetLanguage,chapterNumber:parseInt(t.chapterNumber)-1}}}},[a("span",{staticClass:"nav-chapter"},[t._v("previous chapter")])]):t._e(),a("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:t.bookName,targetLanguage:t.targetLanguage,chapterNumber:parseInt(t.chapterNumber)+1}}}},[a("span",[t._v("next chapter")])])],1),t.loggedIn?a("button",{on:{click:function(e){return t.switchStylingKnownWords()}}},[t._v(" button ")]):t._e(),a("div",{staticClass:"text-container",class:t.isActiveColor&&t.loggedIn?"active":""},t._l(t.chapterText,(function(e,n){return a("span",{key:n,attrs:{isKnown:t.$store.state.userKnownWordsDict[e.toLowerCase()],isPunct:t.isPunctDict[e],lemma:e.toLowerCase()},on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}},[t._v(t._s(e))])})),0),a("contextMenu",{attrs:{targetLanguage:t.targetLanguage}})],1)])],1)},P=[],B=a("bc3a"),H=a.n(B),q=a("323e"),G=a.n(q),F=H.a.create({baseURL:"https://readiteasy.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},xsrfHeaderName:"X-CSRFToken",xsrfCookieName:"XCSRF-TOKEN"});F.interceptors.request.use((function(t){return G.a.start(),t})),F.interceptors.response.use((function(t){return G.a.done(),t}));var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.viewMenu?a("div",{ref:"contextMenu",attrs:{id:"context-menu","target-word":t.targetWord}},[a("ul",[a("li",{on:{click:t.openWikt}},[t._v("See in wiktionary")]),t.loggedIn?[t.isKnown?a("li",{on:{click:t.toggleIsKnown}},[t._v("Remove from known words")]):a("li",{on:{click:t.toggleIsKnown}},[t._v("Add to known words")])]:t._e()],2)]):t._e()},U=[],X={name:"ContextMenu",props:{targetLanguage:{type:String}},data:function(){return{viewMenu:!1,targetWord:null,isKnown:null}},created:function(){this.$parent.$on("openContextMenu",this.openMenu),document.addEventListener("click",this.onWindowClick)},methods:{onWindowClick:function(t){if(this.viewMenu){var e=this.$refs.contextMenu;t.target.closest("#context-menu")!==e&&this.closeMenu()}},openMenu:function(t){var e=this;this.viewMenu=!0,this.targetWord=t.target.getAttribute("lemma"),this.isKnown=t.target.getAttribute("isKnown");var a=function(){var a=e.$refs.contextMenu;e.contextMenuDiv=a;var n=document.documentElement.clientWidth,r=document.documentElement.clientHeight,o=a.offsetWidth,s=a.offsetHeight,i=25,c=Math.min(n-(o+t.x+i),0),u=Math.min(r-(s+t.y+i),0);a.style.top=u<0?t.layerY-s+"px":t.layerY+u+"px",a.style.left=c<0?t.layerX-o+"px":t.layerX+c+"px"};setTimeout(a,0)},closeMenu:function(){this.viewMenu=!1,this.targetWord=null,this.isKnown=null},openWikt:function(){window.open("https://en.wiktionary.org/wiki/".concat(this.targetWord),"_blank"),this.closeMenu()},toggleIsKnown:function(){var t={};t["word"]=this.targetWord,t["targetLanguage"]=this.targetLanguage,this.$store.dispatch("toggleKnownWord",t),this.closeMenu()}},computed:Object(c["a"])({},x)},Y=X,z=(a("ed6b"),Object(g["a"])(Y,J,U,!1,null,"bb65e610",null)),V=z.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-fade"}},[a("div",{staticClass:"drawer",attrs:{id:"reader-drawer"}},[a("span",{staticClass:"clicked-word"},[t._v(t._s(t.clickedWord))]),a("div",{staticClass:"tab-header"},[a("a",{staticClass:"btn-tab",class:0==t.tab?"active":"",attrs:{tab:"0"},on:{click:t.btnTabClick}},[t._v("WORDS")]),a("a",{staticClass:"btn-tab",class:1==t.tab?"active":"",attrs:{tab:"1"},on:{click:t.btnTabClick}},[t._v("STATS")]),a("a",{staticClass:"btn-tab",class:2==t.tab?"active":"",attrs:{tab:"2"},on:{click:t.btnTabClick}},[t._v("SIMILAR")])]),a("div",{staticClass:"slide-container"},[a("transition",{attrs:{name:"slide"}},[0==t.tab?a("div",{key:0,staticClass:"slide-item"},["mandarin"==t.targetLanguage?t._l(t.processedWord,(function(t){return a("WordCardMandarin",{key:t.id,attrs:{word:t}})})):t._e(),"english"==t.targetLanguage?t._l(t.englishWords,(function(t,e){return a("WordCardEnglish",{key:e,attrs:{englishWord:t}})})):t._e()],2):t._e(),1==t.tab?a("div",{key:1,staticClass:"slide-item"},[a("table",[a("tr",[a("th"),a("th",[t._v("book")]),a("th",[t._v("corpus")])]),a("tr",[a("th",[t._v("rank")]),a("td",[t._v(t._s(t.wordBookStatistics.rank))]),a("td",[t._v(t._s(t.wordCorpusStatistics.rank))])]),a("tr",[a("th",[t._v("freq")]),a("td",[t._v(" "+t._s((1e6*t.wordBookStatistics.count/t.wordBookStatistics.n_tokens).toFixed(0))+" ")]),a("td",[t._v(" "+t._s((1e6*t.wordCorpusStatistics.count/t.wordCorpusStatistics.n_tokens).toFixed(0))+" ")])])])]):t._e(),2==t.tab?a("div",{key:2,staticClass:"slide-item"},[a("ol",t._l(t.wordSimilarWords.target_similar_words,(function(e,n){return a("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])],1)])])},Z=[],tt=(a("a4d3"),a("e01a"),a("d28b"),a("4de4"),a("caad"),a("2532"),a("3ca3"),a("1276"),H.a.create({baseURL:"http://fr.wiktionary.org/w/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},xsrfHeaderName:"X-CSRFToken",xsrfCookieName:"XCSRF-TOKEN"})),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"word-card container"},[a("span",{staticClass:"item1a simplified"},[t._v(t._s(t.word.simplified))]),a("span",{staticClass:"item1b traditional"},[t._v(t._s(t.word.traditional))]),a("span",{staticClass:"item2 pronunciation"},[t._v(t._s(t.word.pronunciation))]),a("ul",{staticClass:"item3"},t._l(t.word.definitions,(function(e){return a("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])},at=[],nt={props:["word"],data:function(){return{isKnown:!1}},methods:{toggleIsKnown:function(){this.$store.dispatch("toggleKnownWord",this.word.simplified),this.$forceUpdate()}},computed:Object(c["a"])({},x)},rt=nt,ot=(a("7283"),Object(g["a"])(rt,et,at,!1,null,"beb39ca6",null)),st=ot.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"word-card container"},[a("span",{staticClass:"item1a simplified"},[t._v(t._s(t.englishWord.POS))]),a("span",{staticClass:"item1b traditional"}),a("span",{staticClass:"item2 pronunciation"},[t._v(t._s(t.englishWord.pronunciation))]),a("ul",{staticClass:"item3"},t._l(t.englishWord.definitions,(function(e,n){return a("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])},ct=[],ut={props:["englishWord"],data:function(){return{isKnown:!1}},methods:{toggleIsKnown:function(){this.$store.dispatch("toggleKnownWord",this.word.simplified),this.$forceUpdate()}},computed:Object(c["a"])({},x),created:function(){console.log("created",this.englishWord)}},lt=ut,dt=(a("2e0a"),Object(g["a"])(lt,it,ct,!1,null,"ac0fbf6c",null)),pt=dt.exports,gt={components:{WordCardMandarin:st,WordCardEnglish:pt},props:{clickedWord:{type:String,required:!0},bookName:{type:String},targetLanguage:{type:String}},data:function(){return{processedWord:null,wordCorpusStatistics:{},wordBookStatistics:{},wordSimilarWords:{},tab:0,englishWords:[]}},watch:{clickedWord:function(t){var e=this;if("mandarin"==this.targetLanguage)F.get("/api/words/mandarin/",{params:{simplified:t}}).then((function(t){var a=t.data;e.processedWord=e.wordJSONToObject(a)})),F.get("/api/words/mandarin/word_corpus_statistics",{params:{word:t}}).then((function(t){var a=t.data;e.wordCorpusStatistics=a})),F.get("/api/words/mandarin/word_book_statistics",{params:{word:t,bookName:this.bookName,targetLanguage:this.targetLanguage}}).then((function(t){var a=t.data;e.wordBookStatistics=a})),F.get("/api/words/mandarin/word_similar_words",{params:{word:t}}).then((function(t){var a=t.data;e.wordSimilarWords=a}));else{this.englishWords=[];var a=function(t,e){var a=document.createElement("div"),n=[t];t=t.nextElementSibling;while(t){if(t.matches(e))break;n.push(t),t=t.nextElementSibling}for(var r=0,o=n;r<o.length;r++){var s=o[r];a.innerHTML+=s.outerHTML}return a};tt.get("api.php",{params:{action:"parse",format:"json",page:t,origin:"*"}}).then((function(t){var n=t.data,r=document.createElement("html");r.innerHTML=n.parse.text["*"];var o=r.querySelectorAll("div.mw-parser-output > h2"),s=!0,i=!1,c=void 0;try{for(var u,l=o[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var d=u.value;if(d.querySelectorAll("#Anglais.mw-headline").length)var p=a(d,"h2")}}catch(S){i=!0,c=S}finally{try{s||null==l.return||l.return()}finally{if(i)throw c}}var g=p.querySelectorAll("h3"),m=!0,f=!1,h=void 0;try{for(var v,b=g[Symbol.iterator]();!(m=(v=b.next()).done);m=!0){var w=v.value,_=w.querySelector(".mw-headline").getAttribute("id"),k=a(w,"h3");if(!_.includes("mologi")&&!_.includes("onciatio")&&!_.includes("oir_auss")&&!_.includes("éférenc")&&!_.includes("agra")){var y={},x=[];k.querySelectorAll("ol > li").forEach((function(t){var e=t.querySelector("ul");e&&t.removeChild(e),x.push(t.innerText)})),y["definitions"]=x;var C=k.querySelector(".API");C&&(y["pronunciation"]=C.innerText),y["POS"]=_,e.englishWords.push(y)}}}catch(S){f=!0,h=S}finally{try{m||null==b.return||b.return()}finally{if(f)throw h}}}))}}},methods:{wordJSONToObject:function(t){if(t){var e=[],a=!0,n=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var i=o.value;i.definitions=i.definitions.split("/").filter(Boolean),e.push(i)}}catch(c){n=!0,r=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return e}return null},btnTabClick:function(t){var e=t.target.getAttribute("tab");this.tab!=e&&(this.tab=e)}}},mt=gt,ft=(a("6067"),Object(g["a"])(mt,Q,Z,!1,null,null,null)),ht=ft.exports,vt={components:{ContextMenu:V,ReaderDrawer:ht},props:["bookName","targetLanguage","chapterNumber"],data:function(){return{chapterText:[],isActiveColor:!0,hoveredWord:null,showReaderDrawer:!1,clickedWord:"",ontouchmove:!1,isPunctDict:{".":!0,"\n":!0,"\t":!0,"?":!0,"!":!0," ":!0,",":!0,"’":!0,"，":!0,"。":!0,"”":!0,"“":!0,"：":!0,"《":!0,"》":!0,"—":!0,"；":!0}}},watch:{"$route.params":function(){this.onLoad()}},created:function(){this.onLoad()},mounted:function(){var t=this;document.addEventListener("keydown",(function(){"65"==event.keyCode&&t.hoveredWord&&t.loggedIn&&t.toggleIsKnown(t.hoveredWord)})),document.addEventListener("touchmove",(function(){0==t.ontouchmove&&(t.ontouchmove=!0)})),document.addEventListener("touchend",(function(){1==t.ontouchmove&&setTimeout((function(){t.ontouchmove=!1}),1500)}))},methods:{onLoad:function(){var t=this;F.get("/api/books/".concat(this.targetLanguage),{params:this.$route.params}).then((function(e){t.chapterText=e.data.tokenized_chapter_text}))},switchStylingKnownWords:function(){this.isActiveColor=!this.isActiveColor},toggleIsKnown:function(t){var e={};e["word"]=t.getAttribute("lemma"),e["targetLanguage"]=this.targetLanguage,console.log(e),this.$store.dispatch("toggleKnownWord",e)},openContextMenu:function(t){this.$emit("openContextMenu",t)},mouseEnter:function(t){this.hoveredWord=t.target},mouseLeave:function(){this.hoveredWord=null},toggleDrawer:function(){this.showReaderDrawer=!this.showReaderDrawer},onClickHandler:function(){this.ontouchmove||(this.drawerHandler(),this.hoveredWord&&(this.clickedWord=this.hoveredWord.innerText))},drawerHandler:function(){this.hoveredWord&&!this.showReaderDrawer&&(this.showReaderDrawer=!0),!this.hoveredWord&&this.showReaderDrawer&&(this.showReaderDrawer=!1)},doSomething:function(){this.showReaderDrawer&&(this.showReaderDrawer=!1)}},computed:Object(c["a"])({},x)},bt=vt,wt=(a("4116"),Object(g["a"])(bt,A,P,!1,null,"5ba1243d",null)),_t=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"languages"},[a("h1",[t._v("Languages")]),t._l(t.languages,(function(t,e){return a("div",{key:e},[a("LanguageSection",{attrs:{targetLanguage:t.lang,books:t.books}})],1)}))],2)},yt=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-card"},[a("div",{staticClass:"title"},[a("h2",{on:{click:function(e){return t.switchShow()}}},[t._v(t._s(t.targetLanguage))]),a("BaseIcon",{attrs:{name:"book"}}),a("span",[t._v(t._s(t.books.length)+" books")]),a("div",{staticClass:"subheader"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showBoolean,expression:"showBoolean"}],staticClass:"books-section"},t._l(t.books,(function(e){return a("div",{key:e,staticClass:"book-card"},[a("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:e,targetLanguage:t.targetLanguage,chapterNumber:1}}}},[t._v(" "+t._s(e)+" ")]),t.booksStatistics?[t.booksStatistics[e]?a("p",[t._v(" book lenght : "+t._s(t.booksStatistics[e].n_book_tokens)+" "),a("br"),t._v(" book unique words : "+t._s(t.booksStatistics[e].n_book_types)+" "),a("br"),t._v(" known words : "+t._s(t.booksStatistics[e].n_user_tokens)+" "),a("br"),t._v(" ratio known words : "+t._s((100*t.booksStatistics[e].n_user_tokens/t.booksStatistics[e].n_book_tokens).toFixed(2))+" % "),a("br"),t._v(" 95% percentile word : "+t._s(t.booksStatistics[e].book_char_95percentile)+" "),a("br"),t._v(" 95% percentile rank :"+t._s(t.booksStatistics[e].book_rank_95percentile)+" ")]):t._e()]:t._e()],2)})),0)])},Ct=[],St={props:{targetLanguage:String,books:Array},data:function(){return{showBoolean:!0,booksStatistics:{}}},created:function(){var t=this;if(this.loggedIn){var e=!0,a=!1,n=void 0;try{for(var r,o=function(){var e=r.value;F.get("/api/users/".concat(t.$store.state.userId,"/book_known_words"),{params:{bookName:e,targetLanguage:t.targetLanguage}}).then((function(a){var n=a.data;t.$set(t.booksStatistics,e,n)}))},s=this.books[Symbol.iterator]();!(e=(r=s.next()).done);e=!0)o()}catch(i){a=!0,n=i}finally{try{e||null==s.return||s.return()}finally{if(a)throw n}}}},methods:{switchShow:function(){this.showBoolean=!this.showBoolean}},computed:Object(c["a"])({},x)},Nt=St,Ot=(a("1873"),Object(g["a"])(Nt,xt,Ct,!1,null,"468f1278",null)),Lt=Ot.exports,Wt={components:{LanguageSection:Lt},data:function(){return{languages:{}}},created:function(){var t=this;F.get("/api/books/languages").then((function(e){t.languages=e.data.languages}))}},Et=Wt,$t=Object(g["a"])(Et,kt,yt,!1,null,"2ec2e407",null),It=$t.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Language Detector")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],attrs:{placeholder:"enter your text here"},domProps:{value:t.textInput},on:{input:[function(e){e.target.composing||(t.textInput=e.target.value)},function(e){return t.guessLanguage()}]}}),a("h2",[t._v(t._s(t.prediction))]),a("h3",[t._v("the message is "+t._s(t.message))]),a("h3",[t._v(t._s(t.$store.state.tokens))])])},jt=[],Dt={data:function(){return{textInput:"",prediction:"Come on !",message:"..."}},methods:{guessLanguage:function(){var t=this;F.get("/api/books/language-detector",{params:{textInput:this.textInput}}).then((function(e){t.prediction=e.data.prediction}))}},created:function(){var t=this;F.get("api/users/hello").then((function(e){var a=e.data;t.message=a.message}))}},Rt=Dt,Kt=(a("c71f"),Object(g["a"])(Rt,Tt,jt,!1,null,"287ac125",null)),Mt=Kt.exports,At=a("48ac"),Pt=a.n(At);n["a"].use(y["a"]);var Bt=new y["a"].Store({state:{userKnownWordsDict:{},targetLanguage:"",tokens:null,userId:null,firstName:null,isNavOpen:!1},mutations:{LOAD_KNOWN_WORDS:function(t,e){t.userKnownWordsDict=e.mandarinKnownWordsDict,t.targetLanguage=e.targetLanguage},TOGGLE_WORD:function(t,e){var a=e.word,r=e.targetLanguage;t.userKnownWordsDict[a]?(t.userKnownWordsDict[a]=!1,F.post("api/users/".concat(t.userId,"/remove_word/"),{word:a,targetLanguage:r})):(n["a"].set(t.userKnownWordsDict,a,!0),F.post("api/users/".concat(t.userId,"/add_word/"),{word:a,targetLanguage:r}))},LOGIN:function(t,e){t.tokens=e,localStorage.setItem("tokens",JSON.stringify(e)),F.defaults.headers.common["Authorization"]="Bearer ".concat(e.access),t.userId=Pt.a.decode(e.access).user_id,t.firstName=Pt.a.decode(e.access).first_name},LOGOUT:function(){localStorage.removeItem("tokens"),location.reload()},SET_JWT_HEADERS:function(t){F.defaults.headers.common["Authorization"]="Bearer ".concat(t.tokens.access),t.userId=Pt.a.decode(t.tokens.access).user_id,t.firstName=Pt.a.decode(t.tokens.access).first_name},TOGGLE_NAV:function(t){t.isNavOpen=!t.isNavOpen}},actions:{loadKnownWords:function(t,e){var a=t.commit;e&&e!=this.state.targetLanguage&&F.get("api/users/".concat(this.state.userId,"/")).then((function(t){var n=t.data.profile["".concat(e,"_known_words")],r=n.split("\n"),o={},s=!0,i=!1,c=void 0;try{for(var u,l=r[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var d=u.value;o[d]=!0}}catch(g){i=!0,c=g}finally{try{s||null==l.return||l.return()}finally{if(i)throw c}}var p={};p["mandarinKnownWordsDict"]=o,p["targetLanguage"]=e,a("LOAD_KNOWN_WORDS",p)}))},toggleKnownWord:function(t,e){var a=t.commit;a("TOGGLE_WORD",e)},login:function(t,e){var a=t.commit;return F.post("api/users/token/",e).then((function(t){a("LOGIN",t.data)}))},logout:function(t){var e=t.commit;e("LOGOUT")},setJwtHeaders:function(t){var e=t.commit;e("SET_JWT_HEADERS")},refreshTokens:function(t){var e=t.commit;e("TODO : Create a commit"),F.post("/api/users/token/refresh/",{refresh:this.$store.state.tokens.refresh})},toggleNav:function(t){var e=t.commit;e("TOGGLE_NAV")}},getters:{loggedIn:function(t){return!!t.tokens}},modules:{}}),Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-div"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("label",{attrs:{for:"username"}},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"password"}},[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{attrs:{type:"submit",name:"button"}},[t._v(" Login ")])])])},qt=[],Gt={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;this.$store.dispatch("login",{email:this.email,password:this.password}).then((function(){t.$router.go(-1)}))}}},Ft=Gt,Jt=(a("65b7"),Object(g["a"])(Ft,Ht,qt,!1,null,"5dd8577e",null)),Ut=Jt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-div"},[a("h1",[t._v("REGISTER")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"country"}},[t._v("Country:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{type:"text",name:"country",value:""},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),a("label",{attrs:{for:"firstName"}},[t._v("Fist name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName",value:""},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),a("label",{attrs:{for:"lastName"}},[t._v("Last name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName",value:""},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),a("label",{attrs:{for:"password"}},[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{attrs:{type:"submit",name:"button"}},[t._v(" Register ")])])])},Yt=[],zt={data:function(){return{email:"",password:"",firstName:"",lastName:"",country:""}},methods:{register:function(){var t=this;F.post("api/users/",{email:this.email,first_name:this.firstName,last_name:this.lastName,password:this.password,profile:{country:this.country}}).then((function(){return t.$store.dispatch("login",{email:t.email,password:t.password})})).then((function(){t.$router.push({name:"profile"})}))}},created:function(){}},Vt=zt,Qt=(a("ff70"),Object(g["a"])(Vt,Xt,Yt,!1,null,"d7b722d8",null)),Zt=Qt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Profile")]),a("p",[t._v(" Hello "),a("strong",[t._v(t._s(t.$store.state.firstName))]),t._v(". Here will soon be displayed tons of statistics about your known words, target languages and time spent reading ! ")]),a("p",[t._v(" You can start reading "),a("router-link",{attrs:{to:{path:"/mandarin/book/活着/1"}}},[t._v("To Live")]),t._v(" by Hua Yu ")],1)])},ee=[],ae={data:function(){return{}},methods:{}},ne=ae,re=Object(g["a"])(ne,te,ee,!1,null,null,null),oe=re.exports;n["a"].use(I["a"]);var se=[{path:"/",name:"home",component:M},{path:"/languages",name:"languages",component:It},{path:"/:targetLanguage/book/:bookName/:chapterNumber",name:"reader-tool",component:_t,props:function(t){var e=Object(c["a"])({},t.params);return e.chapterNumber=+e.chapterNumber,e}},{path:"/language-detector",name:"language-detector",component:Mt,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Ut},{path:"/register",name:"register",component:Zt},{path:"/profile",name:"profile",component:oe,meta:{requiresAuth:!0}}],ie=new I["a"]({mode:"history",base:"/readiteasy-frontend/",routes:se});ie.afterEach((function(t){Bt.state.tokens&&Bt.dispatch("loadKnownWords",t.params.targetLanguage)})),ie.beforeResolve((function(t,e,a){Bt.state.tokens||(Bt.state.tokens=JSON.parse(localStorage.getItem("tokens")),Bt.state.tokens&&Bt.dispatch("setJwtHeaders"));var n=!!Bt.state.tokens;t.matched.some((function(t){return t.meta.requiresAuth}))&&!n&&a({name:"login"}),a()}));var ce=ie,ue=a("8103"),le=a.n(ue),de=a("bba4"),pe=a.n(de),ge=(a("a5d8"),a("660e")),me=a("ca95"),fe=a.n(me);n["a"].use(ge["a"],{breakpoints:{mobile:450,tablet:800,laptop:1250,desktop:1/0}}),n["a"].use(fe.a);var he=a("ef13");he.keys().forEach((function(t){var e=he(t),a=le()(pe()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));n["a"].component(a,e.default||e)})),n["a"].config.productionTip=!1,new n["a"]({router:ce,store:Bt,render:function(t){return t($)}}).$mount("#app")},"5a27":function(t,e,a){},6067:function(t,e,a){"use strict";var n=a("9ddb"),r=a.n(n);r.a},"65b7":function(t,e,a){"use strict";var n=a("434d"),r=a.n(n);r.a},7073:function(t,e,a){},7283:function(t,e,a){"use strict";var n=a("a450"),r=a.n(n);r.a},7461:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon-wrapper"},[a("svg",{staticClass:"icon",attrs:{width:t.width,height:t.height}},[a("use",t._b({},"use",{"xlink:href":"/feather-sprite.svg#"+t.name},!1))])])},r=[],o=(a("a9e3"),{props:{name:String,width:{type:[Number,String],default:24},height:{type:[Number,String],default:24}}}),s=o,i=(a("eefc"),a("2877")),c=Object(i["a"])(s,n,r,!1,null,"0fff9815",null);e["default"]=c.exports},"85ec":function(t,e,a){},"9ddb":function(t,e,a){},a450:function(t,e,a){},ad93:function(t,e,a){"use strict";var n=a("3550"),r=a.n(n);r.a},b072:function(t,e,a){},b66f:function(t,e,a){},b6bb:function(t,e,a){},c71f:function(t,e,a){"use strict";var n=a("b072"),r=a.n(n);r.a},ca77:function(t,e,a){"use strict";var n=a("b6bb"),r=a.n(n);r.a},de60:function(t,e,a){},e55c:function(t,e,a){},ed6b:function(t,e,a){"use strict";var n=a("7073"),r=a.n(n);r.a},eefc:function(t,e,a){"use strict";var n=a("b66f"),r=a.n(n);r.a},ef13:function(t,e,a){var n={"./BaseIcon.vue":"7461"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="ef13"},ff70:function(t,e,a){"use strict";var n=a("5a27"),r=a.n(n);r.a}});
//# sourceMappingURL=app.39ab482b.js.map