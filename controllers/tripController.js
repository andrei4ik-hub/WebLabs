const { Trip } = require('../models');

const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTrip = async (req, res) => {
    try {
        const [updated] = await Trip.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedTrip = await Trip.findByPk(req.params.id);
            res.status(200).json(updatedTrip);
        } else {
            res.status(404).send('Trip not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTrip = async (req, res) => {
    try {
        const deleted = await Trip.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Trip not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.findAll();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTrip,
    getTripById,
    updateTrip,
    deleteTrip,
    getAllTrips
};
