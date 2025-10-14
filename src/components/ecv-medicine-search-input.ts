import { IconTypes } from 'ecv-component';
import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import EcvMedicine from '../ecv-medicine';

/**
 * Representa o componente do campo de busca da aplicacao.
 * @class
 * @component
 */
@customElement('ecv-medicine-search-input')
export default class ECVMedicineSearchInput extends LitElement{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                display: block;
                box-sizing: border-box;
                flex: 1;
            }

            .medicine-search-input__container{
                display: flex;
                align-items: center;
                column-gap: 10px;
                padding: 0 20px;
                background-color: #C9C9C9;
            }

            .medicine-search-input__container .container__input{
                background-color: transparent;
                border: none;
                border-left: 1px solid #252525;
                height: 60%;
                width: calc(100% - 32px);
                padding: 0 16px;
                outline: none;
                font-size: 16px;
                font-family: PoppinsRegular;
            }

            ::-webkit-input-placeholder{
                font-style: italic;
                color: #252525;
                font-size: 16px;
                font-family: PoppinsLightItalic;
            }

            ecv-icon{
                user-select: none;
                -webkit-user-select: none;
                cursor: pointer;
            }
        
        `;

    }

    /**
     * A altura do container do input.
     * @public
     * @property
     */
    @property({ type: String })
    containerHeight: string = '55px';

    /**
     * A referencia do elemento input no shadow root do componente.
     * @public
     * @property
     */
    @query('.container__input')
    input!: HTMLInputElement;

    /**
     * Envia a pesquisa do input.
     * @private
     * @method
     * @param e - O evento atual
     */
    private _sendSearching(e: Event): void {
        e.preventDefault();
        const inputValue = this.input?.value;
        EcvMedicine.instance.searchOnUninove(inputValue);
        this.input.value = '';
    }


    protected override render(): TemplateResult{

        return html`
            <style>

                .medicine-search-input__container{
                    height: ${this.containerHeight};
                }

            </style>
            <form class="medicine-search-input" @submit=${(e: Event) => {
                this._sendSearching(e);
            }}>
                <div class="medicine-search-input__container">
                    <ecv-icon .icon=${IconTypes.Search} @click=${(e: Event) => { this._sendSearching(e); }}></ecv-icon>
                    <input class="container__input" type="text" placeholder="Pesquise na plataforma">        
                </div>
            </form>
        `;

    }

}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-search-input': ECVMedicineSearchInput

   }
}