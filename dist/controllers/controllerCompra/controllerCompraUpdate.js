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
exports.ControllerCompraUpdate = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class ControllerCompraUpdate {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, city, cep, street, state, number, district, apartment_or_house, productName, productPrice, productQuantity, productImage, productSize, productClolor, productUrl, email, name, phone, code_compra } = request.body;
            if (typeof id === "undefined") {
                return response.status(400).json({
                    msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
                });
            }
            if (typeof number === 'number' ||
                typeof cep === 'number' ||
                typeof state === 'number' ||
                typeof street === 'number' ||
                typeof apartment_or_house === 'number' ||
                typeof district === 'number' ||
                typeof name === 'number' ||
                typeof productName === 'number' ||
                typeof productPrice === 'number' ||
                typeof productImage === 'number' ||
                typeof productQuantity === 'number' ||
                typeof productSize === 'number' ||
                typeof productClolor === 'number' ||
                typeof productUrl === 'number' ||
                typeof email === 'number' ||
                typeof phone === 'number' ||
                typeof city === 'number') {
                return response.status(501).json({
                    msg: `Lembre-se que, todos os campos tem que estar em string ok!`
                });
            }
            if (typeof cep === 'undefined' ||
                typeof state === 'undefined' ||
                typeof street === 'undefined' ||
                typeof apartment_or_house === 'undefined' ||
                typeof district === 'undefined' ||
                typeof city === 'undefined' ||
                typeof name === 'undefined' ||
                typeof productName === 'undefined' ||
                typeof productPrice === 'undefined' ||
                typeof productImage === 'undefined' ||
                typeof productQuantity === 'undefined' ||
                typeof productSize === 'undefined' ||
                typeof productClolor === 'undefined' ||
                typeof productUrl === 'undefined' ||
                typeof email === 'undefined' ||
                typeof code_compra === 'undefined' ||
                typeof phone === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando!`
                });
            }
            const compraUpdate = yield prismaClient_1.prisma.compra.update({
                where: {
                    id: id,
                },
                data: {
                    name,
                    email,
                    phone,
                    district,
                    apartment_or_house,
                    street,
                    city,
                    cep,
                    number,
                    productName,
                    productPrice,
                    productQuantity,
                    productImage,
                    productSize,
                    productClolor,
                    productUrl,
                    state,
                    code_compra
                }
            });
            return response.status(201).json(compraUpdate);
        });
    }
}
exports.ControllerCompraUpdate = ControllerCompraUpdate;
