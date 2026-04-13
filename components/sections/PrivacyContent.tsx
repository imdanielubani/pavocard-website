const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          a. Personal Information
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment details (bank account or wallet information)</li>
        </ul>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          b. Transaction Information
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gift card details submitted</li>
          <li>Transaction history</li>
          <li>Payment records</li>
        </ul>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          c. Device &amp; Usage Information
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Device type and operating system</li>
          <li>IP address</li>
          <li>App usage data and interactions</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide and improve our services</li>
          <li>Process transactions and payments</li>
          <li>Verify user identity and prevent fraud</li>
          <li>Communicate updates, alerts, and support messages</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Share Your Information",
    content: (
      <>
        <p>We do not sell your personal data.</p>
        <p className="mt-2">We may share your information with:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Payment providers to process transactions</li>
          <li>Service providers that help us operate the platform</li>
          <li>Law enforcement or regulators when required by law</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data Security",
    content: (
      <>
        <p>
          We implement appropriate security measures to protect your data,
          including:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Encryption of sensitive information</li>
          <li>Secure servers and infrastructure</li>
          <li>Access control and monitoring</li>
        </ul>
        <p className="mt-2">
          However, no system is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <>
        <p>We retain your information only as long as necessary to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide our services</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your account and data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p className="mt-2">
          To make any request, contact us at the email below.
        </p>
      </>
    ),
  },
  {
    title: "7. Account Deletion",
    content: (
      <>
        <p>You can request to delete your account:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Through the app (if available), or</li>
          <li>By contacting support</li>
        </ul>
        <p className="mt-2">
          Upon request, we will delete your data except where retention is
          required by law.
        </p>
      </>
    ),
  },
  {
    title: "8. Cookies & Tracking (If Applicable)",
    content: (
      <>
        <p>We may use cookies or similar technologies to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Improve user experience</li>
          <li>Analyze app performance</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Third-Party Links",
    content: (
      <p>
        Our platform may contain links to third-party services. We are not
        responsible for their privacy practices.
      </p>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Pavocard is not intended for individuals under the age of 18. We do not
        knowingly collect data from minors.
      </p>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy at any time. Continued use of the
        platform means you accept the updated policy.
      </p>
    ),
  },
  {
    title: "12. Contact Information",
    content: (
      <>
        <p>If you have any questions about this Privacy Policy:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Email: support@pavocard.com</li>
          <li>Nigeria: +(234) 706-606-7435</li>
          <li>Ghana: +(233) 013-234-4534</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyContent() {
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
