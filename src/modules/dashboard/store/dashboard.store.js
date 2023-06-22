// Constant
import { API_DASHBOARD_USER_LIST } from '../constant/dashboardApi.constant';

const namespaced = true;

const state = {
  dashboard_loading: false,
  dashboard_users: [],
};

const getters = {
  dashboard_loading: (state) => state.dashboard_loading,
  dashboard_users: (state) => state.dashboard_users,
};

const mutations = {
  dashboard_SET_LOADING: (state, payload) => {
    state.dashboard_loading = payload;
  },
  dashboard_SET_USERS: (state, payload) => {
    state.dashboard_users = payload;
  },
};

const actions = {
  /**
   * @description Fetch all users
   *
   * @url /api/user
   * @method GET
   * @access private (only user that logged in)
   *
   * @return {Promise<any>} Promise<any>
   */
  dashboard_fetchUsers: async function ({ commit }, payload) {
    commit('dashboard_SET_LOADING', true);

    try {
      const response = await this.$api.get(API_DASHBOARD_USER_LIST, {
        params: {
          ...payload?.params,
        },
      });

      const actualData = response.data.results;
      commit('dashboard_SET_USERS', actualData);

      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      commit('dashboard_SET_LOADING', false);
    }
  },
};

export default { namespaced, state, getters, mutations, actions };
