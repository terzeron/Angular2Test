import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { TitleComponent } from '../app.title.component';
import { UserService, UserServiceConfig } from '../app.user.service';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule],
  exports: [TitleComponent],
  providers: [UserService]
})
export class CoreModule {
    construcotr(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded");
        }
    }
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
