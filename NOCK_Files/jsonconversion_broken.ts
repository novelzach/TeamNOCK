var isValidElement = function isValidElement(element) {
  return element.name && element.value;
};


var formToJSON_deconstructed = function formToJSON_deconstructed(elements) {

  var reducerFunction = function reducerFunction(data, element) {
    data[element.name] = element.value
    return data;
  };

  var reducerInitialValue = {};
  var formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

  return formData;
};


var formToJSON = function formToJSON(elements) {
  return [].reduce.call(elements, function (data, element) {
    if (isValidElement(element)) {      
      data[element.name] = element.value;
    }
    return data;
  }, {});
};

var handleFormSubmit = function handleFormSubmit(event) {
  event.preventDefault();

  // no idea why this doesn't work...
  var data = formToJSON(form.elements);

  // For testing only:
  var dataContainer =  JSON.stringify(data, null, "  ");

  // this is where it would get passed to the post function
};

var form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
