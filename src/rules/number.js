module.exports = function (min, max) {
  return function (num, success, failure) {
    if(typeof num !== "number"){
      failure("The :field must be a number.");
    }
    var minType = typeof min,
      maxType = typeof max;
    if(minType === "number" && maxType === "number" && (num < min || num > max)){
      failure(`The :field's must be between ${min} and ${max}.`);
    }else if(minType === "number" && num < min){
      failure(`The :field's must be at least ${min}.`);
    }else if(maxType === "number" && num > max){
      failure(`The :field's may not be greater than ${max}.`);
    }
    success();
  }
};