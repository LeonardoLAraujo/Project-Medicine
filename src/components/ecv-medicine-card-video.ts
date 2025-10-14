import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Video } from '../type/video';
import { IconTypes } from 'ecv-component';

@customElement('ecv-medicine-card-video')
export default class EcvMedicineCardVideo extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .card{
                width: 100%;
                display: flex;
                flex-direction: column;
                cursor: pointer;
            }

            .card:hover{
                background-color: #0000003b;
            }

            .card__video{
                position: relative;
            }

            .video__shadow{
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #000000;
                opacity: 0.7;
            }

            .video__background{
                width: 100%;
                height: 200px;
                background-repeat: no-repeat;
                background-position: center;
            }

            .video__icon{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
            }

            .video__icon div{
                background-color: #00000044;
                padding: 12px;
                border-radius: 50%;
            }

            .card__introduction{
                padding: 16px;
            }

            @media (min-width: 764px){
                .card{
                    width: 400px;
                }
            }
        `;
    }

    @property({attribute: false})
    video!: Video;

    protected override render(): TemplateResult{
        return html`
            <style>
                .video__background{
                    background-image: url(${this.video.image});
                }
            </style>
            <div class="card">
                <div class="card__video">
                    <div class="video__shadow"></div>
                    <div class="video__background"></div>
                    <div class="video__icon">
                        <div>
                            <ecv-icon .icon=${IconTypes.PlayArrow} ?filled=${true} .iconStyle=${{color: "#fff", size: "61px"}} ></ecv-icon>
                        </div>
                    </div>
                </div>
                <div class="card__introduction">
                    <ecv-medicine-text text=${this.video.title} fontFamily="PoppinsBold"></ecv-medicine-text>
                    <ecv-medicine-text text=${this.video.description.length >= 100 ? `${this.video.description.substring(0, 100)}...` : this.video.description} fontFamily="PoppinsRegular"></ecv-medicine-text>
                </div>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'ecv-medicine-card-video': EcvMedicineCardVideo
    }
}