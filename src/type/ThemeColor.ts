/**
 * Classe que representa Tema de conjunto de cores.
 * @class
 */
export class ThemeColor {

    /**
     * Propriedade que representa o nome atual do tema.
     * @private
     * @property
     */
    private _name: string = '';
    /**
     * Propriedade que representa a cor atual da fonte.
     * @private
     * @property
     */
    private _color: string = '';
    /**
     * Propriedade que representa a cor de fundo atual, valor padrao e de var(--dark-blue)
     * @private
     * @property
     */
    private _backgroundColor: string = 'var(--dark-blue)';

    constructor(name: string, color: string, backgroundColor: string){
        this._name = name;
        this._color = color;
        this._backgroundColor = backgroundColor;
    }

    /**
     * Retorna o nome atual do tema.
     * @public
     * @method
     * @returns 
     */
    public getName(): string {

        return this._name;
    }

    /**
     * Altera o nome atual do tema.
     * @public
     * @method
     * @param name - O nome do tema.
     */
    public setName(name: string){

        this._name = name;
    }

    /**
     * Retorna a cor atual da fonte do tema.
     * @public
     * @method
     * @returns 
     */
    public getColor(): string {

        return this._color;
    }

    /**
     * Altera a cor atual da fonte do tema.
     * @public
     * @method
     * @param color - A cor da fonte.
     */
    public setColor(color: string){

        this._color = color;
    }

    /**
     * Retorna o valor atual da cor de fundo do tema.
     * @public
     * @method
     * @returns 
     */
    public getBackgroundColor(): string {

        return this._backgroundColor;
    }

    /**
     * Altera a cor atual do fundo do tema.
     * @public
     * @method
     * @param color - A cor atual de fundo.
     */
    public setBackgroundColor(color: string){

        this._backgroundColor = color;
    }
}