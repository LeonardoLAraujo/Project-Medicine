import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Representa o componente do titulo contendo um traco em baixo.
 * @class
 * @component
 */
@customElement('ecv-medicine-underline-title')
export default class ECVMedicineUnderlineTitle extends LitElement{


    static override get styles(): CSSResult{

        return css`

            :host{
                display: block;
                box-sizing: border-box;
                user-select: none;
                -webkit-user-select: none;
            }

            .medicine-underline-title{
                font-family: PoppinsBoldItalic;
                text-decoration: underline;
            }
   
        `;

    }

    /**
     * O titulo sobre o traco.
     * @public
     * @property
     */
    @property({ type: String })
    underlineTitle: string = '';

    /**
     * O afastamento entre o texto e o traco.
     * @public
     * @property
     */
    @property({ type: String })
    underlineOffset: string = '20%';

    /**
     * O tamanho da fonte do texto.
     * @public
     * @property
     */
    @property({ type: String })
    titleSize: string = '20px';

    /**
     * A cor do texto do titulo.
     * @public
     * @property
     */
    @property({ type: String })
    color: string = '#003B57';

    protected override render(): TemplateResult{

        return html`
            <style>

                .medicine-underline-title{
                    font-size: ${this.titleSize};
                    text-underline-offset: ${this.underlineOffset};
                    color: ${this.color};
                }

            </style>
            <div class="medicine-underline-title">${this.underlineTitle}</div>
        `;
    }


}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-underline-title': ECVMedicineUnderlineTitle

   }
}