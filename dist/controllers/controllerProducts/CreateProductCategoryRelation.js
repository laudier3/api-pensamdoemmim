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
exports.CreateProductCategoryRelation = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class CreateProductCategoryRelation {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_category, id_product, } = request.body;
            if (typeof id_category === 'number' ||
                typeof id_product === 'number') {
                return {
                    msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
                };
            }
            if (typeof id_category === 'undefined' ||
                typeof id_product === 'undefined') {
                return {
                    msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
                };
            }
            const productCategory = yield prismaClient_1.prisma.product_Category.create({
                data: {
                    id_category,
                    id_product,
                },
            });
            return response.status(201).json(productCategory);
        });
    }
}
exports.CreateProductCategoryRelation = CreateProductCategoryRelation;
