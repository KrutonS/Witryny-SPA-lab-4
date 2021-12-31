import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // #region Ćw 1
  // tekstWZmiennej = 'To jest tekst z pola z pliku .ts';
  // listaSamochodow: string[] = [
  //   'samochod1',
  //   'samochod2',
  //   'samochod3',
  //   'samochod4',
  // ];
  // #endregion

  //#region Ćw 2
  // constructor() {}
  // osoba: Osoba;
  // dzienTygodnia: string;
  // dniTygodnia: string[] = [
  //   'poniedzialek',
  //   'wtorek',
  //   'sroda',
  //   'czwartek',
  //   'piatek',
  //   'sobota',
  //   'niedziela',
  // ];
  // wiek = [...Array(82).keys()].map((x) => x + 18);
  // ngOnInit(): void {
  //   this.osoba = new Osoba();
  //   this.osoba.imie = 'Tomasz';
  //   this.osoba.czyStudent = true;
  //   this.osoba.wiek = 57;
  //   this.osoba.gender = 'male';
  //   this.dzienTygodnia = '';
  // }
  // sendForm(): void {
  //   console.log('osoba: ', this.osoba);
  //   console.log('dzien tygodnia: ', this.dzienTygodnia);
  // }
  //#endregion

  //#region Ćw 3
  // osoba: Osoba;
  // wiek = [...Array(82).keys()].map((x) => x + 18);
  // constructor() {}

  // ngOnInit(): void {
  //   this.wiek.unshift(null);
  //   this.osoba = new Osoba();
  //   this.osoba.imie = 'Tomasz';
  //   this.osoba.czyStudent = true;
  //   this.osoba.gender = 'male';
  // }
  // sendForm(osobaForm: NgForm): void {
  //   console.log('osobaForm: ', osobaForm);
  // }
  // send() {
  //   console.log('osoba: ', this.osoba);
  // }
  // imieChanged(imie: NgModel): void {
  //   console.log('imie model: ', imie);
  // }
  //#endregion

  // #region Ćw 4
  osoba: Osoba;
  osobaForm: FormGroup;
  EMAIL = 'email';
  wiek = [...Array(82).keys()].map((x) => x + 18);
  constructor() {}

  ngOnInit(): void {
    this.intData();
    this.initForm();
  }
  initForm(): void {
    this.osobaForm = new FormGroup({
      imie: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      nazwisko: new FormControl('Kowalski'),
      ulica: new FormControl(null, Validators.required),
      miasto: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      wiek: new FormControl(null, Validators.required),
      czyStudent: new FormControl(null, Validators.required),
      opis: new FormControl(this.osoba.opis),
      gender: new FormControl(true, Validators.required),
    });
  }
  intData(): void {
    this.wiek.unshift(null);
    this.osoba = new Osoba();
    this.osoba.opis = 'przykladowy opis';
  }
  onSubmit(): void {
    console.log('osobaForm: ', this.osobaForm);
    this.osoba.imie = this.osobaForm.value.imie;
    this.osoba.nazwisko = this.osobaForm.value.nazwisko;
    this.osoba.ulica = this.osobaForm.value.ulica;
    this.osoba.miasto = this.osobaForm.value.miasto;
    this.osoba.email = this.osobaForm.get('email').value;
    this.osoba.wiek = this.osobaForm.get('wiek').value;
    this.osoba.czyStudent = this.osobaForm.get('czyStudent').value;
    this.osoba.opis = this.osobaForm.get('opis').value;
    this.osoba.gender = this.osobaForm.get('gender').value;
    console.log('osoba: ', this.osoba);
  }
  // #endregion
}

export class Osoba {
  imie: string;
  nazwisko: string;
  email: string;
  wiek: number;
  czyStudent: boolean;
  opis: string;
  gender: string;

	// #region Ćw 4
	ulica:string;
	miasto:string;
	//#endregion
}
