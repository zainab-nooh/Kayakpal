const Kayak = require('../../models/kayak');
const Business = require('../../models/business');

const dataController = {};

// Helper function to safely get business ID from either object or ID
const getBusinessId = (business) => {
    if (!business) return null;
    return business._id ? business._id.toString() : business.toString();
};

dataController.index = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};
    try {
        const businessId = getBusinessId(req.businessOwner.business);
        
        if (!businessId) {
            return res.status(400).json({ message: 'Business owner must have a business profile first.' });
        }
        
        const kayaks = await Kayak.find({ business: businessId });
        res.locals.data.kayaks = kayaks;
        res.locals.data.token = req.query.token || res.locals.data.token || '';
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

dataController.create = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};

    try {
        // DEBUG: Log incoming data
        console.log('=== KAYAK CREATE DEBUG ===');
        console.log('req.body:', req.body);
        console.log('req.businessOwner:', req.businessOwner);
        console.log('req.businessOwner.business:', req.businessOwner.business);

        const businessId = getBusinessId(req.businessOwner.business);
        console.log('businessId:', businessId);

        if (!businessId) {
            console.log('ERROR: No business ID found');
            return res.status(400).json({ message: 'Business owner must have a business profile first.' });
        }

        const business = await Business.findById(businessId);
        console.log('Found business:', business);

        if (!business) {
            console.log('ERROR: Business not found in database');
            return res.status(404).json({ message: 'Business profile not found.' });
        }

        // Verify business ownership
        if (business.owner.toString() !== req.businessOwner._id.toString()) {
            console.log('ERROR: Business ownership mismatch');
            return res.status(403).json({ message: 'Unauthorized to add kayaks to this business.' });
        }

        // Merge the business id into kayak data
        const kayakData = {
            ...req.body,
            business: business._id
        };
        console.log('kayakData to create:', kayakData);

        const kayak = await Kayak.create(kayakData);
        console.log('Created kayak:', kayak);

        // Add kayak to business kayaks array
        business.kayaks.addToSet(kayak._id);
        await business.save();
        console.log('Updated business with kayak');

        res.locals.data.kayak = kayak;
        res.locals.data.token = req.query.token || res.locals.data.token || '';
        console.log('=== KAYAK CREATE SUCCESS ===');
        next();
    } catch (error) {
        console.log('=== KAYAK CREATE ERROR ===');
        console.log('Error:', error);
        console.log('Error message:', error.message);
        res.status(400).json({ message: error.message });
    }
};

dataController.show = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};
    
    try {
        const kayak = await Kayak.findById(req.params.id).populate('business');
        if (!kayak) throw new Error(`Could not locate a Kayak Profile with the id ${req.params.id}`);

        const businessId = getBusinessId(req.businessOwner.business);
        
        // Verify ownership through business
        if (kayak.business._id.toString() !== businessId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        res.locals.data.kayak = kayak;
        res.locals.data.business = kayak.business;
        res.locals.data.token = req.query.token || res.locals.data.token || '';
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

dataController.update = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};
    
    try {
        const kayak = await Kayak.findById(req.params.id);
        if (!kayak) throw new Error('Kayak not found');

        const businessId = getBusinessId(req.businessOwner.business);
        
        // Verify ownership
        if (kayak.business.toString() !== businessId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        res.locals.data.kayak = await Kayak.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.locals.data.token = req.query.token || res.locals.data.token || '';
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

dataController.destroy = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};
    
    try {
        const kayak = await Kayak.findById(req.params.id);
        if (!kayak) throw new Error('Kayak not found');

        const businessId = getBusinessId(req.businessOwner.business);
        
        // Verify ownership
        if (kayak.business.toString() !== businessId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        // Remove kayak from business kayaks array
        await Business.findByIdAndUpdate(kayak.business, {
            $pull: { kayaks: kayak._id }
        });

        // Delete the kayak
        await Kayak.findByIdAndDelete(req.params.id);
        
        res.locals.data.token = req.query.token || res.locals.data.token || '';
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = dataController;