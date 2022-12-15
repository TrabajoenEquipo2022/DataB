import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/routes/services/user.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm){

  console.log(form.value)

    let {firstName, lastName, email, password, confirmPassword} = form.value

    if (!firstName || !lastName || !email || !password || !confirmPassword){
     
      Swal.fire({
        title: 'ERROR!',
        text: 'Debes llenar todos los campos',
        imageUrl: 'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

      return 
    }

    if(password !== confirmPassword){
     
      Swal.fire({
        title: 'ERROR!',
        text: 'Las contraseñas NO coinciden',
        imageUrl: 'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

      return 
      
    }

    delete form.value.confirmPassword
    
    this.userService.signUp(form.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenidos',
          showConfirmButton: false,
          timer: 2000
        })

        this.router.navigate(['/login'])
      },
      (err) => 
          Swal.fire({
            title: 'ERROR!',
            text: 'Algo ha salido mal...',
            imageUrl: 'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        
      
    )

  }

}
