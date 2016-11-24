"use strict";
var index_component_1 = require('./Components/index.component');
var dashboard_component_1 = require('./Components/dashboard.component');
exports.AppRoutes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'dashboard/:id', component: dashboard_component_1.DashBoardComponent }
];
//# sourceMappingURL=app.routes.js.map