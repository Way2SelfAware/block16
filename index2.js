// Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."

// const timmy = {
//   prescription: "acetaminophen",
//   pricePerRefill: 25,
//   refills: 3,
//   subscription: false,
//   coupon: true,
// };

// const sarah = {
//   prescription: "diphenhydramine",
//   pricePerRefill: 50,
//   refills: 1,
//   subscription: true,
//   coupon: false,
// };

// const rocky = {
//   prescription: "phenylephrine",
//   pricePerRefill: 30,
//   refills: 5,
//   subscription: true,
//   coupon: true,
// };

// Can I select these values for all the customers?
// const subscription = timmy.subscription;
// const coupon = timmy.coupon;
// const pricePerRefill = timmy.pricePerRefill;
// const refills = timmy.refills;

//Setting up the if, else, and else if statements to check boolean values.
// function transaction(pricePerRefill, refills, subscription, coupon) {
//   if (subscription === true && coupon === false) {
//     finalAmount = pricePerRefill * refills * 1.25;
//   } else if (subscription === false && coupon === true) {
//     finalAmount = pricePerRefill * refills * 1.25;
//   } else subscription === true && coupon === true;
//   finalAmount = pricePerRefill * refills * 1.25 - 10;
// }
// transaction();
// console.log(finalAmount);

//SECOND ATTEMPT

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function transaction(pricePerRefill, refills, subscription, coupon) {
  let finalAmount;

  if (subscription === true && coupon === false) {
    finalAmount = pricePerRefill * refills * 0.75;
  } else if (subscription === false && coupon === true) {
    finalAmount = pricePerRefill * refills - 10;
  } else if (subscription === true && coupon === true) {
    finalAmount = pricePerRefill * refills * 0.75 - 10;
  } else {
    finalAmount = pricePerRefill * refills;
  }

  return finalAmount;
}

// Timmy  total
console.log( "Timmy, your grand total is $" + 
  transaction(
    timmy.pricePerRefill,
    timmy.refills,
    timmy.subscription,
    timmy.coupon
  )
);

// Sarah total
console.log(
  "Sarah, your grand total is $" +
    transaction(
      sarah.pricePerRefill,
      sarah.refills,
      sarah.subscription,
      sarah.coupon
    )
);

// Rocky total
console.log(
  "Rocky, your grand total is $" +
    transaction(
      rocky.pricePerRefill,
      rocky.refills,
      rocky.subscription,
      rocky.coupon
    )
);