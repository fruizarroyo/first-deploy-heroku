// Router
const express = require('express');
const router = express.Router();

// Servicios
const ProductsService = require('../services/products');
const service = new ProductsService();

// Middlewares
const validatorHandler = require('../middlewares/validator.handler');

//Esquemas
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/products');

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res) => {
  const products = await service.findAll();
  res.json(products);
});

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'), // que venga el id en formato correcto
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (e) {
      next(e);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

module.exports = router;
