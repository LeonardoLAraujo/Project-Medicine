import { IconTypes } from 'ecv-component';
import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ecv-medicine-card-button-platform')
export default class EcvMedicineCardButtonPlatform extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .card,
            .card__icon{
                display: flex;
                align-items: center;
            }

            .card{
                gap: 20px;
                padding: 1rem;
                background-color: #fff;
                border-top: 2px solid #c0c0c0;
                cursor: pointer;
                border-bottom: 2px solid transparent;
            }

            .card[actual="actual"]{
                color: #fff;
                border-bottom: 2px solid darkslategray;
            }

            .card__description{
                display: flex;
                gap: 3px;
            }

            .card p {
                font-family: PoppinsRegular;
                font-size: 20px;
                margin: 0;
            }

            .card .complement{
                font-family: PoppinsBold;
            }

            .card__icon{
                gap: 20px;
            }

            .icon__divisor{
                height: 20px;
                border: 1px solid var(--dark-blue);
            }

            .icon__divisor[actual="actual"]{
                border: 1px solid #fff;
            }

            @media (min-width: 1200px){
                .card{
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem;
                    background-color: transparent;
                    border: none;
                    height: 40px;
                    gap: 10px;
                }

                .card[actual="actual"]{
                    background-color: #fff;
                }

                ecv-icon{
                    margin-left: 0.1rem;
                }

                .icon__divisor{
                    display: none;
                }

                .card p{
                    line-height: 1.2;
                    font-size: 16px;
                }
            }
        `;
    }

    @property({type: Boolean})
    isCurrent: boolean = false;

    @property({type: String})
    icon!: IconTypes | string;

    @property({type: String})
    text: string = "";

    @property({type: String})
    complementTitle: string = "";

    @property({type: Boolean})
    isCurrentCard: boolean = false;

    @property({type: String})
    backgroundColor: string = "";

    private onMouseLeave(): void{
        if(!this.isCurrentCard){
            this.isCurrent = false;
        }
    }

    private onMouseOver(): void{
        if(!this.isCurrentCard){
            this.isCurrent = true;
        }
    }

    protected override render(): TemplateResult{
        return html`
            <style>
                .card[actual="actual"]{
                    background-color: ${this.backgroundColor};
                }
                
                p,
                ecv-icon{
                    color: ${!this.isCurrent ? this.backgroundColor :  "#fff"};
                }

                @media (min-width: 1200px){
                    .card{
                        width: ${(this.text.length + this.complementTitle.length) >= 23 ? "157px" : "148px" };
                    }
                    p,
                    ecv-icon{
                        color: ${this.isCurrent ? this.backgroundColor :  "#fff"};
                    }
                }
            </style>
            <div class="card" actual=${this.isCurrent ? "actual" : ""} @mouseleave=${this.onMouseLeave} @mouseover=${this.onMouseOver}>
                <div class="card__icon">
                    <ecv-icon .icon=${this.icon as IconTypes} ?filled=${true} actual=${this.isCurrent ? "actual" : ""}></ecv-icon>
                    <div class="icon__divisor" actual=${this.isCurrent ? "actual" : ""}></div>
                </div>
                <div class="card__description">
                    <p actual=${this.isCurrent ? "actual" : ""}>${this.text} ${this.complementTitle}</p>
                </div>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-card-button-platform': EcvMedicineCardButtonPlatform
   }
}