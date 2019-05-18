<template>
  <div class="hello">
    <div class="hello-info">
      <!-- <div class="hello-info__logo"></div> -->
      <router-link @click.native="setStatus(true)" to="/registration/options/teacher">
        <div class="hello-eg">
          <h1 class="bolster">Teacher</h1>
          <i class="material-icons">business_center</i>
        </div>
      </router-link>
    </div>
    <div class="hello-option">
      <router-link @click.native="setStatus(false)" to="/registration/options/student">
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
  name: "Register-option",
  methods: {
    setStatus(value) {
      if (value) {
        this.$emit('bildUser', {statusUser: 'teacher'})
      } else {
        this.$emit('bildUser', {statusUser: 'student'})
      } 
    }
  }
};
</script>

<style scoped lang="scss">
.bolster {
  position: absolute;
  display: inline-block;
  top: -4rem;
  left: 0;
  color: $white;
  font-size: 3rem;
  font-family: "Permanent Marker", cursive;
  transition: color 0.2s;
}
.hello-eg {
  position: relative;
  background: $white;
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
    background: $pink;
    .bolster {
      color: $pink;
    }

    .material-icons {
      color: $green;
    }

    &:hover {
      background: $white;
      cursor: pointer;

      .bolster {
        color: $white;
      }
      .material-icons {
        color: $pink;
      }
    }
  }
}

.hello-option {
  flex-direction: column;

  .material-icons {
    color: $pink;
  }

  .hello-eg {
    background-color: $green;
    .bolster {
      color: $green;
    }
    &:hover {
      background: $white;
      cursor: pointer;

      .bolster {
        color: $white;
      }
      .material-icons {
        color: $green;
      }
    }
  }
}
</style>