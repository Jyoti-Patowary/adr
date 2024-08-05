import Head from 'next/head'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Terms and Conditions - AllDayRide</title>
        <meta name="description" content="Terms and Conditions for AllDayRide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-2xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">Terms and Conditions</h1>
        
        <p className="mb-4">
          Welcome to AllDayRide (referred to as &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms and Conditions outline the rules and regulations for using our website [alldayride.in](http://alldayride.in) and the services we offer. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions.
        </p>

        <h2 className="text-xl font-semibold mb-4">1. Use of the Website</h2>
        <p className="mb-4">
          You agree to use the website in accordance with these Terms and Conditions and all applicable laws and regulations. You may not use the website for any unlawful or prohibited purpose. Unauthorized use of the website may give rise to a claim for damages and/or be a criminal offense.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. Account Registration</h2>
        <p className="mb-4">
          To access certain features of our website, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. Rental Terms</h2>
        <p className="mb-4">
          When you rent a vehicle from us, you agree to the specific rental terms outlined in the rental agreement. This includes but is not limited to the rental duration, charges, and the condition of the vehicle upon return. Failure to adhere to these terms may result in additional charges or penalties.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Payment and Charges</h2>
        <p className="mb-4">
          All payments for services must be made in advance or as agreed upon. Rental charges, including any additional fees, are specified in the rental agreement. We reserve the right to modify our pricing at any time, but any changes will not affect existing rental agreements.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Cancellation and Refunds</h2>
        <p className="mb-4">
          Cancellations must be made in accordance with our cancellation policy. Refunds, if applicable, will be processed as per the terms outlined in the rental agreement. Please refer to the specific terms for details on cancellation fees and refund eligibility.
        </p>

        <h2 className="text-xl font-semibold mb-4">6. Liability</h2>
        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential damages arising from your use of the website or services. Our liability is limited to the maximum extent permitted by law. You agree to indemnify and hold us harmless from any claims arising out of your use of the website or services.
        </p>

        <h2 className="text-xl font-semibold mb-4">7. Privacy</h2>
        <p className="mb-4">
          Your use of our website and services is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our website, you consent to the practices described in the Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on our website, and your continued use of the website and services constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions are governed by and construed in accordance with the laws of the State of Assam. Any disputes arising from these Terms and Conditions shall be resolved in the courts of Guwahati, Assam.
        </p>

        <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:alldayride6@gmail.com" className="text-blue-600 hover:underline">alldayride6@gmail.com</a> or at our address:
        </p>
        <p>
          Geetanagar, Opp. BSF Camp, Guwahati, Assam
        </p>
      </main>
    </div>
  )
}
