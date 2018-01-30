webpackHotUpdate(0,{

/***/ 14:
/***/ (function(module, exports) {

const constants = {
    'preview_animation_duration': '2s',
    'picture_animation_duration': '1s',
    'preview_frame_color': 'black',
    'body_color': '#232326',
    'body_color_light': '#54545b',
    'shadow_color': 'rgba(238,130,238, 0.5)',
    'text_color': 'white',
    'picture_height': '200px',
    'picture_width': '300px',
    'picture_edit_height': '200px',
    'picture_edit_width': '300px',
    'border_radius': '0.3rem',
    'add_album_border': 'white 1px solid',
    'add_album_font_size': '1rem',
    'dialog_bg': 'black',
    'preview_border_width': '10px',
    'pagination_size': '20px'
};

module.exports = constants;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".app_container {\n  margin: 2rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.app_container .app_page {\n  background-color: black;\n  box-shadow: 0px 0px 5px 5px black;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  -ms-grid-column-align: stretch;\n      justify-items: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  z-index: 0;\n}\n.app_container .app_page .P_pagination {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  grid-column-end: 5;\n  color: white;\n  cursor: pointer;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .P_pagination {\n    grid-column-end: 4;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .P_pagination {\n    grid-column-end: 3;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .P_pagination {\n    grid-column-end: 2;\n  }\n}\n.app_container .app_page .P_pagination .arrow {\n  fill: white;\n  height: calc(10px);\n  width: calc(10px);\n}\n.app_container .app_page .P_pagination .P_link_page {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  vertical-align: middle;\n  border: 1px solid white;\n}\n.app_container .app_page .P_pagination .P_page,\n.app_container .app_page .P_pagination .P_prev_page,\n.app_container .app_page .P_pagination .P_next_page {\n  display: inline-block;\n  margin: 2px;\n  text-align: center;\n  vertical-align: middle;\n}\n.app_container .app_page .P_pagination .P_link_prev_page:focus,\n.app_container .app_page .P_pagination .P_link_next_page:focus {\n  outline: none;\n}\n.app_container .app_page .P_pagination .active {\n  color: #901490;\n  font-weight: 700;\n}\n.app_container .app_page .P_pagination .disabled {\n  color: #333333;\n  cursor: default;\n}\n.app_container .app_page .P_pagination .disabled .arrow {\n  fill: #333333;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page {\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page {\n    -ms-grid-columns: (1fr)[2];\n        grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page {\n    -ms-grid-columns: (1fr)[1];\n        grid-template-columns: repeat(1, 1fr);\n  }\n}\n.app_container .app_page .Data_loader {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  grid-column-end: 5;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .Data_loader {\n    grid-column-end: 4;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .Data_loader {\n    grid-column-end: 3;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .Data_loader {\n    grid-column-end: 2;\n  }\n}\n.app_container .app_page .Data_loader .loader-inner {\n  margin: auto;\n}\n.app_container .app_page .header_menu {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  grid-column-end: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .header_menu {\n    grid-column-end: 3;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .header_menu {\n    grid-column-end: 2;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .header_menu {\n    grid-column-end: 1;\n  }\n}\n.app_container .app_page .header_menu .menu_item {\n  padding: 1rem;\n  cursor: pointer;\n  text-shadow: 2px 2px rgba(238, 130, 238, 0.5);\n  font-size: 1rem;\n}\n.app_container .app_page .header_menu .menu_item:hover {\n  color: rgba(238, 130, 238, 0.5);\n  text-shadow: none;\n}\n.app_container .app_page .header_menu .menu_item:hover a {\n  color: rgba(238, 130, 238, 0.5);\n}\n.app_container .app_page .header_menu .menu_item a {\n  text-decoration: none;\n  color: white;\n}\n.app_container .app_page .search_menu {\n  -ms-grid-column: 4;\n      grid-column-start: 4;\n  padding: 1rem;\n  text-shadow: 2px 2px rgba(238, 130, 238, 0.5);\n  font-size: 1rem;\n  text-align: right;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 15px;\n  z-index: 40;\n}\n@media screen and (max-width: 1400px) {\n  .app_container .app_page .search_menu {\n    -ms-grid-column: 3;\n        grid-column-start: 3;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .app_container .app_page .search_menu {\n    -ms-grid-column: 2;\n        grid-column-start: 2;\n  }\n}\n@media screen and (max-width: 700px) {\n  .app_container .app_page .search_menu {\n    -ms-grid-column: 1;\n        grid-column-start: 1;\n    text-align: left;\n  }\n}\n.app_container .app_page .search_menu .search_input {\n  background-color: #232326;\n  color: white;\n  padding-left: 3px;\n  border: none;\n  box-shadow: 0px 0px 2px 2px;\n  margin: 4px;\n}\n.app_container .app_page .search_menu .search_input:focus {\n  outline: none;\n  background-color: #54545b;\n}\n.app_container .app_page .image_main_wrapper {\n  padding: 1rem;\n  height: 200px;\n  width: 300px;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper {\n  height: 200px;\n  width: 300px;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper .image {\n  height: 200px;\n  width: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper .overlay .overlay_top svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.app_container .app_page .image_main_wrapper .image_wrapper .overlay .overlay_bottom_text {\n  font-size: 1.5rem;\n  margin: 0.5rem;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.ab0ddf9b99750428b565.hot-update.js.map