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
exports.ControllerSlids = void 0;
const prismaClient_1 = require("../../../prisma_Client_Orm/prismaClient");
class ControllerSlids {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slids } = request.body;
            if (typeof slids === 'number') {
                return response.status(501).json({
                    msg: `Lembre-se que, todos os campos tem que estar em string ok!`
                });
            }
            if (typeof slids === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando!`
                });
            }
            const SlidsCreate = yield prismaClient_1.prisma.slids.create({
                data: {
                    slids,
                }
            });
            return response.status(201).json({ message: 'Compra criada com sucesso', SlidsCreate });
        });
    }
}
exports.ControllerSlids = ControllerSlids;
