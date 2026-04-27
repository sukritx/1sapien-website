import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | 1Sapien",
  description: "Terms and Conditions for 1Sapien Company A2P 10DLC messaging services and subscription plans.",
};

const TermsPage = () => {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-dark-6 space-y-8">
            <p>
              These Terms and Conditions apply to all SMS messages sent and received as part of the A2P 10DLC messaging services provided by 1Sapien Company. Your use of this service constitutes acceptance of these terms.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">SMS Disclosure</h2>
            <p>
              By opting in to our SMS services, you agree to receive text messages related to <strong>notifications, marketing offers, account authentication (2FA), and other service-related communications</strong>. Message frequency may vary.
            </p>
            <p>
              Standard <strong>message &amp; data rates apply</strong> according to your mobile carrier&apos;s terms.
            </p>
            <p>
              To opt out of SMS communications at any time, reply <strong>STOP</strong> to any message you receive. If you need assistance, you can text <strong>HELP</strong> for support.
            </p>
            <p>
              For more details on how we collect and protect your data, please refer to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Messaging Consent</h2>
            <p>
              As a user, you must explicitly consent to receive messages from 1Sapien Company. Consent can be given through various channels including, but not limited to, our website sign-up forms, paper forms, or verbally through customer service interactions.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Message Types and Frequency</h2>
            <p>
              Messages sent by 1Sapien Company may include alerts, reminders, promotional offers, updates, and other relevant communications. <strong>Message frequency may vary</strong> depending on your interaction with our services and your preferences.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Data Rates and Charges</h2>
            <p>
              Standard <strong>message &amp; data rates apply</strong> to any messages you send or receive as part of our service. This could affect your bill and depends on the terms set by your mobile carrier.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Opt-Out Instructions</h2>
            <p>
              To discontinue receiving messages from 1Sapien Company, you can reply <strong>STOP</strong> to any of our messages at any time. This will unsubscribe you from our SMS communications.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Privacy Policy</h2>
            <p>
              Our Privacy Policy outlines how we collect, use, and protect your data. It can be found <a href="/privacy" className="text-primary hover:underline">here</a>.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Message Delivery</h2>
            <p>
              1Sapien Company does not guarantee that messages will be delivered without delays or failures. Such issues can occur due to factors outside our control, such as network problems or device compatibility.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">User Obligations</h2>
            <p>
              When using our messaging service, you agree to abide by all applicable laws and regulations. You must not use this service to send messages that are offensive, illegal, or intended to harass or harm others.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Compliance with Laws</h2>
            <p>
              You acknowledge that the messaging service must be used in compliance with all relevant laws, including those relating to privacy, telecommunications, and commercial communications.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Subscription Plans and Billing</h2>
            <p>1Sapien Company offers two primary subscription plans:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>$297/month:</strong> Includes a fully built website, access to the 1Sapien platform (web and mobile app), a business phone number for texting and calling, CRM access, automations, remarketing, and customer review tools.
              </li>
              <li>
                <strong>$750/month:</strong> Includes all features from the $297 plan plus full management and optimization of Google Local Service Ads.
              </li>
            </ul>
            <p>
              Subscriptions are available on a month-to-month basis or a prepaid 3-month commitment, the latter including a complimentary Google My Business optimization (valued at $400).
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Advance Payment &amp; Auto-Renewal</h2>
            <p>
              All subscription fees are billed in advance of the service period and are automatically renewed until canceled. Payment is collected via credit/debit card through our secure Stripe processor.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Usage-Based Charges (Rebillable Costs)</h2>
            <p>
              Clients will incur additional charges based on phone number usage, SMS/MMS messaging, voice calls, and number intelligence services. Rates include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Phone Numbers:</strong> Local: $1.15/month | Toll-Free: $2.15/month</li>
              <li><strong>SMS (US/Canada):</strong> $0.0079/segment (inbound/outbound)</li>
              <li><strong>MMS (US/Canada):</strong> $0.02 outbound | $0.01–$0.02 inbound</li>
              <li><strong>Voice Calls:</strong> $0.0180/min outbound | $0.0085–$0.0220/min inbound</li>
              <li><strong>Number Intelligence:</strong> $0.005–$0.01 per function</li>
            </ul>
            <p>
              A detailed breakdown can be found within our documentation and this TOS.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Digital Wallet &amp; Auto-Top-Up</h2>
            <p>
              Clients maintain a digital wallet balance for rebillable usage charges. When wallet funds run low, clients are automatically billed based on their selected auto-top-up preference.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">No Refund Policy</h2>
            <p>
              All payments made to 1Sapien Company are final and non-refundable, including subscription fees and usage charges. By signing up for our service, you acknowledge that our products are custom-built, immediately initiated, and non-reversible once delivery begins.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Chargebacks Are Not Permitted</h2>
            <p>
              You agree not to initiate a chargeback or dispute for services rendered. Doing so constitutes a violation of this agreement. We reserve the right to submit evidence of contract acceptance, platform usage, and delivery documentation in response to all disputes.
            </p>
            <p>
              If a chargeback is filed fraudulently, 1Sapien Company may pursue recovery for the amount owed plus any associated legal or collection fees.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Cancellation Terms</h2>
            <p>
              You may cancel your subscription at any time. Cancellation becomes effective on the next billing cycle, and no future charges will be made beyond that point. Early cancellation does not result in a refund for the unused portion of a prepaid term.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Delivery of Services</h2>
            <p>Services are considered rendered and fulfilled once:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The client&apos;s website has been completed and delivered</li>
              <li>Platform and automation setup is finalized</li>
            </ul>
            <p>
              Login assistance and onboarding support may be provided but are not a prerequisite for fulfillment.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Free Trials and Promotions</h2>
            <p>
              From time to time, 1Sapien Company may offer free trials or discounts. During a trial, limited setup may occur for information gathering purposes. Full services are only rendered once billing begins. Any discounts do not modify the terms of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Payment Failures and Service Suspension</h2>
            <p>
              If a payment fails, we will attempt to process the payment 4 times over 3 weeks. If unpaid within 48 hours of the first failed attempt, your account and platform access will be suspended until the balance is paid.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Consent and Agreement</h2>
            <p>By purchasing any services from 1Sapien Company or checking the agreement box at checkout, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have read, understood, and agree to these Terms of Service</li>
              <li>You accept our No Refund policy</li>
              <li>You waive the right to initiate chargebacks for services rendered</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Changes to Terms and Conditions</h2>
            <p>
              1Sapien Company reserves the right to change these Terms and Conditions at any time. Changes will be communicated through our website or direct communications where feasible.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Contact Information</h2>
            <p>
              For any queries or concerns regarding these Terms and Conditions, please contact 1Sapien Company at{" "}
              <a href="mailto:1sapiencompany@gmail.com" className="text-primary hover:underline">
                1sapiencompany@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
