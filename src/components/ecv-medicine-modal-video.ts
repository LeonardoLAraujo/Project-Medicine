import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import "lit-player-youtube";
import "ecv-component";
import { Video } from '../type/video';
import { IconTypes } from 'ecv-component';
import { LitPlayerYoutube } from 'lit-player-youtube';

@customElement('ecv-medicine-modal-video')
export default class EcvMedicineModalVideo extends LitElement{
    
    static override get styles(): CSSResult{
        return css`
            .fade{
                width: 100%;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 3;
                overflow: hidden;
                gap: 10px;
            }

            .fade__shadow{
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #000;
                opacity: 0.9;
            }

            .fade__video{
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 80%;
                height: 72%;
            }

            .video__close{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--dark-blue);
                width: 35px;
                height: 36px;
                border-radius: 50%;
                cursor: pointer;
                align-self: flex-end;
                position: relative;
                z-index: 1;
                right: 10px;
            }

            .video__close:hover{
                background-color: var(--light-blue);
            }

            .video__player{
                width: 100%;
                height: 100%;
            }
        `;
    }   

    body!: HTMLBodyElement | null;

    @query("lit-player-youtube")
    public playerYoutube!: LitPlayerYoutube;

    @property({attribute: false})
    video!: Video;

    protected override firstUpdated(): void {
        this.body = document.querySelector("body");

    }

    private setVideo(){
        try{
            this.playerYoutube.setUrlVideo(this.video.source);
            //this.playerYoutube.hiddenContainerPlayerVideoAndShowPauseVideo();
            //this.playerYoutube.isPlaying = true;
        }catch(error){
            console.log(`Error: ${error}`);
        }
    }

    private close(): void{
        this.body!.style.overflowY = "auto";
        this.style.display = "none";
        //this.playerYoutube.pauseVideo();
    }

    protected override render(): TemplateResult{
        this.setVideo();
      
        return html`
            <div class="fade">
                <div class="fade__shadow"></div>
                <div class="fade__video">
                    <div class="video__close" @click=${this.close}>
                        <ecv-icon .icon=${IconTypes.Close} .iconStyle=${{size: "30px", color: "#fff"}} ></ecv-icon>
                    </div>
                    <div class="video__player">
                        <lit-player-youtube video=${this.video?.source}></lit-player-youtube>
                    </div>
                </div>
            </div>
        `;
    }
}

declare global{
    interface HTMLElementTagNameMap{
        'ecv-medicine-modal-video': EcvMedicineModalVideo
    }
}