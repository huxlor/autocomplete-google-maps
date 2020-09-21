import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  @Input() options: any;

  title = 'Google-Address';

  ngOnInit(): void {

  }

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log('Lat', address.geometry.location.lat());
    console.log('Lng', address.geometry.location.lng());
  }


}
