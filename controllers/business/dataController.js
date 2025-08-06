const Business = require('../../models/business')

const dataController = {}

// Index a Business Profile
dataController.index = async(req, res, next) => {
    if (!res.locals.data) res.locals.data = {};
    
    try {
        // Only show businesses owned by the current business owner
        const businessProfiles = await Business.find({ owner: req.businessOwner._id });
        res.locals.data.businessProfiles = businessProfiles;
        res.locals.data.token = req.query.token ? req.query.token : res.locals.data.token;
        next();
    }
    catch(error) {
        res.status(400).send({ message: error.message });
    }
}

// Delete a Business Profile
dataController.destroy = async(req, res, next) => {
    try {
        const business = await Business.findById(req.params.id);
        
        // Check if business belongs to current owner
        if (!business || business.owner.toString() !== req.businessOwner._id.toString()) {
            return res.status(403).send({ message: 'Unauthorized to delete this business' });
        }
        
        await Business.findOneAndDelete({ _id: req.params.id });
        
        // Remove business reference from business owner
        req.businessOwner.business = undefined;
        await req.businessOwner.save();
        
        res.locals.data.token = req.query.token;
        next();
    }
    catch(error) {
        res.status(400).send({ message: error.message });
    }
}

// Update a Business Profile
dataController.update = async(req, res, next) => {
    try {
        const business = await Business.findById(req.params.id);
        
        // Check if business belongs to current owner
        if (!business || business.owner.toString() !== req.businessOwner._id.toString()) {
            return res.status(403).send({ message: 'Unauthorized to update this business' });
        }
        
        res.locals.data.business = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.locals.data.token = req.query.token;
        next();
    }
    catch(error) {
        res.status(400).send({ message: error.message });
    }
}

// Create a Business Profile
dataController.create = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};

    try {
        console.log('=== BUSINESS CREATE DEBUG ===');
        console.log('req.body:', req.body);
        console.log('req.businessOwner:', req.businessOwner);
        
        // Check if business owner already has a business (due to unique constraint)
        if (req.businessOwner.business) {
            return res.status(400).send({ message: 'Business owner already has a business profile' });
        }
        
        // Create business data with owner
        const businessData = {
            ...req.body,
            owner: req.businessOwner._id  // Add the required owner field
        };
        
        console.log('Creating business with data:', businessData);
        
        const newBusiness = await Business.create(businessData);
        console.log('Created business:', newBusiness);
        
        // Update business owner with the new business reference
        req.businessOwner.business = newBusiness._id;
        await req.businessOwner.save();
        console.log('Updated business owner with business reference');

        res.locals.data.business = newBusiness;
        res.locals.data.token = req.query.token || res.locals.data.token || '';

        console.log('=== BUSINESS CREATE SUCCESS ===');
        next();
    } catch (error) {
        console.log('=== BUSINESS CREATE ERROR ===');
        console.log('Error:', error);
        console.log('Error message:', error.message);
        res.status(400).send({ message: error.message });
    }
};

// Show a Business Profile
dataController.show = async (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};

    try {
        const business = await Business.findById(req.params.id).populate('kayaks');

        if (!business) {
            throw new Error(`Could not locate a Business Profile with the id ${req.params.id}`);
        }
        
        // Check if business belongs to current owner (optional security check)
        if (business.owner.toString() !== req.businessOwner._id.toString()) {
            return res.status(403).send({ message: 'Unauthorized to view this business' });
        }

        res.locals.data.business = business;
        res.locals.data.token = req.query.token || res.locals.data.token || '';
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = dataController