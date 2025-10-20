const medicines = [
  {
    id: "m1",
    title: "Diazepam 10mg",
    image: "/images/Diazepam10mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>Diazepam 10mg - 30 tablets per box</b> <br/>
Effective benzodiazepine for anxiety and sleep problems
Diazepam 10mg available online without a prescription
Fast onset of action within 15-30 minutes
Long-term anxiety and tension relief
Easily buy Diazepam 10mg with iDEAL & Bancontact`,
  },
  {
    id: "m2",
    title: "Zolpidem 10mg",
    image: "/images/Zolpidem10mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>A box of Zolpidem 10mg contains 30 tablets</b> <br/>
Effective treatment for insomnia
Zolpidem available online without a prescription
Fast effect within 30 minutes
Duration of action: 6 to 8 hours
Easily order and buy benzodiazepines with iDEAL & Bancontact`,
  },
  {
    id: "m3",
    title: "Temazepam 20mg",
    image: "/images/Temazepam20mg.webp",
    price: 100,
    discountPercent: 20,
    discountedPrice: 100 * (1 - 0.2),
    description: `<b>A box of Zolpidem 10mg contains 30 tablets</b> <br/>
Effective treatment for insomnia
Zolpidem available online without a prescription
Fast effect within 30 minutes
Duration of action: 6 to 8 hours
Easily order and buy benzodiazepines with iDEAL & Bancontact`,
  },
  {
    id: "m4",
    title: "Lorazepam 2.5mg",
    image: "/images/Lorazepam2mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>1 Box of Lorazepam 2.5 mg contains 30 tablets</b> <br/>
Treatment of anxiety disorders and stress
Lorazepam available online without a prescription
Helps with premedication for dental procedures
Easily order and buy benzodiazepines with iDEAL & Bancontact
Works quickly, usually within 20-30 minutes`,
  },
  {
    id: "m5",
    title: "Alprazolam 1mg",
    image: "/images/Alprazolam1mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>1 Box of Alprazolam 1mg contains 30 tablets</b> <br/>
Effective in reducing anxiety and panic attacks
Alprazolam available online without a prescription
Works quickly within half an hour to an hour
Easily order benzos for fast delivery
Buy safely with iDEAL & Bancontact`,
  },
  {
    id: "m6",
    title: "Bromazepam 6mg",
    image: "/images/Bromazepam6mg.webp",
    price: 70,
    discountPercent: 29,
    discountedPrice: 70 * (1 - 0.29),
    description: `<b>1 Box of Bromazepam 6mg contains 20</b> <br/>
<li>
<ul>Bromazepam 6mg - 1 box of 20 tablets</ul>
<ul>Suitable for the short-term treatment of acute anxiety complaints
</ul>
<ul>Order online without a doctor's prescription</ul>
<ul>Order easily and securely via iDEAL or Bancontact</ul>
<ul>Reliable solution for temporary anxiety symptoms</ul>
</li>`,
  },
  {
    id: "m7",
    title: "Rivotril Clonazepam 2mg",
    image: "/images/Clonazepam2mg.webp",
    price: 75,
    discountPercent: 33,
    discountedPrice: 75 * (1 - 0.33),
    description: `<b>1 Box of Rivotril Clonazepam 2mg contains 30 tablets</b> <br/>
Works against panic attacks, restlessness, general anxiety
Clonazepam available online without a prescription
Has a relatively long half-life
Easily order benzodiazepines with iDEAL & Bancontact
Originally made by Galenika`,
  },
  {
    id: "m8",
    title: "Pregabalin 300mg Capsules",
    image: "/images/Pregabalin300mg.webp",
    price: 95,
    discountPercent: 16,
    discountedPrice: 95 * (1 - 0.16),
    description: `<b>1 Box of Pregabalin 300 mg contains 30 capsules</b> <br/>
Treatment for neuropathic pain
Pregabalin available online without a prescription
Treatment of generalized anxiety disorders
Buy online easily with iDEAL & Bancontact
Side effects: drowsiness, dizziness, dry mouth`,
  },
  {
    id: "m9",
    title: "Tramadol 200mg Retard Tablets",
    image: "/images/Tramadol200mg.webp",
    price: 95,
    discountPercent: 16,
    discountedPrice: 95 * (1 - 0.16),
    description: `<b>1 Box of Tramadol 200 mg contains 30 tablets</b> <br />
Used to relieve severe pain
Tramadol available online without a prescription
Falls under opioids, very strong painkillers
Buy online easily with iDEAL & Bancontact
Long-acting (extended-release) tablet`,
  },
  {
    id: "m10",
    title: "Ritalin 10mg",
    image: "/images/Ritalin10mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>1 Box of Ritalin 10mg contains 30 tablets</b> <br />
Increases concentration and treats ADHD
Ritalin available online without a prescription
Works within 15 minutes and lasts for 4 hours
Buy online easily with iDEAL & Bancontact
For increased concentration and focus
`,
  },
  {
    id: "m11",
    title: "Oxazepam 50mg",
    image: "/images/Oxazepam50mg.webp",
    price: 95,
    discountPercent: 16,
    discountedPrice: 95 * (1 - 0.16),
    description: `<b>Buy Oxazepam without prescription, 30 tablets Oxazepam 50mg</b> <br />
Effective benzodiazepine for anxiety and sleep problems
Easily order benzodiazepines with iDEAL & Bancontact
Fast acting in case of stress and tension
Discreet delivery within 24 hours
Oxazepam available online without a prescription
`,
  },
  {
    id: "m12",
    title: "Zopiclone 7.5mg",
    image: "/images/Zopiclon7,5mg2.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>Buy zopiclone without prescription, 30 tablets zopiclone 10mg</b> <br />
Effective sleeping aid for problems with falling asleep and staying asleep
Easily order benzodiazepines with iDEAL & Bancontact
Works quickly and effectively against insomnia
Discreet delivery within 24 hours
Zopiclone available online without a prescription
`,
  },
  {
    id: "m13",
    title: "Dormicum 15mg tablets (Midazolam)",
    image: "/images/Midazolam15mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>Order Dormicum 15mg online without a prescription - 30 tablets</b> <br />
Effective sleeping pill with midazolam
Easily order benzodiazepines with iDEAL & Bancontact
Fast acting for insomnia
Discreet delivery within 24 hours
Dormicum available online without a prescription
`,
  },
  {
    id: "m14",
    title: "Quetiapine 100mg tablets",
    image: "/images/Quetiapine100mg.webp",
    price: 90,
    discountPercent: 22,
    discountedPrice: 90 * (1 - 0.22),
    description: `<b>Order Quetiapine 100mg online without a prescription - 30 tablets</b> <br />
Treatment of schizophrenia and bipolar disorder
Buy online easily with iDEAL & Bancontact
Effective in acute manic and depressive episodes
Discreet delivery within 24 hours
Quetiapine available online without a prescription
`,
  },
  {
    id: "m15",
    title: "Oxazepam 10mg tablets",
    image: "/images/Oxazepam10mg.webp",
    price: 95,
    discountPercent: 21,
    discountedPrice: 95 * (1 - 0.21),
    description: `<b>Order OXAZEPAM 10mg online without a prescription - 30 tablets</b> <br />
Effective against anxiety and tension
Easily order benzodiazepines with iDEAL & Bancontact
Reduces symptoms of alcohol withdrawal
Discreet delivery within 24 hours
Oxazepam available online without a prescription
`,
  },
  {
    id: "m16",
    title: "Quetiapine 200mg tablets",
    image: "/images/Oxazepam10mg.webp",
    price: 90,
    discountPercent: 17,
    discountedPrice: 90 * (1 - 0.17),
    description: `<b>Shipped medications cannot be returned unless they are defective. Consult your doctor or pharmacist if you experience any side effects.</b> <br />
Quetiapine 200mg available online without a prescription
Buy online easily with iDEAL & Bancontact
Effective for psychosis and bipolar disorder
Discreet delivery within 24 hours
Fast delivery via benzo order service
`,
  },
  {
    id: "m17",
    title: "Tentin 5mg",
    image: "/images/Tentin5mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `Tentin 5mg contains dexamphetamine for the effective treatment of ADHD and narcolepsy. Proven to improve concentration and alertness. Discreet delivery guaranteed.
`,
  },
  {
    id: "m18",
    title: "Tramadol 100mg",
    image: "/images/Tramadol100mg.webp",
    price: 90,
    discountPercent: 17,
    discountedPrice: 90 * (1 - 0.17),
    description: `<b>Tramadol available online without a prescription - Effective painkiller</b> <br />
Tramadol is a centrally acting, synthetic analgesic. It has a dual effect: it inhibits the reuptake of neurotransmitters such as serotonin and norepinephrine, and it binds to opioid receptors, although with a lower affinity than traditional opioids. Buy it easily online with iDEAL & Bancontact via our benzobestellen service.
`,
  },
  {
    id: "m19",
    title: "Mirtazapine 15mg",
    image: "/images/Mirtazapine15mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `Mirtazapine 30mg Tablets can help adults suffering from depressive disorders.
`,
  },
  {
    id: "m20",
    title: "Mirtazapine 30mg",
    image: "/images/Mirtazapine30mg.webp",
    price: 90,
    discountPercent: 17,
    discountedPrice: 90 * (1 - 0.17),
    description: `<b>Mirtazapine 30mg available online without prescription - Effective for depression</b> <br />
Mirtazapine 30mg tablets can help adults suffering from depressive disorders. Buy them easily online with iDEAL and Bancontact via our benzobestellen service for fast and discreet delivery.
`,
  },
  {
    id: "m21",
    title: "Ozempic 1mg",
    image: "/images/Ozempic1mg.webp",
    price: 245,
    discountPercent: 18,
    discountedPrice: 245 * (1 - 0.18),
    description: `<b>Ozempic® (semaglutide) available online without a prescription</b> <br />
Ozempic® (semaglutide) is an advanced medication for the treatment of type 2 diabetes. It belongs to the latest generation of GLP-1 receptor agonists, specifically developed for optimal blood sugar control. Buy it easily online with iDEAL and Bancontact via our benzobestellen service.
`,
  },
  {
    id: "m22",
    title: "Tramadol 50mg",
    image: "/images/Tramadol50mg.webp",
    price: 85,
    discountPercent: 18,
    discountedPrice: 85 * (1 - 0.18),
    description: `<b>Order Tramadol 50mg online without a prescription - 30 tablets</b> <br />
Effective pain reliever for moderate to severe pain
Buy online easily with iDEAL & Bancontact
Centrally acting, synthetic analgesic
Discreet delivery within 24 hours
Tramadol available online without a prescription
`,
  },
];

export default medicines;
