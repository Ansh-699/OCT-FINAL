"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"


const signUpSchema = z.object({
    fullName: z.string().min(3, "Full Name is required"),
    phoneNumber: z.string().min(10, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    telegram: z.string().optional(),
    remarks: z.string().optional(),
});

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const router = useRouter();

    const onSubmit = async (data: any) => {
        console.log("Submitted Data:", data);
        setSuccessMessage("Sign-up successful! Redirecting...");
        setTimeout(() => {
            router.push("/dashboard");
        }, 2000);
    };

    return (
        <div id="auth" className="min-vh-100"> {/* Same as SignInPage */}
            <div className="container-fluid"> {/* Same as SignInPage */}
                <div className="row justify-content-center align-items-center h-100"> {/* Same as SignInPage */}
                    <div className="col-lg-6"> {/* Same as SignInPage */}
                        <div className="card"> {/* Same as SignInPage */}
                            <div className="card-body py-5 px-5"> {/* Same as SignInPage */}
                                <div className="auth-logo text-center mb-5"> {/* Same as SignInPage */}
                                    {/* <Link href="/">
                                        <img src="/assets/images/logo/logo.png" alt="Logo" height="80" />
                                    </Link> */}
                                </div>
                                <h1 className="auth-title text-center mb-3">Sign Up</h1> {/* Modified Title */}
                                <p className="auth-subtitle text-center mb-5">
                                    Input your data to register. {/* Modified Subtitle */}
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-4">  {/* Input Group with label */}
                                        <label htmlFor="fullName" className="form-label">Full Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-person"></i></span>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="fullName"
                                                placeholder="Full Name"
                                                {...register("fullName")}
                                            />
                                        </div>
                                        {errors.fullName && (
                                            <div className="text-danger text-sm">{errors.fullName.toString()}</div>
                                        )}
                                    </div>

                                    {/* ... (repeat the above structure for other input fields) */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-phone"></i></span>
                                            <Input
                                                type="tel"
                                                className="form-control"
                                                id="phoneNumber"
                                                placeholder="Phone Number"
                                                {...register("phoneNumber")}
                                            />
                                        </div>
                                        {errors.phoneNumber && (
                                            <div className="text-danger text-sm">{errors.phoneNumber.toString()}</div>
                                        )}
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                            <Input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                {...register("email")}
                                            />
                                        </div>
                                        {errors.email && (
                                            <div className="text-danger text-sm">{errors.email.toString()}</div>
                                        )}
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="telegram" className="form-label">Telegram (Optional)</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-telegram"></i></span>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="telegram"
                                                placeholder="Telegram Username (Optional)"
                                                {...register("telegram")}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="remarks" className="form-label">Remarks (Optional)</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-chat-dots"></i></span>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="remarks"
                                                placeholder="Remarks (Optional)"
                                                {...register("remarks")}
                                            />
                                        </div>
                                    </div>


                                    <Button
                                        type="submit"
                                        className="btn btn-primary btn-block btn-lg shadow-lg mt-5 w-100" // Same as SignInPage
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Sign Up"} {/* Modified Button Text */}
                                    </Button>

                                    {successMessage && (
                                        <div className="alert alert-success mt-4">{successMessage}</div>
                                    )}

                                    <div className="text-center mt-5 text-lg fs-4"> {/* Same as SignInPage */}
                                    <p className="text-gray-600">
  Already have an account? Don&apos;t worry!{" "}
  <Link href="/signin" className="font-bold">
    Sign In
  </Link>
</p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}