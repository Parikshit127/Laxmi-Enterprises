import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  amount: number;
  rate: number;
  tenure: number;
};

const EMICalculator: React.FC = () => {
  const { register, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      amount: 1000000,
      rate: 12,
      tenure: 5,
    },
  });

  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const watchedValues = watch();

  useEffect(() => {
    const calculateEmi = () => {
      const principal = watchedValues.amount;
      const annualRate = watchedValues.rate;
      const tenureYears = watchedValues.tenure;

      if (principal > 0 && annualRate > 0 && tenureYears > 0) {
        const monthlyRate = annualRate / 12 / 100;
        const tenureMonths = tenureYears * 12;

        const emiValue =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
          (Math.pow(1 + monthlyRate, tenureMonths) - 1);

        const totalPayment = emiValue * tenureMonths;
        const totalInterestValue = totalPayment - principal;

        setEmi(emiValue);
        setTotalPayable(totalPayment);
        setTotalInterest(totalInterestValue);
      } else {
        setEmi(0);
        setTotalPayable(0);
        setTotalInterest(0);
      }
    };

    calculateEmi();
  }, [watchedValues]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-brand-gray-light p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="amount" className="form-label flex justify-between items-baseline">
              <span>Loan Amount</span>
              <span className="font-bold text-brand-primary text-lg">{formatCurrency(watchedValues.amount)}</span>
            </label>
            <input
              type="range"
              id="amount"
              min="50000"
              max="5000000"
              step="50000"
              {...register('amount', { valueAsNumber: true })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
            />
             <div className="flex justify-between text-xs text-brand-gray mt-1">
                <span>₹50K</span>
                <span>₹50L</span>
            </div>
          </div>

          <div>
            <label htmlFor="rate" className="form-label flex justify-between items-baseline">
              <span>Interest Rate (% p.a.)</span>
              <span className="font-bold text-brand-primary text-lg">{watchedValues.rate.toFixed(2)} %</span>
            </label>
            <input
              type="range"
              id="rate"
              min="8"
              max="20"
              step="0.25"
              {...register('rate', { valueAsNumber: true })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
            />
            <div className="flex justify-between text-xs text-brand-gray mt-1">
                <span>8%</span>
                <span>20%</span>
            </div>
          </div>

          <div>
            <label htmlFor="tenure" className="form-label flex justify-between items-baseline">
              <span>Loan Tenure (Years)</span>
              <span className="font-bold text-brand-primary text-lg">{watchedValues.tenure} Years</span>
            </label>
            <input
              type="range"
              id="tenure"
              min="1"
              max="7"
              step="1"
              {...register('tenure', { valueAsNumber: true })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
            />
            <div className="flex justify-between text-xs text-brand-gray mt-1">
                <span>1 Year</span>
                <span>7 Years</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center border border-brand-primary/20">
            <h3 className="text-lg font-medium text-brand-gray">Your Monthly EMI</h3>
            <p className="text-4xl font-bold text-brand-primary-dark my-2">{formatCurrency(emi)}</p>
            <div className="mt-6 w-full space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-brand-gray">Total Interest Payable</span>
                    <span className="font-semibold text-brand-gray-dark">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-brand-gray">Total Amount Payable</span>
                    <span className="font-semibold text-brand-gray-dark">{formatCurrency(totalPayable)}</span>
                </div>
            </div>
            <p className="text-xs text-gray-400 mt-6">*All calculations are indicative and for illustrative purposes only.</p>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
