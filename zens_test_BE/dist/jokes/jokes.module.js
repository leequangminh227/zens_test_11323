"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokesModule = void 0;
const common_1 = require("@nestjs/common");
const jokes_controller_1 = require("./jokes.controller");
const jokes_service_1 = require("./jokes.service");
let JokesModule = class JokesModule {
};
JokesModule = __decorate([
    (0, common_1.Module)({
        controllers: [jokes_controller_1.JokesController],
        providers: [jokes_service_1.JokesService],
    })
], JokesModule);
exports.JokesModule = JokesModule;
//# sourceMappingURL=jokes.module.js.map