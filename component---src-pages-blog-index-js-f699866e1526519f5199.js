"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[524],{72:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(1883),r="layout-module--nav-link-item--a5f0a",s="layout-module--nav-link-text--69cda";var c=e=>{let{pageTitle:t,children:a}=e;const c=(0,n.useStaticQuery)("3159585216");return l.createElement("div",{className:"layout-module--container--78b04"},l.createElement("header",{className:"layout-module--site-title--e4dea"},c.site.siteMetadata.title),l.createElement("nav",null,l.createElement("ul",{className:"layout-module--nav-links--1113b"},l.createElement("li",{className:r},l.createElement(n.Link,{to:"/",className:s},"Home")),l.createElement("li",{className:r},l.createElement(n.Link,{to:"/about",className:s},"About")),l.createElement("li",{className:r},l.createElement(n.Link,{to:"/blog",className:s},"Blog")),l.createElement("li",{className:r},l.createElement(n.Link,{to:"/literatures",className:s},"Literatures")),l.createElement("li",{className:r},l.createElement(n.Link,{to:"/terms",className:s},"Terms")))),l.createElement("main",null,l.createElement("h1",{className:"layout-module--heading--f158c"},t),a),l.createElement("div",{style:{height:"40px",backgroundColor:"transparent",textAlign:"center",fontSize:"xx-small",paddingTop:"20px"},className:"footer-div"}))}},9357:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return l.createElement("title",null,t," | ",a.site.siteMetadata.title)}},1025:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m}});var l=a(7294),n=a(1883),r=a(72),s=a(9357),c=a(2020);const m=()=>l.createElement(s.Z,{title:"Blog Posts"});t.default=e=>{let{data:t}=e;return t.allMdx.nodes.map((e=>{console.log(e.frontmatter)})),l.createElement(r.Z,{pageTitle:"Blog Posts"},t.allMdx.nodes.map((e=>l.createElement("article",{key:e.id},l.createElement("h3",null,l.createElement(n.Link,{className:"entry-title",to:"/blog/"+e.frontmatter.slug},e.frontmatter.title)),l.createElement(l.Fragment,null,l.createElement("p",{className:"entry-date"},(0,c.Z)(e.frontmatter.date)),l.createElement("p",null,e.excerpt))))))}},2020:function(e,t){t.Z=e=>{var t=e.split("-");return new Date(t[0],t[1]-1,t[2]).toDateString()}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-f699866e1526519f5199.js.map