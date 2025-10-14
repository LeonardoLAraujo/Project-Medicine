import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import "ecv-component";
import { IconTypes } from 'ecv-component';
import { MENU_PLATFORM, MenuPlatform } from '../data/platform';
import MedicinePlatform from '../pages/medicine-platform';

@customElement('ecv-medicine-menu-platform')
export default class EcvMedicineMenuPlatform extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .menu{
                display: flex;
                flex-direction: column;
            }

            .menu__detail:first-child{
               
                border-left: none;
            }

            .menu__detail{
                width: calc(100% - 32px);
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 1rem;
                background-color: #F2F2F2;
                border-top: 1px solid gray;
                cursor: pointer;
                font-size: 12px;
                border-left: 2px solid #D9D9D9;
            }

            .menu__detail:hover{
                color: #fff;
            }

            .menu__detail[actual]{
                color: #fff;
            }

            @media (min-width: 768px){
                .menu{
                    width: 100%;
                    flex-direction: row;
                    flex-wrap: nowrap;
                }

                .menu__detail{
                    justify-content: center;
                    border-top: none;
                }
            }

            @media (min-width: 1024px){
                .menu{
                    gap: 3px;
                }

                .menu__detail{
                    padding: 10px;
                    width: 263px;
                    height: 35px;
                    justify-content: center;
                    align-items: center;
                }
            }
        `;
    }

    private listMenu: Array<MenuPlatform> = MENU_PLATFORM;

    @state()
    public platformMenuIndex: number = 0;

    @queryAll(".menu__detail")
    private _containerAllMenuDetail!: NodeListOf<HTMLDivElement>;

    @property({attribute: false})
    platform!: MedicinePlatform;

    @property({type: String})
    backgroundColor: string = "";

    protected override firstUpdated(): void {
        this._containerAllMenuDetail[0].click();
    }

    private alterPlatform(e: MouseEvent, index: number): void {
        const container: HTMLDivElement = e.target as HTMLDivElement;

        this._containerAllMenuDetail.forEach((menu: HTMLDivElement) => {
            menu.removeAttribute("actual");
        });
        
        container.setAttribute("actual", "");

        this.platformMenuIndex = index;
        this.platform.cardPlatform.indexMenuPlatform = index;
        this.platform.cardPlatform?.selectedFirstPlatformMobile();
    }

    private generateMenu(): Array<TemplateResult> {
        return this.listMenu.map((menu: MenuPlatform, index: number) => html`<div class="menu__detail" @click=${(e: MouseEvent) => {this.alterPlatform(e, index)}}>
                                                                                <ecv-icon .icon=${menu.icon as IconTypes} ?filled=${true}></ecv-icon> 
                                                                                ${menu.text}
                                                                            </div>`);
    }

    protected override render(): TemplateResult{
        return html`
            <style>
                 .menu__detail[actual],
                 .menu__detail:hover{
                    background-color: ${this.backgroundColor};
                }
            </style>
            <div class="menu">
                ${this.generateMenu()}
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-menu-platform': EcvMedicineMenuPlatform
   }
}