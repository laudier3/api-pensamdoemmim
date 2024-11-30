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
exports.controllercategoriesDelete = void 0;
const AppErros_1 = require("../../err/AppErros");
const prismaClient_1 = require("../../prisma_Client_Orm/prismaClient");
class controllercategoriesDelete {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const idExists = yield prismaClient_1.prisma.category.findUnique({
                where: {
                    id: id
                }
            });
            if (!idExists) {
                throw new AppErros_1.AppError(`Esse id: ${id} não existe mais no database`);
            }
            const product = yield prismaClient_1.prisma.category.delete({
                where: {
                    id: id
                }
            });
            try {
                return response.json({ msg: "Categoria deletado com sucesso!", product });
            }
            catch (error) {
                throw new Error(`A categoria não pode ser deletada!`);
            }
        });
    }
}
exports.controllercategoriesDelete = controllercategoriesDelete;
