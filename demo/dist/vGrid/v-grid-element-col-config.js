'use strict';

System.register(['aurelia-framework', './v-grid'], function (_export, _context) {
  "use strict";

  var inject, noView, customElement, bindable, processContent, TargetInstruction, VGrid, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, VGridElementColConfig;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      noView = _aureliaFramework.noView;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      processContent = _aureliaFramework.processContent;
      TargetInstruction = _aureliaFramework.TargetInstruction;
    }, function (_vGrid) {
      VGrid = _vGrid.VGrid;
    }],
    execute: function () {
      _export('VGridElementColConfig', VGridElementColConfig = (_dec = noView(), _dec2 = processContent(function (compiler, resources, element, instruction) {

        var headerTemplateElement = element.getElementsByTagName("V-HEADER-TEMPLATE")[0];
        var headerTemplateHtml = headerTemplateElement ? headerTemplateElement.innerHTML : null;
        if (headerTemplateHtml !== '') {
          instruction.headerTemplate = headerTemplateHtml;
        }

        var rowTemplateElement = element.getElementsByTagName("V-ROW-TEMPLATE")[0];
        var rowTemplateHtml = rowTemplateElement ? rowTemplateElement.innerHTML : null;
        if (rowTemplateHtml !== '') {
          instruction.rowTemplate = rowTemplateHtml;
        }

        element.innerHTML = '';
      }), _dec3 = customElement('v-grid-col'), _dec4 = inject(Element, VGrid, TargetInstruction), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function () {
        function VGridElementColConfig(element, vGrid, targetInstruction) {
          _classCallCheck(this, VGridElementColConfig);

          _initDefineProp(this, 'width', _descriptor, this);

          _initDefineProp(this, 'attribute', _descriptor2, this);

          _initDefineProp(this, 'header', _descriptor3, this);

          _initDefineProp(this, 'sort', _descriptor4, this);

          _initDefineProp(this, 'filter', _descriptor5, this);

          _initDefineProp(this, 'filterTop', _descriptor6, this);

          _initDefineProp(this, 'filterOperator', _descriptor7, this);

          _initDefineProp(this, 'contextmenuHeader', _descriptor8, this);

          _initDefineProp(this, 'contextmenuRows', _descriptor9, this);

          _initDefineProp(this, 'type', _descriptor10, this);

          this.capitalize = function (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          };

          this.vGrid = vGrid;
          this.element = element;
          this.rowTemplate = targetInstruction.elementInstruction.rowTemplate;
          this.headerTemplate = targetInstruction.elementInstruction.headerTemplate;
        }

        VGridElementColConfig.prototype.bind = function bind(bindingContext, overrideContext) {
          this.vGrid.vGridConfig.columnLength++;

          this.vGrid.vGridConfig.colConfig.push({
            width: this.vColWidth || 100,
            rowTemplate: this.rowTemplate,
            headerTemplate: this.headerTemplate,
            attribute: this.attribute,
            header: this.header || this.attribute ? this.capitalize(this.attribute) : null,
            sort: this.sort === "true" ? true : false,
            filter: this.filter === "true" ? true : false,
            filterTop: this.filterTop === "true" ? true : false,
            filterOperator: this.filterOperator || "=",
            contextmenuHeader: this.contextmenuHeader === "true" ? true : false,
            contextmenuRows: this.contextmenuRows === "true" ? true : false,
            type: this.type || "text"
          });
        };

        return VGridElementColConfig;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'width', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'attribute', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'header', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'sort', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'filterTop', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'filterOperator', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'contextmenuHeader', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'contextmenuRows', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('VGridElementColConfig', VGridElementColConfig);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZHcmlkL3YtZ3JpZC1lbGVtZW50LWNvbC1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9RLFkscUJBQUEsTTtBQUFRLFkscUJBQUEsTTtBQUFRLG1CLHFCQUFBLGE7QUFBZSxjLHFCQUFBLFE7QUFBVSxvQixxQkFBQSxjO0FBQWdCLHVCLHFCQUFBLGlCOztBQUN6RCxXLFVBQUEsSzs7O3VDQXNCSyxxQixXQXBCWixRLFVBQ0EsZUFBZSxVQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE9BQXRCLEVBQStCLFdBQS9CLEVBQStDOztBQUU3RCxZQUFJLHdCQUF3QixRQUFRLG9CQUFSLENBQTZCLG1CQUE3QixFQUFrRCxDQUFsRCxDQUE1QjtBQUNBLFlBQUkscUJBQXFCLHdCQUF3QixzQkFBc0IsU0FBOUMsR0FBMEQsSUFBbkY7QUFDQSxZQUFJLHVCQUF1QixFQUEzQixFQUErQjtBQUM3QixzQkFBWSxjQUFaLEdBQTZCLGtCQUE3QjtBQUNEOztBQUVELFlBQUkscUJBQXFCLFFBQVEsb0JBQVIsQ0FBNkIsZ0JBQTdCLEVBQStDLENBQS9DLENBQXpCO0FBQ0EsWUFBSSxrQkFBa0IscUJBQXFCLG1CQUFtQixTQUF4QyxHQUFvRCxJQUExRTtBQUNBLFlBQUksb0JBQW9CLEVBQXhCLEVBQTRCO0FBQzFCLHNCQUFZLFdBQVosR0FBMEIsZUFBMUI7QUFDRDs7QUFFRCxnQkFBUSxTQUFSLEdBQW9CLEVBQXBCO0FBRUQsT0FoQkEsQyxVQWlCQSxjQUFjLFlBQWQsQyxVQUNBLE9BQU8sT0FBUCxFQUFnQixLQUFoQixFQUF1QixpQkFBdkIsQztBQWVDLHVDQUFZLE9BQVosRUFBcUIsS0FBckIsRUFBNEIsaUJBQTVCLEVBQStDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsZUFRL0MsVUFSK0MsR0FRbEMsVUFBVSxLQUFWLEVBQWlCO0FBQzVCLG1CQUFPLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF2QztBQUNELFdBVjhDOztBQUM3QyxlQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsZUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGVBQUssV0FBTCxHQUFtQixrQkFBa0Isa0JBQWxCLENBQXFDLFdBQXhEO0FBQ0EsZUFBSyxjQUFMLEdBQXNCLGtCQUFrQixrQkFBbEIsQ0FBcUMsY0FBM0Q7QUFDRDs7d0NBUUQsSSxpQkFBSyxjLEVBQWdCLGUsRUFBaUI7QUFDcEMsZUFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixZQUF2Qjs7QUFFQSxlQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLFNBQXZCLENBQWlDLElBQWpDLENBQXNDO0FBQ3BDLG1CQUFPLEtBQUssU0FBTCxJQUFrQixHQURXO0FBRXBDLHlCQUFhLEtBQUssV0FGa0I7QUFHcEMsNEJBQWdCLEtBQUssY0FIZTtBQUlwQyx1QkFBVyxLQUFLLFNBSm9CO0FBS3BDLG9CQUFRLEtBQUssTUFBTCxJQUFlLEtBQUssU0FBcEIsR0FBZ0MsS0FBSyxVQUFMLENBQWdCLEtBQUssU0FBckIsQ0FBaEMsR0FBa0UsSUFMdEM7QUFNcEMsa0JBQU0sS0FBSyxJQUFMLEtBQWMsTUFBZCxHQUF1QixJQUF2QixHQUE4QixLQU5BO0FBT3BDLG9CQUFRLEtBQUssTUFBTCxLQUFnQixNQUFoQixHQUF5QixJQUF6QixHQUFnQyxLQVBKO0FBUXBDLHVCQUFXLEtBQUssU0FBTCxLQUFtQixNQUFuQixHQUE0QixJQUE1QixHQUFtQyxLQVJWO0FBU3BDLDRCQUFnQixLQUFLLGNBQUwsSUFBdUIsR0FUSDtBQVVwQywrQkFBbUIsS0FBSyxpQkFBTCxLQUEyQixNQUEzQixHQUFvQyxJQUFwQyxHQUEyQyxLQVYxQjtBQVdwQyw2QkFBaUIsS0FBSyxlQUFMLEtBQXlCLE1BQXpCLEdBQWtDLElBQWxDLEdBQXlDLEtBWHRCO0FBWXBDLGtCQUFNLEtBQUssSUFBTCxJQUFhO0FBWmlCLFdBQXRDO0FBZ0JELFM7OztpRkE3Q0EsUTs7O29GQUNBLFE7OztpRkFDQSxROzs7K0VBQ0EsUTs7O2lGQUNBLFE7OztvRkFDQSxROzs7eUZBQ0EsUTs7OzRGQUNBLFE7OzswRkFDQSxROzs7Z0ZBQ0EsUSIsImZpbGUiOiJ2R3JpZC92LWdyaWQtZWxlbWVudC1jb2wtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
