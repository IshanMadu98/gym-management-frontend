import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzPipesModule} from "ng-zorro-antd/pipes";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTreeModule} from "ng-zorro-antd/tree";
import { NzTagModule } from 'ng-zorro-antd/tag';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  exports: [
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzModalModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzBadgeModule,
    NzInputNumberModule,
    NzTimePickerModule,
    NzSpinModule,
    NzStepsModule,
    NzProgressModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzDrawerModule,
    NzAvatarModule,
    NzDividerModule,
    NzPopoverModule,
    NzAlertModule,
    NzAutocompleteModule,
    NzPipesModule,
    NzPaginationModule,
    NzEmptyModule,
    NzSkeletonModule,
    NzResultModule,
    NzCollapseModule,
    NzToolTipModule,
    NzSwitchModule,
    NzTypographyModule,
    NzTabsModule,
    NzTreeModule,
    NzTagModule,
    NzDescriptionsModule,
    NzCarouselModule,
    NzBackTopModule,
    NzMenuModule,
    NzCardModule
  ],
  imports: [
    CommonModule,
  ]
})
export class NgZorroModule { }
