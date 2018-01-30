webpackHotUpdate(0,{

/***/ 157:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: `setAlbums` has already been exported. Exported identifiers must be unique. (33:0)\n\n\u001b[0m \u001b[90m 31 | \u001b[39m\u001b[90m// }\u001b[39m\n \u001b[90m 32 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m setAlbums(albums) {\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 34 | \u001b[39m    \u001b[36mreturn\u001b[39m {\n \u001b[90m 35 | \u001b[39m        type\u001b[33m:\u001b[39m types\u001b[33m.\u001b[39m\u001b[33mSET_ALBUMS\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 36 | \u001b[39m        albums\u001b[0m\n");

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let HttpService = class HttpService {
    constructor() {
        this.http = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
            headers: { "Content-Type": "application/json" },
            responseType: 'json'
        });
    }

    doGet(route, transformResponse) {
        return this.http.get(route).then(result => {
            if (transformResponse) {
                return transformResponse(result.data);
            }
            return result.data;
        });
    }

    doDelete(route, transformResponse) {
        return this.http.delete(route).then(result => {
            if (transformResponse) {
                return transformResponse(result.data);
            }
            return result.data;
        });
    }

    doPost(route, request) {
        return this.http.post(route, JSON.stringify(request)).then(result => result.data);
    }

    sendFile(route, file) {
        let fd = new FormData();
        fd.append('file', file);
        //fd.append('receptId', receptId);
        return this.http.post(route, fd, {
            headers: { 'Content-Type': undefined }
        }).then(result => result.data);
    }
};


/* harmony default export */ __webpack_exports__["a"] = (new HttpService());

/***/ })

})
//# sourceMappingURL=0.eebf201c7cdd1683a0b1.hot-update.js.map