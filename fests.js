const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Kashiyatra",
          desc:
            "Kashiyatra, the annual socio-cultural festival of IIT(BHU) Varanasi is a three day fiesta, aimed towards mesmerizing everyone with enchanting literary, musical and artistic events. It is the largest cultural festival of northern India. IIT(BHU) rests within Asia's biggest residential university, BHU in the holy city of Varanasi.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/313404035_5928951353802359_8740417050682011418_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=OskU2_HTij4AX8dpjOg&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAPk1hJHJaL6OTgBCTWtVMRs3xRaI3-6wVrpxRGo2cdkw&oe=6450112A"
        },
        {
          id: 2,
          title: "FMCWeekend",
          desc:
            "Film and Media Council IIT BHU, Varanasi, has been organizing FMC Weekend since 2014 to inspire the youth about digital arts and are on the path to expand the community. FMC Weekend comprises many events promoting Digital Arts's growth, be it cinematography, photography, journalism, animation, or design.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/273028211_958139281478140_3256643275093458874_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=vTVMwkzZySIAX_0J29B&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCxYELwQWoTOu0HWJT_2VTyOM9TTBXWzVXL_IKL8Fl-uw&oe=644E5821"
        },
        {
          id: 3,
          title: "Jagriti",
          desc:
            "Jagriti is an Annual Socio-Awareness Fest organized by the Social Service Council, IIT (BHU) Varanasi. Jagriti is our endeavor to reach out to more and more people to develop a culture of participation in social-impact-oriented activities.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/337848496_758998032257641_8302133723124897233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=mvRDr2IYbewAX9nY_ep&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDivKnrf5xJTR8cttyelksFW2Vg5r7VWTNbKqKbRkh1-w&oe=644FCE1F"
        },
        {
          id: 4,
          title: "Spardha",
          desc:
            "Spardha is the All India Games & Sports Festival of IIT (BHU), Varanasi. In its glorious history of 35 years, Spardha has grown to become the largest and most awaited sports festival of the country, where athletic competition is drawn from throughout the country. ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/277666464_5009358999157993_7614256691843517004_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6wRrJ6LSknYAX-16nO2&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDUBvnfkZp2_6HMEXHIZGZORH2etaYBSfSdc9cKhlaaTA&oe=644FE3F3"
        },
        {
          id: 5,
          title: "Technex",
          desc:
            "Technex is an annual technical festival organized by the students of Indian Institute of Technology (IIT) BHU, Varanasi. The festival provides a platform for students to showcase their technical and creative abilities through various competitions, workshops, guest lectures, and exhibitions. ",
          photo:
            "https://iitbhulife.files.wordpress.com/2016/05/technex26.jpg?w=410&h=273&zoom=2"
        }
        
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 4) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");







(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  