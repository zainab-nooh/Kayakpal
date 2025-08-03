const RESOURCE_PATH = 'users'
const viewController = {
    index(req, res, next) {
        res.render(`${RESOURCE_PATH}/Index`)
    }
}


module.exports = viewController