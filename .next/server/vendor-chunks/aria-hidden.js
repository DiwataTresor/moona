"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aria-hidden";
exports.ids = ["vendor-chunks/aria-hidden"];
exports.modules = {

/***/ "(ssr)/./node_modules/aria-hidden/dist/es5/index.js":
/*!****************************************************!*\
  !*** ./node_modules/aria-hidden/dist/es5/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;\nvar getDefaultParent = function (originalTarget) {\n    if (typeof document === 'undefined') {\n        return null;\n    }\n    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;\n    return sampleTarget.ownerDocument.body;\n};\nvar counterMap = new WeakMap();\nvar uncontrolledNodes = new WeakMap();\nvar markerMap = {};\nvar lockCount = 0;\nvar unwrapHost = function (node) {\n    return node && (node.host || unwrapHost(node.parentNode));\n};\nvar correctTargets = function (parent, targets) {\n    return targets\n        .map(function (target) {\n        if (parent.contains(target)) {\n            return target;\n        }\n        var correctedTarget = unwrapHost(target);\n        if (correctedTarget && parent.contains(correctedTarget)) {\n            return correctedTarget;\n        }\n        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');\n        return null;\n    })\n        .filter(function (x) { return Boolean(x); });\n};\n/**\n * Marks everything except given node(or nodes) as aria-hidden\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @param {String} [controlAttribute] - html Attribute to control\n * @return {Undo} undo command\n */\nvar applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {\n    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);\n    if (!markerMap[markerName]) {\n        markerMap[markerName] = new WeakMap();\n    }\n    var markerCounter = markerMap[markerName];\n    var hiddenNodes = [];\n    var elementsToKeep = new Set();\n    var elementsToStop = new Set(targets);\n    var keep = function (el) {\n        if (!el || elementsToKeep.has(el)) {\n            return;\n        }\n        elementsToKeep.add(el);\n        keep(el.parentNode);\n    };\n    targets.forEach(keep);\n    var deep = function (parent) {\n        if (!parent || elementsToStop.has(parent)) {\n            return;\n        }\n        Array.prototype.forEach.call(parent.children, function (node) {\n            if (elementsToKeep.has(node)) {\n                deep(node);\n            }\n            else {\n                var attr = node.getAttribute(controlAttribute);\n                var alreadyHidden = attr !== null && attr !== 'false';\n                var counterValue = (counterMap.get(node) || 0) + 1;\n                var markerValue = (markerCounter.get(node) || 0) + 1;\n                counterMap.set(node, counterValue);\n                markerCounter.set(node, markerValue);\n                hiddenNodes.push(node);\n                if (counterValue === 1 && alreadyHidden) {\n                    uncontrolledNodes.set(node, true);\n                }\n                if (markerValue === 1) {\n                    node.setAttribute(markerName, 'true');\n                }\n                if (!alreadyHidden) {\n                    node.setAttribute(controlAttribute, 'true');\n                }\n            }\n        });\n    };\n    deep(parentNode);\n    elementsToKeep.clear();\n    lockCount++;\n    return function () {\n        hiddenNodes.forEach(function (node) {\n            var counterValue = counterMap.get(node) - 1;\n            var markerValue = markerCounter.get(node) - 1;\n            counterMap.set(node, counterValue);\n            markerCounter.set(node, markerValue);\n            if (!counterValue) {\n                if (!uncontrolledNodes.has(node)) {\n                    node.removeAttribute(controlAttribute);\n                }\n                uncontrolledNodes.delete(node);\n            }\n            if (!markerValue) {\n                node.removeAttribute(markerName);\n            }\n        });\n        lockCount--;\n        if (!lockCount) {\n            // clear\n            counterMap = new WeakMap();\n            counterMap = new WeakMap();\n            uncontrolledNodes = new WeakMap();\n            markerMap = {};\n        }\n    };\n};\n/**\n * Marks everything except given node(or nodes) as aria-hidden\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */\nvar hideOthers = function (originalTarget, parentNode, markerName) {\n    if (markerName === void 0) { markerName = 'data-aria-hidden'; }\n    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\n    if (!activeParentNode) {\n        return function () { return null; };\n    }\n    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10\n    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));\n    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');\n};\nexports.hideOthers = hideOthers;\n/**\n * Marks everything except given node(or nodes) as inert\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */\nvar inertOthers = function (originalTarget, parentNode, markerName) {\n    if (markerName === void 0) { markerName = 'data-inert-ed'; }\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\n    if (!activeParentNode) {\n        return function () { return null; };\n    }\n    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');\n};\nexports.inertOthers = inertOthers;\n/**\n * @returns if current browser supports inert\n */\nvar supportsInert = function () {\n    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');\n};\nexports.supportsInert = supportsInert;\n/**\n * Automatic function to \"suppress\" DOM elements - _hide_ or _inert_ in the best possible way\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */\nvar suppressOthers = function (originalTarget, parentNode, markerName) {\n    if (markerName === void 0) { markerName = 'data-suppressed'; }\n    return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);\n};\nexports.suppressOthers = suppressOthers;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCLEdBQUcscUJBQXFCLEdBQUcsbUJBQW1CLEdBQUcsa0JBQWtCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczUvaW5kZXguanM/NTVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3VwcHJlc3NPdGhlcnMgPSBleHBvcnRzLnN1cHBvcnRzSW5lcnQgPSBleHBvcnRzLmluZXJ0T3RoZXJzID0gZXhwb3J0cy5oaWRlT3RoZXJzID0gdm9pZCAwO1xudmFyIGdldERlZmF1bHRQYXJlbnQgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHNhbXBsZVRhcmdldCA9IEFycmF5LmlzQXJyYXkob3JpZ2luYWxUYXJnZXQpID8gb3JpZ2luYWxUYXJnZXRbMF0gOiBvcmlnaW5hbFRhcmdldDtcbiAgICByZXR1cm4gc2FtcGxlVGFyZ2V0Lm93bmVyRG9jdW1lbnQuYm9keTtcbn07XG52YXIgY291bnRlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgdW5jb250cm9sbGVkTm9kZXMgPSBuZXcgV2Vha01hcCgpO1xudmFyIG1hcmtlck1hcCA9IHt9O1xudmFyIGxvY2tDb3VudCA9IDA7XG52YXIgdW53cmFwSG9zdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgKG5vZGUuaG9zdCB8fCB1bndyYXBIb3N0KG5vZGUucGFyZW50Tm9kZSkpO1xufTtcbnZhciBjb3JyZWN0VGFyZ2V0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIHRhcmdldHMpIHtcbiAgICByZXR1cm4gdGFyZ2V0c1xuICAgICAgICAubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3JyZWN0ZWRUYXJnZXQgPSB1bndyYXBIb3N0KHRhcmdldCk7XG4gICAgICAgIGlmIChjb3JyZWN0ZWRUYXJnZXQgJiYgcGFyZW50LmNvbnRhaW5zKGNvcnJlY3RlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb3JyZWN0ZWRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcignYXJpYS1oaWRkZW4nLCB0YXJnZXQsICdpbiBub3QgY29udGFpbmVkIGluc2lkZScsIHBhcmVudCwgJy4gRG9pbmcgbm90aGluZycpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiBCb29sZWFuKHgpOyB9KTtcbn07XG4vKipcbiAqIE1hcmtzIGV2ZXJ5dGhpbmcgZXhjZXB0IGdpdmVuIG5vZGUob3Igbm9kZXMpIGFzIGFyaWEtaGlkZGVuXG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBFbGVtZW50W119IG9yaWdpbmFsVGFyZ2V0IC0gZWxlbWVudHMgdG8ga2VlcCBvbiB0aGUgcGFnZVxuICogQHBhcmFtIFtwYXJlbnROb2RlXSAtIHRvcCBlbGVtZW50LCBkZWZhdWx0cyB0byBkb2N1bWVudC5ib2R5XG4gKiBAcGFyYW0ge1N0cmluZ30gW21hcmtlck5hbWVdIC0gYSBzcGVjaWFsIGF0dHJpYnV0ZSB0byBtYXJrIGV2ZXJ5IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbY29udHJvbEF0dHJpYnV0ZV0gLSBodG1sIEF0dHJpYnV0ZSB0byBjb250cm9sXG4gKiBAcmV0dXJuIHtVbmRvfSB1bmRvIGNvbW1hbmRcbiAqL1xudmFyIGFwcGx5QXR0cmlidXRlVG9PdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUsIGNvbnRyb2xBdHRyaWJ1dGUpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGNvcnJlY3RUYXJnZXRzKHBhcmVudE5vZGUsIEFycmF5LmlzQXJyYXkob3JpZ2luYWxUYXJnZXQpID8gb3JpZ2luYWxUYXJnZXQgOiBbb3JpZ2luYWxUYXJnZXRdKTtcbiAgICBpZiAoIW1hcmtlck1hcFttYXJrZXJOYW1lXSkge1xuICAgICAgICBtYXJrZXJNYXBbbWFya2VyTmFtZV0gPSBuZXcgV2Vha01hcCgpO1xuICAgIH1cbiAgICB2YXIgbWFya2VyQ291bnRlciA9IG1hcmtlck1hcFttYXJrZXJOYW1lXTtcbiAgICB2YXIgaGlkZGVuTm9kZXMgPSBbXTtcbiAgICB2YXIgZWxlbWVudHNUb0tlZXAgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGVsZW1lbnRzVG9TdG9wID0gbmV3IFNldCh0YXJnZXRzKTtcbiAgICB2YXIga2VlcCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoIWVsIHx8IGVsZW1lbnRzVG9LZWVwLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50c1RvS2VlcC5hZGQoZWwpO1xuICAgICAgICBrZWVwKGVsLnBhcmVudE5vZGUpO1xuICAgIH07XG4gICAgdGFyZ2V0cy5mb3JFYWNoKGtlZXApO1xuICAgIHZhciBkZWVwID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICBpZiAoIXBhcmVudCB8fCBlbGVtZW50c1RvU3RvcC5oYXMocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwocGFyZW50LmNoaWxkcmVuLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzVG9LZWVwLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGRlZXAobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IG5vZGUuZ2V0QXR0cmlidXRlKGNvbnRyb2xBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgIHZhciBhbHJlYWR5SGlkZGVuID0gYXR0ciAhPT0gbnVsbCAmJiBhdHRyICE9PSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIHZhciBjb3VudGVyVmFsdWUgPSAoY291bnRlck1hcC5nZXQobm9kZSkgfHwgMCkgKyAxO1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJWYWx1ZSA9IChtYXJrZXJDb3VudGVyLmdldChub2RlKSB8fCAwKSArIDE7XG4gICAgICAgICAgICAgICAgY291bnRlck1hcC5zZXQobm9kZSwgY291bnRlclZhbHVlKTtcbiAgICAgICAgICAgICAgICBtYXJrZXJDb3VudGVyLnNldChub2RlLCBtYXJrZXJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaGlkZGVuTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclZhbHVlID09PSAxICYmIGFscmVhZHlIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jb250cm9sbGVkTm9kZXMuc2V0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWFya2VyVmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobWFya2VyTmFtZSwgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhbHJlYWR5SGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGNvbnRyb2xBdHRyaWJ1dGUsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGRlZXAocGFyZW50Tm9kZSk7XG4gICAgZWxlbWVudHNUb0tlZXAuY2xlYXIoKTtcbiAgICBsb2NrQ291bnQrKztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBoaWRkZW5Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlclZhbHVlID0gY291bnRlck1hcC5nZXQobm9kZSkgLSAxO1xuICAgICAgICAgICAgdmFyIG1hcmtlclZhbHVlID0gbWFya2VyQ291bnRlci5nZXQobm9kZSkgLSAxO1xuICAgICAgICAgICAgY291bnRlck1hcC5zZXQobm9kZSwgY291bnRlclZhbHVlKTtcbiAgICAgICAgICAgIG1hcmtlckNvdW50ZXIuc2V0KG5vZGUsIG1hcmtlclZhbHVlKTtcbiAgICAgICAgICAgIGlmICghY291bnRlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bmNvbnRyb2xsZWROb2Rlcy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoY29udHJvbEF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVuY29udHJvbGxlZE5vZGVzLmRlbGV0ZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbWFya2VyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShtYXJrZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2tDb3VudC0tO1xuICAgICAgICBpZiAoIWxvY2tDb3VudCkge1xuICAgICAgICAgICAgLy8gY2xlYXJcbiAgICAgICAgICAgIGNvdW50ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgY291bnRlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgICB1bmNvbnRyb2xsZWROb2RlcyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgICBtYXJrZXJNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLyoqXG4gKiBNYXJrcyBldmVyeXRoaW5nIGV4Y2VwdCBnaXZlbiBub2RlKG9yIG5vZGVzKSBhcyBhcmlhLWhpZGRlblxuICogQHBhcmFtIHtFbGVtZW50IHwgRWxlbWVudFtdfSBvcmlnaW5hbFRhcmdldCAtIGVsZW1lbnRzIHRvIGtlZXAgb24gdGhlIHBhZ2VcbiAqIEBwYXJhbSBbcGFyZW50Tm9kZV0gLSB0b3AgZWxlbWVudCwgZGVmYXVsdHMgdG8gZG9jdW1lbnQuYm9keVxuICogQHBhcmFtIHtTdHJpbmd9IFttYXJrZXJOYW1lXSAtIGEgc3BlY2lhbCBhdHRyaWJ1dGUgdG8gbWFyayBldmVyeSBub2RlXG4gKiBAcmV0dXJuIHtVbmRvfSB1bmRvIGNvbW1hbmRcbiAqL1xudmFyIGhpZGVPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcbiAgICBpZiAobWFya2VyTmFtZSA9PT0gdm9pZCAwKSB7IG1hcmtlck5hbWUgPSAnZGF0YS1hcmlhLWhpZGRlbic7IH1cbiAgICB2YXIgdGFyZ2V0cyA9IEFycmF5LmZyb20oQXJyYXkuaXNBcnJheShvcmlnaW5hbFRhcmdldCkgPyBvcmlnaW5hbFRhcmdldCA6IFtvcmlnaW5hbFRhcmdldF0pO1xuICAgIHZhciBhY3RpdmVQYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBnZXREZWZhdWx0UGFyZW50KG9yaWdpbmFsVGFyZ2V0KTtcbiAgICBpZiAoIWFjdGl2ZVBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgfVxuICAgIC8vIHdlIHNob3VsZCBub3QgaGlkZSBhcmlhTGl2ZSBlbGVtZW50cyAtIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvYXJpYS1oaWRkZW4vaXNzdWVzLzEwXG4gICAgdGFyZ2V0cy5wdXNoLmFwcGx5KHRhcmdldHMsIEFycmF5LmZyb20oYWN0aXZlUGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1saXZlXScpKSk7XG4gICAgcmV0dXJuIGFwcGx5QXR0cmlidXRlVG9PdGhlcnModGFyZ2V0cywgYWN0aXZlUGFyZW50Tm9kZSwgbWFya2VyTmFtZSwgJ2FyaWEtaGlkZGVuJyk7XG59O1xuZXhwb3J0cy5oaWRlT3RoZXJzID0gaGlkZU90aGVycztcbi8qKlxuICogTWFya3MgZXZlcnl0aGluZyBleGNlcHQgZ2l2ZW4gbm9kZShvciBub2RlcykgYXMgaW5lcnRcbiAqIEBwYXJhbSB7RWxlbWVudCB8IEVsZW1lbnRbXX0gb3JpZ2luYWxUYXJnZXQgLSBlbGVtZW50cyB0byBrZWVwIG9uIHRoZSBwYWdlXG4gKiBAcGFyYW0gW3BhcmVudE5vZGVdIC0gdG9wIGVsZW1lbnQsIGRlZmF1bHRzIHRvIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxuICogQHJldHVybiB7VW5kb30gdW5kbyBjb21tYW5kXG4gKi9cbnZhciBpbmVydE90aGVycyA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCwgcGFyZW50Tm9kZSwgbWFya2VyTmFtZSkge1xuICAgIGlmIChtYXJrZXJOYW1lID09PSB2b2lkIDApIHsgbWFya2VyTmFtZSA9ICdkYXRhLWluZXJ0LWVkJzsgfVxuICAgIHZhciBhY3RpdmVQYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBnZXREZWZhdWx0UGFyZW50KG9yaWdpbmFsVGFyZ2V0KTtcbiAgICBpZiAoIWFjdGl2ZVBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgfVxuICAgIHJldHVybiBhcHBseUF0dHJpYnV0ZVRvT3RoZXJzKG9yaWdpbmFsVGFyZ2V0LCBhY3RpdmVQYXJlbnROb2RlLCBtYXJrZXJOYW1lLCAnaW5lcnQnKTtcbn07XG5leHBvcnRzLmluZXJ0T3RoZXJzID0gaW5lcnRPdGhlcnM7XG4vKipcbiAqIEByZXR1cm5zIGlmIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBpbmVydFxuICovXG52YXIgc3VwcG9ydHNJbmVydCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBIVE1MRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0Jyk7XG59O1xuZXhwb3J0cy5zdXBwb3J0c0luZXJ0ID0gc3VwcG9ydHNJbmVydDtcbi8qKlxuICogQXV0b21hdGljIGZ1bmN0aW9uIHRvIFwic3VwcHJlc3NcIiBET00gZWxlbWVudHMgLSBfaGlkZV8gb3IgX2luZXJ0XyBpbiB0aGUgYmVzdCBwb3NzaWJsZSB3YXlcbiAqIEBwYXJhbSB7RWxlbWVudCB8IEVsZW1lbnRbXX0gb3JpZ2luYWxUYXJnZXQgLSBlbGVtZW50cyB0byBrZWVwIG9uIHRoZSBwYWdlXG4gKiBAcGFyYW0gW3BhcmVudE5vZGVdIC0gdG9wIGVsZW1lbnQsIGRlZmF1bHRzIHRvIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxuICogQHJldHVybiB7VW5kb30gdW5kbyBjb21tYW5kXG4gKi9cbnZhciBzdXBwcmVzc090aGVycyA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCwgcGFyZW50Tm9kZSwgbWFya2VyTmFtZSkge1xuICAgIGlmIChtYXJrZXJOYW1lID09PSB2b2lkIDApIHsgbWFya2VyTmFtZSA9ICdkYXRhLXN1cHByZXNzZWQnOyB9XG4gICAgcmV0dXJuICgoMCwgZXhwb3J0cy5zdXBwb3J0c0luZXJ0KSgpID8gZXhwb3J0cy5pbmVydE90aGVycyA6IGV4cG9ydHMuaGlkZU90aGVycykob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpO1xufTtcbmV4cG9ydHMuc3VwcHJlc3NPdGhlcnMgPSBzdXBwcmVzc090aGVycztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/aria-hidden/dist/es5/index.js\n");

/***/ })

};
;