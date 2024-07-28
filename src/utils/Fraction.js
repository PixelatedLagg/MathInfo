class Fraction
{
    constructor(numerator, denominator = 1)
    {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    simplify()
    {
        const gcd = (a, b) => b ? gcd(b, a % b) : a;
        const divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    }
    sign()
    {
        if (this.numerator < 0 ^ this.denominator < 0)
        {
            return false; //negative
        }
        return true; //positive
    }
    abs()
    {
        return new Fraction(Math.abs(this.numerator), Math.abs(this.denominator));
    }
    add(other)
    {
        return new Fraction(
            this.numerator * other.denominator + other.numerator * this.denominator,
            this.denominator * other.denominator
        );
    }
    subtract(other)
    {
        return new Fraction(
            this.numerator * other.denominator - other.numerator * this.denominator,
            this.denominator * other.denominator
        );
    }
    multiply(other)
    {
        return new Fraction(
            this.numerator * other.numerator,
            this.denominator * other.denominator
        );
    }
    divide(other)
    {
        return new Fraction(
            this.numerator * other.denominator,
            this.denominator * other.numerator
        );
    }
    toString()
    {
        this.simplify();
        if (this.numerator === this.denominator)
        {
            return '1';
        }
        if (this.numerator === 0)
        {
            return '0';
        }
        if (this.denominator === 1)
        {
            return `${this.numerator}`;
        }
        if (this.denominator === 0)
        {
            console.log("ERROROROR DENOM CANT BE ZERO");
            return;
        }
        if (this.denominator < 0) //ensure denom is always positive
        {
            return `\\frac{${this.numerator * -1}}{${this.denominator * -1}}`;
        }
        return `\\frac{${this.numerator}}{${this.denominator}}`;
    }
}

export default Fraction;