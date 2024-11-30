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
exports.ControllerComentario = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerComentario {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, imgName, image, message, estrela, idProduct } = request.body;
            if (typeof name === 'number' ||
                typeof image === 'number' ||
                typeof message === 'number' ||
                typeof imgName === 'number' ||
                typeof idProduct === 'number' ||
                typeof estrela === 'number') {
                return response.status(501).json({
                    msg: `Lembre-se que, todos os campos tem que estar em string ok!`
                });
            }
            if (typeof name === 'undefined' ||
                typeof image === 'undefined' ||
                typeof message === 'undefined' ||
                typeof imgName === 'undefined' ||
                typeof idProduct === 'undefined' ||
                typeof estrela === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando!`
                });
            }
            const comentario = yield prismaClient_1.prisma.comentarios.create({
                data: {
                    name,
                    imgName,
                    image,
                    message,
                    estrela,
                    idProduct
                }
            });
            return response.status(201).json({ message: 'Comentarios criada com sucesso', comentario });
        });
    }
}
exports.ControllerComentario = ControllerComentario;
