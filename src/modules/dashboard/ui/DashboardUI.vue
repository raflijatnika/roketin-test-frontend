<template>
  <VRow>
    <VCol cols="12" xs="12" sm="12" md="12" lg="12">
      <AppBaseCard title="Member Dashboard" backgroundColor="#f2f2fc">
        <template #body>
          <VRow>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseCard>
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <AppBaseLabel text="10" bold fontSize="28" noMargin class="mb-n2" />
                    <AppBaseLabel text="Different Nationality" fontSize="14" color="grey" />
                  </div>
                  <v-icon color="black" x-large>mdi-flag-variant</v-icon>
                </div>
              </AppBaseCard>
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseCard>
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <AppBaseLabel text="Female" bold fontSize="28" noMargin class="mb-n2" />
                    <AppBaseLabel text="Most Gender" fontSize="14" color="grey" />
                  </div>
                  <v-icon color="black" x-large>mdi-gender-female</v-icon>
                </div>
              </AppBaseCard>
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseCard>
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <AppBaseLabel text="~40" bold fontSize="28" noMargin class="mb-n2" />
                    <AppBaseLabel text="Average Age" fontSize="14" color="grey" />
                  </div>
                  <v-icon color="black" x-large>mdi-walk</v-icon>
                </div>
              </AppBaseCard>
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseCard>
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <AppBaseLabel text="~10 year" bold fontSize="28" noMargin class="mb-n2" />
                    <AppBaseLabel text="Average Membership" fontSize="14" color="grey" />
                  </div>
                  <v-icon color="black" x-large>mdi-account-group</v-icon>
                </div>
              </AppBaseCard>
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12" xs="12" sm="12" md="12" lg="12">
              <v-container>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  hide-default-header
                  hide-default-footer
                  disable-pagination
                  class="custom-table"
                  height="500px"
                >
                  <!-- Image -->
                  <template v-slot:[`item.image`]="{ item }">
                    <v-avatar size="35">
                      <v-img :src="item.image" alt="John" />
                    </v-avatar>
                  </template>

                  <!-- Name & Email -->
                  <template v-slot:[`item.name`]="{ item }">
                    <AppBaseLabel :text="item.name" bold noMargin />
                    <AppBaseLabel :text="item.email" color="grey" noMargin />
                  </template>

                  <!-- Age -->
                  <template v-slot:[`item.age`]="{ item }">
                    <AppBaseLabel :text="item.age" bold noMargin />
                  </template>

                  <!-- Gender -->
                  <template v-slot:[`item.gender`]="{ item }">
                    <v-chip :color="genderType[item.gender.toLowerCase()]" label small>
                      <AppBaseLabel :text="item.gender" color="white" />
                    </v-chip>
                  </template>

                  <!-- Nationality -->
                  <template v-slot:[`item.nat`]="{ item }">
                    <v-img :src="`https://flagcdn.com/24x18/${item.nat.toLowerCase()}.png`" width="24" height="18" alt="Angola" />
                  </template>
                </v-data-table>
              </v-container>
            </VCol>
          </VRow>
        </template>
      </AppBaseCard>
    </VCol>
  </VRow>
</template>

<script>
// Constant
import { GENDER_TYPE_COLOR } from '../constant/dashboard.constant';

export default {
  name: 'DashboardUI',
  computed: {
    genderType() {
      return GENDER_TYPE_COLOR;
    },
  },
  data: () => ({
    headers: [
      {
        text: 'Image',
        align: 'center',
        value: 'image',
        width: 1000,
      },
      { text: 'Name', value: 'name', align: 'left' },
      { text: 'Age', value: 'age', align: 'center' },
      { text: 'Gender', value: 'gender', align: 'left' },
      { text: 'nat', value: 'nat', align: 'center' },
      { text: 'Address', value: 'address', align: 'left' },
    ],
    desserts: [
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Female',
        nat: 'US',
        address: 'JL. Burujul No. 134',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
      {
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        name: 'Maelys Vincent',
        email: 'maelys.vincent@example.com',
        age: 62,
        gender: 'Male',
        nat: 'US',
        address: 'Valwood Pkwy',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
#virtual-scroll-table {
  max-height: 400px;
  overflow: auto;
}
</style>
