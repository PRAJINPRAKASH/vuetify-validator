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
    constructor(context) {
        this.context = context
        this.$t = this.context.$t || ((message) => message)
    }
    required(ctx, message) {
        return (v) => required(v) || ctx.$t(message)
    }
    /* Is true */
    isTrue(ctx, message) {
        return (v) => Boolean(v) || ctx.$t(message)
    }
    /* Numeric */
    isNumeric(ctx, message) {
        return (v) => numeric(v) || ctx.$t(message)
    }
    /* Server error with */
    seWith(ctx, name) {
        return (v) =>
            (v && !ctx.serverErrorDetails[name]) || String(ctx.serverErrorDetails[name])
    }
    /* Server message error contains */
    seContains(ctx, name) {
        return (v) => (v && !ctx.serverError.includes(name)) || ctx.serverError
    }
    // other custom rules
    isEmailOrPhone(ctx, message) {
        return (v) => email(v) || phone(v) || ctx.$t(message)
    }

    isEmail(ctx, message) {
        return (v) => email(v) || ctx.$t(message)
    }

    isPhone(ctx, message) {
        return (v) => phone(v) || ctx.$t(message)
    }

    isStrongPassword(ctx, message) {
        return (v) => strongPassword(v) || ctx.$t(message)
    }

    isEquals(ctx, valueKey, message) {
        return (v) => v === get(ctx, valueKey) || ctx.$t(message)
    }

    min(ctx, minLength, message) {
        return (v) => !v || len(v) >= minLength || ctx.$t(message)
    }

    max(ctx, maxLength, message) {
        return (v) => !v || len(v) <= maxLength || ctx.$t(message)
    }

    minValue(ctx, minLimit, message) {
        return (v) =>
            parseFloat(v) >= parseFloat(get(ctx, minLimit)) ||
            `${ctx.$t(message)} ${get(ctx, minLimit)}`
    }

    maxValue(ctx, maxLimit, message) {
        return (v) =>
            parseFloat(v) <= parseFloat(get(ctx, maxLimit)) ||
            `${ctx.$t(message)} ${get(ctx, maxLimit)}`
    }

    isValidName(ctx, message) {
        return (v) => validName(v) || ctx.$t(message)
    }

    isNumberWithMaxTwoDecimal(ctx, message) {
        return (v) => numberWithMaxTwoDecimalPoint(v) || ctx.$t(message)
    }


    isAlpha(ctx, message) {
        return (v) => alpha(v) || ctx.$t(message)
    }
    IsAlphaNumeric(ctx, message) {
        return (v) => alphaNumeric(v) || ctx.$t(message)
    }
    IsPincode(ctx, message) {
        return (v) => pincode(v) || ctx.$t(message)
    }

    IsValidFile(ctx, maxSize, allowedTypes, message) {
        return (v) =>
            (v.size <= maxSize && allowedTypes.includes(v.type)) || ctx.$t(message)
    }

}

export default VuetifyValidator

