import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👉 នេះសំខាន់
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-aboutcontact',
  imports: [ FormsModule ],
  templateUrl: './aboutcontact.component.html',
  styleUrl: './aboutcontact.component.css'
})
export class AboutcontactComponent {
  formData: any = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
    files: [] as string[]
  };

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.formData.files = Array.from(input.files).map(file => file.name);
    }
  }

  // showAlert = false;

  sub() {
    // ចាប់ទិន្នន័យចាស់ពី localStorage
    const existingDataJSON = localStorage.getItem('contactList');
    let existingData = [];

    if (existingDataJSON) {
      try {
        existingData = JSON.parse(existingDataJSON);
        if (!Array.isArray(existingData)) {
          existingData = [];
        }
      } catch {
        existingData = [];
      }
    }

    // បន្ថែមទិន្នន័យថ្មីទៅ existingData
    existingData.push({...this.formData});

    // រក្សាទុក list ទាំងមូលវិញទៅ localStorage
    localStorage.setItem('contactList', JSON.stringify(existingData));

    localStorage.setItem('yourKey', 'yourData');
    // this.showAlert = true;

    alert("success !!!")

    // setTimeout(() => {
    //   this.showAlert = false;
    // }, 1500); // hide alert after 3 seconds

    // Reset formData ទៅ initial state
    this.formData = {
      fullName: '',
      email: '',
      subject: '',
      message: '',
      files: []
    };
  }
}
