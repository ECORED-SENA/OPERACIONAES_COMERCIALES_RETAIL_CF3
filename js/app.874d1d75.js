(function(e){function a(a){for(var n,i,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==t[c]&&(n=!1)}n&&(r.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},i={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"7d531f68","chunk-0206bfa0":"17fa80e3","chunk-04b93936":"ff42b4aa","chunk-13a6037e":"78485c24","chunk-16015154":"1b34de7b","chunk-17977988":"9c231abc","chunk-2c06842c":"b5115afe","chunk-2d208d90":"e4289446","chunk-2d21d0e2":"b86d4400","chunk-2d22c123":"25d12bab","chunk-2e80bb9a":"d3620fce","chunk-3145fe0f":"0f3c0b1c","chunk-319206de":"5a141d4b","chunk-328f70dd":"8aa8f98b","chunk-3807499c":"cd15a7a9","chunk-3dc647fd":"3610f583","chunk-4cdd78c0":"262f68ab","chunk-4fde0a08":"b74707e5","chunk-515a8379":"0422a7fc","chunk-53ccb27e":"0538410e","chunk-59974754":"ef0dfab8","chunk-766a929b":"923c19b4","chunk-839300a6":"182d1e91","chunk-c796899c":"21afdba9","chunk-dbb9869e":"55dff55e",comple:"9a5b046c",creditos:"a07e1167",glosario:"a9206bfb",intro:"6ed58151",referencias:"209836bd",tema1:"fcd2029c",tema2:"b87deab0",tema3:"8a3b2d51"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"77feafb9","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"bdae3807","chunk-766a929b":"92cde18b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"43f81962",creditos:"1ed47230",glosario:"d7719149",intro:"0e433876",referencias:"ed609239",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=l.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===n||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],m.parentNode.removeChild(m),o(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=t[e]=[a,o]}));a.push(n[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=t[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}t[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var m=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"230f":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.f24a4e8d.svg"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=o("2877"),s=Object(l["a"])(c,i,t,!1,null,null,null),d=s.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),f=o("ae58"),p=o("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Exhibición y vitrinismo en el formato comercial",descripcionCurso:"La exhibición del surtido en el punto de venta es fundamental para todo tipo de establecimiento comercial. Por esta razón, las empresas deben pensar en cómo organizar adecuadamente sus locales de tal forma que tengan un impacto y una influencia positiva sobre las decisiones de compra por parte de los clientes.",imagenBannerPrincipal:o("9370"),fondoBannerPrincipal:o("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"<i>Retail</i>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Establecimiento comercial",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Formatos comerciales",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Arquitectura del establecimiento",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Surtido",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Estructura del surtido",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Planograma o planimetría",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"<i>Layout</i>",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"La exhibición de productos",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Vitrinismo o <i>visual merchandising</i>",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"<i>Merchandising</i>",hash:"t_2_6"},{icono:"far fa-file-alt",numero:"2.7",titulo:"Señalización comercial",hash:"t_2_7"},{icono:"far fa-file-alt",numero:"2.8",titulo:"Dispositivos de seguridad",hash:"t_2_8"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Muebles en el punto de venta",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Tipos de muebles",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Rotación de las categorías",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Codificación de productos",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"El precio",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Activación de marca",hash:"t_3_5"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"AA. VV. (2020). La comunicación en la sociedad digital: reputación, <i>big data</i>-audiencia y medios, ante un público. Esic Editorial."},{referencia:"Aranda, J. R. (2015). <i>Marketing</i> y promoción en el punto de venta. Editorial Elearning S.L."},{referencia:"Borja, R. P. (2021). <i>Merchadinsing</i>. Teoría, práctica y estrategia. Esic Editorial."},{referencia:"Costa, J. (2007). Señalética corporativa. Costa Punto Com Editor (CPC)."},{referencia:"Cruz, H. M. (2018). El arte de seducir. <i>Merchandising</i>. Ecoe Ediciones."},{referencia:"Kotler, P., y Armstrong, G. (2013). Fundamentos de <i>Marketing</i>. Pearson Educación."},{referencia:"Martínez, M. B. (2016). Escaparatismo y diseño de espacios comerciales. Paraninfo."},{referencia:"Publicaciones Vértice S.L. (2010). Animación y presentación del producto en el punto de venta. Editorial Vértice."},{referencia:"Puente, A. M. (2004). Gestión por categorías. Netbiblo."},{referencia:"Salen, H. (1994). Los secretos del <i>merchandising</i> activo. Ediciones Díaz de Santos, S.A."},{referencia:"Vidal, F. J., Mas, J. J., y González, M. A. (2011). Sistemas de seguridad y confortabilidad. Editorial Editex."},{referencia:"Vigaray, M. D. (2005). Comercialización y <i>retailing</i>: distribución comercial aplicada. Pearson Educación."}],glosario:[{termino:"Amplitud",significado:"número de familias diferentes de productos que ofrece la marca."},{termino:"Checkout",terminoHtml:"<em>Checkout</em>",significado:"mueble ubicado cerca de las cajas y que está para exhibir productos de compra compulsiva como chocolates, chicles, mecato, revistas, libros, entre otros."},{termino:"Consistencia",significado:"cercanía relativa entre las líneas de producto y su uso final."},{termino:"Escaparate",significado:"espacio exterior de las tiendas comerciales, destinado a exponer las mercancías en venta al público."},{termino:"Góndola",significado:"tipo de mueble dispuesto a modo de pared para exhibir productos al consumidor en los puntos de venta."},{termino:"Layout",terminoHtml:"<em>Layout</em>",significado:"diseño o disposición de los productos (bienes y servicios) en sectores o categorías en el punto de venta del establecimiento."},{termino:"Longitud",significado:"número total de productos que tiene la marca en una familia."},{termino:"Merchandising",terminoHtml:"<em>Merchandising</em>",significado:"conjunto de estrategias y tácticas efectuadas dentro del establecimiento y que tiene como fin ubicar el artículo correcto, en la cantidad necesaria, con el precio justo, en el tiempo adecuado, con una presentación visual impactante y dentro de una exhibición sobresaliente. Se refiere a todos los esfuerzos destinados a que el cliente, no solo conozca el producto, sino también, que tome una acción de compra."},{termino:"Planograma",significado:"herramienta necesaria para la gestión eficaz del espacio donde se exhiben los productos de los establecimientos minoristas, más aún en la actualidad porque existe un mercado más complicado y competitivo, en el que ha aumentado el tamaño de las tiendas, las dimensiones del surtido y el número de categorías."},{termino:"Profundidad",significado:"número de variantes que la marca ofrece por cada producto en cada familia."},{termino:"Retail",terminoHtml:"<em>Retail</em>",significado:"concepto que se refiere a la venta al por menor o comercio minorista. Sistema de comercialización que entrega el producto al cliente."},{termino:"Señalización comercial",significado:"herramienta muy importante que ayuda a mejorar la información dentro del establecimiento, de tal forma que el visitante encuentre fácil el producto que necesita."},{termino:"Surtido",significado:"conjunto de productos ofertados por los diferentes establecimientos comerciales y que se encuentran dispuestos para que el consumidor los compre."},{termino:"Vitrinismo",significado:"técnicas y estrategias que se emplean en el diseño de un escaparate o vitrina con el fin de conquistar los clientes que transitan en el establecimiento, incitarlos e invitarlos a que realicen la compra de los productos exhibidos."}],complementario:[{texto:"Quintero, A., L. F. (2015). El sector <i>retail</i>, los puntos de venta y el comportamiento de compra de los consumidores de la base de la pirámide en la comuna 10 de la ciudad de Medellín. Revista Ciencias Estratégicas, 23(33), 109-118.",tipo:"Artículo PDF",descarga:"/downloads/anexo-el-sector-retail.pdf"},{texto:"González, D. [Marketing 2.0]. (2019). ¿Qué es <i>merchandising</i>? [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=Val9lx16bsc"},{texto:"Salgado, R. [Visual Branding LA]. (2013). Conceptos básicos de <i>visual merchandising</i>. [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=xZZ63K6cVbc"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Samuel Pinilla Hurtado",cargo:"Experto temático",centro:"Centro de Comercio - Regional Antioquia"},{nombre:"Zvi Daniel Grosman",cargo:"Diseñador instruccional",centro:"Centro Agropecuario La Granja - Regional Tolima"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jorge Armando Villamizar Moreno",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Fabian Robles Méndez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Felipe Herrera Roldán",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ángela María Maldonado Jaime",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ludwyng Corzo García",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});n["a"].prototype.$config=v;var y=o("9224");n["a"].prototype.$package=y,new n["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},9370:function(e,a,o){e.exports=o.p+"img/banner-princiapal.7d991530.png"},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){}});
//# sourceMappingURL=app.874d1d75.js.map