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
exports.ControllerCompraRelationsDel = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerCompraRelationsDel {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.compraRealations.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não existe mais no database`
                });
            }
            const compraDEl = yield prismaClient_1.prisma.compraRealations.delete({
                where: {
                    id: id
                },
                include: {
                    compra: true
                }
            });
            return response.json({ msg: "Compra deletado com sucesso!", compraDEl });
        });
    }
}
exports.ControllerCompraRelationsDel = ControllerCompraRelationsDel;
