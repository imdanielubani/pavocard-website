const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information.</p>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          a. Personal Information
        </h3>
        <p>When you register or use our Services, we may collect:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth (if applicable)</li>
          <li>Bank account information</li>
          <li>Mobile wallet information</li>
          <li>Payment details necessary for processing transactions</li>
        </ul>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          b. Transaction Information
        </h3>
        <p>To provide our services, we collect:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gift card information submitted for exchange</li>
          <li>Transaction history</li>
          <li>Payment records</li>
          <li>Withdrawal history</li>
          <li>Account balances</li>
          <li>Transaction status</li>
        </ul>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          c. Device &amp; Technical Information
        </h3>
        <p>We automatically collect certain technical information, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Device model</li>
          <li>Device manufacturer</li>
          <li>Operating system and version</li>
          <li>IP address</li>
          <li>Device identifiers</li>
          <li>App version</li>
          <li>Mobile network information</li>
          <li>Crash reports</li>
          <li>Log information</li>
          <li>App usage statistics</li>
        </ul>

        <h3 className="text-black font-semibold font-sans text-[20px] md:text-[26px] lg:text-[30px] leading-tight mt-4 mb-2">
          d. Permissions
        </h3>
        <p>
          Depending on the features you use, Pavocard may request the
          following permissions:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-semibold text-black">Camera</span> &mdash;
            to capture or upload images of gift cards or identity
            verification documents.
          </li>
          <li>
            <span className="font-semibold text-black">Storage/Photos</span>{" "}
            &mdash; to allow you to upload images from your device.
          </li>
          <li>
            <span className="font-semibold text-black">Notifications</span>{" "}
            &mdash; to send transaction updates, payment confirmations,
            security alerts, and important service announcements.
          </li>
        </ul>
        <p className="mt-2">
          We only request permissions necessary for providing our Services.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Create and manage your account</li>
          <li>Process gift card transactions</li>
          <li>Process payments and withdrawals</li>
          <li>Verify your identity</li>
          <li>Prevent fraud, abuse, and unauthorized activity</li>
          <li>Improve our products and services</li>
          <li>Respond to customer support requests</li>
          <li>Send service notifications and updates</li>
          <li>Comply with legal and regulatory obligations</li>
          <li>Protect the security and integrity of our platform</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Legal Basis for Processing",
    content: (
      <>
        <p>Where applicable, we process your information:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>To provide services requested by you</li>
          <li>To fulfill contractual obligations</li>
          <li>To comply with applicable laws and regulations</li>
          <li>To protect legitimate business interests</li>
          <li>With your consent where required</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. How We Share Your Information",
    content: (
      <>
        <p>We value your privacy.</p>
        <p className="mt-2">
          We do not sell or rent your personal information.
        </p>
        <p className="mt-2">We may share information with:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Payment processors to complete transactions</li>
          <li>Banking partners</li>
          <li>Cloud hosting providers</li>
          <li>Customer support providers</li>
          <li>Analytics providers</li>
          <li>Fraud prevention services</li>
          <li>
            Government authorities, regulators, or law enforcement when
            required by law or legal process
          </li>
        </ul>
        <p className="mt-2">
          All third-party service providers are required to safeguard your
          information.
        </p>
      </>
    ),
  },
  {
    title: "5. Third-Party Services",
    content: (
      <>
        <p>
          Our Services may use trusted third-party providers to operate
          efficiently. These providers may collect information according to
          their own privacy policies.
        </p>
        <p className="mt-2">Examples include:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Google Firebase (Analytics, Crash Reporting, Cloud Messaging)</li>
          <li>Google Play Services</li>
          <li>Payment gateways</li>
          <li>Cloud hosting providers</li>
        </ul>
        <p className="mt-2">
          These third-party providers process data only as necessary to
          perform services on our behalf.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <>
        <p>
          We implement appropriate technical and organizational measures to
          protect your information, including:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>HTTPS/TLS encrypted communications</li>
          <li>Encryption of sensitive information</li>
          <li>Secure servers</li>
          <li>Restricted employee access</li>
          <li>Continuous monitoring</li>
          <li>Security audits where appropriate</li>
        </ul>
        <p className="mt-2">
          While we strive to protect your information, no method of
          transmission or electronic storage is completely secure. Therefore,
          we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <>
        <p>We retain your personal information only for as long as necessary to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide our Services</li>
          <li>Complete transactions</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
          <li>Prevent fraud</li>
          <li>Enforce our agreements</li>
        </ul>
        <p className="mt-2">
          When your information is no longer required, we securely delete or
          anonymize it.
        </p>
      </>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Update your account details</li>
          <li>Request deletion of your account</li>
          <li>Withdraw consent where applicable</li>
          <li>Object to certain processing activities</li>
          <li>Request a copy of your personal information</li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, please contact us using the
          information below.
        </p>
      </>
    ),
  },
  {
    title: "9. Account & Data Deletion",
    content: (
      <>
        <p>You may request deletion of your account:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Through the Pavocard app (where available), or</li>
          <li>By contacting our support team</li>
        </ul>
        <p className="mt-2">
          Once your identity has been verified, we will process your request
          and permanently delete your personal information within 30 days,
          except where we are legally required to retain certain records for
          regulatory, tax, fraud prevention, or dispute resolution purposes.
        </p>
      </>
    ),
  },
  {
    title: "10. Cookies & Similar Technologies",
    content: (
      <>
        <p>
          Our website and Services may use cookies and similar technologies
          to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Improve user experience</li>
          <li>Remember user preferences</li>
          <li>Analyze platform performance</li>
          <li>Improve security</li>
          <li>Measure application usage</li>
        </ul>
        <p className="mt-2">
          You may manage cookie preferences through your browser settings.
        </p>
      </>
    ),
  },
  {
    title: "11. International Data Transfers",
    content: (
      <>
        <p>
          Your information may be stored or processed on servers located
          outside your country of residence.
        </p>
        <p className="mt-2">
          Where this occurs, we implement appropriate safeguards to ensure
          your information remains protected in accordance with applicable
          privacy laws.
        </p>
      </>
    ),
  },
  {
    title: "12. Third-Party Links",
    content: (
      <>
        <p>
          Our Services may contain links to third-party websites or services.
        </p>
        <p className="mt-2">
          We are not responsible for the privacy practices, security, or
          content of third-party websites. We encourage you to review their
          privacy policies before providing personal information.
        </p>
      </>
    ),
  },
  {
    title: "13. Children's Privacy",
    content: (
      <>
        <p>
          Pavocard is intended only for individuals who are 18 years of age
          or older.
        </p>
        <p className="mt-2">
          We do not knowingly collect personal information from children
          under the age of 18. If we become aware that such information has
          been collected, we will take reasonable steps to delete it
          promptly.
        </p>
      </>
    ),
  },
  {
    title: "14. Changes to This Privacy Policy",
    content: (
      <>
        <p>We may update this Privacy Policy from time to time.</p>
        <p className="mt-2">
          Any changes will become effective immediately upon posting the
          updated version. We encourage users to review this Privacy Policy
          periodically to stay informed about how we protect their
          information.
        </p>
        <p className="mt-2">
          Continued use of our Services after changes become effective
          constitutes acceptance of the revised Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "15. Contact Us",
    content: (
      <>
        <p>
          If you have any questions, requests, or concerns regarding this
          Privacy Policy or our privacy practices, please contact us:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Email: support@pavocard.com</li>
          <li>Nigeria: +234 706 606 7435</li>
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
        <p className="text-[rgba(0,0,0,0.5)] text-[16px] md:text-[18px] font-sans mb-2">
          Effective Date: July 17, 2026
        </p>
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
