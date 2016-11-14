var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../v-grid'], function (require, exports, aurelia_framework_1, v_grid_1) {
    "use strict";
    var vGridAttributesImageFix = (function () {
        function vGridAttributesImageFix(element, vGrid) {
            this.vGrid = vGrid;
            this.element = element;
        }
        vGridAttributesImageFix.prototype.valueChanged = function (newValue, oldValue) {
            this.element.src = "";
            this.element.src = this.value || newValue;
        };
        vGridAttributesImageFix.prototype.bind = function (bindingContext, overrideContext) {
            this.element.src = "";
            this.element.src = this.value || "";
        };
        vGridAttributesImageFix = __decorate([
            aurelia_framework_1.customAttribute('v-image-fix'),
            aurelia_framework_1.inject(Element, v_grid_1.VGrid), 
            __metadata('design:paramtypes', [Object, Object])
        ], vGridAttributesImageFix);
        return vGridAttributesImageFix;
    }());
    exports.vGridAttributesImageFix = vGridAttributesImageFix;
});

//# sourceMappingURL=v-image.js.map
