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
exports.CreateAdressUser = void 0;
const CreateAdress_1 = require("./CreateAdress");
class CreateAdressUser {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { apartment_or_house, street, city, cep, state, number, district, } = request.body;
            const createUserCase = new CreateAdress_1.CreateAdress();
            const result = yield createUserCase.execute({
                apartment_or_house,
                street,
                city,
                cep,
                state,
                number,
                district,
            });
            return response.status(201).json(result);
        });
    }
}
exports.CreateAdressUser = CreateAdressUser;
