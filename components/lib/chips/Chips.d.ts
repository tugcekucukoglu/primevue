/**
 *
 * Chips groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/inputchips/)
 *
 * @module chips
 *
 */
import 'vue';
import * as InputChips from '../inputchips';
import { DefineComponent, EmitFn, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom passthrough(pt) option method.
 */
export interface ChipsPassThroughMethodOptions extends InputChips.InputChipsPassThroughMethodOptions {}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface ChipsSharedPassThroughMethodOptions extends InputChips.InputChipsSharedPassThroughMethodOptions {}

/**
 * Custom add event.
 * @see {@link ChipsEmits.add}
 */
export interface ChipsAddEvent extends InputChips.InputChipsAddEvent {}

/**
 * Custom remove event.
 * @see {@link ChipsEmits.remove}
 * @extends ChipsAddEvent
 */
export interface ChipsRemoveEvent extends ChipsAddEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link ChipsProps.pt}
 */
export interface ChipsPassThroughOptions extends InputChips.InputChipsPassThroughOptions {}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ChipsPassThroughAttributes extends InputChips.InputChipsPassThroughAttributes {}

/**
 * Defines current inline state in Chips component.
 */
export interface ChipsState extends InputChips.InputChipsState {}

/**
 * Defines valid properties in Chips component.
 */
export interface ChipsProps extends InputChips.InputChipsProps {}
/**
 * Defines valid slots in Chips slots.
 */
export interface ChipsSlots extends InputChips.InputChipsSlots {}
/**
 * Defines valid emits in Chips component.
 */
interface ChipsEmitsOptions {}

export declare type ChipsEmits = EmitFn<ChipsEmitsOptions> & InputChips.InputChipsEmits;

/**
 * @deprecated Deprecated since v4. Use InputChips component instead.
 *
 * **PrimeVue - Chips**
 *
 * _Chips is used to enter multiple values on an input field._
 *
 * [Live Demo](https://www.primevue.org/inputchips/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Chips: DefineComponent<ChipsProps, ChipsSlots, ChipsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Chips: GlobalComponentConstructor<ChipsProps, ChipsSlots, ChipsEmits>;
    }
}

export default Chips;
