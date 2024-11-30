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
exports.ControllerBannerUpdate = void 0;
const prismaClient_1 = require("../../../prisma_Client_Orm/prismaClient");
class ControllerBannerUpdate {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, bannes } = request.body;
            if (typeof id === "undefined") {
                return response.status(400).json({
                    msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
                });
            }
            if (bannes) {
                return response.status(501).json({
                    msg: `Lembre-se que, todos os campos tem que estar em string ok!`
                });
            }
            if (bannes) {
                return response.status(500).json({
                    msg: `Algum campo esta faltando!`
                });
            }
            const BannesUpdate = yield prismaClient_1.prisma.bannes.update({
                where: {
                    id: id,
                },
                data: {
                    bannes
                }
            });
            return response.status(201).json(BannesUpdate);
        });
    }
}
exports.ControllerBannerUpdate = ControllerBannerUpdate;
