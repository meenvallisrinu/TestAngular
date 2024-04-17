import { Component, OnInit } from '@angular/core';


interface Person {
  name: string;
  age: number;
  gender: string;
}

@Component({
  selector: 'app-retrieval',
  templateUrl: './retrieval.component.html'
})

export class RetrievalComponent implements OnInit {

  people: Person[] = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 35, gender: 'male' },
    { name: 'Emily', age: 40, gender: 'female' },
    { name: 'Michael', age: 45, gender: 'male' }
  ];

  filteredPeople: Person[] = [];
  selectedGender: string = 'all';
  selectedAgeGroup: string = 'all';

  ngOnInit() {
    this.filteredPeople = this.people;
  }

  filterData() {
    this.filteredPeople = this.people.filter(person => {
      if (this.selectedGender !== 'all' && person.gender !== this.selectedGender) {
        return false;
      }
      if (this.selectedAgeGroup !== 'all') {
        if (this.selectedAgeGroup === 'young' && person.age >= 18 && person.age <= 30) {
          return true;
        }
        if (this.selectedAgeGroup === 'middle' && person.age > 30 && person.age <= 50) {
          return true;
        }
        if (this.selectedAgeGroup === 'old' && person.age > 50) {
          return true;
        }
        return false;
      }
      return true;
    });
  }

}
