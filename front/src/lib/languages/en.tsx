import { Language } from "@/types/shared";

const en: Language = {
    name: "Eng",
    welcomeMessage: {
        welcomeText: (
            <>
                Welcome! We invite you to participate in a racing tournament
                without leaving home. All you need is a reliable internet
                connection and the desire to win.
                <br />
                <br /> Compete with friends or random opponents. Who knows,
                maybe you will become the champion of the Game of Drones
                tournament? <br />
                <br /> Ready to take the challenge? Register on the site and
                head to the track. Don't miss the chance to experience the
                thrill and fun of racing. We wish you good luck and enjoyable
                gameplay!
                <br />
                <br /> On your marks! Go!
            </>
        ),
        signButtonText: "Login / Registration",
        participantButtonText: "Participate in the Tournament",
    },
    authTabs: {
        signIn: "Login",
        signUp: "Registration",
        signWith: "Log in with",
    },
    confirmationCodeForm: {
        go_back: "Back",
        codeConfirm: "Confirmation code",
        notifyEmail:
            "An SMS with a confirmation code has been sent to your E-mail",
        retryEmailCode: "Send the confirmation code again",
        confirmEmail: "Confirm E-mail",
    },
    createPasswordPage: {
        createPassword: "Creating a password",
        go_back: "Back",
        signUp: "Register",
        confirmPasswordPlaceholder: "Repeat password",
        passwordPlaceholder: "Create a password",
    },
    loginForm: {
        resetPassword: "Forgot your password?",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        signIn: "Login",
        privacyPolicy: (
            <>
                By clicking the button above, you agree with the{" "}
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">User Agreement</span>.
            </>
        ),
    },
    registerForm: {
        emailPlaceholder: "Email",
        IINPlaceholder: "IIN",
        passwordPlaceholder: "Password",
        confirmPasswordPlaceholder: "Confirm Password",
        signIn: "Continue",
        privacyPolicy: (
            <>
                I am acquainted and agree with the{" "}
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">User Agreement</span>.
            </>
        ),
    },
    welcome: {
        welcomeText: "Welcome!",
        info: `Before using all the features of the platform, please fill out a short survey and watch the instruction. And, by the way, it will always be at hand, even after logging in!`,
        exit: "Exit",
        next: "Next",
    },
    profileDataForm: {
        photoUpload: "Upload Photo",
        editPhoto: "Edit Photo",
        last_name: "Last Name",
        first_name: "First Name",
        middle_name: "Middle Name",
        changePassword: "Change Password",
        back: "Back",
        save: "Save",
    },
    profileCard: {
        editProfile: "Edit Profile",
        replacePhoto: "Replace Photo",
        deletePhoto: "Delete Photo",
    },
    editProfile: {
        personalInfo: "Personal information",
        changePassword: "Change your password",
        logout: "Exit",
        save: "Save",
        oldPassword: "Enter your old password",
        password: "Password",
        repeatPassword: "Confirm Password",
    },
    homePage: {
        news: "News",
        more: "More detailed",
        instruction: "Platform Instructions",
        balance: "Your Balance",
        currency: "kzt.",
        replenishBalance: "Replenish Balance",
    },
    resetPassword: {
        password: "Reset password",
        info: "Enter your email address and we will send you instructions on how to reset your password.",
    },
    tabText: {
        main: "Home",
        profile: "Profile",
        tournaments: "Tournaments",
        help: "Help",
    },
    tournamentsStatistics: {
        statistics: "Statistics",
        totalGames: "Total Games",
        totalWin: "Total Wins",
        date: "Date",
        tournament: "Tournament",
        result: "Result",
        place: "Place",
    },
    incomingTournament: {
        incoming: "Upcoming Tournament",
        start: "Starts in",
        back: "Back to Tournament Page",
    },
    myIncomingTournamentList: {
        myTournaments: "My Tournaments",
        listTournaments: "List of Tournaments",
    },
    taskList: {
        tasks: "Tasks",
        endTask: "Complete tasks and gain experience",
        upTo: "Up to",
        level: "lvl.",
    },
    taskDetails: {
        reward: "Reward",
        process: "Task Progress",
        task: "Task",
        select: "Select one from the list",
    },
    timeSlot: {
        place: "places",
    },
    tournamentCard: {
        start_tournament: "Tournament Start",
        contribution: "Participant's Contribution",
        currency: "kzt.",
        more_detailed: "More Details",
    },

    tournamentDetail: {
        start_tournament: "Tournament Start",
        contribution: "Participant's Contribution",
        currency: "kzt.",
        go_back: "Back to Tournament Page",
        go_forward: "Participate in the tournament",
    },
    participatePage: { go_back: "Back" },
    tournamentEnrollCard: {
        upcoming: "Upcoming Tournament",
        start: "Starts in",
        lets_go: "LET'S GO!",
    },
    trainingCardWithSlots: {
        training: "Training",
        select: "Select the date to participate in the training",
        attention:
            "Attention! After confirming your choice, you will not be able to change the time.",
        confirm: "Confirm",
    },
    helpPage: {
        question: "Q&A",
        payment: "Payments",
        rules: "Participation Rules",
        privacyPolicy: "Public Contract-Offer and Privacy Policy",
        our_partners: "Our Partners",
    },
    trainingCard: {
        training: "Training",
        select: "Select date for training",
    },
    FAQ: {
        have_questions: "Have questions?",
        question1: "When will the tournament take place?",
        answer1: "The daily tournament will take place for 3 consecutive days",
        question2: "How much is the entry fee?",
        answer2:
            "The entry fee for participating in one section of the tournament is",
        question3: "Are these virtual races?",
        answer3:
            "No, players will connect online and play through the platform, controlling real cars on a special track in Almaty",
        question4: "What are the age restrictions?",
        answer4: "You can participate in Game of Drones from the age of 12",
    },
    homeLoyaut: {
        exit: "Выйти",
    },
    payment: {
        info: "Payment Information",
        paymentText: `Our website is connected to Internet acquiring, and you can pay for the Service with a Visa or Mastercard bank card. After confirming the selected Product or service, a secure window will open with the payment page of the CloudPayments processing center, where you need to enter your bank card details. The 3-D Secure protocol is used for additional authentication of the cardholder. If your issuing Bank supports this technology, you will be redirected to its server for additional identification. Please check with the Bank that issued your bank card for information about the rules and methods of additional identification.The online payment service is carried out in accordance with the rules of the International payment systems Visa and MasterCard on the principles of confidentiality and security of payment, for this purpose the most up-to-date methods of verification, encryption and data transmission over closed communication channels are used. The bank card data is entered in a secure window on the CloudPayments payment page.In the fields on the payment page, you must enter the card number, cardholder's name, card expiration date, and a three-digit security code (CVV2 for VISA or CVC2 for MasterCard). All necessary data is displayed on the surface of the bank card.CVV2/CVC2 is a three—digit security code located on the back of the card.Next, the page of your issuing bank will open in the same window to enter the 3-D Secure code. If you do not have static 3-D Secure configured, it will be sent to your phone number via SMS. If you have not received the 3-D Secure code, then you should contact your issuing bank.3-D Secure is the most advanced technology for ensuring the security of card payments on the Internet. It allows you to uniquely identify the authenticity of the cardholder performing the transaction and minimize the risk of fraudulent card transactions.Security Guarantees The CloudPayments processing Center protects and processes your bank card data according to the PCI DSS 3.0 security standard. The transfer of information to the payment gateway takes place using SSL encryption technology. Further information transfer takes place over closed banking networks with the highest level of reliability. CloudPayments does not transfer your card details to us or other third parties. The 3-D Secure protocol is used for additional authentication of the cardholder.If you have any questions about the completed payment, you can contact the customer support service of the payment service by e-mail support@cloudpayments.kz .Online payment Security The personal information you provide (name, address, phone number, e-mail, credit card number) is confidential and not subject to disclosure. Your credit card data is transmitted only in encrypted form and is not stored on our Web server.The security of online payment processing is guaranteed by CloudPayments Kazakhstan LLP. All transactions with payment cards take place in accordance with the requirements of VISA International, MasterCard and other payment systems. When transmitting information, specialized security technologies for online card payments are used, data processing is carried out on a secure high-tech server of the processing company.Payment by credit cards is safe because:
The authorization system guarantees the buyer that the payment details of his payment card (number, expiration date, CVV2/CVC2) will not fall into the hands of fraudsters, since these data are not stored on the authorization server and cannot be stolen.
The buyer enters his payment data directly in the CloudPayments authorization system, and not on the online store's website, therefore, the payment details of the buyer's card will not be available to third parties.Refund of funds When making an online payment using payment cards, a cash refund is not allowed. The refund procedure is governed by the rules of international payment systems:
The consumer has the right to refuse the product at any time before its transfer, after the transfer of the product, the refusal must be issued within 14 days;
The return of goods of proper quality is possible if its presentation, consumer properties, as well as a document confirming the fact and conditions of purchase of the specified product are preserved;
The consumer does not have the right to refuse a product of proper quality having individually defined properties if the specified product can be used exclusively by the person purchasing it;
In case of refusal of the goods by the consumer, the seller must return to him the amount of money paid by the consumer, no later than ten days from the date of the consumer's presentation of the relevant claim.
To refund funds to a bank card, it is necessary to fill out an "Application for a refund", which is sent by the company to the e-mail address upon request, and send it along with a copy of the identity document attached to the address nm@lincoln.company .The refund will be made to the bank card within ___ business day from the date of receipt of the "Application for a refund" by the Company.To refund funds for transactions carried out with errors, you must submit a written application and attach a copy of the document, identification document, and receipts/receipts confirming the erroneous debit. This application must be sent to nm@lincoln.company .The refund amount will be equal to the purchase amount. The period for consideration of the Application and refund of funds begins to be calculated from the moment the Company receives the Application and is calculated in working days excluding holidays / weekends.Cases of refusal to make a payment:
the bank card is not intended for making payments via the Internet, which can be found out by contacting your issuing Bank;
There are not enough funds to pay with a bank card. You can find out more about the availability of funds on the payment card by contacting the bank that issued the bank card;
the bank card data was entered incorrectly;
the validity period of the bank card has expired. The validity period of the card is usually indicated on the front of the card (this is the month and year until which the card is valid). You can find out more about the validity period of the card by contacting the issuing bank.
For payment by bank card and other issues related to the operation of the site, you can contact the following phone numbers: YOUR PHONE NUMBER.Confidentiality 1. Definitions of the Internet project https://gameofdrones.kz / (hereinafter referred to as the URL, "we") takes the issue of confidentiality of information of its customers and site visitors seriously https://gameofdrones.kz / (hereinafter referred to as "you", "site visitors"). We call personalized information that contains personal data (for example: full name, username or company name) of the site visitor, as well as information about the actions you perform on the site URL. (for example: ordering a site visitor with their contact information). We call anonymous data that cannot be uniquely identified with a specific site visitor (for example: site traffic statistics).2. Use of information We use the personalized information of a specific site visitor solely to provide him with high-quality services and their accounting. We do not disclose the personalized data of some site URL visitors to other site visitors. We never publish personalized information in the public domain and do not share it with third parties. The only exceptions are situations where the provision of such information to authorized state bodies is prescribed by the current legislation of the Republic of Kazakhstan. We publish and distribute only reports based on collected anonymous data. At the same time, the reports do not contain information by which it would be possible to identify personalized data of service users. We also use anonymous data for internal analysis, the purpose of which is to develop URL3 products and services. Referencesite https://gameofdrones.kz / may contain links to other sites unrelated to our company and owned by third parties. We are not responsible for the accuracy, completeness and reliability of information posted on third-party sites, and we do not undertake any obligations to maintain the confidentiality of information left by you on such sites.4. Limitation of liability We do our best to comply with this privacy policy, however, we cannot guarantee the safety of information in case of exposure to factors beyond our control, the result of which will be the disclosure of information. Website https://gameofdrones.kz / and all information posted on it is provided on an "as is" basis without any guarantees. We are not responsible for adverse consequences, as well as for any losses caused as a result of restricting access to the URL site or as a result of visiting the site and using the information posted on it.5. For questions regarding this policy, please contact nm@lincoln.companyЮридическое Company "GameofDrones Ltd."Legal address: Republic of Kazakhstan, Astana city, Yesil district, Avenue Mangilik El, building 55/8, postal code 020000BIN: 220740900245IIK: KZ698562203121165992AO "Bank CenterCredit"BIC: KCJBKZKXKbe 17email: nm@lincoln.company`,
    },
    rules: {
        info: "Rules of participation",
        rulesText: `This Game is a marketing event that is held to attract attention, generate and maintain interest in the esports discipline.The game is not a lottery and does not pose a risk to life. Participation in the Game is conducted in accordance with these Rules. By joining the Game, the participants fully agree with the Rules set out.1. General provisions 1.1. The name of the Game is "Game of Drones" (above and below – "Game").1.2. The venue of the Game:Landing page: https://gameofdrones.kz1.3 . The duration of the Game:- with "X" _________ 2023 year by "X" _______ 202__ of the year.1.4. Individuals who have registered on the site can participate in the Game https://gameofdrones.kz , (hereinafter referred to as "pilots"/"participants of the Game").2. Other conditions of the Game2.1. The Organizer of the Game may change the Rules and the duration of the Game at any time, including terminating the Game by publishing updated Rules and other information on the website https://gameofdrones.kz .The date of notification is the date of publication of the relevant information.2.2. The Organizer of the Game has the right, at its discretion, to invalidate participation in the Game, prohibit participation in the Game, prevent participation in the Game in case of violation by the Participants of the Game of these Rules, identify facts of abuse of the rights granted by the participants of the Game, distribute access to their account to third parties, or attempt to falsify access.2.3. If it is impossible to activate access to the Game, or if it is not available on the site, the Participants of the Game can contact the Organizer via the link: https://gameofdrones.kz .2.5. The Organizer of the Game is not responsible for technical failures that may occur when using a poor-quality connection on the Participant's side, as a result of which the Participant of the Game cannot gain access. The Organizer of the Game is not responsible for the inability to access the Game, as a result of the use by the Participant of the Game of a device that, due to technical features and / or settings, does not support the functionality of the Game.2.6. The Participants of the Game independently bear all costs associated with participation in the Game.2.7. When registering, the participant of the Game must provide his reliable personal data: full name, age, email, phone number and IIN.By registering on the Game's website, the Participant gives permission for the processing and collection of their personal data.By registering on the Game's website, the Participant gives permission to broadcast the Game in general streaming for advertising purposes.2.8. The Participants of the Game are obliged to: respect other Participants and Organizers of the Game; not be in a state of alcoholic, narcotic or psychotropic intoxication; not use profanity.2.9. The participation fee will not be refunded if the Participant of the Game misses the booked time for training and participation in the Game, including in the tournament.`,
    },
    privacyPolicy: {
        info: "Public contract-offer and privacy policy",
        privacyPolicyText: `This agreement is an official offer addressed to any individual/legal entity or individual entrepreneur, hereinafter referred to as the "Customer", who has agreed to the terms of this public offer by its full and unconditional acceptance.The customer is obliged to fully familiarize himself with this document before making the payment.The private Company "GameofDrones Ltd.", represented by the Director of Ayten Beksultan Berikuly, acting on the basis of the Charter, Hereinafter referred to as the "Contractor" expresses its intention to conclude a contract for the provision of paid services with the Customer on the terms of this public offer agreement (hereinafter referred to as the "Agreement").1. TERMS AND DEFINITIONS:1.1. Offer – this document published on the website: https://gameofdrones.kz .1.2. Acceptance of the offer – full and unconditional acceptance of the offer by the Customer through the actions specified in Section 4 of this Agreement. Acceptance of the offer creates a Contract.1.3. Services — services provided by the Contractor to participate in the Game to the Customer.1.4. The Customer is the person who has accepted the offer, and is thus the Customer of the Contractor's services under this Agreement.1.5. Website is an Internet resource containing full information about the content and cost of services, located at: https://gameofdrones.kz .1.6. The game is "Game of Drones".Other concepts and definitions not explicitly defined in this section are interpreted in accordance with the legislation of the Republic of Kazakhstan.2. SUBJECT OF THE AGREEMENT:2.1. The Contractor provides, and the Customer pays for the Services on the Website.2.2. The cost of services under the Agreement is reported on the Contractor's Website.2.3. This Agreement, in accordance with Article 395 of the Civil Code of the Republic of Kazakhstan, is a public offer of the Contractor to individuals, legal entities and individual entrepreneurs.2.4. Unconditional acceptance (Acceptance of the offer) of the terms of this Agreement is considered to be the Customer's payment for the Contractor's Services under the Agreement.2.5. From the moment of Acceptance of the offer, the Customer is considered to have read and agreed to the terms of this Agreement and, in accordance with the Civil Code of the Republic of Kazakhstan, is considered to have entered into contractual relations with the Contractor on these terms.3. OBLIGATIONS OF THE PARTIES:3.1. Obligations of the Contractor:3.1.1. Organize and ensure proper high-quality performance of Services; 3.1.2. Provide the Customer with access to the Game on the Site, after the Customer has completed registration and made payment for Services.3.1.3. In case of lack of access to the Game due to technical problems of the Site, the Contractor is obliged to fix the problems within a reasonable time.3.1.4. Comply with the Rules of Participation in the Game set out in Appendix No. 1 to this Agreement.3.2. Obligations of the Customer:3.3.1. Provide reliable information when registering on the Site and keep this information up to date in your personal account (on your personal page) on the Site. In this case, the Contractor has the right to refuse to provide Services to the Customer in case the Customer provides knowingly incorrect (false) information.3.2.1. Make the payment in accordance with the terms of this Agreement.4. PAYMENT FOR SERVICES:4.1. The Customer pays for the Services specified in clause 2.1 of the Agreement in tenge on the payment page of the Website.4.2. The Customer pays for the Contractor's Services before participating in the Game in the amount of 100% prepayment by cashless payment.5. COPYRIGHT COMPLIANCE 5.1. The Customer is obliged to comply with the copyright of the Performer for the Game in accordance with the legislation of the Republic of Kazakhstan.5.2. The Customer is prohibited from copying any video or text materials.5.3. The Customer is prohibited from using the Game or its fragments for commercial purposes, on his own behalf, to place in the public domain, to transfer to third parties.5.4. The Customer is prohibited from transferring the login and password of access to the Site to third parties. The discovery of the fact of access to the Game by third parties is the basis for the unilateral termination of the Contract by the Contractor without refund.6. REGISTRATION ON THE WEBSITE, CONFIDENTIALITY AND PROTECTION OF PERSONAL DATA:6.1. The Customer agrees that the use of the Site and the receipt of Services under the Contract entails the registration procedure on the Site.6.2. By providing his personal data to the Contractor, the Customer agrees to their processing by the Contractor, including for the purpose of fulfilling the Contractor's obligations to the Customer under this Agreement, promoting services by the Contractor, conducting electronic and surveys using various messengers, monitoring the results of marketing campaigns, customer support, Customer satisfaction control, as well as the quality of services provided by the Contractor.6.3. The processing of personal data means any action (operation) or a set of actions (operations) performed by the Contractor using automation tools or without using such tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification) extraction, use, depersonalization, blocking, deletion, destruction personal data.6.4. The Contractor undertakes not to disclose the information received from the Customer. It is not considered a violation for the Customer to provide information to agents and third parties acting on the basis of an agreement with the Contractor to fulfill obligations to the Customer. Disclosure of information in accordance with reasonable and applicable legal requirements is not considered a violation of obligations. The Contractor has the right to use the "cookies" technology. Cookies do not contain confidential information and are not transmitted to third parties. The Contractor receives information about the IP address of the Site visitor. This information is not used to identify the Customer, except in cases of fraudulent actions by the Customer.6.5. The Customer is responsible for the accuracy of the personal data transmitted to the Contractor.6.6. The Customer is responsible for unauthorized receipt of the password and access to the Customer's personal account on the Website by third parties and ensures the confidentiality of access data to the personal account. The Customer is responsible for all actions and consequences of using the Customer's personal account, including cases of unauthorized access, as well as the voluntary transfer by the Customer of data for access to the Customer's personal account to third parties. In this case, all actions within or using the Customer's personal account are considered to be performed by the Customer himself.7. OTHER CONDITIONS:7.1. The Contractor has the right to unilaterally change the terms of the Agreement at any time without prior agreement with the Customer, while ensuring the publication of the amended terms on the Website. The Contractor is not responsible for possible risks and conditions of safe use, as well as for network attacks or hacking of the Site (including, but not limited to), failures in the operation of the Site caused by technical reasons.7.2. The Parties are released from liability for non-fulfillment or improper fulfillment of obligations under the Agreement for the duration of force majeure. Force majeure refers to extraordinary and insurmountable circumstances that prevent the parties from fulfilling their obligations under the Agreement. These include natural phenomena, wars, armed rebellion, mass riots, epidemics, terrorist actions, strikes, etc. At the same time, well-known events do not need any confirmation.7.3. All disputes and disagreements arising from the legal relations under this Agreement shall be resolved through negotiations. If it is impossible to resolve the disputes that have arisen during negotiations, such disputes must be submitted to the court of the Republic of Kazakhstan, the city of Almaty, with mandatory compliance with the claim procedure. The deadline for responding to a claim is 10 (ten) calendar days from the date of receipt.7.4. The Parties are responsible for non-fulfillment and/or improper fulfillment of their obligations under the Agreement in accordance with the current legislation of the Republic of Kazakhstan.7.5. This Agreement comes into force from the moment of Acceptance of the offer by the Customer of this Offer and is valid until the Parties fully fulfill their obligations.7.6. Images and materials published on the Website are protected by copyright. Any use of the materials is possible only with the written permission of the Contractor.DETAILS OF THE CONTRACTOR:CHEKA "GameofDrones Ltd."Legal address: Republic of Kazakhstan, Astana city, Yesil district,Mangilik El Avenue, building 55/8, postal code 020000BIN: 220740900245IIK: KZ698562203121165992AO "Bank CenterCredit"BIC: KCJBKZKXKbe 17.Rules of participation in the Game "Game of Drones"This Game is a marketing event that is held to attract attention, generate and maintain interest in the esports discipline.The game is not a lottery and does not pose a risk to life. Participation in the Game is conducted in accordance with these Rules. By joining the Game, the participants fully agree with the Rules set out.1. General provisions 1.1. The name of the Game is "Game of Drones" (above and below – "Game").1.2. The venue of the Game:Landing page: https://gameofdrones.kz1.3 . The duration of the Game:- with "X" _________ 2023 year by "X" _______ 202__ of the year.1.4. Individuals who have registered on the site can participate in the Game https://gameofdrones.kz , (hereinafter referred to as "pilots"/"participants of the Game").2. Other conditions of the Game2.1. The Organizer of the Game may change the Rules and the duration of the Game at any time, including terminating the Game by publishing updated Rules and other information on the website https://gameofdrones.kz .The date of notification is the date of publication of the relevant information.2.2. The Organizer of the Game has the right, at its discretion, to invalidate participation in the Game, prohibit participation in the Game, prevent participation in the Game in case of violation by the Participants of the Game of these Rules, identify facts of abuse of the rights granted by the participants of the Game, distribute access to their account to third parties, or attempt to falsify access.2.3. If it is impossible to activate access to the Game, or if it is not available on the site, the Participants of the Game can contact the Organizer via the link: https://gameofdrones.kz .2.5. The Organizer of the Game is not responsible for technical failures that may occur when using a poor-quality connection on the Participant's side, as a result of which the Participant of the Game cannot gain access. The Organizer of the Game is not responsible for the inability to access the Game, as a result of the use by the Participant of the Game of a device that, due to technical features and / or settings, does not support the functionality of the Game.2.6. The Participants of the Game independently bear all costs associated with participation in the Game.2.7. When registering, the participant of the Game must provide his reliable personal data: full name, age, email, phone number and IIN.By registering on the Game's website, the Participant gives permission for the processing and collection of their personal data.By registering on the Game's website, the Participant gives permission to broadcast the Game in general streaming for advertising purposes.2.8. The Participants of the Game are obliged to: respect other Participants and Organizers of the Game; not be in a state of alcoholic, narcotic or psychotropic intoxication; not use profanity.2.9. The participation fee will not be refunded if the Participant of the Game misses the booked time for training and participation in the Game, including in the tournament.`,
    },
};

export default en;
