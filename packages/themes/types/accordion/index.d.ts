
/**
 *
 * Accordion Design Tokens
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module themes/accordion
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface AccordionDesignTokens extends ColorSchemeDesignToken<AccordionDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken accordion.transition.duration
    */
    transitionDuration?: string;
    }
}
