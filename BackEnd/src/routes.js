const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');

const SessionController = require('./Controllers/SessionController');
const LoginController = require('./Controllers/LoginController');
const EquipamentoController = require('./Controllers/EquipamentoController');
const UsuarioController = require('./Controllers/PerfilUsuarioController');
const EquipamentoList = require('./Controllers/EquipamentoListController');
const Negociar = require('./Controllers/NegocioController');
const UnicoUser = require('./Controllers/UnicoUser');

const routes = express.Router();

const upload = multer(uploadConfig);

routes.post("/login",LoginController.store);
routes.post("/sessions",SessionController.store);
routes.get("/listaUsuarios",SessionController.Index);
routes.get("/usuario",UsuarioController.show);
routes.get('/negocio',Negociar.show);
routes.get('/unicouser',UnicoUser.show);
routes.get("/equipamento",EquipamentoController.index);
routes.delete("/equipamento",EquipamentoController.destroy);
routes.post("/equipamento",upload.single('imagemEquip'),EquipamentoController.store);
routes.get("/equipamentolist",upload.single('imagemEquip'),EquipamentoList.index);

module.exports = routes;
