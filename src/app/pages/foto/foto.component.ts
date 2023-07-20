import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {

  img: string | null = "";

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const paramName = params.get("img");
      if(paramName === "img-1"){
        this.img = "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600"
      } else if(paramName === "img-2"){
        this.img = "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600"
      } else if(paramName === "img-3"){
        this.img = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600"
      }
      else {
        this.router.navigate(['/']);
      }
    });
  }

  download() : void{
    alert("this function is still under development")
  }
}
