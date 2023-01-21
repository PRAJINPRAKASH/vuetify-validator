import lodash from 'lodash'
const { get } = lodash
import {
    email,
    phone,
    numeric,
    strongPassword,
    validName,
    numberWithMaxTwoDecimalPoint,
    alpha,
    alphaNumeric,
    pincode,
} from './lib/regEx.js'
import { required, len } from './lib/base.js'


class VuetifyValidator {
    constructor(context,i18n) {
        this.context = context
        this.$t = i18n || this.context.$t || (message => message)
    }
    required(message='This Field is required !') {
        return (v) => required(v) || this.$t(message)
    }
    /* Is true */
    isTrue(message='This field should be true !') {
        return (v) => Boolean(v) || this.$t(message)
    }
    /* Numeric */
    isNumeric(message='This Fields Should be numeric') {
        return (v) => numeric(v) || this.$t(message)
    }
    /* Server error with */
    seWith(name) {
        return (v) =>
            (v && !this.context.serverErrorDetails[name]) || String(this.context.serverErrorDetails[name])
    }
    /* Server message error contains */
    seContains(name) {
        return (v) => (v && !this.context.serverError.includes(name)) || this.context.serverError
    }
    // other custom rules
    isEmailOrPhone(message='Should be email or phone number') {
        return (v) => email(v) || phone(v) || this.$t(message)
    }

    isEmail(message='Should be a valid email') {
        return (v) => email(v) || this.$t(message)
    }

    isPhone(message='Should be a valid phone number') {
        return (v) => phone(v) || this.$t(message)
    }

    isStrongPassword(message='Please enter a strong password') {
        return (v) => strongPassword(v) || this.$t(message)
    }

    isEquals(valueKey, message='Not matching !') {
        return (v) => v === get(this.context,valueKey) || this.$t(message)
    }

    min(minLength, message) {
        return (v) => !v || len(v) >= minLength || this.$t(message)
    }

    max(maxLength, message) {
        return (v) => !v || len(v) <= maxLength || this.$t(message)
    }

    minValue(minLimit, message) {
        return (v) =>
            parseFloat(v) >= parseFloat(get(this.context,minLimit)) ||
            `${this.$t(message)} ${get(this.context,minLimit)}`
    }

    maxValue(maxLimit, message) {
        return (v) =>
            parseFloat(v) <= parseFloat(get(this.context,maxLimit)) ||
            `${this.$t(message)} ${get(this.context,maxLimit)}`
    }

    isValidName(message='Shoul be valid name !') {
        return (v) => validName(v) || this.$t(message)
    }

    isNumberWithMaxTwoDecimal(message) {
        return (v) => numberWithMaxTwoDecimalPoint(v) || this.$t(message)
    }


    isAlpha(message) {
        return (v) => alpha(v) || this.$t(message)
    }
    IsAlphaNumeric(message) {
        return (v) => alphaNumeric(v) || this.$t(message)
    }
    IsPincode(message) {
        return (v) => pincode(v) || this.$t(message)
    }

    IsValidFile(maxSize, allowedTypes, message='Should be a valid file!') {
        return (v) =>
            (v.size <= maxSize && allowedTypes.includes(v.type)) || this.$t(message)
    }

    matchRegex(expr, message) {
        return (v) => expr.test(v) || this.$t(message)
    }
}

export default VuetifyValidator

