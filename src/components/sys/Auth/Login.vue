<template>
  <div id="LoginPage">
    <!--begin::Theme mode setup on page load-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root" id="kt_app_root">
      <!--begin::Authentication - Sign-in -->
      <div class="d-flex flex-column flex-lg-row flex-column-fluid">
        <!--begin::Body-->
        <div
          class="d-flex flex-column flex-lg-row-fluid w-lg-100 p-10 order-2 order-lg-1"
        >
          <!--begin::Form-->
          <div class="d-flex flex-center flex-column flex-lg-row-fluid">
            <!--begin::Wrapper-->
            <div class="w-lg-500px p-10">
              <!--begin::Form-->
              <div class="w-lg-500px p-10">
                <!--begin::Form-->
                <form
                  class="form-container form w-100"
                  id="kt_sign_in_form"
                  @submit.prevent="handleSubmit"
                >
                  <!--begin::Heading-->
                  <div class="text-center mb-11">
                    <!--begin::Title-->
                    <h1 class="text-dark fw-bolder mb-3">Zambia Digital EBS</h1>
                    <!--end::Title-->
                    <!--begin::Subtitle-->
                    <div class="text-gray-500 fw-semibold fs-6">Sign In</div>
                    <!--end::Subtitle=-->
                  </div>
                  <!--begin::Heading-->
                  <!--begin::Input group=-->
                  <div class="fv-row mb-8">
                    <!--begin::Email-->
                    <input
                      type="text"
                      placeholder="Phone Number"
                      v-model="PhoneNumber"
                      class="form-control bg-transparent"
                      autocomplete
                    />
                    <!--end::Email-->
                  </div>
                  <!--end::Input group=-->
                  <div class="fv-row mb-3">
                    <!--begin::Password-->
                    <input
                      type="password"
                      placeholder="Password"
                      v-model="password"
                      class="form-control bg-transparent"
                      autocomplete
                    />
                    <!--end::Password-->
                  </div>
                  <!--end::Input group=-->
                  <!--begin::Submit button-->
                  <div class="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      class="btn btn-primary shadow-lg"
                    >
                      <!--begin::Indicator label-->
                      <span class="indicator-label">Sign In</span>
                      <!--end::Indicator label-->
                      <!--begin::Indicator progress-->
                      <span class="indicator-progress"
                        >Please wait...
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                      </span>
                      <!--end::Indicator progress-->
                    </button>
                  </div>
                  <!--end::Submit button-->
                  <!--begin::Sign up-->

                  <!--end::Sign up-->
                  <!-- ... rest of the form ... -->
                </form>
                <!--end::Form-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Form-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Authentication - Sign-in-->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  data() {
    return {
      PhoneNumber: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["setAuthToken"]), // map Vuex action
    handleSubmit() {
      if (!this.PhoneNumber || !this.password) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You missed one of the form inputs!",
        });
      } else {
        axios
          .post(window.SERVER_URL + "AuthenticateUser", {
            PhoneNumber: this.PhoneNumber,
            password: this.password,
          })
          .then((response) => {
            if (response.status === 200) {
              // Check if any key is null (exclude timestamp and email verification keys)

            
              const user = response.data.user;
              const keysToExclude = [
                "created_at",
                "updated_at",
                "email_verified_at",
                "ProvinceID",
                "WardID",
              ];
              let invalidKeys = [];
              for (let key in user) {
                if (!keysToExclude.includes(key) && user[key] === null) {
                  // Convert the key to human readable form and add to the list
                  let readableKey = key.replace(/([A-Z])/g, " $1").trim(); // converts "WardName" to "Ward Name"
                  invalidKeys.push(readableKey);
                }
              }
              if (invalidKeys.length > 0) {
                Swal.fire(
                  "Error!",
                  `Invalid user data received! Missing fields: ${invalidKeys.join(
                    ", "
                  )}`,
                  "error"
                );
              } else {
                // Dispatch the Vuex action
                this.setAuthToken(response.data.user);


              
                sessionStorage.setItem(
                  "AuthToken",
                  JSON.stringify(response.data.user)
                );

                console.log(sessionStorage.getItem("AuthToken"));

                const sessionData = JSON.parse(
                  sessionStorage.getItem("AuthToken")
                )[0];
                const UserID = sessionData ? sessionData.UserID : null;

                sessionStorage.setItem("UserID", UserID);

                console.log('UserID '+sessionStorage.getItem('UserID'));

                window.CurrentUserID = sessionStorage.getItem('UserID');

                Swal.fire("Success!", "User authenticated!", "success");









    // Get the AuthToken item
    let authItem = sessionStorage.getItem("AuthToken");

    // Check if the item exists
    if (authItem !== null) {
        // Parse the item as JSON
        let authObj = JSON.parse(authItem);

        // Check if the first object in the array has a role property
        if (authObj[0] && authObj[0].hasOwnProperty('Role')) {
            // Save the role in the sessionStorage under the key CurrentLoggedInUserRole
            sessionStorage.setItem("CurrentLoggedInUserRole", authObj[0].Role);
            console.log('Role is set to: ', authObj[0].Role);
        } else {
            console.log('No role found in AuthToken.');
        }
    } else {
        console.log('AuthToken not found in sessionStorage.');
    }















              }
            }
          })
          .catch((error) => {
            Swal.fire("Error!", "Authentication failed!", "error");
          });
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  width: 100%;
  max-width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  width: 70%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.form-control,
.btn-primary {
  width: 100%;
  /* ... other styles ... */
}

@media (max-width: 767.98px) {
  .form-container {
    width: 100%;
    max-width: none;
  }
}

.w-lg-500px {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center;
}

@media (max-width: 767.98px) {
  .w-lg-500px {
    width: 100%;
    max-width: none;
  }

  .form-control,
  .btn-primary {
    width: 100%;
    max-width: none;
  }
}
</style>
