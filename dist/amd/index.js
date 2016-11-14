define(["require", "exports", './gridConnector', './selection', './dataSource', './collection'], function (require, exports, gridConnector, selection, datasource, collection) {
    "use strict";
    var prefix = './grid';
    function configure(config) {
        config.globalResources(prefix + '/attributes/v-filter', prefix + '/attributes/v-sort', prefix + '/attributes/v-image', prefix + '/attributes/v-drag-drop-col', prefix + '/attributes/v-resize-col', prefix + '/attributes/v-menu', prefix + '/attributes/v-selection', prefix + '/v-grid-row-repeat', prefix + '/v-grid-col', prefix + '/v-grid');
    }
    exports.configure = configure;
    exports.GridConnector = gridConnector.GridConnector;
    exports.Selection = selection.Selection;
    exports.DataSource = datasource.DataSource;
    exports.Collection = collection.Collection;
});

//# sourceMappingURL=index.js.map