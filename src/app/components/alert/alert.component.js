"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Alert = (function () {
    function Alert() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    Alert.prototype.closeAlert = function (index) {
        this.alerts.splice(index, 1);
    };
    Alert.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Alert.prototype, "alerts", void 0);
    Alert = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'alert',
            templateUrl: './alert.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Alert);
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.component.js.map