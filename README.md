# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Klook: https://www.klook.com/

# Setup
Create a app.js file, to use the node module add \
const package = require("./mackenzy_packages.js");

To use the node module functions just add \
package.functionName(); \
The functionName are functions are in the node module, more about the functuions will be stated below

# Functions
> [!IMPORTANT]
> All parameters are ***required*** for functions with parameters in it.
## 1. searchPackagesByCountry(country)
Purpose: View all packages for searched country

How to use: country is a String value and only country with packages are "Singapore" and "Japan", it is case sensitive

## 2. viewPackageDetails(packageId)
Purpose: View details about a specific package

How to use: packageId is a String value and to see packageId open the node module and in it there is a packages array with all packageId, it is case sensitive

## 3. bookPackage(packageId, noPeople, date, time)
Purpose: book one of the package

How to use: packageId is a String value and case sensitive, noPeople is a Integer value and must be a whole number, date is a String value and formated in (YYYY/MM/DD), time is a String value formated 24-hour format (HH:MM)

## 4. listUserBooking()
Purpose: View all bookings made

How to use: there is no parameters

## 5. cancelBooking(bookingRef)
Purpose: Cancel booking using reference number

How to use: bookingRef is a Integer value, to see reference number for a specific booking use listUserBooking() function first
