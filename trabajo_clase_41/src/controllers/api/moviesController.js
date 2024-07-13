const { response } = require('express')
const db = require('../../database/models')
const Op = db.sequelize.opp

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                return res.status(200).json({
                    total:movies.length,
                    data: movies,
                    status: 200
                })
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status: 200
                })
            })
    },
    create: (req, res) => {
        db.Movie.create(req.params.id)
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status: 200,
                    create: 'ok'
                })
            })
    },
    destroy: (req,res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                return res.json({response})
            })
    }
}