/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER } from './keyboard/overlay-keyboard-dispatcher';
import { Overlay } from './overlay';
import { OVERLAY_CONTAINER_PROVIDER } from './overlay-container';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER, CdkConnectedOverlay, CdkOverlayOrigin, } from './overlay-directives';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import * as ɵngcc0 from '@angular/core';
export class OverlayModule {
}
OverlayModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OverlayModule });
OverlayModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OverlayModule_Factory(t) { return new (t || OverlayModule)(); }, providers: [
        Overlay,
        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[BidiModule, PortalModule, ScrollingModule], ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OverlayModule, { declarations: function () { return [CdkConnectedOverlay, CdkOverlayOrigin]; }, imports: function () { return [BidiModule, PortalModule, ScrollingModule]; }, exports: function () { return [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, PortalModule, ScrollingModule],
                exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
                declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                providers: [
                    Overlay,
                    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                ]
            }]
    }], null, null); })();
/**
 * @deprecated Use `OverlayModule` instead.
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
export const OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9vdmVybGF5LW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQ0FBb0MsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzVGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUNMLDhDQUE4QyxFQUM5QyxtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0scUNBQXFDLENBQUM7O0FBWTNFLE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBVDVCLFFBQVEsU0FBQztLQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLGtCQUNwRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7ZUFDakU7VUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7YUFDckQsU0FBUyxFQUFFLHNCQUNULE9BQU8sc0JBQ1A7c0NBQThDLG1CQUMvQyxlQUNGOzs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFJO0FBSVE7QUFDakI7QUFBa0I7QUFDYjtBQUVOLE1BQU0sT0FBTyxpQkFBaUIsR0FBZTtBQUM3QyxJQUFFLE9BQU87QUFDVCxJQUFFLHNCQUFzQjtBQUN4QixJQUFFLG9DQUFvQztBQUN0QyxJQUFFLDBCQUEwQjtBQUM1QixJQUFFLDhDQUE4QztBQUNoRCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCaWRpTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge05nTW9kdWxlLCBQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09WRVJMQVlfS0VZQk9BUkRfRElTUEFUQ0hFUl9QUk9WSURFUn0gZnJvbSAnLi9rZXlib2FyZC9vdmVybGF5LWtleWJvYXJkLWRpc3BhdGNoZXInO1xuaW1wb3J0IHtPdmVybGF5fSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IHtPVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUn0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQge1xuICBDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSLFxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxuICBDZGtPdmVybGF5T3JpZ2luLFxufSBmcm9tICcuL292ZXJsYXktZGlyZWN0aXZlcyc7XG5pbXBvcnQge092ZXJsYXlQb3NpdGlvbkJ1aWxkZXJ9IGZyb20gJy4vcG9zaXRpb24vb3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgUG9ydGFsTW9kdWxlLCBTY3JvbGxpbmdNb2R1bGVdLFxuICBleHBvcnRzOiBbQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgU2Nyb2xsaW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbl0sXG4gIHByb3ZpZGVyczogW1xuICAgIE92ZXJsYXksXG4gICAgQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheU1vZHVsZSB7fVxuXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBPdmVybGF5TW9kdWxlYCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgT1ZFUkxBWV9QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsXG4gIE9WRVJMQVlfS0VZQk9BUkRfRElTUEFUQ0hFUl9QUk9WSURFUixcbiAgT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIsXG4gIENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIsXG5dO1xuIl19