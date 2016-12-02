System.register(["./interfaces", "./wakdb/wakinterfaces"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources(prefix + '/attributes/v-filter', prefix + '/attributes/v-filter-trigger', prefix + '/attributes/v-sort', prefix + '/attributes/v-image', prefix + '/attributes/v-drag-drop-col', prefix + '/attributes/v-resize-col', prefix + '/attributes/v-menu', prefix + '/attributes/v-selection', prefix + '/v-grid-row-repeat', prefix + '/v-grid-group-row', prefix + '/v-grid-group-element', prefix + '/v-grid-loadingscreen', prefix + '/v-grid-contextmenu', prefix + '/v-grid-col', prefix + '/v-grid');
    }
    var prefix;
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true,
        "WakRestApi": true,
        "WakDataSource": true,
        "WakGridConnector": true,
        "WakSelection": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n))
                exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (interfaces_1_1) {
                exportStar_1(interfaces_1_1);
            },
            function (wakinterfaces_1_1) {
                exports_1({
                    "WakRestApi": wakinterfaces_1_1["WakRestApi"],
                    "WakDataSource": wakinterfaces_1_1["WakDataSource"],
                    "WakGridConnector": wakinterfaces_1_1["WakGridConnector"],
                    "WakSelection": wakinterfaces_1_1["WakSelection"]
                });
            }
        ],
        execute: function () {
            prefix = './grid';
        }
    };
});

//# sourceMappingURL=index.js.map
