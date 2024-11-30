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
exports.ControllerRelationsUserAdress = void 0;
const CreateRelationUsAd_1 = require("./CreateRelationUsAd");
class ControllerRelationsUserAdress {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user, id_adress, id } = request.body;
            const createRelationnstCase = new CreateRelationUsAd_1.RelationUserAdress();
            const result = yield createRelationnstCase.execute({
                id,
                id_user,
                id_adress,
            });
            return response.json(result);
        });
    }
}
exports.ControllerRelationsUserAdress = ControllerRelationsUserAdress;
