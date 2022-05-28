import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Page } from 'src/app/models/pagination';
import { ApiService } from 'src/app/services/api.service';
import { ButtonConfig, ListConfig } from 'src/app/utils/list';
import { fieldFormat } from 'src/app/utils/functions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  @Input() config: ListConfig;
  page: Page<any>;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => this.read(params));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async read(params?: Params) {
    params = params || this.route.snapshot.queryParams;
    this.page = await this.apiService[this.config.serviceName][this.config.methodName]
      (
        params['search'] || '',
        +params['offset'] || 0,
        +params['limit'] || 7,
      ).toPromise();
  }

  handleClick(button: ButtonConfig, item: any) {
    button.click(item).then(() => this.read());
  }

  fields(item: any) {
    return Object.keys(item).filter(field => !this.config.hiddenFields?.includes(field) && typeof item[field] !== 'object');
  }

  compositeData(item: any) {
    const compositeFields = Object.keys(item).filter(field => !this.config.hiddenFields?.includes(field) && typeof item[field] === 'object')
    let values = {}
    for (const field of compositeFields) {
      values = { ...values, ...item[field] }
    }
    return values
  }

  fieldPreview(field: string) {
    return fieldFormat(field);
  }

  valuePreview(value: any, field?: string) {
    if (typeof value === 'boolean') {
      return value ? 'yes' : 'no';
    } if (Array.isArray(value)) {
      const result = [];
      value.forEach(item => {
        if ('name' in item && 'company' in item && 'start' in item && 'end' in item) {
          result.push(`${item.name} (${item.company}, ${new Date(item.start).toISOString().substring(0, 10)}: ${new Date(item.end).toISOString().substring(0, 10)})`);
        } else if ('name' in item) {
          result.push(item.name);
        }
      });
      return result.length ? result.join(', ') : 'None';
    }
    if (field === 'date'){
      return new Date(value).toISOString().substring(0, 10)
    }
    return value;
  }

}
