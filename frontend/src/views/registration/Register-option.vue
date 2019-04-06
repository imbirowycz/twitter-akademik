<template>
  <div class="hello">
    <div class="hello-info">
      <div class="hello-info__logo"></div>
      <router-link to="/register-teacher">
        <div class="hello-eg">
          <h1 class="bolster">Teacher</h1>
          <i class="material-icons">business_center</i>
        </div>
      </router-link>
    </div>
    <div class="hello-option">
      <router-link to="/register-student">
        <div class="hello-eg">
          <h1 class="bolster">Student</h1>
          <i class="material-icons">school</i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register-option"
};
</script>

<style scoped lang="scss">
$green-transparent: rgba(#d9f4d7, 0.9);
$pink-transparent-2: rgba(red, 0.3);
$pink-transparent-8: rgba(red, 0.5);

.bolster {
  position: absolute;
  display: inline-block;
  top: -4rem;
  left: 0;
  color: white;
  font-size: 3rem;
  font-family: "Permanent Marker", cursive;
  transition: color 0.2s;
}
.hello-eg {
  position: relative;
  background: white;
  padding: 3rem;
  border-radius: 50%;
  transition: background-color 0.2s;
}
.material-icons {
  transition: color 0.2s;
  font-size: 5rem;
}

.hello-info {
  .hello-eg {
    flex-direction: column;

    .material-icons {
      color: #ff99b3;
    }

    &:hover {
      background: #ff99b3;
      cursor: pointer;

      .bolster {
        color: #ff99b3;
      }
      .material-icons {
        color: #d9f4d7;
      }
    }
  }
}

.hello-option {
  flex-direction: column;

  .material-icons {
    color: #d9f4d7;
  }

  .hello-eg {
    &:hover {
      background: #d9f4d7;
      cursor: pointer;

      .bolster {
        color: #d9f4d7;
      }
      .material-icons {
        color: #ff99b3;
      }
    }
  }
}
</style>