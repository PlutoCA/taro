(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1808:function(e,a,t){"use strict";var n=t(1),r=(t(1798),t(52),t(77),t(1795),t(9)),l=(t(1799),t(1800),t(1803),t(0)),c=t.n(l),i=t(1793),s=t.n(i),m=t(1794),o=t(1792),v=t(1796),h=t(1797),u=t(1809),d=t(1810),b=t(1801),_=t(1813),E=t(1804),g=t(1805),f=t(131),p=t.n(f);function k(e){var a=e.activeBasePath,t=e.activeRegxp,l=e.to,i=e.href,s=e.label,u=(e.position,Object(r.a)(e,["activeBasePath","activeRegxp","to","href","label","position"])),d=function(){var e,a=Object(o.a)().siteConfig.customFields.versions,t=void 0===a?[]:a,n=t[0],r=Object(h.d)(),l=t.find((function(e){return r.pathname.includes(e)}));return r.pathname.includes("/docs/next")&&(l="next"),[n,null!=(e=l)?e:n]}(),b=d[0],_=d[1];if(b!==_&&u.version&&(s=("next"===_?"":"v")+_),l&&l.startsWith("docs/")&&b!==_){var E=l.split("/"),g=E[0],f=E.slice(1);l=[g,_].concat(f).join("/");var p=a.split("/"),k=p[0],N=p.slice(1);a=[k,_].concat(N).join("/")}var j=Object(v.a)(l),M=Object(v.a)(a);return c.a.createElement(m.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({isNavLink:!0,activeClassName:"navbar__link--active",to:j},a?{isActive:function(e,n){return t?new RegExp(a).test(n.pathname):n.pathname.startsWith(M)}}:null),u),s)}function N(e){var a=e.items,t=e.position,l=Object(r.a)(e,["items","position"]);return a?c.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},l),l.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):c.a.createElement(k,Object(n.a)({},l,{className:s()(["navbar__item","navbar__link",l.className])}))}function j(e){var a=e.items,t=Object(r.a)(e,["items"]);return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link menu__link--sublist"},t),t.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(k,Object(n.a)({className:"menu__link"},e)))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link"},t)))}a.a=function(){var e,a,t=Object(o.a)(),r=t.siteConfig.themeConfig,i=r.navbar,v=(i=void 0===i?{}:i).title,h=i.links,f=void 0===h?[]:h,k=i.hideOnScroll,M=void 0!==k&&k,w=r.disableDarkMode,O=void 0!==w&&w,z=t.isClient,y=Object(l.useState)(!1),C=y[0],x=y[1],T=Object(l.useState)(!1),B=T[0],A=T[1],P=Object(b.a)(),R=P.isDarkTheme,D=P.setLightTheme,I=P.setDarkTheme,L=Object(_.a)(M),S=L.navbarRef,F=L.isNavbarVisible,J=Object(g.a)(),U=J.logoLink,H=J.logoLinkProps,V=J.logoImageUrl,W=J.logoAlt;Object(E.a)(C);var q=Object(l.useCallback)((function(){x(!0)}),[x]),G=Object(l.useCallback)((function(){x(!1)}),[x]),K=Object(l.useCallback)((function(e){return e.target.checked?I():D()}),[D,I]);return c.a.createElement("nav",{ref:S,className:s()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":C},e[p.a.navbarHideable]=M,e[p.a.navbarHidden]=!F,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(m.a,Object(n.a)({className:"navbar__brand",to:U},H),null!=V&&c.a.createElement("img",{key:z,className:"navbar__logo",src:V,alt:W}),null!=v&&c.a.createElement("strong",{className:s()("navbar__title",(a={},a[p.a.hideLogoText]=B,a))},v)),f.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},f.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))})),!O&&c.a.createElement(d.a,{className:p.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:R,onChange:K}),c.a.createElement(u.a,{handleSearchBarToggle:A,isSearchBarExpanded:B}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:G}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(m.a,Object(n.a)({className:"navbar__brand",onClick:G,to:U},H),null!=V&&c.a.createElement("img",{key:z,className:"navbar__logo",src:V,alt:W}),null!=v&&c.a.createElement("strong",{className:"navbar__title"},v)),!O&&C&&c.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:R,onChange:K})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},f.map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{onClick:G,key:a}))})))))))}},1811:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("footer",{className:"footer",id:"footer"},r.a.createElement("div",{className:"grid_c1 footer_cont"},r.a.createElement("div",{className:"footer_logo_container"},r.a.createElement("div",{className:"footer_logo"}),r.a.createElement("span",{className:"footer_designedby"})),r.a.createElement("div",{className:"footer_link_container"},r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),r.a.createElement("p",null,r.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),r.a.createElement("p",{className:"footer_link_connect_wrap"},r.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",r.a.createElement("span",{className:"wechat_qrcode_icon"},r.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},r.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),r.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),r.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),r.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),r.a.createElement("span",{className:"footer_link_wechat_img"},r.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),r.a.createElement("div",{className:"footer_link"},r.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),r.a.createElement("div",{className:"copyright"},r.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1820:function(e,a,t){"use strict";t(77);var n=t(0),r=t.n(n),l=t(1793),c=t.n(l),i=t(1791),s=t(1794),m=t(1827),o=t(133),v=t.n(o),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,o,u=e.children,d=e.frontMatter,b=e.metadata,_=e.truncated,E=e.isBlogPostPage,g=void 0!==E&&E,f=b.date,p=b.permalink,k=b.tags,N=b.readingTime,j=d.author,M=d.title,w=d.author_url||d.authorURL,O=d.author_title||d.authorTitle,z=d.author_image_url||d.authorImageURL;return r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(a=g?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],l=h[parseInt(t[1],10)-1],o=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",v.a.blogPostTitle)},g?M:r.a.createElement(s.a,{to:p},M)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:v.a.blogPostDate},l," ",o,", ",n," ",N&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(N)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},z&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:z,alt:j})),r.a.createElement("div",{className:"avatar__intro"},j&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},j)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:m.a},u)),(k.length>0||_)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),_&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:b.permalink,"aria-label":"Read more about "+M},r.a.createElement("strong",null,"Read More")))))}},1830:function(e,a,t){var n=t(24).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},830:function(e,a,t){"use strict";t.r(a);t(1830);var n=t(0),r=t.n(n),l=t(1806),c=t(1820),i=t(1794);a.default=function(e){var a=e.metadata,t=e.items,n=a.allTagsPath,s=a.name,m=a.count;return r.a.createElement(l.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,m," ",function(e,a){return e>1?a+"s":a}(m,"post"),' tagged with "',s,'"'),r.a.createElement(i.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}}}]);