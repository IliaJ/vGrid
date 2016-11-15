var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../v-grid"], function (require, exports, aurelia_framework_1, v_grid_1) {
    var VGridAttributesSort = (function () {
        function VGridAttributesSort(element, vGrid) {
            this.vGrid = vGrid;
            this.element = element;
        }
        VGridAttributesSort.prototype.bind = function (bindingContext, overrideContext) {
            this.bindingContext = bindingContext;
            this.overrideContext = overrideContext;
            var values = this.value.split('|');
            this.attribute = values[0];
        };
        VGridAttributesSort.prototype.attached = function () {
            var _this = this;
            this.sortIcon = document.createElement('i');
            this.sortIcon.innerHTML = this.getSortIconMarkup();
            this.element.appendChild(this.sortIcon);
            this.element.onmousedown = function () {
                _this.element.onmouseup = function (e) {
                    if (e.button === 0) {
                        _this.vGrid.attGridConnector.orderBy(_this.attribute, e.shiftKey);
                    }
                };
                setTimeout(function () {
                    _this.element.onmouseup = null;
                }, 300);
            };
            this.vGrid.element.addEventListener('sortIconUpdate', function () {
                _this.sortIcon.innerHTML = _this.getSortIconMarkup();
            });
        };
        VGridAttributesSort.prototype.detached = function () {
            this.element.removeChild(this.sortIcon);
        };
        VGridAttributesSort.prototype.getSortIconMarkup = function () {
            var _this = this;
            var markup = "&nbsp;<i  class=\"" + 'avg-fa avg-fa-sort' + "\"></i>";
            var isAscHtml = "&nbsp;<i  class=\"" + 'avg-fa avg-fa-sort-asc' + "\"></i>";
            var isDescHtml = "&nbsp;<i  class=\"" + 'avg-fa avg-fa-sort-desc' + "\"></i>";
            this.vGrid.attGridConnector.getCurrentOrderBy().forEach(function (x) {
                if (x.attribute === _this.attribute) {
                    var block = x.asc === true ? isAscHtml : isDescHtml;
                    var main = "<i class=\"" + 'avg-fa-sort-number' + "\" data-vgridsort=\"" + x.no + "\"></i>";
                    markup = block + main;
                }
            });
            return markup;
        };
        return VGridAttributesSort;
    }());
    VGridAttributesSort = __decorate([
        aurelia_framework_1.customAttribute('v-sort'),
        aurelia_framework_1.inject(Element, v_grid_1.VGrid),
        __metadata("design:paramtypes", [HTMLElement, v_grid_1.VGrid])
    ], VGridAttributesSort);
    exports.VGridAttributesSort = VGridAttributesSort;
});

//# sourceMappingURL=v-sort.js.map
