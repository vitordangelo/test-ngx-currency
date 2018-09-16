import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCurrencyModule } from 'ngx-currency';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ngx-currency/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  allowZero: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: false
};

@NgModule({
  imports: [
    CommonModule,
    NgxCurrencyModule
  ],
  exports: [
    NgxCurrencyModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class CurrencyMaskModule { }
