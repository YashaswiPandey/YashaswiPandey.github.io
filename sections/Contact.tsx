/*
 * Portfolio - (c) 2025 by Yashaswi Pandey
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);

    // Split the full name into an array (first, middle, last)
    const nameParts = data.fullName.trim().split(" ").filter(Boolean);

    // Ensure we have at least one name part
    if (nameParts.length === 0) {
      setSubmitting(false);
      return;
    }

    // The last part is the last name
    const lastName = nameParts.pop() as string;

    // The rest is the first and middle name combined
    const firstName = nameParts.join(" ");

    // Prepare the data in the format that JotForm expects
    const formData = new FormData();
    formData.append("q3_name[first]", firstName);
    formData.append("q3_name[last]", lastName);
    formData.append("q4_email", data.email);
    formData.append("q6_message", data.message);

    try {
      // Submit the form to JotForm's submission endpoint
      const response = await fetch("https://submit.jotform.com/submit/250866053989068", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }

    setSubmitting(false);
  });

  if (isSubmitted) {
    return (
      <div id={Section.Contact} className="lg:w-1/2">
        {getSectionHeading(Section.Contact)}

        <p className="text-lg leading-loose">
          Thank you for your message.
          <br />
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div id={Section.Contact} className="lg:w-1/2">
      {getSectionHeading(Section.Contact)}

      <form onSubmit={onSubmit} className="grid gap-8">
        <Input
          type="text"
          label="Full Name"
          className="md:w-3/4"
          hasError={!!errors.fullName}
          placeholder="Full Name"
          description={errors.fullName?.message || "Your full name (First, Middle, Last)"}
          {...register("fullName", {
            required: { value: true, message: "This is a required field" },
          })}
        />

        <Input
          type="email"
          className="md:w-3/4"
          label="Email Address"
          hasError={!!errors.email}
          placeholder="EmailId@domain.com"
          description={errors.email?.message || "How do I contact you"}
          {...register("email", {
            required: { value: true, message: "This is a required field" },
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
          })}
        />

        <Input
          type="textarea"
          label="Message"
          hasError={!!errors.message}
          placeholder="Type your message here"
          description={errors.message?.message || "Whatever you wan't to talk to me about"}
          {...register("message", {
            required: { value: true, message: "This is a required field" },
            minLength: { value: 10, message: "Your message must be at least 10 characters long" },
          })}
        />

        <button
          type="submit"
          className={`mt-8 flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-colors ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#2B72D7] dark:bg-[#F76900] hover:bg-[#1E5BB9] dark:hover:bg-[#E05B00] text-white"
          }`}
          disabled={submitting}
        >
          <FaPaperPlane className="text-lg" />
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
