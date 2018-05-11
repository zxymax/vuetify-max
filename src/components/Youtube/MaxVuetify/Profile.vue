<template>
  <v-app id="inspire">
    <v-card>
      <v-btn color="primary" @click="dialog = true">Open Dialog</v-btn>
      <v-dialog v-model="dialog" :fullscreen="fullScreen" transition="dialog-bottom-transition" :overlay=false
                scrollable>
        <v-card>
          <v-toolbar style="flex: 0 0 auto;" dark class="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Data</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-card-title>
              Nutrition
              <v-spacer></v-spacer>
            </v-card-title>
            <div>
              <v-data-table

                :items="meetups"

                :pagination.sync="pagination"
                hide-actions
                class="elevation-1"
              >

                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>

                </template>
              </v-data-table>
              <div class="text-xs-center pt-2">
                <v-pagination v-model="pagination.page" :length="pages"></v-pagination>

              </div>
            </div>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>

      </v-dialog>


    </v-card>


  </v-app>
</template>
<script>
  export default{

      data () {
        return {
          dialog: false,
          fullScreen: true,
          search: '',
          pagination: {},
          selected: [],
          headers: [
            {
              text: 'Dessert (100g serving)',
              align: 'left',
              sortable: false,
              value: 'name'
            },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Sodium (mg)', value: 'sodium' },
            { text: 'Calcium (%)', value: 'calcium' },
            { text: 'Iron (%)', value: 'iron' }
          ],
          meetups: [
            {
              value: false,
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              sodium: 87,
              calcium: '14%',
              iron: '1%'
            },
            {
              value: false,
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              sodium: 129,
              calcium: '8%',
              iron: '1%'
            },
            {
              value: false,
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
              sodium: 337,
              calcium: '6%',
              iron: '7%'
            },
            {
              value: false,
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              sodium: 413,
              calcium: '3%',
              iron: '8%'
            },
            {
              value: false,
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
              sodium: 327,
              calcium: '7%',
              iron: '16%'
            },
            {
              value: false,
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
              sodium: 50,
              calcium: '0%',
              iron: '0%'
            },
            {
              value: false,
              name: 'Lollipop',
              calories: 392,
              fat: 0.2,
              carbs: 98,
              protein: 0,
              sodium: 38,
              calcium: '0%',
              iron: '2%'
            },
            {
              value: false,
              name: 'Honeycomb',
              calories: 408,
              fat: 3.2,
              carbs: 87,
              protein: 6.5,
              sodium: 562,
              calcium: '0%',
              iron: '45%'
            },
            {
              value: false,
              name: 'Donut',
              calories: 452,
              fat: 25.0,
              carbs: 51,
              protein: 4.9,
              sodium: 326,
              calcium: '2%',
              iron: '22%'
            },
            {
              value: false,
              name: 'KitKat',
              calories: 518,
              fat: 26.0,
              carbs: 65,
              protein: 7,
              sodium: 54,
              calcium: '12%',
              iron: '6%'
            }
          ],
        }
      },
      computed: {
        pages () {
          return this.pagination.rowsPerPage ? Math.ceil(this.meetups.length / this.pagination.rowsPerPage) : 0
        }
      },
      methods: {
      }

  }
</script>
