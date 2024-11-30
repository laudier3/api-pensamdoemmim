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
exports.ControllerCompraRelations = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerCompraRelations {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_products, id_compra } = request.body;
            if (typeof id_compra === 'number' ||
                typeof id_products === 'number') {
                return response.status(500).json({
                    msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
                });
            }
            if (typeof id_compra === 'undefined' ||
                typeof id_products === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente || olha o que ta recebendo ${id_compra}, ${id_products}`
                });
            }
            const compraRelations = yield prismaClient_1.prisma.compraRealations.create({
                data: {
                    id_compra,
                    id_products,
                },
            });
            return response.json(compraRelations);
        });
    }
}
exports.ControllerCompraRelations = ControllerCompraRelations;
