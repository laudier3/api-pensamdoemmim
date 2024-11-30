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
exports.ControllerOfertasUpdate = void 0;
const prismaClient_1 = require("../../../prisma_Client_Orm/prismaClient");
class ControllerOfertasUpdate {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, ofertas } = request.body;
            if (typeof id === "undefined") {
                return response.status(400).json({
                    msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
                });
            }
            const OfertasUpdate = yield prismaClient_1.prisma.ofertas.update({
                where: {
                    id: id,
                },
                data: {
                    ofertas
                }
            });
            return response.status(201).json(OfertasUpdate);
        });
    }
}
exports.ControllerOfertasUpdate = ControllerOfertasUpdate;
