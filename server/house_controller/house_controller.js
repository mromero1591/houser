module.exports = {
    get: function(req,res,next) {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses()
        .then( houses => {
            res.status(200).send(houses);
        }).catch(err => {
            console.log('erro in get:', err);
            res.status(500).send({errorMessage: 'error in getting houses from db'});
        });
    },

    add: function(req,res,next) {
        const dbInstance = req.app.get('db');

        const {house_name, street_line_one, city, state, zip_code, mortgage, rent, img } = req.body;

        dbInstance.create_house([house_name, street_line_one, city, state, zip_code, mortgage, rent, img])
        .then( () => {
            res.sendStatus(200);
        }).catch( err => {
            console.log('error in the create: ', err);
            res.status(500).send({errorMessage: "Could not create a house."});
        });
    },

    delete: function(req,res,next) {
        const dbInstance = req.app.get('db');
        const {id} = req.params;  
        dbInstance.delete_house(id)
        .then( (houses) => {
            res.sendStatus(200);
        }).catch( err => {
            //console.log('error faced in deleteing: ', err);
            res.status(500).send({errorMessage: "Could not remove house"});
        });
    }

    
}