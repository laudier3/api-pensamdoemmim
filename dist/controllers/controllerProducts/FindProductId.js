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
exports.controllerproductsId = exports.FindproductsController = void 0;
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
const uuid_1 = require("uuid");
const uuId = (0, uuid_1.v4)();
class FindproductsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield prismaClient_1.prisma.product.findMany({});
            return response.json(products);
        });
    }
}
exports.FindproductsController = FindproductsController;
class controllerproductsId {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const userExists = yield prismaClient_1.prisma.product.findUnique({
                where: {
                    id: id
                }
            });
            if (!userExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não estar vinculado a nem uma produto, tente outro!`
                });
            }
            const products = yield prismaClient_1.prisma.product.findUnique({
                where: {
                    id: id
                },
                include: {
                    products_categories: {
                        include: {
                            categories: true
                        }
                    }
                }
            });
            console.log({ test: uuId });
            return response.status(200).json(products);
        });
    }
}
exports.controllerproductsId = controllerproductsId;
