<template>
  <div>
    <VRow>
      <VCol cols="12" xs="12" sm="12" md="12" lg="12">
        <AppBaseCard title="Member Dashboard" backgroundColor="#f2f2fc" class="custom-card">
          <template #body>
            <VRow>
              <VCol cols="12" xs="12" sm="12" md="6" lg="6">
                <AppBaseCard>
                  <div v-if="dashboard_loading" class="text-center">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                  <div v-else class="d-flex align-center justify-space-between">
                    <div>
                      <AppBaseLabel :text="differentNationality" bold fontSize="28" noMargin class="mb-n2" />
                      <AppBaseLabel text="Different Nationality" fontSize="14" color="grey" />
                    </div>
                    <v-icon color="black" x-large>mdi-flag-variant</v-icon>
                  </div>
                </AppBaseCard>
              </VCol>
              <VCol cols="12" xs="12" sm="12" md="6" lg="6">
                <AppBaseCard>
                  <div v-if="dashboard_loading" class="text-center">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                  <div v-else class="d-flex align-center justify-space-between">
                    <div>
                      <AppBaseLabel :text="mostFrequentGender" bold fontSize="28" noMargin class="mb-n2" />
                      <AppBaseLabel text="Most Gender" fontSize="14" color="grey" />
                    </div>
                    <v-icon color="black" x-large>mdi-gender-{{ mostFrequentGender.toLowerCase() }}</v-icon>
                  </div>
                </AppBaseCard>
              </VCol>
              <VCol cols="12" xs="12" sm="12" md="6" lg="6">
                <AppBaseCard>
                  <div v-if="dashboard_loading" class="text-center">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                  <div v-else class="d-flex align-center justify-space-between">
                    <div>
                      <AppBaseLabel :text="`~${averageAge}`" bold fontSize="28" noMargin class="mb-n2" />
                      <AppBaseLabel text="Average Age" fontSize="14" color="grey" />
                    </div>
                    <v-icon color="black" x-large>mdi-walk</v-icon>
                  </div>
                </AppBaseCard>
              </VCol>
              <VCol cols="12" xs="12" sm="12" md="6" lg="6">
                <AppBaseCard>
                  <div v-if="dashboard_loading" class="text-center">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                  <div v-else class="d-flex align-center justify-space-between">
                    <div>
                      <AppBaseLabel :text="`~${averageMembershipDuration}`" bold fontSize="28" noMargin class="mb-n2" />
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
                    :items="dashboard_users"
                    hide-default-header
                    hide-default-footer
                    disable-pagination
                    class="custom-table"
                    height="500px"
                    :loading="dashboard_loading"
                    @click:row="onClickDetail"
                  >
                    <!-- Image -->
                    <template v-slot:[`item.image`]="{ item }">
                      <v-avatar size="35">
                        <v-img :src="item.picture.medium" alt="John" />
                      </v-avatar>
                    </template>

                    <!-- Name & Email -->
                    <template v-slot:[`item.name`]="{ item }">
                      <AppBaseLabel :text="`${item.name.first} ${item.name.last}`" bold noMargin />
                      <AppBaseLabel :text="item.email" color="grey" noMargin />
                    </template>

                    <!-- Age -->
                    <template v-slot:[`item.age`]="{ item }">
                      <AppBaseLabel :text="item.dob.age" bold noMargin />
                    </template>

                    <!-- Gender -->
                    <template v-slot:[`item.gender`]="{ item }">
                      <v-chip :color="genderType[item.gender.toLowerCase()]" label small>
                        <AppBaseLabel :text="item.gender" color="white" />
                      </v-chip>
                    </template>

                    <!-- Nationality -->
                    <template v-slot:[`item.nat`]="{ item }">
                      <v-img
                        :src="`https://flagcdn.com/24x18/${item.nat.toLowerCase()}.png`"
                        width="24"
                        height="18"
                        alt="Angola"
                      />
                    </template>

                    <!-- Gender -->
                    <template v-slot:[`item.address`]="{ item }">
                      <AppBaseLabel :text="renderAddress(item.location)" />
                    </template>
                  </v-data-table>
                </v-container>
              </VCol>
            </VRow>
          </template>
        </AppBaseCard>
      </VCol>
    </VRow>

    <AppBaseDialog v-bind="dialogOption" isUsingX isHideSecondButton @clickFirstButton="onClickCloseDialog">
      <VRow>
        <VCol cols="12" xs="12" sm="12" md="4" lg="4">
          <VImg :src="detail.picture?.large" alt="John" width="200" height="200" />
        </VCol>
        <VCol cols="12" xs="12" sm="12" md="8" lg="8">
          <VRow dense>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseLabel text="Name" noMargin bold fontSize="14" />
              <AppBaseLabel :text="`${detail?.name?.first} ${detail?.name?.last}`" noMargin fontSize="12" />
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseLabel text="Email Address" noMargin bold fontSize="14" />
              <AppBaseLabel :text="detail?.email" noMargin />
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseLabel text="Age" bold fontSize="14" noMargin />
              <AppBaseLabel :text="detail?.dob?.age" bold noMargin />
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="6" lg="6">
              <AppBaseLabel text="Nationality" bold fontSize="14" noMargin />
              <v-img :src="`https://flagcdn.com/24x18/${detail?.nat?.toLowerCase()}.png`" width="24" height="18" alt="Angola" />
            </VCol>
            <VCol cols="12" xs="12" sm="12" md="12" lg="12">
              <AppBaseLabel text="Address" bold fontSize="14" noMargin />
              <AppBaseLabel :text="renderAddress(detail?.location)" />
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </AppBaseDialog>
  </div>
</template>

<script>
// Constant
import { GENDER_TYPE_COLOR } from '../constant/dashboard.constant';

// Vuex
import { mapGetters } from 'vuex';

// Moment
import moment from 'moment';

export default {
  name: 'DashboardUI',
  computed: {
    ...mapGetters({
      dashboard_users: 'dashboard/dashboard_users',
      dashboard_loading: 'dashboard/dashboard_loading',
    }),

    genderType() {
      return GENDER_TYPE_COLOR;
    },

    differentNationality() {
      return this.dashboard_users.reduce((count, user) => {
        if (user.nat && !count.includes(user.nat)) {
          count.push(user.nat);
        }
        return count;
      }, []).length;
    },

    averageAge() {
      const sumAge = this.dashboard_users.reduce((sum, user) => sum + user.dob.age, 0);
      return Math.ceil(sumAge / this.dashboard_users.length) || 0;
    },

    mostFrequentGender() {
      const counts = this.dashboard_users.reduce((acc, user) => {
        if (user.gender in acc) {
          acc[user.gender]++;
        } else {
          acc[user.gender] = 1;
        }
        return acc;
      }, {});

      const mostFrequent = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));

      return mostFrequent === 'male' ? 'Male' : 'Female';
    },

    averageMembershipDuration() {
      const currentDate = moment(); // Get the current date using Moment.js

      const totalDuration = this.dashboard_users.reduce((sum, user) => {
        const registeredDate = moment(user.registered.date);
        const duration = moment.duration(currentDate.diff(registeredDate)); // Calculate duration using Moment.js
        return sum + duration.asDays(); // Convert duration to days
      }, 0);

      const averageDuration = totalDuration / this.dashboard_users.length; // Calculate average duration in days

      const durationMoment = moment.duration(averageDuration, 'days'); // Create a Moment.js duration object

      const years = durationMoment.years(); // Extract the number of years

      return `${years} ${years === 1 ? 'year' : 'years'} `;
    },
  },
  data: () => ({
    headers: [
      {
        text: 'Image',
        align: 'center',
        value: 'image',
        width: 10,
      },
      { text: 'Name', value: 'name', align: 'left' },
      { text: 'Age', value: 'age', align: 'center' },
      { text: 'Gender', value: 'gender', align: 'left' },
      { text: 'nat', value: 'nat', align: 'center' },
      { text: 'Address', value: 'address', align: 'left' },
    ],

    // Dialog Detail
    dialogOption: {
      isOpen: false,
      dialogWidth: '750',
      dialogTitle: 'Detail Member',
      firstButtonLabel: 'Close',
      isUsingSecondButton: false,
      isFirstButtonLoading: false,
    },

    detail: {},
  }),
  methods: {
    /**
     * @description get users
     *
     * @return {Promise<any>}
     */
    getUsers: async function () {
      this.$store.dispatch('dashboard/dashboard_fetchUsers', {
        params: {
          results: 25,
        },
      });
    },

    /**
     * @description handle render address of user
     *
     * @param {object} location
     *
     * @return {string}
     */
    renderAddress: function (location) {
      return `${location?.street?.name} ${location?.street?.number}, ${location?.city}, ${location?.country}`;
    },

    /**
     * @description handle click open dialog
     *
     * @return {any}
     */
    onClickDetail: function (detail) {
      this.dialogOption.isOpen = true;
      this.detail = detail;
    },

    /**
     * @description handle click close dialog
     *
     * @return {any}
     */
    onClickCloseDialog: function () {
      this.dialogOption.isOpen = false;
      this.detail = {};
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  box-shadow: -2px 1px 75px 15px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 1px 75px 15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 1px 75px 15px rgba(0, 0, 0, 0.75);
}
</style>
