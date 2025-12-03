import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

// ReportIssueForm.jsx
// Uses react-hook-form for simpler form handling and validation.
// Prefills email from AuthContext and keeps it readOnly.

export default function ReportIssueForm() {
  const { user } = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      location: "",
      description: "",
      image: "",
      amount: "",
      status: "ongoing",
      email: user?.email || "",
    },
  });

  const categories = ["Garbage", "Road", "Waterlogging", "Other"];

  async function onSubmit(values) {
    try {
      const amount = values.amount === "" ? null : Number(values.amount);

      const payload = {
        title: values.title.trim(),
        category: values.category,
        location: values.location.trim(),
        description: values.description.trim(),
        image: values.image?.trim() || null,
        amount: Number.isNaN(amount) ? null : amount,
        status: values.status || "ongoing",
        date: new Date().toISOString(),
        email: user.email,
      };

      const res = await axios.post("http://localhost:3000/issue", payload);

      console.log("Saved to backend:", res.data);
      setSubmitted(res.data);

      reset({
        title: "",
        category: "",
        location: "",
        description: "",
        image: "",
        amount: "",
        status: "ongoing",
        email: user.email,
      });
    } catch (err) {
      console.error("Error saving issue:", err);
    }
  }

  return (
    <div className="flex items-start justify-center bg-slate-50 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="lg:text-4xl text-xl text-sky-400 font-bold text-center mb-6">
          Report a New Issue
        </h2>

        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Issue Title</span>
          <input
            {...register("title", { required: "Issue title is required." })}
            className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring"
            placeholder="Enter issue title"
          />
          {errors.title && (
            <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>
          )}
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Category</span>
          <select
            {...register("category", { required: "Please select a category." })}
            className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm"
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-xs text-red-500 mt-1">
              {errors.category.message}
            </p>
          )}
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Location</span>
            <input
              {...register("location", { required: "Location is required." })}
              className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm"
              placeholder="Enter issue location"
            />
            {errors.location && (
              <p className="text-xs text-red-500 mt-1">
                {errors.location.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">
              Image (URL)
            </span>
            <input
              {...register("image", {
                validate: (v) =>
                  v === "" ||
                  /^https?:\/\/.+/.test(v) ||
                  "Enter a valid URL or leave blank",
              })}
              className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm"
              placeholder="Enter image URL"
            />
            {errors.image && (
              <p className="text-xs text-red-500 mt-1">
                {errors.image.message}
              </p>
            )}
          </label>
        </div>

        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Description</span>
          <textarea
            {...register("description", { required: "Describe the issue." })}
            className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm min-h-[100px]"
            placeholder="Describe the issue..."
          />
          {errors.description && (
            <p className="text-xs text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">
              Amount (Suggested Budget)
            </span>
            <input
              {...register("amount", {
                validate: (v) =>
                  v === "" ||
                  !Number.isNaN(Number(v)) ||
                  "Amount must be a number",
              })}
              className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm"
              placeholder="Enter estimated budget"
            />
            {errors.amount && (
              <p className="text-xs text-red-500 mt-1">
                {errors.amount.message}
              </p>
            )}
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              {...register("email")}
              value={user?.email || ""}
              readOnly
              className="mt-1 block w-full rounded-lg border px-4 py-3 text-sm bg-gray-50"
            />
          </label>
        </div>

        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg py-3 font-semibold text-white bg-gradient-to-bl from-[#72C6EF] to-[#004E8F] hover:opacity-95 disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Issue"}
          </button>
        </div>

        {/* {submitted && (
          <div className="mt-6 p-4 rounded-lg border bg-green-50">
            <h3 className="font-semibold">Issue submitted (preview)</h3>
            <pre className="text-xs mt-2 overflow-x-auto">
              {JSON.stringify(submitted, null, 2)}
            </pre>
          </div>
        )} */}
      </form>
    </div>
  );
}
