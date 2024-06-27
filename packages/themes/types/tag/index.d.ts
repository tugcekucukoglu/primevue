/**
 *
 * Tag Design Tokens
 *
 * [Live Demo](https://www.primevue.org/tag/)
 *
 * @module themes/tag
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TagDesignTokens extends ColorSchemeDesignToken<TagDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Font size of root
         *
         * @designToken tag.font.size
         */
        fontSize?: string;
        /**
         * Font weight of root
         *
         * @designToken tag.font.weight
         */
        fontWeight?: string;
        /**
         * Padding of root
         *
         * @designToken tag.padding
         */
        padding?: string;
        /**
         * Gap of root
         *
         * @designToken tag.gap
         */
        gap?: string;
        /**
         * Border radius of root
         *
         * @designToken tag.border.radius
         */
        borderRadius?: string;
        /**
         * Rounded border radius of root
         *
         * @designToken tag.rounded.border.radius
         */
        roundedBorderRadius?: string;
    };
}
