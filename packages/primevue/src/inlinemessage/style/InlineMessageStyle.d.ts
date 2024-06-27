/**
 *
 * InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 *
 * @module inlinemessagestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum InlineMessageClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inlinemessage'
}

export interface InlineMessageStyle extends BaseStyle {}
