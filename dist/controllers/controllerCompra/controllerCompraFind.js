"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerCompraFind4 = exports.ControllerCompraFind3 = exports.ControllerCompraFind2 = exports.ControllerCompraFind1 = exports.ControllerCompraFind = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerCompraFind {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const user = yield prismaClient_1.prisma.compra.findMany({
                where: {
                    id
                },
                include: {
                    comprarealations: {
                        include: {
                            product: true
                        }
                    }
                }
            });
            return response.status(200).json(user);
        });
    }
}
exports.ControllerCompraFind = ControllerCompraFind;
class ControllerCompraFind1 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const compra1 = yield prismaClient_1.prisma.compra1.findMany({});
            return response.status(200).json(compra1);
        });
    }
}
exports.ControllerCompraFind1 = ControllerCompraFind1;
class ControllerCompraFind2 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const compra2 = yield prismaClient_1.prisma.compra2.findMany({});
            return response.status(200).json(compra2);
        });
    }
}
exports.ControllerCompraFind2 = ControllerCompraFind2;
class ControllerCompraFind3 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const compra3 = yield prismaClient_1.prisma.compra3.findMany({});
            return response.status(200).json(compra3);
        });
    }
}
exports.ControllerCompraFind3 = ControllerCompraFind3;
class ControllerCompraFind4 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const compra4 = yield prismaClient_1.prisma.compra4.findMany({});
            return response.status(200).json(compra4);
        });
    }
}
exports.ControllerCompraFind4 = ControllerCompraFind4;
