const state = {
  currentPage: 1,
  progress: 0,
  formStep: [
    {
      stepId: 1,
      text: "About you",
      success: false,
      listField: {
        name: {
          value: "",
          label: "Full Name",
          type: "text",
          validate() {
            if (this.value == "") {
              this.error = true;
              this.message = "The field is required!";
            }
          },
          error: false,
          message: "",
        },
        email: {
          value: "",
          label: "Your Email",
          type: "email",
          validate() {
            if (this.value == "") {
              this.error = true;
              this.message = "The field is required!";
              return;
            }
            if (!/^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.value)) {
              this.error = true;
              this.message = "The field must be email!";
            }
          },
          error: false,
          message: "",
        },
      },
    },
    {
      stepId: 2,
      text: "About Your Company",
      success: false,
      listField: {
        company: {
          value: "",
          label: "Your Company Name",
          type: "text",
          validate() {
            if (this.value.length <= 0) {
              this.error = true;
              this.message = "The field is required!";
              return false;
            }
            return true;
          },
          error: false,
          message: "",
        },
        numberEmployees: {
          value: "",
          label: "Number of Employees",
          type: "text",
          validate() {
            if (this.value == "") {
              this.error = true;
              this.message = "The field is required!";
              return;
            } else {
              this.error = false;
              this.message = "";
            }

            if (isNaN(this.value)) {
              this.error = true;
              this.message = "Should be a valid value!";
              return false;
            }
            return true;
          },
          error: false,
          message: "",
        },
      },
    },
    {
      stepId: 3,
      text: "Finishing Up",
      success: false,
      listField: {
        connectUs: {
          value: "",
          label: "From Where did you hear about us?",
          type: "select",
          validate() {
            if (this.value.length <= 0) {
              this.error = true;
              this.message = "The field is required!";
            } else {
              this.error = false;
              this.message = "";
            }
          },
          selectTitle: "-- Choose answer --",
          optionData: ["Friend", "FaceBook", "Websites"],
          error: false,
          message: "",
        },
        terms: {
          value: false,
          label: "",
          type: "checkbox",
          title: "I accept terms & conditions",
          validate() {
            if (!this.value) {
              this.error = true;
              this.message = "The field is required!";
              return;
            } else {
              this.error = false;
              this.message = "";
            }
          },
          error: true,
          message: "",
        },
      },
    },
  ],
};
export default state;
