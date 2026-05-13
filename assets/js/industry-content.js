/**
 * Industry Content — sector-specific examples, tasks, and scenarios
 * for the City of Sydney AI Bootcamp workshop system.
 *
 * Provides window.INDUSTRY_CONTENT with data for 14 industries across
 * all workshop pages (AI for Business + AI for Marketing + shared).
 */
(function () {
  'use strict';

  window.INDUSTRY_CONTENT = {

    /* ===================================================================
       BUSINESS TASK FINDER — 8 tasks per industry
       Icons: Lucide icon names
       =================================================================== */
    businessTasks: {
      hospitality: [
        {icon:'mail', text:'Replying to reservation enquiries and booking confirmations'},
        {icon:'file-text', text:'Writing daily specials descriptions and menu updates'},
        {icon:'search', text:'Summarising food supplier quotes and comparing prices'},
        {icon:'check-square', text:'Creating opening/closing checklists for front-of-house'},
        {icon:'list', text:'Turning staff meeting notes into action items and rosters'},
        {icon:'calendar', text:'Planning weekly social media content around events'},
        {icon:'users', text:'Drafting job ads for kitchen and floor staff'},
        {icon:'help-circle', text:'Writing FAQ responses for dietary and allergy questions'}
      ],
      retail: [
        {icon:'mail', text:'Responding to customer enquiries about stock availability and sizing'},
        {icon:'file-text', text:'Writing product descriptions for your online store'},
        {icon:'search', text:'Summarising supplier catalogues and wholesale pricing'},
        {icon:'check-square', text:'Creating stocktake and visual merchandising checklists'},
        {icon:'list', text:'Turning team huddle notes into task lists and follow-ups'},
        {icon:'calendar', text:'Planning seasonal sale campaigns and launch dates'},
        {icon:'users', text:'Drafting job ads for casual retail staff'},
        {icon:'help-circle', text:'Writing returns and exchange policy FAQs'}
      ],
      professional: [
        {icon:'mail', text:'Drafting client update emails and engagement letters'},
        {icon:'file-text', text:'Writing scope-of-work documents and proposals'},
        {icon:'search', text:'Summarising regulatory updates and compliance changes'},
        {icon:'check-square', text:'Creating onboarding checklists for new clients'},
        {icon:'list', text:'Turning partner meeting minutes into delegated actions'},
        {icon:'calendar', text:'Planning thought-leadership content for LinkedIn'},
        {icon:'users', text:'Drafting job ads for graduate and paralegal roles'},
        {icon:'help-circle', text:'Writing FAQ pages for common client questions'}
      ],
      creative: [
        {icon:'mail', text:'Replying to project briefs and quote requests from clients'},
        {icon:'file-text', text:'Writing creative brief summaries and project scopes'},
        {icon:'search', text:'Researching competitor campaigns and trend reports'},
        {icon:'check-square', text:'Creating pre-shoot and post-production checklists'},
        {icon:'list', text:'Turning brainstorm sessions into structured task boards'},
        {icon:'calendar', text:'Planning portfolio updates and case study releases'},
        {icon:'users', text:'Drafting contractor briefs for freelance designers'},
        {icon:'help-circle', text:'Writing FAQ responses about turnaround times and file formats'}
      ],
      health: [
        {icon:'mail', text:'Sending appointment reminders and follow-up care emails'},
        {icon:'file-text', text:'Writing patient information sheets and consent forms'},
        {icon:'search', text:'Summarising clinical guidelines and best-practice updates'},
        {icon:'check-square', text:'Creating infection-control and room-turnover checklists'},
        {icon:'list', text:'Turning clinical team meetings into care-plan action items'},
        {icon:'calendar', text:'Planning health-awareness social media posts'},
        {icon:'users', text:'Drafting job ads for reception and allied-health staff'},
        {icon:'help-circle', text:'Writing FAQ responses about referrals and billing'}
      ],
      education: [
        {icon:'mail', text:'Responding to enrolment enquiries and parent emails'},
        {icon:'file-text', text:'Writing course outlines and session descriptions'},
        {icon:'search', text:'Summarising curriculum standards and compliance documents'},
        {icon:'check-square', text:'Creating assessment moderation and audit checklists'},
        {icon:'list', text:'Turning staff meetings into teaching-plan action items'},
        {icon:'calendar', text:'Planning term-by-term marketing and open-day promotions'},
        {icon:'users', text:'Drafting job ads for tutors and training facilitators'},
        {icon:'help-circle', text:'Writing FAQ responses about fees, timetables and credentials'}
      ],
      construction: [
        {icon:'mail', text:'Replying to quote requests and variation order enquiries'},
        {icon:'file-text', text:'Writing site-induction documents and safety procedures'},
        {icon:'search', text:'Summarising subcontractor quotes and material pricing'},
        {icon:'check-square', text:'Creating pre-start and defect-inspection checklists'},
        {icon:'list', text:'Turning site meetings into punch-list action items'},
        {icon:'calendar', text:'Planning project milestone updates for clients'},
        {icon:'users', text:'Drafting job ads for apprentices and site supervisors'},
        {icon:'help-circle', text:'Writing FAQ responses about warranties and maintenance'}
      ],
      realestate: [
        {icon:'mail', text:'Drafting property listing enquiry responses and open-home confirmations'},
        {icon:'file-text', text:'Writing property descriptions and suburb profiles'},
        {icon:'search', text:'Summarising market reports and comparable-sales data'},
        {icon:'check-square', text:'Creating pre-listing and settlement-day checklists'},
        {icon:'list', text:'Turning sales meetings into prospecting action items'},
        {icon:'calendar', text:'Planning open-home schedules and auction-day marketing'},
        {icon:'users', text:'Drafting job ads for property managers and sales agents'},
        {icon:'help-circle', text:'Writing FAQ responses about leasing terms and strata rules'}
      ],
      technology: [
        {icon:'mail', text:'Replying to support tickets and onboarding enquiries'},
        {icon:'file-text', text:'Writing technical documentation and release notes'},
        {icon:'search', text:'Summarising vendor proposals and SaaS comparison reports'},
        {icon:'check-square', text:'Creating deployment and QA-testing checklists'},
        {icon:'list', text:'Turning sprint retrospectives into backlog action items'},
        {icon:'calendar', text:'Planning product update announcements and blog content'},
        {icon:'users', text:'Drafting job ads for developers and support engineers'},
        {icon:'help-circle', text:'Writing FAQ responses about integrations and data security'}
      ],
      tourism: [
        {icon:'mail', text:'Responding to trip-planning enquiries and booking amendments'},
        {icon:'file-text', text:'Writing tour itineraries and experience descriptions'},
        {icon:'search', text:'Summarising tourism industry reports and visitor data'},
        {icon:'check-square', text:'Creating pre-tour safety and equipment checklists'},
        {icon:'list', text:'Turning team debriefs into seasonal planning actions'},
        {icon:'calendar', text:'Planning content around school holidays and peak seasons'},
        {icon:'users', text:'Drafting job ads for tour guides and booking agents'},
        {icon:'help-circle', text:'Writing FAQ responses about cancellations and weather policies'}
      ],
      nonprofit: [
        {icon:'mail', text:'Drafting donor thank-you letters and grant acquittal emails'},
        {icon:'file-text', text:'Writing grant applications and impact-report narratives'},
        {icon:'search', text:'Summarising policy papers and sector research reports'},
        {icon:'check-square', text:'Creating event-planning and volunteer-coordination checklists'},
        {icon:'list', text:'Turning board meeting minutes into committee action items'},
        {icon:'calendar', text:'Planning awareness-campaign timelines and fundraising drives'},
        {icon:'users', text:'Drafting volunteer recruitment ads and role descriptions'},
        {icon:'help-circle', text:'Writing FAQ responses about donations and tax-deductibility'}
      ],
      beauty: [
        {icon:'mail', text:'Sending appointment confirmations and aftercare instructions'},
        {icon:'file-text', text:'Writing treatment descriptions and service-menu updates'},
        {icon:'search', text:'Summarising product supplier brochures and ingredient lists'},
        {icon:'check-square', text:'Creating hygiene and station-setup checklists'},
        {icon:'list', text:'Turning team meetings into training and rebooking actions'},
        {icon:'calendar', text:'Planning seasonal promotions and product launch content'},
        {icon:'users', text:'Drafting job ads for stylists, therapists and reception staff'},
        {icon:'help-circle', text:'Writing FAQ responses about patch tests and contraindications'}
      ],
      fitness: [
        {icon:'mail', text:'Sending class-booking confirmations and membership renewal reminders'},
        {icon:'file-text', text:'Writing class descriptions and program outlines'},
        {icon:'search', text:'Summarising equipment supplier quotes and lease comparisons'},
        {icon:'check-square', text:'Creating gym-floor opening and equipment-maintenance checklists'},
        {icon:'list', text:'Turning coaching meetings into client-program updates'},
        {icon:'calendar', text:'Planning challenge campaigns and seasonal timetable changes'},
        {icon:'users', text:'Drafting job ads for personal trainers and group-fitness instructors'},
        {icon:'help-circle', text:'Writing FAQ responses about memberships, cancellations and health screening'}
      ],
      arts: [
        {icon:'mail', text:'Responding to exhibition enquiries and artist submission emails'},
        {icon:'file-text', text:'Writing exhibition catalogue entries and artist statements'},
        {icon:'search', text:'Summarising grant guidelines and funding-body criteria'},
        {icon:'check-square', text:'Creating exhibition-install and bump-in/bump-out checklists'},
        {icon:'list', text:'Turning production meetings into rehearsal and logistics actions'},
        {icon:'calendar', text:'Planning season launch announcements and opening-night promotions'},
        {icon:'users', text:'Drafting job ads for front-of-house staff and technicians'},
        {icon:'help-circle', text:'Writing FAQ responses about ticketing, accessibility and venue hire'}
      ]
    },

    /* ===================================================================
       MARKETING TASK FINDER — 8 tasks per industry
       =================================================================== */
    marketingTasks: {
      hospitality: [
        {icon:'camera', text:'Creating food photography captions and hashtag sets'},
        {icon:'mail', text:'Writing weekly specials emails and seasonal newsletters'},
        {icon:'target', text:'Building customer personas for different dining occasions'},
        {icon:'edit-3', text:'Developing a consistent brand voice across menus and socials'},
        {icon:'share-2', text:'Repurposing menu descriptions into social posts and stories'},
        {icon:'calendar', text:'Planning 30-day content around seasonal ingredients'},
        {icon:'check-square', text:'Pre-launch checklist for new menu or event promotions'},
        {icon:'users', text:'Writing Google and TripAdvisor review responses'}
      ],
      retail: [
        {icon:'camera', text:'Writing product-of-the-week posts with lifestyle imagery captions'},
        {icon:'mail', text:'Building VIP customer emails for early-access sales and restocks'},
        {icon:'target', text:'Creating buyer personas for in-store vs online shoppers'},
        {icon:'edit-3', text:'Defining a brand tone that works from swing tags to Instagram'},
        {icon:'share-2', text:'Turning a product launch email into Reels scripts and stories'},
        {icon:'calendar', text:'Mapping 30 days of content around gifting seasons and trends'},
        {icon:'check-square', text:'Pre-launch checklist for seasonal sales and pop-up events'},
        {icon:'users', text:'Crafting responses to customer reviews on Google and Facebook'}
      ],
      professional: [
        {icon:'camera', text:'Creating behind-the-scenes team posts and headshot captions'},
        {icon:'mail', text:'Writing quarterly client newsletters with regulatory updates'},
        {icon:'target', text:'Building personas for different client segments and referral sources'},
        {icon:'edit-3', text:'Establishing a professional-yet-approachable brand voice guide'},
        {icon:'share-2', text:'Repurposing blog articles into LinkedIn carousels and email tips'},
        {icon:'calendar', text:'Planning 30 days of thought-leadership and compliance content'},
        {icon:'check-square', text:'Pre-publish checklist for articles, webinars and case studies'},
        {icon:'users', text:'Writing testimonial-request emails and review-site responses'}
      ],
      creative: [
        {icon:'camera', text:'Writing portfolio showcase captions and project-reveal posts'},
        {icon:'mail', text:'Building a monthly inspiration email for past and prospective clients'},
        {icon:'target', text:'Creating personas for different buyer types: agencies, brands, SMEs'},
        {icon:'edit-3', text:'Defining a brand voice that balances creative flair with clarity'},
        {icon:'share-2', text:'Turning one case study into a carousel, reel and blog post'},
        {icon:'calendar', text:'Planning 30 days of content around project launches and awards'},
        {icon:'check-square', text:'Pre-launch checklist for portfolio updates and website refreshes'},
        {icon:'users', text:'Writing proposal follow-up emails and client testimonial requests'}
      ],
      health: [
        {icon:'camera', text:'Creating educational health-tip posts and clinic-tour captions'},
        {icon:'mail', text:'Writing patient newsletters with seasonal wellness advice'},
        {icon:'target', text:'Building personas for different patient groups and referral pathways'},
        {icon:'edit-3', text:'Developing a warm, trustworthy brand voice for patient communications'},
        {icon:'share-2', text:'Repurposing patient-info sheets into social posts and email tips'},
        {icon:'calendar', text:'Planning 30 days of content around health awareness dates'},
        {icon:'check-square', text:'Pre-publish checklist for health content accuracy and compliance'},
        {icon:'users', text:'Writing Google review responses that maintain patient confidentiality'}
      ],
      education: [
        {icon:'camera', text:'Creating student-success story posts and campus-life captions'},
        {icon:'mail', text:'Writing enrolment-drive emails and open-day invitations'},
        {icon:'target', text:'Building personas for career changers, school leavers and employers'},
        {icon:'edit-3', text:'Developing a brand voice that is encouraging yet professional'},
        {icon:'share-2', text:'Turning course outlines into student-facing social content'},
        {icon:'calendar', text:'Planning 30 days of content around enrolment periods and graduations'},
        {icon:'check-square', text:'Pre-launch checklist for course promotions and info-session events'},
        {icon:'users', text:'Writing responses to reviews on Google and course-comparison sites'}
      ],
      construction: [
        {icon:'camera', text:'Creating before-and-after project posts and site-progress captions'},
        {icon:'mail', text:'Writing project-completion showcase emails for past clients'},
        {icon:'target', text:'Building personas for homeowners, developers and architects'},
        {icon:'edit-3', text:'Developing a brand voice that conveys reliability and craftsmanship'},
        {icon:'share-2', text:'Turning a project case study into a reel, carousel and testimonial post'},
        {icon:'calendar', text:'Planning 30 days of content around seasonal building trends'},
        {icon:'check-square', text:'Pre-publish checklist for project galleries and website updates'},
        {icon:'users', text:'Writing responses to Google and HiPages reviews'}
      ],
      realestate: [
        {icon:'camera', text:'Writing property-listing captions and open-home announcement posts'},
        {icon:'mail', text:'Building suburb-spotlight emails and market-update newsletters'},
        {icon:'target', text:'Creating personas for first-home buyers, investors and downsizers'},
        {icon:'edit-3', text:'Establishing a brand voice that is local, knowledgeable and warm'},
        {icon:'share-2', text:'Repurposing a sold-property story into a testimonial, reel and email'},
        {icon:'calendar', text:'Planning 30 days of content around auction seasons and rate changes'},
        {icon:'check-square', text:'Pre-launch checklist for new-listing campaigns and just-sold posts'},
        {icon:'users', text:'Writing responses to Google and RateMyAgent reviews'}
      ],
      technology: [
        {icon:'camera', text:'Creating product-demo screenshots and feature-highlight captions'},
        {icon:'mail', text:'Writing product-update emails and onboarding drip sequences'},
        {icon:'target', text:'Building personas for technical buyers, end users and decision-makers'},
        {icon:'edit-3', text:'Defining a brand voice that is clear, helpful and jargon-free'},
        {icon:'share-2', text:'Turning a feature release blog into a LinkedIn post and email blast'},
        {icon:'calendar', text:'Planning 30 days of content around product launches and tech trends'},
        {icon:'check-square', text:'Pre-launch checklist for feature announcements and landing pages'},
        {icon:'users', text:'Writing responses to reviews on G2, Capterra and Google'}
      ],
      tourism: [
        {icon:'camera', text:'Creating destination-highlight posts and guest-experience captions'},
        {icon:'mail', text:'Writing pre-trip excitement emails and post-trip review requests'},
        {icon:'target', text:'Building personas for families, couples, solo travellers and groups'},
        {icon:'edit-3', text:'Developing a brand voice that captures adventure and local expertise'},
        {icon:'share-2', text:'Repurposing guest reviews into social proof posts and story highlights'},
        {icon:'calendar', text:'Planning 30 days of content around school holidays and festivals'},
        {icon:'check-square', text:'Pre-launch checklist for new tour packages and seasonal promotions'},
        {icon:'users', text:'Writing responses to TripAdvisor, Google and Booking.com reviews'}
      ],
      nonprofit: [
        {icon:'camera', text:'Creating impact-story posts and volunteer-spotlight captions'},
        {icon:'mail', text:'Writing donor newsletters and end-of-financial-year appeal emails'},
        {icon:'target', text:'Building personas for individual donors, corporates and volunteers'},
        {icon:'edit-3', text:'Developing a brand voice that is hopeful, transparent and compelling'},
        {icon:'share-2', text:'Turning an annual report into social graphics, emails and blog posts'},
        {icon:'calendar', text:'Planning 30 days of content around awareness days and campaigns'},
        {icon:'check-square', text:'Pre-launch checklist for fundraising campaigns and events'},
        {icon:'users', text:'Writing thank-you responses to supporter comments and messages'}
      ],
      beauty: [
        {icon:'camera', text:'Creating before-and-after transformation posts and treatment captions'},
        {icon:'mail', text:'Writing seasonal treatment emails and birthday-offer campaigns'},
        {icon:'target', text:'Building personas for bridal clients, regulars and first-timers'},
        {icon:'edit-3', text:'Developing a brand voice that feels luxurious yet approachable'},
        {icon:'share-2', text:'Turning a treatment guide into Reels, story tips and email content'},
        {icon:'calendar', text:'Planning 30 days of content around beauty trends and self-care themes'},
        {icon:'check-square', text:'Pre-launch checklist for new treatment announcements and price updates'},
        {icon:'users', text:'Writing responses to Google and salon-booking platform reviews'}
      ],
      fitness: [
        {icon:'camera', text:'Creating workout-tip posts and member-transformation captions'},
        {icon:'mail', text:'Writing challenge-launch emails and re-engagement campaigns'},
        {icon:'target', text:'Building personas for beginners, athletes and post-rehab clients'},
        {icon:'edit-3', text:'Developing a brand voice that is motivating without being intimidating'},
        {icon:'share-2', text:'Turning a workout program into quick-tip reels, carousels and emails'},
        {icon:'calendar', text:'Planning 30 days of content around fitness challenges and seasons'},
        {icon:'check-square', text:'Pre-launch checklist for new class launches and timetable changes'},
        {icon:'users', text:'Writing responses to Google reviews and social media testimonials'}
      ],
      arts: [
        {icon:'camera', text:'Creating exhibition-preview posts and artist-spotlight captions'},
        {icon:'mail', text:'Writing season-launch emails and opening-night invitations'},
        {icon:'target', text:'Building personas for art collectors, students and casual attendees'},
        {icon:'edit-3', text:'Developing a brand voice that is culturally engaged and inclusive'},
        {icon:'share-2', text:'Turning exhibition notes into social teasers, blog posts and emails'},
        {icon:'calendar', text:'Planning 30 days of content around shows, workshops and festivals'},
        {icon:'check-square', text:'Pre-launch checklist for exhibition openings and season campaigns'},
        {icon:'users', text:'Writing responses to Google reviews and social media comments'}
      ]
    },

    /* ===================================================================
       HALLUCINATION SPOTTER — 5 questions per industry
       =================================================================== */
    hallucinationQuestions: {
      hospitality: [
        {text:"Under NSW food safety regulations, all cafes must display their current Food Safety Supervisor certificate at the front counter at all times.", answer:"hallucination", explanation:"While cafes need a Food Safety Supervisor, there is no requirement to display the certificate at the counter. AI often fabricates specific regulatory display requirements."},
        {text:"The City of Sydney offers small business grants and support programs, including mentoring for hospitality businesses.", answer:"accurate", explanation:"City of Sydney does offer various small business support programs including grants and mentoring across multiple sectors including hospitality."},
        {text:"Under the Fair Work Act, all casual hospitality staff in NSW must be given a minimum 48 hours notice before a shift can be cancelled without penalty.", answer:"hallucination", explanation:"There is no universal 48-hour cancellation notice requirement for casual staff in the Fair Work Act. The actual rules depend on the applicable award and specific circumstances."},
        {text:"Restaurants in the City of Sydney local government area need a development application or approval to place outdoor dining furniture on the footpath.", answer:"accurate", explanation:"Footpath dining in the City of Sydney area does require approval through the council's outdoor dining program."},
        {text:"The NSW Liquor Act 2007 requires all small bars to install CCTV cameras covering every exit and the main service area.", answer:"hallucination", explanation:"CCTV requirements under NSW liquor laws vary based on licence conditions and venue type. There is no blanket rule requiring cameras at every exit for all small bars."}
      ],
      retail: [
        {text:"Under Australian Consumer Law, retailers must offer a refund, repair or replacement for products with a major fault, regardless of store policy.", answer:"accurate", explanation:"The Australian Consumer Law does provide consumer guarantees that override store return policies for products with major faults."},
        {text:"All NSW retail businesses with more than three employees must register with the Retail Industry Council of Australia before trading.", answer:"hallucination", explanation:"There is no body called the Retail Industry Council of Australia that requires registration. AI sometimes invents plausible-sounding regulatory bodies."},
        {text:"The City of Sydney provides resources and workshops to help local retailers with digital marketing and e-commerce.", answer:"accurate", explanation:"City of Sydney does offer business support including digital skills workshops and resources for local retailers."},
        {text:"Under NSW fair-trading law, all gift vouchers sold by retail businesses must have a minimum expiry period of three years.", answer:"accurate", explanation:"Under Australian Consumer Law, gift cards purchased from 1 November 2019 must have a minimum three-year expiry period."},
        {text:"Retail businesses in NSW are legally required to submit a quarterly Stock Movement Report to the Office of Fair Trading.", answer:"hallucination", explanation:"There is no quarterly Stock Movement Report requirement. AI frequently invents official-sounding compliance reports."}
      ],
      professional: [
        {text:"The Tax Practitioners Board regulates tax agents and BAS agents in Australia.", answer:"accurate", explanation:"The Tax Practitioners Board (TPB) is the national body that registers and regulates tax practitioners in Australia."},
        {text:"All accounting firms in NSW must complete the Annual Practice Integrity Declaration with CPA Australia or CA ANZ by 30 June each year.", answer:"hallucination", explanation:"There is no document called the Annual Practice Integrity Declaration. AI often fabricates specific compliance documents with plausible names."},
        {text:"Professional services firms in the City of Sydney can access co-working and meeting spaces through council-supported business hubs.", answer:"accurate", explanation:"City of Sydney does support business hubs and co-working spaces that professional services firms can access."},
        {text:"Under the NSW Legal Profession Uniform Law, all solicitors must hold a minimum of $5 million in professional indemnity insurance.", answer:"hallucination", explanation:"While solicitors must hold professional indemnity insurance, the specific minimum amount cited is fabricated. Requirements vary and are set by the Law Society of NSW."},
        {text:"Consultants and contractors in Australia must have an ABN to invoice for their services.", answer:"accurate", explanation:"Businesses and sole traders in Australia generally need an Australian Business Number to operate and invoice for services."}
      ],
      creative: [
        {text:"Copyright in Australia automatically protects original creative works without the need for registration.", answer:"accurate", explanation:"Under the Copyright Act 1968, copyright protection in Australia is automatic and does not require registration."},
        {text:"All freelance designers in NSW earning over $30,000 must register with the Australian Design Practitioners Board before taking on commercial projects.", answer:"hallucination", explanation:"There is no Australian Design Practitioners Board for commercial designers. AI sometimes invents registration bodies for creative professions."},
        {text:"The City of Sydney runs creative-sector grants and programs such as the Cultural and Creative Grants program.", answer:"accurate", explanation:"City of Sydney does run grants specifically for the creative and cultural sector."},
        {text:"Under Australian intellectual property law, photographers automatically lose copyright to images once they are posted on social media.", answer:"hallucination", explanation:"Posting on social media does not transfer copyright. While platforms may gain a licence to display the work, the photographer retains copyright."},
        {text:"Freelancers and sole traders in Australia can claim a portion of home-office expenses as a tax deduction.", answer:"accurate", explanation:"The ATO does allow deductions for home-office running expenses when you work from home."}
      ],
      health: [
        {text:"AHPRA (the Australian Health Practitioner Regulation Agency) regulates 16 health professions in Australia.", answer:"accurate", explanation:"AHPRA works with National Boards to regulate registered health professions across Australia."},
        {text:"All physiotherapy clinics in NSW must submit a Monthly Patient Outcomes Report to the Health Professional Councils Authority.", answer:"hallucination", explanation:"There is no Monthly Patient Outcomes Report requirement for physiotherapy clinics. AI often invents specific reporting obligations."},
        {text:"Health practitioners registered with AHPRA must meet continuing professional development requirements to maintain registration.", answer:"accurate", explanation:"AHPRA-registered practitioners do have CPD obligations as a condition of their registration."},
        {text:"Under the NSW Health Records and Information Privacy Act, patient records must be stored on servers physically located within NSW.", answer:"hallucination", explanation:"The Act does not mandate that records be stored on NSW-based servers. It governs how health information is handled but does not specify physical server locations."},
        {text:"AHPRA has advertising guidelines that restrict health practitioners from using testimonials in their marketing.", answer:"accurate", explanation:"AHPRA advertising guidelines do prohibit the use of testimonials by registered health practitioners."}
      ],
      education: [
        {text:"Registered Training Organisations (RTOs) in Australia are regulated by ASQA, the national VET regulator.", answer:"accurate", explanation:"The Australian Skills Quality Authority (ASQA) is the national regulator for vocational education and training."},
        {text:"All private tutoring businesses in NSW with more than two employees must register with the NSW Education Standards Authority (NESA).", answer:"hallucination", explanation:"Private tutoring businesses are generally not required to register with NESA. NESA regulates schools and certain credentialing, not private tutoring."},
        {text:"RTOs must comply with the Standards for Registered Training Organisations to maintain their registration.", answer:"accurate", explanation:"RTOs are required to meet the Standards for RTOs as a condition of their registration with ASQA."},
        {text:"Under the NSW Education Act, all online course providers must obtain a Digital Learning Provider Licence before offering courses to NSW residents.", answer:"hallucination", explanation:"There is no Digital Learning Provider Licence in NSW. AI often fabricates specific licence types for emerging sectors."},
        {text:"The City of Sydney offers programs and resources to help small businesses, including those in education and training, to build digital skills.", answer:"accurate", explanation:"City of Sydney provides various business support programs including digital literacy and skills-building resources."}
      ],
      construction: [
        {text:"In NSW, a contractor generally needs a licence from NSW Fair Trading to carry out residential building work valued at over $5,000.", answer:"accurate", explanation:"NSW Fair Trading does require contractor licensing for residential building work over a certain threshold."},
        {text:"All construction businesses in NSW must lodge a Quarterly Workplace Safety Compliance Report with SafeWork NSW.", answer:"hallucination", explanation:"There is no Quarterly Workplace Safety Compliance Report. SafeWork NSW has various obligations for businesses but this specific report does not exist."},
        {text:"Home building work over a certain value in NSW requires a Home Building Compensation Fund insurance certificate.", answer:"accurate", explanation:"Home Building Compensation Fund cover is required in NSW for residential building work over the prescribed threshold."},
        {text:"Under the NSW Environmental Planning and Assessment Act, all residential renovation projects in the City of Sydney valued over $10,000 must submit a Sustainability Impact Assessment.", answer:"hallucination", explanation:"There is no Sustainability Impact Assessment requirement at this threshold. AI often invents environmental compliance steps with specific dollar thresholds."},
        {text:"Work health and safety laws in NSW require construction sites to have a WHS management plan for certain higher-risk projects.", answer:"accurate", explanation:"WHS legislation does require safety management plans for construction projects that meet certain criteria."}
      ],
      realestate: [
        {text:"Real estate agents in NSW must hold a licence or be registered as an assistant agent under the Property and Stock Agents Act 2002.", answer:"accurate", explanation:"The Property and Stock Agents Act 2002 does regulate licensing for real estate agents and assistant agents in NSW."},
        {text:"All property managers in NSW must complete a mandatory Tenant Satisfaction Survey each quarter and submit results to NSW Fair Trading.", answer:"hallucination", explanation:"There is no mandatory Tenant Satisfaction Survey requirement. AI often fabricates specific periodic compliance obligations."},
        {text:"Landlords and agents in NSW must comply with the Residential Tenancies Act 2010 regarding bonds, repairs and notice periods.", answer:"accurate", explanation:"The Residential Tenancies Act 2010 does govern the rights and obligations of landlords and tenants in NSW."},
        {text:"Under NSW strata law, all strata managers must complete the Annual Owners Corporation Transparency Certificate and lodge it with the Land Registry.", answer:"hallucination", explanation:"There is no Annual Owners Corporation Transparency Certificate. AI often creates official-sounding documents that do not exist."},
        {text:"Real estate agents must disclose any conflicts of interest, including personal or financial connections to a property transaction.", answer:"accurate", explanation:"Agents have disclosure obligations regarding conflicts of interest under NSW property laws and professional conduct rules."}
      ],
      technology: [
        {text:"The Australian Privacy Act 1988 applies to organisations with an annual turnover of more than $3 million, with some exceptions.", answer:"accurate", explanation:"The Privacy Act 1988 generally applies to organisations with annual turnover above $3 million, along with certain other entities regardless of turnover."},
        {text:"All Australian SaaS companies must obtain a Data Hosting Compliance Certificate from the ACCC before storing customer data in the cloud.", answer:"hallucination", explanation:"There is no Data Hosting Compliance Certificate from the ACCC. AI frequently invents certification requirements for technology businesses."},
        {text:"The Notifiable Data Breaches scheme requires eligible organisations to notify the OAIC and affected individuals of data breaches likely to result in serious harm.", answer:"accurate", explanation:"The NDB scheme under the Privacy Act does require notification of eligible data breaches to the OAIC and affected individuals."},
        {text:"Under Australian cybersecurity law, all IT services companies must register their penetration-testing tools with the Australian Signals Directorate.", answer:"hallucination", explanation:"There is no requirement to register penetration-testing tools with ASD. AI often fabricates registration requirements for security tools."},
        {text:"The ATO allows technology businesses to claim the R&D Tax Incentive for eligible research and development activities.", answer:"accurate", explanation:"The R&D Tax Incentive program does exist and supports companies conducting eligible R&D activities in Australia."}
      ],
      tourism: [
        {text:"Tourism businesses in NSW that operate adventure activities may need to comply with the Australian Adventure Activity Standards.", answer:"accurate", explanation:"There are adventure activity standards that apply to operators offering activities like abseiling, kayaking and similar."},
        {text:"All tour operators in the City of Sydney must register with the Sydney Tourism Operators Board and pay an annual $750 permit fee.", answer:"hallucination", explanation:"There is no Sydney Tourism Operators Board. AI often invents local regulatory bodies with specific fee amounts."},
        {text:"Accommodation providers in NSW must comply with the Australian Consumer Law, including providing accurate descriptions of their properties.", answer:"accurate", explanation:"Australian Consumer Law requires businesses, including accommodation providers, to not engage in misleading or deceptive conduct."},
        {text:"Under NSW travel-industry regulation, all tour operators must lodge a $25,000 surety bond with the Department of Customer Service before selling tour packages.", answer:"hallucination", explanation:"There is no universal $25,000 surety bond requirement for tour operators in NSW. The Travel Compensation Fund was wound up and replaced with different consumer protections."},
        {text:"The City of Sydney supports the local visitor economy through destination marketing and business support programs.", answer:"accurate", explanation:"City of Sydney does invest in the visitor economy through various programs and destination marketing initiatives."}
      ],
      nonprofit: [
        {text:"Charities in Australia must be registered with the Australian Charities and Not-for-profits Commission (ACNC) to access certain tax concessions.", answer:"accurate", explanation:"The ACNC is the national regulator for charities, and registration is required for accessing charity tax concessions."},
        {text:"All not-for-profits in NSW with annual revenue over $50,000 must submit a Community Impact Assessment to the Office of the Registrar General.", answer:"hallucination", explanation:"There is no Community Impact Assessment requirement from the Registrar General. AI often invents reporting requirements with specific revenue thresholds."},
        {text:"Organisations with deductible gift recipient (DGR) status can issue tax-deductible receipts for donations.", answer:"accurate", explanation:"DGR endorsement from the ATO does allow organisations to issue tax-deductible receipts for gifts."},
        {text:"Under the NSW Charitable Fundraising Act, all online crowdfunding campaigns must be pre-approved by the NSW Minister for Fair Trading.", answer:"hallucination", explanation:"Individual crowdfunding campaigns do not need ministerial pre-approval. Charitable fundraising authority is required in some cases, but the specific claim is fabricated."},
        {text:"The City of Sydney provides grants for community organisations, including small project grants and cultural grants.", answer:"accurate", explanation:"City of Sydney does offer multiple grant programs that community and not-for-profit organisations can apply for."}
      ],
      beauty: [
        {text:"Beauty therapists performing skin-penetration procedures in NSW must comply with the Public Health Regulation regarding infection control.", answer:"accurate", explanation:"NSW Public Health Regulation does contain requirements for skin-penetration procedures including sterilisation and hygiene standards."},
        {text:"All beauty salons in the City of Sydney must obtain a separate Cosmetic Services Licence from the TGA before offering facials or chemical peels.", answer:"hallucination", explanation:"There is no Cosmetic Services Licence from the TGA for facials. The TGA regulates therapeutic goods, not salon service licences."},
        {text:"Salons using lasers or IPL devices in NSW may need to comply with the Radiation Control Act and associated regulations.", answer:"accurate", explanation:"The use of lasers and IPL in NSW is subject to radiation safety legislation and may require registration or licensing."},
        {text:"Under NSW consumer protection law, all beauty salons must offer a mandatory 72-hour cooling-off period on prepaid treatment packages over $200.", answer:"hallucination", explanation:"There is no specific mandatory 72-hour cooling-off period for beauty treatment packages. AI often invents specific consumer-protection timeframes."},
        {text:"Product claims on cosmetics sold in Australia are regulated under the Australian Consumer Law, which prohibits misleading or deceptive representations.", answer:"accurate", explanation:"Australian Consumer Law does apply to cosmetic product claims, requiring that they not be misleading or deceptive."}
      ],
      fitness: [
        {text:"Fitness professionals in Australia can obtain registration through Fitness Australia (now AUSactive), which maintains a national register.", answer:"accurate", explanation:"AUSactive (formerly Fitness Australia) does maintain a register of fitness professionals who meet qualification and insurance requirements."},
        {text:"All personal trainers in NSW must complete a mandatory annual Health and Safety Audit lodged with SafeWork NSW.", answer:"hallucination", explanation:"There is no mandatory annual Health and Safety Audit for personal trainers lodged with SafeWork NSW. AI often fabricates sector-specific audit requirements."},
        {text:"Group fitness instructors and personal trainers generally need professional indemnity and public liability insurance to practise.", answer:"accurate", explanation:"Insurance is a standard requirement for fitness professionals, often mandated by industry bodies and facility operators."},
        {text:"Under the NSW Fitness Industry Code of Practice, all gyms must refund unused membership balances within 14 business days of a cancellation request.", answer:"hallucination", explanation:"While the Fitness Industry Code of Practice exists, the specific 14-business-day refund claim is fabricated. The actual terms depend on the code and contract."},
        {text:"Gyms and fitness centres must comply with work health and safety laws, including maintaining equipment and managing risks to clients.", answer:"accurate", explanation:"WHS legislation does apply to fitness businesses, requiring risk management and safe environments for clients and staff."}
      ],
      arts: [
        {text:"The Australia Council for the Arts is the Australian Government's principal arts funding and advisory body.", answer:"accurate", explanation:"The Australia Council for the Arts is indeed the main federal arts funding body."},
        {text:"All performance venues in the City of Sydney seating more than 30 people must submit a monthly Audience Safety Compliance Report to the council.", answer:"hallucination", explanation:"There is no monthly Audience Safety Compliance Report. Venues have various safety obligations but this specific report does not exist."},
        {text:"The City of Sydney offers cultural grants and creative-sector support programs for local artists and arts organisations.", answer:"accurate", explanation:"City of Sydney does provide cultural and creative grants and programs."},
        {text:"Under NSW arts-sector legislation, galleries must register all exhibited artworks with the NSW Arts Registry and pay a per-work exhibition levy.", answer:"hallucination", explanation:"There is no NSW Arts Registry or per-work exhibition levy. AI often invents sector-specific registries and fees."},
        {text:"Live-music and performance venues in NSW must comply with noise and sound-level regulations, which may involve development consent conditions.", answer:"accurate", explanation:"Venues do need to manage noise levels in accordance with planning conditions and environmental regulations."}
      ]
    },

    /* ===================================================================
       FORM EXAMPLES — placeholder content for form-based pages
       =================================================================== */
    formExamples: {

      /* --- Email Response Builder --- */
      emailResponse: {
        hospitality: {
          context: 'A customer emailed asking if you can accommodate a group of 12 for a birthday dinner next Saturday, with two guests who are gluten-free and one vegan.',
          notes: 'Mention our set menu option for groups, confirm dietary accommodations'
        },
        retail: {
          context: 'A customer emailed asking whether a sold-out handbag will be restocked, and if you can hold one for them when it arrives.',
          notes: 'Explain our restocking process and offer to add them to the waitlist'
        },
        professional: {
          context: 'A prospective client emailed asking about your fees for setting up a new small business structure, including company registration and tax setup.',
          notes: 'Outline initial consultation process, mention fixed-fee packages'
        },
        creative: {
          context: 'A potential client emailed requesting a quote for a full brand identity package including logo, business cards and social media templates.',
          notes: 'Ask about their timeline, share our process overview, mention starting price range'
        },
        health: {
          context: 'A new patient emailed asking about your availability for an initial physiotherapy assessment and whether you accept their private health fund.',
          notes: 'Explain first-appointment process, confirm health fund acceptance, mention online booking'
        },
        education: {
          context: 'A parent emailed enquiring about tutoring availability for their Year 10 student struggling with maths ahead of upcoming exams.',
          notes: 'Outline assessment process, available time slots, and package pricing'
        },
        construction: {
          context: 'A homeowner emailed requesting a quote for a bathroom renovation in their Surry Hills terrace, wanting to know your availability and rough timeline.',
          notes: 'Suggest a site visit, outline quoting process, mention typical bathroom reno timeframes'
        },
        realestate: {
          context: 'A potential landlord emailed asking about your property management fees and what services are included in your standard package.',
          notes: 'Outline fee structure, list included services, offer a no-obligation appraisal'
        },
        technology: {
          context: 'A small business owner emailed asking if your team can build a custom inventory management system that integrates with their Xero account.',
          notes: 'Ask about their current workflow, suggest a discovery call, mention similar past projects'
        },
        tourism: {
          context: 'A family of four emailed enquiring about a private harbour cruise for their parents visiting from overseas, asking about availability and pricing.',
          notes: 'Share package options, mention catering add-ons, ask about preferred dates'
        },
        nonprofit: {
          context: 'A corporate partner emailed offering to sponsor your upcoming fundraising gala and asking what sponsorship tiers are available.',
          notes: 'Share sponsorship prospectus details, express gratitude, suggest a meeting'
        },
        beauty: {
          context: 'A bride-to-be emailed asking about bridal makeup and hair packages for her wedding party of six, including a trial session.',
          notes: 'Share bridal package details, mention trial booking process, ask about the wedding date'
        },
        fitness: {
          context: 'A new member emailed asking about personal training options, saying they are recovering from a knee injury and want guidance on safe exercises.',
          notes: 'Recommend an initial assessment, mention qualified trainers, ask for medical clearance details'
        },
        arts: {
          context: 'An emerging artist emailed enquiring about exhibiting at your gallery, including submission guidelines and any associated costs.',
          notes: 'Share the EOI process, mention upcoming exhibition slots, explain commission structure'
        }
      },

      /* --- Meeting Notes to Actions --- */
      meetingNotes: {
        hospitality: {
          context: 'Weekly team briefing — discussed weekend bookings, new dessert menu items, staff training on allergen procedures, and the upcoming wine tasting event.',
          notes: 'Follow up on allergen training completion dates'
        },
        retail: {
          context: 'Monday team huddle — reviewed weekend sales numbers, discussed low stock on bestsellers, planned visual merchandising changes for the new season, mentioned hiring one more casual.',
          notes: 'Get restock orders in by Wednesday'
        },
        professional: {
          context: 'Partner meeting — reviewed current caseload, discussed bringing on a graduate, planned client seminar on EOFY tax changes, flagged upcoming compliance deadlines.',
          notes: 'Confirm seminar venue booking and send invites'
        },
        creative: {
          context: 'Monday standup — reviewed feedback on the cafe rebrand, assigned final revisions, discussed onboarding a new photographer contractor, set deadline for website portfolio update.',
          notes: 'Send updated mockups to cafe client by Thursday'
        },
        health: {
          context: 'Clinical team meeting — discussed new patient referral pathways, reviewed infection control audit results, planned staff CPD sessions, and agreed on updated appointment booking procedures.',
          notes: 'Schedule CPD session dates and circulate to team'
        },
        education: {
          context: 'Staff meeting — reviewed student feedback survey results, discussed new online course platform, planned open-day logistics, assigned responsibility for updating course materials.',
          notes: 'Finalise open-day schedule and marketing materials'
        },
        construction: {
          context: 'Site meeting — reviewed project timeline for the Newtown build, discussed subcontractor delays on tiling, agreed on variation order process, planned next client progress update.',
          notes: 'Chase tiling subcontractor for revised schedule'
        },
        realestate: {
          context: 'Sales meeting — reviewed active listings, discussed pricing strategy for a Balmain property, assigned open-home duties, planned a new digital marketing approach for slower listings.',
          notes: 'Update listing photos for the Balmain property before Saturday'
        },
        technology: {
          context: 'Sprint retro — discussed missed deadline on API integration, reviewed customer support ticket backlog, agreed to prioritise mobile performance bugs, planned a knowledge-sharing session.',
          notes: 'Create tickets for top five mobile performance issues'
        },
        tourism: {
          context: 'Team debrief — reviewed customer feedback from last week\'s tours, discussed adding a sunset kayak option, planned marketing push for school holiday packages, assigned guide training.',
          notes: 'Draft sunset kayak tour description and pricing'
        },
        nonprofit: {
          context: 'Board meeting — reviewed quarterly financials, discussed grant acquittal deadlines, planned volunteer appreciation event, and approved updated strategic plan priorities.',
          notes: 'Submit grant acquittal by end of month'
        },
        beauty: {
          context: 'Team meeting — discussed rebooking rates, reviewed new product line from supplier, planned staff training on the latest facial treatment, agreed on Mother\'s Day promo details.',
          notes: 'Order product samples and schedule training session'
        },
        fitness: {
          context: 'Coach meeting — reviewed class attendance trends, discussed introducing a lunchtime HIIT class, planned the 8-week challenge launch, and agreed on PT client check-in procedures.',
          notes: 'Finalise 8-week challenge pricing and marketing materials'
        },
        arts: {
          context: 'Production meeting — reviewed ticket sales for the current show, discussed tech requirements for the next exhibition, planned volunteer roster for opening night, assigned marketing tasks.',
          notes: 'Confirm tech hire for next exhibition by Friday'
        }
      },

      /* --- Document Summary Builder --- */
      documentSummary: {
        hospitality: {
          context: 'A 15-page food supplier agreement covering pricing, delivery schedules, quality standards, and return policies.',
          notes: 'Focus on pricing changes and delivery terms'
        },
        retail: {
          context: 'A 20-page wholesale supplier contract covering minimum order quantities, payment terms, exclusivity clauses, and shipping arrangements.',
          notes: 'Highlight minimum order changes and payment deadlines'
        },
        professional: {
          context: 'A 30-page regulatory update from the Tax Practitioners Board outlining new CPD requirements and code-of-conduct changes.',
          notes: 'Extract key deadlines and action items for the team'
        },
        creative: {
          context: 'A 10-page client brief for a brand refresh, covering target audience research, competitor analysis, desired brand attributes, and deliverable requirements.',
          notes: 'Pull out key brand attributes and non-negotiable deliverables'
        },
        health: {
          context: 'A 25-page clinical guideline update from the relevant professional board, covering new evidence-based treatment protocols and documentation requirements.',
          notes: 'Identify changes to current practice and implementation deadlines'
        },
        education: {
          context: 'A 40-page ASQA compliance report with audit findings, conditions, and required corrective actions for the RTO.',
          notes: 'List all conditions and their due dates in priority order'
        },
        construction: {
          context: 'A 35-page building contract for a residential renovation, covering scope of works, payment schedule, variation procedures, and defect-liability terms.',
          notes: 'Summarise payment milestones and variation approval process'
        },
        realestate: {
          context: 'A 15-page agency agreement with a new property developer, covering commission structure, marketing contributions, and exclusivity terms.',
          notes: 'Focus on commission rates, marketing budget and exclusivity period'
        },
        technology: {
          context: 'A 20-page SaaS vendor agreement covering data handling, uptime guarantees, support SLAs, pricing tiers, and termination clauses.',
          notes: 'Extract SLA commitments and data-handling obligations'
        },
        tourism: {
          context: 'A 12-page partnership agreement with a hotel chain covering referral commissions, booking procedures, cancellation policies, and branding requirements.',
          notes: 'Summarise commission structure and cancellation terms'
        },
        nonprofit: {
          context: 'A 25-page government grant agreement covering funding milestones, reporting obligations, acquittal procedures, and eligible expenditure categories.',
          notes: 'Extract reporting deadlines and eligible vs ineligible expenses'
        },
        beauty: {
          context: 'A 10-page product distribution agreement from a skincare brand covering retail pricing, display requirements, staff training obligations, and return policies.',
          notes: 'Focus on pricing rules and training requirements'
        },
        fitness: {
          context: 'A 15-page gym equipment lease agreement covering monthly payments, maintenance responsibilities, upgrade options, and end-of-lease terms.',
          notes: 'Summarise total cost, maintenance obligations and exit options'
        },
        arts: {
          context: 'A 20-page venue hire agreement covering bump-in/bump-out schedules, technical specifications, insurance requirements, and revenue-sharing arrangements.',
          notes: 'Extract key dates, technical specs and insurance minimums'
        }
      },

      /* --- Admin Prompt Library --- */
      adminPromptLibrary: {
        hospitality: {
          context: 'Roster planning for a busy cafe with a mix of full-time, part-time and casual staff across morning, afternoon and weekend shifts.',
          notes: 'Consider award rates, fatigue management, and peak trading times'
        },
        retail: {
          context: 'End-of-season stocktake preparation for a boutique with both in-store and online inventory across multiple product categories.',
          notes: 'Include counting procedures, discrepancy handling, and system reconciliation steps'
        },
        professional: {
          context: 'Client file review and compliance check before end-of-financial-year, covering documentation completeness and regulatory requirements.',
          notes: 'Prioritise high-risk files and flag overdue items'
        },
        creative: {
          context: 'Project quoting process for a design agency, covering scope estimation, hourly rates, revision rounds, and out-of-scope work.',
          notes: 'Include a template for common project types like branding and web design'
        },
        health: {
          context: 'New patient onboarding workflow for an allied-health clinic, from initial enquiry through to first appointment and follow-up.',
          notes: 'Include consent forms, health-fund verification, and intake questionnaire steps'
        },
        education: {
          context: 'Student enrolment and induction process for a new term, covering documentation, payment setup, and orientation activities.',
          notes: 'Include USI verification and LLN assessment steps for RTO context'
        },
        construction: {
          context: 'Variation order management process for a residential build, from client request through pricing, approval and implementation.',
          notes: 'Include documentation requirements and contract-clause references'
        },
        realestate: {
          context: 'Tenant move-in process for a property management portfolio, covering lease signing, bond lodgement, condition reports and key handover.',
          notes: 'Include checklist items and required timeframes under NSW tenancy law'
        },
        technology: {
          context: 'Client onboarding workflow for a managed IT services company, covering system audits, account setup, SLA agreements and training.',
          notes: 'Include security baseline checks and documentation handover'
        },
        tourism: {
          context: 'Pre-tour preparation checklist for a guided adventure tour, covering safety briefings, equipment checks, weather assessment and guest communications.',
          notes: 'Include emergency procedures and guide responsibilities'
        },
        nonprofit: {
          context: 'Volunteer onboarding process for a community organisation, covering applications, background checks, training, and role assignment.',
          notes: 'Include Working With Children Check requirements and insurance steps'
        },
        beauty: {
          context: 'New staff onboarding process for a salon, covering system access, client protocols, hygiene procedures, and product training.',
          notes: 'Include infection-control training and rebooking procedures'
        },
        fitness: {
          context: 'New member onboarding workflow for a gym, covering sign-up, health screening, induction session, and goal-setting consultation.',
          notes: 'Include PAR-Q form, emergency contact collection, and equipment orientation'
        },
        arts: {
          context: 'Exhibition installation workflow for a gallery, covering artwork receipt, condition reporting, hanging plans, lighting setup, and catalogue production.',
          notes: 'Include insurance verification, artist liaison steps and opening-night logistics'
        }
      },

      /* --- Safe Context Rewriter --- */
      safeContextRewriter: {
        hospitality: {
          context: 'Rewriting an internal incident report about a customer complaint regarding food quality into a professional response email without revealing staff names or internal processes.',
          notes: 'Remove staff names, internal codes, and any mention of specific suppliers'
        },
        retail: {
          context: 'Adapting an internal product-sourcing memo for a customer enquiry response, removing supplier margins and wholesale pricing details.',
          notes: 'Strip all cost-price data and supplier names before sharing externally'
        },
        professional: {
          context: 'Rewriting internal case notes into a client-facing summary, removing partner discussions, fee-negotiation details, and internal risk assessments.',
          notes: 'Ensure no internal decision-making commentary is visible to the client'
        },
        creative: {
          context: 'Converting internal project-review notes into a client progress update, removing discussions about scope creep and internal cost overruns.',
          notes: 'Focus on deliverables and timeline, remove all internal financial commentary'
        },
        health: {
          context: 'Rewriting a clinical team discussion into a referral letter, ensuring patient-consent boundaries are respected and internal clinical opinions are appropriately framed.',
          notes: 'Remove informal clinical shorthand and ensure privacy-compliant language'
        },
        education: {
          context: 'Adapting internal student progress notes into a parent-facing report, removing staff commentary about behavioural challenges and internal assessment discussions.',
          notes: 'Keep language constructive and remove any staff-only observations'
        },
        construction: {
          context: 'Rewriting an internal defect log into a client-facing progress report, removing subcontractor dispute details and internal cost notes.',
          notes: 'Present defect status as action items without revealing internal negotiations'
        },
        realestate: {
          context: 'Adapting an internal vendor strategy memo into a market-update email for a client, removing commission negotiations and competitive agent commentary.',
          notes: 'Strip all internal strategy language and competitor references'
        },
        technology: {
          context: 'Rewriting an internal post-incident review into a customer notification, removing root-cause blame attribution and infrastructure vulnerability details.',
          notes: 'Focus on impact, resolution and prevention without exposing security details'
        },
        tourism: {
          context: 'Converting an internal safety-incident report into a guest communication, removing staff error details and insurance claim references.',
          notes: 'Acknowledge the incident professionally without admitting liability'
        },
        nonprofit: {
          context: 'Rewriting internal board discussion notes into a donor update, removing financial concerns, staff performance discussions, and strategic disagreements.',
          notes: 'Present a positive, transparent update without exposing governance tensions'
        },
        beauty: {
          context: 'Adapting an internal product-recall notice from a supplier into a client-facing communication, removing supplier blame and wholesale pricing details.',
          notes: 'Focus on client safety and next steps without revealing supplier relationship details'
        },
        fitness: {
          context: 'Rewriting an internal incident report about a member injury into a follow-up communication, removing witness statements and liability discussions.',
          notes: 'Express concern and outline support without admitting fault or sharing internal findings'
        },
        arts: {
          context: 'Adapting internal production budget notes into a sponsor update, removing cost overruns, artist-fee negotiations, and venue-dispute details.',
          notes: 'Present progress positively and focus on audience impact and sponsor visibility'
        }
      },

      /* --- Workflow Canvas --- */
      workflowCanvas: {
        hospitality: {
          context: 'End-to-end workflow for handling a catering enquiry — from initial contact through menu planning, quoting, confirmation, event delivery, and follow-up.',
          notes: 'Include decision points for dietary requirements and deposit collection'
        },
        retail: {
          context: 'Online order fulfilment workflow — from order received through picking, packing, shipping, delivery notification and returns handling.',
          notes: 'Include a decision point for out-of-stock items and customer notification'
        },
        professional: {
          context: 'New client engagement workflow — from initial enquiry through conflict check, proposal, engagement letter, onboarding, and first deliverable.',
          notes: 'Include compliance checkpoints and document-collection steps'
        },
        creative: {
          context: 'Design project workflow — from brief received through research, concept development, client presentation, revisions, final delivery and archiving.',
          notes: 'Include feedback loops and sign-off gates at each stage'
        },
        health: {
          context: 'Patient journey workflow — from initial booking through intake, assessment, treatment plan, ongoing appointments, and discharge or referral.',
          notes: 'Include consent and health-fund verification decision points'
        },
        education: {
          context: 'Student enrolment workflow — from enquiry through eligibility check, enrolment form, payment, induction, and first class attendance.',
          notes: 'Include USI verification and prerequisite checks for RTO courses'
        },
        construction: {
          context: 'Residential renovation workflow — from initial site visit through quoting, contract signing, council approvals, construction phases, and handover.',
          notes: 'Include inspection checkpoints and client sign-off at each stage'
        },
        realestate: {
          context: 'Property sales workflow — from listing appraisal through marketing launch, open homes, offer negotiation, exchange, and settlement.',
          notes: 'Include vendor communication touchpoints and compliance steps'
        },
        technology: {
          context: 'Software development project workflow — from discovery call through requirements gathering, sprint planning, development, testing, deployment and support handover.',
          notes: 'Include client approval gates and UAT sign-off steps'
        },
        tourism: {
          context: 'Tour booking workflow — from customer enquiry through availability check, booking confirmation, pre-trip communications, tour delivery, and post-tour follow-up.',
          notes: 'Include weather contingency decision points and waiver collection'
        },
        nonprofit: {
          context: 'Grant application workflow — from opportunity identification through writing, internal review, submission, acquittal reporting, and donor stewardship.',
          notes: 'Include board-approval steps and compliance checkpoints'
        },
        beauty: {
          context: 'New client journey workflow — from enquiry through consultation, patch test, first appointment, aftercare follow-up, and rebooking.',
          notes: 'Include consent and contraindication check decision points'
        },
        fitness: {
          context: 'New member onboarding workflow — from enquiry through trial session, sign-up, health screening, goal-setting session, program design, and first check-in.',
          notes: 'Include PAR-Q clearance and medical referral decision points'
        },
        arts: {
          context: 'Exhibition planning workflow — from artist call-out through selection, contract, artwork receipt, installation, opening night, exhibition run, and deinstall.',
          notes: 'Include insurance verification, condition reporting and catalogue production steps'
        }
      },

      /* --- Seven Day Action Plan --- */
      sevenDayActionPlan: {
        hospitality: {
          context: 'Setting up AI tools to help with daily cafe operations, starting with email responses and building up to social media content and roster planning.',
          notes: 'Start with quick wins like email templates, then tackle menu descriptions and social posts'
        },
        retail: {
          context: 'Implementing AI across your retail business, from product descriptions through to customer email campaigns and stock management summaries.',
          notes: 'Begin with product descriptions to see immediate results on the online store'
        },
        professional: {
          context: 'Introducing AI into a professional services practice, starting with email drafting and progressing to document summaries and client communications.',
          notes: 'Focus first on time-saving admin tasks before client-facing content'
        },
        creative: {
          context: 'Integrating AI into your creative workflow, from brief analysis and project scoping through to content creation and client communications.',
          notes: 'Start with internal tasks like brief summaries before using AI for client-facing work'
        },
        health: {
          context: 'Rolling out AI tools in a clinical practice, starting with appointment communications and building to patient information materials and admin tasks.',
          notes: 'Prioritise admin efficiency gains before any patient-facing content'
        },
        education: {
          context: 'Adopting AI in your training or tutoring business, from course descriptions through to student communications and marketing content.',
          notes: 'Start with internal content like session plans before external marketing'
        },
        construction: {
          context: 'Bringing AI into your building business, starting with quote responses and safety documents, then tackling project updates and marketing.',
          notes: 'Focus on documentation efficiency before marketing activities'
        },
        realestate: {
          context: 'Implementing AI across your agency, from property descriptions and email templates to market updates and social media content.',
          notes: 'Start with listing descriptions for an immediate impact on marketing quality'
        },
        technology: {
          context: 'Using AI to streamline your tech business operations, from support-ticket responses through to documentation and content marketing.',
          notes: 'Begin with support responses and release notes for the fastest ROI'
        },
        tourism: {
          context: 'Introducing AI to your tourism operation, starting with booking confirmations and tour descriptions, then moving to reviews and seasonal campaigns.',
          notes: 'Start with itinerary descriptions and booking emails for quick wins'
        },
        nonprofit: {
          context: 'Adopting AI for your not-for-profit, from donor communications and grant writing support through to social media and impact reporting.',
          notes: 'Begin with donor thank-you emails and newsletter drafts'
        },
        beauty: {
          context: 'Integrating AI into your salon or spa, starting with appointment messages and treatment descriptions, then building to promotions and social content.',
          notes: 'Start with aftercare messages and treatment descriptions for immediate value'
        },
        fitness: {
          context: 'Rolling out AI in your gym or PT business, from class descriptions and member emails through to challenge campaigns and social content.',
          notes: 'Begin with class descriptions and booking confirmations for quick results'
        },
        arts: {
          context: 'Bringing AI into your arts organisation, from exhibition descriptions and artist communications through to media releases and audience engagement.',
          notes: 'Start with exhibition copy and email responses for immediate impact'
        }
      },

      /* --- Customer Persona Builder --- */
      customerPersona: {
        hospitality: {
          context: 'A 35-year-old professional who lives in Surry Hills and visits your cafe three mornings a week for a flat white and pastry before work. They also book your venue for team lunches.',
          notes: 'Values speed of service on weekdays and atmosphere for group bookings'
        },
        retail: {
          context: 'A 28-year-old gift buyer who shops online and in-store, typically purchasing around birthdays and holidays. Follows your Instagram and responds to sale announcements.',
          notes: 'Price-conscious but willing to spend more on unique or local products'
        },
        professional: {
          context: 'A 45-year-old small business owner in Pyrmont who needs quarterly BAS preparation, annual tax returns, and occasional advice on business structure changes.',
          notes: 'Values clear communication and fixed-fee transparency'
        },
        creative: {
          context: 'A marketing manager at a mid-size Sydney startup who needs a brand refresh, looking for a local agency that understands the tech sector and can deliver within tight timelines.',
          notes: 'Decision-maker who values portfolio quality, responsiveness and strategic thinking'
        },
        health: {
          context: 'A 55-year-old office worker in the CBD experiencing chronic lower back pain, referred by their GP. Has private health insurance and prefers early-morning appointments.',
          notes: 'Needs reassurance about treatment plans and values evidence-based approaches'
        },
        education: {
          context: 'A 17-year-old Year 12 student in the Inner West, preparing for HSC exams in maths and English. Parents are driving the tutoring decision and want visible progress.',
          notes: 'Parents value regular progress updates and clear communication'
        },
        construction: {
          context: 'A couple in their 40s renovating a Federation home in Glebe, with a budget of $150K–$200K for a kitchen and bathroom renovation. They want quality finishes and heritage-sensitive design.',
          notes: 'Values transparency in quoting, regular progress updates and craftsmanship'
        },
        realestate: {
          context: 'A first-home buyer aged 30, currently renting in Marrickville, with pre-approval up to $950K. Looking for a two-bedroom apartment within 10 km of the CBD.',
          notes: 'Anxious about the buying process and values an agent who explains each step clearly'
        },
        technology: {
          context: 'A 40-year-old operations manager at a 50-person company who needs to replace their legacy CRM with a cloud solution, with minimal disruption to the sales team.',
          notes: 'Values reliability, data migration support and responsive technical support'
        },
        tourism: {
          context: 'A family of four visiting Sydney from Melbourne during school holidays, looking for half-day experiences that are suitable for children aged 8 and 12.',
          notes: 'Parents want hassle-free booking, clear safety information and engaging activities for kids'
        },
        nonprofit: {
          context: 'A 60-year-old retiree in the Eastern Suburbs who donates annually and volunteers occasionally. Motivated by local community impact and values transparency in how funds are used.',
          notes: 'Prefers email communication and appreciates personal acknowledgment of contributions'
        },
        beauty: {
          context: 'A 32-year-old professional in Paddington who books regular facials and brow appointments every 4–6 weeks. Interested in results-driven skincare and willing to invest in premium treatments.',
          notes: 'Values expertise, product recommendations and a relaxing salon experience'
        },
        fitness: {
          context: 'A 38-year-old parent in Bondi who wants to get back into shape after having children. Available for early-morning or lunchtime sessions and prefers small-group training over a busy gym floor.',
          notes: 'Needs flexibility with scheduling and a supportive, non-intimidating environment'
        },
        arts: {
          context: 'A 50-year-old art enthusiast in Chippendale who attends gallery openings, subscribes to your newsletter, and occasionally purchases works by emerging artists.',
          notes: 'Values curatorial vision, artist stories and exclusive preview opportunities'
        }
      },

      /* --- Brand Voice Builder --- */
      brandVoice: {
        hospitality: {
          context: 'A neighbourhood cafe in Newtown that is relaxed, community-focused and known for its locally sourced produce and rotating guest chefs.',
          notes: 'Warm, casual tone — like talking to a friend who happens to be a great cook'
        },
        retail: {
          context: 'A curated homewares boutique in Paddington that stocks Australian designers and values sustainability, craftsmanship and thoughtful gifting.',
          notes: 'Refined but not stuffy — knowledgeable, warm and design-savvy'
        },
        professional: {
          context: 'A boutique accounting firm in the CBD that works with startups and creative businesses, offering a modern approach to traditional financial services.',
          notes: 'Professional but approachable — clear, confident and jargon-free'
        },
        creative: {
          context: 'A design studio in Redfern that creates bold brand identities for hospitality and lifestyle businesses, known for colour, energy and strategic thinking.',
          notes: 'Creative, confident and a little playful — shows personality without being unprofessional'
        },
        health: {
          context: 'A physiotherapy clinic in the Inner West that takes an evidence-based, whole-person approach to musculoskeletal health and injury recovery.',
          notes: 'Warm, reassuring and knowledgeable — builds trust without being clinical'
        },
        education: {
          context: 'A tutoring centre in the North Shore that helps high-school students build confidence and achieve their academic goals through personalised support.',
          notes: 'Encouraging, clear and supportive — speaks to both parents and students'
        },
        construction: {
          context: 'A boutique builder in the Inner West specialising in heritage renovations and extensions, known for quality craftsmanship and transparent communication.',
          notes: 'Honest, straightforward and knowledgeable — builds trust through plain language'
        },
        realestate: {
          context: 'A family-owned real estate agency in the Eastern Suburbs with deep local knowledge and a personal, relationship-driven approach to property sales.',
          notes: 'Local, genuine and knowledgeable — not the typical slick sales voice'
        },
        technology: {
          context: 'A Sydney-based web development studio that builds clean, fast websites and apps for SMEs, with a focus on usability and ongoing support.',
          notes: 'Helpful, clear and human — explains tech in everyday language'
        },
        tourism: {
          context: 'A harbour and coastal tour operator in Sydney offering small-group experiences with expert local guides and a focus on sustainability.',
          notes: 'Adventurous, passionate and local — makes people feel excited and welcome'
        },
        nonprofit: {
          context: 'A community organisation in South Sydney that supports at-risk young people through mentoring, education and employment programs.',
          notes: 'Hopeful, authentic and grounded — shows impact without being preachy'
        },
        beauty: {
          context: 'A skin clinic in Double Bay offering advanced facials and cosmetic treatments in a calm, luxurious setting with highly trained therapists.',
          notes: 'Elegant, confident and knowledgeable — feels premium without being cold'
        },
        fitness: {
          context: 'A community-focused gym in Marrickville that offers group classes, personal training and a welcoming vibe for people of all fitness levels.',
          notes: 'Motivating, inclusive and real — not aggressive or body-shaming'
        },
        arts: {
          context: 'A contemporary art gallery in Chippendale that champions emerging Australian artists and hosts exhibitions, talks and community workshops.',
          notes: 'Culturally engaged, inclusive and articulate — accessible without dumbing down'
        }
      },

      /* --- Social Post Generator --- */
      socialPostGenerator: {
        hospitality: {
          context: 'Promoting this week\'s guest chef dinner featuring a five-course degustation with matched local wines, happening Friday evening.',
          notes: 'Create excitement, mention booking link, use food-related language'
        },
        retail: {
          context: 'Announcing a new collection of Australian-made ceramics that just arrived in store, with pieces ranging from $35 to $120.',
          notes: 'Highlight the local-maker angle, mention limited stock, encourage in-store visits'
        },
        professional: {
          context: 'Sharing a practical tip about a common small-business tax mistake, to position the firm as helpful and approachable.',
          notes: 'Keep it simple and valuable — avoid jargon, include a soft call-to-action'
        },
        creative: {
          context: 'Revealing the final brand identity for a recently completed cafe rebrand project, showing before-and-after visuals.',
          notes: 'Celebrate the client collaboration, show the transformation, tag the client'
        },
        health: {
          context: 'Sharing a simple desk-stretch routine for office workers to help with neck and shoulder tension, as an educational post.',
          notes: 'Keep it practical and evidence-based, include a call-to-action for appointments'
        },
        education: {
          context: 'Celebrating a student who achieved a Band 6 in HSC Maths after starting with low confidence, with their permission to share.',
          notes: 'Focus on the student journey and effort, not just the result'
        },
        construction: {
          context: 'Sharing a before-and-after of a completed kitchen renovation in a Newtown terrace, showcasing the transformation and craftsmanship.',
          notes: 'Let the photos do the talking, mention key design choices and build time'
        },
        realestate: {
          context: 'Announcing a just-listed three-bedroom house in Marrickville with a backyard, perfect for families, with open home this Saturday.',
          notes: 'Highlight lifestyle benefits, neighbourhood appeal and open-home details'
        },
        technology: {
          context: 'Announcing a new feature in your project management tool that lets teams automate recurring task assignments.',
          notes: 'Focus on the time-saving benefit, keep it non-technical, include a demo link'
        },
        tourism: {
          context: 'Promoting your new sunset kayak tour on Sydney Harbour launching next month, including photos from the pilot run.',
          notes: 'Capture the magic of the harbour at sunset, mention the small-group experience'
        },
        nonprofit: {
          context: 'Sharing an impact story about a young person in your mentoring program who recently secured their first full-time job.',
          notes: 'Celebrate the individual (with consent), connect it to donor support, inspire further giving'
        },
        beauty: {
          context: 'Introducing a new hydrafacial treatment available this month, with an introductory offer for first-time bookings.',
          notes: 'Explain the benefit simply, mention the offer, use inviting language'
        },
        fitness: {
          context: 'Launching a six-week beginner strength program designed for people who have never lifted weights before.',
          notes: 'Make it welcoming and non-intimidating, emphasise guidance and community'
        },
        arts: {
          context: 'Announcing the opening of a new group exhibition featuring five emerging Sydney-based artists exploring themes of urban identity.',
          notes: 'Create intrigue, mention the opening night event, name the artists'
        }
      },

      /* --- Email Campaign Builder --- */
      emailCampaign: {
        hospitality: {
          context: 'A three-email sequence promoting your restaurant\'s new autumn menu, from teaser to launch to last-chance booking reminder.',
          notes: 'Build anticipation with seasonal storytelling, include booking links'
        },
        retail: {
          context: 'A four-email sequence for your end-of-season clearance sale, targeting existing customers with early access and progressively deeper discounts.',
          notes: 'Create urgency with time-limited offers, segment VIP vs regular customers'
        },
        professional: {
          context: 'A three-email sequence around EOFY, reminding clients about tax preparation, important deadlines, and booking their annual review appointment.',
          notes: 'Be helpful not salesy, include deadline dates, soft call-to-action for appointments'
        },
        creative: {
          context: 'A welcome email sequence for new enquiries — introducing your studio, sharing relevant case studies, and inviting them to book a discovery call.',
          notes: 'Show personality, build credibility through work examples, keep it conversational'
        },
        health: {
          context: 'A re-engagement sequence for patients who haven\'t visited in six months, offering a wellness check and sharing relevant health tips.',
          notes: 'Be warm and non-pushy, focus on their wellbeing rather than filling your books'
        },
        education: {
          context: 'An enrolment-drive sequence targeting prospective students for Term 3, covering course highlights, student success stories, and an early-bird discount.',
          notes: 'Speak to both the student and the parent or decision-maker'
        },
        construction: {
          context: 'A post-project nurture sequence — thank you, request a review, offer a maintenance-check visit, and stay in touch for future projects.',
          notes: 'Build a long-term relationship, ask for referrals naturally'
        },
        realestate: {
          context: 'A seller-prospecting sequence for homeowners in a target suburb — market update, recent sale success story, and invitation for a no-obligation appraisal.',
          notes: 'Lead with local market knowledge, build credibility before the ask'
        },
        technology: {
          context: 'A product onboarding sequence for new users — welcome, quick-start guide, feature highlight, and check-in asking for feedback.',
          notes: 'Keep each email focused on one action, reduce overwhelm'
        },
        tourism: {
          context: 'A pre-trip excitement sequence — booking confirmation, what-to-bring guide, and a day-before reminder with meeting-point details.',
          notes: 'Build excitement while reducing pre-trip anxiety, include practical details'
        },
        nonprofit: {
          context: 'An end-of-financial-year fundraising sequence — impact story, donation appeal, and a final-day reminder with a tax-deductibility message.',
          notes: 'Lead with impact, make the ask clear, emphasise the EOFY deadline'
        },
        beauty: {
          context: 'A rebooking sequence for clients whose last appointment was 6+ weeks ago — personalised treatment reminder, seasonal offer, and a last-chance nudge.',
          notes: 'Be personal and caring, not transactional'
        },
        fitness: {
          context: 'A New Year challenge launch sequence — teaser, program details and sign-up, early-bird pricing deadline, and a final spots-remaining reminder.',
          notes: 'Be motivating and inclusive, focus on the community aspect'
        },
        arts: {
          context: 'An exhibition launch sequence — save the date, artist preview and curatorial statement, and an opening-night RSVP reminder.',
          notes: 'Create anticipation, share the artistic story, make the opening feel exclusive'
        }
      },

      /* --- 30-Day Content Plan --- */
      thirtyDayContentPlan: {
        hospitality: {
          context: 'A 30-day social media content plan for a cafe launching a new brunch menu, covering Instagram, Facebook and Google Business posts.',
          notes: 'Mix food photography, behind-the-scenes, staff features and customer UGC'
        },
        retail: {
          context: 'A 30-day content plan for a boutique heading into the holiday gifting season, across Instagram, email and in-store signage.',
          notes: 'Balance product showcases with gift guides, styling tips and customer stories'
        },
        professional: {
          context: 'A 30-day LinkedIn and email content plan for an accounting firm during EOFY season, positioning the team as helpful and expert.',
          notes: 'Mix practical tips, team introductions, client stories and timely reminders'
        },
        creative: {
          context: 'A 30-day Instagram and LinkedIn plan for a design studio launching its refreshed portfolio website and three new case studies.',
          notes: 'Build up to the launch with teasers, process shots and behind-the-scenes content'
        },
        health: {
          context: 'A 30-day content plan for a physio clinic during Spinal Health Awareness Month, across Instagram, Facebook and email.',
          notes: 'Alternate between educational tips, team features, patient success stories and booking prompts'
        },
        education: {
          context: 'A 30-day content plan for an RTO promoting Term 3 enrolments, across Instagram, Facebook, Google and email.',
          notes: 'Feature student stories, course previews, campus life and open-day promotion'
        },
        construction: {
          context: 'A 30-day Instagram and Facebook plan for a builder showcasing completed projects and building trust with prospective clients.',
          notes: 'Focus on before-and-afters, process videos, client testimonials and trade tips'
        },
        realestate: {
          context: 'A 30-day content plan for a real estate agency during spring selling season, across Instagram, Facebook, email and property portals.',
          notes: 'Mix new listings, suburb spotlights, market updates, team profiles and buyer tips'
        },
        technology: {
          context: 'A 30-day LinkedIn and blog content plan for a SaaS startup launching a new feature, targeting small business owners.',
          notes: 'Build from problem awareness to feature reveal to customer success stories'
        },
        tourism: {
          context: 'A 30-day Instagram and Facebook plan for a tour operator heading into summer school holidays, promoting family-friendly experiences.',
          notes: 'Use guest photos, destination highlights, packing tips and countdown-to-holidays content'
        },
        nonprofit: {
          context: 'A 30-day content plan for a charity leading into a major fundraising campaign, across email, Instagram and Facebook.',
          notes: 'Build from awareness to impact stories to donation appeals, ending with gratitude'
        },
        beauty: {
          context: 'A 30-day Instagram and email plan for a salon launching a new skincare treatment range and running a Mother\'s Day promotion.',
          notes: 'Mix treatment spotlights, skincare tips, team expertise features and gift-voucher promos'
        },
        fitness: {
          context: 'A 30-day content plan for a gym launching a new 8-week transformation challenge, across Instagram, Facebook and email.',
          notes: 'Build hype with teasers, share past participant results, and create FOMO with countdown posts'
        },
        arts: {
          context: 'A 30-day content plan for a gallery opening a major group exhibition, across Instagram, email newsletter and website blog.',
          notes: 'Profile each artist, share studio visits, tease artworks and build to the opening night'
        }
      },

      /* --- Content Repurposer --- */
      contentRepurposer: {
        hospitality: {
          context: 'Repurpose a detailed blog post about your cafe\'s farm-to-table sourcing philosophy into social posts, email content and a Google Business update.',
          notes: 'Pull out key quotes, supplier stories and dish highlights for different formats'
        },
        retail: {
          context: 'Turn a long-form buying guide about choosing the perfect gift for different occasions into Instagram carousels, email tips and in-store signage.',
          notes: 'Break into occasion-specific chunks: birthdays, housewarmings, thank-yous'
        },
        professional: {
          context: 'Repurpose a webinar recording about small-business tax tips into a blog post, LinkedIn carousel, email newsletter and short video clips.',
          notes: 'Extract the three to five most actionable tips for each format'
        },
        creative: {
          context: 'Turn a detailed case study about a restaurant rebrand project into a portfolio page, Instagram carousel, LinkedIn post and proposal attachment.',
          notes: 'Adapt the level of detail and tone for each audience and platform'
        },
        health: {
          context: 'Repurpose a patient-education guide about managing lower back pain into social posts, email tips, a waiting-room poster and a short video script.',
          notes: 'Simplify clinical language for social content while maintaining accuracy'
        },
        education: {
          context: 'Turn a comprehensive course overview document into an Instagram carousel, email highlight, website landing page and an info-session presentation.',
          notes: 'Adjust depth and call-to-action for each channel'
        },
        construction: {
          context: 'Repurpose a completed project case study with photos into a website portfolio entry, Instagram carousel, Google Business post and a client testimonial graphic.',
          notes: 'Lead with the visual transformation and client quote'
        },
        realestate: {
          context: 'Turn a quarterly market report into a blog post, email update, Instagram carousel with key stats, and a short video script for social media.',
          notes: 'Make the data visual and the commentary accessible for homeowners'
        },
        technology: {
          context: 'Repurpose a product release blog post into a LinkedIn announcement, email blast, in-app notification copy and a short demo video script.',
          notes: 'Adjust technical depth: more detail in the blog, more benefit-focused in email'
        },
        tourism: {
          context: 'Turn a guest\'s detailed five-star review and photos into a testimonial post, story highlight, email social-proof section and a website quote block.',
          notes: 'Get guest permission, then extract the most compelling phrases and images'
        },
        nonprofit: {
          context: 'Repurpose your annual impact report into a donor email series, social media highlights, an infographic and a short video script.',
          notes: 'Focus on the most compelling stats and stories for each format'
        },
        beauty: {
          context: 'Turn a detailed treatment guide about hydrafacials into an Instagram carousel, email feature, website FAQ section and a consultation-room handout.',
          notes: 'Adjust the level of technical detail for informed clients vs newcomers'
        },
        fitness: {
          context: 'Repurpose a member transformation story (with permission) into an Instagram post, email feature, website testimonial and a short video interview.',
          notes: 'Celebrate the journey and effort, not just the physical results'
        },
        arts: {
          context: 'Turn curatorial notes for a group exhibition into a media release, email invitation, Instagram artist-spotlight series and a gallery handout.',
          notes: 'Adapt the artistic language for general audiences on social vs art-literate readers'
        }
      },

      /* --- Publishing Checklist --- */
      publishingChecklist: {
        hospitality: {
          context: 'Pre-publish checklist for a new seasonal menu announcement across your website, social media, email newsletter and Google Business listing.',
          notes: 'Include photo quality checks, pricing accuracy, allergen info and booking links'
        },
        retail: {
          context: 'Pre-launch checklist for a new product collection drop across your online store, Instagram, email and in-store displays.',
          notes: 'Cover product photography, descriptions, pricing, inventory sync and promotional timing'
        },
        professional: {
          context: 'Pre-publish checklist for a thought-leadership article on your website and LinkedIn, covering compliance, accuracy and brand consistency.',
          notes: 'Include regulatory disclaimer checks, partner approval and SEO elements'
        },
        creative: {
          context: 'Pre-publish checklist for a new case study on your portfolio website, social media and email newsletter.',
          notes: 'Cover client approval, image rights, brand consistency and link testing'
        },
        health: {
          context: 'Pre-publish checklist for a patient-education blog post being shared on your website, social media and email.',
          notes: 'Include AHPRA advertising compliance check, accuracy review and consent verification'
        },
        education: {
          context: 'Pre-publish checklist for a new course listing on your website, social media and email to prospective students.',
          notes: 'Cover ASQA compliance, pricing accuracy, prerequisite information and enrolment links'
        },
        construction: {
          context: 'Pre-publish checklist for a completed project showcase on your website, Google Business profile and social media.',
          notes: 'Include client permission, photo quality, project details accuracy and licence-number display'
        },
        realestate: {
          context: 'Pre-publish checklist for a new property listing across portals, your website, social media and email alerts.',
          notes: 'Cover photo quality, price-guide compliance, vendor approval and open-home details'
        },
        technology: {
          context: 'Pre-publish checklist for a product feature announcement on your blog, email, social media and in-app messaging.',
          notes: 'Include screenshot accuracy, link testing, customer-segment targeting and changelog update'
        },
        tourism: {
          context: 'Pre-publish checklist for a new tour package listing on your website, OTA platforms, social media and Google Business.',
          notes: 'Cover pricing accuracy, availability calendar, safety information and booking-link testing'
        },
        nonprofit: {
          context: 'Pre-publish checklist for a fundraising campaign launch across your website, email, social media and donation platform.',
          notes: 'Include donation-link testing, impact-claim accuracy, board approval and DGR messaging'
        },
        beauty: {
          context: 'Pre-publish checklist for a new treatment announcement on your website, booking platform, social media and email.',
          notes: 'Cover treatment-claim compliance, pricing accuracy, booking-link testing and aftercare info'
        },
        fitness: {
          context: 'Pre-publish checklist for a new class or program launch on your website, booking app, social media and email.',
          notes: 'Include timetable accuracy, trainer bios, health-disclaimer review and sign-up link testing'
        },
        arts: {
          context: 'Pre-publish checklist for an exhibition opening announcement across your website, email, social media and media outlets.',
          notes: 'Cover artist credits, image rights, event details accuracy, RSVP links and media-kit preparation'
        }
      }
    }
  };

})();
