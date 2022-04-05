import { Flunt } from "src/utils/flunt";
import { Customer } from "../models/customer.model";
import { Contract } from "./contract";

export class CreateCustomerContract implements Contract{
    errors: any[];
    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome inválido');
        flunt.isFixedLen(model.document, 11, 'Cpf inválido');

        this.errors = flunt.errors;
        return flunt.isValid(); 
    }    
}