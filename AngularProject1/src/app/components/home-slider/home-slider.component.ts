import { Component, OnInit} from '@angular/core';
import { ReqproffService } from '../../service/reqproff.service';


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {

  constructor(private reqProff: ReqproffService) { }

  index = 0
  proffs = [{
    nome: '',
    cognome: '',
    materie: []
  }]
  imgurl = ``
  transition = {
    opacity: '1',
    right: '0px'
  }

  imax = 60

  ngOnInit(): void {
    this.reqProff.getProff().subscribe(proffs => {
      this.proffs = JSON.parse(JSON.stringify(proffs))
      this.imgurl = `../../../assets/img/${this.proffs[this.index].nome}.png`
    })
  }

  goBack() {
    var i = this.imax
    var outtran = setInterval(() => {
      this.transition.opacity = `${i / this.imax}`
      this.transition.right = `${-this.imax + i}px`
      i--
      if (i < 0) {
        clearInterval(outtran)
        if (this.index == 0) {
          this.index = this.proffs.length - 1
        } else {
          this.index--
        }
        this.imgurl = `../../../assets/img/${this.proffs[this.index].nome}.png`
        var intran = setInterval(() => {
          this.transition.opacity = `${i / this.imax}`
          this.transition.right = `${this.imax - i}px`
          i++
          if (i > this.imax) {
            clearInterval(intran)
          }
        }, 1)
      }
    }, 1)
  }

  goNext() {
    var i = this.imax
    var outtran = setInterval(() => {
      this.transition.opacity = `${i / this.imax}`
      this.transition.right = `${this.imax - i}px`
      i--
      if (i < 0) {
        clearInterval(outtran)
        if (this.index == this.proffs.length - 1) {
          this.index = 0
        } else {
          this.index++
        }
        this.imgurl = `../../../assets/img/${this.proffs[this.index].nome}.png`
        var intran = setInterval(() => {
          this.transition.opacity = `${i / this.imax}`
          this.transition.right = `${-this.imax + i}px`
          i++
          if (i > this.imax) {
            clearInterval(intran)
          }
        },1)
      }
    }, 1)
  }
}
