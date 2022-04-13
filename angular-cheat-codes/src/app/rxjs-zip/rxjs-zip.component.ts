import { Component } from '@angular/core';
import { zip } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-rxjs-zip',
  templateUrl: './rxjs-zip.component.html',
  styleUrls: ['./rxjs-zip.component.scss']
})
export class RxjsZipComponent {

  constructor(private apiService: ApiService) {

    // #ZIP operator combines the two or more observables and then emit them as an array.

    // It is useful if we have to make several HTTP requests at the same time in a component,
    // and we need to WAIT for all requests to be completed before emitting the value.

    const userData = zip(this.getUserDetail(), this.getUserProfile());

    userData.subscribe((data) => {
      // The sequence with which the observables are zipped,
      // is the exact sequence in which they will be emitted in the array.
      let result1 = data[0];
      let result2 = data[1];
    });

  }

  getUserDetail() {
    return this.apiService.getUserDetail();
  }

  getUserProfile() {
    return this.apiService.getUserProfile();
  }

}
