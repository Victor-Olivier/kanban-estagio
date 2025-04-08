"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./entities/board.entity");
const column_entity_1 = require("./entities/column.entity");
const card_entity_1 = require("./entities/card.entity");
const board_module_1 = require("./boards/board.module");
const column_module_1 = require("./columns/column.module");
const card_module_1 = require("./cards/card.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'kanban.db',
                entities: [board_entity_1.Board, column_entity_1.Column, card_entity_1.Card],
                synchronize: true, // Trocar para false ao usar migrações
            }),
            board_module_1.BoardModule,
            column_module_1.ColumnModule,
            card_module_1.CardModule,
        ],
    })
], AppModule);
