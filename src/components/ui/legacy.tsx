'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, Mail, MapPin, ExternalLink, ArrowRight, Menu, X } from 'lucide-react';

const supervisorProfiles: Record<string, string> = {
  'r. n. sharma':        'https://portfolios.nith.ac.in/index.php?/nith/dr-ram-naresh-sharma-',
  'ram naresh sharma':   'https://portfolios.nith.ac.in/index.php?/nith/dr-ram-naresh-sharma-',
  'r.n. sharma':         'https://portfolios.nith.ac.in/index.php?/nith/dr-ram-naresh-sharma-',
  'r. k. jarial':        'https://portfolios.nith.ac.in/index.php?/nith/dr-r-k-jarial84',
  'r.k. jarial':         'https://portfolios.nith.ac.in/index.php?/nith/dr-r-k-jarial84',
  'raj kumar jarial':    'https://portfolios.nith.ac.in/index.php?/nith/dr-r-k-jarial84',
  'ashwani kumar chandel':'https://portfolios.nith.ac.in/index.php?/nith/dr-ashwani-kumar-chandel-',
  'ashwani chandel':     'https://portfolios.nith.ac.in/index.php?/nith/dr-ashwani-kumar-chandel-',
  'a. k. chandel':       'https://portfolios.nith.ac.in/index.php?/nith/dr-ashwani-kumar-chandel-',
  'ashwani kumar':       'https://portfolios.nith.ac.in/index.php?/nith/dr-ashwani-kumar-chandel-',
  'sushil chauhan':      'https://portfolios.nith.ac.in/index.php?/nith/dr-sushil-chauhan219',
  'veena sharma':        'https://portfolios.nith.ac.in/index.php?/nith/dr-veena-sharma-',
  'o. p. rahi':          'https://portfolios.nith.ac.in/index.php?/nith/dr-o-p-rahi972',
  'o.p. rahi':           'https://portfolios.nith.ac.in/index.php?/nith/dr-o-p-rahi972',
  'amit kaul':           'https://portfolios.nith.ac.in/index.php?/nith/dr-amit-kaul-',
  'rajesh kumar':        'https://portfolios.nith.ac.in/index.php?/nith/er-rajesh-kumar-',
  'bharti koul':         'https://portfolios.nith.ac.in/index.php?/nith/ms-bharti-kaul144',
  'bharti bakshi':       'https://portfolios.nith.ac.in/index.php?/nith/ms-bharti-kaul144',
  'ram niwash mahia':    'https://portfolios.nith.ac.in/index.php?/nith/dr-ram-niwash-mahia',
  'chandrasekaran':      'http://portfolio.nith.ac.in/faculty/chandru',
  'supriya jaiswal':     'https://portfolios.nith.ac.in/index.php?/nith/dr-supriya-jaiswal',
  'katam nishanth':      'https://portfolios.nith.ac.in/index.php?/nith/dr-katam-nishanth',
  'h.m. suryawanshi':    'https://vnit.ac.in/engineering/electrical/dr-h-m-suryawanshi/',
};

const getSupervisorUrl = (name: string): string | null => {
  const lower = name.toLowerCase().trim();
  // Check longer keys first to avoid partial-match shadowing
  const sorted = Object.entries(supervisorProfiles).sort((a, b) => b[0].length - a[0].length);
  for (const [key, url] of sorted) {
    if (lower.includes(key)) return url;
  }
  return null;
};

const LegacyPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBatch, setActiveBatch] = useState(0);

  const renderSupervisor = (supervisor: string) => {
    const parts = supervisor.split(/\s*&\s*/);
    return (
      <>
        {parts.map((part, i) => {
          const trimmed = part.trim();
          const url = getSupervisorUrl(trimmed);
          return (
            <span key={i}>
              {i > 0 && <span className="text-neutral-300"> &amp; </span>}
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-700 transition-colors">{trimmed}</a>
              ) : (
                <span>{trimmed}</span>
              )}
            </span>
          );
        })}
      </>
    );
  };

  const dissertationBatches = [
    {
      period: "2007–2009",
      students: [
        { srNo: 1, name: "Ravi Nakka", rollNo: "07M202", title: "Sweep frequency response analysis of power transformer winding movement using pspice", supervisor: "Prof. R. N. Sharma" },
        { srNo: 2, name: "Harsh", rollNo: "07M204", title: "Modern Transformer SFRA Applications", supervisor: "Dr. R. K. Jarial" },
        { srNo: 3, name: "Gaurav Srivastava", rollNo: "07M212", title: "Comparative study & analysis of DGA methods for transformer oil", supervisor: "Dr. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 4, name: "Anuradha Tomar", rollNo: "07M217", title: "Design of Earthing System for substation", supervisor: "Dr. R. N. Sharma & Dr. Veena Sharma" },
      ],
    },
    {
      period: "2009–2011",
      students: [
        { srNo: 1, name: "Digamber Singh", rollNo: "09M207", title: "The effect of grid connected photovoltaic power plans on electricity market", supervisor: "Dr. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 2, name: "Kriti Vaid", rollNo: "09M210", title: "Simulation of power quality problems in deregulated power industry", supervisor: "Dr. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 3, name: "Rajnish Kumar Kaushal", rollNo: "09M213", title: "Transmission expansion planning deregulated power sector", supervisor: "Dr. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 4, name: "Amit Kumar", rollNo: "09M263", title: "Ageing characteristic of porcelain insulator", supervisor: "Dr. R. K. Jarial & Dr. O. P. Rahi" },
        { srNo: 5, name: "Virender K. Sharma", rollNo: "09M251", title: "Failure Analysis of power Transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 6, name: "Jivitesh Rattan", rollNo: "09M252", title: "Polarization & Depolarization Current Measurement for Assessing the Condition of Oil Paper Insulation System", supervisor: "Dr. R. N. Sharma" },
        { srNo: 7, name: "Vinay Kumar", rollNo: "09M253", title: "Failure Analysis of Distribution Transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 8, name: "Disha Vaidya", rollNo: "09M254", title: "Electrical Health Assessment of power Transformer Oil using Ultra Violet Visible Spectrophotometer", supervisor: "Dr. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 9, name: "Surinder Singh", rollNo: "09M255", title: "Condition Assessment of Power Transformers using Sweep Frequency Response Analysis", supervisor: "Dr. Y. R. Sood" },
        { srNo: 10, name: "Deven Vatsal", rollNo: "09M256", title: "Electrical Health Monitoring of an Electrical Apparatus by Insulation Analyzer", supervisor: "Dr. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 11, name: "Abdul Azeem", rollNo: "09M258", title: "Condition Assessment of In-Service Power Transformer", supervisor: "Dr. R. N. Sharma" },
        { srNo: 12, name: "Navneet Thakur", rollNo: "09M260", title: "Transformer diagnosis using Ultraviolet Spectrophotometer", supervisor: "Dr. O. P. Rahi" },
        { srNo: 13, name: "Rakesh Kumar", rollNo: "09M262", title: "Dissolved Gas Analysis of Transformer", supervisor: "Dr. R. N. Sharma" },
      ],
    },
    {
      period: "2010–2012",
      students: [
        { srNo: 1, name: "Abhimanyu Singh Rajawat", rollNo: "B-10M251", title: "—", supervisor: "—" },
        { srNo: 2, name: "Suryakant", rollNo: "B-10M252", title: "Diagnosis of variable induction motor speed drive", supervisor: "Dr. R. K. Jarial" },
        { srNo: 3, name: "Navin Chandra Joshi", rollNo: "B-10M253", title: "Simulation of distribution transformer with internal incipient faults", supervisor: "Prof. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 4, name: "Kapil Gandhi", rollNo: "B-10M254", title: "Experimental investigation of accelerated stress on transformer insulation using FTIR spectroscopy", supervisor: "Prof. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 5, name: "Mrinal Ranjan", rollNo: "B-10M255", title: "Multi-objective scheduling of a power system", supervisor: "Prof. A. K. Chandel" },
        { srNo: 6, name: "Sanjay Agrawal", rollNo: "B-10M256", title: "Intelligent system for condition assessment of transformer", supervisor: "Prof. A. K. Chandel" },
        { srNo: 7, name: "Raj Kumar Patel", rollNo: "B-10M257", title: "Condition monitoring of rerating electrical machines using vibration signal", supervisor: "Prof. A. K. Chandel" },
        { srNo: 8, name: "Montosh Kumar", rollNo: "B-10M258", title: "Electrical field analysis of EHV underground cables using numerical method", supervisor: "Prof. R. N. Sharma" },
        { srNo: 9, name: "Mohan Rao Ungarala", rollNo: "B-10M259", title: "Expert System for transformer diagnostics", supervisor: "Dr. R. K. Jarial" },
        { srNo: 10, name: "Rakesh Thapliyal", rollNo: "B-10M260", title: "Design and temperature rise analysis of cascaded H. Bridge solid state transformer", supervisor: "Prof. Y. R. Sood" },
        { srNo: 11, name: "Tarkeshwar", rollNo: "B-10M261", title: "To investigate EMI/EMC phenomena in electrical and electronic gadgets", supervisor: "Prof. Y. R. Sood" },
        { srNo: 12, name: "Hasmat", rollNo: "B-10M262", title: "Application of artificial intelligence for incipient fault diagnosis and condition assessment of power transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 13, name: "Satyabrata Sahoo", rollNo: "B-10M263", title: "Transformer diagnostic under dissolved gas analysis using support vector machine", supervisor: "Prof. R. N. Sharma" },
        { srNo: 14, name: "Kiran Kumar Kandregula", rollNo: "B-10M264", title: "Condition monitoring of induction motors and reliability estimation an industrial case", supervisor: "Dr. R. K. Jarial & Dr. Rajeev K Sharma" },
        { srNo: 15, name: "Sunandan Kumar", rollNo: "B-10M265", title: "Rotor faults diagnosis of induction motor using current signature analysis", supervisor: "Dr. R. K. Jarial" },
        { srNo: 16, name: "Chilaka Ranga", rollNo: "B-10M266", title: "An investigation of novel approach for fault diagnosis in power electronic converters: The case of the sub synchronous cascade drive", supervisor: "Dr. R. K. Jarial" },
      ],
    },
    {
      period: "2011–2013",
      students: [
        { srNo: 1, name: "Amit Kumar", rollNo: "B-11M251", title: "—", supervisor: "—" },
        { srNo: 2, name: "Dileep Krishna Mathi", rollNo: "B-11M252", title: "—", supervisor: "—" },
        { srNo: 3, name: "Mithun Mondal", rollNo: "B-11M253", title: "Design and Performance of Earthing MAT using EDSA Software tool", supervisor: "Dr. R. K. Jarial" },
        { srNo: 4, name: "Lokesh Pant", rollNo: "B-11M254", title: "—", supervisor: "—" },
        { srNo: 5, name: "Baya Reddy Lomada", rollNo: "B-11M255", title: "—", supervisor: "—" },
        { srNo: 6, name: "Pankaj Shukla", rollNo: "B-11M256", title: "—", supervisor: "—" },
        { srNo: 7, name: "Ram Satya Prakash Bikram", rollNo: "B-11M257", title: "Life assessment of power transformer using fuzzy logic", supervisor: "Prof. Ashwani Kumar Chandel" },
        { srNo: 8, name: "Gurmeet Singh", rollNo: "B-11M258", title: "Condition monitoring of PLC controlled induction motor drive", supervisor: "Dr. R. K. Jarial & Dr. Anshul Agrawal" },
        { srNo: 9, name: "Richa Srivastava", rollNo: "B-11M259", title: "—", supervisor: "—" },
        { srNo: 10, name: "Aman Kumar Bangotra", rollNo: "B-11M260", title: "—", supervisor: "—" },
        { srNo: 11, name: "Suresh Kumar Dogra", rollNo: "B-11M261", title: "Monitoring of peripheral temperature of electrical apparatus using infra-red thermal imaging device (Hot-Shot)", supervisor: "Dr. R. K. Jarial & Dr. Y. R. Sood" },
        { srNo: 12, name: "Sonu Kumar", rollNo: "B-11M262", title: "—", supervisor: "—" },
        { srNo: 13, name: "Amod Kumar", rollNo: "B-11M263", title: "Condition monitoring of paper insulation using furanic analysis of insulating oil", supervisor: "Prof. Ashwani Kumar Chandel" },
        { srNo: 14, name: "Pritam Kumar", rollNo: "B-11M264", title: "—", supervisor: "—" },
      ],
    },
    {
      period: "2012–2014",
      students: [
        { srNo: 1, name: "Dipti Bhatt", rollNo: "B-12M201", title: "—", supervisor: "—" },
        { srNo: 2, name: "Harmendra Singh", rollNo: "B-12M202", title: "—", supervisor: "—" },
        { srNo: 3, name: "Khushbu Thakur", rollNo: "B-12M203", title: "DGA As a Diagnostic Tool", supervisor: "Dr. Ram Naresh Sharma" },
        { srNo: 4, name: "M. Raghuram", rollNo: "B-12M204", title: "Modulation and protection techniques in matrix converter topology for multi converter operation", supervisor: "Dr. R. K. Jarial & Prof. Y. R. Sood" },
        { srNo: 5, name: "Nandaraja H Shadlageri", rollNo: "B-12M205", title: "—", supervisor: "—" },
        { srNo: 6, name: "Priyesh Kumar Pandey", rollNo: "B-12M206", title: "Formulation of health index and end of life assessment of power transformer", supervisor: "Dr. R. K. Jarial" },
      ],
    },
    {
      period: "2013–2015",
      students: [
        { srNo: 1, name: "Rahul Srivastava", rollNo: "13M251", title: "Fuzzy logic application of SFRA of power transformer", supervisor: "Prof. Y. R. Sood" },
        { srNo: 2, name: "Amita Singh", rollNo: "13M252", title: "DGA of power transformer using K-means and support vector", supervisor: "Prof. R. N. Sharma & Dr. Veena Sharma" },
        { srNo: 3, name: "Madan Lal Chowdary", rollNo: "13M253", title: "Modeling of partial discharge activity in solid dielectric material", supervisor: "Dr. R. K. Jarial" },
        { srNo: 4, name: "Abhishek Singh", rollNo: "13M254", title: "Condition Assessment of OIP Type Power Transformer Bushings by Latest Dielectric Response Technique", supervisor: "Dr. R. K. Jarial" },
        { srNo: 5, name: "Ruchika Bansal", rollNo: "13M255", title: "Transformer fault diagnosis using fusion techniques based on DGA", supervisor: "Prof. R. N. Sharma & Dr. Veena Sharma" },
        { srNo: 6, name: "Anchal Wadhwa", rollNo: "13M256", title: "Health assessment of power transformer using fuzzy logic", supervisor: "Prof. Y. R. Sood" },
        { srNo: 7, name: "Jagnandan Negi", rollNo: "13M257", title: "Assessment of oil paper insulation of aged power transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 8, name: "Alok Kumar", rollNo: "13M258", title: "Mathematical Modelling of Winding Dislocation of Transformer by Sweep Frequency Response Analyses", supervisor: "Dr. R. K. Jarial" },
        { srNo: 9, name: "Shrikant Singh", rollNo: "13M259", title: "Residual Life Assessment of Power Transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 10, name: "Ambuj Kumar", rollNo: "13M260", title: "Fault Prediction and Classification in Transformer through SFRA", supervisor: "Dr. Zakir Husain" },
        { srNo: 11, name: "Satyajeet Anand", rollNo: "13M261", title: "Condition monitoring of oil filled transformer using high performance liquid chromatography", supervisor: "Prof. Ashwani Kumar" },
        { srNo: 12, name: "Priti Pundir", rollNo: "13M262", title: "Condition Monitoring of Power Transformer with Modern Technique", supervisor: "Prof. Y. R. Sood" },
        { srNo: 13, name: "Yogendra Pratap Singh", rollNo: "13M263", title: "Condition monitoring of power transformer using fuzzy logic", supervisor: "Prof. Ashwani Kumar" },
        { srNo: 14, name: "Saurabh Dixit", rollNo: "13M264", title: "Asset management of power transformer based on condition monitoring and standard diagnostic", supervisor: "Dr. Rajesh Kumar" },
        { srNo: 15, name: "Sunil Kumar Singh", rollNo: "13M265", title: "Dielectric diagnostic of oil paper insulation of power transformer", supervisor: "Dr. Zakir Husain" },
      ],
    },
    {
      period: "2014–2016",
      students: [
        { srNo: 1, name: "Sanat Marandi", rollNo: "14M251", title: "—", supervisor: "—" },
        { srNo: 2, name: "Santanu Kumar Seth", rollNo: "14M252", title: "Analysis of electrical health of Power Transformer bushing and winding using insulation analyzer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 3, name: "Sanjay Kumar Agasti", rollNo: "14M253", title: "Analysis and reduction of inrush current in transformer", supervisor: "Prof. R. N. Sharma" },
        { srNo: 4, name: "Katuru Subhrahmanyam", rollNo: "14M254", title: "Exploration and feasibility of vegetable oil for Electrical operators", supervisor: "Dr. R. K. Jarial" },
        { srNo: 5, name: "Pavan Kumar Kandregula", rollNo: "14M255", title: "Modeling of partial discharge detection and calibration circuits", supervisor: "Dr. R. K. Jarial" },
        { srNo: 6, name: "Kuldeep Kumar Bansal", rollNo: "14M256", title: "Ageing analysis and diagnostic of P. T insulation with inhibitors", supervisor: "Prof. A. K. Chandel" },
        { srNo: 7, name: "Nitish Bhardwaj", rollNo: "14M257", title: "Investigation of seasonal influence on grounding grid performance and its optimal design to utilize its influence", supervisor: "Dr. O. P. Rahi" },
        { srNo: 8, name: "Ajit Kumar", rollNo: "14M258", title: "Mathematical modelling of moisture equilibrium in mineral and vegetable oil paper insulation for oil filled pot", supervisor: "Dr. Zakir Hussain" },
        { srNo: 9, name: "Nitika Ghosh", rollNo: "14M259", title: "Fuzzy Logic based analysis of dissolved content in transformer oil", supervisor: "Prof. R. N. Sharma" },
        { srNo: 10, name: "Nimish Bhatt", rollNo: "14M260", title: "Differential protection of transformer using AI", supervisor: "Dr. O. P. Rahi" },
        { srNo: 11, name: "Natla Sudheer Reddy", rollNo: "14M261", title: "Thermal evaluation of rotating machine insulation paper", supervisor: "Dr. R. K. Jarial" },
        { srNo: 12, name: "Gaurav Upadhyay", rollNo: "14M262", title: "Investigation of forces using electromagnetic analysis of triangular wound core transformer", supervisor: "Dr. R. K. Jarial" },
      ],
    },
    {
      period: "2015–2017",
      students: [
        { srNo: 1, name: "Anurag Kumar Burman", rollNo: "15M251", title: "Effective interpretation of transformer SFRA signature using multi-resolution decomposition techniques", supervisor: "Dr. R. K. Jarial" },
        { srNo: 2, name: "Veer Singh Meena", rollNo: "15M252", title: "Performance analysis of an induction motor drive by direct torque control method using MATLAB simulation", supervisor: "Dr. R. K. Jarial" },
        { srNo: 3, name: "Awin Gupta", rollNo: "15M253", title: "Comparative study of different techniques employed in fault diagnosis of transformer using DGA", supervisor: "Prof. Y. R. Sood & Naveen Kumar Sharma" },
        { srNo: 4, name: "Manoj Kumar", rollNo: "15M254", title: "Performance Evaluation of High Temperature solid dielectrics of power transformer with a Mix of mineral and silicon oils", supervisor: "Prof. A. K. Chandel" },
        { srNo: 5, name: "Ajay Singh Negi", rollNo: "15M255", title: "Estimation of flux level for optimal operation and reduced aging of variable speed matrix converter fed induction motor drive", supervisor: "Dr. R. K. Jarial" },
        { srNo: 6, name: "Rachna Panwar", rollNo: "15M256", title: "End life estimation of power transformer using risk based approach", supervisor: "Dr. R. K. Jarial" },
        { srNo: 7, name: "Alok Richhariya", rollNo: "15M257", title: "Condition assessment of rotating machine using fuzzy logic based approach", supervisor: "Dr. R. K. Jarial" },
        { srNo: 8, name: "Kavish Jain", rollNo: "15M258", title: "An analytical hierarchy process based approach for effective maintenance prioritization of power transformers", supervisor: "Prof. Y. R. Sood & Dr. Manisha Sharma" },
        { srNo: 9, name: "Ashish Kumar Mishra", rollNo: "15M259", title: "Furfural analysis for assessing degradation of accelerated thermally stressed alternative solid dielectric of power transformers", supervisor: "Prof. A. K. Chandel" },
        { srNo: 10, name: "Anjali Kumari", rollNo: "15M260", title: "Evaluation of health index and fault analysis of transformers using simplified fuzzy logic techniques", supervisor: "Prof. Ashwani Kumar" },
      ],
    },
    {
      period: "2016–2018",
      students: [
        { srNo: 1, name: "Ankit Chouhan", rollNo: "16M251", title: "Comparative Evaluation of Nomex-910 & TUK Insulating paper thermally aged in Soya Based Natural Oil", supervisor: "Dr. R. K. Jarial & Dr. Zakir Husain" },
        { srNo: 2, name: "Neera Yadav", rollNo: "16M252", title: "Performance analysis of NOMEX W40 insulating paper Fe3O4 based nanofluid in comparison with mineral oil", supervisor: "Dr. R. K. Jarial & Dr. Chandrasekaran S" },
        { srNo: 3, name: "Ankit Kumar Gautam", rollNo: "16M253", title: "Wind turbine control for load frequency requirement using pitch angle variation", supervisor: "Dr. O. P. Rahi" },
        { srNo: 4, name: "Ravish Kumar", rollNo: "16M254", title: "Reactive power pricing and its impact in restructured power system", supervisor: "Dr. O. P. Rahi" },
        { srNo: 5, name: "Sujit Kangsabanik", rollNo: "16M255", title: "Condition Monitoring of Transformer Bushing Using Thermographic tools at different loading conditions", supervisor: "Dr. Zakir Husain & Dr. R. K. Jarial" },
        { srNo: 6, name: "Afreen Sheikh", rollNo: "16M256", title: "Development of a methodology for DGA of power", supervisor: "Prof. R. N. Sharma" },
        { srNo: 7, name: "Deepak Kumar", rollNo: "16M257", title: "Study and design of controller for small hydro power plant", supervisor: "Dr. O. P. Rahi" },
        { srNo: 8, name: "Arun Chantola", rollNo: "16M258", title: "Evaluation of health index of power transformer using fuzzy logic approach", supervisor: "Dr. Manisha Sharma" },
        { srNo: 9, name: "Ompal Singh", rollNo: "16M259", title: "—", supervisor: "—" },
        { srNo: 10, name: "Abhishek Saini", rollNo: "16M260", title: "Transformer interterm fault diagnosis by sweep frequency response analysis", supervisor: "Dr. Manisha Sharma" },
        { srNo: 11, name: "Susheel Kumar", rollNo: "16M261", title: "Incipient fault diagnosis of oil filled transformer using artificial intelligence", supervisor: "Dr. Zakir Husain" },
        { srNo: 12, name: "MD Sabir Hassan", rollNo: "16M262", title: "Solar photovoltaic modelling for extraction of maximum power using AI based techniques", supervisor: "Dr. R. K. Jarial & Dr. Chandrasekaran S" },
        { srNo: 13, name: "Kingshuk Chatterjee", rollNo: "16M263", title: "A novel prediction certainty based graphical dissolved gas analysis techniques for oil filled power transformer", supervisor: "Dr. R. K. Jarial & Dr. V. K. Jadoun" },
        { srNo: 14, name: "Ujjawal Prakash Bhushan", rollNo: "16M264", title: "Evaluation of health index assessment of power transformer of subsystem located in HPSEBL substation", supervisor: "Dr. R. K. Jarial & Dr. V. K. Jadoun" },
      ],
    },
    {
      period: "2017–2019",
      students: [
        { srNo: 1, name: "Sunny Kumar", rollNo: "17M251", title: "—", supervisor: "—" },
        { srNo: 2, name: "Saurabh Kumar", rollNo: "17M252", title: "—", supervisor: "—" },
        { srNo: 3, name: "Karan Parmar", rollNo: "17M253", title: "Development of Health Index Evaluation Model based on Multifeature Condition monitoring of Power Transformer", supervisor: "Prof. Y. R. Sood" },
        { srNo: 4, name: "A Rupesh Kumar", rollNo: "17M254", title: "Investigation on stability control of wind integrated power system", supervisor: "Dr. Zakir Husain" },
        { srNo: 5, name: "Shubham Chib", rollNo: "17M255", title: "Comparative analysis of random PWM techniques for multi-level inverter", supervisor: "Dr. Zakir Husain" },
        { srNo: 6, name: "Shilvi", rollNo: "17M256", title: "Dual pentagon based user friendly expert system for DGA of oil filled P. T.", supervisor: "Prof. R. N. Sharma" },
        { srNo: 7, name: "Sahil Verma", rollNo: "17M257", title: "—", supervisor: "—" },
        { srNo: 8, name: "Gaurav Gautam", rollNo: "17M258", title: "—", supervisor: "—" },
        { srNo: 9, name: "Abhishek Dogra", rollNo: "17M259", title: "Performance analysis of alternative hybrid and solid dielectric of P. T.", supervisor: "Dr. Zakir Husain" },
        { srNo: 10, name: "Kanumuri Deepak", rollNo: "17M260", title: "Analysis of various methods for residual life assessment of paper insulation in P.T.", supervisor: "Dr. Veena Sharma & Dr. O. P. Rahi" },
        { srNo: 11, name: "Rajesh Roshan", rollNo: "17M261", title: "Performance assessment of Nomex 410D Kraft paper insulation thermally aged in rapeseed based ester oil", supervisor: "Dr. Manisha Sharma" },
        { srNo: 12, name: "Tondavarapu Siva Pradeep Kumar", rollNo: "17M262", title: "Health Index Estimation of Power Transformers By using Adaptive Neuro-Fuzzy Approach", supervisor: "Dr. Manisha Sharma" },
        { srNo: 13, name: "Vivek Kumar", rollNo: "17M263", title: "An artificial intelligence based T/F furan content assessment", supervisor: "Dr. Zakir Husain" },
      ],
    },
    {
      period: "2018–2020",
      students: [
        { srNo: 1, name: "Aniket Chaturvedi", rollNo: "18M251", title: "Study of Morphological & Dielectric Properties of Polymer Nano-composites", supervisor: "Dr. R. K. Jarial & Dr. Jai Gupta" },
        { srNo: 2, name: "Joel S", rollNo: "18M252", title: "Thermal imaging based Life-Assessment and Anomaly Detection using AI Techniques", supervisor: "Dr. Amit Kaul" },
        { srNo: 3, name: "Leena Gautam", rollNo: "18M253", title: "—", supervisor: "—" },
        { srNo: 4, name: "Anamitra Sarkar", rollNo: "18M254", title: "Fast Grid Voltage Amplitude Estimation Technique for LVRT Capability in Single-Phase PV Systems", supervisor: "Dr. Chandrasekaran S." },
        { srNo: 5, name: "Sandeep Kumar Singh", rollNo: "18M255", title: "—", supervisor: "—" },
        { srNo: 6, name: "Animesh Mukherjee", rollNo: "18M256", title: "Cascaded SOGI-FLL Based Reference Current Extraction Method for Active Power Filter in More Electric Aircraft", supervisor: "Dr. Chandrasekaran S." },
        { srNo: 7, name: "Arush Singh", rollNo: "18M257", title: "Reliability centric Condition monitoring for Power Transformers", supervisor: "Dr. R. K. Jarial & Dr. Rajiv K Sharma" },
        { srNo: 8, name: "Rishav Chaudhary", rollNo: "18M258", title: "Development of an Expert System for Evaluating Residual Life of Transformer", supervisor: "Dr. Veena Sharma" },
        { srNo: 9, name: "Patil Atul Jaysing", rollNo: "18M259", title: "Condition monitoring and life estimation of Transformers feeding power to Steel Mills", supervisor: "Dr. R. K. Jarial" },
        { srNo: 10, name: "Monika Sahu", rollNo: "18M260", title: "—", supervisor: "—" },
        { srNo: 11, name: "Saurabh Ranjan Sharma", rollNo: "18M261", title: "Modeling, Simulation and Failures of Small Hydro Power Plants", supervisor: "Dr. O. P. Rahi" },
      ],
    },
    {
      period: "2019–2021",
      students: [
        { srNo: 1, name: "Shalinee Badoni", rollNo: "19M251", title: "Health monitoring of three phase induction motor using infrared thermography", supervisor: "Dr. R. K. Jarial" },
        { srNo: 2, name: "Kirti Kumari", rollNo: "19M254", title: "Power Quality Improvement in Distribution System Using Distributed Static Compensator (DSTATCOM)", supervisor: "Dr. Rajan Kumar" },
        { srNo: 3, name: "Shaily Singh", rollNo: "19M255", title: "Identifying Oil filled Power Cable Criticality Using Fuzzy Logic Approach", supervisor: "Dr. R. K. Jarial" },
        { srNo: 4, name: "Seema Chouhan", rollNo: "19M256", title: "Solar Photovoltaic Array Powered Brushless DC Motor Drive for Industrial Loads", supervisor: "Dr. Rajan Kumar" },
        { srNo: 5, name: "Madhulika Yadav", rollNo: "19M257", title: "Matrix Inverter Fed Induction motor drive", supervisor: "Dr. R. K. Jarial" },
        { srNo: 6, name: "Mohammad Ariz Aftab", rollNo: "19M258", title: "—", supervisor: "—" },
        { srNo: 7, name: "Suchandan Das", rollNo: "19M259", title: "Real Time fault & Condition Assessment Practices for Induction Motor drive using IOT", supervisor: "Dr. R. K. Jarial" },
        { srNo: 8, name: "Akshil Mankotia", rollNo: "19M260", title: "—", supervisor: "—" },
        { srNo: 9, name: "Vishwajeet Kumar Sinha", rollNo: "19M261", title: "A Novel Design Technique of HESS for Power Management in Electric Vehicle", supervisor: "Dr. Ram Niwash Mahia" },
        { srNo: 10, name: "Ankit Mishra", rollNo: "19M262", title: "PV based shunt active harmonic filter for power quality improvement", supervisor: "Prof. Sushil Chauhan" },
        { srNo: 11, name: "Choudhary Om Prakash", rollNo: "19M263", title: "IoT enabled Condition Monitoring of Low Voltage Industrial Motor", supervisor: "Dr. Supriya Jaiswal" },
        { srNo: 12, name: "Ashish Kumar", rollNo: "19M264", title: "Modified SVPWM Technique for Speed Control of PMSM in Electric Vehicles", supervisor: "Dr. Ram Niwash Mahia" },
      ],
    },
    {
      period: "2020–2022",
      students: [
        { srNo: 1, name: "Adarsh Dubey", rollNo: "20MEE201", title: "Power Quality enhancement for EV fast charging system using an integrated solid-state transformer and passive harmonic mitigation circuit", supervisor: "Dr. R. K. Jarial" },
        { srNo: 2, name: "Ankita", rollNo: "20MEE202", title: "Power Factor Correction Using Electric Spring with Fuzzy Control System", supervisor: "Dr. R. K. Jarial" },
        { srNo: 3, name: "Ashok Kumar", rollNo: "20MEE203", title: "Evaluation of Thermography Inspection Effects on Costs and Power Losses Reduction in NIT Hamirpur and Anu Distribution Substation", supervisor: "Dr. R. K. Jarial" },
        { srNo: 4, name: "Asnapuram Pranavi", rollNo: "20MEE204", title: "Development of Artificial Intelligence based MPPT techniques for solar PV system", supervisor: "Dr. Rajan Kumar" },
        { srNo: 5, name: "Atul Nayan", rollNo: "20MEE205", title: "An intelligent Li-ion battery charging system using a PV array", supervisor: "Dr. O. P. Rahi" },
        { srNo: 6, name: "Binaya Kumar Biswal", rollNo: "20MEE206", title: "An Improvement in LVRT capability of DFIG under fault condition", supervisor: "Dr. O. P. Rahi" },
        { srNo: 7, name: "Jayant Kumar Bradiya", rollNo: "20MEE207", title: "Fault estimation in ac machines by using current signature analysis adopting modern computation algorithm", supervisor: "Prof. Y. R. Sood & Dr. R. K. Jarial" },
        { srNo: 8, name: "Krushna Basudev Ray", rollNo: "20MEE208", title: "Application oriented SOC based Fast and Stable Charging System using Multilevel DC-DC Buck Converter for EVs", supervisor: "Dr. Rajan Kumar" },
        { srNo: 9, name: "Deepti Meena", rollNo: "20MEE209", title: "Performance analysis of solar photovoltaic system using various MPPT technique", supervisor: "Dr. Rajesh Kumar" },
        { srNo: 10, name: "Niharika Verma", rollNo: "20MEE210", title: "Intelligent DGA based diagnosis of power transformers to find incipient faults", supervisor: "Prof. Ashwani Kumar Chandel" },
        { srNo: 11, name: "Nirbhay Tiwari", rollNo: "20MEE211", title: "An Enhancement in Electric Vehicle battery charger system employing SEPIC converter", supervisor: "Dr. O. P. Rahi" },
        { srNo: 12, name: "Prasant Kumar Samal", rollNo: "20MEE212", title: "Health index evaluation of Power transformer by using Intelligent Technique", supervisor: "Dr. Veena Sharma" },
        { srNo: 13, name: "Prerna Sahu", rollNo: "20MEE213", title: "Control of permanent magnet synchronous motor in electric vehicle application", supervisor: "Dr. Rajan Kumar" },
        { srNo: 14, name: "Pulkit Bhatnagar", rollNo: "20MEE214", title: "Harmonic Suppression In Rectifier For Electric Vehicle Charging Station", supervisor: "Dr. O. P. Rahi" },
        { srNo: 15, name: "Rajnish Kumar Rai", rollNo: "20MEE215", title: "Design and Implementation of Fuzzy logic controller of Solar PV system", supervisor: "Dr. O. P. Rahi" },
        { srNo: 16, name: "Sai Jithendra Sampathi", rollNo: "20MEE216", title: "Comparison of fundamental frequency estimators", supervisor: "Dr. R. K. Jarial" },
        { srNo: 17, name: "Subhashree Rout", rollNo: "20MEE217", title: "Monitoring Smart Grid's security and privacy related aspects using Block chain Technology", supervisor: "Dr. Bharti Koul" },
        { srNo: 18, name: "Sunil Kumar Gautam", rollNo: "20MEE218", title: "Synchronization of Solar PV-Wind-Battery-Based DC Micro grid for Brushless DC Motor-Driven pump", supervisor: "Dr. Rajan Kumar" },
      ],
    },
    {
      period: "2021–2023",
      students: [
        { srNo: 1, name: "Akshay Dhiman", rollNo: "21MEE201", title: "Intelligent condition Assessment of Power Transformer using DGA", supervisor: "Dr. O. P. Rahi" },
        { srNo: 2, name: "Tej Singh", rollNo: "21MEE203", title: "Fault Detection in PMSM with Magnetic Domain Model", supervisor: "Dr. Supriya Jaiswal" },
        { srNo: 3, name: "Shubham Dadaso Patil", rollNo: "21MEE204", title: "Machine Learning Tools for DGA of Power Transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 4, name: "Dharme Megha Rani", rollNo: "21MEE205", title: "Chemical Degradation of Insulation oil of Power Transformer", supervisor: "Dr. R. K. Jarial" },
        { srNo: 5, name: "Akshita Dhiman", rollNo: "21MEE206", title: "Fault Diagnosis of a transformer using Fuzzy model and nature based metaheuristic algorithm", supervisor: "Dr. Rajesh Kumar" },
        { srNo: 6, name: "Manu Kumari", rollNo: "21MEE207", title: "Validating Health Status of Transformer: Grey Relational Analysis and Fuzzy Logic", supervisor: "Prof. Ashwani Kumar Chandel" },
        { srNo: 7, name: "Nishant Sharma", rollNo: "21MEE208", title: "Electric Mobility Impact on Power Grid", supervisor: "Dr. O. P. Rahi" },
      ],
    },
    {
      period: "2022–2024",
      students: [
        { srNo: 1, name: "Prashant Dilip Yelpale", rollNo: "22MEE201", title: "An Advanced Induction Motor Fault Diagnosis by Integrating FFT, WT In MCSA And Thermal Analysis", supervisor: "Dr. R. K. Jarial" },
        { srNo: 2, name: "Tamanna Sharma", rollNo: "22MEE202", title: "Design and Analysis of substation Earthing", supervisor: "Dr. O. P. Rahi" },
        { srNo: 3, name: "Aradhana", rollNo: "22MEE203", title: "Health monitoring of power Transformer using furanic compound Analysis", supervisor: "Prof. Ashwani Kumar" },
        { srNo: 4, name: "Mohd. Hanzala Hasan", rollNo: "22MEE204", title: "Investigation of Implicating the Role of DC link voltage controller in the proposed 2.04 MW peak rooftop solar PV power system of NIT Hamirpur", supervisor: "Dr. R. K. Jarial" },
        { srNo: 5, name: "Obaid Ashraf", rollNo: "22MEE205", title: "Optimizing Residential energy consumption by demand-side management through machine learning algorithm", supervisor: "Dr. Bharti Koul" },
        { srNo: 6, name: "Syed Mohammad", rollNo: "22MEE206", title: "Application of demand side management to optimize energy cost in commercial and industrial loads", supervisor: "Dr. Bharti Koul" },
      ],
    },
    {
      period: "2023–2025",
      students: [
        { srNo: 1, name: "Vikas Kumar", rollNo: "23MEE201", title: "Feasibility Study of Solar Rooftop PV Systems for NIT Hamirpur: Technical and Economic Assessment", supervisor: "Dr. Katam Nishanth & Dr. R. K. Jarial" },
        { srNo: 2, name: "Palak", rollNo: "23MEE202", title: "MPPT-Driven Wind Energy System Under Dynamic Wind Conditions", supervisor: "Dr. Bharti Koul" },
        { srNo: 3, name: "Avinash Sharma", rollNo: "23MEE203", title: "Analytical and Experimental Thermal Aging Investigation on Structural and Electrical performance of Kraft and Nomex Insulation Papers immersed in Mineral insulating oil", supervisor: "Dr. R. K. Jarial" },
        { srNo: 4, name: "Preeti Negi", rollNo: "23MEE204", title: "Design and analysis of multiport EV using solar PV along with BESS capability", supervisor: "Dr. Rajesh Kumar" },
      ],
    },
    {
      period: "2024–2026",
      students: [
        { srNo: 1, name: "Tushar Chauhan", rollNo: "24mee201", title: "Life Estimation of Transformers Using Various ML Techniques", supervisor: "Dr. Katam Nishanth" },
        { srNo: 2, name: "Abhishek Kumar", rollNo: "24mee202", title: "Real Time Performance and Economic Analysis of a 2 MW Grid-Connected Solar PV Plant in Himachal Pradesh, India", supervisor: "Dr. Raj Kumar Jarial" },
        { srNo: 3, name: "Aniket Walia", rollNo: "24mee203", title: "Integration of Hybrid Energy system for Electric Vehicles and Battery Degradation Analysis", supervisor: "Dr. Ram Niwash Mahia & Dr. Raj Kumar Jarial" },
        { srNo: 4, name: "Jinia", rollNo: "24mee204", title: "Condition monitoring of dry-type transformers using Deep learning algorithm", supervisor: "Dr. Ashwani Chandel" },
        { srNo: 5, name: "Vishal Chandel", rollNo: "24mee205", title: "Performance Evaluation and Health Assessment of Power Transformers", supervisor: "Dr. Katam Nishanth" },
        { srNo: 6, name: "Rijul Sankhyan", rollNo: "24mee206", title: "Performance and Life Estimation of Sheath Voltage Limiters under AC, DC and Impulse Voltage Conditions", supervisor: "Dr. Chandrasekaran S." },
        { srNo: 7, name: "Nainza Shah", rollNo: "24mee208", title: "Implementing advanced control technologies for enhancing energy efficiency and performance of EV", supervisor: "Dr. Ram Niwash Mahia & Dr. Raj Kumar Jarial" },
        { srNo: 8, name: "Dikshu Kalia", rollNo: "24mee209", title: "Intelligent Fault Detection and Classification in Solar PV Plants: A Hybrid LSTM-Random Forest Approach", supervisor: "Dr. Raj Kumar Jarial & Dr. Ram Niwash Mahia" },
        { srNo: 9, name: "Ashutosh Kumar", rollNo: "24mee210", title: "Fault Diagnoses and Control for Electrical Vehicle", supervisor: "Dr. Supriya Jaiswal" },
      ],
    },
    {
      period: "2025–2027",
      students: [
        { srNo: 1, name: "Ravi Shivam", rollNo: "25mee201", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 2, name: "Praduman K.", rollNo: "25mee202", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 3, name: "Veshali", rollNo: "25mee203", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 4, name: "Mohit Gautam", rollNo: "25mee204", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 5, name: "Vivek Rana", rollNo: "25mee205", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 6, name: "Abhey Sharma", rollNo: "25mee206", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 7, name: "Rohini", rollNo: "25mee207", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 8, name: "Hitesh Prashar", rollNo: "25mee208", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 9, name: "Sakshi", rollNo: "25mee209", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 10, name: "Dhruv", rollNo: "25mee210", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 11, name: "Hitiksh", rollNo: "25mee211", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 12, name: "Vishal Bhatia", rollNo: "25mee212", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
        { srNo: 13, name: "Ayush Goyal", rollNo: "25mee213", title: "Being Finalized Soon", supervisor: "Being Finalized Soon" },
      ],
    },
  ];

  const researchAreas = [
    { title: "Ageing of Solid Insulations", description: "Research and improvements in materials used for manufacturing power transformers, focusing on extending transformer life and reliability." },
    { title: "Fault Detection & Location", description: "Detection and location of faults, including impact analysis of winding deformation due to short-circuit, transportation, and ageing processes." },
    { title: "Partial Discharge Measurement", description: "Advanced applications of partial discharge measurement in fault diagnosis and predictive maintenance of power transformers." },
    { title: "Transformer Condition Monitoring", description: "Development and implementation of best practices for transformer condition monitoring at operational sites." },
    { title: "Steel Industry Applications", description: "Performance evaluation of transformers feeding steel industry, addressing unique operational challenges and requirements." },
    { title: "Insulation Oil-Paper Chemistry", description: "Comprehensive study of insulation oil and paper chemistry to understand degradation mechanisms and improve material performance." },
    { title: "Wireless Technologies", description: "Application of wireless-based technologies for prevention of catastrophic failures in power transformer systems." },
    { title: "Failure Analysis", description: "Comprehensive failure analysis of power transformers to understand root causes and develop prevention strategies." },
    { title: "RLA Studies", description: "Remaining Life Assessment (RLA) studies on power transformers to optimize maintenance schedules and asset management." },
  ];

  const facilities = [
    { title: "M 4100 Insulation Analyzer", description: "Measures capacitance, Power factor and Watt losses in the solid/liquid insulation of power transformer. Also measures leakage reactance turns ratio, excitation current etc." },
    { title: "M 5200 Sweep Frequency Response Analyzer", description: "Utilized to detect the mechanical failure or movement of windings and core during short circuits, transportation, Re-location of Transformers." },
    { title: "Dirana", description: "To analyze the moisture of whole power transformer insulation, Dielectric properties of insulation within a wide frequency band." },
    { title: "High Performance Liquid Chromatography", description: "To Measure the furans in the insulating oil." },
    { title: "Thermal Imaging Camera", description: "To capture the thermal images of power transformer while in operation." },
    { title: "Flash Point Analyzer", description: "To measure the flash point of insulating oil." },
    { title: "Vib Scanner", description: "To measure the vibration of power transformer." },
    { title: "FTIR Spectrophotometer", description: "To measure the oxidation inhibitors in the insulating oil." },
    { title: "ADTR-2K Tan Delta Test Set", description: "Measures the capacitance dielectric constant tan delta and resistivity of insulation oil." },
    { title: "Karl Fischer Titrator", description: "To measure the water contents in the insulating oil." },
    { title: "Breakdown Voltage Oil Test Set", description: "Measures the BDV of insulating oil." },
    { title: "Interfacial Tension Analyzer", description: "Measure the Interfacial Tension of insulation oil." },
    { title: "Sludge & Sediments Analyzer", description: "To measure the sludge and sediments in insulating oil." },
    { title: "Domino Moisture in Oil Analyzer", description: "Measures the water/moisture contents in the insulating oil." },
    { title: "Portable Dissolved Gas Analyzer", description: "Measures the dissolved gases in the insulating oil." },
    { title: "Acidity Titrator", description: "To measure the acid contents in the insulating oil." },
    { title: "Combined TGA, DTA, DSC", description: "Measures the chemical analysis, oxidation induction and identification of paper insulation degradation." },
    { title: "UV/VIS Spectrophotometer", description: "Measures the dissolved decay contents of insulating liquids." },
    { title: "Solid Breakdown Voltage Test Set", description: "Measures the BDV of insulating paper." },
  ];

  const futurePlans = [
    "To go in NABL accreditation in respect of TIFAC-CORE linked laboratories.",
    "To liaison world class Centres/Laboratories/Institutes for promoting R & D in emerging areas of condition assessment of power apparatus.",
    "To interact with other state utilities/Nigams for partnering with TIFAC-CORE.",
    "To explore opportunities for getting industry sponsored projects.",
    "To provide ample employment opportunities to students of PG program in leading industries.",
    "To offer more training programs on modules relevant to industry/electrical utilities for safer upkeep of electrical substation equipment.",
    "To develop learning material in area of R & D.",
    "To promote collaborations with leading High Voltage test labs/Institutes on mutual benefit basis.",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0f1a]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="hidden md:flex items-center space-x-12">
              <nav className="flex items-center space-x-8">
                <Link href="/#services" className="text-white/60 hover:text-white transition-colors text-sm">Solutions</Link>
                <Link href="/#services" className="text-white/60 hover:text-white transition-colors text-sm">Services</Link>
                <Link href="/#about" className="text-white/60 hover:text-white transition-colors text-sm">About</Link>
              </nav>
            </div>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-white text-base sm:text-lg tracking-wider">TIFAC CORE</span>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link href="/#get-in-touch" className="hidden md:block text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
              <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 rounded transition-colors">
                Back to home
              </Link>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1a] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">Solutions</Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">Services</Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">About</Link>
              <Link href="/#team" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">Team</Link>
              <Link href="/#get-in-touch" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0a0f1a] overflow-hidden min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="absolute inset-0">
          <video
            src="/legacy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/70 to-[#0a0f1a]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex-1 flex flex-col">
          <div className="flex-1 flex items-center">
          <div className="max-w-3xl py-8">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Link href="/" className="text-white/40 hover:text-white/60 transition-colors text-xs sm:text-sm">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span className="text-white/70 text-xs sm:text-sm">Legacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
              Exploring TIFAC&apos;s
              legacy of innovation
            </h1>
            <p className="text-white/50 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed">
              Discover the rich history and groundbreaking achievements that have shaped TIFAC Core into a leader in transformer diagnostics and power system innovation.
            </p>
          </div>
          </div>

          {/* Stats Row */}
          <div className="py-8 sm:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">2000</div>
                <div className="text-white/40 text-xs sm:text-sm">Year of inception under Mission REACH</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">149+</div>
                <div className="text-white/40 text-xs sm:text-sm">M.Tech graduates in condition monitoring</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">37</div>
                <div className="text-white/40 text-xs sm:text-sm">CORE centres created across India</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">530L</div>
                <div className="text-white/40 text-xs sm:text-sm">Budget allocated for TIFAC-CORE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission REACH */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Origins</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-6 sm:mb-8">Mission REACH</h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Mission REACH is an offshoot of &apos;Technology Vision 2020&apos; program initiated by Late Dr. A.P.J. Abdul Kalam &ndash; Former President of India through Technology Information Forecasting and Assessment Council (TIFAC), Department of Science & Technology, Govt. of India Delhi to make India a developed nation by the year 2020.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              The program envisages to create a constellation of world class Centres Of Relevance & Excellence (COREs) in diverse disciplines across the country by the upgradation of science and technical institutions, mandated to produce technical manpower of international standard in the area of targeted excellence and tailor made to the emerging needs of industry.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              As on today, about 37 Centres of Relevance and Excellence (CORE) have been created in various technical institutes throughout the country in diverse areas of science and technology. NIT Hamirpur has the privilege of having one such TIFAC-CORE in area of Power Transformer Diagnostics that is functional w.e.f 2004.
            </p>
          </div>
        </div>
      </section>

      {/* TIFAC-CORE History - Dark section */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">TIFAC-CORE in Power Transformer Diagnostics</h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              The inception of TIFAC centre at NIT (Formerly Regional Engineering College, Hamirpur) is an outcome of relentless efforts by former Institute authorities, faculty of EED especially Prof M. N. Bandyopadhyay (Advisor), Prof. Y.R.Sood (Chief Coordinator) & Dr.R.K.Jarial (PI & Coordinator) who have worked sincerely under Visionary leadership and mentorship provided by Prof. Chandra Shakher, the former Chairman, BOG NITH & Former Director NIT Hamirpur.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Since Nov. 2000, the proposal envisaged a budget of Rs. 530 Lakhs to create TIFAC-CORE in &quot;Power Transformer Diagnostics&quot; that became functional w.e.f 1st Sept/2004 after formal signing of MOU between TIFAC through Dept. of Science & Technology, Govt. of India Delhi & NIT Hamirpur on 10th Feb 2004.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              This Centre has been working under mentorship of Apex Body having domain experts drawn from leading industries and academia. It has been seeking valuable suggestions through regular interaction with industry to make a mark in the area of on-line and off-line monitoring of electrical power apparatus especially power transformers, by creating infrastructure facilities of International Standards.
            </p>
          </div>
        </div>
      </section>

      {/* Relevance */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Relevance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-6 sm:mb-8">Relevance for Electrical Utilities</h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Power Transformer is known to be one of the most important and costliest equipment that is required in an Electric Power system. It plays a pivotal role in facilitating smooth supply of Electric Power through a challenging transmission network from a Generating Power House to Electrical Distribution Points.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Transformer failure statistics reported in literature indicate that most failures have occurred before reaching their expected designed life of 40 years. Transformer failures are mainly related to transformer health conditions. Problems related to dielectric are reported as high as 75 percent.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              The cost, time involved to repair and replacement of a power transformer is very high. The prolonged shutdown periods after catastrophic failures can be minimized in case electrical utilities opt for condition based maintenance program and not periodic maintenance program in respect of all major equipment&apos;s especially power transformer.
            </p>
          </div>
        </div>
      </section>

      {/* PG & PhD - Dark */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Academics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Post Graduate & Ph.D. Programs</h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              PG program on &quot;Condition Monitoring Control and Protection of Electrical Apparatus&quot; (first of its kind in the country) was launched in June, 2009 as a collaborative endeavor between the TIFAC CORE and EED of NIT Hamirpur. Admissions in the program are normally made through Centralized Counseling Procedure for M.Tech Admission called CCMT with valid GATE score on all India basis.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Research emphasis is given in industry need based identified topics for developing knowledge in thematic areas of power transformer diagnosis. Till July 2021, 149 Students of M Tech (CMEA) & 05 Ph.D. students have passed out in the emerging field of TIFAC CORE and serving in leading organizations.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              Many alumni of M.Tech Program on Condition Monitoring are serving as Faculty in NITs, IITs, and many are pursuing Ph.D. in NITs/IITs. Some alumni are serving in Public & Private Sector Utilities as well as eminent organizations/institutes.
            </p>
          </div>
        </div>
      </section>

      {/* M.Tech Dissertations */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Alumni</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-3 sm:mb-4">M.Tech Dissertations</h2>
            <p className="text-neutral-500 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl">
              A complete record of dissertation work by M.Tech graduates of the Condition Monitoring, Control &amp; Protection of Electrical Apparatus program since its inception in 2009.
            </p>

            {/* Batch Year Tabs */}
            <div className="relative mb-8">
              <div className="flex overflow-x-auto gap-1.5 pb-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {dissertationBatches.map((batch, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBatch(index)}
                    className={`flex-shrink-0 flex flex-col items-center px-3.5 py-2.5 rounded-xl border transition-all duration-150 ${
                      activeBatch === index
                        ? 'bg-[#0a0f1a] border-[#0a0f1a] text-white shadow-sm'
                        : 'bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-[#0a0f1a] hover:bg-neutral-50'
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-widest leading-none mb-1 ${activeBatch === index ? 'text-blue-400' : 'text-neutral-400'}`}>Batch</span>
                    <span className="text-xs font-semibold leading-none whitespace-nowrap">{batch.period}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Batch Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[#0a0f1a] text-sm font-semibold">Batch {dissertationBatches[activeBatch].period}</span>
                <span className="ml-3 text-neutral-400 text-xs">{dissertationBatches[activeBatch].students.length} students</span>
              </div>
              {activeBatch === dissertationBatches.length - 1 && (
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                  Currently Enrolled
                </span>
              )}
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0a0f1a] text-white">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/60 w-12">S.No</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/60">Name</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/60 w-32">Roll No.</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/60">Dissertation Title</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/60 w-48">Supervisor</th>
                  </tr>
                </thead>
                <tbody>
                  {dissertationBatches[activeBatch].students.map((student, index) => (
                    <tr
                      key={index}
                      className={`border-t border-neutral-100 transition-colors hover:bg-blue-50/50 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                      }`}
                    >
                      <td className="px-5 py-4 text-blue-500 text-xs font-bold">{String(student.srNo).padStart(2, '0')}</td>
                      <td className="px-5 py-4 text-[#0a0f1a] font-semibold text-sm whitespace-nowrap">{student.name}</td>
                      <td className="px-5 py-4 text-neutral-400 text-xs font-mono">{student.rollNo}</td>
                      <td className="px-5 py-4 text-neutral-600 text-xs leading-relaxed">
                        {student.title === 'Being Finalized Soon' ? (
                          <span className="text-amber-500 italic">Being Finalized Soon</span>
                        ) : student.title === '—' ? (
                          <span className="text-neutral-300">—</span>
                        ) : (
                          student.title
                        )}
                      </td>
                      <td className="px-5 py-4 text-neutral-500 text-xs leading-relaxed">
                        {student.supervisor === 'Being Finalized Soon' ? (
                          <span className="text-amber-500 italic">TBD</span>
                        ) : student.supervisor === '—' ? (
                          <span className="text-neutral-300">—</span>
                        ) : (
                          renderSupervisor(student.supervisor)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {dissertationBatches[activeBatch].students.map((student, index) => (
                <div key={index} className="bg-white border border-neutral-200 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-blue-500 text-[10px] font-bold mr-2">{String(student.srNo).padStart(2, '0')}</span>
                      <span className="text-[#0a0f1a] font-semibold text-sm">{student.name}</span>
                    </div>
                    <span className="text-neutral-400 text-[10px] font-mono bg-neutral-100 px-2 py-0.5 rounded">{student.rollNo}</span>
                  </div>
                  <p className="text-neutral-600 text-xs leading-relaxed mb-2">
                    {student.title === 'Being Finalized Soon' ? (
                      <span className="text-amber-500 italic">Being Finalized Soon</span>
                    ) : student.title === '—' ? (
                      <span className="text-neutral-300">Title not recorded</span>
                    ) : (
                      student.title
                    )}
                  </p>
                  {student.supervisor !== '—' && student.supervisor !== 'Being Finalized Soon' && (
                    <p className="text-neutral-400 text-[10px]">
                      <span className="font-semibold text-neutral-500">Supervisor: </span>{renderSupervisor(student.supervisor)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Research</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-8 sm:mb-12">Major Research Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white p-5 sm:p-6 rounded-xl border border-neutral-200 hover:border-blue-300 transition-colors group">
                  <div className="text-blue-500 text-xs font-bold mb-2 sm:mb-3">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0a0f1a] mb-2 group-hover:text-blue-600 transition-colors">{area.title}</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision - Dark CTA style */}
      <section className="relative py-16 sm:py-24 bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554050546-c125a25df013?w=1400&q=80"
            alt="Electrical infrastructure"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Future Vision & Innovation</h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              As we look toward the future, TIFAC Core remains committed to pushing the boundaries of transformer diagnostics and power system innovation. We&apos;re investing heavily in emerging technologies such as advanced materials science and next-generation sensor technologies.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Our vision extends beyond traditional transformer diagnostics to encompass the entire smart grid ecosystem. We&apos;re developing solutions for renewable energy integration, energy storage systems, and grid modernization that will shape the future of power systems.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              Sustainability and environmental responsibility are at the core of our future initiatives. We&apos;re working on technologies that will help reduce the environmental impact of power systems while improving efficiency and reliability for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Roadmap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-8 sm:mb-10">Future Plans</h2>
            <div className="space-y-4 sm:space-y-5">
              {futurePlans.map((plan, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a0f1a] flex items-center justify-center mt-0.5">
                    <span className="text-blue-400 text-[10px] sm:text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed pt-0.5 sm:pt-1">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Facilities */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-3 sm:mb-4">Major Facilities</h2>
            <p className="text-neutral-500 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl">Equipment and instruments available at TIFAC Centre, NIT Hamirpur for advanced transformer diagnostics.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 rounded-lg border border-neutral-200 hover:border-blue-300 transition-all hover:shadow-sm group">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a0f1a] mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">{facility.title}</h3>
                  <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Excellence CTA */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 sm:mb-6">
              Our commitment to
              excellence continues
            </h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
              TIFAC Core&apos;s legacy is built on an unwavering commitment to excellence. From rigorous research methodologies to the highest standards of professionalism, we continue to push boundaries.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/#team" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded transition-colors flex items-center justify-center space-x-2">
                <span>Meet our team</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/#get-in-touch" className="border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-8 py-3.5 rounded transition-colors text-center">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060a12] text-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-1 tracking-wider">TIFAC CORE</h3>
              <p className="text-blue-400 text-[10px] uppercase tracking-[0.25em] mb-5">Transformer Diagnostics</p>
              <p className="text-white/30 text-sm leading-relaxed">
                Advanced transformer diagnostics centre at the Department of Electrical Engineering, National Institute of Technology Hamirpur.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Quick Links</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li><Link href="/#about" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>About Us</span></Link></li>
                <li><Link href="/#team" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Our Team</span></Link></li>
                <li><Link href="/#services" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Services</span></Link></li>
                <li><Link href="/legacy" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Legacy</span></Link></li>
                <li><a href="https://nith.ac.in" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ExternalLink size={12} /><span>NIT Hamirpur</span></a></li>
                <li><a href="https://nith.ac.in/electrical-engineering" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ExternalLink size={12} /><span>EE Department</span></a></li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Explore Legacy</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Mission REACH</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Research Areas</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>PG & PhD Programs</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Facilities</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Future Plans</span></a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Contact Us</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white/30 text-xs sm:text-sm">TIFAC Core, EE Dept., NIT Hamirpur, H.P. 177005</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={13} className="text-blue-400 shrink-0" />
                  <span className="text-white/30 text-xs sm:text-sm">+91 7400321092</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={13} className="text-blue-400 shrink-0" />
                  <span className="text-white/30 text-xs sm:text-sm">tifac@nith.ac.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-white/20 text-[10px] sm:text-xs text-center sm:text-left">&copy; 2025 National Institute of Technology Hamirpur. All rights reserved.</p>
            <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors text-[10px] sm:text-xs">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegacyPage;
