"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
//============== importação de class de controller de Productos =================
const CreateProductController_1 = require("../controllers/controllerProducts/CreateProductController");
const CreateUpdateProduct_1 = require("../controllers/controllerProducts/CreateUpdateProduct");
const CreateProductDelete_1 = require("../controllers/controllerProducts/CreateProductDelete");
const CreateCategoryDelete_1 = require("../controllers/controllerProducts/CreateCategoryDelete");
const FindCategoryController_1 = require("../controllers/controllerProducts/FindCategoryController");
const FindCategorProductRealtion_1 = require("../controllers/controllerProducts/FindCategorProductRealtion");
const FindCategoryControllerId_1 = require("../controllers/controllerProducts/FindCategoryControllerId");
const FindProductController_1 = require("../controllers/controllerProducts/FindProductController");
const FindProductCategoryId_1 = require("../controllers/controllerProducts/FindProductCategoryId");
const FindProductId_1 = require("../controllers/controllerProducts/FindProductId");
const CreateProductCategoryRelation_1 = require("../controllers/controllerProducts/CreateProductCategoryRelation");
const CreateCategoryController_1 = require("../controllers/controllerProducts/CreateCategoryController");
const CreateUpdateCategory_1 = require("../controllers/controllerProducts/CreateUpdateCategory");
const CreateProductWithExistCategory_1 = require("../controllers/controllerProducts/CreateProductWithExistCategory");
const ControllerProductCategoryPut_1 = require("../controllers/controllerProducts/ControllerProductCategoryPut");
const CreateCategoryDeleteRelations_1 = require("../controllers/controllerProducts/CreateCategoryDeleteRelations");
const FindProductRealationTodos_1 = require("../controllers/controllerProducts/FindProductRealationTodos");
//============== importação de class de controller de usuarios =================
const controllerCreateUser_1 = require("../controllers/controllerUsers/controllerCreateUser");
const controllerFindUser_1 = require("../controllers/controllerUsers/controllerFindUser");
const controllerUpdateUser_1 = require("../controllers/controllerUsers/controllerUpdateUser");
const controllerDeleteUser_1 = require("../controllers/controllerUsers/controllerDeleteUser");
const controllerAuth_1 = require("../controllers/controllerUsers/controllerAuth");
const controllerLogin_1 = require("../controllers/controllerUsers/controllerLogin");
const controllerParamesIdFindUser_1 = require("../controllers/controllerUsers/controllerParamesIdFindUser");
const controllerFindUserAdress_1 = require("../controllers/controllerUsers/controllerFindUserAdress");
//============== importação de class de controller de adress =================
const CreateAdressUser_1 = require("../controllers/adress/CreateAdressUser");
const FindAdressUser_1 = require("../controllers/adress/FindAdressUser ");
const UpdateAdressUser_1 = require("../controllers/adress/UpdateAdressUser");
const CreateRealationsUserAdress_1 = require("../controllers/controllerUsers/CreateRealationsUserAdress");
const FindUserAdressReations_1 = require("../controllers/controllerUsers/FindUserAdressReations");
const FindUserAdressReationsId_1 = require("../controllers/controllerUsers/FindUserAdressReationsId");
//Mercado pago
const MercadoPagoPayment_1 = __importDefault(require("../controllers/mercadoPagoPayment/MercadoPagoPayment"));
const router = (0, express_1.Router)(); //
exports.router = router;
/* ============================== OBJETO CRIADOS PARA ROTAS ====================== */
const createProduct = new CreateProductController_1.CreateProductController();
const findProduct = new FindProductController_1.FindproductsController();
const createProductDel = new CreateProductDelete_1.controllerproductsDelete();
const createUpadate = new CreateUpdateProduct_1.CreateUpdateproducts();
/* ============================== OBJETO CRIADOS PARA ROTAS DE CATEGORY ====================== */
const createCategory = new CreateCategoryController_1.CreatecategoriesController();
const findCategory = new FindCategoryController_1.FindcategoriesController();
const createCategoryUpdate = new CreateUpdateCategory_1.CreatecategoriesUpdate();
const createCategoryDeleteR = new CreateCategoryDeleteRelations_1.ControllerCategoryDeleteRelations();
/* ============================== OBJETO CRIADOS PARA ROTAS RELACIONAMENTO ====================== */
const createCategoryDel = new CreateCategoryDelete_1.controllercategoriesDelete();
const findCategoryRelation = new FindCategorProductRealtion_1.FindCategoryRelation();
const findCategoryRelationId = new FindCategoryControllerId_1.FindcategoriesControllerId();
const createProductCategory = new CreateProductCategoryRelation_1.CreateProductCategoryRelation();
const createProductCategoryExist = new CreateProductWithExistCategory_1.CreateProductWithExistcategories();
const createProductCategoryExistPut = new ControllerProductCategoryPut_1.CreateproductsWithExistCategoryPut();
const findProductCategory = new FindProductCategoryId_1.controllerproductsCategory();
const findProductCategoryId = new FindProductId_1.controllerproductsId();
const FindProductRealationTodosList = new FindProductRealationTodos_1.FindProductRealationTodos();
/* ================================= CONTROLLERS COMPRA ================================ */
const controllerCompraCreate_1 = require("../controllers/controllerCompra/controllerCompraCreate");
const controllerCompraFind_1 = require("../controllers/controllerCompra/controllerCompraFind");
const controllerCompraUpdate_1 = require("../controllers/controllerCompra/controllerCompraUpdate");
const controllerCompraDelete_1 = require("../controllers/controllerCompra/controllerCompraDelete");
const controllerCompraRelations_1 = require("../controllers/controllerCompra/controllerCompraRelations");
const controllerCompraRelationsDelete_1 = require("../controllers/controllerCompra/controllerCompraRelationsDelete");
const controllerCompraFindRelation_1 = require("../controllers/controllerCompra/controllerCompraFindRelation");
/* ================================= CONTROLLERS FAVORIT ================================ */
const controllerFavoriotosCreate_1 = require("../controllers/controllerFavoriotos/controllerFavoriotosCreate");
const controllerFavoriotosUpdate_1 = require("../controllers/controllerFavoriotos/controllerFavoriotosUpdate");
const controllerFavoriotosFind_1 = require("../controllers/controllerFavoriotos/controllerFavoriotosFind");
const controllerFavoriotosDelete_1 = require("../controllers/controllerFavoriotos/controllerFavoriotosDelete");
const createFavorito = new controllerFavoriotosCreate_1.CreateFavorit();
const findFavorito = new controllerFavoriotosFind_1.ControllerFavoritFind();
const updateFavorito = new controllerFavoriotosUpdate_1.ControllerFavoritUpdate();
const deleteFavorito = new controllerFavoriotosDelete_1.ControllerFavoritDelete();
/* ================================= CONTROLLERS COMENTARIOS ================================ */
const controllerCompraCreate_2 = require("../controllers/controllerComentarios/controllerCompraCreate");
const controllerCompraUpdate_2 = require("../controllers/controllerComentarios/controllerCompraUpdate");
const controllerCompraFind_2 = require("../controllers/controllerComentarios/controllerCompraFind");
const controllerCompraDelete_2 = require("../controllers/controllerComentarios/controllerCompraDelete");
const controllerComentarioFindRelation_1 = require("../controllers/controllerComentarios/controllerComentarioFindRelation");
const ControllerComentarioaRelationsDel_1 = require("../controllers/controllerComentarios/ControllerComentarioaRelationsDel");
const controllerComentarioCreateRelation_1 = require("../controllers/controllerComentarios/controllerComentarioCreateRelation");
const createComentario = new controllerCompraCreate_2.ControllerComentario();
const createComentarioRelation = new controllerComentarioCreateRelation_1.controllerComentarioCreateRelation();
const findComentario = new controllerCompraFind_2.ControllerComentarioFind();
const findComentarioRelation = new controllerComentarioFindRelation_1.controllerComentarioFindRelation();
const updateComentario = new controllerCompraUpdate_2.ControllerComentarioUpdate();
const deleteComentario = new controllerCompraDelete_2.ControllerComentarioDelete();
const deleteComentarioRelation = new ControllerComentarioaRelationsDel_1.ControllerComentarioaRelationsDel();
const createCompra = new controllerCompraCreate_1.ControllerCompra();
const createCompra1 = new controllerCompraCreate_1.ControllerCompra1();
const createCompra2 = new controllerCompraCreate_1.ControllerCompra2();
const createCompra3 = new controllerCompraCreate_1.ControllerCompra3();
const createCompra4 = new controllerCompraCreate_1.ControllerCompra4();
const createCompraFind = new controllerCompraFind_1.ControllerCompraFind();
const createCompraFind1 = new controllerCompraFind_1.ControllerCompraFind1();
const createCompraFind2 = new controllerCompraFind_1.ControllerCompraFind2();
const createCompraFind3 = new controllerCompraFind_1.ControllerCompraFind3();
const createCompraFind4 = new controllerCompraFind_1.ControllerCompraFind4();
const createCompraFindRelations = new controllerCompraFindRelation_1.ControllerCompraFindRelations();
const createCompraUpdate = new controllerCompraUpdate_1.ControllerCompraUpdate();
const createCompraDelete = new controllerCompraDelete_1.ControllerCompraDelete();
const createCompraDelete1 = new controllerCompraDelete_1.ControllerCompraDelete1();
const createCompraDelete2 = new controllerCompraDelete_1.ControllerCompraDelete2();
const createCompraDelete3 = new controllerCompraDelete_1.ControllerCompraDelete3();
const createCompraDelete4 = new controllerCompraDelete_1.ControllerCompraDelete4();
const createDeleteRelation = new controllerCompraRelationsDelete_1.ControllerCompraRelationsDel();
const createCompraRealtion = new controllerCompraRelations_1.ControllerCompraRelations();
/*=================================== IMPORT CONTROLLER MARCKTS =============================*/
// SLids
const controllerSlidsCreate_1 = require("../controllers/marckts/slids/controllerSlidsCreate");
const controllerSlidsUpdate_1 = require("../controllers/marckts/slids/controllerSlidsUpdate");
const controllerSlidsFind_1 = require("../controllers/marckts/slids/controllerSlidsFind");
const controllerSlidsDelete_1 = require("../controllers/marckts/slids/controllerSlidsDelete");
//Banner
const controllerBannesCreate_1 = require("../controllers/marckts/banne/controllerBannesCreate");
const controllerBannesUpdate_1 = require("../controllers/marckts/banne/controllerBannesUpdate");
const controllerBannesFind_1 = require("../controllers/marckts/banne/controllerBannesFind");
const controllerBannesDelete_1 = require("../controllers/marckts/banne/controllerBannesDelete");
//Promocao
const controllerPromocaoCreate_1 = require("../controllers/marckts/promocao/controllerPromocaoCreate");
const controllerPromocaoUpdate_1 = require("../controllers/marckts/promocao/controllerPromocaoUpdate");
const controllerPromocaoFind_1 = require("../controllers/marckts/promocao/controllerPromocaoFind");
const controllerPromocaoDelete_1 = require("../controllers/marckts/promocao/controllerPromocaoDelete");
//Ofertas
const controllerOfertaCreate_1 = require("../controllers/marckts/ofertas/controllerOfertaCreate");
const controllerOfertaUpdate_1 = require("../controllers/marckts/ofertas/controllerOfertaUpdate");
const controllerOfertaFind_1 = require("../controllers/marckts/ofertas/controllerOfertaFind");
const controllerOfertaDelete_1 = require("../controllers/marckts/ofertas/controllerOfertaDelete");
//Objetos criados para rotas das class marckts
//OBJ slids
const slidsCreate = new controllerSlidsCreate_1.ControllerSlids();
const slidsUpdate = new controllerSlidsUpdate_1.ControllerSlidsUpdate();
const slidsFind = new controllerSlidsFind_1.ControllerSlidsFind();
const slidsDelete = new controllerSlidsDelete_1.ControllerSlidsDelete();
//OBJ banner
const bannerCreate = new controllerBannesCreate_1.ControllerBanner();
const bannerUpdate = new controllerBannesUpdate_1.ControllerBannerUpdate();
const bannerFind = new controllerBannesFind_1.ControllerBannerFind();
const bannerDelete = new controllerBannesDelete_1.ControllerBannerDelete();
//OBJ promoção
const promocaoCreate = new controllerPromocaoCreate_1.ControllerPromocao();
const promocaoUpdate = new controllerPromocaoUpdate_1.ControllerPromocaoUpdate();
const promocaoFind = new controllerPromocaoFind_1.ControllerPromocaoFind();
const promocaoDelete = new controllerPromocaoDelete_1.ControllerPromocaoDelete();
//OBJ ofertas
const ofertasCreate = new controllerOfertaCreate_1.ControllerOfertas();
const ofertasUpdate = new controllerOfertaUpdate_1.ControllerOfertasUpdate();
const ofertasFind = new controllerOfertaFind_1.ControllerOfertasFind();
const ofertasDelete = new controllerOfertaDelete_1.ControllerOfertasDelete();
/*=================================== ROTA DE MACKTS =============================*/
//SLIDS
router.post("/slids", slidsCreate.handle);
router.delete("/slids/:id", slidsDelete.handle);
router.put("/slids", slidsUpdate.handle);
router.get("/slids", slidsFind.handle);
//BANNER
router.post("/banner", bannerCreate.handle);
router.delete("/banner/:id", bannerDelete.handle);
router.put("/banner", bannerFind.handle);
router.get("/banner", bannerFind.handle);
//PROMOÇÃO
router.post("/promocao", promocaoCreate.handle);
router.delete("/promocao/:id", promocaoDelete.handle);
router.put("/promocao", promocaoUpdate.handle);
router.get("/promocao", promocaoFind.handle);
//OFERTAS
router.post("/ofertas", ofertasCreate.handle);
router.delete("/ofertas/:id", ofertasDelete.handle);
router.put("/ofertas", ofertasUpdate.handle);
router.get("/ofertas", ofertasFind.handle);
/*=================================== ROTA DE PRODUCT =============================*/
router.post("/product", createProduct.handle);
router.delete("/product/:id", createProductDel.handle);
router.put("/product", createUpadate.handle);
router.get("/product", findProduct.handle);
router.get("/productcategory", findProductCategory.handle);
router.get("/productcategoryid/:id", findProductCategoryId.handle);
/*=================================== ROTA DE CATEGORY =============================*/
router.get("/category", findCategory.handle);
router.post("/category", createCategory.handle);
router.put("/category", createCategoryUpdate.handle);
/*=================================== ROTA DE REALACIONAMENTO =============================*/
router.delete("/category/:id", createCategoryDel.handle);
router.delete("/categoryrelations/:id", createCategoryDeleteR.handle);
router.get("/category/:id", findCategoryRelationId.handle);
router.get("/categorypr", findCategoryRelation.handle);
router.post("/categorypr", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);
router.get("/producttodos", FindProductRealationTodosList.handle);
/*=================================== ROTA DE USERS =============================*/
const findUser = new controllerFindUser_1.ControllerFind();
const findUserAdress = new controllerFindUserAdress_1.ControllerFindAdressUser();
const findUserId = new controllerParamesIdFindUser_1.UserParamesId();
const createUser = new controllerCreateUser_1.ControllerCreate();
const deleteUser = new controllerDeleteUser_1.controllerDelete();
const updateUser = new controllerUpdateUser_1.controllerUpdate();
const authUser = new controllerAuth_1.ControllerAuth();
const loginUser = new controllerLogin_1.ControllerLogin();
/* ============================= ROTAS DE ACESSO =============================== */
router.post("/login", loginUser.handle);
//router.use(authUser.handle);
router.post("/user", createUser.handle);
router.put("/user", updateUser.handle);
router.delete("/user/:id", deleteUser.handle);
router.get("/user", findUser.handle);
router.get("/usersadress", findUserAdress.handle);
router.get("/user/:id", findUserId.handle);
/* ============================== OBJETO CRIADOS PARA ROTAS ADRESS ====================== */
const createAdress = new CreateAdressUser_1.CreateAdressUser();
const findAdress = new FindAdressUser_1.FindAdressUser();
const findAdressUersRealations = new FindUserAdressReations_1.FindRelationsUserAdress();
const findAdressUersRealationsid = new FindUserAdressReationsId_1.FindRelationsUserAdressId();
const updateAdress = new UpdateAdressUser_1.UpdateAdressUser();
const relationUserAdress = new CreateRealationsUserAdress_1.ControllerRelationsUserAdress();
/* ============================= ROTAS DE ADRESS =============================== */
router.post("/adress", createAdress.handle);
router.get("/adress", findAdress.handle);
router.put("/adress", updateAdress.handle);
/* ============================= ROTAS DE ADRESS =============================== */
/* ============================= ROTAS DE ADRESS =============================== */
router.post("/comentario", createComentario.handle);
router.post("/comentariorelation", createComentarioRelation.handle);
router.get("/comentario", findComentario.handle);
router.get("/comentariorelation", findComentarioRelation.handle);
router.put("/comentario", updateComentario.handle);
router.delete("/comentario/:id", deleteComentario.handle);
router.delete("/comentariorelation/:id", deleteComentarioRelation.handle);
/* ============================= ROTAS DE ADRESS =============================== */
router.post("/favorito", createFavorito.handle);
router.get("/favorito", findFavorito.handle);
router.put("/favorito", updateFavorito.handle);
router.delete("/favorito/:id", deleteFavorito.handle);
/* ============================= ROTAS DE REATION_USER_ADRESS =============================== */
router.post("/relationuseradress", relationUserAdress.handle);
router.get("/relationuseradress", findAdressUersRealations.handle);
router.get("/relationuseradress/:id", findAdressUersRealationsid.handle);
/* ============================= ROTAS DE COMPRAS =============================== */
router.post("/compra", createCompra.handle);
router.post("/compra1", createCompra1.handle);
router.post("/compra2", createCompra2.handle);
router.post("/compra3", createCompra3.handle);
router.post("/compra4", createCompra4.handle);
router.post("/comprarelations", createCompraRealtion.handle);
router.get("/comprarelations", createCompraFindRelations.handle);
router.get("/compra", createCompraFind.handle);
router.get("/compra1", createCompraFind1.handle);
router.get("/compra2", createCompraFind2.handle);
router.get("/compra3", createCompraFind3.handle);
router.get("/compra4", createCompraFind4.handle);
router.put("/compraupdate", createCompraUpdate.handle);
router.delete("/compra/:id", createCompraDelete.handle);
router.delete("/compra1/:id", createCompraDelete1.handle);
router.delete("/compra2/:id", createCompraDelete2.handle);
router.delete("/compra3/:id", createCompraDelete3.handle);
router.delete("/compra4/:id", createCompraDelete4.handle);
router.delete("/comprarelations/:id", createDeleteRelation.handle);
/* ============================= ROTAS DE REATION_USER_ADRESS =============================== */
router.post('/payment', MercadoPagoPayment_1.default);
router.get("/", (req, res) => {
    res.status(200).send(`
        <h1 style="text-align: center; color: #00BFFF; font-size: 50px">Pagamento com mercado pago</h1>
        <hr/>
         <ul>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/user">GET user: Lista todos os usuarios na base de dados!</a></li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/product">GET produtos: Lista todos os produtos na base de dados!</a></li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/adress">GET endereços: Lista todos os endereços na base de dados!</a></li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/compra">GET compras: Lista todos as compras na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/slids">GET slids: Lista todos as imagens na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/banner">GET banner: Lista todos os banner na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/promocao">GET promoção: Lista todos as promoçoes na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/ofertas">GET ofertas: Lista todos as ofertas na base de dados!</a>
            </li>
        </ul>
        <img style="margin: auto; dispaly: flex; width: 100%" src="https://s2-techtudo.glbimg.com/cBzv_-VyoyirkotBx76jb_m-FQA=/0x0:620x304/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/n/z8weK8QpCWDfcY8KFx4w/2013-08-27-mp.jpg" alt="img" />
        `);
});
