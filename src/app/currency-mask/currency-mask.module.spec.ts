import { CurrencyMaskModule } from './currency-mask.module';

describe('CurrencyMaskModule', () => {
  let currencyMaskModule: CurrencyMaskModule;

  beforeEach(() => {
    currencyMaskModule = new CurrencyMaskModule();
  });

  it('should create an instance', () => {
    expect(currencyMaskModule).toBeTruthy();
  });
});
