import { VGrid } from '../v-grid';
import { BindingContext, OverrideContext } from '../../interfaces';
export declare class VGridDragDropCol {
    private vGrid;
    private element;
    private column;
    private vGridElement;
    private controller;
    private groupingElements;
    private sharedContext;
    private entered;
    private curColNo;
    private bindingContext;
    private overrideContext;
    private onDragstartBinded;
    private onDragenterBinded;
    private onDragoverBinded;
    private onDragendBinded;
    private onDragOutSideBinded;
    private colType;
    private colNo;
    private context;
    private columnsArray;
    private isPanel;
    private dragColumnBlock;
    private mouseMoveTimer;
    constructor(element: Element, vGrid: VGrid);
    bind(bindingContext: BindingContext, overrideContext: OverrideContext): void;
    unbind(): void;
    detached(): void;
    attached(): void;
    private createDragElement();
    private onDragstart();
    private onDragOutSide(event);
    private onDragenter(event);
    private onDragover(event);
    private onDragend();
    private switchColumns(result);
    private getTargetData(curTarget);
}
