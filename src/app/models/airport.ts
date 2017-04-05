export class Airport {
    public name: string;
    public code: string;
    public city: string;
    public country: string;
        public province: string;
    
    public constructor( data: any = {}) {
        this.name = data.name || '';
        this.code = data.code || '';
        this.city = data.city || '';
        this.country = data.country || '';
        this.province = data.province || Date.now();
    }

    public toString() {
        return `${this.name}, ${this.country} (${this.code})`;
    }
}
