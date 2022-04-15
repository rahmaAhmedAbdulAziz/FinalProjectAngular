import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { settings } from 'cluster';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes  } from '@angular/router';
import {SettingsRoutes } from './setting.routes';

@NgModule({
  declarations: [SettingsComponent],
  exports:[SettingsComponent],
  imports: [CommonModule, RouterModule.forChild(SettingsRoutes)],
})
export class SettingsModule { }
