import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Classe que representa um web component que contem um botao link para menu do topo.
 * @class
 * @component
 */
@customElement('top-bar-link-button')
export default class TopBarLinkButton extends LitElement{

    static override get styles(): CSSResult{

        return css`

            :host{
                display: inline-block;
            }

            .top-bar-link-button{
                font-family: PoppinsLight;
                display: flex;
                align-items:center;
                font-size: 12px;
                color: white;
                cursor: pointer;
                border-bottom: 1px solid transparent;
                transition: border-bottom 0.1s ease-out;
            }

            .top-bar-link-button:not([active]):hover,
            .top-bar-link-button[active]{
                font-family: PoppinsBold;
                border-bottom: 1px solid white;
            }

            @media screen and (min-width: 1573px){

                .top-bar-link-button{
                    font-size: 14px;
                }

            }
        
        `;

    }

    /**
     * O texto do link do botao.
     * @public
     * @property
     */
    @property()
    public textLink: string = '';

    /**
     * O endereco/url do link do botao.
     * @public
     * @property
     */
    @property()
    public pathLink: string = '';

    /**
     * A referencia HTML do botao no shadow root do componente.
     * @private
     * @property
     */
    @query('.top-bar-link-button')
    private _button!: HTMLDivElement;

    /**
     * Retorna verdadeiro ou falso se o botao foi clicado e mantem o estado do clique.
     * @public
     * @method
     * @returns 
     */
    public getActive(): boolean {

        return this._button.hasAttribute('active');
    }

    /**
     * Altera o estado de clicado do botao.
     * @public
     * @method
     * @param activeState - O estado do botao.
     * @returns 
     */
    public setActive(activeState: boolean): void {

        if(activeState){

            if(this._button?.hasAttribute('active')){
                return;
            }

            this._button?.setAttribute('active','');
        }else{

            if(this._button?.hasAttribute('active')){

                this._button?.removeAttribute('active');
            }
        }
        
    }

    /**
     * Alterna entre clicado e nao clicado o estado do botao.
     * @private
     * @method
     */
    private _toggleActive(): void {

        this._button.toggleAttribute('active');
    }

    protected override render(): TemplateResult{

        return html`
            <div @click=${this._toggleActive} class="top-bar-link-button">
                ${this.textLink}
            </div>
        `;

    }


}

declare global{

   interface HTMLElementTagNameMap{

    'top-bar-link-button': TopBarLinkButton

   }
}