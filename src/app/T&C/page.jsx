"use client";

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      {/* ---------- PAGE HEADER ---------- */}
      <section className="bg-[#1E1E1E] text-white py-35 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="py-16 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto leading-relaxed text-[15px]">
        <p className="mb-6">
          <strong>Effective Date:</strong> 01/01/2025
        </p>

        <p className="mb-6">
          Welcome to <strong>FindTheFirm.com</strong> (“we,” “us,” or “our”). These
          Terms &amp; Conditions (“Terms”) govern your access to and use of our
          website and any services, content, information, or forms offered
          through it (collectively, the “Services”).
        </p>

        <p className="mb-8">
          By using our website, you agree to be bound by these Terms. If you do
          not agree, please do not use the site.
        </p>

        {/* ---------- 1. NO ATTORNEY-CLIENT RELATIONSHIP ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          1. <strong>No Attorney-Client Relationship</strong>
        </h3>
        <p className="mb-6">
          The information on this website is for general informational purposes
          only and does not constitute legal advice. Submission of your
          information through our contact or lead forms does not establish an
          attorney-client relationship. Any legal representation will only occur
          once a formal agreement is executed with a licensed attorney.
        </p>

        {/* ---------- 2. LEAD GENERATION ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          2. <strong>Lead Generation and Third-Party Involvement</strong>
        </h3>
        <p className="mb-6">
          This website is a marketing and advertising platform operated by a
          third-party lead generation provider. Information you submit may be
          shared with one or more law firms or legal service providers who may
          contact you for further evaluation of your potential legal case.
        </p>
        <p className="mb-6">
          We do not guarantee that your case will be accepted, nor do we make
          any claims about the legal merits of your submission.
        </p>

        {/* ---------- 3. ACCURACY OF INFORMATION ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          3. <strong>Accuracy of Information</strong>
        </h3>
        <p className="mb-6">
          You agree that all information you provide through this website is
          true, accurate, and complete to the best of your knowledge. Submitting
          false, incomplete, or misleading information may disqualify your
          submission or lead to disqualification by a third-party law firm.
        </p>

        {/* ---------- 4. NO GUARANTEE ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          4. <strong>No Guarantee of Outcome</strong>
        </h3>
        <p className="mb-6">
          Filing a form on this site does not guarantee any legal outcome,
          compensation, or acceptance of your case. Case results are determined
          solely by the evaluating law firm based on their independent criteria.
        </p>

        {/* ---------- 5. USE OF INFORMATION ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          5. <strong>Use of Your Information</strong>
        </h3>
        <p className="mb-4">
          By submitting your information through this website, you consent to:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>
            Being contacted by law firms, legal service providers, or third-party partners.
          </li>
          <li>Receiving follow-up communications via phone, email, or text.</li>
          <li>
            The storage and processing of your information in accordance with
            our{" "}
            <a
              href="/privacy-policy"
              className="text-red-600 font-semibold hover:underline"
            >
              Privacy Policy
            </a>
            .
          </li>
        </ul>
        <p className="mb-6">
          You may opt out of communications at any time by following the
          opt-out instructions provided.
        </p>

        {/* ---------- 6. WEBSITE AVAILABILITY ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          6. <strong>Website Availability and Errors</strong>
        </h3>
        <p className="mb-6">
          We strive to maintain the availability and accuracy of this website
          but make no guarantees regarding uptime, performance, or error-free
          functionality. We reserve the right to modify, suspend, or discontinue
          the website at any time without notice.
        </p>

        {/* ---------- 7. LIMITATION OF LIABILITY ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          7. <strong>Limitation of Liability</strong>
        </h3>
        <p className="mb-6">
          We are not liable for any damages, direct or indirect, arising from
          your use of this website or any third-party services you may be
          connected with through it.
        </p>

        {/* ---------- 8. GOVERNING LAW ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          8. <strong>Governing Law</strong>
        </h3>
        <p className="mb-6">
          These Terms are governed by the laws of the State of Wyoming, without
          regard to conflict of law principles. Any disputes will be handled in
          the appropriate courts of Wyoming.
        </p>

        {/* ---------- 9. CHANGES TO TERMS ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          9. <strong>Changes to These Terms</strong>
        </h3>
        <p className="mb-6">
          We may update these Terms from time to time. Continued use of the
          website after such changes constitutes your acceptance of the new
          Terms.
        </p>

        {/* ---------- 10. CONTACT US ---------- */}
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-semibold mb-4">
          10. <strong>Contact Us</strong>
        </h3>
        <p className="mb-4">
          If you have questions about these Terms or our website, please contact
          us at:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@FindTheFirm.com"
            className="text-red-600 font-semibold hover:underline"
          >
            info@FindTheFirm.com
          </a>
        </p>
      </section>
    </div>
  );
}
