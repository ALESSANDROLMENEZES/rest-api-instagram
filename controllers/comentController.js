const { Coment, Notification, Post } = require('../models');
const sequelize = require('sequelize');
const { check, validationResult } = require('express-validator');

module.exports = {
  //-------------------------------------------------------
  list: async (req, res, next) => {
    try {
      let { limit = 5, page = 1 } = req.query;
      limit = parseInt(limit);
      page = parseInt(page - 1);
      const { postId } = req.params;

      const { count: size, rows: coments } = await Coment.findAndCountAll({
        where: { postId },
        limit: limit,
        offset: page * limit,
      });
      res.status(200).json({ coments, size });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  save: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { text } = req.body;
      const { postId } = req.params;

      //Conected user
      let userId = 1;

      const coment = await Coment.create({
        text,
        postId,
        userId,
      });
      const post = await Post.findByPk(postId, { attributes: ['userId'] });
      await Notification.create({ categoryId: 3, userId, receiverId: post.userId, elementId: postId  });
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      //Usuario conectado
      let userId = 1;

      const coment = await Coment.destroy({
        where: {
          id, userId
        },
      });
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
  edit: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      } 
      const { id } = req.params;
      const { text } = req.body;
      //Usuario conectado
      let userId = 1;

      const coment = await Coment.update(
        { text },
        {
          where: {
            id, userId
          },
        }
      );
      res.status(200).json({ coment });
    } catch (error) {
      res.status(401).json({ error });
    }
  },

  //-------------------------------------------------------
};
