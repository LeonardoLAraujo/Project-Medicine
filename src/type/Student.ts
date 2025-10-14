export class Student {

    private _name: string;
    private _foto: string;
    private _studentRegisterNumber: string;

    constructor(name: string, foto: string, registerNumber: string){

        this._name = name;
        this._foto = foto;
        this._studentRegisterNumber = registerNumber;
    }

    public getName(): string {

        return this._name;
    }

    public setName(name: string){

        this._name = name;
    }

    public getFirstName(): string {

        return this._name.split(' ')[0];
    }

    public getFoto(): string {

        return this._foto;
    }

    public setFoto(foto: string){

        this._foto = foto;
    }

    public getRegisterNumber(): string {

        return this._studentRegisterNumber;
    }

    public setRegisterNumber(number: string){

        this._studentRegisterNumber = number;
    }
}