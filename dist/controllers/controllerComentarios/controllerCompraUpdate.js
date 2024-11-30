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
exports.ControllerComentarioUpdate = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
//Novas itidade adicionada
class ControllerComentarioUpdate {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, image, message, imgName, estrela, idProduct } = request.body;
            if (typeof name === 'number' ||
                typeof imgName === 'number' ||
                typeof image === 'number' ||
                typeof estrela === 'number' ||
                typeof idProduct === 'number' ||
                typeof message === 'number') {
                return response.status(501).json({
                    msg: `Lembre-se que, todos os campos tem que estar em string ok!`
                });
            }
            if (typeof name === 'undefined' ||
                typeof imgName === 'undefined' ||
                typeof image === 'undefined' ||
                typeof estrela === 'undefined' ||
                typeof idProduct === 'undefined' ||
                typeof message === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando!`
                });
            }
            const comentarioUpdate = yield prismaClient_1.prisma.comentarios.update({
                where: {
                    id: id,
                },
                data: {
                    name,
                    image,
                    imgName,
                    estrela,
                    idProduct,
                    message
                }
            });
            return response.status(201).json(comentarioUpdate);
        });
    }
}
exports.ControllerComentarioUpdate = ControllerComentarioUpdate;
