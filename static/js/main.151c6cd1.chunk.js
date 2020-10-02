(this["webpackJsonppoke-page"]=this["webpackJsonppoke-page"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(75),a(6)),u=a(23),m=a(42),i=a(66),p=a(32),s=a.n(p);var d=function(){return r.a.createElement("header",null,r.a.createElement(m.a,{bg:"danger",variant:"dark"},r.a.createElement(m.a.Brand,null,r.a.createElement("img",{src:s.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"Poke Logo"})),r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/poke-page/"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/poke-page/pokedex"},"Pok\xe9dex"))))};a(83);var k=function(){return r.a.createElement("footer",{style:{textAlign:"center"}},r.a.createElement("p",{className:"text-center small copyright"},"\xa9 2020 Pok\xe9dex"))},E=a(110),g=a(107),f=a(108),v=a(111),h=a(62),b=a(114),x=a(109),y=a(24),O=a(25),P=a.n(O),j=a(34),N=a(26),w=a(35),A=a.n(w),D={loading:!0,pokemon:[],url:"https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",prev:null,next:null},R=a(67),C={pokemon:[]},T=(a(55),{getPokemon:function(e){return function(){var t=Object(j.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"LOADING",payload:!0}),t.next=3,A.a.get(e);case 3:n=t.sent,setTimeout((function(){a({type:"GET_POKEMON",payload:{pokemonArray:n.data.results,next:n.data.next,previous:n.data.previous}})}),500);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},pokeball:function(e){return function(){var t=Object(j.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get(e.url);case 2:n=t.sent,a({type:"ADD_TO_POKEDEX",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),_=Object(y.b)((function(e){return{allPokemon:e.cardReducer.pokemon,loading:e.cardReducer.loading,url:e.cardReducer.url,next:e.cardReducer.next,prev:e.cardReducer.prev}}),T)((function(e){var t=e.getPokemon,a=e.url;return Object(n.useEffect)((function(){t(a)}),[t,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,e.loading?r.a.createElement(f.a,{style:{textAlign:"center"}},r.a.createElement("img",{src:"https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif",alt:"loading"})):r.a.createElement(r.a.Fragment,null,e.allPokemon.map((function(t,a){return r.a.createElement(f.a,{md:4,key:a},r.a.createElement(b.a,{bg:"dark",text:"light",style:{textAlign:"center",margin:"1em"}},r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,t.name.toUpperCase()),r.a.createElement(x.a,{onClick:function(){return e.pokeball(t)}},"Pok\xe9ball"))))})))),r.a.createElement("div",{style:{textAlign:"center",margin:".5em"}},e.prev?r.a.createElement(x.a,{variant:"danger",style:{margin:".5em"},onClick:function(){return t(e.prev)}},"Prev"):null,r.a.createElement(x.a,{variant:"danger",onClick:function(){return t(e.next)}},"Next")))}));var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{className:"jumbotron"},r.a.createElement("h1",null,"Pok\xe9 Page"),r.a.createElement(h.a,{src:s.a,width:"150",height:"150",alt:"Poke Logo"}),r.a.createElement("p",null,"Gotta catch em all!"),r.a.createElement("p",null,"Click on Pok\xe9ball to add a Pok\xe9mon to your Pok\xe9dex! Click on the Pok\xe9dex to see your collection!"))))),r.a.createElement(_,null))},I=a(68),K=a(113),L=a(112);a(103);var B=Object(y.b)((function(e){return{pokemon:e.pokedexReducer.pokemon}}))((function(e){var t=Object(n.useState)(0),a=Object(I.a)(t,2),l=a[0],c=a[1];return r.a.createElement(E.a,{className:"carousel-container"},r.a.createElement(K.a,{variant:"dark",style:{textAlign:"center",margin:"1em"}},e.pokemon.length," Pok\xe9mon",r.a.createElement("br",null),' "There is strength in numbers" - Ash Ketchum'),r.a.createElement(L.a,{activeIndex:l,onSelect:function(e,t){c(e)}},e.pokemon.map((function(e,t){return r.a.createElement(L.a.Item,{width:100,height:100,key:t},r.a.createElement("img",{className:"d-block w-100",src:e.sprites.front_default,alt:e.name}),r.a.createElement(L.a.Caption,null,r.a.createElement("h2",{className:"caption-text"},e.name.toUpperCase()),r.a.createElement("p",{className:"caption-text"},"Pok\xe9dex Number: ",e.order)))}))))}));a(104);var F=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/poke-page/",component:G,exact:!0}),r.a.createElement(o.a,{path:"/poke-page/pokedex",component:B}))),r.a.createElement(k,null))},M=a(20),S=a(64),J=a(65),U=Object(M.combineReducers)({cardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_POKEMON":var r=n.pokemonArray,l=n.next,c=n.previous,o="https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";return{loading:!1,pokemon:r,url:o,next:l,prev:c};case"LOADING":return Object(N.a)(Object(N.a)({},e),{},{loading:!0});default:return e}},pokedexReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_TO_POKEDEX":return Object(N.a)(Object(N.a)({},e),{},{pokemon:[].concat(Object(R.a)(e.pokemon),[n])});default:return e}}}),X=Object(M.createStore)(U,Object(J.composeWithDevTools)(Object(M.applyMiddleware)(S.a)));c.a.render(r.a.createElement(u.a,null,r.a.createElement(y.a,{store:X},r.a.createElement(F,null))),document.getElementById("root"))},32:function(e,t,a){e.exports=a.p+"static/media/pokemon.fd03a6cf.png"},55:function(e,t,a){},70:function(e,t,a){e.exports=a(105)},75:function(e,t,a){},83:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.151c6cd1.chunk.js.map