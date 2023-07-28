import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jsPlumbToolkitModule } from '@jsplumbtoolkit/browser-ui-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SimpleNodeComponent } from './simple-node/simple-node.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jsPlumbToolkitModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
