import {html, css, TemplateResult, CSSResult, PropertyValues} from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import "../components/ecv-medicine-button-icon";
import "../components/ecv-medicine-modal-anatomy-details";
import EcvMedicineModalAnatomyDetails from '../components/ecv-medicine-modal-anatomy-details';

@customElement('medicine-anatomy-details')
export default class MedicineAnatomyDetails extends ECVMedicineSwitchThemeColor{

    static override get styles(): CSSResult{
        return css`
            .details{
                display: flex;
                margin: 1rem 1rem 0rem 1rem;
                padding: 1rem 1rem 1rem 1rem;
                gap: 5rem;
                position: relative;
                user-select: none;
            }

            .details__card{
                display: flex;
                flex-direction: column;
                align-items: center; 
                padding: 1rem 3rem 0rem 2rem;
                height: 770px;
                overflow-y: auto;
                overflow-x: hidden;
            }

            .details__card::-webkit-scrollbar{
                color: #fff;
                width: 13px;
            }

            *::-webkit-scrollbar-thumb{
                background-color: #fff;
                border-radius: 0px;
            }

            .card__information{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-family: PoppinsItalic;
                font-size: 32px;
                cursor: pointer;
                padding: 1rem;
                opacity: 0.5;
            }
            
            .card__information:hover{
                background-color: #00000067;
            }

            .card__information img{
                background-color: #fff;
                -webkit-user-drag: none;
            }

            p, h1{
                margin: 0;
                padding: 0;
            }

            .details__interation{
                position: relative;
                display: flex;
            }

            .details__interation h1{
                color: var(--orange);
                font-family: InterBlackItalic;
                font-size: 96px;
            }

            .interation__image{
                width: 350px;
                height: 54%;
                display: flex;
                justify-content: center;
                position: relative;
                margin-top: 11rem;
                margin-bottom: 2rem;
            }

            .image__collision,
            .image__graus{
                position: absolute;
                background-color: var(--orange);
                padding: 0.2rem 1rem 0.2rem 1rem;
                color: #fff;
                bottom: -1.5rem;
                font-family: PoppinsBold;
                cursor: default;
            }

            .image__interation{
                -webkit-user-drag: none;
            }

            .interation__image .image__collision{
                position: absolute;
                z-index: 2;
                top: 10rem;
                width: 84px;
                left: 5rem;
                height: 85px;
                cursor: pointer;
                background-color: red;
            }

            .image__rotate{
                display: flex;
                justify-content: center;
                align-items: baseline;
                width: 100%;
                position: relative;
            }

            .rotate__move{
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                background-color: transparent;
                cursor: grab;
            }

            ecv-medicine-modal-anatomy-details{
               display: none;
                margin: 6rem 0rem 0rem 13rem;
            }

            @media (min-width: 1200px){
                .details{
                    gap: 23px;
                }

                .interation__image{
                    margin-left: -13rem;
                }

                .details__interation{
                    width: 84%;
                }

                .details__card{
                    padding: 0rem;
                }

                ecv-medicine-modal-anatomy-details{
                    margin: 2rem 0rem 0rem 3rem;

                }
            }

            @media (min-width: 1346px){
                .interation__image{
                    margin-left: -3rem;
                }

                .details__interation{
                    gap: 21px;
                }

                ecv-medicine-modal-anatomy-details{
                    margin: 3rem 0rem 0rem 3rem;
                }
            }   

            @media (min-width: 1536px){
                .details__interation{
                    gap: 60px;
                }

                .details__card{
                    padding: 1rem 3rem 0rem 2rem;
                }

                ecv-medicine-modal-anatomy-details{
                    margin: 3rem 0rem 0rem 3rem;
                }
            }

            @media (min-width: 1652px){
                .details__interation{
                    gap: 70px;
                }

                .interation__image{
                    margin-left: 0rem;
                }

                ecv-medicine-modal-anatomy-details{
                    margin: 3rem 0rem 0rem 6rem;
                }
            }
        `;
    }

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    @state()
    private _rotateDragOver: number = 0;

    @state()
    private _stepRotateOver: number = 0;

    @state()
    private _isDragging = false;
    
    @state()
    private _startX = 0;

    @state()
    private _listSpriteCranio: Array<string> = [];

    @query("ecv-medicine-modal-anatomy-details")
    private _modalAnatomyDetails!: EcvMedicineModalAnatomyDetails;

    @query(".image__interation")
    private _imageInteration!: HTMLImageElement;

    @query(".rotate__move")
    private _containerImageInteration!: HTMLDivElement;

    @property({attribute: false})
    pagina: any;

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        this.pagina = EcvMedicine.medicinePreviewPageObject;

        this._listSpriteCranio = EcvMedicine.medicineDetailsCurrentInteractive.quadrosAnimacao;
    }

    private backPage(): void {
        EcvMedicine.instance.goTo("/anatomy/preview");
    }

    private generateCardAnatomy(): Array<TemplateResult>{
        return this.pagina?.itensMenuLateral.map((menu: any) => html`<div class="card__information">
                                                                        <img src=${menu.imagem}>
                                                                        <p>${menu.rotulo}</p>
                                                                    </div>`);
    } 

    private openModal(): void{
        this._modalAnatomyDetails.style.display = "flex";
    }


    private onMouseDown(e: MouseEvent): void{
        this._isDragging = true;
        this._startX = e.clientX;
    }

    private onMouseMove(e: MouseEvent): void{
        if (!this._isDragging){
            return;
        } 

        this._containerImageInteration.style.cursor = "grabbing";

        if(this._rotateDragOver >= 11){
           this._rotateDragOver = 1;
        }

        if(this._rotateDragOver <= 0){
           this._rotateDragOver = 10;
        }

        if( this._stepRotateOver > 10){
            const deltaX = e.clientX - this._startX;

            if (Math.abs(deltaX) > 10) {
                if (deltaX > 0) {
                    this._rotateDragOver++;
                } else {
                    this._rotateDragOver--;
                }

                this._imageInteration.src = `${this._listSpriteCranio[this._rotateDragOver] == undefined ? 1 : this._listSpriteCranio[this._rotateDragOver]}`;
                this._startX = e.clientX;
            }

            this._stepRotateOver = 0;
        }

        this._stepRotateOver++;  
    }

    private onMouseEnd(): void{
        this._isDragging = false;
        this._containerImageInteration.style.cursor = "grab";
    }

    protected override render(): TemplateResult{
        
        return html`
            <style>
                .details{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

                .details__card::-webkit-scrollbar{
                    background-color: ${this._currentThemeColor.getName() == "light" ? "var(--light-blue)" : "#000"};
                }
            </style>
            <div class="details">   
                <div class="details__card">
                    ${this.generateCardAnatomy()}
                </div>
                <div class="details__interation">
                    <h1>${EcvMedicine.medicineDetailsCurrentInteractive.titulo}</h1>
                    <div class="interation__image">
                        <div class="image__rotate"  > 
                            <div class="rotate__move" @click=${this.openModal} @mousedown=${this.onMouseDown} @mousemove=${this.onMouseMove} @mouseup=${this.onMouseEnd} @mouseout=${this.onMouseEnd}></div>
                            <img src=${this._listSpriteCranio[0]} class="image__interation">
                        </div>
                        <div class="image__graus">360°</div>
                    </div>
                    <ecv-medicine-modal-anatomy-details .details=${EcvMedicine.medicineDetailsCurrentInteractive.descricao}></ecv-medicine-modal-anatomy-details>
                </div>
                <ecv-medicine-button-icon thema=${this._currentThemeColor.getName()} .onPressed=${this.backPage}></ecv-medicine-button-icon>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'medicine-anatomy-details': MedicineAnatomyDetails
   }
}