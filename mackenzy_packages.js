const packages = [
  {
    country: "Singapore",
    activities: [
      {
        packageId: "PKG001",
        name: "Universal Studios Singapore",
        price: 79.0,
        description:
          "Enjoy rides, shows, and attractions at Universal Studios Singapore.",
      },
      {
        packageId: "PKG002",
        name: "Singapore Zoo Entry Ticket",
        price: 35.0,
        description:
          "Explore the Singapore Zoo with open exhibits and animal encounters.",
      },
      {
        packageId: "PKG003",
        name: "Gardens by the Bay Entry",
        price: 28.0,
        description:
          "Explore the iconic Gardens by the Bay and see the Supertrees and Flower Dome.",
      },
    ],
  },
  {
    country: "Japan",
    activities: [
      {
        packageId: "PKG004",
        name: "Tokyo Disneyland Ticket",
        price: 95.0,
        description:
          "One-day entry ticket to Tokyo Disneyland including rides and shows.",
      },
      {
        packageId: "PKG005",
        name: "Osaka Aquarium Kaiyukan",
        price: 25.0,
        description:
          "Visit one of the largest aquariums in the world and see marine life up close.",
      },
    ],
  },
];

let bookings = [];
let promo = 0;

module.exports = {
  // See all packages that a country have
  searchPackagesByCountry(country) {
    const package = packages.find((package) => package.country === country);
    return !package
      ? console.log(`There are no package For ${country}`)
      : console.log(
          `Packages for ${country}:` +
            package.activities
              .map(
                (pkg) =>
                  `ID: ${pkg.packageId} \nName: ${pkg.name} \nPrice: ${pkg.price} \nDescription: ${pkg.description} \n`
              )
              .join("\n")
        );
  },

  // See packages detail such as price and description
  viewPackageDetails(packageId) {
    const package = packages
      .flatMap((pkg) => pkg.activities)
      .find((pkg) => pkg.packageId == packageId);
    return !package
      ? console.log(`No such package ID:${packageId}`)
      : console.log(
          `Package ID: ${package.packageId} \nName: ${package.name} \nPrice: ${package.price} \nDescription: ${package.description} `
        );
  },

  // Book a package
  bookPackage(packageId, noPeople, date, time) {
    const package = packages
      .flatMap((pkg) => pkg.activities)
      .find((pkg) => pkg.packageId == packageId);
    if (!package) return console.log(`No such package ID:${packageId}`);
    if (isNaN(noPeople) || parseInt(noPeople) < 1 || !Number.isInteger(Number(noPeople))) return console.log(`Number of people must be a whole number and more than 0`);
    const inputDate = new Date(date);
    const today = new Date();
    if(isNaN(inputDate.getTime())) return console.log("Enter a valid date format (YYYY-MM-DD)");
    if(inputDate.setHours(0,0,0,0) < today.setHours(0,0,0,0)) return console.log("Date cannot be in the past");
    const timeRegex = /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]$/;
    if(!timeRegex.test(time)) return console.log("Enter an actual time");
    bookings.push({
      bookRef: bookings.length + 1,
      packageId: packageId,
      price: (noPeople * package.price * (1 - promo)).toFixed(2),
      noPeople: noPeople,
      date: date,
      time: time,
    });
    promo = 1;
    return console.log("Book successfully\n");
  },


  // View all packages booked
  listUserBooking() {
    if (bookings.length === 0) return console.log(`No bookings made yet.`);

    return console.log(
      bookings
        .map(
          (b) =>
            `Booking Ref: ${b.bookRef} \npackageId: ${b.packageId} \nDate:${b.date} \nNo of People:${b.noPeople} \nTotal Price:\$${b.price} \n `
        )
        .join("\n")
    );
  },

  // Cancel booking
  cancelBooking(bookingRef) {
    const index = bookings.findIndex((b) => b.bookRef === bookingRef);
    if (index == -1)
      return console.log(`There are no such Booking Ref: ${bookingRef}`);
    bookings.splice(bookings[index], 1);
    return console.log(
      `Booking ref: ${bookingRef}, Cancelled successfully. \n`
    );
  },

  // Use Gift / Promo code for discount
  usePromoCode(code){
    switch (code) {
      case "NEWUSER":
        promo = 0.1; // 10% discount
        break;
      case "WELCOME":
        promo = 0.2; // 20% discount
        break;
      case "FORFUN":
        promo = 0.3; // 30% discount
        break;
      default:
        return console.log('No such Promo code \n');
    };
    return console.log('Promo code successfully redeem \n');
  },
};
