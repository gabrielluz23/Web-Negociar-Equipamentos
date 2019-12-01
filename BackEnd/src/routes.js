const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');

const SessionController = require('./Controllers/SessionController');
const EquipamentoController = require('./Controllers/EquipamentoController');
const UsuarioController = require('./Controllers/PerfilUsuarioController');
const NegocioController = require('./Controllers/NegocioController');

const routes = express.Router();

const upload = multer(uploadConfig);


routes.post("/sessions",SessionController.store);
routes.get("/listaUsuarios",SessionController.Index);
routes.post("/equipamento/:equip_id/negocios",NegocioController.store);
routes.get("/usuario",UsuarioController.show);
routes.get("/equipamento",EquipamentoController.index);
routes.post("/equipamento",upload.single('imagemEquip'),EquipamentoController.store);

module.exports = routes;
