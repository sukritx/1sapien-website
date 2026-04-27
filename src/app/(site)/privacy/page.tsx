import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 1Sapien",
  description: "Privacy Policy for 1Sapien Company - learn how we collect, use, and protect your personal data.",
};

const PrivacyPage = () => {
  return (
    <main>
      <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
        <div className="container max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-dark-6 space-y-8">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You respond to our advertisements and tells You about Your privacy rights and how the law protects You. We use Your Personal Data to contact and support you, as well as to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Mobile Communication Policy</h2>
            <p>
              We value your privacy and are committed to protecting your personal information. When you provide your mobile number, you consent to receive SMS messages related to our services. Your mobile opt-in will <strong>not</strong> be shared with third parties for marketing purposes.
            </p>
            <p>
              <strong>Opt-Out Instructions:</strong> You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us.
            </p>
            <p>
              <strong>Support:</strong> If you need assistance with our SMS communications, you can text <strong>HELP</strong> for more information.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Interpretation and Definitions</h2>

            <h3 className="text-xl font-bold text-dark dark:text-white">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-bold text-dark dark:text-white">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to 1Sapien Company.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the advertisement, website, or application.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-bold text-dark dark:text-white">Types of Data Collected</h3>
            <p>
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Location details such as your address, city, or country</li>
              <li>Any other data such as personal preferences, requirements, or comments</li>
            </ul>

            <h3 className="text-xl font-bold text-dark dark:text-white">Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service, including monitoring usage.</li>
              <li>To contact You via email, phone, or SMS about updates, features, or support.</li>
              <li>To manage Your requests and respond to inquiries.</li>
              <li>For legal compliance and security purposes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <p>
              This Privacy Policy was last updated on 2024/04/03
            </p>

            <h2 className="text-2xl font-bold text-dark dark:text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can contact us via email at{" "}
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

export default PrivacyPage;
