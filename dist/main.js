/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project  {
    
    constructor ( title, description, dueDate ) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.items = []
    }

    addToDoItem(toDoItem) {
        this.items.push(toDoItem)
    }
    
    get info() {
        return `
        Title: ${this.title}, 
        Description: ${this.description}, 
        Due date: ${this.dueDate},
        To-Do Items: ${JSON.stringify(this.items)}`
    }

}

/***/ }),

/***/ "./src/ToDoItem.js":
/*!*************************!*\
  !*** ./src/ToDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoItem)
/* harmony export */ });
class ToDoItem  {
    
    constructor ( title, description, dueDate ) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
    }
    
    get info() {
        return `
        Title: ${this.title}, 
        Description: ${this.description}, 
        Due date: ${this.dueDate}` 
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToDoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItem.js */ "./src/ToDoItem.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");



console.log('test')

const body = document.querySelector('body')


// test button
function createBtn() {
    const container = document.createElement('div')
    container.classList.add('container')
    const btn = document.createElement('button')
    btn.textContent = 'Click'
    btn.addEventListener('click', function() {
        const toDoItem1 = new _ToDoItem_js__WEBPACK_IMPORTED_MODULE_0__.default('Project.js', 
                                        'Build out Project class', 
                                        'July 26, 2021')
        console.log(toDoItem1.info)

        const toDoItem2 = new _ToDoItem_js__WEBPACK_IMPORTED_MODULE_0__.default('DOMStuff.js',
                                        'Build out DOMStuff module',
                                        'July 27, 2021')

        const project = new _Project_js__WEBPACK_IMPORTED_MODULE_1__.default('To-Do List app',
                                    'Build out To-Do List app',
                                    'July 28, 2021')
        console.log(project)
        project.addToDoItem(toDoItem1)
        project.addToDoItem(toDoItem2)
        console.log(project.info)
        console.log(project.items.toString())
    })
    
    body.appendChild(container)
    container.appendChild(btn)
}

createBtn()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCLHVCQUF1QixpQkFBaUI7QUFDeEMsb0JBQW9CLGFBQWE7QUFDakMsdUJBQXVCLDJCQUEyQjtBQUNsRDs7QUFFQSxDOzs7Ozs7Ozs7Ozs7OztBQ3JCZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1Qix1QkFBdUIsaUJBQWlCO0FBQ3hDLG9CQUFvQixhQUFhO0FBQ2pDOztBQUVBLEM7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNGOztBQUVsQzs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaURBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixpREFBUTtBQUN0QztBQUNBOztBQUVBLDRCQUE0QixnREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLFciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSApIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgIH1cblxuICAgIGFkZFRvRG9JdGVtKHRvRG9JdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh0b0RvSXRlbSlcbiAgICB9XG4gICAgXG4gICAgZ2V0IGluZm8oKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIFRpdGxlOiAke3RoaXMudGl0bGV9LCBcbiAgICAgICAgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn0sIFxuICAgICAgICBEdWUgZGF0ZTogJHt0aGlzLmR1ZURhdGV9LFxuICAgICAgICBUby1EbyBJdGVtczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKX1gXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0l0ZW0gIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSApIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuICAgIFxuICAgIGdldCBpbmZvKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICBUaXRsZTogJHt0aGlzLnRpdGxlfSwgXG4gICAgICAgIERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259LCBcbiAgICAgICAgRHVlIGRhdGU6ICR7dGhpcy5kdWVEYXRlfWAgXG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9Eb0l0ZW0gZnJvbSAnLi9Ub0RvSXRlbS5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcydcblxuY29uc29sZS5sb2coJ3Rlc3QnKVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cblxuLy8gdGVzdCBidXR0b25cbmZ1bmN0aW9uIGNyZWF0ZUJ0bigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0NsaWNrJ1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0b0RvSXRlbTEgPSBuZXcgVG9Eb0l0ZW0oJ1Byb2plY3QuanMnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQnVpbGQgb3V0IFByb2plY3QgY2xhc3MnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSnVseSAyNiwgMjAyMScpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9JdGVtMS5pbmZvKVxuXG4gICAgICAgIGNvbnN0IHRvRG9JdGVtMiA9IG5ldyBUb0RvSXRlbSgnRE9NU3R1ZmYuanMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdCdWlsZCBvdXQgRE9NU3R1ZmYgbW9kdWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSnVseSAyNywgMjAyMScpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCdUby1EbyBMaXN0IGFwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQnVpbGQgb3V0IFRvLURvIExpc3QgYXBwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKdWx5IDI4LCAyMDIxJylcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICAgICAgcHJvamVjdC5hZGRUb0RvSXRlbSh0b0RvSXRlbTEpXG4gICAgICAgIHByb2plY3QuYWRkVG9Eb0l0ZW0odG9Eb0l0ZW0yKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmluZm8pXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuaXRlbXMudG9TdHJpbmcoKSlcbiAgICB9KVxuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pXG59XG5cbmNyZWF0ZUJ0bigpIl0sInNvdXJjZVJvb3QiOiIifQ==