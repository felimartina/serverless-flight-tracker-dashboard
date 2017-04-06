import { Airport } from './airport'
export class Flight {
  public from: Airport;
  public to: Airport;
  public inbound: Date;
  public outbound?: Date;
  public constructor(data: any = {}) {
    this.from = data.from || '';
    this.to = data.to || '';
    this.inbound = data.inbound || '';
    this.outbound = data.outbound || '';
  }

  public toString() {
    return `From ${this.from.toString()}, To ${this.to.toString()}`;
  }
}
