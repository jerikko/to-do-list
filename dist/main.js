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
        To-Do Items: ${JSON.stringify(this.items[0])}`
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
        const toDoItem = new _ToDoItem_js__WEBPACK_IMPORTED_MODULE_0__.default('Project.js', 
                                        'Build out Project class', 
                                        'July 26, 2021')
        console.log(toDoItem.info)

        const project = new _Project_js__WEBPACK_IMPORTED_MODULE_1__.default('To-Do List app',
                                    'Build out To-Do List app',
                                    'July 28, 2021')
        console.log(project)
        project.addToDoItem(toDoItem)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCLHVCQUF1QixpQkFBaUI7QUFDeEMsb0JBQW9CLGFBQWE7QUFDakMsdUJBQXVCLDhCQUE4QjtBQUNyRDs7QUFFQSxDOzs7Ozs7Ozs7Ozs7OztBQ3JCZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1Qix1QkFBdUIsaUJBQWlCO0FBQ3hDLG9CQUFvQixhQUFhO0FBQ2pDOztBQUVBLEM7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNGOztBQUVsQzs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVE7QUFDckM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixnREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxXIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0ICB7XG4gICAgXG4gICAgY29uc3RydWN0b3IgKCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLml0ZW1zID0gW11cbiAgICB9XG5cbiAgICBhZGRUb0RvSXRlbSh0b0RvSXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2godG9Eb0l0ZW0pXG4gICAgfVxuICAgIFxuICAgIGdldCBpbmZvKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICBUaXRsZTogJHt0aGlzLnRpdGxlfSwgXG4gICAgICAgIERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259LCBcbiAgICAgICAgRHVlIGRhdGU6ICR7dGhpcy5kdWVEYXRlfSxcbiAgICAgICAgVG8tRG8gSXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtc1swXSl9YFxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9JdGVtICB7XG4gICAgXG4gICAgY29uc3RydWN0b3IgKCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cbiAgICBcbiAgICBnZXQgaW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgVGl0bGU6ICR7dGhpcy50aXRsZX0sIFxuICAgICAgICBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufSwgXG4gICAgICAgIER1ZSBkYXRlOiAke3RoaXMuZHVlRGF0ZX1gIFxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvRG9JdGVtIGZyb20gJy4vVG9Eb0l0ZW0uanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnXG5cbmNvbnNvbGUubG9nKCd0ZXN0JylcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG5cbi8vIHRlc3QgYnV0dG9uXG5mdW5jdGlvbiBjcmVhdGVCdG4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdDbGljaydcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0oJ1Byb2plY3QuanMnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQnVpbGQgb3V0IFByb2plY3QgY2xhc3MnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSnVseSAyNiwgMjAyMScpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9JdGVtLmluZm8pXG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCdUby1EbyBMaXN0IGFwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQnVpbGQgb3V0IFRvLURvIExpc3QgYXBwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKdWx5IDI4LCAyMDIxJylcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICAgICAgcHJvamVjdC5hZGRUb0RvSXRlbSh0b0RvSXRlbSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5pbmZvKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Lml0ZW1zLnRvU3RyaW5nKCkpXG4gICAgfSlcbiAgICBcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKVxufVxuXG5jcmVhdGVCdG4oKSJdLCJzb3VyY2VSb290IjoiIn0=