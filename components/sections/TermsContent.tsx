const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By creating an account or using Pavocard, you confirm that you:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Are at least 18 years old</li>
          <li>Agree to these Terms &amp; Conditions</li>
          <li>Will use the platform in accordance with all applicable laws</li>
        </ul>
        <p className="mt-2">
          If you do not agree, please do not use our services.
        </p>
      </>
    ),
  },
  {
    title: "2. Services Provided",
    content: (
      <>
        <p>Pavocard provides a platform that allows users to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Sell gift cards</li>
          <li>Receive payments based on current exchange rates</li>
        </ul>
        <p className="mt-2">
          We reserve the right to modify, suspend, or discontinue any part of
          the service at any time.
        </p>
      </>
    ),
  },
  {
    title: "3. User Accounts",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            You are responsible for maintaining the confidentiality of your
            account
          </li>
          <li>All information provided must be accurate and up to date</li>
          <li>You are responsible for all activities under your account</li>
        </ul>
        <p className="mt-2">
          We may suspend or terminate accounts that violate our policies.
        </p>
      </>
    ),
  },
  {
    title: "4. Transactions",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>All gift card transactions are subject to verification</li>
        <li>Rates may change at any time based on market conditions</li>
        <li>
          Payments are processed after successful validation of the gift card
        </li>
        <li>
          Pavocard reserves the right to decline or cancel any transaction
          deemed suspicious or invalid.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Prohibited Activities",
    content: (
      <>
        <p>Users must not:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Use stolen or unauthorized gift cards</li>
          <li>Engage in fraudulent or illegal activities</li>
          <li>Attempt to exploit or manipulate the platform</li>
          <li>Provide false or misleading information</li>
        </ul>
        <p className="mt-2">
          Violations may result in account suspension or legal action.
        </p>
      </>
    ),
  },
  {
    title: "6. Payments",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Payments are made based on agreed rates at the time of transaction
        </li>
        <li>Processing times may vary depending on verification</li>
        <li>
          Pavocard is not responsible for delays caused by external payment
          providers
        </li>
      </ul>
    ),
  },
  {
    title: "7. Refund Policy",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Transactions involving valid and processed gift cards are
          non-refundable
        </li>
        <li>
          If a transaction fails due to an error on our end, appropriate action
          will be taken to resolve it
        </li>
      </ul>
    ),
  },
  {
    title: "8. Privacy",
    content: (
      <p>
        Your use of the platform is also governed by our Privacy Policy, which
        explains how we collect and use your data.
      </p>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <>
        <p>Pavocard is not liable for:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Losses resulting from incorrect information provided by users</li>
          <li>Delays or failures caused by third-party services</li>
          <li>Unauthorized access due to user negligence</li>
        </ul>
        <p className="mt-2">Use of the platform is at your own risk.</p>
      </>
    ),
  },
  {
    title: "10. Account Termination",
    content: (
      <>
        <p>We reserve the right to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Suspend or terminate accounts at our discretion</li>
          <li>Restrict access if users violate these terms</li>
        </ul>
      </>
    ),
  },
  {
    title: "11. Changes to Terms",
    content: (
      <p>
        We may update these Terms &amp; Conditions at any time. Continued use
        of the platform means you accept the updated terms.
      </p>
    ),
  },
  {
    title: "12. Contact Information",
    content: (
      <>
        <p>If you have any questions about these Terms:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Email: support@pavocard.com</li>
          <li>Nigeria: +(234) 706-606-7435</li>
          <li>Ghana: +(233) 013-234-4534</li>
        </ul>
      </>
    ),
  },
];

export default function TermsContent() {
  return (
    <section className="w-full bg-white pb-[80px] md:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-[10px]">
        {SECTIONS.map((section, idx) => (
          <div
            key={idx}
            className="bg-[#f8f8f8] rounded-[30px] px-8 py-12 md:px-[64px] md:py-[56px] flex flex-col gap-4"
          >
            <h2 className="text-black font-semibold font-sans text-[28px] md:text-[40px] lg:text-[50px] leading-tight">
              {section.title}
            </h2>
            <div className="text-[rgba(0,0,0,0.5)] text-[16px] md:text-[18px] font-sans leading-relaxed space-y-2">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
