import { carData } from "../data";
const carsApi = {
  getCars: (callback) => {
    setTimeout(() => {
      callback(carData);
    }, 1000);
  },

  postSubmitForm: (formData, callback) => {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    console.log(formDataJsonString);
    fetch("http://localhost:4040/contact-us", {
      method: "POST",
      mode: "cors",
      headers: new Headers({ "content-type": "application/json" }),
      body: formDataJsonString,
    })
      .then((response) => {
        //const jsonData = response.json();

        callback(true);
      })
      .catch((error) => {});
  },
};

export default carsApi;
