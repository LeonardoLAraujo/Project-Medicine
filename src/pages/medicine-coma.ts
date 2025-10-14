import { css, CSSResult, CSSResultGroup, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import MedicineGenericPage from './medicine-generic-page';
import comaMainImage from '../images/doutores_coma_capa.png';
import EcvMedicine from '../ecv-medicine';

/**
 * Classe que representa um web component que contem a pagina COMA.
 * @class
 * @component
 */
@customElement('medicine-coma')
export default class MedicineComa extends MedicineGenericPage{

    static override get styles(): CSSResult | CSSResultGroup {
        return [
            MedicineGenericPage.styles,
            css`
                .background__image{
                background-position-x: -15px;
                background-position-y: 0;
            }

            @media screen and (min-width: 483px){

                .background__image{
                    background-position-x: -20px;
                    transform: scale(1);
                }
            }

            @media screen and (min-width: 631px){
            
                .background__image{
                    background-position-x: 20px;
                    transform: scale(1.1);
                }
            }

            @media screen and (min-width: 775px){

                .background__image{
                    background-position-x: 34px;
                }
            }

            @media screen and (min-width: 1024px){
            
                .background__image{
                    transform: scale(1.7);
                    background-position: 221px 60px;
                }

                .medicine-generic__background{
                    height: 691.87px;
                }
            }

            @media screen and (min-width: 1366px){
            
                .background__image{
                    transform: scale(2.1);
                    background-position: 339px 70px;
                }

                .medicine-generic__description p {
                    margin: 20px 300px;
                }

                .medicine-generic__description{
                    gap: 57px;
                }

                ecv-medicine-orange-button{
                    margin-left: 300px;
                    margin-right: 300px;
                }
            
            }

            @media screen and (min-width: 1728px){
            
                .medicine-generic__background{
                    width: 1114px;
                    height: auto;
                }

                .background__image{
                    transform: scale(1.1);
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
        this.underlineTitle = 'COMA';
        this.pageImage = comaMainImage;
        this.boldedAreaTitle = 'COMA';
        this.pageContent = html`
            <p><strong>O Congresso Médico Acadêmico da Universidade Nove de Julho, campus Vergueiro (COMA), é organizado por alunos em parceria com o Centro Acadêmico César Timo Iaria (CACTI) e as turmas do 3º e 4° ano de Medicina.</strong></p>
            <p>O evento promove a pesquisa e o ensino na medicina, estimulando a produção científica e abordando temas contemporâneos que refletem diversas realidades sociais.</p>
            <p>Estamos preparando o COMA XVI com muito carinho para vocês. Aguardamos sua presença!</p>
        `;

        this.enterEvent = () => {

            EcvMedicine.instance.goToComaExternalLink();
        }

        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex();
                
        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);
    }
    

}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-coma': MedicineComa

   }
}