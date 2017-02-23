import { Selection } from './selection';
import { EntityInterface, DatasourceConfigInterface, SortObjectInterface, FilterObjectInterface, GroupingObjInterface, DatasourceInterface } from './interfaces';
export declare class DataSource implements DatasourceInterface {
    entity: EntityInterface;
    groupHeight: number;
    rowHeight: number;
    private selection;
    private key;
    private arrayUtils;
    private mainArray;
    private config;
    private eventIdCount;
    private eventCallBacks;
    private collection;
    private selectionEventID;
    constructor(selection: Selection, config?: DatasourceConfigInterface);
    getSelection(): Selection;
    getKey(): string;
    length(): number;
    triggerEvent(event: string): void;
    addEventListener(callback: Function): number;
    removeEventListener(id: number): void;
    setArray(array: EntityInterface[]): void;
    push(array: EntityInterface[]): void;
    refresh(data?: any): void;
    select(row: number): void;
    query(options: FilterObjectInterface[]): void;
    orderBy(attribute: string | SortObjectInterface, addToCurrentSort?: boolean): void;
    getCurrentOrderBy(): SortObjectInterface[];
    getCurrentFilter(): FilterObjectInterface[];
    getElement(row: number): EntityInterface;
    group(grouping: GroupingObjInterface[], keepExpanded?: boolean): void;
    groupCollapse(id: string): void;
    groupExpand(id: string): void;
    getGrouping(): GroupingObjInterface[];
    addBlankRow(): void;
    unshift(data: any): void;
    remove(rows?: any[]): any[];
    getCollectionStatus(): any;
    setLocaleCompare(code: string, options?: any): void;
    getRowHeightState(): any;
    private getRowKey(row);
    private getRowKeys();
    private selectionEventCallback(e);
}
