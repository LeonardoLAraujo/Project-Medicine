import {css, CSSResult, CSSResultGroup, html} from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/ecv-medicine-search-input';
import '../components/ecv-medicine-underline-title';
import '../components/ecv-medicine-area-title';
import  libraryBackgroundImage  from '../images/mulher_biblioteca_capa.png';
import MedicineGenericPage from './medicine-generic-page';
import EcvMedicine from '../ecv-medicine';

/**
 * Classe que representa web component que contem a pagina da blbioteca da aplicacao.
 * @class
 * @component
 */
@customElement('medicine-library')
export default class MedicineLibrary extends MedicineGenericPage{

    static override get styles(): CSSResult | CSSResultGroup {
        
        return [
            MedicineGenericPage.styles,
            css`

                @media screen and (min-width: 1280px){

                    .background__image{
                        transform: scale(1.6);
                        background-position-x: 306px;
                    }
                }

                @media screen and (min-width: 1366px){

                    .background__image{
                        background-position: center 100px;
                        transform: scale(2);
                    }

                    .medicine-generic__description p {
                        margin: 40px 280px;
                    }

                    ecv-medicine-orange-button{
                        margin-left: 270px;
                        margin-right: 270px;
                    }
                }

                @media screen and (min-width: 1728px){

                    .medicine-generic__background{
                        height: auto;
                    }

                    .background__image{
                        transform: scale(1);
                        background-position: bottom;
                    }

                    .description__rightSide{
                        padding-bottom: 60px;
                    }

                    .medicine-generic__description p {
                        margin: 20px 0px;
                    }

                    ecv-medicine-orange-button{
                        margin-left: 0px;
                        margin-right: 0px;
                    }
                }
            `
        ];
    }


    protected override firstUpdated(): void {
        super.firstUpdated();
        this.underlineTitle = 'Biblioteca';
        this.areaTitle= 'Biblioteca';
        this.boldedAreaTitle = '';
        this.pageImage = libraryBackgroundImage;
        this.pageContent = html`
            <p>Você esta pronto para mergulhar em  <br>um  oceano de informações, descobertas <br> e aprendizado?</p>
            <p>A <strong>Biblioteca</strong> é o seu portal para <br> uma vasta gama de recursos acadêmicos<br> que vão impulsionar sua jornada de <br> aprendizado.</p>
            <p>Visite o site da <strong>Biblioteca.</strong></p>
        `;
        this.enterEvent = () => {
            EcvMedicine.instance.goToUninoveLibraryExternalLink();
        }

        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex();
                
        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);
    }
}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-library': MedicineLibrary

   }
}