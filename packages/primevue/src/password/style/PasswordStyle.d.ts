/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primevue.org/password/)
 *
 * @module passwordstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum PasswordClasses {
    /**
     * Class name of the unmask icon element
     */
    unmaskIcon = 'p-password-unmask-icon',
    /**
     * Class name of the overlay element
     */
    overlay = 'p-password-overlay',
    /**
     * Class name of the meter element
     */
    meter = 'p-password-meter',
    /**
     * Class name of the meter label element
     */
    meterLabel = 'p-password-meter-label',
    /**
     * Class name of the meter text element
     */
    meterText = 'p-password-meter-text'
}

export interface PasswordStyle extends BaseStyle {}
