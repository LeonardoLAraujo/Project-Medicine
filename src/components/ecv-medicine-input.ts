import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import "ecv-component";
import { IconTypes } from 'ecv-component';

@customElement('ecv-medicine-input')
export default class EcvMedicineInput extends LitElement{

    static override get styles(): CSSResult{
        return css`
            :host{
                width: 100%;
                height: 100%;
                display: inline-block;
            }

            .input{
                display: flex;
                gap: 17px;
                padding: 7px 7px 7px 23px;
                background-color: #ffffffb3;
                align-items: center;
            }

            .input__divisor{
                width: 0px;
                height: 24px;
                border-left: 1px solid #000;
            }

            input{
                width: 100%;
                padding: 10px;
                font-size: 18px;
                border: none;
                background-color: transparent;
                outline: none;
                font-family: PoppinsRegular;
            }

            input::placeholder{
                font-family: PoppinsLightItalic;
                font-size: 16px;
                color: #000;
            }

            ecv-icon{
                cursor: pointer;
            }
        `;
    }

    @query(".input__search")
    private _input!: HTMLInputElement;

    @property({attribute: false})
    onPressed: Function = () => {};

    @property({type: String})
    placeholder: string = "";

    public getValueInput(): string{
        return this._input.value;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="input">
                <ecv-icon .icon=${IconTypes.Search} @click=${this.onPressed}></ecv-icon>
                <div class="input__divisor"></div>
                <input class="input__search" type="text" placeholder=${this.placeholder}>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'ecv-medicine-input': EcvMedicineInput
    }
}