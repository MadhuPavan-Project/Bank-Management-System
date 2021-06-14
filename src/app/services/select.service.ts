import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';

@Injectable()
export class SelectService {

  getCountries() {
    return [
     new Country(1, 'Afghanistan' ),
     new Country(2, 'Brazil' ),
     new Country(3, 'India' ),
     new Country(4, 'Japan' ),
     new Country(5, 'United States')
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Badakhshan' ),
     new State(2, 1, 'Badghis' ),
     new State(3, 1, 'Daykondi'),
     new State(4, 1, 'Farah'),
     new State(5, 2, 'Belait' ),
     new State(6, 2, 'Brunei and Muara'),
     new State(7, 2, 'Tutong' ),
     new State(8, 3, 'Andaman and Nicobar Islands' ),
     new State(9, 3, 'Andhra Pradesh' ),
     new State(10, 3, 'Assam' ),
     new State(11, 3, 'Bihar' ),
     new State(12, 3, 'Delhi' ),
     new State(13, 3, 'Goa' ),
     new State(14, 3, 'Gujarat' ),
     new State(15, 3, 'Maharashtra' ),
     new State(16, 3, 'Punjab' ),
     new State(17, 3, 'Rajasthan' ),
     new State(18, 3, 'Tamil Nadu' ),
     new State(19, 4, 'Aichi' ),
     new State(20, 4, 'Akita' ),
     new State(21, 4, 'Chiba' ),
     new State(22, 4, 'Hiroshima' ),
     new State(23, 4, 'Nagasaki' ),
     new State(24, 5, 'Alabama' ),
     new State(25, 5, 'Alaska' ),
     new State(26, 5, 'Arizona' ),
     new State(27, 5, 'California' ),
     new State(28, 5, 'Florida' ),
     new State(29, 5, 'Georgia' ) 

    ];
  }
}