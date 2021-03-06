import { Injectable, SimpleChanges } from '@angular/core';
import * as Handsontable from 'handsontable-pro';

const AVAILABLE_OPTIONS: string[] = Object.keys(Handsontable.DefaultSettings.prototype);
const AVAILABLE_HOOKS: string[] = Handsontable.hooks.getRegistered();

@Injectable()
export class HotSettingsResolver {
  mergeSettings(component): object {
    const mergedSettings: object = {};
    const options = AVAILABLE_HOOKS.concat(AVAILABLE_OPTIONS);

    options.forEach((key) => {
      let option;

      if (typeof component['settings'] === 'object') {
        option = component['settings'][key];
      }

      if (component[key] !== void 0) {
        option = component[key];
      }

      if (option === void 0) {
        return;

      } else if (typeof option === 'function' && AVAILABLE_HOOKS.indexOf(key) > -1) {
        mergedSettings[key] = function(...args) {
          return component._ngZone.run(() => {
            return option(this, ...args);
          });
        };

      } else {
        mergedSettings[key] = option;
      }
    });

    return mergedSettings;
  }

  prepareChanges(changes: SimpleChanges): object {
    const result: object = {};
    const parameters: string[] = Object.keys(changes);

    parameters.forEach((param) => {
      if (changes.hasOwnProperty(param)) {
        result[param] = changes[param].currentValue;
      }
    });

    return result;
  }
}
