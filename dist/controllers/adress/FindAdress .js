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
exports.FindAdress = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class FindAdress {
    execute({ apartment_or_house, street, city, cep, state, number, district, }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Se o Ususario não exite ele cria aqui
            const user = yield prismaClient_1.prisma.adress.findMany({});
            return user;
        });
    }
}
exports.FindAdress = FindAdress;
