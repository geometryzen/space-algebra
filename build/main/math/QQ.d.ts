/**
 * The QQ class represents a rational number, ℚ.
 *
 * The QQ implementation is that of an <em>immutable</em> (value) type.
 *
 * The numerator and denominator are reduced to their lowest form.
 *
 * Construct new instances using the static <code>valueOf</code> method.
 */
export declare class QQ {
    /**
     * The numerator of the rational number.
     */
    private readonly numer_;
    /**
     * The denominator of the rational number.
     */
    private readonly denom_;
    /**
     * @param n The numerator.
     * @param d The denominator.
     */
    private constructor();
    /**
     * The numerator of the rational number.
     */
    readonly numer: number;
    /**
     * The denominator of the rational number.
     */
    readonly denom: number;
    /**
     * @returns this + rhs
     */
    add(rhs: QQ): QQ;
    /**
     * @returns this - rhs
     */
    sub(rhs: QQ): QQ;
    /**
     * @returns this * rhs
     */
    mul(rhs: QQ): QQ;
    /**
     * @returns this / rhs
     */
    div(rhs: QQ): QQ;
    /**
     * @returns `true` if this rational number is one (1), otherwise `false`.
     */
    isOne(): boolean;
    /**
     * @returns `true` if this rational number is zero (0), otherwise `false`.
     */
    isZero(): boolean;
    /**
     * @returns 37 * numerator + 13 * denominator
     */
    hashCode(): number;
    /**
     * Computes the multiplicative inverse of this rational number.
     *
     * @returns 1 / this
     */
    inv(): QQ;
    /**
     * Computes the additive inverse of this rational number.
     *
     * @returns -this
     */
    neg(): QQ;
    /**
     * Determines whether two rational numbers are equal.
     *
     * @returns `true` if `this` rational number equals the `other` rational number.
     */
    equals(other: QQ): boolean;
    /**
     * Computes a non-normative string representation of this rational.
     *
     * @returns
     */
    toString(radix?: number): string;
    /**
     * @returns this + rhs
     */
    __add__(rhs: QQ): QQ;
    /**
     * @returns lhs + this
     */
    __radd__(lhs: QQ): QQ;
    /**
     * @returns this - rhs
     */
    __sub__(rhs: QQ): QQ;
    /**
     * @returns lhs - this
     */
    __rsub__(lhs: QQ): QQ;
    /**
     * @returns this * rhs
     */
    __mul__(rhs: QQ): QQ;
    /**
     * @returns lhs * this
     */
    __rmul__(lhs: QQ): QQ;
    /**
     * @returns this / rhs
     */
    __div__(rhs: QQ): QQ;
    /**
     * @returns lhs / this
     */
    __rdiv__(lhs: QQ): QQ;
    /**
     * @returns +this
     */
    __pos__(): this;
    /**
     * @returns -this
     */
    __neg__(): QQ;
    private static readonly POS_08_01;
    private static readonly POS_07_01;
    private static readonly POS_06_01;
    private static readonly POS_05_01;
    private static readonly POS_04_01;
    private static readonly POS_03_01;
    private static readonly POS_02_01;
    private static readonly ONE;
    private static readonly POS_01_02;
    private static readonly POS_01_03;
    private static readonly POS_01_04;
    private static readonly POS_01_05;
    private static readonly ZERO;
    private static readonly NEG_01_03;
    private static readonly NEG_01_01;
    private static readonly NEG_02_01;
    private static readonly NEG_03_01;
    private static readonly POS_02_03;
    /**
     * @param numer The numerator of the rational number.
     * @param denom The denominator of the rational number.
     * @returns The rational number numer / denom reduced to its lowest form.
     */
    static valueOf(n: number, d: number): QQ;
}
