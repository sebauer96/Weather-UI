import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {

 
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  longitude = "";
  latitude = "";
  public listWeather = [];

  constructor(private weatherService:WeatherService){}

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'noaa_Weather' },
      { item_id: 2, item_text: 'accuweather_Weather' },
      { item_id: 3, item_text: 'weatherdotcom_Weather' }
    ];
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todos',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  buscar(){
    this.weatherService.getWeatherByService(this.longitude,this.latitude,this.selectedItems.map(x=>x.item_text).join(',')).subscribe(x=>{
      this.listWeather = x;
      console.log(x)
    })
  }


}
