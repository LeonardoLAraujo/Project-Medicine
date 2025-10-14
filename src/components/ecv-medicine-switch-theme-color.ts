import {LitElement, html, TemplateResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import { ThemeColor } from '../type/ThemeColor';
import EcvMedicine from '../ecv-medicine';

/**
 * Classe que representa web component que permite fazer modificaoes no conjunto de cores do tema atual da aplicacao.
 * @class
 * @component
 */
@customElement('ecv-medicine-switch-theme-color')
export default class ECVMedicineSwitchThemeColor extends LitElement{

    /**
     * Representa o conjunto de cores do tema tual.
     * @protected
     * @property
     */
    protected _currentThemeColor!: ThemeColor;

    constructor(themeColor: ThemeColor){
        super();
        this._currentThemeColor = themeColor;
    }

    /**
     * Retorna o conjunto de cores do tema atual.
     * @public
     * @method
     * @returns 
     */
    public getCurrentThemeColor(): ThemeColor {

        return this._currentThemeColor;
    }

    /**
     * Alterna o conjunto de cores do tema atual.
     * @public
     * @method
     */
    public switchCurrentTheme(): void {
        this._currentThemeColor = EcvMedicine.currentTheme;
        this.dispatchEvent(new CustomEvent('onchangetheme', { detail: this._currentThemeColor }));
        this.requestUpdate();
    }

    protected override render(): TemplateResult{

        return html``;

    }

}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-switch-theme-color': ECVMedicineSwitchThemeColor

   }
}