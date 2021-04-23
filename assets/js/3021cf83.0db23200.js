(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var s=n(0),o=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=s,m=p["".concat(r,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"CarbonAds",(function(){return u})),n.d(t,"default",(function(){return d}));var s=n(3),o=n(7),a=n(0),r=n(137),c={id:"getting-started",title:"Getting started",layout:"Guide",order:2},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"export const CarbonAds = () => {",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/cssnano/cssnano/edit/master/site/docs/getting-started.mdx",version:"current",lastUpdatedBy:"Ludovico Fischer",lastUpdatedAt:1619208413,formattedLastUpdatedAt:"4/23/2021",frontMatter:{id:"getting-started",title:"Getting started",layout:"Guide",order:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/Introduction"},next:{title:"Config Files",permalink:"/docs/config-file"}},l=[{value:"What is a build process?",id:"what-is-a-build-process",children:[]},{value:"Installing Node.js &amp; npm",id:"installing-nodejs--npm",children:[]},{value:"Using PostCSS CLI",id:"using-postcss-cli",children:[]},{value:"Alternatives to using the CLI",id:"alternatives-to-using-the-cli",children:[{value:"Grunt",id:"grunt",children:[]},{value:"Gulp",id:"gulp",children:[]},{value:"Webpack",id:"webpack",children:[]},{value:"Others",id:"others",children:[]}]}],u=function(){return Object(a.useEffect)((function(){if(!document.getElementById("carbonads")){var e=document.querySelector(".carbon_ads_mdx_wrapper"),t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CEBI62JN&placement=cssnanoco",t.async=!0,t.id="_carbonads_js",e.appendChild(t)}})),Object(r.b)("div",{className:"carbon_ads_mdx_wrapper"})},p={toc:l,CarbonAds:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(u,{mdxType:"CarbonAds"}),Object(r.b)("h2",{id:"what-is-a-build-process"},"What is a build process?"),Object(r.b)("p",null,"A build process is a sequence of tasks, usually automated, that you run each\ntime that you want to deploy a new release of your application. cssnano fits\ninto this build process as a tool that should be run on your development CSS,\nand in turn will create compressed production assets. These are then uploaded\nto your production server or CDN."),Object(r.b)("p",null,"There are a number of different ways that you can compose a build process; we\nrecommend using the command line, but you might also want to consider an\nabstraction such as ",Object(r.b)("a",{parentName:"p",href:"http://gulpjs.com/"},"gulp"),", especially for more complex\nsystems."),Object(r.b)("h2",{id:"installing-nodejs--npm"},"Installing Node.js & npm"),Object(r.b)("p",null,"cssnano is installed using the command line, using ",Object(r.b)("a",{parentName:"p",href:"https://npmjs.com"},"npm"),"; so\nyou will need to use an application such as Terminal or the Windows Command\nPrompt. If you don't already have Node.js installed, then you'll need to\ninstall it."),Object(r.b)("p",null,"We require a minimum of Node.js version 10.13.0  to run, and we\nrecommend that you install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"nvm")," to manage\nyour Node.js versions."),Object(r.b)("p",null,"Alternately, you can ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"visit the Node.js website")," and\nfollow the instructions there to install it for your machine."),Object(r.b)("p",null,"cssnano is a ",Object(r.b)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," plugin, so running cssnano also requires installing PostCSS.\nOnce you have installed Node.js & npm, you can run this command to install\ncssnano and PostCSS into your project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install cssnano postcss --save-dev\n")),Object(r.b)("p",null,"Note that for most typical setups, we recommend that you compress your CSS\nduring your deployment step, so that when it is uploaded to your server/CDN\nit is already optimized. In most cases, you should not need to install cssnano\non your web server."),Object(r.b)("h2",{id:"using-postcss-cli"},"Using PostCSS CLI"),Object(r.b)("p",null,"Once you have cssnano installed, you will need a PostCSS runner in order to\nuse it to compress your CSS files. We recommend the PostCSS command line module,\nbut you can use any of the alternatives listed in the next section."),Object(r.b)("p",null,"You can install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/postcss/postcss-cli"},"PostCSS CLI"),"\nwith this command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev postcss-cli\n")),Object(r.b)("p",null,"Once you have done this, you will need to configure cssnano by creating a\n",Object(r.b)("inlineCode",{parentName:"p"},"postcss.config.js")," file in the root of your project. This should contain\ncssnano as well as any other ",Object(r.b)("a",{parentName:"p",href:"https://github.com/postcss/postcss/blob/main/docs/plugins.md"},"plugins")," that you might want for your project;\nas an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    plugins: [\n        require('cssnano')({\n            preset: 'default',\n        }),\n    ],\n};\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Read more about presets in ",Object(r.b)("a",{parentName:"em",href:"/docs/presets"},"our presets guide"),".")),Object(r.b)("p",null,"You can now minify your CSS files! Try it out by creating a CSS file in your\nproject named ",Object(r.b)("inlineCode",{parentName:"p"},"input.css"),", with some styles in there. Then, run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npx postcss input.css > output.css\n")),Object(r.b)("p",null,"You should then see an ",Object(r.b)("inlineCode",{parentName:"p"},"output.css")," with the same styles but compressed!"),Object(r.b)("p",null,"Note that you can also find a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cssnano/cssnano/tree/master/packages/example-cli-usage"},"basic example")," in our GitHub repository."),Object(r.b)("h2",{id:"alternatives-to-using-the-cli"},"Alternatives to using the CLI"),Object(r.b)("p",null,"You can also use any of the other available PostCSS runners to manage your\nCSS compression; these are the most common."),Object(r.b)("h3",{id:"grunt"},"Grunt"),Object(r.b)("p",null,"Use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nDmitry/grunt-postcss"},"grunt-postcss"),"."),Object(r.b)("h3",{id:"gulp"},"Gulp"),Object(r.b)("p",null,"Use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/postcss/gulp-postcss"},"gulp-postcss"),"."),Object(r.b)("h3",{id:"webpack"},"Webpack"),Object(r.b)("p",null,"You can use cssnano explicitly with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/postcss/postcss-loader"},"postcss-loader"),"."),Object(r.b)("p",null,"You can also use the cssnano with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin"},"webpack plugin")),Object(r.b)("h3",{id:"others"},"Others"),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/postcss/postcss#usage"},"PostCSS documentation")," for\nother available runners."))}d.isMDXComponent=!0}}]);