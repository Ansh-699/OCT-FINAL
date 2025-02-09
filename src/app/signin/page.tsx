"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const signInSchema = z.object({
  identifier: z.string().min(3, "Enter a valid username, phone, or email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("Submitted Data:", data);
    if (data.identifier === "testuser" && data.password === "password123") {
      router.push("/dashboard");
    } else {
      setErrorMessage("Invalid username, phone, or password");
    }
  };

  return (
    <div id="auth" className="min-vh-100">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body py-5 px-5">
                <div className="auth-logo text-center mb-5">
                  {/* <a href="/">
                    <img src="/assets/images/logo/logo.png" alt="Logo" height="80" />
                  </a> */}
                </div>
                <h1 className="auth-title text-center mb-3">Log in</h1>
                <p className="auth-subtitle text-center mb-5">
                  Log in with your credentials.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <input
                      type="text"
                      className={`form-control form-control-xl ${errors.identifier ? "is-invalid" : ""}`}
                      placeholder="Username / Phone / Email"
                      {...register("identifier")}
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
                    </div>
                    {errors.identifier && errors.identifier.message && (
                      <div className="invalid-feedback">{errors.identifier.message.toString()}</div>
                    )}
                  </div>

                  <div className="form-group position-relative has-icon-left mb-4">
                    <input
                      type="password"
                      className={`form-control form-control-xl ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Password"
                      {...register("password")}
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-shield-lock"></i>
                    </div>
                    {errors.password?.message && (
                      <div className="invalid-feedback">{errors.password.message.toString()}</div>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="alert alert-danger text-center" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5 w-100" disabled={isSubmitting}>
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </button>
                </form>

                <div className="text-center mt-5 text-lg fs-4">
                <p className="text-gray-600">
  Don&apos;t have an account?{" "}
  <Link href="/signup" className="font-bold">
    Sign up
  </Link>
</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
