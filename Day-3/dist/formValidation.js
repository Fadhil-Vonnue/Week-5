"use strict";
const rules = {
    name: [{ required: true }, { minLength: 3 }],
    username: [
        { required: true },
        {
            custom: (value) => {
                if (typeof value === "string")
                    if (value.toLowerCase() !== "admin")
                        return "true";
                return null;
            },
        },
    ],
    email: [{ required: true }],
    phone: [{ pattern: /[0-9]{10}/ }],
    msg: [{ required: true }, { minLength: 20 }],
    password: [{ required: true }, { minLength: 8 }],
};
class FormValidator {
    form;
    rules;
    constructor(form, rules) {
        this.form = form;
        this.rules = rules;
        this.form = form;
        this.rules = rules;
    }
    validateAll() {
        let res = { valid: true, errors: {} };
        let errors = {};
        Object.keys(this.rules).forEach((key, index) => {
            let error = this.validate({ name: key, value: this.form[key] });
            if (!error.valid)
                res.valid = false;
            Object.assign(errors, error.errors);
        });
        res["errors"] = errors;
        return res;
    }
    validate(field) {
        let flag = 0;
        let errors = {};
        if (typeof field.value === "string")
            if (this.rules[field.name]) {
                let ruleArr = this.rules[field.name];
                if (ruleArr !== undefined)
                    for (const rule of ruleArr) {
                        let rule1 = Object.keys(rule)[0];
                        switch (rule1) {
                            case "required":
                                if (field.value.trim() == "") {
                                    flag = 1;
                                    errors[rule1] =
                                        `${String(rule1)} is required`;
                                    break;
                                }
                                else
                                    break;
                            case "minLength":
                                if (rule.minLength &&
                                    rule.minLength > field.value.length &&
                                    field.value) {
                                    console.log(`${field.name} has a minlength of ${rule.minLength}`);
                                    errors[rule1] =
                                        `${field.name} has a minlength of ${rule.minLength}`;
                                    flag = 1;
                                    break;
                                }
                                else
                                    break;
                            case "pattern":
                                if (rule.pattern &&
                                    rule.pattern.test(field.value)) {
                                    break;
                                }
                                else {
                                    console.log(`${field.name} doesnt follow the pattern`);
                                    errors[rule1] =
                                        `${field.name} doesnt follow the pattern`;
                                    flag = 1;
                                    break;
                                }
                            case "email":
                                if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(field.value)) {
                                    break;
                                }
                                else {
                                    console.log(`${field.name} doesnt follow the pattern example@mail.com`);
                                    errors[rule1] =
                                        `${field.name} doesnt follow the pattern example@mail.com`;
                                    flag = 1;
                                    break;
                                }
                            case "custom":
                                if (rule.custom && rule.custom(field.value)) {
                                    console.log("not an admin");
                                    errors[rule1] =
                                        `${String(rule1)} is not an admin`;
                                    flag = 1;
                                }
                                else
                                    break;
                        }
                    }
            }
        if (flag) {
            return {
                valid: false,
                errors,
            };
        }
        else {
            return {
                valid: true,
                errors,
            };
        }
    }
}
const newForm = {
    name: "MAX",
    username: "employee",
    email: "max@gmail.com",
    phone: "952545747",
    msg: "hdsfajkhfjksdkjfhkjsadfhkjshakjfdkjashdfkjgkjdkjsdhkjshdgkjdhsjkghkjhuehwihhdjhsdfkjhkdfkshdkjshdfkjhsdkjfvbjkbsdjbjkbvjk",
    password: "maxDa@123",
};
const validator = new FormValidator(newForm, rules);
console.log(validator.validateAll());
