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
exports.ControllerCompraDelete4 = exports.ControllerCompraDelete3 = exports.ControllerCompraDelete2 = exports.ControllerCompraDelete1 = exports.ControllerCompraDelete = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerCompraDelete {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.compra.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no database`
                });
            }
            const compra = yield prismaClient_1.prisma.compra.delete({
                where: {
                    id: id
                }
            });
            return response.json({ msg: "Usuario deletado com sucesso!", compra });
        });
    }
}
exports.ControllerCompraDelete = ControllerCompraDelete;
class ControllerCompraDelete1 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.compra1.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no database`
                });
            }
            const compra1 = yield prismaClient_1.prisma.compra1.delete({
                where: {
                    id: id
                }
            });
            return response.json({ msg: "Usuario deletado com sucesso!", compra1 });
        });
    }
}
exports.ControllerCompraDelete1 = ControllerCompraDelete1;
class ControllerCompraDelete2 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.compra2.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no database`
                });
            }
            const compra2 = yield prismaClient_1.prisma.compra2.delete({
                where: {
                    id: id
                }
            });
            return response.json({ msg: "Usuario deletado com sucesso!", compra2 });
        });
    }
}
exports.ControllerCompraDelete2 = ControllerCompraDelete2;
class ControllerCompraDelete3 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.compra3.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no database`
                });
            }
            const compra3 = yield prismaClient_1.prisma.compra3.delete({
                where: {
                    id: id
                }
            });
            return response.json({ msg: "Usuario deletado com sucesso!", compra3 });
        });
    }
}
exports.ControllerCompraDelete3 = ControllerCompraDelete3;
class ControllerCompraDelete4 {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.compra4.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no database`
                });
            }
            const compra4 = yield prismaClient_1.prisma.compra4.delete({
                where: {
                    id: id
                }
            });
            return response.json({ msg: "Usuario deletado com sucesso!", compra4 });
        });
    }
}
exports.ControllerCompraDelete4 = ControllerCompraDelete4;
