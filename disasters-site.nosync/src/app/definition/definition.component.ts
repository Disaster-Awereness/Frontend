import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  template: `
    <section class="section is-medium" id="definition">
    <div class="columns">
      <div class="column is-half">
      <div class="content">
      <p>
      In a general look, we can say that earthquake is the sudden movement of the Earth that creates the shakes on the ground. In the scientific defination we can say that earthquake occure because of the sudden movement or trembling of the Earth's tectonic plates and creates shakes on the earth surface. This shakes can destroy buildings and break the Earth's surface. If we think the movement on the underwater, that causes the tsunami.
      </p>
      <p>
      Although the Earth looks like a pretty solid place from the surface, it’s actually extremely active just below the surface. The Earth is made of four basic layers: a solid crust, a hot, nearly solid mantle, a liquid outer core and a solid inner core.
      The solid crust and top, stiff layer of the mantle make up a region called the lithosphere. The lithosphere isn’t a continuous piece that wraps around the whole Earth like an eggshell. It’s actually made up of giant puzzle pieces called tectonic plates. 
      </p>
      <p>
      Tectonic plates are constantly shifting as they drift around on the viscous, or slowly flowing, mantle layer below.
      This non-stop movement causes stress on Earth’s crust. When the stresses get too large, it leads to cracks called faults. When tectonic plates move, it also causes movements at the faults. An earthquake is the sudden movement of Earth’s crust at a fault line.
      The location where an earthquake begins is called the epicenter. An earthquake’s most intense shaking is often felt near the epicenter. However, the vibrations from an earthquake can still be felt and detected hundreds, or even thousands of miles away from the epicenter.
      </p>
      <p>
      The energy from an earthquake travels through Earth in vibrations called seismic waves. Scientists can measure these seismic waves on instruments called seismometer. A seismometer detects seismic waves below the instrument and records them as a series of zig-zags.
      Scientists can determine the time, location and intensity of an earthquake from the information recorded by a seismometer. This record also provides information about the rocks the seismic waves traveled through.
      </p>
  </div>
    </div>
    <div class="column">
    <img src="/assets/img/earthquake_diagram.png" alt="How do earthquakes form?" width="80%" height="80%">
    <p class="menu__item" >This graphic is showing the...</p>
    <p class="hide">tectonic movement during an earthquake. The white dot is called <b>Epicenter!</b></p>
    </div>
    </div>
  </section>
  `,
  styles: [`
  .section {
    padding: 80px;
    margins: 0px;
  }

  .menu__item {
    display: block;
    padding: 12px 24px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #e4e6f0, white);
    font-family: "Verdana", "Merriweather", "Pt Serif";
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
  }
  
  .hide {
    font-size: 0%;
    color: #4a4a4a;
    transition-property: font-size;
    transition-duration: .5s;
  }
  
  .menu__item:hover {
    background-color: #CFD8DC;
  }
  
  .menu__item:hover + .hide {
    display: block;
    padding: 12px 24px;
    font-size: 100%;
    color: #6d6f78;
  }

  .content {
    margin-right: 20px;
  }
  `
  ]
})
export class DefinitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
