export class Khachhang {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
