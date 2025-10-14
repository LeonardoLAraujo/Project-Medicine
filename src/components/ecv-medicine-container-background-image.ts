import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ecv-medicine-container-background-image')
export default class EcvMedicineContainerBackgroundImage extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .backgroundImage{
                width: 100%;
                height: 362px;
                position: relative;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }   

            .backgroundImage__overlay{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #000;
                opacity: 0.5;
                height: 100%;
            }
        `;
    }

    @property({type: String})
    imageUrl: string = "";

    protected override render(): TemplateResult{
        console.log(this.imageUrl);
        return html`
            <style>
                .backgroundImage{
                    background-image: url(${this.imageUrl});
                }
            </style>

            <div class="backgroundImage">   
                <div class="backgroundImage__overlay"></div>
                <slot></slot>
            </div>
        `;
    }
}

declare global{
    interface HTMLElementTagNameMap{
        'ecv-medicine-container-background-image': EcvMedicineContainerBackgroundImage
    }
}