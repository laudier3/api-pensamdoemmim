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
exports.ControllerFavoritDelete = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerFavoritDelete {
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
            const favoritoDell = yield prismaClient_1.prisma.favorito.delete({
                where: {
                    id: id
                }
            });
            return response.json({ msg: "favoritoDell deletado com sucesso!", favoritoDell });
        });
    }
}
exports.ControllerFavoritDelete = ControllerFavoritDelete;