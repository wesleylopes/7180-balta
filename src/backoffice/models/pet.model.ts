export class Pet{
    constructor(
        public name: string,
        public document: string,
        public email:string,
        public pets: Pet[],
        public password,
        public active:boolean,
    ){   
    }
}