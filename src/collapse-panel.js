import {bindable} from 'aurelia-framework';

export class CollapsePanel {

    @bindable heading = "A panel...";
    @bindable collapsed = false;
    @bindable badge = "";
    @bindable allowCollapse = true;
    @bindable panelClass = "";

    constructor() {
    }

    toggleCollapse() {
        if (this.allowCollapse) {
            this.collapsed = !this.collapsed;
        }
    }
}
