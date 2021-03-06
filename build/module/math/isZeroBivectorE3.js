/**
 * Returns true if all coordinates of the bivector are exactly zero.
 */
export function isZeroBivectorE3(m) {
    return m.yz === 0 && m.zx === 0 && m.xy === 0;
}
