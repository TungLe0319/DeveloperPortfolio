<template>
  <section id="experience" class="py-5 section-bubble2">
    <div class="container">
      <div class="section-title">
        <h1
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="font-1 text-light"
        >
          Skills & Experience
        </h1>
      </div>

      <!-- SECTION EDUCATION -->
      <div class="row d-flex justify-content around">
        <div class="col-md-12 d-flex justify-content-between">
          <div class="section-title">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="font-1 text-warning fs-2"
            >
              Education
            </p>
          </div>
          
        </div>
        <div class="col-md-6">
          <a
            v-motion-slide-visible-once-bottom
            :delay="300"
            href="https://boisecodeworks.com/"
          >
            <div class="v-motion">
              <img
                src="https://avatars.githubusercontent.com/u/94322600?s=280&v=4"
                alt="Full Stack Immersive Logo"
                class=" "
              /></div
          ></a>
        </div>

        <div class="col-md-6 align-items-center">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light darken-10 fw-bold"
          >
            FULL STACK SOFTWARE DEVELOPMENT CERTIFICATION,
          </p>
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light fw-bold darken-20"
          >
            2022 - Boise Codeworks, Boise, ID
          </p>
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light"
          >
            An immersive full stack software development program that provided
            over 500 hours of coding experience across multiple technology
            stacks.
          </p>
        </div>
      </div>
      <!-- !SECTION EDUCATION -->

      <!-- SECTION LANG AND TECH -->
      <div class="row skills-content gy-4 my-5 justify-content-center">
        <div class="col-md-12">
          <p class="font-1 text-warning fs-2">Languages & Technologies</p>
        </div>

 <div class="row">
        <div class="col-md-4">
          <a href="https://github.com/TungLe0319" target="_blank">
            <img
              src="https://raw.githubusercontent.com/TungLe0319/GithubStats/master/generated/languages.svg#gh-dark-mode-only"
              alt=""
              class="elevation-6 rounded"
            />
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://github.com/TungLe0319" target="_blank">
            <img
              src="https://raw.githubusercontent.com/TungLe0319/GithubStats/master/generated/overview.svg#gh-dark-mode-only"
              alt=""
              class="elevation-6 rounded"
            />
          </a>
        </div>
      </div>




        <div class="col-md-12">
          <ul class="d-md-flex justify-content-between gap-5 g-5">
            <li
              class="list-group-item font-2 fs-5 filter-button active  selectable rounded"
              @click="filterImages('reset', $event)"
            >
              All
            </li>
            <li
              class="list-group-item font-2 fs-5 filter-button selectable rounded"
              @click="filterImages('lang', $event)"
            >
              Languages
            </li>
            <li
              class="list-group-item font-2 fs-5 filter-button selectable rounded"
              @click="filterImages('tech', $event)"
            >
              Technologies
            </li>
            <li
              class="list-group-item font-2 fs-5 filter-button selectable rounded"
              @click="filterImages('framework', $event)"
            >
              Frameworks & Libraries
            </li>
            <li
              class="list-group-item font-2 fs-5 filter-button selectable rounded"
              @click="filterImages('database', $event)"
            >
              Databases
            </li>
          </ul>
        </div>
        <div class="image-container row g-3">
          <div
            class="col-6 col-md-2 image-item"
            v-for="s in skillsIcons"
            :type="s.type"
            :key="s.id"
          >
            <ParallaxMouse>
              <CartoonFrame v-motion-roll-visible-once-left>
                <img class="img-fluid box3 box" :src="s.src" :title="s.title" />
              </CartoonFrame>
            </ParallaxMouse>
          </div>
        </div>
        <div
          class="col-md-12 d-md-flex justify-content-around mb-4 flex-wrap"
        ></div>
      </div>

      <!-- !SECTION LANG AND TECH -->

      <!-- SECTION DEVSOPPORTUNITIES -->
      <div class="row my-5">
        <div class="section-title">
          <p class="font-1 fs-2 text-warning">DevsOpportunities LLC</p>
        </div>
        <div class="col-md-6 d-flex justify-content-center my-3 my-md-0">
          <div
            class="rounded-circle bg-light text-center devsopportunities-image elevation-6"
          >
            <img src="../../assets/img/LLCLogo.png" alt="LLC Logo" />
          </div>
        </div>
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light darken-10 fw-bold"
          >
            2022
          </p>
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light"
          >
            Company I Co-Founded with a team of 3 other developers from
            CodeWorks to do freelance work while searching for full time
            employment. I have had the opportunity to communicate with clients
            to understand their needs and requirements, and to collaborate with
            them to ensure that their goals are met.
          </p>

          <ul>
            <li>
              Effectively communicate technical concepts to non-technical
              stakeholders and to build strong working relationships.
            </li>
            <li>
              Proactive in seeking feedback and making adjustments as needed to
              ensure that the final product meets the client's expectations.
            </li>
            <li>
              While I have not had a great deal of experience working directly
              with clients, I am eager to learn and to continue developing my
              skills in this area.
            </li>
            <li>
              Confident that with my strong technical abilities and my
              commitment to delivering high-quality work, I will be able to make
              a valuable contribution to any project.
            </li>
          </ul>

          <p class="font-1 fs-5 text-light darken-10">
            Projects & work done Listed Below
            <!-- <i
              @click="scrollToProjects()"
              class="mdi mdi-arrow-down-circle fs-1 text-light action"
            ></i> -->
          </p>
        </div>
        <div class="row">
          <div class="col-md-12 text-center"></div>
        </div>
      </div>

      <!-- SECTION DEVSOPPORTUNITIES -->

      <!-- SECTION CURRENTLY LEARNING -->
      <div class="row my-5 gy-3">
        <div class="section-title">
          <p class="font-1 text-warning fs-2">Currently Learning</p>
        </div>

        <div class="col-md-6">
          <div
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="card border-0 elevation-6 text-center"
          >
            <img
              src="https://fireship.io/courses/react-next-firebase/img/featured.png"
              alt=""
              class="rounded img-fluid"
            />
          </div>
        </div>
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light"
          >
            The
            <a href="https://fireship.io/">
              <img
                src="https://ia802200.us.archive.org/10/items/github.com-fireship-io-nft-art-generator_-_2022-01-22_14-51-40/cover.jpg"
                alt=""
                width="40"
              />
              <b class="text-light darken-10"> Fireship.io's </b>
            </a>
            Next.js and Firebase course is a learning opportunity that focuses
            on teaching developers how to use two popular technologies for
            building modern web applications. Next.js is a framework for
            building server-rendered React applications, and Firebase is a suite
            of tools for building and deploying applications in the cloud.The
            course covers topics such as server-side rendering, authentication,
            data storage, and deployment, among others.
          </p>
        </div>
      </div>
      <!-- !SECTION CURRENTLY LEARNING -->
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import CartoonFrame from "../CartoonFrame.vue";
import ParallaxMouse from "../ParallaxMouse.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,

      skillsIcons: computed(() => AppState.skillsIcons),
      scrollToProjects() {
        window.scrollTo({
          top: document.getElementById("portfolio").offsetTop + 2250,
          left: 0,
          behavior: "smooth",
        });
      },

      filterImages(type, button) {
        // Get the list of all images
        const imageList = document.querySelectorAll(".image-item");
        const buttonList = document.querySelectorAll(".filter-button");
        // Remove the "active" class from all buttons
        buttonList.forEach((btn) => {
          btn.classList.remove("active");
        });

        if (type !== "reset") {
          button.target.classList.add("active");
        }
        // Hide all images
        imageList.forEach((image) => {
          if (image.__vnode.props.type != type) {
            image.style.display = "none";
            image.style.opacity = 0;
            image.style.transform = "scale(0.1)";
          } else {
            image.style.display = "block";
          }

          if (type == "reset") {
            image.style.display = "block";
          }
        });

        // Animate the "pop up" effect
        const popDuration = 250; // 250ms
        const targetOpacity = 1; // The final opacity of the images
        let currentOpacity = 0; // The starting opacity of the images
        const targetScale = 1; // The final scale of the images
        let currentScale = 0.1; // The starting scale of the images

        const popAnimation = setInterval(() => {
          // Increment the current opacity and scale
          currentOpacity += 0.1;
          currentScale += 0.05;

          // Update the opacity and scale of the images
          imageList.forEach((image) => {
            image.style.opacity = currentOpacity;
            image.style.transform = `scale(${currentScale})`;
          });

          // Stop the animation when the target opacity and scale are reached
          if (currentOpacity >= targetOpacity && currentScale >= targetScale) {
            clearInterval(popAnimation);
          }
        }, 25); // Run the animation every 25ms
      },
    };
  },
  components: { CartoonFrame, ParallaxMouse },
};
</script>

<style lang="scss" scoped>
.active {
  color: #ffd454 !important;
  font-size: 2rem;
  border-top: none !important;
  border-bottom: #f7d778 4px solid !important;
}
ul {
  counter-reset: index;
  padding: 0;

}

/* List element */
li {
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
  color: #f8fcdb;
  font-family: "Montserrat", sans-serif;
}

/* Element counter */
li::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Element separation */
li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.devsopportunities-image {
  height: 200px;
  width: 200px;
  img {
    height: 200px;
    width: 200px;
  }
}

.box {
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
  transition: all 0.2s ease !important;
}
.box:hover {
  border: solid #f7d778;
  border-color: #f7d778;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
  padding: 5px;
}

.v-motion {
  transition: all 0.25s ease;
  img {
    transition: all 0.25s ease;
  }

  img:hover {
    transform: rotate(8deg);
  }
}
</style>
