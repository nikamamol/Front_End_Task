$(document).ready(function () {

  // Scroll Animations 
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();

  ScrollTrigger.matchMedia({
    // all Devices 
    "all": function () {
      if ($(".is--scrolling").length) {

        ScrollTrigger.create({
          trigger: '.home-banner',
          start: 'top top',
          end: '100%',
          // endTrigger: '.overview-sec',
          pin: true,
          pinSpacing: false,
          // markers: true
        });
        gsap.to('.hero-banner-caption-txt', 1, {
          yPercent: -70,
          duration: 1,
          ease: 'Expo.easeOut',
          scrollTrigger: {
            trigger: '.home-banner',
            start: 'top-=5 top',
            scrub: 2,
            //markers: true,
            //id: "caption"
          },
        });
        gsap.to('.hero-banner-video', 1, {
          scale: 1.1,
          duration: 1,
          ease: 'Expo.easeOut',
          scrollTrigger: {
            trigger: '.home-banner',
            start: 'top-=5 top',
            scrub: 1,
            //markers: true,
            //id: "caption"
          },
        });

        gsap.from('.sec2-anim-1', 1, {
          y: 30,
          opacity: 0,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.sec2',
            start: 'top-=250 top+=200',
            end: 'top-=250 top+=200',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'sec2_Heading',
          },
        });

        let sec2_anim = gsap.utils.toArray(".sec2");
        sec2_anim.forEach((sec2_anim_anim) => {
          // let sec2_anim_1 = sec2_anim_anim.querySelectorAll(".sec2-anim-1");
          let sec2_anim_2 = sec2_anim_anim.querySelectorAll(".sec2-anim-2");
          let sec2_anim_3 = sec2_anim_anim.querySelectorAll(".sec2-anim-3");

          gsap
            .timeline({
              scrollTrigger: {
                trigger: sec2_anim,
                start: 'top+=100 top+=200',
                end: 'top+=100 top+=200',
                scrub: 2,
                // markers: true,
                // id: "sec2-anim"
              }
            })
            .from(sec2_anim_2, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1.5,
              ease: 'expo.InOut',
            })
            .from(sec2_anim_3, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });

        if ($(".is--scrolling.item-3").length) {
          // Offering JS
          ScrollTrigger.create({
            trigger: '.firms-modernizing-offering',
            start: 'top top',
            end: '+=1500',
            // endTrigger: '.caption-cnt5',
            pin: true,
            pinSpacing: true,
            // markers: true,
            // id: "Offering_section_3"
          });
        } else if ($(".is--scrolling.item-4").length) {
          // Offering JS
          ScrollTrigger.create({
            trigger: '.item-4 .firms-modernizing-offering',
            start: 'top top',
            end: '+=2200',
            // endTrigger: '.caption-cnt5',
            pin: true,
            pinSpacing: true,
            // markers: true,
            // id: "Offering_section_Item4"
          });
        } else if ($(".is--scrolling.item-5").length) {
          // Offering JS
          ScrollTrigger.create({
            trigger: '.item-5 .firms-modernizing-offering',
            start: 'top top',
            end: '+=2600',
            // endTrigger: '.caption-cnt5',
            pin: true,
            pinSpacing: true,
            // markers: true,
            // id: "Offering_section_Item5"
          });
        }


        // Offering Anim 1
        gsap.to('.firms-modernizing-offering .circle-bg1', 1, {
          scale: 8,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt11',
            start: 'top-=75 top',
            end: 'top+=600 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'Circle BG 1',
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt11 .offering-anim-1_a', 1, {
          x: -100,
          opacity: 0,
          // stagger: 0.3,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt11',
            start: 'top top',
            end: 'top top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: "h2-head"
          },
        });
        gsap.to('.firms-modernizing-offering .caption-cnt11', 1, {
          zIndex: 1,
          duration: 1,
          ease: 'expo.InOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt11',
            start: 'top top',
            end: 'top top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt11',
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt11 .offering-anim-1_b', 1, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt11',
            start: 'top top',
            end: 'top top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: "h2-head-arrow"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt11 .offering-anim-1_a', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt11',
            start: 'top+=600 top',
            end: 'top+=600 top',
            scrub: 1,
            // markers: true,
            // id: ".offering-anim-1_a_OUT"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt11 .offering-anim-1_b', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt11',
            start: 'top+=600 top',
            end: 'top+=600 top',
            scrub: 1,
            // markers: true,
            // id: ".offering-anim-1_b_OUT"
          },
        });

        // Offering Anim 2 
        gsap.from('.firms-modernizing-offering .caption-cnt21', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=600 top',
            end: 'top+=600 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt21',
          },
        });
        gsap.to('.firms-modernizing-offering .caption-cnt21', 1, {
          zIndex: 1,
          duration: 1,
          ease: 'expo.InOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=600 top',
            end: 'top+=600 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt21',
          },
        });
        gsap.to('.firms-modernizing-offering .circle-bg2', 1, {
          scale: 8,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=600 top',
            end: 'top+=1600 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'Circle BG 2',
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt21 .offering-anim-2_a', 1, {
          x: 100,
          opacity: 0,
          // stagger: 0.3,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=800 top',
            end: 'top+=800 top',
            scrub: 1,
            /*once: true,*/
            // markers: true,
            // id: "h2-head-2"
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt21 .offering-anim-2_b', 1, {
          x: -100,
          opacity: 0,
          // stagger: 0.3,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=800 top',
            end: 'top+=800 top',
            scrub: 1,
            /*once: true,*/
            // markers: true,
            // id: "h2-head-2"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt21 .offering-anim-2_a', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=1200 top',
            end: 'top+=1200 top',
            scrub: 1,
            // markers: true,
            // id: "h2-head2-hide"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt21 .offering-anim-2_b', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt21',
            start: 'top+=1200 top',
            end: 'top+=1200 top',
            scrub: 1,
            // markers: true,
            // id: "h2-head2-hide"
          },
        });

        // Offering Anim 3
        gsap.from('.firms-modernizing-offering .caption-cnt31', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1200 top',
            end: 'top+=1200 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt3',
          },
        });
        gsap.to('.firms-modernizing-offering .caption-cnt31', 1, {
          zIndex: 1,
          duration: 1,
          ease: 'expo.InOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1200 top',
            end: 'top+=1200 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt31',
          },
        });
        gsap.to('.firms-modernizing-offering .circle-bg3', 1, {
          scale: 8,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1200 top',
            end: 'top+=2400 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'Circle BG 3',
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt31 .offering-anim-3_a', 1, {
          x: -100,
          opacity: 0,
          // stagger: 0.3,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1400 top',
            end: 'top+=1400 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: ".item-4_IN"
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt31 .offering-anim-3_b', 1, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1400 top',
            end: 'top+=1400 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: "h2-head-arrow"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt31 .offering-anim-3_a', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1800 top',
            end: 'top+=1800 top',
            scrub: 1,
            // markers: true,
            // id: "3A_OUT"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt31 .offering-anim-3_b', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt31',
            start: 'top+=1800 top',
            end: 'top+=1800 top',
            scrub: 1,
            // markers: true,
            // id: "3B_OUT"
          },
        });

        // Offering Anim 4
        gsap.from('.firms-modernizing-offering .caption-cnt41', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=1800 top',
            end: 'top+=1800 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt_41',
          },
        });
        gsap.to('.firms-modernizing-offering .caption-cnt41', 1, {
          zIndex: 1,
          duration: 1,
          ease: 'expo.InOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=1800 top',
            end: 'top+=1800 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt21',
          },
        });
        gsap.to('.firms-modernizing-offering .circle-bg4', 1, {
          scale: 8,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=1800 top',
            end: 'top+=2400 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'Circle BG 4',
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt41 .offering-anim-4_a', 1, {
          x: 100,
          opacity: 0,
          // stagger: 0.3,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=2000 top',
            end: 'top+=2000 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: "offering-anim-4_a"
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt41 .offering-anim-4_b', 1, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=2000 top',
            end: 'top+=2000 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: "offering-anim-4_b"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt41 .offering-anim-4_a', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=2200 top',
            end: 'top+=2200 top',
            scrub: 1,
            // markers: true,
            // id: "h2-head2-hide"
          },
        });
        gsap.fromTo('.firms-modernizing-offering .caption-cnt41 .offering-anim-4_b', 1, {
          x: 0,
        }, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt41',
            start: 'top+=2200 top',
            end: 'top+=2200 top',
            scrub: 1,
            // markers: true,
            // id: "h2-head2-hide"
          },
        });


        // Offering Anim 5
        gsap.from('.firms-modernizing-offering .caption-cnt51', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt51',
            start: 'top+=2200 top',
            end: 'top+=2200 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt3',
          },
        });
        gsap.to('.firms-modernizing-offering .caption-cnt51', 1, {
          zIndex: 1,
          duration: 1,
          ease: 'expo.InOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt51',
            start: 'top+=2200 top',
            end: 'top+=2200 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt51',
          },
        });
        gsap.to('.firms-modernizing-offering .circle-bg5', 1, {
          scale: 8,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt51',
            start: 'top+=2200 top',
            end: 'top+=3000 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'Circle BG 3',
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt51 .offering-anim-5_a', 1, {
          x: -100,
          opacity: 0,
          // stagger: 0.3,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt51',
            start: 'top+=2400 top',
            end: 'top+=2400 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: ".item-4_IN"
          },
        });
        gsap.from('.firms-modernizing-offering .caption-cnt51 .offering-anim-5_b', 1, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.firms-modernizing-offering .caption-cnt51',
            start: 'top+=2400 top',
            end: 'top+=2400 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: "h2-head-arrow"
          },
        });
        // gsap.fromTo('.firms-modernizing-offering .caption-cnt51 .offering-anim-5_a', 1, {
        //   x: 0,
        // }, {
        //   opacity: 0,
        //   x: -100,
        //   duration: 1,
        //   ease: 'Power1.easeOut',
        //   scrollTrigger: {
        //     trigger: '.firms-modernizing-offering .caption-cnt51',
        //     start: 'top+=2600 top',
        //     end: 'top+=2600 top',
        //     scrub: 1,
        //     // markers: true,
        //     // id: "3A_OUT"
        //   },
        // });
        // gsap.fromTo('.firms-modernizing-offering .caption-cnt51 .offering-anim-5_b', 1, {
        //   x: 0,
        // }, {
        //   opacity: 0,
        //   x: 100,
        //   duration: 1,
        //   ease: 'Power1.easeOut',
        //   scrollTrigger: {
        //     trigger: '.firms-modernizing-offering .caption-cnt51',
        //     start: 'top+=2600 top',
        //     end: 'top+=2600 top',
        //     scrub: 1,
        //     // markers: true,
        //     // id: "3B_OUT"
        //   },
        // });


      }
    },
    // TAB Devices 
    '(min-width: 760px)': function () {
      if ($(".is--scrolling").length) {

        gsap.from('.video-sec', 1, {
          scale: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.sec2',
            start: 'top-=50 top+=200',
            end: 'top-=50 top+=200',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'video-sec',
          },
        });
        gsap.to('.video-sec', 1, {
          x: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.sec2',
            start: 'top+=100 top+=200',
            end: 'top+=100 top+=200',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'video-sec_left',
          },
        });
        // key-features New Code Start
        var get_keyFeaturesTop = $('#key-features').offset();
        $('.key-features-ul li').on('click', 'a', function (e) {
          e.preventDefault();
          var getLink = parseInt($(this).attr('data-target'));
          $('body, html').animate({
            scrollTop: get_keyFeaturesTop.top + getLink
          }, 700);
        });
        // key-features New Code End

        // Key Featues 
        ScrollTrigger.create({
          trigger: '.firms-modernizing',
          start: 'top top',
          end: '+=3500',
          // endTrigger: '.caption-cnt5',
          pin: true,
          pinSpacing: true,
          // markers: true,
          // id: "FIXED_HEAD"
        });
        let caption_head_ani = gsap.utils.toArray(".firms-modernizing");
        caption_head_ani.forEach((caption_head_anim) => {
          let slideLeft = caption_head_anim.querySelector(".slideLeft");
          let slideRight = caption_head_anim.querySelector(".slideRight");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_head_ani,
              start: "top-=50 center-=100",
              end: "top-=50 center-=100",
              scrub: 2,
              // markers: true,
              // id: "caption-cnt_Head"
            }
          })
            .from(slideLeft, {
              x: -30,
              opacity: 0,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(slideRight, {
              x: 30,
              opacity: 0,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt1 = gsap.utils.toArray(".caption-cnt1");
        caption_cnt1.forEach((caption_cnt1_anim) => {
          let caption1_cnt = document.querySelector(".caption-cnt1");
          let key_features_ul_li = caption_cnt1_anim.querySelectorAll(".key-features-ul li");
          let sec2_head = caption_cnt1_anim.querySelectorAll(".animateBlockUp");
          let caption_img = caption_cnt1_anim.querySelectorAll(".animateBlockUpList");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt1,
              start: "top center-=100",
              end: "top center-=100",
              scrub: 2,
              // markers: true,
              // id: "caption-cnt1"
            }
          })
            .to(caption1_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li, 1, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(sec2_head, 1, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img, 1, {
              opacity: 0,
              y: 30,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt2 = gsap.utils.toArray(".caption-cnt2");
        caption_cnt2.forEach((caption_cnt2_anim) => {
          let caption2_cnt = document.querySelector(".caption-cnt2");
          let key_features_ul_li = caption_cnt2_anim.querySelectorAll(".key-features-ul li");
          let caption_img_2 = caption_cnt2_anim.querySelectorAll(".animateBlockUpList");
          let caption2_head = caption_cnt2_anim.querySelectorAll(".animateBlockUp");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt2,
              start: 'top+=500 top',
              end: 'top+=500 top',
              scrub: 2,
              // markers: true,
              // id: "caption-cnt2"
            }
          })
            .to(caption2_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li, 1, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(caption2_head, 1, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img_2, 1, {
              opacity: 0, y: 30, stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt3 = gsap.utils.toArray(".caption-cnt3");
        caption_cnt3.forEach((caption_cnt3_anim) => {
          let caption3_cnt = document.querySelector(".caption-cnt3");
          let key_features_ul_li_3 = caption_cnt3_anim.querySelectorAll(".key-features-ul li");
          let caption_img_3 = caption_cnt3_anim.querySelectorAll(".animateBlockUpList");
          let caption3_head = caption_cnt3_anim.querySelectorAll(".animateBlockUp");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt3,
              start: 'top+=1000 top',
              end: 'top+=1000 top',
              scrub: 2,
              // markers: true,
              // id: "caption-cnt3"
            }
          })
            .to(caption3_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li_3, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(caption3_head, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img_3, {
              opacity: 0,
              y: 30,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt4 = gsap.utils.toArray(".caption-cnt4");
        caption_cnt4.forEach((caption_cnt4_anim) => {
          let caption4_cnt = document.querySelector(".caption-cnt4");
          let key_features_ul_li_4 = caption_cnt4_anim.querySelectorAll(".key-features-ul li");
          let caption_img_4 = caption_cnt4_anim.querySelectorAll(".animateBlockUpList");
          let caption4_head_4 = caption_cnt4_anim.querySelectorAll(".animateBlockUp");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt4,
              start: 'top+=1500 top',
              end: 'top+=1500 top',
              scrub: 2,
              // markers: true,
              // id: "caption-cnt4"
            }
          })
            .to(caption4_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li_4, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(caption4_head_4, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img_4, {
              opacity: 0,
              y: 30,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt5 = gsap.utils.toArray(".caption-cnt5");
        caption_cnt5.forEach((caption_cnt5_anim) => {
          let caption5_cnt = document.querySelector(".caption-cnt5");
          let key_features_ul_li_5 = caption_cnt5_anim.querySelectorAll(".key-features-ul li");
          let caption_img_5 = caption_cnt5_anim.querySelectorAll(".animateBlockUpList");
          let caption5_head_5 = caption_cnt5_anim.querySelectorAll(".animateBlockUp");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt5,
              start: 'top+=2000 top',
              end: 'top+=2000 top',
              scrub: 2,
              // markers: true,
              // id: "caption-cnt5"
            }
          })
            .to(caption5_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li_5, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(caption5_head_5, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img_5, {
              opacity: 0,
              y: 30,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt6 = gsap.utils.toArray(".caption-cnt6");
        caption_cnt6.forEach((caption_cnt6_anim) => {
          let caption6_cnt = document.querySelector(".caption-cnt6");
          let key_features_ul_li_6 = caption_cnt6_anim.querySelectorAll(".key-features-ul li");
          let caption_img_6 = caption_cnt6_anim.querySelectorAll(".animateBlockUpList");
          let caption6_head_6 = caption_cnt6_anim.querySelectorAll(".animateBlockUp");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt6,
              start: 'top+=2500 top',
              end: 'top+=2500 top',
              scrub: 2,
              // markers: true,
              // id: "caption-cnt6"
            }
          })
            .to(caption6_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li_6, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(caption6_head_6, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img_6, {
              opacity: 0,
              y: 30,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        let caption_cnt7 = gsap.utils.toArray(".caption-cnt7");
        caption_cnt7.forEach((caption_cnt7_anim) => {
          let caption7_cnt = document.querySelector(".caption-cnt7");
          let key_features_ul_li_7 = caption_cnt7_anim.querySelectorAll(".key-features-ul li");
          let caption_img_7 = caption_cnt7_anim.querySelectorAll(".animateBlockUpList");
          let caption7_head_7 = caption_cnt7_anim.querySelectorAll(".animateBlockUp");

          gsap.timeline({
            scrollTrigger: {
              trigger: caption_cnt7,
              start: 'top+=3000 top',
              end: 'top+=3000 top',
              scrub: 2,
              // markers: true,
              // id: "caption-cnt7"
            }
          })
            .to(caption7_cnt, 1, {
              zIndex: 1,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(key_features_ul_li_7, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              ease: 'expo.InOut',
            })
            .from(caption7_head_7, {
              y: 30,
              opacity: 0,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })
            .from(caption_img_7, {
              opacity: 0,
              y: 30,
              stagger: 0.8,
              duration: 1,
              delay: 1,
              ease: 'expo.InOut',
            })

        });
        gsap.from('.caption-cnt2', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.caption-cnt2',
            start: 'top+=500 top',
            end: 'top+=500 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt2',
          },
        });
        gsap.from('.caption-cnt3', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.caption-cnt3',
            start: 'top+=1000 top',
            end: 'top+=1000 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt3',
          },
        });
        gsap.from('.caption-cnt4', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.caption-cnt4',
            start: 'top+=1500 top',
            end: 'top+=1500 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt4',
          },
        });
        gsap.from('.caption-cnt5', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.caption-cnt5',
            start: 'top+=2000 top',
            end: 'top+=2000 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt5',
          },
        });
        gsap.from('.caption-cnt6', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.caption-cnt6',
            start: 'top+=2500 top',
            end: 'top+=2500 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt6',
          },
        });
        gsap.from('.caption-cnt7', 1, {
          opacity: 0,
          duration: 1,
          ease: 'Power2.out',
          scrollTrigger: {
            trigger: '.caption-cnt7',
            start: 'top+=3000 top',
            end: 'top+=3000 top',
            scrub: 1,
            // once: true,
            // markers: true,
            // id: 'caption-cnt7',
          },
        });

      }
    },
    // Mobile Devices 
    '(max-width: 700px)': function () {
      gsap.from('.video-sec', 1, {
        scale: 0.6,
        opacity: 0,
        duration: 1,
        ease: 'Power2.out',
        scrollTrigger: {
          trigger: '.sec2',
          start: 'top-=50 top+=200',
          end: 'top-=50 top+=200',
          scrub: 1,
          // once: true,
          // markers: true,
          // id: 'video-sec',
        },
      });

      let caption_head_ani = gsap.utils.toArray(".firms-modernizing");
      caption_head_ani.forEach((caption_head_anim) => {
        let slideLeft = caption_head_anim.querySelector(".slideLeft");
        let slideRight = caption_head_anim.querySelector(".slideRight");

        gsap.timeline({
          scrollTrigger: {
            trigger: caption_head_ani,
            start: "top-=50 center-=100",
            end: "top-=50 center-=100",
            scrub: 2,
            // markers: true,
            // id: "caption-cnt_Head"
          }
        })
          .from(slideLeft, {
            x: -30,
            opacity: 0,
            duration: 1,
            ease: 'expo.InOut',
          })
          .from(slideRight, {
            x: 30,
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: 'expo.InOut',
          })

      });
      var boxes = gsap.utils.toArray(".firms-modernizing .caption-cnt");
      boxes.forEach((panel_para) => {
        gsap.fromTo(panel_para, 1, {
          opacity: 0,
          y: 300,
        }, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: panel_para,
            start: "top-=350 center-=100",
            end: "top-=350 center-=100",
            scrub: 1,
            // markers: true,
            // id: "caption-cnt"
          },
        });
      });

    },
    // 1024px and above Devices 
    // '(min-device-width: 768px) and (max-device-width: 992px)': function () {}

  });

  //hero banner Slider
  var hero_slider_length = $(".hero_slider_carousel").find('.item').length;
  //alert(hero_slider_length);		
  $(".hero_slider_carousel").owlCarousel({
    dots: hero_slider_length > 1 ? true : false,
    nav: hero_slider_length > 1 ? false : false,
    touchDrag: hero_slider_length > 1 ? true : false,
    mouseDrag: hero_slider_length > 1 ? true : false,
    loop: hero_slider_length > 1 ? true : false,
    autoplay: hero_slider_length > 1 ? true : false,
    autoplayTimeout: hero_slider_length > 1 ? 2000 : false,
    autoplayHoverPause: hero_slider_length > 1 ? true : false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  /* ------------- LOGO SLIDER ---------------*/
  var logo_slider_length = $("#logo-carousel").find('.item').length;
  $("#logo-carousel").owlCarousel({
    dots: logo_slider_length > 1 ? false : false,
    dotsData: logo_slider_length > 1 ? false : false,
    nav: logo_slider_length > 1 ? true : false,
    touchDrag: logo_slider_length > 1 ? true : false,
    mouseDrag: logo_slider_length > 1 ? true : false,
    loop: logo_slider_length > 1 ? true : false,
    autoplay: logo_slider_length > 1 ? true : false,
    autoplayTimeout: logo_slider_length > 1 ? 1000 : false,
    autoplayHoverPause: logo_slider_length > 1 ? true : false,
    margin: 30,
    responsive: {
      0: {
        items: 2,
        slideBy: 2,
      },
      600: {
        items: 2,
        slideBy: 2,
      },
      768: {
        items: 3,
        slideBy: 3,
      },
      1030: {
        items: 4,
        slideBy: 4,
      }
    }
  });


  var testimonial_video_slider_length = $(".testimonial-slider").find('.item').length;
  $(".testimonial-slider").owlCarousel({
    dots: testimonial_video_slider_length > 1 ? true : false,
    nav: testimonial_video_slider_length > 1 ? false : false,
    touchDrag: testimonial_video_slider_length > 1 ? true : false,
    mouseDrag: testimonial_video_slider_length > 1 ? true : false,
    loop: testimonial_video_slider_length > 1 ? true : false,
    autoplay: testimonial_video_slider_length > 1 ? true : false,
    autoplayTimeout: testimonial_video_slider_length > 1 ? 2000 : false,
    autoplayHoverPause: testimonial_video_slider_length > 1 ? true : false,
    // margin: 30, 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 1
      },
      1030: {
        items: 1
      }
    }
  });

  var item_slider_length = $(".item-slider-carousel").find('.item').length;
  owl = $(".item-slider-carousel");
  owl.owlCarousel({
    dots: item_slider_length > 1 ? false : false,
    nav: item_slider_length > 1 ? true : false,
    touchDrag: item_slider_length > 1 ? true : false,
    mouseDrag: item_slider_length > 1 ? true : false,
    loop: item_slider_length > 1 ? true : false,
    autoplay: item_slider_length > 1 ? true : false,
    autoplayTimeout: item_slider_length > 1 ? 2000 : false,
    autoplayHoverPause: item_slider_length > 1 ? true : false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
        stagePadding: 100,
      }
    }
  });

  // FORM JS Start 
  $('.nxt-btn').click(function () {

    $('.checkbox-list').each(function () {
      if ($(this).find('input[type="checkbox"]:checked').length <= 0) {
        // alert('atleast select one checkbox in div with index ' + $(this).index());
        $("#agree_chk_error").show();
      }
      else {
        $("#agree_chk_error").hide();
        document.getElementById("form-box1").style.display = "none";
        document.getElementById("form-box2").style.display = "block";
        document.getElementById("head-1").style.display = "none";
        document.getElementById("head-2").style.display = "block";
      }
    });

  });

  $('#form-drop-down').on('change', function () {

    if ($('select').val() == 'null') {
      // alert('Please, choose an option');
      $(this).parent().removeClass("checkbox-active");
      $('.dbcheck').prop('checked', false);
      return false;
    } else {
      $(this).parent().addClass("checkbox-active");
      $('.dbcheck').prop('checked', true);
      $("#agree_chk_error").hide();
    }

  });

  $('.agree_checkbox').click(function () {
    if ($(this).prop('checked')) {
      $(this).attr('value', 'Yes');
      $(this).parent().addClass('checkbox-active');
    } else {
      $(this).attr('value', '');
      $(this).parent().removeClass('checkbox-active');
    }
  });

  // FORM JS END

  var item_slider_length_1 = $(".item-slider-carousel-1").find('.item').length;
  owl_1 = $(".item-slider-carousel-1");
  owl_1.owlCarousel({
    dots: item_slider_length_1 > 1 ? false : false,
    nav: item_slider_length_1 > 1 ? true : false,
    touchDrag: item_slider_length_1 > 1 ? true : false,
    mouseDrag: item_slider_length_1 > 1 ? true : false,
    loop: item_slider_length_1 > 1 ? true : false,
    autoplay: item_slider_length_1 > 1 ? true : false,
    autoplayTimeout: item_slider_length_1 > 1 ? 2000 : false,
    autoplayHoverPause: item_slider_length_1 > 1 ? true : false,
    margin: 30,
    // autoWidth: true,
    responsive: {
      0: {
        items: 1,
        autoplay: item_slider_length_1 > 1 ? true : false,
        autoplayTimeout: item_slider_length_1 > 1 ? 2000 : false,
        autoplayHoverPause: item_slider_length_1 > 1 ? true : false,
      },
      600: {
        items: 2,
        autoplay: item_slider_length_1 > 1 ? true : false,
        autoplayTimeout: item_slider_length_1 > 1 ? 2000 : false,
        autoplayHoverPause: item_slider_length_1 > 1 ? true : false,
      },
      768: {
        items: 3,
      },
      1030: {
        items: 1.5,
      }
    }
  });

  // Custom autoplay
  $('.sec5-custom-pause').click(function () {
    owl_1.trigger('stop.owl.autoplay');
    // alert("pause");
    $(this).fadeOut();
    $(".sec5-custom-play").fadeIn();
  });

  $('.sec5-custom-play').click(function () {
    owl_1.trigger('play.owl.autoplay');
    // alert("play");
    $(this).fadeOut();
    $(".sec5-custom-pause").fadeIn();
  });

  var thought_leadership_slider = $(".thought-leadership-slider").find('.item').length;
  //alert(thought_leadership_slider);		
  $(".thought-leadership-slider").owlCarousel({
    dots: thought_leadership_slider > 1 ? false : false,
    nav: thought_leadership_slider > 1 ? true : false,
    touchDrag: thought_leadership_slider > 1 ? true : false,
    mouseDrag: thought_leadership_slider > 1 ? true : false,
    loop: thought_leadership_slider > 1 ? true : false,
    autoplay: thought_leadership_slider > 1 ? true : false,
    autoplayTimeout: thought_leadership_slider > 1 ? 2000 : false,
    autoplayHoverPause: thought_leadership_slider > 1 ? true : false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /* ------------- Individual Categories Carousel  ---------------*/
  getJsonDetails();

  function getJsonDetails() {
    var $container = $('.categories');
    var $getCat = $('.categories').data('category');
    var $head_title = $('.tl-inner-head .hero-head').html();
    // console.log($head_title);

    // <label class="item-slider-head mb-20">' + val.category_name + '</label>

    //JSON
    $.getJSON('/content/dam/infosys-web/en/aster/js/categories-selection.js', function (result) {
      var newElements = '';
      $.each(result, function (index, element) {
        $.each(element, function (i, val) {
          if ($getCat == val.category && $head_title != val.title) {
            newElements +=
              '<div class="item"><a class="item-slider-href bg-light-grey" href="' + val.page_link + '" title="' + val.title + '" aria-label="' + val.title + '"><div class="item-img-wrapper"><img class="img-responsive"  src="' + val.image + '" alt="' + val.title + '"></div><div class="item-cnt-wrapper"><h3 class="item-slider-head mb-20">' + val.title + "</h3><span class='cta-link'>Read More</span></div></a> </div>";
          }
        });
      });
      var $newElems = $(newElements);
      $container.html($newElems);
    }).done(function () {
      if ($('.individual-categories-carousel').length) {
        var individual_categories_carousel = $('.individual-categories-carousel').find('.item').length;
        $('.individual-categories-carousel').owlCarousel({
          dots: individual_categories_carousel > 1 ? false : false,
          nav: individual_categories_carousel > 1 ? true : false,
          // navText: ['<span>Prev</span>', '<span>Next</span>'],
          touchDrag: individual_categories_carousel > 1 ? true : false,
          mouseDrag: individual_categories_carousel > 1 ? true : false,
          loop: individual_categories_carousel > 1 ? true : false,
          autoplay: individual_categories_carousel > 1 ? true : false,
          autoplayTimeout: individual_categories_carousel > 1 ? 2000 : false,
          autoplayHoverPause: individual_categories_carousel > 1 ? true : false,
          margin: 30,
          responsive: {
            0: {
              items: 1,
            },
            500: {
              items: 2,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 3,
              stagePadding: 100,
            },
          },
        });
      }

      /* ------ TweenMax Animation Individual Categories Carousel	------ */
    });
  }

  /* ------------- SCROLL UP FUNCTION HOME Pages ---------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
      $('.scroll-up').fadeIn(700);
    } else {
      $('.scroll-up').fadeOut(700);
    }
  });

  $('.scroll-up').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 700);
    $('.infy-logo').focus();
  });

  $(".scrollto-target").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 0,
    }, 700);
  });

  /* ------------- Country Selection Part ---------------*/
  $(document).on("click", ".select-country, .option-country > ul > li", function () {
    $(".option-country").toggleClass("open-country");
    if ($(".option-country").hasClass("open-country")) {
      $(".down-arrow").addClass("up-arrow").removeClass("down-arrow");
    } else {
      $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
    }
  });
  $(document).on('click', 'body', function (e) {
    if (!$(e.target).is('.select-country > a')) {
      $('.option-country.open-country').removeClass('open-country');
      $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
    }
  });

  $("#onetrust-policy-text a").attr("title", "More on cookie policy");
  $("#onetrust-accept-btn-handler, #onetrust-pc-btn-handler").attr("aria-pressed", "false");
  $("#onetrust-accept-btn-handler").css("background-color", "#015D93");
  $("#onetrust-policy-text").css({ "color": "#000000", "font-size": "20px" });
  $("#onetrust-pc-btn-handler").css({ "border": "1px solid #015D93", "background-color": "#0b321e", "color": "#ffffff" });

  // End
});
