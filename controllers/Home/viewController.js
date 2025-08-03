const RESOURCE_PATH  = 'Home'
const viewController = {
    index(req, res, next) {
        res.render(`${RESOURCE_PATH}/Index`)
    }
}


module.exports = viewController