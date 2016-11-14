import { HtmlCache } from './htmlCache';
export declare class RowScrollEvents {
    htmlCache: HtmlCache;
    element: Element;
    timer: any;
    largeScroll: boolean;
    collectionLength: number;
    largeScrollUpdateDelay: number;
    rowCache: Array<any>;
    rowHeight: number;
    cacheLength: number;
    leftRows: NodeListOf<any>;
    mainRows: NodeListOf<any>;
    rightRows: NodeListOf<any>;
    groupRows: NodeListOf<any>;
    onScrollBinded: any;
    left: any;
    main: any;
    right: any;
    scroller: any;
    constructor(element: any, htmlCache: any);
    init(rowHeight: any): void;
    createRowCache(): void;
    updateInternalHtmlCache(): void;
    readonly contentHeight: number;
    onScroll(event: any): void;
    setRowTopValue(cache: any, top: any): void;
    scrollNormal(newTopPosition: any, downScroll: any): void;
    scrollScrollBar(newTopPosition: any, downScroll: any): void;
    addEventListener(): void;
    removeEventListener(): void;
    setCollectionLength(length: any): void;
    triggerRebindRowEvent(currentRow: any, rowCache: any, downScroll: any): void;
    triggerRebindAllRowsEvent(downScroll: any, rowCache: any): void;
}
