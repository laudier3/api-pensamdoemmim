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
exports.ControllerOfertas = void 0;
const prismaClient_1 = require("../../../prisma_Client_Orm/prismaClient");
//Class de Ofetas
class ControllerOfertas {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ofertas } = request.body;
            if (typeof ofertas === 'number') {
                return response.status(501).json({
                    msg: `Lembre-se que, todos os campos tem que estar em string ok!`
                });
            }
            if (typeof ofertas === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando!`
                });
            }
            const OfertasCreate = yield prismaClient_1.prisma.ofertas.create({
                data: {
                    ofertas,
                }
            });
            return response.status(201).json({ message: 'Compra criada com sucesso', OfertasCreate });
        });
    }
}
exports.ControllerOfertas = ControllerOfertas;
