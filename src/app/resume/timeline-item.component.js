var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    exports.__esModule = true;
    var TimelineItemComponent = (function () {
        function TimelineItemComponent() {
            this.current = false;
        }
        return TimelineItemComponent;
    }());
    __decorate([
        core_1.Input()
    ], TimelineItemComponent.prototype, "date");
    __decorate([
        core_1.Input()
    ], TimelineItemComponent.prototype, "date2");
    __decorate([
        core_1.Input()
    ], TimelineItemComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], TimelineItemComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], TimelineItemComponent.prototype, "description");
    __decorate([
        core_1.Input()
    ], TimelineItemComponent.prototype, "current");
    TimelineItemComponent = __decorate([
        core_1.Component({
            selector: 'timeline-item',
            templateUrl: './templates/timeline-item.html'
        })
    ], TimelineItemComponent);
    exports.TimelineItemComponent = TimelineItemComponent;
});
//# sourceMappingURL=timeline-item.component.js.map