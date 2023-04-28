const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Social Project's",
          desc:
            "The Social Projects'​ Club is a part of Social Service Council of IIT(BHU), Varanasi which seeks to contribute to the human community through focused and rigorous approaches to finding different roots and causes for the run-down of society and thereby forecasting its impacts and remedial measures.",
          photo:
            "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/309507667_182573460937249_2978258012791844004_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MZdurKqLZQoAX8RAl62&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBJ7MIdIz3L49wdVJituz3dwpkmO6ootVHw2AdrrtiKUg&oe=64517015"
        },
        {
          id: 2,
          title: "Sahyog",
          desc:
            "Sahyog Club aims to extend a helping hand to those who are socially backwards and underprivileged, mutually share the knowledge and simultaneously make the light of education fathom the darkest part of society.",
          photo:
            "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/305312643_488301723305060_7339931834203902240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PYkLxhA8ZksAX8bphI5&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCwoJy6Is9Hova_ddHWIdVXdidmR1Kev8yjUmLZKu0i_A&oe=64517775"
        },
        {
          id: 3,
          title: "Health & Hygiene",
          desc:
            "The Health and Hygiene club strives to generate and disseminate awareness about the importance of healthy living habits and developing feelings of sanitation, health, hygiene and cleanliness among fellow human beings.",
          photo:
            "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/307743119_406253504993280_7898344200064728542_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I02Le1D2D0sAX8ieXRZ&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDO6ZjZafzFXSYFqYsbi4wOIrfIZuhV3117JbA9WbPfxQ&oe=644FF4D8"
        },
        {
          id: 4,
          title: "Kashi Utkarsh",
          desc:
            " Kashi Utkarsh is a non-profit organization run by the students of Indian Institute of Technology (BHU) Varanasi which has been working since 1997, with the aim to uplift the underprivileged sections of the society. It works for the proliferation of education till the weakest ones in the society and creation of awareness among them for healthcare and hygiene in the backward areas of Varanasi.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/305767632_395940966077221_4237903442911494075_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=S0ZKZHd7U6UAX-r48aJ&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAhFon3j0dx-qB2073tWntNo7bgR_rZbh_LlYykRClxLw&oe=6450A9DC"
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
          if (this.currentNum >= 3) {
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