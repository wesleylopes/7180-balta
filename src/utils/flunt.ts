export class Flunt{
    constructor (public errors: any[] = []){}

    isRequired(value, message){
        if(!value||value.length<=0){
            this.errors.push(message);
        }
    }

    hasMinLen(value, min, message){
        if(!value||value.length<=min){
            this.errors.push(message);
        }
    }

    hasMMaxLen(value, max, message){
        if(!value||value.length<=max){
            this.errors.push(message);
        }
    }

    isfixedLen(value, len, message){
        if(value.length!== len){
            this.errors.push(message);
        }
    }

    isDateGreterThan(data1, data2, message){
        //
    }

    clear(){
        this.errors = [];
    }

    isValid(){
        return this.errors.length === 0;
    }
}