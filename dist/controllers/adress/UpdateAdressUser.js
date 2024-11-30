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
exports.UpdateAdressUser = void 0;
const UpdateAdress_1 = require("./UpdateAdress");
class UpdateAdressUser {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, apartment_or_house, street, city, cep, state, number, district, } = request.body;
            const updateUserCase = new UpdateAdress_1.UpdateAdress();
            const result = yield updateUserCase.execute({
                id,
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
exports.UpdateAdressUser = UpdateAdressUser;
