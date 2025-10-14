import { html, css, TemplateResult, CSSResult, unsafeCSS, PropertyValues } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../components/ecv-medicine-filter';
import laminaeExamineImageWidth483 from '../images/examinando_laminas_cortada.png';
import laminaeExamineImageWidth631 from '../images/examinando_laminae_cortada2.png';
import laminaeExamineImageWidth775 from '../images/examinando_laminae_cortada3.png';
import laminaeExamineImageWidth1024 from '../images/examinando_laminas.png';
import laminaeExamineImageWidth1328 from '../images/examinando_laminae_cortada4.png';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import { IconTypes } from 'ecv-component';
import { LaminaeInfo } from '../components/ecv-generic-filter';
import { laminaesData } from '../data/laminae';

const receiveidLaminaesData: LaminaeInfo[] = laminaesData;


/**
 * Classe que representa web component que contem a pagina de laminas.
 * @class
 * @component
 */
@customElement('medicine-laminae')
export default class MedicineLaminae extends ECVMedicineSwitchThemeColor{


    static override get styles(): CSSResult{

        return css`

            ::-webkit-scrollbar-thumb{
                background-color: #fff;
                border-radius: 0px;
            }

            ::-webkit-input-placeholder{
                font-family: PoppinsLightItalic;
                font-size: 12px;
            }

            :host{
                display: block;
                box-sizing: border-box;
                background-color: #D5D5D5;
                user-select: none;
                -webkit-user-select: none;
            }

            .medicine-laminae__banner{
                display: flex;
                flex-direction: column;
                justify-content: center;
                row-gap: 20px;
                height: 329px;
                background-repeat: no-repeat;
                background-position: right;
                background-size: cover;
                padding-left: 30px;
                background-image: url("${unsafeCSS(laminaeExamineImageWidth483)}");
            }

            .banner__title{
                font-family: InterBold;
                font-size: 75px;
            }

            .banner__description{
                font-family: InterRegular;
                width: calc(90% - 30px);
                font-size: 16px;
            }

            .medicine-laminae__filterOptions{
                
                display: flex;
                flex-direction: column;
            }

            .medicine-laminae__searchBar{
                height: calc(72px - 30px);
                padding: 15px;
                background-color: white;
                display: flex;
                align-items: center;
            }

            .searchBar__container{
                display: flex;
                align-items: center;
                column-gap: 20px;
                flex: 1;
                height: inherit;
            }

            .searchBar__container .container__icone{
                border-right: 1px solid black;
                padding-left: 0;
                padding-right: 10px;
            }

            .searchBar__container .container__input{
                flex: 1;
                display: block;
                border: none;
                outline: none;
            }

            .filterOptions__header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 4px 4px 0 #0000002b;
                height: 72px;
                width: 100%;
            }

            .header__label{
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: InterBold;
                font-size: 20px;
                color: white;
                text-transform: uppercase;
                padding: 0 25px;
                flex: 1;
            }

            .header__expandedButton{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                border-left: 1px solid white;
                padding: 0 20px;
            }

            .header__expandedButton ecv-icon{
                cursor: pointer;
            }

            .header__horizontalOptions{
                display: none;
                overflow: hidden;
                transition: width 0.5s ease-out;
                column-gap: 20px;
                flex-wrap: wrap;
            }

            .header__horizontalOptions .horizontalOptions__radio{
                display: flex;
                column-gap: 10px;
            }

            .horizontalOptions__radio .radio__input{
                font-family: InterBold;
                color: white;
                font-size: 14px;
            }

            .filterOptions__options{
                display: flex;
                flex-direction: column;
                align-items: center;
                transition: height 0.3s ease-out;
                overflow: hidden;
                row-gap: 4px;
                padding-top: 4px;
            }

            .options__centerContainer{
                width: 100%;
            }

            .filterOptions__options .options__container{
                width: 100%;
                height: 67px;
                font-size: 14px;
                background-color: #E9E9E9;
                color: #003B57;
                font-family: InterBold;
                display: flex;
                align-items: center;
                justify-content: center;
                column-gap: 10px;
                box-shadow: 0 4px 4px 0 #00000038;
            }

            .options__container .container__radio{
                flex: 1;
                text-align: center;
                text-transform: uppercase;
            }

            .options__container .radio__input{
                padding: 5px;
                margin: 0 18px;
            }

            .laminae__container{
                display: flex;
                align-items: center;
                flex-direction: column;
                margin-top: 40px;
            }

            .laminae__container .container__list{
                height: 314px;
                width: 100%;
            }

            .list__scrollView{
                overflow: hidden auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 30px 0;
                row-gap: 40px;
                width: 100%;
                background-color: #C3C3C3;
            }

            .scrollView__laminae{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }

            .scrollView__laminae .laminae__name{
                font-family: InterBold;
                font-size: 14px;
                text-transform: uppercase;
                text-align: center;
                height: 34px;
                width: 90%;
                max-width: 500px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .laminae__card{
                background-color: #EEEAEA;
                width: 94%;
                height: 106px;
                box-shadow: 0 4px 4px 0 #00000038;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
            }

            .laminae__card .card__image{
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                opacity: 0.7;
            }

            .container__preview{
                width: 100%;
            }

            .preview__card{
                box-shadow: 0 4px 4px 0 #0000002b;
            }

            .preview__card .card__image{
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                height: 356px;
            }

            .preview__card .card__zoom{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 35px;
                background-color: #EEEAEA;
            }

            .preview__card .card__zoom ecv-icon{
                cursor: pointer;
            }

            .container__preview .preview__info{
                padding: 10px;
                box-shadow: 0 4px 4px 0 #000000b8;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .container__preview .info__name{
                color: white;
                font-family: InterBold;
                font-size: 14px;
                text-transform: uppercase;
                text-align: center;
                width: 500px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .container__preview .info__description{
                font-size: 16px;
                font-family: InterRegular;
                color: white;
                margin-top: 10px;
            }

            .container__preview .preview__info--bottom{
                display: none;
                margin-top: 20px;
            }

            .preview__info--bottom .info__name{
                color: #235083;
            }

            .preview__info--bottom .info__description{
                color: #3F3F3F;
            }

            .medicine-laminae__dialogPreview{
                height: 100vh;
                width: 100vw;
                flex-direction: column;
                background-color: #1a1a1a;
                position: fixed;
                top: 0;
                justify-content: center;
                align-items: center;
            }

            .dialogPreview__container{
                width: 90%;
                height: 90%;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .dialogPreview__header{
                width: 100%;
                color: white;
                position: relative;
                padding: 10px 0;
                display: flex;
                align-items: center;
                box-shadow: 0 4px 4px 0 #00000057;
            }

            .header__closeButton{
               margin: 0 10px;
               cursor: pointer;
            }

            .header__name{
                font-family: InterBold;
                text-transform: uppercase;
                font-size: 16px;
                text-align: center;
                flex: 1;
                padding-left: 20px;
            }

            .dialogPreview__image{
                width: 100%;
                height: calc(100% - 50px);
                overflow: auto;
                align-self: center;
            }

            .dialogPreview__image .image__source{
                -webkit-user-drag: none;
            }

            .dialogPreview__description{
                padding: 10px 20px;
                font-family: InterRegular;
                font-size: 14px;
                background-color: #EEEAEA;
                flex: 1;
                box-shadow: 0px -4px 4px 0 #0000003d;
            }

            @media screen and (min-width: 631px){

                .medicine-laminae__banner{
                    background-image: url("${unsafeCSS(laminaeExamineImageWidth631)}");
                }

                .banner__description{
                    width: calc(90% - 180px);
                }

                .scrollView__laminae .laminae__name{
                    font-size: 16px;
                }

                .preview__card .card__image{
                    height: 403px;
                }

                .laminae__container .list__scrollView{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .list__scrollView .scrollView__laminae{
                    width: 50%;
                }
            }

            @media screen and (min-width: 775px){

                .medicine-laminae__banner{
                    background-image: url("${unsafeCSS(laminaeExamineImageWidth775)}");
                }

                .banner__description{
                    width: calc(90% - 280px);
                }
            }

            @media screen and (min-width: 1024px){

                .medicine-laminae__banner{
                    background-image: url("${unsafeCSS(laminaeExamineImageWidth1024)}");
                }

                .banner__title{
                    font-size: 96px;
                }

                .preview__card .card__image{
                    height: 406px;
                }
            }

            @media screen and (min-width: 1280px){

                .medicine-laminae__inputFilterContainer{
                    display: flex;
                }

                .medicine-laminae__inputFilterContainer .medicine-laminae__searchBar{
                    order: 1;
                    flex: 2;
                }

                .icone__search{
                    cursor: pointer;
                }

                .medicine-laminae__inputFilterContainer .medicine-laminae__filterOptions{
                    flex: 1;
                    width: 20%;
                }

                .filterOptions__options{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    column-gap: 20px;
                    width: 100vw;
                    padding-top: 0;
                    border-top: 2px solid white;
                    box-shadow: 0 4px 4px 0 #00000052;
                }

                .options__centerContainer{
                    width: calc(90% - 120px);
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                    padding: 30px 10px;
                }

                .filterOptions__options .options__container{
                    background-color: transparent;
                    height: auto;
                    width: auto;
                    box-shadow: none;
                    column-gap: 0;
                    min-width: 16%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .options__container .container__radio{
                    color: white;
                    text-align: left;
                    flex: 0;
                    margin-right: 20px;
                    text-transform: uppercase;
                }

                .options__container .radio__input{
                    background-color: white;
                    margin: 0;
                    padding: 0;
                }

                .laminae__container{
                    flex-direction: row-reverse;
                    align-items: flex-start;
                    column-gap: 30px;
                    padding-bottom: 20px;
                }

                .laminae__container .list__scrollView{
                    overflow: hidden auto;
                    height: calc(489px - 60px);
                    row-gap: 30px;
                    align-items: flex-start;
                    justify-content: flex-start;
                }

                .list__scrollView .scrollView__laminae{
                   width: 45%;
                }

                .scrollView__laminae .laminae__name{
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    height: 34px;
                    font-size: 14px;
                }

                .laminae__card{
                    height: 80px;
                    width: 80%;
                    margin-top: 10px;
                }

                .laminae__card .card__image{
                    height: 58px;
                    width: 58px;
                }

                .preview__card .card__image{
                    height: 405px;
                }

                .container__preview .preview__info--bottom{
                    display: block;
                }

                .preview__info--bottom .info__description{
                    max-width: 745px;
                }
            }

            @media screen and (min-width: 1328px){

                .medicine-laminae__banner{
                    background-image: url("${unsafeCSS(laminaeExamineImageWidth1328)}");
                }

                .banner__description{
                    width: calc(90% - 450px);
                }
            }
            
        `;

    }

    /**
     * Propriedade reativa interna que representa a lista das categorias possiveis  
     */
    @state()
    private _possibleFilterCategories: string[] = [];

    /**
     * Propriedade reativa interna que representa se o filtro esta aberto ou fechado
     */
    @state()
    private _hasExpandedFilter: boolean = false;

    /**
     * Propriedade reativa interna que representa as informacoes atuais das laminas
     */
    @state()
    private _filterLaminaes: LaminaeInfo[] = receiveidLaminaesData;

    /**
     * Propriedade reativa interna que representa a informacao atual da lamina
     */
    @state()
    private _selectedLaminae: LaminaeInfo = this._filterLaminaes[0];

    /**
     * Propriedade reativa interna que representa se o preview esta aberto ou fechado
     */
    @state()
    private _hasOpenedPreview: boolean = false;

    /**
     * Propriedade reativa interna que representa a altura atual do filtro
     */
    @state()
    private _filterHeight: number = 0;

    @state()
    private _currentScreenWidth: number = window.innerWidth;

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    override connectedCallback(): void {
        super.connectedCallback();
        receiveidLaminaesData.map((laminae) => {

            if(!this._possibleFilterCategories.includes(laminae.category)){
                this._possibleFilterCategories.push(laminae.category);
            }
        });

        window.addEventListener('resize', this._onResizeWidth.bind(this));
        //screen.orientation.addEventListener('change', this._onOrientationChange.bind(this));
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('resize', this._onResizeWidth.bind(this));
        //screen.orientation.removeEventListener('change', this._onOrientationChange.bind(this));
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        
        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex();
                
        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);

        this._currentScreenWidth = window.innerWidth;
        
        this._updateFilterHeight();
    }

    /**
     * Atualiza a altura do filtro para caber os itens de acordo com a orientacao da tela.
     * @private
     * @method 
     */
    private _updateFilterHeight() : void {

        this._filterHeight = (this.shadowRoot?.querySelector('.options__centerContainer') as HTMLElement).offsetHeight;
    }

    /**
     * Metodo executado quando a tela altera a largura.
     * @private
     * @method
     */
    private _onResizeWidth() {

        this._currentScreenWidth = window.innerWidth;

        //this._hasExpandedFilter = window.innerWidth >= 1024 ? true : false;

        //this.requestUpdate();

        //this._updateFilterHeight();
    }

    /**
     * Filtra as laminas por categorias.
     * @private
     * @method
     * @param _e Evento atual
     */
    private _filter(_e: Event){

        const checkboxList = this.shadowRoot?.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

        let temporaryFilteredList: LaminaeInfo[] = [];

        checkboxList.forEach((checkbox) => {

            if(checkbox.checked){
                receiveidLaminaesData.filter(laminae => laminae.category === checkbox.value).map(ch => {
                    temporaryFilteredList.push(ch);
                });
                
            }

        });

        this._filterLaminaes = temporaryFilteredList.length > 0 ? temporaryFilteredList : receiveidLaminaesData;

        this._updateSelectedLaminae(this._filterLaminaes[0]);
    }

    /**
     * Atualiza as informacoes do preview da lamina.
     * @param newLaminae Nova informacao da lamina
     * @returns 
     */
    private _updateSelectedLaminae(newLaminae: LaminaeInfo) {
        
        if(this._selectedLaminae === newLaminae)
            return;
        this._selectedLaminae = newLaminae;
        this.shadowRoot?.querySelector('.card__image')?.classList.toggle('fade');
        this.shadowRoot?.querySelector('.card__image')?.addEventListener('animationend', () => {
            this.shadowRoot?.querySelector('.card__image')?.classList.remove('fade');
        });

        if(window.innerWidth < 1280){
            
        }
        
    }

    /**
     * Abre e fecha o filtro
     * @private
     * @method
     */
    private _toggleExpandFilter() {

        this._hasExpandedFilter = !this._hasExpandedFilter;
    }

    /**
     * Abre o zoom em forma de preview da lamina atual
     * @private
     * @method
     */
    private _zoomLaminae(){

        this._hasOpenedPreview = true;
        EcvMedicine.instance.disablePageScroll();

    }

    /**
     * Fecha o zoom em forma de preview da lamina atual
     * @private
     * @method
     */
    private _closeZoom(){
        this._hasOpenedPreview = false;
        EcvMedicine.instance.enablePageScroll();
    }

    /**
     * Executa a busca da lamina atraves do campo de texto
     * @private
     * @method
     * @param e Evento atual
     * @returns 
     */
    private _searchLaminae(e: Event) {
        e.preventDefault();
        const input = this.shadowRoot?.querySelector('form input') as HTMLInputElement;

        if(input?.value.trim() === ' '){
            return;
        }
        
        this._filter(e);           

        this._filterLaminaes = this._filterLaminaes.filter(laminae => laminae.name.toUpperCase().includes(input!.value.toUpperCase()));

        this._updateSelectedLaminae(this._filterLaminaes[0]);

    }

    protected override render(): TemplateResult{

        return html`
            <style>
                ::-webkit-scrollbar{
                    display: ${this._currentScreenWidth >= 1280 ? 'initial' : 'none'};
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }
                .filterOptions__header{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

                .container__list .list__header{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

                .header__expandedButton ecv-icon{
                    transform: rotate(${this._hasExpandedFilter ? '-90deg' : '90deg'});
                }

                .filterOptions__options{
                    height: ${this._hasExpandedFilter ? `${this._filterHeight}px`: '0'};
                }

                .options__container .radio__input{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

                .medicine-laminae__dialogPreview{
                    position: relative;
                    display: ${this._hasOpenedPreview ? 'flex' : 'none'};
                }

                .container__preview .preview__info{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

                .dialogPreview__header{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

                .banner__title,
                .banner__description{
                    color: ${this._currentThemeColor.getBackgroundColor()};
                }

                @media screen and (min-width: 1280px){
                    
                    .medicine-laminae__filterOptions .filterOptions__options{
                        background-color: ${this._currentThemeColor.getBackgroundColor()};
                    }
                }

            </style>
            <div class="medicine-laminae__banner">
                <div class="banner__title">Lâminas</div>
                <div class="banner__description">
                    Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor os conteúdos que está estudando. É um apoio visual pensado para facilitar o dia a dia e deixar o aprendizado mais leve e eficiente. Fique à vontade para explorar e usar sempre que quiser reforçar o que viu na teoria.
                </div>
            </div>
            <div class="medicine-laminae__inputFilterContainer">
                <div class="medicine-laminae__searchBar">
                    <div class="searchBar__container">
                        <div class="container__icone">
                            <ecv-icon class="icone__search" @click=${this._searchLaminae} .icon=${IconTypes.Search}></ecv-icon>
                        </div>
                        <form @submit=${this._searchLaminae} class="container__form">
                            <input @input=${this._searchLaminae} class="container__input" type="text" placeholder="Pesquise por palavra chave ou título." autocomplete="off">
                        </form>
                    </div>
                </div>
                <div class="medicine-laminae__filterOptions">
                    <div class="filterOptions__header">
                        <div class="header__label">filtro</div>
                        <div class="header__expandedButton">
                            <ecv-icon @click=${this._toggleExpandFilter} .icon=${IconTypes.ArrowForwardIoS} .iconStyle=${{ color: "white"}}></ecv-icon>
                        </div>
                    </div>
                    <div class="filterOptions__options">
                        <div class="options__centerContainer">
                            ${this._possibleFilterCategories.map(category => html`
                            <div class="options__container">
                                <label class="container__radio">${category}</label>
                                <div class="radio__input">
                                    <input @change=${this._filter} type="checkbox" name="filter" value="${category}">
                                </div>
                            </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
            <div class="laminae__container">
                <div class="container__preview">
                    <div class="preview__card">
                        <div class="preview__info">
                            <div class="info__name">${this._selectedLaminae.name}</div>
                        </div>
                        <div class="card__image" style="background-image:url('${this._selectedLaminae.imageURL}')"></div>
                        <div class="card__zoom"><ecv-icon .icon=${IconTypes.Fullscreen} @click=${this._zoomLaminae}></ecv-icon></div>
                    </div>
                </div>
                <div class="list__scrollView">
                    ${this._filterLaminaes.map((laminae) => html`
                        <div class="scrollView__laminae">
                            <div class="laminae__name">${laminae.name}</div>
                            <div class="laminae__card" @click=${() => { this._updateSelectedLaminae(laminae); this.shadowRoot?.querySelector('.laminae__container')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <div class="card__image" style="background-image:url('${laminae.imageURL}')"></div>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div class="medicine-laminae__dialogPreview">
                <div class="dialogPreview__container">
                    <div class="dialogPreview__header">
                        <div class="header__name">${this._selectedLaminae.name}</div>
                        <div @click=${this._closeZoom} class="header__closeButton"><ecv-icon .icon=${IconTypes.Close} .iconStyle=${{ size: '30px', color: 'white' }}></ecv-icon></div>
                    </div>
                    <div class="dialogPreview__image">
                        <img class="image__source" src="${this._selectedLaminae.imageURL}">
                    </div>
                </div>
            </div>
        `;

    }



}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-laminae': MedicineLaminae

   }
}