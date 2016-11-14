import {DataSource} from './dataSource';//todo,create interface when datasource is stable

export class Collection {
  private entities:Array<any>;
  private keys:Array<any>;
  private key:any;
  private count:number;
  public length:number;
  private datasource:DataSource;
  private ungroupedArray:Array<any>;


  constructor(datasource:DataSource) {
    this.datasource = datasource;
    this.key = datasource.key;
    this.entities = [];
    this.keys = [];
    this.count = 0;
    this.length = 0;
    this.ungroupedArray = [];
  }


  setData(array:Array<any>, ungroupedArray?:Array<any>) {
    this.entities = [];
    this.keys = [];

    //need a ungrouped collection, so we can use that forward when needing to sort, regroup etc
    this.ungroupedArray = ungroupedArray || array;

    //get length;
    this.length = array.length;

    //create entities
    array.forEach((rowData, i)=> {
      if (!rowData[this.key]) {
        this.count++;
        rowData[this.key] = "key" + this.count;
      }

      if (!rowData.__group) {
        this.keys.push(rowData[this.key]);
      } else {
        this.keys.push(null);
      }
      this.entities.push(rowData);
    });

  }


  getEntities() {
    return this.ungroupedArray;
  }

  getCurrentEntities() {
    return this.entities;
  }

  getRowKey(row) {
    return this.keys[row];
  }

  getRowFromKey(key) {
    return this.keys.indexOf(key);
  }

  getRow(row) {
    return this.entities[row];
  }


  getRowFromEntity(entity) {
    return this.entities.indexOf(entity);
  }

}