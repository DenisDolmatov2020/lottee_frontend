<template functional>
  <div id="create">
    <v-speed-dial
      fixed
      bottom
      left
      direction="top"
      slide-y-reverse-transition
      style="z-index: 7"
    >
      <template #activator>
        <v-tooltip right weight="bold">
          <template #activator="{ on, attrs }">
            <v-btn
              v-model="props.fab"
              color="green"
              dark
              fab
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar>
                <v-img
                  :src="require(`~/assets/images/${parent.$i18n.locale}.png`)"
                />
              </v-avatar>
            </v-btn>
          </template>
          <span>{{ parent.$t('Change Language') }}</span>
        </v-tooltip>
      </template>

      <v-tooltip
        v-for="(value, key) in parent.$i18n.messages"
        :key="key"
        right
      >
        <template
          v-if="key !== parent.$i18n.locale"
          #activator="{ on, attrs }"
        >
          <v-btn
            v-model="props.fab"
            dark
            fab
            v-bind="attrs"
            v-on="on"
            @click="parent.$i18n.locale = key"
          >
            <v-avatar>
              <v-img :src="require(`~/assets/images/${key}.png`)" />
            </v-avatar>
          </v-btn>
        </template>
        <span>{{ value.name }}</span>
      </v-tooltip>
    </v-speed-dial>
  </div>
</template>
