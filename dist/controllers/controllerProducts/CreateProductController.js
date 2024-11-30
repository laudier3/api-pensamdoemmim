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
exports.CreateProductController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CreateProductController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, bar_code, size, color, description, image, quantity, slug, frete, url_product } = request.body;
            //const createProductCase = new Createproducts()
            const result = yield prisma.product.create({
                data: {
                    name,
                    price,
                    bar_code,
                    size,
                    frete,
                    color,
                    description,
                    image,
                    quantity,
                    slug,
                    url_product
                }
            });
            return response.status(200).json(result);
        });
    }
}
exports.CreateProductController = CreateProductController;
