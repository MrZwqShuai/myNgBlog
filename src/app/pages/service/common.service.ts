import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  public articleByKeywords: Array<object> = [];
  public keywords: string | number = '';
  
  constructor() { }

}
