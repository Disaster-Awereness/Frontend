import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  template: `
  <!--Credits for the menu on https://codepen.io/alvarotrigo/pen/yLzaPVJ-->
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox"/>
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul class="menu__box">
      <li><a class="menu__item" href="#">Home</a></li>
      <li><a class="menu__item" href="#introduction">Introduction</a></li>
			<li><a class="menu__item" href="#definition">Definition</a></li>
			<li><a class="menu__item" href="#countries">Countries</a></li>
			<li><a class="menu__item" href="#consequences">Consequences</a></li>
			<li><a class="menu__item" href="#history">History</a></li>
      <li><a class="menu__item" href="#didyouknow">Did you know?</a></li>
      <li><a class="menu__item" href="#safety">Safety</a></li>
      <li><a class="menu__item" href="#topcountries">Top countries</a></li>
    </ul>
  </div>
  `,
  styles: [`
   #menu__toggle {
    position: fixed;
    opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 2;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 600px;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #E8EAF6;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
  z-index: 1;
  border-radius: 5px;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: "Playfair Display", "Merriweather", "Pt Serif";
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  background-color: #CFD8DC;
}
`]
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
