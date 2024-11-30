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
exports.Createproducts = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class Createproducts {
    execute({ name, price, bar_code, size, color, description, image, quantity, slug, frete, url_product //Essa entidade foi adicionada 26/01/2024
     }) {
        return __awaiter(this, void 0, void 0, function* () {
            /* Aque abaixo começamos a cria nossa regra de negocio, verificamos se o bar_code existe, ou se o slug ja existe,
            se sim, ira mostra uma messagem dizendo que ja isExpressionStatement, se não ele cria o produto*/
            if (typeof price === 'number' ||
                typeof bar_code === 'number' ||
                typeof color === 'number' ||
                typeof size === 'number' ||
                typeof name === 'number' ||
                typeof quantity === 'number' ||
                typeof frete === 'number' ||
                typeof description === 'number' ||
                typeof slug === 'number' ||
                typeof url_product === 'number' ||
                typeof image === 'number') {
                return {
                    msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
                };
            }
            if (typeof price === 'undefined' ||
                typeof size === 'undefined' ||
                typeof description === 'undefined' ||
                typeof color === 'undefined' ||
                typeof name === 'undefined' ||
                typeof frete === 'undefined' ||
                typeof bar_code === 'undefined' ||
                typeof quantity === 'undefined' ||
                typeof slug === 'undefined' ||
                typeof url_product === 'undefined' ||
                typeof image === 'undefined') {
                return {
                    msg: `Algum campo esta faltando! Verifique novamente agora!`
                };
            }
            const products = yield prismaClient_1.prisma.product.create({
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
                    slug,
                    url_product
                },
            });
            return products;
        });
    }
}
exports.Createproducts = Createproducts;
