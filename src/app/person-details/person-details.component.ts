import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  members: any[];
  person: any[];
  projects: any [];
  // editForm: FormGroup

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getMembers();
    // this.updateMember();
    // this.deleteMember(103);
  }

  getMembers() {
    this.personService.findAll().subscribe(result => {
      this.members = result.data;
      this.getPersonDetails(this.members[0].persnr);
    });
  }

  createMember(){
    const person = {
      "persnr": 103,
      "name": "Cihad Saglam",
      "tel": "234234",
      "salaer": "12878.00",
      "chef": 1001,
      "abtnr": 2,
      "wohnort": "Volketswil",
      "eintrittsdatum": "2014-10-21T00:00:00.000Z",
      "bonus": "1110.00"
    };
    this.personService.createOne(person).subscribe(result => {
      console.log('burada: ', result);
    })
  }

  deleteMember(person:number){
    this.personService.deleteOne(person).subscribe(result => {
      console.log('burada: ', result);
    })
  }

  updateMember(){
    const person = {
      "persnr": 103,
      "name": "Cihad Saglammmmm",
      "tel": "234234",
      "salaer": "12878.00",
      "chef": 1001,
      "abtnr": 2,
      "wohnort": "Volketswil",
      "eintrittsdatum": "2014-10-21T00:00:00.000Z",
      "bonus": "1120.00"
    };
    this.personService.updateOne(person).subscribe(result => {
      console.log('burada: ', result);
    })
  }

  getPersonDetails(persnr){
    this.personService.findOne(persnr).subscribe(result => {
      console.log(result.data);
      this.person = result.data.personal[0];
      this.projects = result.data.job;
    })
  }
}
