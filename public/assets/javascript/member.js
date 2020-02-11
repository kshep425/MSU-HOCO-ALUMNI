class Member {

    constructor(member_obj) {
        this.username = member_obj.username;
        this.prefix = member_obj.prefix;
        this.full_name = member_obj.full_name;
        this.suffix = member_obj.suffix;
        this.street_address = member_obj.street_address;
        this.city = member_obj.city;
        this.state = member_obj.state;
        this.zip = member_obj.zip;
        this.occupation = member_obj.occupation;
        this.majors = member_obj.majors;
        this.member_type = member_obj.member_type;
        this.member_marital_status = member_obj.member_marital_status;
        this.payments = member_obj.payments;
    }

    get username() { return this.username }
    get prefix() { return this.prefix }
    get full_name() { return this.full_name }
    get suffix() { return this.suffix }
    get street_address() { return this.street_address }
    get city() { return this.city }
    get state() { return this.state }
    get zip() { return this.zip }
    get occupation() { return this.occupation }
    get majors() { return this.majors }
    get member_type() { return this.member_type }
    get member_marital_status() { return this.member_marital_status }
    get payments() { return this.payments }
};

module.exports = Member;