import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Classe que representa web component que contem o botao de cor laranja usado na aplicacao.
 * @class
 * @component
 */
@customElement('ecv-medicine-orange-button')
export default class ECVMedicineOrangeButton extends LitElement{


    static override get styles(): CSSResult{

        return css`

            :host{
                display: flex;
                box-sizing: border-box;
                flex: 1;
            }

            .medicine-orange-button{
                display: flex;
                background-color: #DE6E00;
                align-items: center;
                justify-content: center;
                color: white;
                flex: 1;
                user-select: none;
                -webkit-user-select: none;
                transition: filter 0.3s ease-out;
            }

            .medicine-orange-button:hover{
                filter: brightness(1.2);
            }
   
        `;

    }

    /**
     * O texto atual do botao.
     * @public
     * @property
     */
    @property({ type: String })
    textButton: string = '';

    /**
     * Propriedade que habilita o texto em negrito, valor padrao e de false.
     * @public
     * @property
     */
    @property({ type: Boolean })
    boldedText: boolean = false;

    /**
     * Propriedade que representa a altura do botao, valor padrao e de 36.
     * @public
     * @property
     */
    @property({ type: Number })
    buttonHeight: number = 36;

    /**
     * Propriedade que representa o tipo de cursor do botao, valor padrao initial.
     * @public
     * @property
     */
    @property({ type: String })
    cursor: string = 'initial';

    /**
     * Propriedade que representa o tamanho da fonte do botao, valor padrao e de 16.
     * @public
     * @property
     */
    @property({type: Number})
    size: number = 16;

    protected override render(): TemplateResult{

        return html`
            <style>

                .medicine-orange-button{
                    font-family: ${this.boldedText ? 'PoppinsBold' : 'PoppinsLight'};
                    height: ${this.buttonHeight}px;
                    cursor: ${this.cursor};
                    font-size: ${this.size}px;
                }

            </style>
            <div class="medicine-orange-button">${this.textButton}</div>
        `;

    }



}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-orange-button': ECVMedicineOrangeButton

   }
}