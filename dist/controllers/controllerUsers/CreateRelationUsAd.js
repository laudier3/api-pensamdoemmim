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
exports.RelationUserAdress = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class RelationUserAdress {
    execute({ id_user, id_adress, id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof id_user === 'number' ||
                typeof id_adress === 'number') {
                return {
                    msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
                };
            }
            if (typeof id_user === 'undefined' ||
                typeof id_adress === 'undefined') {
                return {
                    msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
                };
            }
            const relatiosnUserAdress = yield prismaClient_1.prisma.relationsAdress.create({
                data: {
                    id,
                    id_user,
                    id_adress,
                },
            });
            return relatiosnUserAdress;
        });
    }
}
exports.RelationUserAdress = RelationUserAdress;
