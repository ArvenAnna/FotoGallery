webpackHotUpdate(0,{

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
        return this.http.post(route, JSON.stringify(request))
        //.post(route, request)
        .then(result => result.data);
    }

    doPut(route, request) {
        return this.http.put(route, JSON.stringify(request)).then(result => result.data);
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
//# sourceMappingURL=0.e1702b27d6e3c1d41c3a.hot-update.js.map