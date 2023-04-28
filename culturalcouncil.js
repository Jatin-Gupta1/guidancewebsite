const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "IMC",
          desc:
            " Enjoy Indian music and want to learn how the instruments play?Here at the Indian music club, we enjoy and practice a variety of music genres such as Classical, Sufi, Qawwalis to Bollywood, Blues, Pop and even Progressive Rock.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326367028_720328146153262_319130090547670571_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9OloFR771zEAX9sbKGI&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBPeFXeyi3jitdHx9r8lQYJ35Qqg2JnNb5EgyHhbqJGEg&oe=644EA788"
        },
        {
          id: 2,
          title: "WMC",
          desc:
            "Fascinated by the western rock classics? Have a taste for non-mainstream music? Well, the WMC is just the place for you. With their practice room overlooking the gymkhana grounds, the sound of then practising music can be heard by those who hear carefully enough.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/299717399_471458591654997_1535710808000590098_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l-cjO47sVzYAX8oRBLr&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBoDTI9njiU5S7Ka3eE1I_d4t7OOY-gYASzPP_Zbt278g&oe=644FCA02"
        },
        {
          id: 3,
          title: "Quiz Club",
          desc:
            "Do you think you know more than others? Can you bet upon your General Knowledge? Or is your multi-dimensional? If your answer to any of these questions is a “yes”, Quiz club at IIT (BHU) is your next friend. Regular quizzes on various topics are held to increase your knowledge in different fields.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326427992_909678223794810_5846960430971418731_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ieuMg19VN2gAX-vHuGW&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDVBFxhWFQWhLTXAr8336KxKCf-dSdp9LdWE7tocmctjA&oe=644F7972"
        },
        {
          id: 4,
          title: "Dance Club",
          desc:
            " Known as the Dance Freakz (DFZ) they are the dancers. They practice a variety of dance forms such as Hip-Hop, Bollywood, Classical, Freestyle, Contemporary and many others. Even if you have had no experience in dance but have a genuine interest in it, the workshops that they conduct all around the year are sure to get you started.",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/224396299_2713146685498696_4011205517141508450_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ZZChfF9fjhEAX8HZN3_&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBKUnsOLcYfU_sj-1QlwGjZ1bPzapyzDqRh6csX4cLkzA&oe=644E7834"
        },
        {
          id: 5,
          title: "Literary",
          desc:
            " in the literary club, we have some of the most active debaters and poets of the College. Want to discuss the recent book you read? Always wanted to be a part of the mehfil and enjoy poetry? Well, the literary club is just the perfect place to learn. ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/278138015_381955663936187_1179535637763985284_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=huznWQJUrcgAX9e9kHA&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBjjhC-XmiBERCAu9h6sv8mZZ9LRnoQ5UtGCvlhd0rrSQ&oe=644EC28B"
        },
        {
          id: 6,
          title: "Fine Arts",
          desc:
            " Have you been doodling on your notes since school? Were your bedroom walls the canvas for your art? Well, FAC is the best place to be! They are the artists of the College who have contributed to almost every fest of the College.  ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/302144242_155742507101561_2828087317301059890_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZQSDB8coVW0AX_x5j2N&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAkAGb8R-GmW7R2-zSt0Mj2pzEl12cvTsGmw7hGNAKrDQ&oe=64501ABF"
        },
        {
          id: 7,
          title: "Masquerades",
          desc:
            " Early mornings before any competition is when they start, practising till midnight. How else can they be the overall winner in the dramatics category in InterIIT for 3 years? Welcome to the dramatics club of IIT BHU, Masquerades. One of the most hardworking clubs of the College, they are the winner of every fest they go to.  ",
          photo:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326063899_724640739327936_1679723668036773202_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gFIpwAq5SukAX8pvCQj&_nc_ht=scontent.fdel29-1.fna&oh=00_AfClAj3qneQAHjQ9HkiKEdPfUsO-nyXkUbnvPsycSHlBiQ&oe=644F5BF8"
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
          if (this.currentNum >= 6) {
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