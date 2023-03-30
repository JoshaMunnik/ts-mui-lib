/**
 * {@link UFFormFieldChangeEvent} defines a minimal changed structure used by the various form elements.
 */
export type UFFormFieldChangeEvent = {
    name: string;
    type: string;
    value: string | number | boolean | any;
};
