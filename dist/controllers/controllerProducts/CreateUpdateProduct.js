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
exports.CreateUpdateproducts = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class CreateUpdateproducts {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, price, bar_code, size, color, frete, description, image, quantity, slug } = request.body;
            if (typeof id === 'number' ||
                typeof price === 'number' ||
                typeof bar_code === 'number' ||
                typeof color === 'number' ||
                typeof size === 'number' ||
                typeof frete === 'number' ||
                typeof name === 'number' ||
                typeof quantity === 'number' ||
                typeof description === 'number' ||
                typeof slug === 'number' ||
                typeof image === 'number') {
                return response.status(500).json({
                    msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!  Ou você não passo o id correto.`
                });
            }
            if (typeof id === 'undefined' ||
                typeof price === 'undefined' ||
                typeof size === 'undefined' ||
                typeof description === 'undefined' ||
                typeof color === 'undefined' ||
                typeof name === 'undefined' ||
                typeof frete === 'undefined' ||
                typeof bar_code === 'undefined' ||
                typeof quantity === 'undefined' ||
                typeof slug === 'undefined' ||
                typeof image === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! Verifique novamente! Ou você não passo o id correto.`
                });
            }
            const products = yield prismaClient_1.prisma.product.update({
                where: {
                    id: id,
                },
                data: {
                    name,
                    price,
                    bar_code,
                    size,
                    color,
                    frete,
                    description,
                    image,
                    quantity,
                    slug
                },
            });
            return response.status(200).json(products);
        });
    }
}
exports.CreateUpdateproducts = CreateUpdateproducts;
