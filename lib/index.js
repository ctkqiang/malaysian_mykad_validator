export default class MyKadValidator {
    constructor(MYKAD_NUMBER) {
        if ((MYKAD_NUMBER) == (undefined)) return ('Indentity Card Number Are Required');

        this.date = new Date();
        this.MYKAD_NUMBER = MYKAD_NUMBER;
    }

    get_birth_month(input) {
        switch (input) {
            case '01':
                return ('JAN');
            case '02':
                return ('FEB');
            case '03':
                return ('MAR');
            case '04':
                return ('APR');
            case '05':
                return ('MAY');
            case '06':
                return ('JUN');
            case '07':
                return ('JULY');
            case '08':
                return ('AUG');
            case '09':
                return ('SEP');
            case '10':
                return ('OCT');
            case '11':
                return ('NOV');
            case '12':
                return ('DEC');
            default:
                return ('UNKNOWN');
        }
    }

    get_birth_place(input) {
        switch (input) {
            case '01':
            case '21':
            case '22':
            case '23':
            case '24':
                return ('JOHOR');
            case '02':
            case '25':
            case '26':
            case '27':
                return ('KEDAH');
            case '03':
            case '28':
            case '29':
                return ('KELANTAN');
            case '04':
            case '30':
                return ('MALACCA');
            case '05':
            case '31':
            case '59':
                return ('NEGERI SEMBILAN');
            case '06':
            case '32':
            case '33':
                return ('PAHANG');
            case '07':
            case '34':
            case '35':
                return ('PENANG');
            case '08':
            case '36':
            case '37':
            case '38':
            case '39':
                return ('PERAK');
            case '09':
            case '40':
                return ('PERLIS');
            case '10':
            case '41':
            case '42':
            case '43':
            case '44':
                return ('SELANGOR');
            case '11':
            case '45':
            case '46':
                return ('TERENGGANU');
            case '12':
            case '47':
            case '48':
            case '49':
                return ('SABAH');
            case '13':
            case '50':
            case '51':
            case '52':
            case '53':
                return ('SARAWAK');
            case '14':
            case '54':
            case '55':
            case '56':
            case '57':
                return ('Federal Territory of Kuala Lumpur');
            case '15':
            case '58':
                return ('Federal Territory of Labuan');
            case '16':
                return ('Federal Territory of Putrajaya');
            default:
                return ('MAYBE BORN OUTSIDE MALAYSIA');
        }
    }

    validate() {
        let response;
        let filtered_ic_number = (this.MYKAD_NUMBER.replace(/[^\w\s]/g, '').replace(/[a-z]/gi, ''));
        let birth_year = (filtered_ic_number.substring(0, 2));
        let birth_month = (filtered_ic_number.substring(2, 4));
        let birth_date = (filtered_ic_number.substring(4, 6));
        let birth_code = (filtered_ic_number.substring(6, 8));
        let user_birthdate = (`${birth_date} ${this.get_birth_month(birth_month)} 19${birth_year}`);

        if ((filtered_ic_number.length) == (12)) {
            response = {
                identity_card_number: (filtered_ic_number),
                birth_date: (user_birthdate),
                birth_place: (this.get_birth_place(birth_code)),
                age: (this.get_age(`19${birth_year}`)),
            };

            return (response);

        } else {
            response = {
                message: ('MALAYSIAN NEW IDENTITY CARD CONTAIN 12 CHARACTERS'),
                refernce: ('https://en.wikipedia.org/wiki/Malaysian_identity_card'),
            };

            return (response);
        }
    }

    get_age(born_year) {
        return ((this.date.getFullYear()) - (born_year));
    }
}