const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Media Club",
          desc:
            "Media Club is the official campus student media body of the Indian Institute of Technology, Varanasi run by students under the aegis of the Dean of Student Affairs, IIT (BHU)..",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/211320900_180962187377420_3389958147759857433_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bt0ueFmWZ60AX_OCh6Q&_nc_oc=AQmHhGdOJynkgvNy1vlK9kDwbK32JssULq5rCvINygvGcljqiezm3Mca6LmOhxcjHHQ&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBnigXS5TiB3ZYaXcXlUyczo09fCM4mFnuEvtD9O25wPQ&oe=6471BA7E"
        },
        {
          id: 2,
          title: "Animation ",
          desc:
            "VFX & CGI || 3d Modelling & Animation || 2d Animation (Motion Graphics & Anime Designing) || Game Design",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/309658976_466884822138690_910313251999005377_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w2eZC4QnyRcAX94zbCw&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBn83xg82-V5BL--SgOnQ7N0h4uCinJCS_MnbsqHLtWGg&oe=64500327"
        },
        {
          id: 3,
          title: "Photography",
          desc:
            "The Photography Club aims at providing a platform for photographers in the institute to learn.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/299193728_607693507379308_6027726175636853911_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_2jJ3t0YsPEAX8DqY0F&_nc_ht=scontent.fdel29-1.fna&oh=00_AfA1V6721KycTav07_408vMlZT89SYO9Ks5hrTtpi9qLUw&oe=644F24D3"
        },
        {
          id: 4,
          title: "Cine Club",
          desc:
            " ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/295436685_430996852377215_3147398897916205889_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KsyA0EOejMUAX_M4Xia&_nc_ht=scontent.fdel29-1.fna&oh=00_AfACDIAxGeSOSf5iUjV5uLkip4m5SJZU9K2nY7KWZB2IFA&oe=644E982F"
        },
        {
          id: 5,
          title: "Outreach",
          desc:
            "The Outreach Club makes the student body aware of the activities occurring on the social front in institute. ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/299227496_436914928473824_9001919691606469564_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xYL9VIgdjT4AX_jqk3y&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDyenIYhfIh5g23ezdn50SRZDgdKDEVQgi6P5n_LjB8Sw&oe=644EA529"
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