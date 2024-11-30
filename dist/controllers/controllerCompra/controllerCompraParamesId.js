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
exports.ControllerCompraParamesId = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerCompraParamesId {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const idExists = yield prismaClient_1.prisma.compra.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no prisma_Client_Orm ou você esta usando o id errado!`
                });
            }
            const compra = yield prismaClient_1.prisma.user.findUnique({
                where: {
                    id: id
                }
            });
            return response.status(200).json(compra);
        });
    }
}
exports.ControllerCompraParamesId = ControllerCompraParamesId;
