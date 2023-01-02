export interface CURRENCY_OBJ {
    currency: Number;
    fromCurrency: string;
    toCurrency: string;
  }
  export interface CURRENTVALUE_PAYLOAD{
    currencies:string,
    source: string,
    start_date?:string,
    end_date?: string
  }