<style type="text/scss">
  $bg: #0f1316;

  $yellow-1: #ffdc97;

  $red-1: #600004;

  $black-1: #423352;
  $black-2: #2e2250;
  $white-1: #ffffff;
  $white-2: #dae4ed;

  $skin-1: #ffc4c5;
  $skin-2: #ffb1b4;
  $skin-3: #ffa0a5;

  $cyan-1: #005788;
  $cyan-2: #00467f;

  $purple-1: #351c77;
  $purple-2: #2b165d;

  $green-1: #04798c;
  $green-2: #008c9a;

  $orange-1: #ff9b5a;
  $orange-2: #ff552e;
  $orange-3: #ff4624;
  $orange-4: #ff371b;

  $blue-1: #2764cc;
  $blue-2: #001b7a;
  $blue-3: #001682;
  $blue-4: #001164;
  $blue-5: #010a2a;
  $blue-6: #010109;

  /* Reset */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transform-style: preserve-3d;
  }
  .main {
    position: relative;
    width: 40vmax;
    height: 30vmax;
    // background-image: url("bg.jpg");
    background-size: cover;
    bottom: -50px;
  }

  /**/
  .human {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 2.5vmax;
    left: 27.5%;
    width: 21vmax;
    height: 30vmax;
    z-index: 1000;

    &__head {
      position: relative;
      display: flex;
      justify-content: center;
      width: 25%;
      height: 6vmax;

      z-index: 6000;

      &::before {
        content: "";
        position: absolute;
        width: 0.2vmax;
        height: 0.4vmax;
        bottom: 13%;
        border-radius: 50%;
        background-color: $black-2;
        z-index: 2000;
      }
    }

    &__hair-b {
      position: absolute;
      top: -4%;
      width: 7vmax;
      height: 6vmax;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-left-radius: 40%;
      border-bottom-right-radius: 40%;
      background-color: $black-2;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 7vmax;
        height: 7vmax;
        border-top-left-radius: 40%;
        border-top-right-radius: 40%;
        border-bottom-left-radius: 30%;
        border-bottom-right-radius: 30%;
        background-color: $black-2;
        border-left: 1vmax solid $black-1;
        animation: hair 1s infinite alternate;
      }
      &::before {
        transform: rotateZ(-20deg);
      }
      &::after {
        transform: rotateZ(20deg);
      }
    }
    &__hair-c {
      position: absolute;
      top: -5%;
      z-index: -1;
      width: 110%;
      height: 1.5vmax;
      overflow: hidden;
      border-radius: 50%;
    }
    &__hair {
      width: 100%;
      height: 3vmax;
      background-color: $black-2;
      border-radius: 50%;
    }

    &__face {
      position: absolute;
      display: flex;
      justify-content: center;
      top: 7%;
      height: 90%;
      width: 65%;
      border-radius: 45%;
      background-color: $skin-1;
      border-bottom: 0.6vmax solid $black-2;
      border-left: 0.15vmax solid $black-2;
      border-right: 0.15vmax solid $black-2;
    }
    &__eye-l,
    &__eye-r {
      position: absolute;
      top: 45%;
      width: 0.3vmax;
      height: 0.5vmax;
      background-color: $black-2;
      border-radius: 50%;
      animation: eye 4s infinite alternate;
    }
    &__eye-l {
      left: 22%;
    }
    &__eye-r {
      right: 22%;
    }

    &__nose {
      position: absolute;
      width: 0.5vmax;
      height: 1.5vmax;
      bottom: 20%;
      border-radius: 50%;
      background-color: $skin-3;
    }
    &__cheeks-l,
    &__cheeks-r {
      position: absolute;
      bottom: 8%;
      width: 0.8vmax;
      height: 0.9vmax;
      background-color: $skin-2;
      border-radius: 50%;
    }
    &__cheeks-l {
      left: 10%;
    }
    &__cheeks-r {
      right: 10%;
    }

    &__mouth {
      position: absolute;
      bottom: 10%;
      width: 0.8vmax;
      height: 1vmax;
      border-bottom: 0.15vmax solid $red-1;
      border-radius: 50%;
    }

    &__eyebrow-l,
    &__eyebrow-r {
      position: absolute;
      top: 30%;
      width: 1vmax;
      height: 0.8vmax;
      border-top: 0.15vmax solid $black-2;
      border-radius: 50%;
    }
    &__eyebrow-l {
      left: 10%;
    }
    &__eyebrow-r {
      right: 10%;
    }

    &__ears {
      position: absolute;
      justify-content: space-between;
      top: 8%;
      width: 21%;
    }

    &__ear-l,
    &__ear-r {
      position: absolute;
      top: 30%;
      width: 1vmax;
      height: 1vmax;
      border-radius: 50%;
      background-color: $skin-3;
    }
    &__ear-l {
      left: 0%;
    }
    &__ear-r {
      right: 0%;
    }

    &__body-c {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 17%;
      width: 100%;
      height: 11vmax;
      overflow: hidden;
      z-index: -1;
    }
    &__body {
      position: relative;
      display: flex;
      justify-content: center;

      width: 96%;
      height: 22vmax;
      border-radius: 50%;
      border-left: 0.9vmax solid $orange-1;
      border-right: 1vmax solid $orange-3;

      background: linear-gradient(135deg, $orange-3 25%, transparent 25%) -1vmax
          0,
        linear-gradient(225deg, $orange-3 25%, transparent 25%) -1vmax 0,
        linear-gradient(315deg, $orange-3 25%, transparent 25%),
        linear-gradient(45deg, $orange-3 25%, transparent 25%);
      background-size: 2vmax 2vmax;
      background-color: $orange-2;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: -2vmax;
        width: 4vmax;
        height: 4vmax;
        border-radius: 50%;
        background-color: $skin-1;
        border: 0.5vmax solid $orange-4;
      }
    }
    &__arm-l,
    &__arm-r {
      position: absolute;
      bottom: 48%;
      width: 10vmax;
      height: 2.7vmax;

      background-color: $skin-1;
      z-index: 2000;
    }
    &__arm-l {
      left: 0;
      border-right: 4vmax solid $skin-2;
      border-bottom: 0.7vmax solid $skin-2;
      border-radius: 2vmax;
      animation: arm-l 1s ease infinite alternate;
    }
    &__arm-r {
      right: 2vmax;

      width: 2.25vmax;
      height: 1.5vmax;

      background-color: $white-2;
      border-top-left-radius: 2vmax;
      border-top-right-radius: 2vmax;
      animation: eye 2s infinite alternate;
      &::before {
        content: "";
        position: absolute;
        width: 3.25vmax;
        height: 2vmax;
        background-color: $skin-2;
        bottom: 0;
        left: 0.5vmax;

        border-bottom: 0.7vmax solid $skin-2;
        border-top-left-radius: 2vmax;
        border-top-right-radius: 2vmax;
      }
    }
    &__legs {
      position: absolute;
      bottom: 1.3vmax;
      width: 100%;
      height: 10vmax;
      overflow: hidden;
    }
    &__leg-l,
    &__leg-r {
      position: absolute;
      bottom: -2vmax;
      width: 4.5vmax;
      height: 130%;
    }
    &__leg-l {
      left: 3.3vmax;
      transform: rotateZ(-20deg);
      background-image: linear-gradient(
        80deg,
        transparent,
        transparent 35%,
        $blue-3 35%,
        $blue-3 40%,
        $blue-4 40%,
        $blue-4 90%
      );
      border-right: 0.5vmax solid $blue-5;
    }
    &__leg-r {
      right: 3.3vmax;
      transform: rotateZ(20deg);
      background-image: linear-gradient(
        -80deg,
        transparent,
        transparent 35%,
        $blue-3 35%,
        $blue-3 40%,
        $blue-4 40%,
        $blue-4 90%
      );
      border-left: 0.5vmax solid $blue-5;
    }

    &__shoes {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 45%;
      height: 2vmax;
    }
    &__shoe-c {
      bottom: 0;
      height: 1.8vmax;
      width: 4.2vmax;
      overflow: hidden;
      &:nth-of-type(1) {
        animation: shoe-l 0.125s ease infinite alternate;
      }
    }
    &__shoe-l,
    &__shoe-r {
      position: relative;
      height: 200%;
      width: 100%;
      border-radius: 50%;
      overflow: hidden;
      background-color: $purple-2;

      &::before {
        content: "";
        position: absolute;
        width: 2.5vmax;
        height: 2vmax;
        top: -10%;
        background-color: $purple-1;
        border-radius: 50%;
      }
    }
    &__shoe-l {
      &::before {
        left: -15%;
      }
    }
    &__shoe-r {
      &::before {
        right: -15%;
      }
    }
  }
  /*==================*/
  .table {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    position: absolute;
    width: 33vmax;
    height: 15vmax;
    bottom: 2vmax;
    left: 7vmax;

    z-index: 1000;

    &__top {
      width: 100%;
      height: 1vmax;
      border-top: 0.1vmax solid $yellow-1;
      background-color: $blue-1;
    }
    &__bottom {
      width: 95%;
      height: 2.5vmax;
      border-top: 0.75vmax solid $blue-4;
      background-color: $blue-2;
    }
    &__legs {
      position: relative;
      display: flex;
      width: 90%;
      height: 11vmax;
    }
    &__leg {
      position: absolute;
      top: 0;
      width: 0.6vmax;
      height: 100%;
      border-top: 0.75vmax solid $blue-4;
      background-color: $blue-2;
      &:nth-of-type(1) {
        left: 1%;
      }
      &:nth-of-type(2) {
        left: 9%;
      }
      &:nth-of-type(3) {
        left: 88%;
      }
      &:nth-of-type(4) {
        left: 96%;
      }
    }
  }
  /*==================*/

  .laptop {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -6.1vmax;
    left: 13vmax;
    width: 11vmax;
    height: 6vmax;
    background-color: $white-2;
    border-top: 0.2vmax solid $yellow-1;
    border-left: 0.2vmax solid $yellow-1;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      height: 1vmax;
      width: 1vmax;
      border-radius: 50%;
      background-color: $white-2;
      z-index: 100;
    }
    &::after {
      content: "";
      position: absolute;
      right: 20%;
      bottom: -40%;
      height: 300%;
      width: 300%;
      border-radius: 50%;
      background-color: $white-1;
    }
  }
  /*==================*/

  .cup {
    position: absolute;
    top: -2.6vmax;
    left: 5vmax;
    width: 2vmax;
    height: 2.5vmax;
    background-image: linear-gradient(
      to bottom,
      $green-2,
      $green-2 10%,
      $green-1 10%,
      $green-1 20%,
      $green-2 20%,
      $green-2 80%,
      $green-1 80%,
      $green-1 90%,
      $green-2 90%
    );

    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        -135deg,
        rgba($yellow-1, 0.5),
        rgba($yellow-1, 0.1),
        rgba($yellow-1, 0)
      );
    }
    &::after {
      content: "";
      position: absolute;
      right: -0.7vmax;
      top: 0.25vmax;
      width: 0.9vmax;
      height: 1.5vmax;
      border-top: 0.2vmax solid $green-1;
      border-bottom: 0.2vmax solid $green-2;
      border-right: 0.2vmax solid $green-2;
      border-left: 0.2vmax solid transparent;
      border-radius: 45%;
      z-index: -1;
    }
  }
  /*==================*/
  .chair {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: absolute;
    width: 12vmax;
    height: 14vmax;
    bottom: 2vmax;
    left: calc(50% - 8vmax);

    &__top {
      position: relative;
      width: 100%;
      height: 5vmax;
      border-bottom: 0.7vmax solid $cyan-1;
      background-color: $blue-6;

      &::before {
        content: "";
        position: absolute;
        bottom: 0.1vmax;
        right: 0;
        width: 80%;
        height: 35%;
        border-radius: 100% 0% 100% 0% / 82% 100% 0% 18%;
        background-color: $blue-5;
      }
    }
    &__line {
      width: 0.7vmax;
      height: 7.2vmax;
      border-top: 0.7vmax solid $cyan-2;
      border-left: 0.15vmax solid $cyan-1;
      border-right: 0.15vmax solid $cyan-1;
      background-image: repeating-linear-gradient(
        to bottom,
        $cyan-1,
        $cyan-1 4%,
        $cyan-2 4%,
        $cyan-2 6%
      );
    }
    &__base {
      position: relative;
      width: 100%;
      height: 0.7vmax;
      border-bottom: 0.2vmax solid $cyan-2;
      background-color: $cyan-1;
    }
    &__wheels {
      position: absolute;
      bottom: 1vmax;
      width: 100%;
      height: 0.7vmax;
      z-index: -1;
    }
    &__wheel {
      position: absolute;
      height: 0.8vmax;
      width: 0.8vmax;
      top: 0.4vmax;
      border-radius: 50%;
      background-color: $blue-4;
      &:nth-of-type(1) {
        left: 0.4vmax;
      }
      &:nth-of-type(2) {
        right: 0.4vmax;
      }
    }
  }
  /*==================*/
  .trashcan {
    position: absolute;
    width: 3.5vmax;
    height: 6vmax;
    bottom: 2.5vmax;
    left: 13.5vmax;
    background-image: repeating-linear-gradient(
      to bottom,
      $blue-5 0vmax,
      $blue-5 0.4vmax,
      $blue-4 0.4vmax,
      $blue-4 0.45vmax
    );

    transform: perspective(350px) rotateX(-40deg);
    transform-origin: bottom center;

    &::before {
      content: "";
      position: absolute;
      left: calc(0% - 0.2vmax);
      width: 115%;
      height: 0.2vmax;
      background-color: $blue-3;
    }
  }

  /*==================*/
  .lamp {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -5vmax;
    left: 10vmax;
    width: 3vmax;
    height: 7vmax;
    animation: lamp 1s ease infinite alternate;
    &::before {
      content: "";
      position: absolute;
      width: 1vmax;
      height: 1vmax;
      left: calc(50% - 0.5vmax);
      bottom: 0;
      border-radius: 50%;
      background-color: $yellow-1;
    }
    &__top {
      position: relative;
      display: flex;
      justify-content: center;
      width: 0.25vmax;
      height: 70%;
      left: 1vmax;
      background-color: $blue-4;
    }
    &__light {
      position: absolute;
      width: 3vmax;
      height: 7vmax;
      bottom: -11.5vmax;
      background-image: linear-gradient(
        to bottom,
        rgba($yellow-1, 0.0075),
        rgba($yellow-1, 0.025)
      );
      z-index: 4000;
      animation: light 4s ease infinite alternate;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 4vmax;
        height: 16vmax;
      }
      &::before {
        top: -1vmax;
        right: 2vmax;
        transform: rotateZ(10deg);
        background-image: linear-gradient(
          to right,
          rgba($yellow-1, 0.1),
          rgba($yellow-1, 0.1),
          rgba($yellow-1, 0)
        );
      }
      &::after {
        top: -1vmax;
        left: 2vmax;
        transform: rotateZ(-10deg);
        background-image: linear-gradient(
          to left,
          rgba($yellow-1, 0.1),
          rgba($yellow-1, 0.1),
          rgba($yellow-1, 0)
        );
      }
    }
    &__base-c {
      position: relative;
      width: 100%;
      height: 2.5vmax;
      overflow: hidden;
      border-bottom: 0.1vmax solid $yellow-1;
      padding-bottom: 1vmax;
    }
    &__base {
      position: relative;
      width: 100%;
      height: 5vmax;
      border-radius: 50%;
      background-color: $blue-2;
      border-right: 1vmax solid $blue-4;
    }
  }

  :global(body.dark-mode .lamp) {
    display: block;
  }
  /*==================*/
  .bricks {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /**********************/
  /**********************/
  /**********************/
  @keyframes lamp {
    0% {
      transform: rotate(-1deg);
      transform-origin: top center;
    }
    100% {
      transform: rotate(1deg);
      transform-origin: top center;
    }
  }
  @keyframes light {
    0%,
    70%,
    72%,
    100% {
      opacity: 1;
    }
    71% {
      opacity: 0.6;
    }
  }
  @keyframes eye {
    0%,
    10%,
    50%,
    90%,
    100% {
      transform: translateX(-0.1vmax);
    }
    30%,
    60% {
      transform: translateX(0.1vmax);
    }
  }
  @keyframes hair {
    0% {
      border-left: 1vmax solid $black-1;
    }
    100% {
      border-left: 0.9vmax solid $black-1;
    }
  }
  @keyframes arm-l {
    0%,
    45%,
    60%,
    80% {
      transform: rotateZ(0deg);
      transform-origin: bottom left;
    }
    50%,
    100% {
      transform: rotateZ(-3deg);
      transform-origin: bottom left;
    }
  }

  @keyframes shoe-l {
    0% {
      transform: rotateZ(0deg);
      transform-origin: bottom right;
    }
    100% {
      transform: rotateZ(5deg);
      transform-origin: bottom right;
    }
  }
  @keyframes win {
    0%,
    50%,
    91% {
      background-color: darken($black-2, 100);
    }
    60%,
    90% {
      background-color: darken($black-2, 5);
    }
  }
</style>

<div class="main">
  <div class="human">
    <div class="human__hair-b" />
    <div class="human__head">
      <div class="human__face">
        <div class="human__hair-c">
          <div class="human__hair" />
        </div>
        <div class="human__nose" />
        <div class="human__eye-l" />
        <div class="human__eye-r" />
        <div class="human__cheeks-l" />
        <div class="human__cheeks-r" />
        <div class="human__mouth" />
        <div class="human__eyebrow-l" />
        <div class="human__eyebrow-r" />
      </div>
    </div>
    <div class="human__ears">
      <div class="human__ear-l" />
      <div class="human__ear-r" />
    </div>
    <div class="human__arm-l" />
    <div class="human__arm-r" />
    <div class="human__body-c">
      <div class="human__body" />
    </div>
    <div class="human__legs">
      <div class="human__leg-l" />
      <div class="human__leg-r" />
    </div>
    <div class="human__shoes">
      <div class="human__shoe-c">
        <div class="human__shoe-l" />
      </div>
      <div class="human__shoe-c">
        <div class="human__shoe-r" />
      </div>
    </div>
  </div>
  <div class="table">
    <div class="table__top">
      <div class="laptop" />
      <div class="cup" />
    </div>
    <div class="table__bottom" />
    <div class="table__legs">
      <div class="table__leg" />
      <div class="table__leg" />
      <div class="table__leg" />
      <div class="table__leg" />
    </div>
  </div>
  <div class="chair">
    <div class="chair__top" />
    <div class="chair__line" />
    <div class="chair__base" />
    <div class="chair__wheels">
      <div class="chair__wheel" />
      <div class="chair__wheel" />
    </div>
  </div>
  <div class="trashcan" />
  <div class="lamp">
    <div class="lamp__top">
      <div class="lamp__light" />
    </div>
    <div class="lamp__base-c">
      <div class="lamp__base" />
    </div>
  </div>
  <div class="bricks" />
</div>
