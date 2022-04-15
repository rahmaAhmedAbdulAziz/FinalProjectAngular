import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private translateConfigService:TranslateConfigService) { }

  ngOnInit(): void {
  }
  changeLang(type: string){
    this.translateConfigService.changeLanguage(type)
  }
}
