// Single source of truth for all content. Replace every PLACEHOLDER before publishing.
export const profile = {
  name: 'Faiz Sadarealam Ansari',
  title: 'Java Developer · Backend Developer · Full Stack Developer',
  label: 'JAVA DEVELOPER / BACKEND / FULL STACK',
  headline: 'Java developer focused on backend systems and full-stack applications.',
  intro:
    'I build Java and Spring Boot backend services, REST APIs, and database-backed applications, with hands-on React experience across the full stack.',
  email: 'fansari4326@gmail.com', // PLACEHOLDER
  github: 'https://github.com/Faiz070', // PLACEHOLDER
  githubUser: 'Faiz070', // set to a real username to enable live GitHub data
  linkedin: 'https://www.linkedin.com/in/your-profilewww.linkedin.com/in/faiz-ansari-357610256', // PLACEHOLDER
  resume: 'https://drive.google.com/file/d/1jqvAgtCTFFMn1tHZIsAUA3ZneBmSjjHX/view?usp=sharing', // put your file in /public
}

export const nav = ['About', 'Experience', 'Projects', 'Gallery', 'Skills', 'Contact']

export const galleryPhotos = [
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/f_auto,q_auto/IMG_20240125_222746_723',
    alt: 'Photo',
    caption: 'Goa photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791350007/IMG-20251129-WA0054.jpg',
    alt: 'photo',
    caption: 'Project',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791350466/IMG-20251121-WA0054.jpg',
    alt: 'photo',
    caption: 'Send off photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791350600/IMG20241030154658.jpg',
    alt: 'photo',
    caption: 'Mumbai photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791350862/WhatsApp_Image_2026-08-18_at_4.23.33_PM_2.jpg',
    alt: 'photo',
    caption: 'Delhi photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791351124/600702f2-f0ac-4019-a3d6-4ea0f3a475d8.png',
    alt: 'photo',
    caption: 'Felicitation ceremony photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791351267/20240123_145158.jpg',
    alt: 'photo',
    caption: 'Group photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791351450/IMG-20250824-WA0011.jpg',
    alt: 'photo',
    caption: 'Group photo',
  },
  {
    src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791351601/IMG-20241021-WA0008.jpg',
    alt: 'photo',
    caption: 'Achievement photo',
  },
]

export const philosophy = [
  { title: 'Reliability', text: 'Validate inputs and handle failures at API boundaries so invalid requests fail clearly and predictably.' },
  { title: 'Performance', text: 'Measure query and API latency first; optimize the operation shown to be slow rather than guessing.' },
  { title: 'Maintainability', text: 'Keep business rules separate from controllers and persistence so each layer has a clear responsibility.' },
  { title: 'Testing', text: 'Test critical business logic and API contracts before deployment, including expected failure cases.' },
]

export const about = {
  text: [
    'I’m a Java developer focused on backend development with Spring Boot, REST APIs, and relational databases. I also build full-stack features with React and Node.js.',
    'My projects include API-driven applications and applied machine-learning work. I document the choices I made, the trade-offs I considered, and the results I can support with evidence.',
  ],
  focus: ['Java', 'Spring Boot', 'Backend Development', 'REST APIs', 'PostgreSQL', 'React', 'Full Stack Development'],
}

// Only list real roles. Add metrics only if they are true and measurable.
export const experience = [
  {
    company: 'Paarsh Infotech Pvt Ltd.', // PLACEHOLDER
    role: 'Full Stack Java Developer', // PLACEHOLDER
    duration: 'Jan 2026 – June 2026', // PLACEHOLDER
    location: 'Pune, India', // PLACEHOLDER
    points: [
      'Developed REST APIs for business workflows.',
      'Optimized PostgreSQL queries and API response handling, reducing unnecessary database operations in internal workflows.',
      'Designed reusable React components for internal applications.',
      'Integrated third-party APIs into backend services.',
    ],
    metrics: [], // e.g. [{ value: '-40%', label: 'query execution time' }]
  },
]

// `flow` drives the interactive diagram in the case-study modal.
// Add real numbers to `results` ONLY if you can reproduce them.
export const projects = [
  {
    name: 'UPI Fraud Detection',
    summary: 'XGBoost-based fraud detection pipeline trained on the IEEE-CIS dataset, achieving 0.949 ROC-AUC and 0.724 PR-AUC after class-imbalance handling and threshold optimization.',
    problem: 'Fraudulent transactions are rare, so a naive model can look accurate while missing most fraud.',
    solution: 'A pipeline that engineers features, balances classes, trains XGBoost, and tunes the decision threshold.',
    decisions: ['Resample only the training data to avoid leakage', 'Choose the threshold from precision/recall trade-offs, not a default 0.5', 'Evaluate with Precision, Recall, F1 and PR-AUC rather than accuracy'],
    challenges: 'Highly imbalanced data makes accuracy misleading and demands careful evaluation.',
    results: ['On the IEEE-CIS dataset, the XGBoost pipeline achieved 0.949 ROC-AUC and 0.724 PR-AUC after class-imbalance handling and threshold optimization.'],
    resultImages: [
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352320/threshold_tunning.png',
        alt: 'Threshold tuning plot',
        caption: 'Threshold tuning plot showing precision, recall, and F1 score across different decision thresholds.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352304/probability.png',
        alt: 'Probability distribution plot',
        caption: 'Probability distribution plot showing the separation between fraudulent and non-fraudulent transactions based on model predictions.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352287/fraud_meter.png',
        alt: 'Fraud detection meter',
        caption: 'Fraud detection meter visualizing the model\'s performance in identifying fraudulent transactions, highlighting the trade-off between precision and recall.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352275/features.png',
        alt: 'Feature importance plot',
        caption: 'Feature importance plot showing the top features contributing to the model\'s predictions, helping to understand which transaction characteristics are most indicative of fraud.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352253/boosting_round.png',
        alt: 'Boosting round plot',
        caption: 'Boosting round plot showing the model\'s performance across different boosting rounds, helping to determine the optimal number of iterations for training the XGBoost classifier.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352627/user_case_diagram.png',
        alt: 'User case diagram',
        caption: 'User case diagram illustrating the interaction between users and the fraud detection system, highlighting the flow of data and decision-making process.',
      },
    ],
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    flow: [
      { label: 'Transaction Data', note: 'Raw transaction records.' },
      { label: 'Feature Engineering', note: 'Transaction-level features derived from raw fields.' },
      { label: 'Class Balancing', note: 'Resampling (e.g. SMOTE / SMOTETomek) on training data.' },
      { label: 'XGBoost', note: 'Gradient-boosted tree classifier.' },
      { label: 'Threshold Optimization', note: 'Decision threshold tuned for the fraud use case.' },
      { label: 'Fraud Prediction', note: 'Fraud / not-fraud output.' },
    ],
    github: 'https://github.com/Faiz070/UPI-Fraud-Detection-Using-Machine-Learning', demo: '',
  },
  {
    name: 'Crop Vegetation Analysis',
    summary: 'MobileNetV2-based crop classification pipeline achieving 97.78% test accuracy across four crop/disease classes.',
    problem: 'Identifying crops and analysing vegetation from images by hand is slow and inconsistent.',
    solution: 'An image pipeline that preprocesses images, removes background, classifies crops with a CNN, then analyses vegetation.',
    decisions: ['Remove background before classification to reduce visual noise', 'Use MobileNetV2 as a compact, pre-trained CNN backbone', 'Use K-Means for vegetation segmentation'],
    challenges: 'Variability in crop images due to lighting, angles, and backgrounds makes classification challenging; background removal and robust feature extraction are critical.',
    results: ['The MobileNetV2 classifier achieved 97.78% test accuracy across four crop/disease classes.'],
    resultImages: [
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352903/Screenshot_2025-08-10_190547.png',
        alt: 'Model evaluation results',
        caption: 'Results of model evaluation showing accuracy, precision, recall, and F1 score for crop classification, demonstrating the effectiveness of the deep learning approach.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352883/Screenshot_2025-08-10_185823.png',
        alt: 'Model evaluation results',
        caption: 'Results of model evaluation showing accuracy, precision, recall, and F1 score for crop classification, demonstrating the effectiveness of the deep learning approach.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352861/Screenshot_2025-09-23_213200.png',
        alt: 'Training and validation loss curves',
        caption: 'Training and validation loss curves over epochs, illustrating the model\'s learning process and convergence during training for crop classification.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352846/Screenshot_2025-09-23_213215.png',
        alt: 'Training and validation loss curves over epochs',
        caption: 'Training and validation loss curves over epochs, illustrating the model\'s learning process and convergence during training for crop classification.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352830/Screenshot_2025-09-23_213307.png',
        alt: 'Confusion matrix for crop classification',
        caption: 'Confusion matrix showing classification performance across Black Rot, ESCA, Healthy and Leaf Blight classes.',
      },
      {
        src: 'https://res.cloudinary.com/izwfqkck/image/upload/v1791352815/Screenshot_2025-09-24_210610.png',
        alt: 'Crop classification prediction visualization',
        caption: 'Prediction visualization highlighting image regions alongside the model’s crop/disease classification.',
      },
    ],
    tech: ['Python', 'TensorFlow', 'MobileNetV2', 'K-Means', 'OpenCV'],
    flow: [
      { label: 'Crop Image', note: 'Input photo of the crop.' },
      { label: 'Image Preprocessing', note: 'Resize and normalize images.' },
      { label: 'Background Removal', note: 'Isolate the plant from its surroundings.' },
      { label: 'CNN / MobileNetV2', note: 'Deep-learning feature extraction and classification.' },
      { label: 'Classification', note: 'Predicted crop class.' },
      { label: 'Vegetation Analysis', note: 'Vegetation analysis on the isolated plant region.' },
    ],
    github: 'https://github.com/Faiz070/Crop-Disease-Using-Machine-Learning', demo: '',
  },
  {
    name: 'Farm Expense Tracker',
    summary: 'Full-stack agriculture application for recording expenses and yields, calculating profitability, and exposing data through REST APIs.',
    problem: 'Farm costs and yields are often tracked in scattered notes, making profitability hard to see.',
    solution: 'A full-stack app where expenses and yield data are recorded through an API and summarized for the user.',
    decisions: ['API-first design separating the React client from persistence', 'Document model in MongoDB for flexible farm records'],
    challenges: 'Farmers need a simple interface to enter data, and the system must handle concurrent updates and provide accurate summaries.',
    results: ['The application records expenses and yields through REST APIs and calculates farm profitability from the saved data.'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    flow: [
      { label: 'React', note: 'Client UI for entering and viewing data.' },
      { label: 'REST API', note: 'HTTP interface between client and server.' },
      { label: 'Node.js', note: 'Express server holding the business logic.' },
      { label: 'MongoDB', note: 'Stores expense and yield records.' },
    ],
    github: 'https://github.com/Faiz070/Kisan-Expense', demo: '',
  },
]

export const skills = {
  Languages: ['Java', 'JavaScript', 'Python', 'C++', 'SQL'],
  Backend: ['Spring', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
  Frontend: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
  'Machine Learning Projects': ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker'],
}

// Static fallback; GitHub API data replaces it when `githubUser` is set. No fabricated stats.
export const fallbackRepos = [
  { name: 'upi-fraud-detection', description: 'Fraud detection pipeline with class-imbalance handling.', language: 'Python', url: '#' },
  { name: 'crop-vegetation-analysis', description: 'Crop classification and vegetation analysis.', language: 'Python', url: '#' },
  { name: 'farm-expense-tracker', description: 'Farm expense and yield management app.', language: 'JavaScript', url: '#' },
]
