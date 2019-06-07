


module.exports = {

    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body


        dbInstance.create_product([name, description, price, image_url])
            .then((product) => res.status(200).send(product))
            .catch(err => console.log(err))

    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.params)
        const {id} = req.params

        dbInstance.read_product(id)
            .then((product) => res.status(200).send(product))
            .catch(err => console.log(err))
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then((products) => res.status(200).send(products))
            .catch(err => console.log(err))
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;
        console.log(req)
        dbInstance.update_product([params.id, query.desc])
            .then((response) => res.status(200).send(response))
            .catch(err => console.log(err))
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params

        dbInstance.delete_product(id)
            .then((products) => res.status(200).send(products))
            .catch(err => console.log(err))
    }

}

