(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2dN9c",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3WWVw"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3TGQ6",Modal:"Modal_Modal__iKypP"}},12:function(e,t,a){e.exports={App:"App_App__3FBGC",Loader:"App_Loader__3nB8-"}},19:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__b3j8l"}},20:function(e,t,a){e.exports={Button:"Button_Button__1N1DW"}},26:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__25GAw",SearchForm:"Searchbar_SearchForm__3VCNW",SearchFormButton:"Searchbar_SearchFormButton__GpXsH",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2ybv9",SearchFormInput:"Searchbar_SearchFormInput__Ydb--"}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(26),a(13)),i=a(3),l=a(17),u=a.n(l),m=a(21),j=a(4),b=a.n(j),h=a(1);function d(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(h.jsx)("header",{className:b.a.Searchbar,children:Object(h.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault();var a=r.trim();a&&t(a),o("")},children:[Object(h.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(h.jsx)("span",{className:b.a.SearchFormButtonLabel,children:Object(h.jsx)(m.a,{size:"25px"})})}),Object(h.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)}})]})})}var p=a(10),O=a.n(p);function f(e){var t=e.item,a=e.onClick;return Object(h.jsx)("li",{className:O.a.ImageGalleryItem,onClick:a,children:Object(h.jsx)("img",{src:t.webformatURL,alt:t.tags,className:O.a.ImageGalleryItemImage})})}var g=a(11),_=a.n(g),v=a(18),x=a.n(v);function S(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(h.jsx)(x.a,{isOpen:t,onRequestClose:t,className:_.a.Modal,overlayClassName:_.a.Overlay,ariaHideApp:!1,children:Object(h.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&t()},children:Object(h.jsx)("div",{children:a})})})}var y=a(19),I=a.n(y);function w(e){var t=e.items,a=Object(n.useState)(null),c=Object(i.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],m=l[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e,t){return Object(h.jsx)(f,{item:e,onClick:function(){!function(e){o(e),m(!0)}(t)}},t)}))}),u&&Object(h.jsx)(S,{onClose:function(){m((function(e){return!e}))},children:Object(h.jsx)("img",{src:t[r].largeImageURL,alt:t[r].tags})})]})}var F="23523272-7e7e55898992c75b8603edf48";var N=a(20),C=a.n(N);var G=function(e){return Object(h.jsx)("button",{type:"button",onClick:e.onClick,className:C.a.Button,children:e.children})},k=a(12),B=a.n(k),L="pending",E="resolved",A="rejected",M="needLoading";function T(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),l=o[0],m=o[1],j=Object(n.useState)(1),b=Object(i.a)(j,2),p=b[0],O=b[1],f=Object(n.useState)(!1),g=Object(i.a)(f,2),_=g[0],v=g[1],x=Object(n.useState)(null),S=Object(i.a)(x,2),y=S[0],I=S[1],N=Object(n.useState)(null),C=Object(i.a)(N,2),k=C[0],T=C[1];Object(n.useEffect)((function(){k===M&&(T(L),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(F,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Can't get images for ".concat(e)))}))}(a,p).then((function(e){var t=e.hits.length;if(0===t)return I(new Error("No search results for ".concat(a))),void T(A);m((function(t){return[].concat(Object(s.a)(l),Object(s.a)(e.hits))})),v(W(t)),T(E)})).then((function(){1!==p&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){I(e),T(A)})))}),[l,p,a,k]);var W=function(e){return!(e<12)};return Object(h.jsxs)("div",{className:B.a.App,children:[Object(h.jsx)(d,{onSubmit:function(e){m([]),c(e),O(1),T(M)}}),k===A&&Object(h.jsx)("div",{children:y.message}),Object(h.jsx)(w,{items:l}),k===L&&Object(h.jsx)("div",{className:B.a.Loader,children:Object(h.jsx)(u.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})}),k===E&&_&&Object(h.jsx)(G,{onClick:function(){O((function(e){return e+1})),T(M)},children:"Load more"})]})}o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.67373b72.chunk.js.map