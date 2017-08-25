import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CodeModule } from './docs-code/code.module';
import { DocsMaterialModule } from './docs-material.module';
import { HotTableModule } from 'angular-handsontable';

import { QuickStartComponent } from './pages/quick-start.component';
import { IntroductionComponent } from './pages/introduction.component';
import { KnownLimitationsComponent } from './pages/known-limitations.component';
import { LicenseComponent } from './pages/license.component';
import { SupportComponent } from './pages/support.component';
import { OtherWrappersComponent } from './pages/other-wrappers.component';

import { ExSettingsObjectComponent } from './pages/examples/settings-object.component';
import { ExDeclarativeWayComponent } from './pages/examples/declarative-way.component';
import { ExStaticColumnsComponent } from './pages/examples/static-columns.component';
import { ExDynamicColumnsComponent } from './pages/examples/dynamic-columns.component';
import { ExAccessToHandsontableComponent } from './pages/examples/access-to-handsontable.component';
import { ExHooksComponent } from './pages/examples/hooks.component';
import { ExRemoteDataComponent } from './pages/examples/remote-data.component';

import { PageNotFoundComponent } from './pages/not-found.component';

const appRoutes: Routes = [
  { path: '', component: IntroductionComponent, data: {title: ' - Introduction'} },
  { path: 'quickstart', component: QuickStartComponent, data: {title: ' - QuickStart'} },
  { path: 'limitations', component: KnownLimitationsComponent, data: {title: ' - Known limitations'} },
  { path: 'license', component: LicenseComponent, data: {title: ' - License'} },
  { path: 'support', component: SupportComponent, data: {title: ' - Support'} },
  { path: 'more-wrappers', component: OtherWrappersComponent, data: {title: ' - More wrappers'} },

  { path: 'examples',   redirectTo: '/examples/settings-object', pathMatch: 'full' },
  { path: 'examples/settings-object', component: ExSettingsObjectComponent, data: {title: ' - Examples - Settings object'} },
  { path: 'examples/declarative-way', component: ExDeclarativeWayComponent, data: {title: ' - Examples - Declarative way'} },
  { path: 'examples/static-columns', component: ExStaticColumnsComponent, data: {title: ' - Examples - Static columns'} },
  { path: 'examples/dynamic-columns', component: ExDynamicColumnsComponent, data: {title: ' - Examples - Dynamic columns'} },
  { path: 'examples/access-to-handsontable', component: ExAccessToHandsontableComponent, data: {title: ' - Examples - Access to Handsontable'} },
  { path: 'examples/hooks', component: ExHooksComponent, data: {title: ' - Examples - Hooks'} },
  { path: 'examples/remote-data', component: ExRemoteDataComponent, data: {title: ' - Examples - Remote data'} },

  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    QuickStartComponent,
    IntroductionComponent,
    KnownLimitationsComponent,
    LicenseComponent,
    SupportComponent,
    OtherWrappersComponent,

    ExSettingsObjectComponent,
    ExDeclarativeWayComponent,
    ExStaticColumnsComponent,
    ExDynamicColumnsComponent,
    ExAccessToHandsontableComponent,
    ExHooksComponent,
    ExRemoteDataComponent,

    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DocsMaterialModule,
    HotTableModule,
    CodeModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule { }