export class Quotes {
    public showDescription: boolean;
  quote: any;
    // tslint:disable-next-line:max-line-length
    constructor (public id: number, public title: string, public author: string, public description: string, public completeDate: Date) {
        this.showDescription = false;
    }
}
