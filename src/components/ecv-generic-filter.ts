import { html, LitElement, PropertyValues, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";

export type LaminaeInfo = {
    name: string;
    description: string;
    category: string;
    imageURL: string;
}

export abstract class ECVGenericFilter extends LitElement {

    @property({ attribute: false })
    public categories: LaminaeInfo[] = [];

    @state()
    protected _filteredCategories: LaminaeInfo[] = [];

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        this._filteredCategories = this.categories;
    }

    public abstract renderLaminae(information: LaminaeInfo): TemplateResult; 

    public filter(expression: string): LaminaeInfo[] {
        this._filteredCategories = this.categories.filter((category) => category.name.toUpperCase().includes(expression.toUpperCase()));
        return this._filteredCategories;
    }

    public reset(): LaminaeInfo[] {

        return this.categories;
    }

    protected override render(): TemplateResult {
        return html`
            ${this._filteredCategories.map(category => html`${this.renderLaminae(category)}`)}
        `;
    }
}
