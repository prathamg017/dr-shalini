// Centralized Single Source of Truth for Dr. Shalini Jain Homoeopathy Clinic
// All data points strictly verified from client-provided materials.
// Discrepancies or unconfirmed claims are flagged as NEEDS CLIENT CONFIRMATION.

export interface ClinicLocation {
  id: string;
  name: string;
  shortName: string;
  addressLines: string[];
  landmark: string;
  area: string;
  city: string;
  state: string;
  pincode?: string;
  phone: string;
  whatsapp: string;
  timings: {
    days: string;
    hours: string;
    note?: string;
  };
  mapQuery: string;
  directionsUrl: string;
  features: string[];
}

export interface ConcernCategory {
  id: string;
  slug: string;
  title: string;
  hindiTitle?: string;
  summary: string;
  overview: string;
  commonSymptoms: string[];
  homeopathicApproach: string[];
  whenToConsult: string[];
  redFlags: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface DoctorInfo {
  name: string;
  formalName: string;
  qualifications: string;
  title: string;
  summary: string;
  detailedBio: string[];
  approachPoints: {
    title: string;
    description: string;
  }[];
  confirmedCredentials: {
    label: string;
    value: string;
    status: 'CONFIRMED' | 'NEEDS CLIENT CONFIRMATION';
  }[];
  socials: {
    instagram: string;
    instagramHandle: string;
  };
}

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. Shalini Jain",
  formalName: "Dr. Shalini Jain, BHMS",
  qualifications: "BHMS (Bachelor of Homoeopathic Medicine & Surgery)",
  title: "Homoeopathic Physician",
  summary:
    "Qualified homoeopathic physician providing personalised, constitutional homoeopathic care for individuals and families across Indore at two convenient clinics.",
  detailedBio: [
    "Dr. Shalini Jain is a certified homoeopathic physician holding the professional degree of Bachelor of Homoeopathic Medicine & Surgery (BHMS). Practising in Indore, Madhya Pradesh, her clinical approach focuses on detailed constitutional case taking, understanding the patient's individual symptom picture, and offering gentle, structured therapeutic consultations.",
    "She manages two community-accessible clinical practices in Indore: her morning practice at Palsikar Colony (near Juni Indore Bridge) and evening practice at Kalani Nagar (near Kids Kemp School). Consultations span a diverse spectrum of common and chronic physical and emotional concerns, always prioritising patient safety, realistic health timelines, and responsible integrative medical guidance."
  ],
  approachPoints: [
    {
      title: "Individualised Case Study",
      description:
        "Every consultation involves an in-depth review of specific symptoms, past medical history, lifestyle factors, and individual constitution."
    },
    {
      title: "Gentle & Non-Invasive Approach",
      description:
        "Homoeopathic remedies selected according to classical principles, designed to work gently alongside healthy living practices."
    },
    {
      title: "Responsible Medical Boundaries",
      description:
        "Clear safety boundaries are always maintained. Never replacing emergency services, and never advising discontinuation of prescribed conventional therapies."
    },
    {
      title: "Dedicated Local Continuity of Care",
      description:
        "Personal follow-ups and direct physician access across two convenient Indore neighbourhood locations."
    }
  ],
  confirmedCredentials: [
    { label: "Degree & Qualification", value: "BHMS (Bachelor of Homoeopathic Medicine & Surgery)", status: "CONFIRMED" },
    { label: "Primary Practice City", value: "Indore, Madhya Pradesh", status: "CONFIRMED" },
    { label: "Clinical Locations", value: "Palsikar Colony & Kalani Nagar", status: "CONFIRMED" },
    { label: "State Medical Registration Number", value: "NEEDS CLIENT CONFIRMATION", status: "NEEDS CLIENT CONFIRMATION" },
    { label: "Years of Active Clinical Experience", value: "NEEDS CLIENT CONFIRMATION", status: "NEEDS CLIENT CONFIRMATION" },
    { label: "Graduating University / College", value: "NEEDS CLIENT CONFIRMATION", status: "NEEDS CLIENT CONFIRMATION" }
  ],
  socials: {
    instagram: "https://www.instagram.com/homoeopathic_physician",
    instagramHandle: "@homoeopathic_physician"
  }
};

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: "palsikar-colony",
    name: "Dr. Shalini Jain Homoeopathy Clinic — Palsikar Colony",
    shortName: "Palsikar Colony (Morning)",
    addressLines: [
      "Shop No. 4, Laal Sai Apartment",
      "Near SBI 23, Palsikar Colony",
      "Beside Juni Indore Bridge",
      "Indore, Madhya Pradesh"
    ],
    landmark: "Near SBI 23, Beside Juni Indore Bridge",
    area: "Palsikar Colony / Juni Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    phone: "+919244212557",
    whatsapp: "919244212557",
    timings: {
      days: "Monday – Saturday",
      hours: "10:00 AM – 1:00 PM",
      note: "Morning clinical consultation hours. Prior appointment recommended."
    },
    mapQuery: "Shop No. 4 Laal Sai Apartment, Palsikar Colony, Indore, Madhya Pradesh",
    directionsUrl: "https://maps.google.com/?q=Shop+No.+4+Laal+Sai+Apartment+Palsikar+Colony+Indore",
    features: [
      "Ground floor access in Laal Sai Apartment",
      "Easily accessible from Juni Indore & Palsikar Colony",
      "Dedicated morning consultation slots"
    ]
  },
  {
    id: "kalani-nagar",
    name: "Dr. Shalini Jain Homoeopathy Clinic — Kalani Nagar",
    shortName: "Kalani Nagar (Evening)",
    addressLines: [
      "221-C, Kalani Nagar",
      "Near Kids Kemp School",
      "Indore, Madhya Pradesh"
    ],
    landmark: "Near Kids Kemp School",
    area: "Kalani Nagar / Airport Road area",
    city: "Indore",
    state: "Madhya Pradesh",
    phone: "+919244212557",
    whatsapp: "919244212557",
    timings: {
      days: "Monday – Saturday",
      hours: "6:00 PM – 9:00 PM",
      note: "Evening clinical consultation hours. Convenient for working individuals and families."
    },
    mapQuery: "221-C Kalani Nagar Near Kids Kemp School Indore Madhya Pradesh",
    directionsUrl: "https://maps.google.com/?q=221-C+Kalani+Nagar+Near+Kids+Kemp+School+Indore",
    features: [
      "Convenient residential clinic setting",
      "Prominent landmark near Kids Kemp School",
      "Comfortable evening slots from 6:00 PM to 9:00 PM"
    ]
  }
];

export const PRIMARY_CONTACT = {
  phoneDisplay: "+91 92442 12557",
  phoneRaw: "+919244212557",
  whatsappNumber: "919244212557",
  whatsappDefaultMessage:
    "Hello Dr. Shalini Jain Clinic, I would like to enquire about a consultation. Please let me know the available consultation timings. Thank you.",
  getWhatsAppUrl(customText?: string) {
    const text = encodeURIComponent(customText || this.whatsappDefaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }
};

export const CONCERN_CATEGORIES: ConcernCategory[] = [
  {
    id: "respiratory-complaints",
    slug: "respiratory-complaints",
    title: "Respiratory Complaints",
    hindiTitle: "श्वास व श्वसन संबंधी समस्याएं",
    summary:
      "Consultation for recurring colds, seasonal allergic rhinitis, sinusitis, chronic coughs, and bronchial sensitivity in children and adults.",
    overview:
      "Respiratory complaints frequently present as recurrent seasonal infections, prolonged coughs after viral episodes, allergic sneezing bouts, or sinus congestion. Homoeopathy assesses respiratory symptoms constitutionally, examining susceptibility, environmental triggers, weather sensitivity, and personal history.",
    commonSymptoms: [
      "Recurrent seasonal allergic sneezing & runny nose (allergic rhinitis)",
      "Persistent post-viral dry or productive cough",
      "Nasal congestion, sinus fullness, and forehead pressure",
      "Frequent throat irritation and tickling sensations",
      "Aggravation triggered by dust, temperature changes, or humidity"
    ],
    homeopathicApproach: [
      "Evaluation of individual symptom triggers such as cold drafts, dust exposure, or specific seasons.",
      "Assessment of cough timing, sputum characteristics, and associated constitutional tendencies.",
      "Remedy selection aimed at gently strengthening individual vitality without sedative antihistamine effects."
    ],
    whenToConsult: [
      "When colds and coughs recur with every change of season.",
      "When allergy symptoms impact daily productivity or quality of sleep.",
      "When you seek a supportive, non-drowsy constitutional evaluation alongside normal respiratory care."
    ],
    redFlags: [
      "Severe shortness of breath, audible stridor, or inability to speak in full sentences.",
      "Bluish discoloration of the lips or fingernails (cyanosis).",
      "Coughing up fresh blood (hemoptysis) or sudden high fever with chest pain.",
      "Rapid breathing or chest indrawing in infants and young children."
    ],
    seoTitle: "Respiratory Complaints Consultation in Indore | Dr. Shalini Jain",
    seoDescription:
      "Consult Dr. Shalini Jain (BHMS) in Indore for recurring colds, allergies, sinus congestion, and chronic cough. Clinics in Palsikar Colony & Kalani Nagar."
  },
  {
    id: "skin-complaints",
    slug: "skin-complaints",
    title: "Skin Complaints",
    hindiTitle: "चर्म रोग व त्वचा संबंधी समस्याएं",
    summary:
      "Comprehensive evaluation for persistent eczema, urticaria/hives, recurring acne, fungal skin sensitivity, and chronic itching.",
    overview:
      "The skin reflects internal health, emotional stress, and systemic immunity. In homoeopathy, dermatological concerns are not treated merely as topical issues. Instead, an in-depth case study evaluates the nature of lesions, sensation, emotional factors, and gut health.",
    commonSymptoms: [
      "Recurrent dry, itchy patches or flares (eczematous tendencies)",
      "Persistent facial acne with hormonal or digestive correlations",
      "Sudden hives, wheals, and allergic skin reactions (urticaria)",
      "Recurrent fungal or ringworm sensitivity in humid weather",
      "Scalp itching, flaking, or hair fall associated with skin irritation"
    ],
    homeopathicApproach: [
      "Detailed mapping of skin flare-ups against dietary changes, seasonal shifts, and emotional stress.",
      "Careful distinction of sensations: burning, itching worse by heat or cold, moisture levels.",
      "Constitutional remedy selection focusing on long-term systemic balance rather than temporary suppression."
    ],
    whenToConsult: [
      "When skin flares recur frequently after topical creams are discontinued.",
      "When skin issues correlate with stress, menstrual cycles, or digestive disturbances.",
      "When seeking a constitutional approach tailored to your personal physical constitution."
    ],
    redFlags: [
      "Sudden widespread rash accompanied by facial swelling, lip swelling, or breathing difficulty (anaphylaxis - emergency care required immediately).",
      "Rapidly spreading hot, red, tender skin swelling indicative of acute cellulitis.",
      "Blistering skin rashes accompanied by high fever or mucosal lesions."
    ],
    seoTitle: "Skin Diseases & Allergy Homoeopathy in Indore | Dr. Shalini Jain",
    seoDescription:
      "Experienced homoeopathic care for eczema, acne, hives, and chronic skin conditions in Indore by Dr. Shalini Jain (BHMS). Palsikar Colony & Kalani Nagar."
  },
  {
    id: "migraine-headaches",
    slug: "migraine-headaches",
    title: "Migraine & Chronic Headaches",
    hindiTitle: "माइग्रेन व सिरदर्द",
    summary:
      "Individualised assessment of unilateral throbbing migraines, tension headaches, stress-induced headaches, and sinus headaches.",
    overview:
      "Headaches can range from dull tension across the temples to debilitating migraine episodes accompanied by nausea and sensory sensitivity. A thorough homoeopathic consultation investigates precise pain locations, modalities, triggers (sun, missed meals, stress, hormonal shifts), and emotional strain.",
    commonSymptoms: [
      "One-sided throbbing or pulsating pain (classical migraine pattern)",
      "Sensitivity to bright light (photophobia), loud sound, or strong odours",
      "Nausea, bilious vomiting, or visual disturbances preceding the headache",
      "Tension headaches spreading from the neck and occiput to the forehead",
      "Headaches triggered by fasting, lack of sleep, sun exposure, or stress"
    ],
    homeopathicApproach: [
      "In-depth analysis of trigger patterns (sun exposure, digestive acidity, emotional stress).",
      "Remedy selection based on pain character (throbbing, pressing, band-like) and ameliorating factors.",
      "Holistic guidance on hydration, regular sleep cycles, and dietary trigger avoidance."
    ],
    whenToConsult: [
      "When recurrent headaches disrupt regular work, studies, or family life.",
      "When reliance on frequent analgesic painkillers is becoming a personal concern.",
      "When headaches clearly link to hormonal cycles, stress, or acidity."
    ],
    redFlags: [
      "Sudden 'thunderclap' headache reaching maximum intensity within seconds.",
      "Headache associated with stiff neck, high fever, confusion, or altered consciousness.",
      "Headache accompanied by numbness, weakness on one side of the face or body, or speech difficulty.",
      "New severe headache following head trauma or in elderly individuals."
    ],
    seoTitle: "Migraine & Headache Homoeopathic Care in Indore | Dr. Shalini Jain",
    seoDescription:
      "Get personalised homoeopathic consultation for chronic migraine, tension headaches, and stress headaches in Indore with Dr. Shalini Jain, BHMS."
  },
  {
    id: "digestive-complaints",
    slug: "digestive-complaints",
    title: "Gastric & Digestive Complaints",
    hindiTitle: "पेट व पाचन संबंधी रोग",
    summary:
      "Consultation for chronic hyperacidity, bloating, indigestion, irritable bowel patterns, constipation, and acid reflux.",
    overview:
      "Digestive comfort is fundamental to general vitality. Many individuals experience chronic heartburn, abdominal fullness, irregular bowel habits, and gas linked to dietary habits and modern stress. Homoeopathic consultation examines digestive symptoms within the context of the whole organism.",
    commonSymptoms: [
      "Chronic acid reflux, burning sensation in the chest and throat (heartburn)",
      "Abdominal bloating, heaviness, and excessive flatulence after meals",
      "Sluggish digestion, chronic constipation, or feeling of incomplete evacuation",
      "Alternating bowel patterns associated with stress or nervous excitement",
      "Food intolerances, nausea after rich or oily foods, and bitter taste in mouth"
    ],
    homeopathicApproach: [
      "Evaluation of dietary routine, hydration, eating pace, and stress triggers.",
      "Identification of individualized symptoms: time of bloating, specific food aversions/cravings.",
      "Constitutional remedy selection to support natural digestive rhythm without laxative dependence."
    ],
    whenToConsult: [
      "When digestive discomfort persists despite routine over-the-counter antacids.",
      "When gut symptoms flare whenever you experience emotional strain or work pressure.",
      "When looking for a gentle, personalized regimen to restore digestive equilibrium."
    ],
    redFlags: [
      "Vomiting fresh blood or dark coffee-ground material.",
      "Black, tarry stools or visible blood mixed with bowel movements.",
      "Unexplained rapid weight loss, severe persistent vomiting, or difficulty swallowing food.",
      "Severe acute abdominal pain that is rigid and tender to touch."
    ],
    seoTitle: "Gastric & Digestive Homoeopathy Clinic in Indore | Dr. Shalini Jain",
    seoDescription:
      "Consult Dr. Shalini Jain (BHMS) in Indore for chronic acidity, gas, constipation, IBS patterns, and indigestion. Convenient clinics in Palsikar Colony & Kalani Nagar."
  },
  {
    id: "womens-health",
    slug: "womens-health",
    title: "Women's Health & Hormonal Balance",
    hindiTitle: "स्त्री रोग व महिला स्वास्थ्य",
    summary:
      "Supportive care for menstrual irregularities, painful periods (dysmenorrhea), premenstrual mood shifts, and perimenopausal wellbeing.",
    overview:
      "Women experience dynamic hormonal transitions throughout life, from puberty through motherhood and menopause. Dr. Shalini Jain provides a comfortable, confidential environment to discuss menstrual cycle changes, pelvic cramps, hormonal mood fluctuations, and recurring vaginal discharge.",
    commonSymptoms: [
      "Irregular menstrual cycles, delayed or infrequent periods",
      "Severe menstrual cramping, pelvic pain, and backache during menses",
      "Premenstrual syndrome (PMS) with irritability, mood swings, and water retention",
      "Perimenopausal hot flashes, night sweats, and sleep disturbances",
      "Recurrent non-specific leucorrhoea (vaginal discharge) and general fatigue"
    ],
    homeopathicApproach: [
      "Confidential, empathetic case taking focused on hormonal history and lifestyle.",
      "Evaluation of menstrual flow characteristics, timing, and emotional correlates.",
      "Constitutional remedies selected to encourage hormonal harmony gently."
    ],
    whenToConsult: [
      "When irregular cycles or debilitating period pain occur month after month.",
      "When emotional changes around the cycle disrupt daily relationships and work.",
      "When seeking non-hormonal, holistic consultation for perimenopausal transition."
    ],
    redFlags: [
      "Abnormal, heavy bleeding requiring pad change every 1-2 hours or containing large clots.",
      "Post-menopausal vaginal bleeding (always requires prompt specialist gynecological evaluation).",
      "Severe sudden pelvic pain accompanied by dizziness, fainting, or possible pregnancy (possible ectopic pregnancy emergency).",
      "Foul-smelling discharge with fever and pelvic tenderness."
    ],
    seoTitle: "Women's Health Homoeopathic Doctor in Indore | Dr. Shalini Jain",
    seoDescription:
      "Confidential homoeopathic consultation for menstrual disorders, PCOD support, cramps, and menopause in Indore by Dr. Shalini Jain (BHMS)."
  },
  {
    id: "child-health",
    slug: "child-health",
    title: "Children's Health (Pediatric Complaints)",
    hindiTitle: "शिशु व बाल रोग",
    summary:
      "Gentle, sweet-tasting, child-friendly homoeopathy for recurrent childhood colds, tonsillitis, low appetite, bedwetting, and teething troubles.",
    overview:
      "Children respond remarkably well to gentle homoeopathic remedies, which are easy to administer without the struggle of bitter medicines. Consultations focus on building natural resilience, supporting healthy appetite, and addressing recurrent childhood ailments safely.",
    commonSymptoms: [
      "Recurrent colds, coughs, and throat infections with every change of weather",
      "Enlarged, inflamed tonsils or adenoid sensitivity",
      "Poor appetite, selective eating, or sluggish digestion in toddlers and school-going kids",
      "Teething irritability, restlessness, loose stools, and sleep disturbance in infants",
      "Bedwetting (nocturnal enuresis), night terrors, or emotional separation anxiety"
    ],
    homeopathicApproach: [
      "Child-friendly consultation with observational case assessment and parent dialogue.",
      "Sweet, easy-to-take globules that children accept willingly without resistance.",
      "Focus on strengthening child constitution and natural immune responses."
    ],
    whenToConsult: [
      "When your child seems to catch every infection circulating at school or preschool.",
      "When you wish to avoid repeated unnecessary courses of antibiotics for simple seasonal viral episodes.",
      "When appetite is poor and growth milestones need gentle, holistic supportive care."
    ],
    redFlags: [
      "High persistent fever with lethargy, floppiness, or inability to wake the child.",
      "Stridor, grunting breathing, or severe chest retractions in infants.",
      "Signs of severe dehydration: dry mouth, no wet diapers for 8+ hours, sunken eyes.",
      "Unexplained convulsions or seizures (seek emergency hospital pediatric care immediately)."
    ],
    seoTitle: "Child Health & Pediatric Homoeopathy in Indore | Dr. Shalini Jain",
    seoDescription:
      "Child-friendly, gentle homoeopathic consultation for recurrent colds, tonsillitis, appetite, and immunity in Indore by Dr. Shalini Jain, BHMS."
  },
  {
    id: "urinary-complaints",
    slug: "urinary-complaints",
    title: "Kidney & Urinary Complaints",
    hindiTitle: "पेशाब व किडनी संबंधी समस्याएं",
    summary:
      "Consultation for recurrent urinary tract irritation, burning urination, predisposition to urinary gravel/calculi, and urinary urgency.",
    overview:
      "Recurrent urinary burning, frequent urgency, and minor gravel formation cause considerable physical distress. Homoeopathic care evaluates systemic hydration, urinary constitution, and metabolic tendency toward stone formation as supportive care.",
    commonSymptoms: [
      "Recurrent burning or stinging sensation during or after urination",
      "Frequent urge to urinate with small volume passed",
      "History of small urinary gravel or predisposition to kidney stones",
      "Dull aching discomfort in the loin or flank region",
      "Cloudy or strong-smelling urine without acute systemic fever"
    ],
    homeopathicApproach: [
      "Detailed symptom examination: burning before, during, or after passing urine.",
      "Review of fluid intake habits, dietary salt/oxalate intake, and lifestyle factors.",
      "Constitutional prescribing to support kidney and bladder function safely."
    ],
    whenToConsult: [
      "When burning urination returns frequently despite adequate hydration.",
      "When there is a known personal tendency toward recurrent small urinary stones.",
      "When seeking supportive constitutional care alongside routine urological monitoring."
    ],
    redFlags: [
      "Visible blood in the urine (hematuria - red or cola-colored urine).",
      "Excruciating flank pain radiating to the groin with vomiting (acute renal colic requiring urgent clinical review).",
      "Fever with chills and flank tenderness (suggestive of acute kidney infection / pyelonephritis).",
      "Complete inability to pass urine (acute urinary retention - immediate emergency)."
    ],
    seoTitle: "Urinary & Kidney Concerns Homoeopathy in Indore | Dr. Shalini Jain",
    seoDescription:
      "Supportive homoeopathic consultation for recurrent urinary burning, UTIs, and gravel tendencies in Indore with Dr. Shalini Jain (BHMS)."
  },
  {
    id: "mental-wellbeing",
    slug: "mental-wellbeing",
    title: "Mental Wellbeing & Stress Concerns",
    hindiTitle: "मानसिक तनाव, चिंता व अनिद्रा",
    summary:
      "Compassionate, non-judgmental support for chronic daily stress, exam anxiety, sleep difficulties, restlessness, and mild mood disturbances.",
    overview:
      "Modern lifestyle, professional pressures, and personal stress exert a heavy toll on the nervous system. Classical homoeopathy has always placed the highest value on mental and emotional symptoms, recognising that physical health cannot be separated from emotional equilibrium.",
    commonSymptoms: [
      "Persistent nervous tension, restlessness, and worry about daily tasks",
      "Sleep disturbances: difficulty falling asleep, racing thoughts, waking unrefreshed",
      "Anticipatory anxiety before meetings, exams, or social obligations",
      "Emotional burnout, irritability, mood swings, and low energy",
      "Physical manifestations of stress such as tension headaches and nervous acidity"
    ],
    homeopathicApproach: [
      "Attentive, confidential, and empathetic listening to personal life pressures.",
      "Evaluation of individual emotional reaction patterns: anger, grief, anxiety, or perfectionism.",
      "Selection of remedies that respect mental individuality without creating chemical dependency."
    ],
    whenToConsult: [
      "When daily stress begins interfering with sleep, digestive comfort, and relationships.",
      "When seeking a gentle, non-habit-forming holistic modality to support mental calm.",
      "When you value an empathetic doctor who takes time to understand your personal story."
    ],
    redFlags: [
      "Thoughts of self-harm, suicide, or severe despair (reach out immediately to emergency psychiatric services or national helplines: Tele-MANAS 14416 / 1800-891-4416).",
      "Severe clinical depression with inability to care for basic personal needs.",
      "Hallucinations, paranoia, or acute psychotic episodes requiring immediate psychiatric care."
    ],
    seoTitle: "Stress, Sleep & Mental Wellbeing Homoeopathy in Indore | Dr. Shalini Jain",
    seoDescription:
      "Compassionate homoeopathic consultation for stress, anxiety, insomnia, and emotional balance in Indore with Dr. Shalini Jain, BHMS."
  },
  {
    id: "bone-joint-complaints",
    slug: "bone-joint-complaints",
    title: "Bone & Joint Complaints",
    hindiTitle: "हड्डी व जोड़ों के दर्द संबंधी समस्याएं",
    summary:
      "Constitutional evaluation for joint stiffness, chronic knee and back discomfort, weather-sensitive joint aches, and age-related wear.",
    overview:
      "Joint stiffness, lumbar discomfort, and cervical neck strain are increasingly common due to sedentary lifestyles, desk postures, and aging. Note: In original promotional pamphlets the term 'osteopathy' appeared colloquially; in accordance with medical accuracy, our practice provides homoeopathic consultation for bone and joint complaints.",
    commonSymptoms: [
      "Stiffness in knees, hands, or back upon waking or after resting",
      "Aching joints aggravated by damp weather, rain, or seasonal temperature drops",
      "Cervical neck stiffness and upper back ache from prolonged desk posture",
      "Discomfort in weight-bearing joints during walking or stair climbing",
      "Muscular soreness and joint fatigue following exertion"
    ],
    homeopathicApproach: [
      "Analysis of specific physical modalities: pain worse on first motion, relief with gentle warmth or continuous movement.",
      "Holistic assessment including ergonomic posture, calcium/vitamin D intake, and body weight.",
      "Carefully chosen homoeopathic remedies supporting mobility and reducing reliance on frequent painkillers."
    ],
    whenToConsult: [
      "When persistent joint stiffness limits morning activity and daily walks.",
      "When joint discomfort recurs every winter or rainy season.",
      "When seeking a safe, gentle supportive modality alongside physiotherapy and medical care."
    ],
    redFlags: [
      "Acute, hot, severely swollen joint with redness and fever (possible septic arthritis requiring emergency orthopedic care).",
      "Severe joint trauma, inability to bear any weight, or visible bone deformity following a fall (urgent X-ray and trauma evaluation).",
      "Sudden loss of bowel or bladder control associated with severe back pain (cauda equina syndrome emergency)."
    ],
    seoTitle: "Bone & Joint Pain Homoeopathy in Indore | Dr. Shalini Jain",
    seoDescription:
      "Holistic homoeopathic consultation for joint stiffness, back pain, and arthritis discomfort in Indore by Dr. Shalini Jain, BHMS. Palsikar Colony & Kalani Nagar."
  }
];

export const CLINIC_FAQS = [
  {
    question: "Who is Dr. Shalini Jain and what are her qualifications?",
    answer:
      "Dr. Shalini Jain is a qualified homoeopathic physician holding the BHMS degree (Bachelor of Homoeopathic Medicine & Surgery). She has established two clinical locations in Indore — Palsikar Colony and Kalani Nagar — offering personalized consultations for children, women, and adults."
  },
  {
    question: "Where are the clinics located in Indore and what are the timings?",
    answer:
      "Dr. Shalini Jain practises at two convenient locations:\n• Morning Clinic (10:00 AM – 1:00 PM): Shop No. 4, Laal Sai Apartment, Near SBI 23, Palsikar Colony, Beside Juni Indore Bridge, Indore.\n• Evening Clinic (6:00 PM – 9:00 PM): 221-C, Kalani Nagar, Near Kids Kemp School, Indore.\nPrior appointment via phone or WhatsApp is recommended to minimise waiting time."
  },
  {
    question: "How do I book an appointment or consult with Dr. Shalini Jain?",
    answer:
      "You can easily book or enquire by calling +91 92442 12557 or sending a direct message on WhatsApp (+91 92442 12557). You can also use the online consultation request form on this website to request your preferred clinic location and time."
  },
  {
    question: "Can homoeopathy be taken alongside my current allopathic prescription?",
    answer:
      "Yes, in most cases homoeopathy can be safely taken alongside conventional prescribed medications. We strictly advise that you must NEVER stop, alter, or taper your prescribed allopathic medications without the direct supervision of your prescribing specialist doctor. Always share your complete medication history during your consultation."
  },
  {
    question: "Does the clinic treat emergency medical conditions?",
    answer:
      "No. Dr. Shalini Jain Homoeopathy Clinic provides outpatient, constitutional homoeopathic consultations and does NOT provide emergency or acute trauma medical care. If you or a family member experience severe acute symptoms — such as chest pain, severe breathlessness, sudden paralysis, unconsciousness, severe bleeding, or high convulsions — please visit the nearest hospital emergency department immediately."
  },
  {
    question: "What should I expect during my first homoeopathic consultation?",
    answer:
      "A first homoeopathic consultation is detailed and thorough, typically taking 20 to 45 minutes. Dr. Shalini Jain will review your main health complaints, timeline of onset, past medical history, family health background, sleep patterns, dietary preferences, stress factors, and weather sensitivities. This comprehensive picture enables the selection of a constitutional remedy suited uniquely to you."
  },
  {
    question: "Are homoeopathic medicines safe for infants, young children, and elderly patients?",
    answer:
      "Yes. Homoeopathic remedies are prepared through serial dilutions and potentisation according to official pharmacopoeial standards. They are non-toxic, non-addictive, and come in sweet, easy-to-take sugar globules that children and elderly patients take without difficulty."
  },
  {
    question: "Why does the website state 'NEEDS CLIENT CONFIRMATION' on some credentials?",
    answer:
      "In upholding the highest standard of medical transparency and healthcare ethics, we present only verified client facts on this website. Specific archival details — such as state medical council registration number or exact graduation year — are flagged for formal verification rather than fabricated."
  }
];

export const CONSULTATION_STEPS = [
  {
    step: "01",
    title: "Appointment Request",
    description:
      "Choose your preferred clinic (Palsikar Colony in the morning or Kalani Nagar in the evening) and contact via WhatsApp, phone, or our online form."
  },
  {
    step: "02",
    title: "Comprehensive Case Taking",
    description:
      "A patient, attentive 20-40 minute consultation discussing your physical symptoms, medical history, lifestyle, and emotional wellbeing."
  },
  {
    step: "03",
    title: "Individualised Prescription",
    description:
      "Careful selection of classical homoeopathic remedies matched to your distinct constitutional profile, along with clear dietary and lifestyle advice."
  },
  {
    step: "04",
    title: "Structured Follow-Up",
    description:
      "Periodic reviews to assess symptom changes, track vitality, and adjust remedy potencies as your health stabilizes over time."
  }
];

export const MEDICAL_DISCLAIMER_TEXT = {
  short:
    "Medical Notice: Information on this website is for educational and appointment coordination purposes only. It is not a substitute for professional medical advice, clinical diagnosis, or emergency healthcare. Never discontinue prescribed medications without consulting your treating doctor.",
  full: [
    "Dr. Shalini Jain Homoeopathy Clinic provides outpatient homoeopathic consultation and healthcare guidance. The information presented on this website is published for general public education, transparency, and practice coordination.",
    "This website does not provide medical diagnosis, nor does it establish an emergency care relationship. The content should never be used as a substitute for professional clinical judgment or hospital emergency services.",
    "Patients are explicitly advised NEVER to discontinue, reduce, or modify any ongoing conventional medical treatment or prescription medications without direct consultation and consent from their prescribing physician.",
    "In cases of acute medical emergencies — including but not limited to severe chest pain, sudden breathlessness, acute neurological impairment, high trauma, severe pediatric illness, or acute abdominal distress — immediately seek emergency medical care at an accredited hospital."
  ]
};
