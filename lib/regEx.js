import { regEx } from './base.js'

// regex
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
const phoneRegex = /^08[0-9]{9}$/
const pincodeRegex = /^[1-9]{1}[0-9]{4}$/
const numericRegex = /^[0-9]*$/
const alphaRegex = /^[a-zA-Z]*$/
const alphaNumericRegex = /^[a-zA-Z0-9]*$/
const strongPasswordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,250}$/
const validNameRegex = /^([a-zA-Z]+\s?\.?[a-zA-Z]+)+$/
const numberWithMaxTwoDecimalPointRegex = /^[0-9]*\.*[0-9]{1,2}$/

// testing regex
export const email = regEx(emailRegex)
export const phone = regEx(phoneRegex)
export const pincode = regEx(pincodeRegex)
export const numeric = regEx(numericRegex)
export const alpha = regEx(alphaRegex)
export const alphaNumeric = regEx(alphaNumericRegex)
export const strongPassword = regEx(strongPasswordRegex)
export const validName = regEx(validNameRegex)
export const numberWithMaxTwoDecimalPoint = regEx(
  numberWithMaxTwoDecimalPointRegex
)

