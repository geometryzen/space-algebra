"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mustBeNumber_1 = require("../checks/mustBeNumber");
var randomRange_1 = require("./randomRange");
var readOnly_1 = require("../i18n/readOnly");
var Unit_1 = require("./Unit");
/**
 * A mutable representation of a spinor with cartesian coordinates in 3 dimensions.
 */
var Spinor3 = (function () {
    /**
     *
     */
    function Spinor3(a, yz, zx, xy, uom) {
        this.a = mustBeNumber_1.mustBeNumber('a', a);
        this.yz = mustBeNumber_1.mustBeNumber('yz', yz);
        this.zx = mustBeNumber_1.mustBeNumber('zx', zx);
        this.xy = mustBeNumber_1.mustBeNumber('xy', xy);
        this.uom = Unit_1.Unit.mustBeUnit('uom', uom);
    }
    Object.defineProperty(Spinor3.prototype, "maskG3", {
        /**
         *
         */
        get: function () {
            var α = this.a;
            var yz = this.yz;
            var zx = this.zx;
            var xy = this.xy;
            var m = 0x0;
            if (α !== 0) {
                m += 0x1;
            }
            if (yz !== 0 || zx !== 0 || xy !== 0) {
                m += 0x4;
            }
            return m;
        },
        set: function (unused) {
            throw new Error(readOnly_1.readOnly('maskG3').message);
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    Spinor3.prototype.copy = function (spinor) {
        this.a = spinor.a;
        this.xy = spinor.xy;
        this.yz = spinor.yz;
        this.zx = spinor.zx;
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.divByScalar = function (alpha) {
        if (alpha !== 1) {
            this.a /= alpha;
            this.xy /= alpha;
            this.yz /= alpha;
            this.zx /= alpha;
        }
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.isOne = function () {
        return this.a === 1 && this.xy === 0 && this.yz === 0 && this.zx === 0;
    };
    /**
     *
     */
    Spinor3.prototype.magnitude = function () {
        return Math.sqrt(this.quaditude());
    };
    /**
     *
     */
    Spinor3.prototype.normalize = function () {
        var m = this.magnitude();
        if (m !== 1) {
            return this.divByScalar(m);
        }
        else {
            return this;
        }
    };
    /**
     *
     */
    Spinor3.prototype.one = function () {
        this.a = 1;
        this.xy = 0;
        this.yz = 0;
        this.zx = 0;
        return this;
    };
    /**
     * a.k.a. squared norm
     */
    Spinor3.prototype.quaditude = function () {
        var a = this.a;
        var x = this.yz;
        var y = this.zx;
        var z = this.xy;
        return a * a + x * x + y * y + z * z;
    };
    /**
     *
     */
    Spinor3.prototype.rev = function () {
        this.yz = -this.yz;
        this.zx = -this.zx;
        this.xy = -this.xy;
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.toExponential = function (fractionDigits) {
        return "new Spinor3(" + this.a.toExponential(fractionDigits) + ", " + this.yz.toExponential(fractionDigits) + ", " + this.zx.toExponential(fractionDigits) + ", " + this.xy.toExponential(fractionDigits) + ")";
    };
    /**
     *
     */
    Spinor3.prototype.toFixed = function (fractionDigits) {
        return "new Spinor3(" + this.a.toFixed(fractionDigits) + ", " + this.yz.toFixed(fractionDigits) + ", " + this.zx.toFixed(fractionDigits) + ", " + this.xy.toFixed(fractionDigits) + ")";
    };
    /**
     *
     */
    Spinor3.prototype.toPrecision = function (precision) {
        return "new Spinor3(" + this.a.toPrecision(precision) + ", " + this.yz.toPrecision(precision) + ", " + this.zx.toPrecision(precision) + ", " + this.xy.toPrecision(precision) + ")";
    };
    /**
     * Returns a string representation of this spinor.
     */
    Spinor3.prototype.toString = function (radix) {
        return "new Spinor3(" + this.a.toString(radix) + ", " + this.yz.toString(radix) + ", " + this.zx.toString(radix) + ", " + this.xy.toString(radix) + ")";
    };
    /**
     * <p>
     * Computes a unit spinor with a random direction.
     * </p>
     */
    Spinor3.random = function () {
        var yz = randomRange_1.randomRange(-1, 1);
        var zx = randomRange_1.randomRange(-1, 1);
        var xy = randomRange_1.randomRange(-1, 1);
        var α = randomRange_1.randomRange(-1, 1);
        return Spinor3.spinor(yz, zx, xy, α).normalize();
    };
    /**
     * @param yz
     * @param zx
     * @param xy
     * @param α
     */
    Spinor3.spinor = function (yz, zx, xy, α, uom) {
        return new Spinor3(α, yz, zx, xy, uom);
    };
    return Spinor3;
}());
exports.Spinor3 = Spinor3;