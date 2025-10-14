import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ecv-medicine-text')
export default class ECVMedicineText extends LitElement{

    static override get styles(): CSSResult{
        return css`
            :host{
                display: block;
            }
        `;
    }

    @property()
    text: string = '';

    @property()
    color: string = 'var(--black)';

    @property()
    fontFamily: string = 'RobotoBlack';

    @property()
    fontSize: string = '16px';

    @property()
    textAlign: string = 'left';

    protected override render(): TemplateResult{
        return html`
            <style>
                .ecv-medicine-text{
                    color: ${this.color};
                    font-family: ${this.fontFamily};
                    font-size: ${this.fontSize};
                    text-align: ${this.textAlign};
                }
            </style>

            <div class="ecv-medicine-text">
                ${this.text}
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-text': ECVMedicineText
   }
}