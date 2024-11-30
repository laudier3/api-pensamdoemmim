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
exports.controllerComentarioFindRelation = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class controllerComentarioFindRelation {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const comentarioRealatio = yield prismaClient_1.prisma.comentarioRealations.findMany({
                where: {
                    id
                },
                include: {
                    comentarios: true,
                    product: true
                }
            });
            return response.status(200).json(comentarioRealatio);
        });
    }
}
exports.controllerComentarioFindRelation = controllerComentarioFindRelation;
