import { isNull } from '../checks/isNull';
import { isNumber } from '../checks/isNumber';
import { isObject } from '../checks/isObject';
/**
 * Determines whether the argument supports the BivectorE3 interface.
 * The argument must be a non-null object and must support the yz, zx, and xy numeric properties.
 */
export function isBivectorE3(v) {
    if (isObject(v) && !isNull(v)) {
        return isNumber(v.xy) && isNumber(v.yz) && isNumber(v.zx);
    }
    else {
        return false;
    }
}
