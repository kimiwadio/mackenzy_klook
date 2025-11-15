# Assignment 1

# References
Klook: https://www.klook.com/

# Setup
1. Make sure you have Node.js installed in your system
2. Create a app.js file to use the module \
`const klook = require("./mackenzy_klook.js");`

# Functions

## 1. searchPackagesByCountry(country)
Purpose: View all packages for searched country

Params: String

## 2. viewPackageDetails(packageId)
Purpose: View details about a specific package

Params: String

## 3. bookPackage(packageId, noPeople, date, time)
Purpose: book one of the package

Params: packageId: String, noPeople: Int, date: String (YYYY/MM/DD), time: String (HH:MM)

## 4. listUserBooking()
Purpose: View all bookings made

Params: There is no params

## 5. cancelBooking(bookingRef)
Purpose: Cancel booking using reference number

Params: Int

## 6. usePromoCode(code)
Purpose: Redeeem Promo Code to get a discount for next booking

Params: String

### Example
```
const klook = require("./mackenzy_klook.js");
klook.searchPackagesByCountry("Singapore");
klook.viewPackageDetails("PKG001");
klook.usePromoCode("NEWUSER");
klook.bookPackage("PKG001",2,"2025/12/10","23:50");
klook.listUserBooking();
klook.cancelBooking(1);
```