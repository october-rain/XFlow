(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{a0kT:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BlwA");\n/* harmony import */ var dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2NSI");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "imodelservice"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#imodelservice",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IModelService"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "/** \u5982\u4f55\u5f15\u5165\uff1f */\\nimport { IModelService } from \'@ali/xflow\'\\n\\n/**\\n * Model Service \u7c7b\u578b\\n */\\nexport interface IModelService {\\n  /** \u6ce8\u518c\u6a21\u578b */\\n  registerModel: <T>(options: IModelOptions<T>) => Disposable\\n  /** \u5f02\u6b65\u83b7\u53d6\u6a21\u578b\uff1apromise\u4f1a\u5728\u6a21\u578b\u6ce8\u518c\u6210\u529f\u540eresolve */\\n  awaitModel: <T = any>(token: Token<T>) => Promise<NsModel.IModel<T>>\\n  /** \u540c\u6b65\u83b7\u53d6\u6a21\u578b\uff0c\u6ca1\u6709\u6ce8\u518c\u7684token\u4f1a\u8fd4\u56deundefined */\\n  findDeferredModel: <T = any>(token: Token<T>) => undefined | Deferred<NsModel.IModel<T>>\\n}",\n    lang: "tsx"\n  })));\n});\n\n//# sourceURL=webpack:///./docs/api/interface/model.md?')}}]);