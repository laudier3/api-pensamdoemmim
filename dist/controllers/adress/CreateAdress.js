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
exports.CreateAdress = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class CreateAdress {
    execute({ street, apartment_or_house, city, cep, state, number, district, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof number === 'number' ||
                typeof apartment_or_house === 'number' ||
                typeof cep === 'number' ||
                typeof state === 'number' ||
                typeof street === 'number' ||
                typeof city === 'number' ||
                typeof district === 'number') {
                return ({
                    msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
                });
            }
            if (typeof number === 'undefined' ||
                typeof apartment_or_house === 'undefined' ||
                typeof cep === 'undefined' ||
                typeof name === 'undefined' ||
                typeof state === 'undefined' ||
                typeof street === 'undefined' ||
                typeof city === 'undefined' ||
                typeof district === 'undefined') {
                return ({
                    msg: `Algum campo esta faltando! Verifique novamente!`
                });
            }
            // Se o Ususario não exite ele cria aqui
            const user = yield prismaClient_1.prisma.adress.create({
                data: {
                    apartment_or_house,
                    street,
                    city,
                    cep,
                    state,
                    number,
                    district,
                }
            });
            return user;
        });
    }
}
exports.CreateAdress = CreateAdress;
