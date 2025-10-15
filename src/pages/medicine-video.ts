import {html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import "../components/ecv-medicine-text";
import "../components/ecv-medicine-input";
import "../components/ecv-medicine-tag-video-search";
import "../components/ecv-medicine-card-video";
import "../components/ecv-medicine-modal-video";
import BACKGROUND_IMGAE_VIDEO from "../images/medicine-background.jpg";
import { Video } from '../type/video';
import EcvMedicineModalVideo from '../components/ecv-medicine-modal-video';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import { ObjectVideo, videos } from '../data/video';
import EcvMedicineTagVideoSearch from '../components/ecv-medicine-tag-video-search';
import EcvMedicineInput from '../components/ecv-medicine-input';
import EcvMedicine from '../ecv-medicine';
import "../components/ecv-medicine-not-found";

@customElement('medicine-video')
export default class MedicineVideo extends ECVMedicineSwitchThemeColor{

    static override get styles(): CSSResult{
        return css`
            .video{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .video__background,
            .background__introduction,
            .background__search{
                display: flex;
                flex-direction: column;
            }

            .video__background{
                display: flex;
                justify-content: center;
                width: calc(100% - 32px);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                min-height: 359px;
                padding: 1rem;
                position: relative;
                gap: 20px;
            }

            .background__shadow{
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: #00000065;
                left: 0;
                top: 0;
            }

            .background__introduction,
            .background__search{
                gap: 10px;
                position: relative;
                z-index: 1;
            }

            .introduction__title{
                font-size: 36px;
                font-family: PoppinsBoldItalic;
            }

            .introduction__description{
                font-size: 16px;
                font-family: PoppinsRegular;
                max-width: 920px;
            }

            .introduction__title,
            .introduction__description{
                color: #fff;
                margin: 0;
            }

            .search__tags{
                display: flex;
                overflow-x: auto;
                width: 100%;
                gap: 5px;
            }

            .search__tags::-webkit-scrollbar{
                width: 0px;
                height: 0px;
            }

            .video__cards{
                display: flex;
                flex-direction: column;
                align-items: baseline;
                margin-top: 25px;
                gap: 5px;
                padding-bottom: 16px;
            }

            ecv-medicine-modal-video{
                display: none;
            }

            @media screen and (min-width: 1024px){
                .video{
                    margin-top: 1rem;
                }

                .video__cards{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                }

                .video__background{
                    width: calc(93% - 64px);
                    padding: 4rem;
                    height: 379px;
                    object-fit: cover;
                    gap: 50px;
                    
                }

                .search__tags{
                    overflow: inherit;
                }

                .introduction__title{
                    font-size: 48px;
                }

                .introduction__description{
                    font-size: 20px;
                }

                .background__introduction, 
                .background__search{
                    gap: 13px;
                }
            }
        `;
    }   

    private _body!: HTMLBodyElement | null;

    private _videos: ObjectVideo = videos;

    @state()
    private _listAllVideos: Array<Video> = [];

    @state()
    private _isShowVideoSearch: boolean = false;

    @query("ecv-medicine-modal-video")
    private _containerModalVideo!: EcvMedicineModalVideo;

    @query(".introduction__title")
    private _titleVideo!: HTMLParagraphElement;

    @query("ecv-medicine-input")
    private _medicineInput!: EcvMedicineInput;

    @queryAll("ecv-medicine-tag-video-search")
    private _listMedicineTagVideoSearch!: Array<EcvMedicineTagVideoSearch>;

    @property({type: String})
    backgroundColor: string = "";

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    protected override firstUpdated(): void {
        this._body = document.querySelector("body");
        this.backgroundColor = 'transparent';
        
        this._listMedicineTagVideoSearch.forEach((tag: EcvMedicineTagVideoSearch) => {
            tag.backgroundColor = this._currentThemeColor.getBackgroundColor();
        });

        this._listMedicineTagVideoSearch[0].click();
        
        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex();
                        
        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);
    }

    private resetAllTagsSearchVideos(): void{
        this._listMedicineTagVideoSearch.forEach((tag: EcvMedicineTagVideoSearch) => {
            tag.backgroundColor = this._currentThemeColor.getBackgroundColor();
        });
    }

    private alterBackgroundColorTagsSearchVideoCurrent(element: MouseEvent): void{
        const tag: EcvMedicineTagVideoSearch = element.target as EcvMedicineTagVideoSearch;
        
        tag.backgroundColor = this._currentThemeColor.getName() == "light" ? "var(--light-blue)" : "var(--light-gray)";    
    }

    private getAllVideosAndLives(): void{
        this._videos.lives.map((live: any) => {
            this._listAllVideos.push(live);
        });

        this._videos.videos.map((video: any) => {
            this._listAllVideos.push(video);
        });
    }

    private getAllVideos(e: MouseEvent): void{
        this.resetAllTagsSearchVideos();
        this.alterBackgroundColorTagsSearchVideoCurrent(e);
        
        this._listAllVideos = [];
        this._titleVideo.textContent = "Vídeos";

        this._videos.videos.map((video: any) => {
            this._listAllVideos.push(video);
        });
    }   

    private getAllLives(e: MouseEvent): void{
        this.resetAllTagsSearchVideos();
        this.alterBackgroundColorTagsSearchVideoCurrent(e);

        this._listAllVideos = [];
        this._titleVideo.textContent = "Lives";

        this._videos.lives.map((live: any) => {
            this._listAllVideos.push(live);
        });
    }

    private convertFormatData(data: string): number {
        return Date.parse(data.split('/').reverse().join('/'));
    }

    private getAllRecent(e: MouseEvent): void{
        this.resetAllTagsSearchVideos();
        this.alterBackgroundColorTagsSearchVideoCurrent(e);

        this._listAllVideos = [];
        this.getAllVideosAndLives();

        let auxList = this._listAllVideos;
        this._titleVideo.textContent = "Mais Recentes";

        this._listAllVideos = [];

        this._listAllVideos = auxList.toSorted((a: any, b: any) => {
            return this.convertFormatData(a.data) - this.convertFormatData(b.data);
        });
    }

    private getAllOld(e: MouseEvent): void{
        this.resetAllTagsSearchVideos();
        this.alterBackgroundColorTagsSearchVideoCurrent(e);

        this._listAllVideos = [];
        this.getAllVideosAndLives();

        let auxList = this._listAllVideos;
        this._titleVideo.textContent = "Mais Antigos";

        this._listAllVideos = [];

        this._listAllVideos = auxList.toSorted((a: any, b: any) => {
            return this.convertFormatData(b.data) - this.convertFormatData(a.data);
        });
    }

    private generateTagsSearchVideos(tag: string, onPressed: Function): TemplateResult{
        return html`<ecv-medicine-tag-video-search thema=${this._currentThemeColor.getName()} text=${tag} @click=${onPressed} backgroundColor=${this._currentThemeColor.getBackgroundColor()}></ecv-medicine-tag-video-search>`;
    }

    private generateCardVideos(): Array<TemplateResult> | TemplateResult{
        return this._listAllVideos.length == 0 ? 
            html`<ecv-medicine-not-found text=${this._isShowVideoSearch ? "Vídeo Não Encontrado" : "Sem Vídeos no Momento"}></ecv-medicine-not-found>` 
            : this._listAllVideos.map((video: Video) => html`<ecv-medicine-card-video .video=${video} @click=${() => {this.openModalVideo(video)}}></ecv-medicine-card-video>`);
    }

    private openModalVideo(video: Video): void{
        this._body!.style!.overflowY = "hidden";
        this._containerModalVideo.video = video;

        this._containerModalVideo.style.display = "flex";
        this._containerModalVideo.requestUpdate();

        this.requestUpdate();
    }

    private searchInput(): void{
        let auxListVideos = [];

        this.resetAllTagsSearchVideos();
        this.getAllVideosAndLives();

        this._titleVideo.textContent = "Todos os Vídeos";

        if(this._medicineInput.getValueInput().trim() == ""){
            this._listMedicineTagVideoSearch[0].click();
            this._isShowVideoSearch = false;
            
            return;
        }

        auxListVideos = this._listAllVideos.filter((video) => video.title.toLowerCase().includes(this._medicineInput.getValueInput().toLowerCase().trim()) || 
                                                              video.description.toLowerCase().includes(this._medicineInput.getValueInput().toLowerCase().trim()));
        
        if(auxListVideos.length == 0){
            this._isShowVideoSearch = true;
        }

        this._listAllVideos = [];
        this._listAllVideos = auxListVideos;
    }

    protected override render(): TemplateResult{
        return html`
            <style>
                .video__background{
                    background-image: url(${BACKGROUND_IMGAE_VIDEO});
                }
            </style>

            <div class="video">
                <div class="video__background">
                    <div class="background__shadow"></div>
                    <div class="background__introduction">
                        <p class="introduction__title">Vídeos</p>
                        <p class="introduction__description">Confirma a ampla variedade de vídeos disponíveis na nossa plataforma, que abordam uma diversidade de temas e assuntos relevantes à área de medicina.</p>
                    </div>
                    <div class="background__search">
                        <ecv-medicine-input .onPressed=${() => {this.searchInput()}} placeholder="Pesquise por Vídeos"></ecv-medicine-input>
                        <div class="search__tags">
                            ${this.generateTagsSearchVideos("Vídeos", this.getAllVideos)}
                            ${this.generateTagsSearchVideos("Lives", this.getAllLives)}
                            ${this.generateTagsSearchVideos("Mais Recentes", this.getAllRecent)}
                            ${this.generateTagsSearchVideos("Mais Antigos", this.getAllOld)} 
                        </div>
                    </div>
                </div>

                <div class="video__cards">
                    ${this.generateCardVideos()}
                </div>
            </div>

            <ecv-medicine-modal-video></ecv-medicine-modal-video>
        `;
    }
}

declare global{
    interface HTMLElementTagNameMap{
        'medicine-video': MedicineVideo
    }
}