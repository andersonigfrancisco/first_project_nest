import { UseCaseError } from "@/cors/errors/use-case-error";

export class NotAllowedErrpr extends Error implements UseCaseError {

    constructor(){
        super('Not allowed')
    }
}