System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RowMarkup;
    return {
        setters:[],
        execute: function() {
            RowMarkup = (function () {
                function RowMarkup(element, htmlCache) {
                    this.element = element;
                    this.htmlCache = htmlCache;
                }
                RowMarkup.prototype.updateInternalHtmlCache = function () {
                    this.left = this.htmlCache.avg_content_left_scroll;
                    this.main = this.htmlCache.avg_content_main_scroll;
                    this.right = this.htmlCache.avg_content_right_scroll;
                    this.full = this.htmlCache.avg_content_group_scroll;
                };
                RowMarkup.prototype.init = function (rowHeight) {
                    this.rowHeight = rowHeight;
                    this.updateInternalHtmlCache();
                    this.generateRows();
                };
                RowMarkup.prototype.generateRows = function () {
                    var markupLeft = "";
                    var markupMain = "";
                    var markupRight = "";
                    var markupGroup = "";
                    for (var i = 0; i < 40; i++) {
                        var translateY = this.rowHeight * i;
                        var avgRowMarkup = "<avg-row class=\"avg-row\" style=\"height:" + this.rowHeight + "px; transform:translate3d(0px, " + translateY + "px, 0px);z-index:5;\" row=\"" + i + "\"></avg-row>";
                        var avgRowMarkupGroup = "<avg-row class=\"avg-row-helper\" style=\"height:" + this.rowHeight + "px; transform:translate3d(0px, " + translateY + "px, 0px);z-index:5;\" row=\"" + i + "\"></avg-row>";
                        markupLeft = markupLeft + avgRowMarkup;
                        markupMain = markupMain + avgRowMarkup;
                        markupRight = markupRight + avgRowMarkup;
                        markupGroup = markupGroup + avgRowMarkupGroup;
                    }
                    this.left.innerHTML = markupLeft;
                    this.main.innerHTML = markupLeft;
                    this.right.innerHTML = markupLeft;
                    this.full.innerHTML = markupGroup;
                };
                return RowMarkup;
            }());
            exports_1("RowMarkup", RowMarkup);
        }
    }
});

//# sourceMappingURL=rowMarkup.js.map
