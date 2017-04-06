import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class SectionHeaderService {
  public current: ReplaySubject<SectionHeaderData>;
  private initialData: SectionHeaderData = new SectionHeaderData({
    title: '',
    display: false,
    subtitle: '',
  });
  constructor() {
    this.current = new ReplaySubject(1);
    this.clear();
  }

  /**
   * Sets the current header
   * @param data 
   */
  public set(data: SectionHeaderData) {
    this.current.next(data);
  }

  /**
   * Clears current header
   */
  public clear() {
    this.set(this.initialData);
  }

}

export class SectionHeaderData {
  public title: string;
  public subtitle: string;
  public display: boolean;
  public constructor(data: any = {}) {
    this.title = data.title || '';
    this.subtitle = data.subtitle || '';
    this.display = data.display || '';
  }
}