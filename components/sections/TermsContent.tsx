const SECTIONS = [
  {
    title: "1. Eligibility",
    content: (
      <>
        <p>To use Pavocard, you must:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Be at least 18 years of age</li>
          <li>Have the legal capacity to enter into a binding agreement</li>
          <li>Provide accurate, complete, and up-to-date information</li>
          <li>
            Comply with all applicable laws and regulations in your
            jurisdiction
          </li>
        </ul>
        <p className="mt-2">
          We reserve the right to refuse or terminate access if you fail to
          meet these requirements.
        </p>
      </>
    ),
  },
  {
    title: "2. Our Services",
    content: (
      <>
        <p>Pavocard provides a digital platform that enables users to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Sell eligible gift cards</li>
          <li>
            Receive payments based on the applicable exchange rate at the
            time of transaction
          </li>
          <li>Manage transaction history through their account</li>
        </ul>
        <p className="mt-2">
          We reserve the right to modify, suspend, restrict, or discontinue
          any part of our Services at any time without prior notice.
        </p>
      </>
    ),
  },
  {
    title: "3. User Accounts",
    content: (
      <>
        <p>To access certain features, you must create an account.</p>
        <p className="mt-2">You agree to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Keep your login credentials confidential</li>
          <li>Maintain accurate account information</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
          <li>Accept responsibility for all activities carried out through your account</li>
        </ul>
        <p className="mt-2">
          Pavocard is not responsible for losses resulting from unauthorized
          access caused by your failure to protect your account credentials.
        </p>
      </>
    ),
  },
  {
    title: "4. Gift Card Transactions",
    content: (
      <>
        <p>All submitted gift cards are subject to review and verification.</p>
        <p className="mt-2">By submitting a gift card, you confirm that:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>You are the lawful owner of the gift card</li>
          <li>The gift card was obtained legally</li>
          <li>The gift card has not previously been redeemed</li>
          <li>The information you provide is accurate</li>
        </ul>
        <p className="mt-2">
          Pavocard reserves the right to reject, cancel, or reverse any
          transaction involving suspected fraud, duplicate submissions,
          invalid gift cards, or violations of these Terms.
        </p>
      </>
    ),
  },
  {
    title: "5. Exchange Rates",
    content: (
      <>
        <p>
          Gift card exchange rates are determined by market conditions and
          may change without prior notice.
        </p>
        <p className="mt-2">
          The applicable rate is the rate confirmed by Pavocard at the time
          your transaction is accepted for processing.
        </p>
        <p className="mt-2">
          Displayed rates are estimates and may change before final
          confirmation.
        </p>
      </>
    ),
  },
  {
    title: "6. Payments",
    content: (
      <>
        <p>
          Payments are processed after successful verification and approval
          of submitted gift cards.
        </p>
        <p className="mt-2">Processing times may vary depending on:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Gift card verification</li>
          <li>Banking systems</li>
          <li>Payment providers</li>
          <li>Public holidays</li>
          <li>Regulatory checks</li>
        </ul>
        <p className="mt-2">
          Pavocard is not responsible for delays caused by banks, payment
          processors, internet outages, or other third-party services beyond
          our control.
        </p>
      </>
    ),
  },
  {
    title: "7. Fees",
    content: (
      <>
        <p>Where applicable, Pavocard may charge transaction or service fees.</p>
        <p className="mt-2">
          Any applicable fees will be disclosed before the completion of your
          transaction.
        </p>
      </>
    ),
  },
  {
    title: "8. Prohibited Activities",
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Submit stolen, counterfeit, unauthorized, or previously redeemed gift cards</li>
          <li>Use Pavocard for money laundering, fraud, terrorism financing, or other illegal activities</li>
          <li>Attempt to manipulate exchange rates</li>
          <li>Use automated bots or unauthorized software</li>
          <li>Interfere with the operation or security of the platform</li>
          <li>Create multiple accounts to abuse promotions or evade restrictions</li>
          <li>Provide false or misleading information</li>
        </ul>
        <p className="mt-2">Violation of these Terms may result in:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Immediate account suspension</li>
          <li>Permanent account termination</li>
          <li>Cancellation of pending transactions</li>
          <li>Reporting to law enforcement where required</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Refund Policy",
    content: (
      <>
        <p>Due to the nature of digital gift card transactions:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Successfully completed transactions are final and non-refundable</li>
          <li>Refunds will not be provided for verified and completed gift card sales</li>
          <li>
            If a transaction fails because of an error caused by Pavocard, we
            will investigate and take appropriate corrective action
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Intellectual Property",
    content: (
      <>
        <p>
          All content available through Pavocard, including but not limited
          to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Logos</li>
          <li>Designs</li>
          <li>Text</li>
          <li>Graphics</li>
          <li>Software</li>
          <li>Trademarks</li>
        </ul>
        <p className="mt-2">remains the property of Pavocard or its licensors.</p>
        <p className="mt-2">
          You may not reproduce, modify, distribute, or use any part of our
          intellectual property without prior written permission.
        </p>
      </>
    ),
  },
  {
    title: "11. Privacy",
    content: (
      <>
        <p>
          Your use of our Services is also governed by our Privacy Policy,
          which explains how we collect, process, store, and protect your
          personal information.
        </p>
        <p className="mt-2">
          By using Pavocard, you agree to our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "12. Limitation of Liability",
    content: (
      <>
        <p>To the maximum extent permitted by law, Pavocard shall not be liable for:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Losses resulting from incorrect information provided by users</li>
          <li>Delayed or failed payments caused by banks or third-party providers</li>
          <li>Temporary service interruptions</li>
          <li>Internet or network failures</li>
          <li>Unauthorized access resulting from user negligence</li>
          <li>Indirect, incidental, consequential, or special damages</li>
        </ul>
        <p className="mt-2">Use of the Services is at your own risk.</p>
      </>
    ),
  },
  {
    title: "13. Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless Pavocard, its directors,
          employees, affiliates, and partners from any claims, damages,
          losses, liabilities, or expenses arising from:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Your misuse of the Services</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of applicable laws</li>
          <li>Your infringement of the rights of another person</li>
        </ul>
      </>
    ),
  },
  {
    title: "14. Suspension and Account Termination",
    content: (
      <>
        <p>We reserve the right to suspend, restrict, or permanently terminate your account if you:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Violate these Terms</li>
          <li>Engage in fraudulent or illegal activity</li>
          <li>Provide false information</li>
          <li>Attempt to compromise the security of our platform</li>
          <li>Abuse our Services</li>
        </ul>
        <p className="mt-2">
          Termination may occur without prior notice where necessary to
          protect Pavocard or other users.
        </p>
      </>
    ),
  },
  {
    title: "15. Service Availability",
    content: (
      <>
        <p>
          While we strive to provide uninterrupted Services, we do not
          guarantee that the platform will always be available.
        </p>
        <p className="mt-2">
          Maintenance, technical issues, or circumstances beyond our control
          may temporarily interrupt the Services.
        </p>
      </>
    ),
  },
  {
    title: "16. Changes to These Terms",
    content: (
      <>
        <p>We may revise these Terms from time to time.</p>
        <p className="mt-2">
          Updated versions will be posted on our website and/or mobile
          application with a revised Effective Date.
        </p>
        <p className="mt-2">
          Your continued use of Pavocard after changes become effective
          constitutes your acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    title: "17. Governing Law",
    content: (
      <>
        <p>
          These Terms shall be governed by and interpreted in accordance
          with the laws of the Federal Republic of Nigeria, without regard
          to conflict of law principles.
        </p>
        <p className="mt-2">
          Any disputes arising from these Terms or your use of the Services
          shall be subject to the jurisdiction of the competent courts of
          Nigeria, unless otherwise required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "18. Contact Us",
    content: (
      <>
        <p>
          If you have any questions regarding these Terms &amp; Conditions,
          please contact us:
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

export default function TermsContent() {
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
