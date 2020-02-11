const db = require("../models")

const db_queries = {

    create_member: function(req_body){
        let fields = {options: {fields: []}};
        console.log("Create Member Called")
        let request = {
            username: req_body.username,
            password: req_body.password,
            full_name: req_body.full_name,
            email: req_body.email,
            prefix: req_body.prefix,
            suffix: req_body.suffix,
            phone: req_body.phone,
            street_address: req_body.street_address,
            city: req_body.city,
            state: req_body.state,
            zip: req_body.zip,
            occupation: req_body.occupation,
            member_type: req_body.member_type,
            member_marital_status: req_body.member_marital_status
        };
        Object.keys(request).forEach(key => {
            if (!request[key]) {
                delete request[key];
                fields.fields.push(key)
            }
          });

        db.Member.create(request, fields)
    }
}

module.exports = db_queries;