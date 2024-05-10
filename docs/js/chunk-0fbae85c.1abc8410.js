(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fbae85c"],{"1cb8":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"login-wrap"},[a._m(0),t("div",{staticClass:"right"},[t("div",{staticClass:"inner-wrap"},[t("h3",[a._v("Forgot Password? 🔒")]),t("p",{staticClass:"subtitle"},[a._v("Enter your email and we'll send you instructions to reset your password")]),t("el-form",{ref:"form",attrs:{model:a.form,rules:a.rules,"label-position":"top"}},[t("el-form-item",{attrs:{label:"Email",prop:"email"}},[t("el-input",{attrs:{placeholder:"Jason@example.com",clearable:""},model:{value:a.form.email,callback:function(e){a.$set(a.form,"email",e)},expression:"form.email"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){return a.sendEmail("form")}}},[a._v("Send reset link")])],1),t("el-form-item",[t("p",{staticClass:"new"},[t("router-link",{attrs:{to:"/login"}},[t("i",{staticClass:"el-icon-arrow-left"}),a._v(" Back to login ")])],1)])],1)],1)])])},l=[function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"left"},[r("div",{staticClass:"logo-wrap"},[r("img",{attrs:{src:t("4ffd"),alt:""}}),r("span",[a._v("Vue Starter")])])])}],i={name:"forgot-password",data:function(){var a=function(a,e,t){var r=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;""===e?t(new Error("The Email field is required")):r.test(e)?t():t(new Error("The Email field must be a valid email"))};return{form:{email:""},rules:{email:[{required:!0,trigger:"blur",validator:a}]}}},methods:{sendEmail:function(a){var e=this;this.$refs[a].validate((function(a){if(!a)return!1;e.$http.post("forgot-password",e.form).then((function(a){}))}))}}},o=i,f=(t("e22e"),t("2877")),s=Object(f["a"])(o,r,l,!1,null,"6d20bfb9",null);e["default"]=s.exports},"4ffd":function(a,e){a.exports="data:image/png;base64,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"},a773:function(a,e,t){},e22e:function(a,e,t){"use strict";var r=t("a773"),l=t.n(r);l.a}}]);