import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
<!--Cards | Blog section-->
<section class="hero is-link py-4">
    <div class="hero-body">
        <p class="title">
            Earthquake safety
        </p>
        <p class="subtitle">
            To stay safe before, during & after an earthquake, review the following tips
        </p>
    </div>
</section>

<section class="container p-5">
    <div class="columns is-vcentered is-justify-content-space-evenly">
        <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Before an earthquake
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/assets/img/Before_Earthquake.png' style="border-radius: 0px;" width="50" />
                    </figure>
                </div>
                <div class="card-content">
                    Lorem ipsum dolor
                    <a>@managem</a>
                    <a href="#">#newpost</a>
                    <a href="#">#update</a>
                    <br />
                    <time datetime="2016-1-1">16:54 PM - 6 Feb 2021</time>
                </div>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        During an earthquake
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/assets/img/During_Earthquake.png' style="border-radius: 0px;" width="50" />
                    </figure>
                </div>
                <div class="card-content">
                    Lorem ipsum dolor
                    <a>@managem</a>
                    <a href="#">#newpost</a>
                    <a href="#">#update</a>
                    <br />
                    <time datetime="2016-1-1">16:54 PM - 6 Feb 2021</time>
                </div>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        After an earthquake
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/assets/img/After_Earthquake.png' style="border-radius: 0px;" width="50" />
                    </figure>
                </div>
                <div class="card-content">
                    Lorem ipsum dolor
                    <a>@managem</a>
                    <a href="#">#newpost</a>
                    <a href="#">#update</a>
                    <br />
                    <time datetime="2016-1-1">16:54 PM - 6 Feb 2021</time>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
