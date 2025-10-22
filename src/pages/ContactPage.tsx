import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageWrapper from '../components/PageWrapper';
import { LOAN_TYPES, BANK_OPTIONS, WHATSAPP_LINK, CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';

type FormInputs = {
    name: string;
    phone: string;
    email: string;
    city: string;
    loan_type: string;
    details: string;
    preferred_bank: string;
    budget: number;
};

const ContactPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    // inside ContactPage component (only the onSubmit part shown)
const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  setIsSubmitting(true);
  setSubmitStatus(null);
  try {
    const resp = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
      console.error(await resp.text());
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('success');
    reset();
  } catch (err) {
    console.error(err);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};



    return (
        <PageWrapper>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-primary-dark">Get in Touch</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
                            Have questions or ready to apply? Fill out the form below or contact us directly. We're here to help.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 bg-brand-gray-light p-8 rounded-lg space-y-8 h-fit">
                            <h2 className="text-2xl font-bold text-brand-primary-dark">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-brand-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Our Office</h3>
                                        <p className="text-brand-gray">{CONTACT_INFO.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-brand-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Email Us</h3>
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-gray hover:text-brand-primary">{CONTACT_INFO.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-brand-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Call Us</h3>
                                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-brand-gray hover:text-brand-primary">{CONTACT_INFO.phone}</a>
                                    </div>
                                </div>
                            </div>
                             <div className="border-t border-gray-200 pt-6">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full text-center cta-button-secondary block border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                                Talk on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-brand-gray-light p-8 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-brand-primary-dark mb-6">Apply for a Loan</h2>
                                {submitStatus === 'success' ? (
                                    <div className="text-center py-12 bg-green-50 border border-green-200 rounded-lg">
                                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                                        <h3 className="mt-4 text-2xl font-bold text-green-700">Application Submitted!</h3>
                                        <p className="mt-2 text-gray-600">Thank you! We've received your application and will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="form-label">Full Name</label>
                                            <input id="name" {...register("name", { required: "Full name is required" })} className="form-input" />
                                            {errors.name && <p className="form-error">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input id="phone" type="tel" {...register("phone", { required: "Phone number is required", pattern: { value: /^\d{10}$/, message: "Enter a valid 10-digit phone number" } })} className="form-input" />
                                            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <input id="email" type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" } })} className="form-input" />
                                            {errors.email && <p className="form-error">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="form-label">City</label>
                                            <input id="city" {...register("city", { required: "City is required" })} className="form-input" />
                                            {errors.city && <p className="form-error">{errors.city.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="loan_type" className="form-label">Loan Type</label>
                                            <select id="loan_type" {...register("loan_type", { required: "Please select a loan type" })} className="form-input">
                                                <option value="">Select a loan type...</option>
                                                {LOAN_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                                            </select>
                                            {errors.loan_type && <p className="form-error">{errors.loan_type.message}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="details" className="form-label">Vehicle Model / Equipment Details</label>
                                            <textarea id="details" {...register("details")} rows={3} className="form-input" placeholder="e.g., Tata Signa 4825.TK, JCB 3DX, etc."></textarea>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="form-label">Loan Amount / Budget (₹)</label>
                                            <input id="budget" type="number" {...register("budget", { valueAsNumber: true, min: { value: 50000, message: "Budget must be at least ₹50,000" } })} className="form-input" placeholder="e.g., 1500000" />
                                            {errors.budget && <p className="form-error">{errors.budget.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="preferred_bank" className="form-label">Preferred Bank (Optional)</label>
                                            <select id="preferred_bank" {...register("preferred_bank")} className="form-input">
                                                <option value="">Select a bank...</option>
                                                {BANK_OPTIONS.map(bank => <option key={bank} value={bank}>{bank}</option>)}
                                            </select>
                                        </div>
                                        
                                        {submitStatus === 'error' && (
                                            <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center space-x-2">
                                                <AlertCircle className="h-5 w-5"/>
                                                <span>Something went wrong. Please try again.</span>
                                            </div>
                                        )}

                                        <div className="md:col-span-2">
                                            <button type="submit" disabled={isSubmitting} className="w-full cta-button-primary flex items-center justify-center disabled:bg-brand-secondary-dark/50 disabled:cursor-not-allowed">
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader className="animate-spin h-5 w-5 mr-3" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="h-5 w-5 mr-3" />
                                                        Submit Application
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
