
/**
 *
 * InputGroup Design Tokens
 *
 * [Live Demo](https://www.primevue.org/inputgroup/)
 *
 * @module themes/inputgroup
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface InputGroupDesignTokens extends ColorSchemeDesignToken<InputGroupDesignTokens> {

    /**
    * Used to pass tokens of the addon section
    */
    addon?: {
        
    /**
    * Background of addon
    *
    * @designToken inputgroup.addon.background
    */
    background?: string;
    /**
    * Border color of addon
    *
    * @designToken inputgroup.addon.border.color
    */
    borderColor?: string;
    }
}
