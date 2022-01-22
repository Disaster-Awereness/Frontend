import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <section class="section is-medium" id="history">
    <div class="columns" style="width:105%">
      <div class="column is-two-fifths">
      <div class="content">
      <p>
        The scientific study of earthquakes is comparatively new. Until the 18th century, few factual descriptions of earthquakes were recorded, and the natural cause of earthquakes was little understood. Those who did look for natural causes often reached conclusions that seem fanciful today; one popular theory was that earthquakes were caused by air rushing out of caverns deep in the Earth's interior.
      </p>
      <p>
        The earliest earthquake for which we have descriptive information occurred in China in 1177 B.C. The Chinese earthquake catalog describes several dozen large earthquakes in China during the next few thousand years. Earthquakes in Europe are mentioned as early as 580 B.C., but the earliest for which we have some descriptive information occurred in the mid-16th century. The earliest known earthquakes in the Americas were in Mexico in the late 14th century and in Peru in 1471, but descriptions of the effects were not well documented. By the 17th century, descriptions of the effects of earthquakes were being published around the world - although these accounts were often exaggerated or distorted.
      </p>
      <p>
        The most widely felt earthquakes in the recorded history of North America were a series that occurred in 1811-1812 near New Madrid, Missouri. A great earthquake, whose magnitude is estimated to be about 8, occurred on the morning of December 16, 1811. Another great earthquake occurred on January 23, 1812, and a third, the strongest yet, on February 7, 1812. Aftershocks were nearly continuous between these great earthquakes and continued for months afterwards. These earthquakes were felt by people as far away as Boston and Denver. Because the most intense effects were in a sparsely populated region, the destruction of human life and property was slight. If just one of these enormous earthquakes occurred in the same area today, millions of people and buildings and other structures worth billions of dollars would be affected.
      </p>
      <p>
        The San Francisco earthquakes of 1906 was one of the most destructive in the recorded history of North America - the earthquake and the fire that followed killed nearly 700 people and left the city in ruins.
      </p>
      <p>
        The Alaska earthquake of March 27, 1964, was of greater magnitude than the San Francisco earthquake; it released perhaps twice as much energy and was felt over an area of almost 500,000 square miles.
        The ground motion near the epicenter was so violent that the tops of some trees were snapped off. One hundred and fourteen people (some as far away as California) died as a result of this earthquake, but loss of life and property would have been far greated had Alaska been more densely populated.
      </p>
      <p>
        A few years later in 1976, Tangshan in China and its surrounding regions were stuck by an 7.6 magnitude earthquake that was the heaviest in recent history. In the current century, the 2004 Indian Ocean earthquake that was followed by a tsunami hitting large coastal parts in Asia, Africa and even Australia made worldwide news because of its huge impact on many lives. In 2010, the small island state Haiti was also hit by an earthquake that left huge parts of the country homeless, being the most severa event in the last year.
      </p>
  </div>
      </div>
      <div class="column">

      <section class="timeline timeline-clippy timeline-star">
        <ul>
          <li>
            <div style="background:#A8E6CF">
              <time><b>1177 B.C.</b></time>
              China - First every described earthquake
            </div>
          </li>
          <li>
            <div style="background:#DCEDC1; text-align: right">
              <time><b>580 B.C.</b></time>
              Europe - First mentioned on continent
            </div>
          </li>
          <li>
            <div style="background:#FFD3B6">
              <time><b>1471</b></time>
              Peru - One of first known American events
            </div>
          </li>
          <li>
          <div style="background:#FFAAA5; text-align: right">
            <time><b>17th century</b></time>
            Global knowledge about earthquakes
          </div>
        </li>
        <li>
          <div style="background:#FF8B94">
            <time><b>1811-12</b></time>
            Missouri - Americas most widely felt event
          </div>
        </li>
        <li>
          <div style="background:#A8E6CF; text-align: right">
          <time><b>1906</b></time>
          San Francisco - Tragic earthquake impact
          </div>
        </li>
        <li>
          <div style="background:#DCEDC1">
          <time><b>1964</b></time>
          Alaska - Biggest event in the 20th century
          </div>
        </li>
        <li>
          <div style="background:#FFD3B6; text-align: right">
            <time><b>1976</b></time>
            China - Heavy earthquake in Tangshan
          </div>
        </li>
        <li>
          <div style="background:#FFAAA5">
            <time><b>2004</b></time>
            Indian Ocean - Caused a dramatic tsunami
          </div>
        </li>
        <li>
          <div style="background:#FF8B94; text-align: right">
            <time><b>2010</b></time>
            Haiti - most recent huge earthquake
          </div>
        </li>
          <!-- more earthquake events can be added here -->
        </ul>
      </section>

      </div>
    </div>
  </section>
  `,

  styles: [`
  .section {
    padding: 80px;
    margins: 0px;
  }

  .timeline ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: #c7c7c7;
  }
  
  .timeline ul li::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: inherit;
    z-index: 1;
    background: #fff;
    transition: background .5s ease-in-out;
  }

  .timeline ul li div {
    position: relative;
    bottom: 0;
    width: 400px;
    padding: 12px;
    background: #F45B69;
    visibility: hidden;
    opacity: 0;
    transition: all .5s ease-in-out;
  }
  
  .timeline ul li div::before {
    content: '';
    position: absolute;
    bottom: 7px;
    width: 0;
    height: 0;
    border-style: solid;
  }

  .timeline ul li:nth-child(odd) div {
    left: 45px;
    transform: translate3d(200px,0,0);
  }
  
  .timeline ul li:nth-child(odd) div::before {
    left: -15px;
    z-index: -99;
    border-width: 8px 16px 8px 0;
    border-color: transparent #c7c7c7 transparent transparent;
  }

  .timeline ul li:nth-child(even) div {
    left: -439px;
    transform: translate3d(-200px,0,0);
  }
  
  .timeline ul li:nth-child(even) div::before {
    right: -15px;
    z-index: -99;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent #c7c7c7;
  }

  .timeline ul li.in-view div {
    transform: none;
    visibility: visible;
    opacity: 1;
  }

  .timeline ul li.in-view::after {
    background: #a6a6a6;
  }

  @media screen and (max-width: 900px) {
    .timeline ul li div {
      width: 250px;
    }
    .timeline ul li:nth-child(even) div {
      left: -289px; /*250+45-6*/
    }
  }
  `
  ]
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    function isElementInViewport(el:any) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    var items = document.querySelectorAll(".timeline li");

    /*isElementInViewport function above is used here: 
      To make the nice effect of earthquakes sliding in */

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }
}
