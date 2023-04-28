const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "COPS",
          desc:
            "In this age of increasing automation, programming is not limited to only computer science and related fields. Every competent engineer needs to know how to program. This makes Club of Programmers one of the most important clubs in the institute.",
          photo:
            "https://yt3.googleusercontent.com/ytc/AGIKgqNdJV6JXHQZIDYVz5F0xScWBZpd6iq1pu5W_r-q=s900-c-k-c0x00ffffff-no-rj"
        },
        {
          id: 2,
          title: "Biz Club",
          desc:
            "The Business Club IIT (BHU) aims to build a robust business culture, nurture the brilliant technological minds of the institution, and impart insight into the business side of the world. The Club segregates its endeavours into the five pillars of Consulting, Product Management, Economics, Finance and Analytics.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/309392084_463011595853426_5213995697497967959_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BhaSm3Lf1TUAX-jcTXE&_nc_ht=scontent.fdel29-1.fna&oh=00_AfD4UHF7cLkyo2dvVi70WtxBVzINxAZlZUbvLivKk7u8eQ&oe=645105DA"
        },
        {
          id: 3,
          title: "Astro Club",
          desc:
            "The Astronomy Club IIT BHU, an ambitious team driven by amateur astronomers, strives to quench students' thirst for astronomy by organizing various exciting events, from observational sessions to astroquizzes, telescope handling to Radio Astronomy, publishing the Club's very own corona magazine and many more.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326415704_866887697953486_8813043471505402028_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xovO_PBOFoEAX8Igrcp&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDJCQQ3NUsHQQJmJ3ywjJ4OaZvv6i9gyFhJ83He8OZuNA&oe=644F9B4D"
        },
        {
          id: 4,
          title: "Aeromodelling",
          desc:
            " The Aeromodelling Club of IIT(BHU) Varanasi is one of the premier clubs for technical exploration in the institute. It deals with anything that is capable of flight from drones and planes to rockets and boomerangs. It draws participation from over a thousand students across branches for various events and technical activities",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/75485941_2419346054986175_722955682973745152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=1Eu7IDG6XugAX-HKn3f&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDnd5lVWgaeX8bUurWYQybiN2oBSAI6ImEkPyUnH8YNsg&oe=64730A61"
        },
        {
          id: 5,
          title: "CSI",
          desc:
            "The Club of Sustainability and Innovation(CSI) is a single strong community of like-minded individuals from IIT (BHU) who aim to develop disruptive technological innovations which will help the country and the society at large towards a sustainable future. ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-1/309358385_467848408703820_1117261447555944038_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=c6021c&_nc_ohc=0UvCXqambFEAX-d0H8b&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDyRNlmF1JloymkMwRlYnTvJSHuuW7tnbxxoUJPdoXqPw&oe=644F87A4"
        },
        {
          id: 6,
          title: "SAE",
          desc:
            "SAE(Society of Automotive Engineers).At SAE Collegiate Club, we learn, research ,design, manufacture new ideas and Projects related to Automotive systems and Engineering . We currently under Science and technology Council at IIT (BHU) Varanasi. Automobile Enthusiastic, RC Cars, SAE BAJA and many more projects are a part of our team. . ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326757044_444192997822000_816275167146029256_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Nl0tgLgqGh8AX9_0YNQ&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAHa42rHr1Cn7BKzip98xVQVTL7WrJUW6Q5FQPaB4wlgg&oe=644F8AB7"
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
          if (this.currentNum >= 5) {
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