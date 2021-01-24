<template>
  <v-container>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on">
          Добавить график
        </v-btn>
      </template>
      <v-form v-model="valid" ref="entryForm" @submit.prevent="submitHandler">
        <v-card>
          <v-card-title>
            <span class="headline">Создание графика</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      label="Название графика*"
                      v-model="name"
                      :rules="nameRules"
                      required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <span>Начало измерений*</span>
                  <v-flex xs4>
                    <v-datetime-picker v-model="startDate"></v-datetime-picker>
                  </v-flex>
                </v-col>

                <v-col cols="12">
                  <span>Окончание измерений*</span>
                  <v-flex xs4>
                    <v-datetime-picker v-model="endDate"></v-datetime-picker>
                  </v-flex>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false">
              Закрыть
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                type="submit">
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
    valid: false,
    name: '',
    nameRules: [],
    startDate: new Date(),
    endDate: new Date(),
    chartData: {},
  }),
  props: ['charts'],
  watch: {
    'name'() {
      this.nameRules = []
    }
  },
  methods: {
    submitHandler() {
      const names = [];
      for (let i = 0; i < this.charts.length; i++) {
        names.push(this.charts[i].name);
      }
      this.nameRules = [
        v => names.indexOf(v) == -1 || 'Название уже существует',
        v => !!v || 'Это обязательное поле',
        v => v.length <= 30 || 'Длина должна быть не более 30 символов',
      ]
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this
      setTimeout(function () {
        if (self.$refs.entryForm.validate()) {
          self.dialog = false
          self.chartData.name = self.name
          self.chartData.startDate = self.startDate
          self.chartData.endDate = self.endDate
          self.name = ''
          self.startDate = new Date()
          self.endDate = new Date()
          self.$emit('chartData', self.chartData)
        }
      })
    },
  }
};
</script>
