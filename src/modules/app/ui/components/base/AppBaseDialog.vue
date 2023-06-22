<template>
  <v-dialog v-model="isOpen" persistent :width="dialogWidth" @click:outside="handleBackdropClick(true)">
    <div class="wrapper">
      <v-btn icon class="dialog-close" @click="handleBackdropClick(false)" v-if="isUsingX">
        <AppBaseSvg isIcon icon="icon-close" />
      </v-btn>
      <div v-if="isUsingTitle" class="dialog-header">
        <AppBaseLabel :text="dialogTitle" :fontSize="dialogTitleFontSize" />
      </div>
      <div class="dialog-body">
        <slot />
      </div>
      <div :class="renderFooterClass()" v-if="isUsingButton">
        <div class="mr-4" :class="{ 'w-100': isButtonBlock }">
          <v-btn
            large
            text
            color="primary"
            @click="handleSecondButtonClick"
            class="custom-button"
            :class="{ 'mb-2': isMobileSize, 'dialog-button': !isButtonBlock }"
            :disabled="disableSecondButton"
            v-show="!isHideSecondButton"
            :block="isMobileSize || isButtonBlock"
            :loading="isSecondButtonLoading"
          >
            <AppBaseLabel :text="secondButtonLabel" fontSize="14" noMargin color="primary" />
          </v-btn>
        </div>
        <div :class="{ 'w-100': isButtonBlock }">
          <v-btn
            large
            @click="handleFirstButtonClick"
            :class="{ 'dialog-button': !isButtonBlock }"
            color="primary"
            class="custom-button"
            v-show="!isHideFirstButton"
            :disabled="disableFirstButton"
            :loading="isFirstButtonLoading"
            :block="isMobileSize || isButtonBlock"
          >
            <AppBaseLabel :text="firstButtonLabel" fontSize="14" noMargin color="white" />
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppBaseDialog',
  props: {
    // Dialog title font size
    dialogTitleFontSize: {
      type: String,
      default: '24',
    },

    // Check if device is in mobile
    isMobileSize: {
      type: Boolean,
      default: false,
    },

    // Adjust dialog width
    dialogWidth: {
      type: String,
      default: 'auto',
    },

    // Make dialog open or close
    isOpen: {
      type: Boolean,
      default: true,
    },

    // Set dialog title
    dialogTitle: {
      type: String,
      default: 'Dialog Title',
    },

    // Set if wanna use dialog title or not
    isUsingTitle: {
      type: Boolean,
      default: true,
    },

    // Set the label for the first button
    firstButtonLabel: {
      type: String,
      default: 'Yes',
    },

    // Set the label for the second button
    secondButtonLabel: {
      type: String,
      default: 'Cancel',
    },

    // Set if first button pressed then loading
    isFirstButtonLoading: {
      type: Boolean,
      default: false,
    },

    // SET if second button pressed then loading
    isSecondButtonLoading: {
      type: Boolean,
      default: false,
    },

    // Disable the button
    disableFirstButton: {
      type: Boolean,
      default: false,
    },
    disableSecondButton: {
      type: Boolean,
      default: false,
    },

    // Check if user want to use button
    isUsingButton: {
      type: Boolean,
      default: true,
    },

    // Check if user want to user button block
    isButtonBlock: {
      type: Boolean,
      default: false,
    },

    // Check if user want to hide second button
    isHideSecondButton: {
      type: Boolean,
      default: false,
    },

    // Check if user want to hide First button
    isHideFirstButton: {
      type: Boolean,
      default: false,
    },

    // Check if user want to use X
    isUsingX: {
      type: Boolean,
      default: false,
    },

    notUsingBackdrop: {
      type: Boolean,
      default: false,
    },

    alignCenter: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * @description Handle first button click
     *
     * @return {void} void
     */
    handleFirstButtonClick: function () {
      this.$emit('clickFirstButton');
    },
    /**
     * @description Handle first button click
     *
     * @return {void} void
     */
    handleSecondButtonClick: function () {
      this.$emit('clickSecondButton');
    },
    /**
     * @description Handle if user clicking outside modal
     *
     * @return {void} void
     */
    handleBackdropClick: function (isBackdrop = false) {
      if (isBackdrop && this.notUsingBackdrop) return;
      this.$emit('clickBackdrop');
    },

    /**
     * @description Render dialog footer class
     *
     * @return {object} object
     */
    renderFooterClass() {
      return {
        'd-flex': true,
        'bg-white': true,
        'dialog-footer': true,
        'justify-end': !this.isMobileSize && !this.alignCenter,
        'flex-column': this.isMobileSize,
        'align-end': !this.isMobileSize && !this.alignCenter,
        'flex-column-reverse': this.isMobileSize,
        'justify-center': this.alignCenter,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 30px;
  border-radius: 23px;
  background-color: #fff;
  position: relative;
  box-shadow: none !important;
}

.all-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.dialog {
  &-header {
    margin-bottom: 40px;
  }

  &-body {
    margin: 5px 0px;
  }

  &-footer {
    margin-top: 40px;
  }

  &-button {
    /* width: 134px; */
    height: 40px;
  }

  &-close {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &-block {
    width: 100%;
    height: 40px;
  }

  &-close:hover {
    cursor: pointer;
  }
}
</style>
