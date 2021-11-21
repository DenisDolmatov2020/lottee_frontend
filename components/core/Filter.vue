<template>
  <div class="nav">
    <v-icon color="blue" @click="active = !active">
      {{ active ? 'mdi-close' : 'mdi-filter' }}
    </v-icon>

    <div :class="['menu', { 'checked': active }]">
      <li><a href="#">Все</a></li>
      <!--
        <li><a href="#">Созданные</a></li>
      -->
      <li><a href="#">Участвов</a></li>
      <li><a href="#">blog</a></li>
      <li><a href="#">contactos</a></li>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    active: false
  }),

  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
}
</script>

<style scoped>
.nav, .menu {
  margin: 16px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  position: relative;
  background-color: #fff;
  padding: 20px;
  transition: 0.5s;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 8px 15px rgba(0,0,0,.2);
}

.menu {
  margin: 0;
  padding: 0;
  width: 0;
  overflow: hidden;
  transition: 0.5s;
}

.checked {
  width: 450px;
}

.menu li {
  list-style: none;
  margin: 0 10px;
}

.menu li a {
  text-decoration: none;
  color: #2196F3;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s;
}

.menu li a:hover {
  color: #161919;
}

.nav input {
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0;
}

.nav span {
  position: absolute;
  left: 30px;
  width: 30px;
  height: 4px;
  border-radius: 50px;
  background-color: #666;
  pointer-events: none;
  transition: 0.5s;
}

.nav input:checked ~ span {
  background-color: #f974a1;
}

.nav span:nth-child(2) {
  transform: translateY(-8px);
}

.nav input:checked ~ span:nth-child(2) {
  transform: translateY(0) rotate(-45deg);
}
.nav span:nth-child(3) {
  transform: translateY(8px);
}

.nav input:checked ~ span:nth-child(3) {
  transform: translateY(0) rotate(45deg);
}
</style>
