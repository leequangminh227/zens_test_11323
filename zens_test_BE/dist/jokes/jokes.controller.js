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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokesController = void 0;
const common_1 = require("@nestjs/common");
const jokes_service_1 = require("./jokes.service");
const swagger_1 = require("@nestjs/swagger");
let JokesController = class JokesController {
    constructor(JokesService) {
        this.JokesService = JokesService;
    }
    getAll() {
        return this.JokesService.getAll();
    }
    getOne(id) {
        return this.JokesService.getOne(id);
    }
    getNew(idList) {
        return this.JokesService.getNew(idList);
    }
    reactJoke(id, reaction) {
        return this.JokesService.reactJoke(id, reaction === 'true');
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all jokes',
        description: 'Get array of all existing jokes',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JokesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Find joke',
        description: 'Get joke by id',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'id of the joke',
        schema: { type: 'integer' },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JokesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('new'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get new joke',
        description: 'Get one joke that not in the array of id of jokes',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'idList',
        description: 'Array of list of id of reacted jokes',
        schema: { type: 'array', items: { type: 'integer' }, default: [] },
    }),
    __param(0, (0, common_1.Query)('idList')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JokesController.prototype, "getNew", null);
__decorate([
    (0, common_1.Put)('react/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'React a joke',
        description: 'React a joke and update like/dislike of that joke',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id of the joke reacted',
        required: true,
        schema: { type: 'integer' },
    }),
    (0, swagger_1.ApiQuery)({
        name: 'reaction',
        description: 'Reaction to the joke (like it or not)',
        schema: { type: 'boolean' },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('reaction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], JokesController.prototype, "reactJoke", null);
JokesController = __decorate([
    (0, common_1.Controller)('jokes'),
    __metadata("design:paramtypes", [jokes_service_1.JokesService])
], JokesController);
exports.JokesController = JokesController;
//# sourceMappingURL=jokes.controller.js.map