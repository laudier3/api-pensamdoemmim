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
exports.CreateProductWithExistcategories = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
const AppErros_1 = require("../../err/AppErros");
class CreateProductWithExistcategories {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, price, bar_code, frete, color, url_product, size, quantity, description, image, slug, id_categories } = request.body;
            if (typeof price === 'number' ||
                typeof bar_code === 'number' ||
                typeof color === 'number' ||
                typeof size === 'number' ||
                typeof name === 'number' ||
                typeof frete === 'number' ||
                typeof quantity === 'number' ||
                typeof description === 'number' ||
                typeof slug === 'undefined' ||
                typeof url_product === 'number' ||
                typeof image === 'number') {
                return response.status(500).json({
                    msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
                });
            }
            if (typeof price === 'undefined' ||
                typeof size === 'undefined' ||
                typeof description === 'undefined' ||
                typeof color === 'undefined' ||
                typeof name === 'undefined' ||
                typeof frete === 'undefined' ||
                typeof bar_code === 'undefined' ||
                typeof quantity === 'undefined' ||
                typeof url_product === 'undefined' ||
                typeof image === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! Verifique novamente!`
                });
            }
            const userExists = yield prismaClient_1.prisma.category.findUnique({
                where: {
                    id: id_categories
                }
            });
            if (!userExists) {
                throw new AppErros_1.AppError(`Esse id: ${id_categories} não estar vinculado a nem uma categoria, tente outro!`);
            }
            const product = yield prismaClient_1.prisma.product_Category.create({
                data: {
                    id,
                    products: {
                        create: {
                            id,
                            name,
                            price,
                            bar_code,
                            color,
                            size,
                            frete,
                            quantity,
                            description,
                            image,
                            slug,
                            url_product
                        },
                    },
                    categories: {
                        connect: {
                            id: id_categories,
                        },
                    },
                },
            });
            return response.status(201).json(product);
        });
    }
}
exports.CreateProductWithExistcategories = CreateProductWithExistcategories;
