import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Classe que representa web component do titulo formatado da area para ser usado em uma pagica generica.
 * @class
 * @component
 */
@customElement('ecv-medicine-area-title')
export default class ECVMedicineAreaTitle extends LitElement{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                display: block;
                box-sizing: border-box;
                user-select: none;
                -webkit-user-select: none;
            }

            .medicine-area-title{
                display: flex;
            }

            .medicine-area-title__text{
                font-family: PoppinsLightItalic;
            }

            .medicine-area-title__strongText{
                font-family: PoppinsBoldItalic;
            }

            @media (min-width: 1720px){
                .medicine-area-title__strongText{
                    align-self: flex-start;
                }
            }

        `;

    }

    /**
     * O texto superior.
     * @public
     * @property
     */
    @property({ type: String })
    text?: string;

    /**
     * O texto em negrito.
     * @public
     * @property
     */
    @property({ type: String })
    strongText?: string;

    /**
     * O tamanho de ambos os textos.
     * @public
     * @property
     */
    @property({ type: String })
    textSize: string = '24px';

    /**
     * A direcao atual dos textos referenciado como vertical ou horizontal.
     * @public
     * @property
     */
    @property({ type: String })
    direction: 'horizontal' | 'vertical' = 'horizontal';

    /**
     * A cor atual dos textos, o valor padrao e white.
     * @public
     * @property
     */
    @property({ type: String })
    color: string = 'white';

    protected override render(): TemplateResult{

        return html`
            <style>

                .medicine-area-title{
                    flex-direction: ${this.direction === 'horizontal' ? 'row' : 'column'};
                    column-gap: ${this.direction === 'horizontal' ? '10px' : 'initial'};
                    color: ${this.color};
                    font-size: ${this.textSize};
                    line-height: ${this.direction === 'vertical' ? '1.2' : 'initial'};
                    align-items: ${this.direction === 'vertical' ? 'center' : 'initial'};
                }

            </style>
            <div class="medicine-area-title">
                ${this.text !== undefined ? html`<div class="medicine-area-title__text">${this.text}</div>` : html``}
                ${this.strongText !== undefined ? html`<div class="medicine-area-title__strongText">${this.strongText}</div>` : html``}
            </div>
        `;

    }



}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-area-title': ECVMedicineAreaTitle

   }
}