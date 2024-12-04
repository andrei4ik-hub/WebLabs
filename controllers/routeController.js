const { Route } = require('../models');

const createRoute = async (req, res) => {
    try {
        const route = await Route.create(req.body);
        res.status(201).json(route);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRouteById = async (req, res) => {
    try {
        const route = await Route.findByPk(req.params.id);
        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRoute = async (req, res) => {
    try {
        const [updated] = await Route.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedRoute = await Route.findByPk(req.params.id);
            res.status(200).json(updatedRoute);
        } else {
            res.status(404).send('Route not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteRoute = async (req, res) => {
    try {
        const deleted = await Route.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Route not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllRoutes = async (req, res) => {
    try {
        const routes = await Route.findAll();
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createRoute,
    getRouteById,
    updateRoute,
    deleteRoute,
    getAllRoutes
};
