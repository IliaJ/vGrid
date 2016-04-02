"use strict";

System.register([], function (_export, _context) {
  var VGridCellEdit;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("VGridCellEdit", VGridCellEdit = function () {
        function VGridCellEdit(parent) {
          _classCallCheck(this, VGridCellEdit);

          this.first = -1;
          this.last = -1;
          this.editMode = false;
          this.parent = null;
          this.element = null;

          this.parent = parent;
          this.element = parent.element;
          this.addGridKeyListner();
        }

        VGridCellEdit.prototype.setCellsFromElement = function setCellsFromElement(e, direction) {
          var thisTop;
          var element;
          var x = 10;
          var node = e;
          for (var i = 0; i < x; i++) {
            try {
              if (node.classList.contains(this._private.css.row)) {
                for (var y = 0; y < this._private.htmlCache.rowsArray.length; y++) {
                  if (node.style.transform === this._private.htmlCache.rowsArray[y].div.style.transform) {
                    thisTop = this._private.htmlCache.rowsArray[y + direction].top;
                    element = this._private.htmlCache.rowsArray[y + direction].div;
                  }
                }
              }
              node = node.offsetParent;
            } catch (x) {}
          }

          if (element) {
            this.cells = element.querySelectorAll("." + this._private.css.cellContent);
          }
          return thisTop;
        };

        VGridCellEdit.prototype.setCellsFromTopValue = function setCellsFromTopValue(top) {
          var element = 0;
          for (var i = 0; i < this._private.htmlCache.rowsArray.length; i++) {
            if (this._private.htmlCache.rowsArray[i].top === top) {
              element = this._private.htmlCache.rowsArray[i].div;
            }
          }
          if (element) {
            this.cells = element.querySelectorAll("." + this._private.css.cellContent);
          }
        };

        VGridCellEdit.prototype.removeEditCssClasses = function removeEditCssClasses(element) {
          element.setAttribute("readonly", "false");
          element.classList.remove(this._private.css.editCell);
          element.classList.remove(this._private.css.editCellWrite);
          element.classList.remove(this._private.css.editCellFocus);
        };

        VGridCellEdit.prototype.dispatchCellClick = function dispatchCellClick(index) {
          var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
          this.setAsSingleClick = true;
          this.cells[index].dispatchEvent(event);
        };

        VGridCellEdit.prototype.keyDownDelay = function keyDownDelay(callback) {
          var _this = this;

          if (!this.timer) {
            this.timer = setTimeout(function () {
              _this.timer = null;
              callback();
            }, 150);
          }
        };

        VGridCellEdit.prototype.addGridKeyListner = function addGridKeyListner() {

          this.element.onkeydown = function (e) {
            var _this2 = this;

            if (e.keyCode === 33) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  var currentscrolltop = _this2.gridCtx.getScrollTop();

                  var rowHeight = _this2._private.rowHeight;
                  var containerHeight = _this2._private.htmlCache.content.clientHeight;
                  var containerRows = parseInt(containerHeight / rowHeight, 10);
                  var buffer = parseInt(containerHeight / 2, 10);
                  if (currentscrolltop !== _this2._private.configFunctions.getCollectionLength() * rowHeight - containerHeight) {
                    buffer = buffer * 2;
                  }

                  _this2.removeEditCssClasses(_this2.curElement);
                  _this2.top = _this2.setCellsFromElement(_this2.curElement, 0);
                  _this2.gridCtx.setScrollTop(currentscrolltop - (containerHeight - buffer));
                  var newTop = _this2.top - containerRows * rowHeight;
                  if (newTop / rowHeight <= 0) {
                    newTop = 0;
                  }
                  setTimeout(function () {
                    _this2.setCellsFromTopValue(newTop);
                    _this2.dispatchCellClick(_this2.index);
                  }, 100);
                }
              });
            }

            if (e.keyCode === 34) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  var currentscrolltop = _this2.gridCtx.getScrollTop();

                  var rowHeight = _this2._private.rowHeight;
                  var containerHeight = _this2._private.htmlCache.content.clientHeight;
                  var containerRows = parseInt(containerHeight / rowHeight, 10);
                  var buffer = parseInt(containerHeight / 2, 10);
                  if (currentscrolltop !== 0) {
                    buffer = buffer * 2;
                  }

                  _this2.removeEditCssClasses(_this2.curElement);
                  _this2.top = _this2.setCellsFromElement(_this2.curElement, 0);
                  _this2.gridCtx.setScrollTop(currentscrolltop + (containerHeight - buffer));
                  var newTop = _this2.top + containerRows * rowHeight;
                  if (newTop / rowHeight >= _this2._private.configFunctions.getCollectionLength()) {
                    newTop = _this2._private.configFunctions.getCollectionLength() * rowHeight;
                    newTop = newTop - rowHeight;
                  }
                  setTimeout(function () {
                    _this2.setCellsFromTopValue(newTop);
                    _this2.dispatchCellClick(_this2.index);
                  }, 100);
                }
              });
            }

            if (e.keyCode === 40) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  _this2.removeEditCssClasses(_this2.curElement);
                  _this2.top = _this2.setCellsFromElement(_this2.curElement, +1);
                  _this2.dispatchCellClick(_this2.index);
                }
              });
            }

            if (e.keyCode === 39 && !this.editMode) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  if (!_this2.last) {
                    _this2.removeEditCssClasses(_this2.curElement);
                    _this2.dispatchCellClick(_this2.index + 1);
                  }
                }
              });
            }

            if (e.keyCode === 37 && !this.editMode) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  if (!_this2.first) {
                    _this2.removeEditCssClasses(_this2.curElement);
                    _this2.dispatchCellClick(_this2.index - 1);
                  }
                }
              });
            }

            if (e.keyCode === 38) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  _this2.removeEditCssClasses(_this2.curElement);
                  _this2.top = _this2.setCellsFromElement(_this2.curElement, -1);
                  _this2.dispatchCellClick(_this2.index);
                }
              });
            }

            if (e.keyCode === 9 && e.shiftKey === true) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  _this2.removeEditCssClasses(_this2.curElement);
                  _this2.index = _this2.index - 1;
                  if (_this2.first) {
                    _this2.index = _this2.cells.length - 1;
                    _this2.top = _this2.setCellsFromElement(_this2.curElement, -1);
                  }
                  _this2.dispatchCellClick(_this2.index);
                }
              });
            }

            if (e.keyCode === 9 && e.shiftKey === false) {
              e.preventDefault();
              this.keyDownDelay(function () {
                if (_this2.curElement) {
                  _this2.removeEditCssClasses(_this2.curElement);
                  _this2.index = _this2.index + 1;
                  if (_this2.last) {
                    _this2.index = 0;
                    _this2.top = _this2.setCellsFromElement(_this2.curElement, 1);
                  }
                  _this2.dispatchCellClick(_this2.index);
                }
              });
            }
          }.bind(this);
        };

        VGridCellEdit.prototype.elementBlur = function elementBlur() {
          this.removeEditCssClasses(this.curElement);
          this.top = this.setCellsFromElement(this.curElement, 0);
          this.callbackDone(this.callbackObject());
          this.editMode = false;
          this.setCellsFromTopValue(this.top);
          this.dispatchCellClick(this.index);
        };

        VGridCellEdit.prototype.elementKeyDown = function elementKeyDown() {
          var _this3 = this;

          this.curElement.onkeydown = function (e) {
            if (e.keyCode == 13) {
              _this3.elementBlur();
              return false;
            }
            if (_this3.readOnly === true && e.keyCode !== 9) {
              return false;
            } else {
              return true;
            }
          };
        };

        VGridCellEdit.prototype.callbackObject = function callbackObject() {
          return {
            attribute: this.attribute,
            value: this.curElement.value,
            oldValue: this.oldValue,
            element: this.curElement
          };
        };

        VGridCellEdit.prototype.elementKeyUp = function elementKeyUp() {
          var _this4 = this;

          this.curElement.onkeyup = function () {
            _this4.callbackKey(_this4.callbackObject());
          };
        };

        VGridCellEdit.prototype.setBackFocus = function setBackFocus() {
          if (this.curElement) {
            var rowNo = this.parent.filterRow;
            var rowheight = this._private.rowHeight;
            this.setCellsFromTopValue(rowNo * rowheight);
            if (this.cells.length > 0) {
              this.curElement = this.cells[this.index];

              if (!this.cells[this.index].classList.contains(this._private.css.editCell)) {
                this.cells[this.index].classList.add(this._private.css.editCell);
              }

              if (!this.cells[this.index].classList.contains(this._private.css.editCellWrite)) {
                this.cells[this.index].classList.add(this._private.css.editCellWrite);
              }

              if (this.editMode) {
                if (this.readOnly === false) {
                  if (this.cells[this.index].classList.contains(this._private.css.editCellFocus)) {
                    this.cells[this.index].classList.remove(this._private.css.editCellFocus);
                  }
                  this.cells[this.index].removeAttribute("readonly");
                } else {
                    this.cells[this.index].classList.add(this._private.css.editCellFocus);
                  }
              } else {
                this.cells[this.index].classList.add(this._private.css.editCellFocus);
              }
            }
          }
        };

        VGridCellEdit.prototype.editCellhelper = function editCellhelper(e, readOnly, callbackDone, callbackKey) {
          var _this5 = this;

          if (!this._private) {
            this._private = this.parent.gridContext.ctx._private;
            this.gridCtx = this.parent.gridContext.ctx;
          }

          if (e.target.classList.contains(this._private.css.cellContent)) {

            if (this.curElement) {
              this.removeEditCssClasses(this.curElement);
            }

            this.curElement = e.target;
            this.readOnly = readOnly;
            this.callbackDone = callbackDone;
            this.callbackKey = callbackKey;
            this.oldValue = e.target.value;
            this.attribute = e.target.getAttribute(this._private.atts.dataAttribute);
            this.index = this._private.attributeArray.indexOf(this.attribute);
            this.type = e.type;
            this.cells = this.curElement.offsetParent.offsetParent.querySelectorAll("." + this._private.css.cellContent);
            this.row = this.parent.filterRow;

            if (this.setAsSingleClick) {
              this.setAsSingleClick = false;
              this.type = "click";
            }

            setTimeout(function () {
              _this5._private.htmlCache.header.scrollLeft = _this5._private.htmlCache.content.scrollLeft;
            }, 10);

            if (this.index === this.cells.length - 1) {
              this.last = true;
            } else {
              this.last = false;
            }
            if (this.index === 0) {
              this.first = true;
            } else {
              this.first = false;
            }

            if (!e.target.classList.contains(this._private.css.editCell)) {
              e.target.classList.add(this._private.css.editCell);
            }

            if (!e.target.classList.contains(this._private.css.editCellWrite)) {
              e.target.classList.add(this._private.css.editCellWrite);
            }

            if (this.type === "dblclick" || this.editMode) {
              this.editMode = true;
              if (this.readOnly === false) {
                if (e.target.classList.contains(this._private.css.editCellFocus)) {
                  e.target.classList.remove(this._private.css.editCellFocus);
                }
                e.target.removeAttribute("readonly");
              } else {
                  e.target.classList.add(this._private.css.editCellFocus);
                }
            } else {
              e.target.classList.add(this._private.css.editCellFocus);
            }

            this.elementKeyUp();
            this.elementKeyDown();
            this.curElement.onblur = function (e) {};

            this.curElement.focus();
          }
        };

        return VGridCellEdit;
      }());

      _export("VGridCellEdit", VGridCellEdit);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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