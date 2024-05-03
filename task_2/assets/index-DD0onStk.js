var _e=Object.defineProperty;var ge=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>(ge(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function K(){}function de(e){return e()}function oe(){return Object.create(null)}function k(e){e.forEach(de)}function he(e){return typeof e=="function"}function me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function De(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function H(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function D(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function M(){return $(" ")}function N(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function W(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function j(e){return e===""?null:+e}function ye(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.data!==t&&(e.data=t)}function A(e,t){e.value=t??""}function J(e,t,n){for(let o=0;o<e.options.length;o+=1){const r=e.options[o];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function le(e){const t=e.querySelector(":checked");return t&&t.__value}let U;function T(e){U=e}function be(){if(!U)throw new Error("Function called outside component initialization");return U}function Se(e){be().$$.on_mount.push(e)}const B=[],ue=[];let O=[];const ce=[],Re=Promise.resolve();let ee=!1;function Ne(){ee||(ee=!0,Re.then(pe))}function I(e){O.push(e)}const x=new Set;let w=0;function pe(){if(w!==0)return;const e=U;do{try{for(;w<B.length;){const t=B[w];w++,T(t),Pe(t.$$)}}catch(t){throw B.length=0,w=0,t}for(T(null),B.length=0,w=0;ue.length;)ue.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];x.has(n)||(x.add(n),n())}O.length=0}while(B.length);for(;ce.length;)ce.pop()();ee=!1,x.clear(),T(e)}function Pe(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}function ve(e){const t=[],n=[];O.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),O=t}const Ae=new Set;function Le(e,t){e&&e.i&&(Ae.delete(e),e.i(t))}function X(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ee(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),I(()=>{const l=e.$$.on_mount.map(de).filter(he);e.$$.on_destroy?e.$$.on_destroy.push(...l):k(l),e.$$.on_mount=[]}),r.forEach(I)}function Me(e,t){const n=e.$$;n.fragment!==null&&(ve(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){e.$$.dirty[0]===-1&&(B.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,o,r,l,c=null,h=[-1]){const f=U;T(e);const s=e.$$={fragment:null,ctx:[],props:l,update:K,not_equal:r,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:oe(),dirty:h,skip_bound:!1,root:t.target||f.$$.root};c&&c(s.root);let y=!1;if(s.ctx=n?n(e,t.props||{},(b,m,...P)=>{const p=P.length?P[0]:m;return s.ctx&&r(s.ctx[b],s.ctx[b]=p)&&(!s.skip_bound&&s.bound[b]&&s.bound[b](p),y&&we(e,b)),m}):[],s.update(),y=!0,k(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const b=ye(t.target);s.fragment&&s.fragment.l(b),b.forEach(C)}else s.fragment&&s.fragment.c();t.intro&&Le(e.$$.fragment),Ee(e,t.target,t.anchor),pe()}T(f)}class Oe{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){Me(this,1),this.$destroy=K}$on(t,n){if(!he(n))return K;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!De(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ke);const Q={USD:"Доллар США",AED:"Дирхам ОАЭ",AFN:"Афгани",ALL:"Албанский лек",AMD:"Армянский драм",ANG:"Нидерландский антильский гульден",AOA:"Ангольская кванза",ARS:"Аргентинское песо",AUD:"Австралийский доллар",AWG:"Арубанский флорин",AZN:"Азербайджанский манат",BAM:"Конвертируемая марка",BBD:"Барбадосский доллар",BDT:"Бангладешская така",BGN:"Болгарский лев",BHD:"Бахрейнский динар",BIF:"Бурундийский франк",BMD:"Бермудский доллар",BND:"Брунейский доллар",BOB:"Боливийский боливиано",BRL:"Бразильский реал",BSD:"Багамский доллар",BTN:"Бутанский нгултрум",BWP:"Ботсванская пула",BYN:"Белорусский рубль",BZD:"Белизский доллар",CAD:"Канадский доллар",CDF:"Конголезский франк",CHF:"Швейцарский франк",CLP:"Чилийское песо",CNY:"Китайский юань",COP:"Колумбийское песо",CRC:"Костариканский колон",CUP:"Кубинское песо",CVE:"Кабо-Верде эскудо",CZK:"Чешская крона",DJF:"Джибутийский франк",DKK:"Датская крона",DOP:"Доминиканское песо",DZD:"Алжирский динар",EGP:"Египетский фунт",ERN:"Эритрейская накфа",ETB:"Эфиопский быр",EUR:"Евро",FJD:"Фиджийский доллар",FKP:"Фунт Фолклендских островов",FOK:"Фарерский крон",GBP:"Фунт стерлингов",GEL:"Грузинский лари",GGP:"Гернсийский фунт",GHS:"Ганский седи",GIP:"Гибралтарский фунт",GMD:"Гамбийский даласи",GNF:"Гвинейский франк",GTQ:"Гватемальский кетсаль",GYD:"Гайанский доллар",HKD:"Гонконгский доллар",HNL:"Гондурасская лемпира",HRK:"Хорватская куна",HTG:"Гаитянский гурд",HUF:"Венгерский форинт",IDR:"Индонезийская рупия",ILS:"Израильский новый шекель",IMP:"Фунт острова Мэн",INR:"Индийская рупия",IQD:"Иракский динар",IRR:"Иранский риал",ISK:"Исландская крона",JEP:"Фунт Джерси",JMD:"Ямайский доллар",JOD:"Иорданский динар",JPY:"Японская иена",KES:"Кенийский шиллинг",KGS:"Киргизский сом",KHR:"Камбоджийский риель",KID:"Доллар островов Кука",KMF:"Коморский франк",KRW:"Вон Республики Корея",KWD:"Кувейтский динар",KYD:"Доллар Каймановых островов",KZT:"Казахстанский тенге",LAK:"Лаосский кип",LBP:"Ливанский фунт",LKR:"Шри-Ланкийская рупия",LRD:"Либерийский доллар",LSL:"Лесотский лоти",LYD:"Ливийский динар",MAD:"Марокканский дирхам",MDL:"Молдавский лей",MGA:"Малагасийский ариари",MKD:"Македонский денар",MMK:"Мьянманский кьят",MNT:"Монгольский тугрик",MOP:"Макао патака",MRU:"Мавританская угия",MUR:"Маврикийская рупия",MVR:"Мальдивская руфия",MWK:"Малавийская квача",MXN:"Мексиканское песо",MYR:"Малайзийский ринггит",MZN:"Мозамбикский метикал",NAD:"Намибийский доллар",NGN:"Нигерийская найра",NIO:"Никарагуанская кордоба",NOK:"Норвежская крона",NPR:"Непальская рупия",NZD:"Новозеландский доллар",OMR:"Оманский риал",PAB:"Панамский бальбоа",PEN:"Перуанский соль",PGK:"Папуа-Новогвинейская кина",PHP:"Филиппинское песо",PKR:"Пакистанская рупия",PLN:"Польский злотый",PYG:"Парагвайский гуарани",QAR:"Катарский риал",RON:"Румынский лей",RSD:"Сербский динар",RUB:"Российский рубль",RWF:"Руандийский франк",SAR:"Саудовский риял",SBD:"Доллар Соломоновых островов",SCR:"Сейшельская рупия",SDG:"Суданский фунт",SEK:"Шведская крона",SGD:"Сингапурский доллар",SHP:"Фунт острова Святой Елены",SLE:"Сьерра-Леонский леоне",SLL:"Сьерра-Леонский леоне",SOS:"Сомалийский шиллинг",SRD:"Суринамский доллар",SSP:"Южносуданский фунт",STN:"Добра Сан-Томе и Принсипи",SYP:"Сирийский фунт",SZL:"Свазилендский лилангени",THB:"Таиландский бат",TJS:"Таджикский сомони",TMT:"Туркменский манат",TND:"Тунисский динар",TOP:"Тонганская паанга",TRY:"Турецкая лира",TTD:"Доллар Тринидада и Тобаго",TVD:"Доллар Тувалу",TWD:"Тайваньский доллар",TZS:"Танзанийский шиллинг",UAH:"Украинская гривна",UGX:"Угандийский шиллинг",UYU:"Уругвайское песо",UZS:"Узбекский сум",VES:"Венесуэльский боливар",VND:"Вьетнамский донг",VUV:"Вануатский вату",WST:"Самоанская тала",XAF:"Франк КФА ВСЕАО",XCD:"Восточно-карибский доллар",XDR:"СДР (Специальные права заимствования)",XOF:"Франк КФА ВСЕАО",XPF:"Франк КФП",YER:"Йеменский риал",ZAR:"Южноафриканский рэнд",ZMW:"Замбийская квача",ZWL:"Зимбабвийский доллар"};function ie(e,t,n){const o=e.slice();return o[16]=t[n],o}function se(e,t,n){const o=e.slice();return o[16]=t[n],o}function fe(e){let t,n=Q[e[16]]+"",o,r;return{c(){t=D("option"),o=$(n),t.__value=r=e[16],A(t,t.__value)},m(l,c){H(l,t,c),d(t,o)},p(l,c){c&4&&n!==(n=Q[l[16]]+"")&&te(o,n),c&4&&r!==(r=l[16])&&(t.__value=r,A(t,t.__value))},d(l){l&&C(t)}}}function ae(e){let t,n=Q[e[16]]+"",o,r;return{c(){t=D("option"),o=$(n),t.__value=r=e[16],A(t,t.__value)},m(l,c){H(l,t,c),d(t,o)},p(l,c){c&4&&n!==(n=Q[l[16]]+"")&&te(o,n),c&4&&r!==(r=l[16])&&(t.__value=r,A(t,t.__value))},d(l){l&&C(t)}}}function $e(e){let t;return{c(){t=D("div"),t.textContent="Loading..."},m(n,o){H(n,t,o)},p:K,d(n){n&&C(t)}}}function Ce(e){let t,n;return{c(){t=D("div"),n=$(e[5])},m(o,r){H(o,t,r),d(t,n)},p(o,r){r&32&&te(n,o[5])},d(o){o&&C(t)}}}function Fe(e){let t,n,o,r,l,c,h,f,s,y,b,m,P,p,Z,L,Y,F,a,q,v=X(e[2]),_=[];for(let u=0;u<v.length;u+=1)_[u]=fe(se(e,v,u));let E=X(e[2]),g=[];for(let u=0;u<E.length;u+=1)g[u]=ae(ie(e,E,u));function ne(u,S){return u[5]?Ce:$e}let V=ne(e),R=V(e);return{c(){t=D("main"),n=D("h1"),n.textContent="Конвертатор валют",o=M(),r=D("label"),l=$(`Валюта 1:
    `),c=D("select");for(let u=0;u<_.length;u+=1)_[u].c();h=M(),f=D("input"),s=M(),y=D("label"),b=$(`Валюта 2:
    `),m=D("select");for(let u=0;u<g.length;u+=1)g[u].c();P=M(),p=D("input"),Z=M(),L=D("p"),R.c(),Y=M(),F=D("p"),F.innerHTML=`Приложение использует
    <a href="https://www.exchangerate-api.com">Exchange Rate API</a>`,e[3]===void 0&&I(()=>e[9].call(c)),W(f,"type","number"),W(f,"min","0"),e[4]===void 0&&I(()=>e[11].call(m)),W(p,"type","number"),W(p,"min","0")},m(u,S){H(u,t,S),d(t,n),d(t,o),d(t,r),d(r,l),d(r,c);for(let i=0;i<_.length;i+=1)_[i]&&_[i].m(c,null);J(c,e[3],!0),d(r,h),d(r,f),A(f,e[0]),d(t,s),d(t,y),d(y,b),d(y,m);for(let i=0;i<g.length;i+=1)g[i]&&g[i].m(m,null);J(m,e[4],!0),d(y,P),d(y,p),A(p,e[1]),d(t,Z),d(t,L),R.m(L,null),d(t,Y),d(t,F),a||(q=[N(c,"change",e[9]),N(c,"change",e[6]),N(f,"input",e[10]),N(f,"input",e[6]),N(f,"input",e[8]),N(m,"change",e[11]),N(m,"change",e[7]),N(p,"input",e[12]),N(p,"input",e[7]),N(p,"input",e[8])],a=!0)},p(u,[S]){if(S&4){v=X(u[2]);let i;for(i=0;i<v.length;i+=1){const G=se(u,v,i);_[i]?_[i].p(G,S):(_[i]=fe(G),_[i].c(),_[i].m(c,null))}for(;i<_.length;i+=1)_[i].d(1);_.length=v.length}if(S&12&&J(c,u[3]),S&1&&j(f.value)!==u[0]&&A(f,u[0]),S&4){E=X(u[2]);let i;for(i=0;i<E.length;i+=1){const G=ie(u,E,i);g[i]?g[i].p(G,S):(g[i]=ae(G),g[i].c(),g[i].m(m,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=E.length}S&20&&J(m,u[4]),S&2&&j(p.value)!==u[1]&&A(p,u[1]),V===(V=ne(u))&&R?R.p(u,S):(R.d(1),R=V(u),R&&(R.c(),R.m(L,null)))},i:K,o:K,d(u){u&&C(t),re(_,u),re(g,u),R.d(),a=!1,k(q)}}}function Ge(e,t,n){const o=async()=>{try{const v=await fetch("https://cors-anywhere.herokuapp.com/"+"https://open.er-api.com/v6/latest/USD");if(!v.ok)throw new Error("Failed to fetch currency data");return v.json()}catch(a){return console.error(a),{result:"error"}}};let r=[],l={},c="USD",h="RUB",f="",s="",y="";const b=()=>{if(c===h)n(1,s=f);else{const a=(l[h]/l[c]).toFixed(2);console.log("rate:",a),n(1,s=(f*a).toFixed(2))}P()},m=()=>{if(c===h)n(0,f=s);else{const a=(l[h]/l[c]).toFixed(2);console.log("rate:",a),n(0,f=(s/a).toFixed(2))}P()},P=()=>{if(c===h)n(5,y=`Текущий курс: 1 ${c} = 1 ${h}`);else{const a=(l[h]/l[c]).toFixed(2);n(5,y=`Текущий курс: 1 ${c} = ${a} ${h}`)}},p=a=>{/^\d*\.?\d*$/.test(a.target.value)||(a.preventDefault(),a.target.value="")};Se(async()=>{const a=await o();a.result==="success"?(n(2,r=Object.keys(a.rates)),l=a.rates,P()):console.error("Failed to fetch currency options")});function Z(){c=le(this),n(3,c),n(2,r)}function L(){f=j(this.value),n(0,f)}function Y(){h=le(this),n(4,h),n(2,r)}function F(){s=j(this.value),n(1,s)}return e.$$.update=()=>{e.$$.dirty&1&&console.log(`Input value 1 changed: ${f}`),e.$$.dirty&2&&console.log(`Input value 2 changed: ${s}`)},[f,s,r,c,h,y,b,m,p,Z,L,Y,F]}class Te extends Oe{constructor(t){super(),Be(this,t,Ge,Fe,me,{})}}new Te({target:document.getElementById("app")});
