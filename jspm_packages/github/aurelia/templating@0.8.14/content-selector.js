System.register([], function (_export) {
	var _createClass, _classCallCheck, proto, placeholder, ContentSelector;

	function findInsertionPoint(groups, index) {
		var insertionPoint;

		while (!insertionPoint && index >= 0) {
			insertionPoint = groups[index][0];
			index--;
		}

		return insertionPoint || anchor;
	}

	return {
		setters: [],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			if (Element && !Element.prototype.matches) {
				proto = Element.prototype;

				proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
			}

			placeholder = [];
			ContentSelector = _export("ContentSelector", (function () {
				function ContentSelector(anchor, selector) {
					_classCallCheck(this, ContentSelector);

					this.anchor = anchor;
					this.selector = selector;
					this.all = !this.selector;
					this.groups = [];
				}

				_createClass(ContentSelector, {
					copyForViewSlot: {
						value: function copyForViewSlot() {
							return new ContentSelector(this.anchor, this.selector);
						}
					},
					matches: {
						value: function matches(node) {
							return this.all || node.nodeType === 1 && node.matches(this.selector);
						}
					},
					add: {
						value: function add(group) {
							var anchor = this.anchor,
							    parent = anchor.parentNode,
							    i,
							    ii;

							for (i = 0, ii = group.length; i < ii; ++i) {
								parent.insertBefore(group[i], anchor);
							}

							this.groups.push(group);
						}
					},
					insert: {
						value: function insert(index, group) {
							if (group.length) {
								var anchor = findInsertionPoint(this.groups, index) || this.anchor,
								    parent = anchor.parentNode,
								    i,
								    ii;

								for (i = 0, ii = group.length; i < ii; ++i) {
									parent.insertBefore(group[i], anchor);
								}
							}

							this.groups.splice(index, 0, group);
						}
					},
					removeAt: {
						value: function removeAt(index, fragment) {
							var group = this.groups[index],
							    i,
							    ii;

							for (i = 0, ii = group.length; i < ii; ++i) {
								fragment.appendChild(group[i]);
							}

							this.groups.splice(index, 1);
						}
					}
				}, {
					applySelectors: {
						value: function applySelectors(view, contentSelectors, callback) {
							var currentChild = view.fragment.firstChild,
							    contentMap = new Map(),
							    nextSibling,
							    i,
							    ii,
							    contentSelector;

							while (currentChild) {
								nextSibling = currentChild.nextSibling;

								if (currentChild.viewSlot) {
									var viewSlotSelectors = contentSelectors.map(function (x) {
										return x.copyForViewSlot();
									});
									currentChild.viewSlot.installContentSelectors(viewSlotSelectors);
								} else {
									for (i = 0, ii = contentSelectors.length; i < ii; i++) {
										contentSelector = contentSelectors[i];
										if (contentSelector.matches(currentChild)) {
											var elements = contentMap.get(contentSelector);
											if (!elements) {
												elements = [];
												contentMap.set(contentSelector, elements);
											}

											elements.push(currentChild);
											break;
										}
									}
								}

								currentChild = nextSibling;
							}

							for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
								contentSelector = contentSelectors[i];
								callback(contentSelector, contentMap.get(contentSelector) || placeholder);
							}
						}
					}
				});

				return ContentSelector;
			})());
		}
	};
});