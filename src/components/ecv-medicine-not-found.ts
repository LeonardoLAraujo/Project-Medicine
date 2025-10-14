import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GIF from "../images/Loading_MED_AZUL_MAX.gif";

@customElement('ecv-medicine-not-found')
export default class EcvMedicineNotFound extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .loading{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: not-allowed;
            }

            .loading img{
                width: 150px;
                -webkit-animation: pulsate-fwd 1s ease-in-out infinite both;
	            animation: pulsate-fwd 1s ease-in-out infinite both;
            }

            .loading__text{
                font-family: PoppinsBold;
                font-size: 22px;
                color: var(--light-gray);
            }

            @-webkit-keyframes pulsate-fwd {
                0% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
                50% {
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
                100% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
            }
            @keyframes pulsate-fwd {
                0% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
                50% {
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
                100% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
            }
        `;
    }

    @property({type: String})
    text: string = "";

    protected override render(): TemplateResult{
        return html`
            <div class="loading">
                <img src=${GIF}>
                <p class="loading__text">${this.text}</p>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-not-found': EcvMedicineNotFound
   }
}