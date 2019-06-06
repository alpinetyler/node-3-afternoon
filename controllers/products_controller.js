


module.exports = {

    create: (req, res, next) => {
        console.log(req.body)
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body
        dbInstance.create_product([name, description, price, image_url])
            .then(() => res.status(200).send(products))
            .catch(err => console.log(err))

    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.params)
        const {id: product_id} = req.params

        dbInstance.read_product(product_id)
            .then(() => res.status(200).send(product))
            .catch(err => console.log(err))
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(() => res.status(200).send(product))
            .catch(err => console.log(err))
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_product([params.id, query.desc ])
            .then(() => res.status(200).send(product))
            .catch(err => console.log(err))
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params

        dbInstance.delete_product()
            .then(() => res.status(200))
            .catch(err => console.log(err))
    }

}

