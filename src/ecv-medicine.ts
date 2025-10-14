import {LitElement, html, css, TemplateResult, CSSResult, PropertyValues} from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import {Router} from '@vaadin/router';
import './components/ecv-medicine-top-bar';
import './components/ecv-medicine-overlay-menu';
import { ThemeColor } from './type/ThemeColor';
import ECVMedicineSwitchThemeColor from './components/ecv-medicine-switch-theme-color';
import { Student } from './type/Student';
import ECVMedicineOverlayMenu from './components/ecv-medicine-overlay-menu';
import ECVMedicineTopBar from './components/ecv-medicine-top-bar';
import loaderGif from './images/gifs/Loading_MED.gif';
import { anatomyData } from './data/anatomy';
//import { laminaesData } from './data/laminae';
import { videos } from './data/video';
import { Video } from './type/video';
import { CardPlatform, MENU_PLATFORM, MenuPlatform } from "./data/platform";


/**
 * Componente que representa o ponto de entrada da aplicacao.
 */
@customElement('ecv-medicine')
export default class EcvMedicine extends LitElement{

  private _assets: string[] = [];

  /**
   * Representa o objeto do Vaadin Router
   * @private
   * @property
   */
  private router?: Router;
  /**
   * Representa uma lista de todos os elementos do tipo ECVMedicineSwitchThemeColor.
   * @private
   * @property
   */
  private _switchColorElements: ECVMedicineSwitchThemeColor[] = [];
  /**
   * Constante que contem o link externo de acesso a biblioteca uninove primo.
   * @private
   * @readonly
   * @property
   */
  private readonly UNINOVE_LIBRARY_EXTERNAL_LINK: string = 'https://uninove.primo.exlibrisgroup.com/discovery/search?vid=55UNINOVE_INST:UNINOVE';
  /**
   * Constante que contem o link externo de acesso a plataforma COMA.
   * @private
   * @readonly
   * @property
   */
  private readonly COMA_EXTERNAL_LINK: string = `https://docs.uninove.br/arte/links/lp_fp/congresso-coma/congresso-coma/index.html`;
  /**
   * Constante que contem o link externo de acesso para a central do aluno uinove.
   * @private
   * @readonly
   * @property
   */
  private readonly STUDENT_CENTER_EXTERNAL_LINK: string = `https://aluno.uninove.br/seu/CENTRAL/aluno/`;

  /**
   * Referencia da folha de estilo (index.css) criada pelo vite.
   * @private
   * @property
   */
  private _viteStyleSheet?: CSSStyleSheet;
  
  /**
   * Referencia do container HTML no shadow root para renderizacao das rotas do vaadin router.
   * @private
   * @property
   */
  @query('#outlet')
  private outletElement!: HTMLElement;

  /**
   * Representa o componente do menu do topo.
   * @public
   * @property
   */
  @query('ecv-medicine-top-bar')
  topBar!: ECVMedicineTopBar;

  /**
   * Representa o componente menu mobile suspenso.
   * @public
   * @property
   */
  @query('ecv-medicine-overlay-menu')
  overlayMenu!: ECVMedicineOverlayMenu;

  /**
   * Estado interno que representa a largura atual da tela em pixels
   * @private
   * @property
   */
  @state()
  private _currentScreenWidth: number = 0;

  @state()
  private _hasAssetsLoaded: boolean = false;

  @state()
  private _textLoading: string = `Carregando`;

  /**
   * Propriedade estatica que representa o tema claro da aplicacao.
   * @static
   * @property
   */
  static lightTheme: ThemeColor = new ThemeColor('light', 'white', 'var(--dark-blue)');
  /**
   * Propriedade estatica que representa o tema escuro da aplicacao.
   * @static
   * @property
   */
  static darkTheme: ThemeColor  = new ThemeColor('dark', 'white', 'var(--light-black)');
  /**
   * Propriedade estatica que representa o tema de cores atual da aplicacao.
   * @static
   * @property
   */
  static currentTheme: ThemeColor = EcvMedicine.lightTheme;
  /**
   * Propriedade estatica que contem as informacoes do aluno atual.
   * @static
   * @property
   */
  static student: Student = new Student('Alessandra Nogueira Silva', 'https://blog.mrhgestao.com.br/wp-content/uploads/2017/10/130215-qual-o-perfil-do-aluno-que-faz-ensino-medio-junto-com-ensino-tecnico.jpg', '0000000000');
  /**
   * Propriedade estatica que contem a referencia da propria instancia da classe EcvMedicine.
   * @static
   * @property
   */
  static instance: EcvMedicine;

  static medicinePreviewPageTitle: string = '';

  static medicinePreviewPageDescriptions: string[] = [];

  static medicinePreviewPageObject: any;

  static medicineDetailsCurrentInteractive: any;

  static override get styles(): CSSResult{
		return css`

			.medicine-loader{
        	    top: 0;
        		z-index: 99;
          		position: fixed;
          		width: 100dvw;
          		height: 100dvh;
          		background-color: var(--dark-blue);
          		display: flex;
		  		flex-direction: column;
            	justify-content: center;
          		align-items: center;
        	}

			.loader__label{
				color: white;
				font-size: 16px;
				font-family: RobotoRegular;
				font-weight: bold;
				letter-spacing: 5px;
				text-align: center;
				text-transform: capitalize;
				margin: 0;
			}

			.loader__gif{
				width: 180px;
			}

			@media screen and (min-width: 1280px){

				.loader__label{
					font-size: 18px;
				}
			}

    	`;
	}

	public getAssets(): string[] {

		return this._assets;
	}

	override connectedCallback(): void {
    	super.connectedCallback();
		this._hasAssetsLoaded = false;
    	document.fonts.addEventListener('loadingdone', (e) => {

			if(e.fontfaces.some(ff => ff.family == 'Material Symbols Outlined')){

				this.loadAssets().then((assets) => {
					this._assets = assets;
					this._hasAssetsLoaded = true;
	
				});
			}

    	});

		this._updateScreenWidth();
		window.addEventListener('resize', this._updateScreenWidth.bind(this));
		this.updateScrollbarColor();
	}

	override disconnectedCallback(): void {
    	super.disconnectedCallback();
    	window.addEventListener('resize', this._updateScreenWidth.bind(this));
	}

	override async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
		
    	EcvMedicine.instance = this;

    	if(this.outletElement){
        	this.router = new Router(this.outletElement);
        	this.router.setRoutes([
				{
					path: `/`,
					component: 'medicine-home',
					action: async () => { await import('./pages/medicine-home'); }
				},
				{
					path: '/platforms',
					component: 'medicine-platform',
					action: async () => { await import('./pages/medicine-platform') }
				},
				{
					path: '/library',
					component: 'medicine-library',
					action: async () => { await import('./pages/medicine-library') }
				},
				{
					path: '/video',
					component: 'medicine-video',
					action: async () => { await import('./pages/medicine-video'); }
				},
				{
					path: '/laminae',
					component: 'medicine-laminae',
					action: async () => { await import('./pages/medicine-laminae') }
				},
				{
					path: '/coma',
					component: 'medicine-coma',
					action: async () => { await import('./pages/medicine-coma');}
				},
				{
					path: '/anatomy',
					component: 'medicine-anatomy',
					action: async () => { await import('./pages/medicine-anatomy');}
				},
				{
					path: '/anatomy/preview',
					component: 'medicine-anatomy-preview',
					action: async () => { await import('./pages/medicine-anatomy-preview');}
				},
				{
					path: '/anatomy/preview/details',
					component: 'medicine-anatomy-details',
					action: async () => { await import('./pages/medicine-anatomy-details');}
				},
				{
					path: '/study',
					component: 'medicine-study',
					action: async () => { await import('./pages/medicine-study');}
				},
				{
					path: '/study/view',
					component: 'medicine-study-view',
					action: async () => { await import('./pages/medicine-study-view');}
				}
        	]);

        	//Executado quando todas as rotas estiverem prontas
        	this.router.ready.then(() => {
          		//this.goTo(`/`);
        	});

    	}else{
        	console.error('Erro: Elemento #outlet não encontrado no Shadow DOM.');
    	}
      
	}

	public async loadAssets(): Promise<string[]> {

		const loading = new Promise<string[]>((resolve, _reject) => {

    		let temporaryAssets: string[] = [];

    		let assetsLoaded: number = 0;

			let animationRepeatCount = 0;

			const textLoadingAnimation = setInterval(() => {

				this._textLoading += '.';
				animationRepeatCount ++;
				if(animationRepeatCount > 3){
					this._textLoading = `Carregando`;
					animationRepeatCount = 0;
				}

			}, 600); 

			MENU_PLATFORM.map((platform: MenuPlatform) => {
				platform.card.map((card: CardPlatform) => {
					if(card.image !== ""){
						temporaryAssets.push(card.image);
					}
				});
			});

			videos.lives.map((live: Video) => {
				if(live.image !== ""){
					temporaryAssets.push(live.image);
				}
			});
	
			videos.videos.map((video: Video) => {
				if(video.image !== ""){
					temporaryAssets.push(video.image);
				}
			});

			/*laminaesData.map((laminae => {

				if(laminae.imageURL !== ''){
					temporaryAssets.push(laminae.imageURL);
				}
			
			}));*/

			anatomyData.partes.map((data) => {
				temporaryAssets.push(data.cartao.imagem);

				if(data.pagina.imagem.arquivo !== ''){
					temporaryAssets.push(data.pagina.imagem.arquivo);
				}
			
				data.pagina.ultimosLancamentos.map((ultimo) => {
					if(ultimo !== ''){
						temporaryAssets.push(ultimo);
					}
			
				});

				data.pagina.itensMenuLateral.map((itemMenu) => {
					if(itemMenu.imagem !== ''){
						temporaryAssets.push(itemMenu.imagem);
					}
			
				});
		
			});

			temporaryAssets.map(asset => {
				if(asset !== ''){
					let img = new Image();
					img.src = asset;
					img.onload = () => {
						assetsLoaded ++;
						if(assetsLoaded === temporaryAssets.length){
							clearInterval(textLoadingAnimation);
							resolve(temporaryAssets);
						}
					}
				}
			
			});
      
    	});

    	return loading;
	}

	public getVaadinRouter(): Router | undefined {

    	return this.router;
	}

  	/**
   	* Atualiza o valor da largura atual da tela referenciada na propriedade do proprio componente.
   	* @private
   	* @method
   	*/
	private _updateScreenWidth() {

    	this._currentScreenWidth = window.innerWidth;
		this.dispatchEvent(new CustomEvent('onUpdatedScreenWidth'));
	}

	/**
	 * Retorna o valor da largura atual da tela.
	 * @public 
	 * @method
	 * @returns 
	 */
	public getCurrentScreenWidth(): number {

		return this._currentScreenWidth;
	}

	/**
	 * Vai para uma rota especifica do top bar menu ou menu sandwitch e fecha o menu suspenso se o mesmo estiver aberto.
	 * @public
	 * @method
	 * @param route - O destino da rota através do seu path.
	 */
	public goTo(routePath: string): void {
		window.scroll(0, 0);
		this.router?.render(routePath, true);
		Router.go(routePath);
		const currentRouteIndex = this.getCurrentRouteIndex();
		this.topBar.selectTopBarMenuLink(currentRouteIndex);
		if(this.overlayMenu.hasOpened()){

			this.closeSandwitchMenu();
		}
	}

	public getCurrentRouteIndex(): number {

		const currentRouteIndex = this.router?.getRoutes().findIndex((router) => router.path === this.router?.context.pathname) as number;

		return currentRouteIndex <= 6 ? currentRouteIndex : 6;
	}

	/**
	 * Abre uma nova aba no navegador para a central do aluno.
	 * @public
	 * @method
	 */
	public goToStudentCenterExternalLink(): void {
		if(this.overlayMenu.hasOpened()){
			this.closeSandwitchMenu();
		}
		this._goToExternalLink(this.STUDENT_CENTER_EXTERNAL_LINK);
	}

	/**
	 * Vai para um link externo especifico.
	 * @private
	 * @method
	 * @param link - O link externo referenciado.
	 */
	private _goToExternalLink(link: string): void {

		window.open(link, '_blank');
	}

	/**
	 * Vai para o link externo da biblioteca primo.
	 * @public
	 * @method
	 */
	public goToUninoveLibraryExternalLink(): void {

		this._goToExternalLink(this.UNINOVE_LIBRARY_EXTERNAL_LINK);
	}

	/**
	 * Vai para o link externo do COMA.
	 * @public
	 * @method
	 */
	public goToComaExternalLink(): void {

		this._goToExternalLink(this.COMA_EXTERNAL_LINK);
	}

	/**
	 * Abre o menu quando o mesmo esta fechado e o layout em mobile.
	 * @public
	 * @method
	 */
	public openSandwitchMenu(): void {

		this.overlayMenu.open();
	}

	/**
	 * Fecha o menu suspenso quando o mesmo esta aberto e o layout em mobile.
	 * @public
	 * @method
	 */
	public closeSandwitchMenu(): void {

		this.overlayMenu.close();
	}

	/**
	 * Sai da aplicacao efetuando o logoff.
	 * @public
	 * @method
	 */
	public sair(){

		alert('Aqui sai do aplicativo');
	}

	/**
	 * Disabilita o scroll do document body.
	 * @public
	 * @method
	 */
	public disablePageScroll(): void {

		document.body.setAttribute('style', 'overflow: hidden;');
	}

	/**
	 * Habilita o scroll do document body.
	 * @public
	 * @method
	 */
	public enablePageScroll(): void {

		if(document.body.getAttribute('style')){

			document.body.removeAttribute('style');
		}

	}

	/**
	 * Troca as cores do tema atual entre light e dark.
	 * @public
	 * @method
	 */
	public switchTheme(): void {
		EcvMedicine.currentTheme = EcvMedicine.currentTheme === EcvMedicine.lightTheme ? EcvMedicine.darkTheme : EcvMedicine.lightTheme;
		this._switchColorElements = Array.from(this.shadowRoot!.querySelectorAll('*')).filter(ch => ch instanceof ECVMedicineSwitchThemeColor);
		this._switchColorElements.map(element => element.switchCurrentTheme());

		this.updateScrollbarColor(); 
	}

	/**
	 * Atualiza a cor da barra de scroll do window para a cor do tema atual.
	 * @public
	 * @method
	 */
	public updateScrollbarColor(): void {

		this._viteStyleSheet = this._viteStyleSheet ?? Array.from(document.styleSheets).filter(sheet => sheet.href?.includes('index'))[0];

		this._viteStyleSheet?.deleteRule(0); 
		this._viteStyleSheet?.insertRule(`*::-webkit-scrollbar-thumb{ background-color:  ${EcvMedicine.currentTheme.getBackgroundColor()}}`);
	}

	/**
	 * Busca diretamente na biblioteca uninove primo.
	 * @public
	 * @method
	 * @param valorPesquisa - A expressao a ser pesquisada.
	 */
	public searchOnUninove(valorPesquisa: string): void {
		if(valorPesquisa.trim() !== ''){

				window.open(`https://uninove.primo.exlibrisgroup.com/discovery/search?query=any,contains,${valorPesquisa}&tab=Everything
					&search_scope=MyInstitution&vid=55UNINOVE_INST:UNINOVE&offset=0`, '_blank');
		}
	}

	protected override render(): TemplateResult{
		return html`
			<ecv-medicine-top-bar currentScreenWidth=${this.getCurrentScreenWidth()}></ecv-medicine-top-bar>
					<div id="outlet"></div>
			<ecv-medicine-overlay-menu currentScreenWidth=${this.getCurrentScreenWidth()}></ecv-medicine-overlay-menu>
			${!this._hasAssetsLoaded ? html`
				<div class="medicine-loader">
				<img class="loader__gif" src=${loaderGif}>
				<p class="loader__label">${this._textLoading}</p>
				</div>
				`: html``
			}
      
		`;
	}

}

declare global{
  interface HTMLElementTagNameMap{
	  'ecv-medicine': EcvMedicine
  }
}