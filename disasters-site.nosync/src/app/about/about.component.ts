import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
    <!--About section-->
<section class="hero is-link py-4">
    <div class="hero-body">
        <p class="title">
            About the project
        </p>
        <p class="subtitle">
            Lorem dolor ipsum sit amet
        </p>
        <button
        class="button is-light is-outlined is-medium">
        Learn more
        </button>
    </div>
</section>     

<div class="columns is-vcentered is-justify-content-space-evenly has-background-dark m-0 p-5">
    <div class="column is-one-third">
        <img src="/assets/img/Disaster_awareness.png" style="border-radius: 50%;" width="200" />
    </div>

    <div class="column is-one-third">
        <p class="title is-2 is-spaced has-text-white">
            Our Goal
        </p>
        <p class="subtitle is-6 has-text-white">
            Lorem ipsum dolor sit...
        </p>   
        <button
        class="button is-light is-outlined is-medium">
        Learn more
        </button>
    </div>
</div>
  `,
    styles: [
    ]
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
