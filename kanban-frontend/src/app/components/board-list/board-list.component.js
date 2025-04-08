"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardListComponent = void 0;
// board-list.component.ts
const core_1 = require("@angular/core");
let BoardListComponent = class BoardListComponent {
};
exports.BoardListComponent = BoardListComponent;
exports.BoardListComponent = BoardListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-board-list',
        templateUrl: './board-list.component.html',
        styleUrls: ['./board-list.component.css']
    })
], BoardListComponent);
