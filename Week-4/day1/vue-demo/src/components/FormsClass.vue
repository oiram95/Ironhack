<template>
  <div class="form-class-container">
    <div>
      <h1>Form Class</h1>
      <p>
        Para poder conectar nuestros inputs[formControls] con nuestra
        data[formData], usamos la directiva v-model para poder implementar el
        concepto de <strong>two-way data handling</strong>
      </p>
    </div>
    <div id="myForm">
      <div>
        <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
      </div>
      <form @submit="SubmitForm">
        <div id="user-input-name-type-text">
          <label for="name">Name</label>
          <!-- If you want whitespace from user input to be trimmed automatically, you can add the trim modifier to your v-model-managed inputs -->

          <!-- Ejemplo Basico sin usar el .trim -->
          <!-- <input
          type="text"
          autocomplete="off"
          id="name"
          v-model="formValues.formName"
        /> -->

          <!-- Ejemplo Basico usando el .trim  -->
          <!-- <input
            type="text"
            autocomplete="off"
            id="name"
            v-model.trim="formValues.formName"
          /> -->

          <!-- Ejemplo Basico usando el .trim + el .lazy -->
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model.trim.lazy="formValues.formName"
          />
        </div>
        <div id="user-input-profileSummary-type-textArea">
          <label for="profile">Profile Summary</label>
          <textarea
            name="profile"
            id="profile"
            cols="30"
            rows="10"
            v-model="formValues.profileSummary"
          />
        </div>
        <div id="user-input-country-type-singleSelect">
          <label for="country">Country</label>
          <select name="country" id="country" v-model="formValues.country">
            <option>Select a country</option>
            <option value="spain">Spain</option>
            <option value="venezuela">Venezuela</option>
            <option value="portugal">Portugal</option>
            <option value="holanda">The Netherlands</option>
          </select>
        </div>
        <div id="user-input-jobRelocation-type-multipleSelect">
          <label for="job-location"
            >Are you Willing to relocate to any of these countries?</label
          >
          <select
            name="job-location"
            id="job-location"
            multiple
            v-model="formValues.jobLocation"
          >
            <option>Select more than one country</option>
            <option value="qatar">Qatar</option>
            <option value="ksa">Saudi Arabia</option>
            <option value="ethiopia">Ethiopia</option>
          </select>
        </div>
        <div id="user-input-remoteWork-type-checkbox">
          <input
            type="checkbox"
            id="remote-work"
            v-model="formValues.remoteWork"
          />
          <label for="remote-work"
            >Are you open to work remotely 100% of the time?</label
          >
        </div>
        <div id="user-input-skillSet-type-checkbox-">
          <label>What are your skills?</label>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="html"
              value="html"
              v-model="formValues.skillSet"
            />
            <label for="html">HTML</label>
          </div>

          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="css"
              value="css"
              v-model="formValues.skillSet"
            />
            <label for="css">CSS</label>
          </div>

          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="javascript"
              value="javascript"
              v-model="formValues.skillSet"
            />
            <label for="javascript">JS</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="vue"
              value="vue"
              v-model="formValues.skillSet"
            />
            <label for="vue">Vue</label>
          </div>
        </div>
        <div id="user-input-yearsOfExperience-type-radioButton">
          <label>Years of Experience</label>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="0-3"
              value="0-3"
              v-model="formValues.yearsOfExperience"
            />
            <label for="0-3">0-3</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="4-6"
              value="4-6"
              v-model="formValues.yearsOfExperience"
            />
            <label for="4-6">4-6</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="7-10"
              value="7-10"
              v-model="formValues.yearsOfExperience"
            />
            <label for="7-10">7-10</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="10+"
              value="10+"
              v-model="formValues.yearsOfExperience"
            />
            <label for="10+">10+</label>
          </div>
        </div>
        <div id="user-input-profileAge-type-number-with-a-enter-modifier">
          <label for="profile-age">Tell me your age</label>
          <input
            type="number"
            id="profile-age"
            @keyup.enter="submitForm"
            v-model.number="formValues.profileAge"
          />
        </div>
        <!-- The enter modifier ensures that the expression is only executed when the user releases the Enter key -->
        <!-- Often, our inputs will automatically type the input as a String – even
        if we declare our input to be type number. One way to ensure that our
        value is handled as a Number is to use the .number modifier. -->
        <button>Submit Form</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        formName: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: false,
        skillSet: [],
        yearsOfExperience: "",
        profileAge: null,
      },
      //   Website to see Modifiers - https://learnvue.co/tutorials/v-model-guide
    };
  },
  methods: {
    submitForm() {
      //   jarko.preventDefault();
      console.log("Form Values", this.formValues);
    },
  },
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}
</style>
