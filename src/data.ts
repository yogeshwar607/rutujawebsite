import {
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
  State,
  languages,
} from './data_types';

/********
 * State *
 ********/

export const state = new State();

/*********
 * Header *
 *********/

export const myName = 'Rutuja';
export const profession = 'Machine Learning Engineer and AWS cloud developer';
export const street = '';
export const postalCode = '412101';
export const city = 'Mumbai';
export const emails: string[] = [
  'rutuja.wanjari2@gmail.com',
];
export const socialNetworks: {
  [key: string]: string
} = {
  github: 'https://github.com/RutujaWanjari',
  website: 'https://rutuja.soulputs.com/',
  linkedin: 'https://www.linkedin.com/in/rutuja-wanjari-5ba6a3135/',
  medium:'https://medium.com/@rutuja.wanjari2',
  twitter: 'https://twitter.com/RutujaWanjari1',
  };


/*********
 * Skills *
 *********/


// Artificial Intelligence

// Artificial Intelligence / Machine Learning Algorithms
export const logisticregression: Skill = { level: 0.8, name: 'Logistic Regression' };
export const svm: Skill = { level: 0.7, name: 'Support Vector Machine' };
export const nbclassifier: Skill = { level: 0.7, name: 'Naive Bayes Classifier' };
export const maxentropy: Skill = { level: 0.7, name: 'Maximum Entropy Classifier' };
export const cnn: Skill = { level: 0.8, name: 'Convolutional Neural Network' };
export const dnn: Skill = { level: 0.8, name: 'Deep Learning Neural Network' };
export const randomforest: Skill = { level: 0.8, name: 'Random Forest' };
export const isolationforest: Skill = { level: 0.8, name: 'Isolation Forest' };
export const outlierdetection: Skill = { level: 0.8, name: 'Outlier Detection Algorithms' };
export const decisiontree: Skill = { level: 0.8, name: 'Decision Tree' };
export const gan: Skill = { level: 0.8, name: 'Generative Adversarial Network' };

// Artificial Intelligence / Natural Language Processing
export const nltk: Skill = { level: 0.7, name: 'NLTK' };
export const spacy: Skill = { level: 0.9, name: 'Spacy' };
export const dialogflow: Skill = { level: 0.5, name: 'Google Dialogflow' };
export const alexa: Skill = { level: 0.5, name: 'Amazon Alexa' };

// Artificial Intelligence / Image Processing
export const opencv: Skill = { level: 0.8, name: 'OpenCV' };

// Artificial Intelligence / Miscellaneous
export const scikitlearn: Skill = { level: 0.8, name: 'Scikit learn (Sklearn)' };
export const pandas: Skill = { level: 0.8, name: 'Pandas' };
export const tensorflow: Skill = { level: 0.8, name: 'Tensorflow' };
export const tflearn: Skill = { level: 0.7, name: 'tflearn' };
export const keras: Skill = { level: 0.7, name: 'Keras' };
export const matplotlib: Skill = { level: 0.5, name: 'Matplotlib' };



// AWS

// AWS / Compute
export const ec2: Skill = {
  level: 0.8,
  name: 'EC2'
};
export const lambda: Skill = {
  level: 0.8,
  name: 'Lambda'
};

// AWS / Developer Tools
export const codecommit: Skill = {
  level: 0.9,
  name: 'CodeCommit'
};
export const cloud9: Skill = {
  level: 0.7,
  name: 'Cloud9'
};

// AWS / Database
export const rds: Skill = {
  level: 0.5,
  name: 'DB Service'
};

// AWS / Machine Learning
export const sagemaker: Skill = {
  level: 0.6,
  name: 'SageMaker'
};
export const notebook: Skill = {
  level: 0.7,
  name: 'Jupyter Notebook'
};

// AWS / Storage
export const s3: Skill = {
  level: 0.5,
  name: 'S3'
};

// AWS / Security, Identity, Compliance
export const iam: Skill = {
  level: 0.3,
  name: 'IAM' 
};
export const waf: Skill = {
  level: 0.7,
  name: 'Web Application Firewall'
};

// AWS / Networking and Content Delivery
export const cloudfront: Skill = {
  level: 0.4,
  name: 'CloudFront - Lambda@Edge'
};
export const cloudwatch: Skill = {
  level: 0.5,
  name: 'CloudWatch'
};


// Data
export const api: Skill = {
  level: 0.8,
  name: 'API'
};
export const mongodb: Skill = {
  level: 0.7,
  name: 'MongoDB'
};
export const mysql: Skill = { 
  level: 0.7, 
  name: 'Microsoft SQL' 
};
export const postgresql: Skill = {
  level: 0.6,
  name: 'PostgreSQL'
};
export const redis: Skill = {
  level: 0.5,
  name: 'Redis'
};


// Backend

// Backend / Languages
export const python: Skill = { level: 0.8, name: 'Python' };
export const csharp: Skill = { level: 0.7, name: 'C#' };


// Backend / Framework
export const serverless: Skill = { level: 0.8, name: 'Serverless Framework' };
export const sam: Skill = { level: 0.8, name: 'Serverless Application Framework' };
export const flask: Skill = { level: 0.8, name: 'Flask' };
export const django: Skill = { level: 0.3, name: 'Django' };

// Backend / Deploy
export const aws: Skill = {
  level: 0.7,
  name: 'AWS'
};
export const docker: Skill = {
  level: 0.6,
  name: 'Docker'
};
export const git: Skill = {
  level: 0.9,
  name: 'Git'
};
export const heroku: Skill = {
  level: 0.8,
  name: 'Heroku'
};
export const android: Skill = {
  level: 0.5,
  name: 'Android'
};
export const cordova: Skill = {
  level: 0.6,
  name: 'Apache Cordova'
};
export const xamarin: Skill = {
  level: 0.6,
  name: 'Xamarin'
};
export const ios: Skill = {
  level: 0.5,
  name: 'iOS'
};



// Frontend

// Frontend / Logic
export const jquery: Skill = {
  level: 0.7,
  name: 'jQuery'
};
export const js: Skill = {
  level: 0.7,
  name: 'JavaScript'
};

// Frontend / Markup
export const xaml: Skill = { level: 0.7, name: 'Extensible Markup Language' };
export const html: Skill = {
  level: 0.8,
  name: 'HTML5'
};
export const markdown: Skill = {
  level: 0.6,
  name: 'Markdown'
};
export const jinja: Skill = {
  level: 0.5,
  name: 'Jinja2'
};
export const wordpress: Skill = {
  level: 0.5,
  name: 'Wordpress'
};

// Frontend / Style
export const css: Skill = {
  level: 0.8,
  name: 'Css3'
};
export const less: Skill = {
  level: 0.7,
  name: 'less'
};


// Miscellaneous
export const cybersecurity: Skill = { level: 0.4, name: 'Cyber Security' };
export const anaconda: Skill = { level: 0.8, name: 'Anaconda' };
export const pip: Skill = { level: 0.8, name: 'Python Installer Package' };



export const skills: SkillSet[] = [
  
  {
    title: 'Artificial Intelligence',
    data: [
      {
        title: 'Machine Learning Algorithms',
        data: {
          logisticregression,
          svm,
          nbclassifier,
          maxentropy,
          cnn,
          dnn,
          randomforest,
          isolationforest,
          outlierdetection,
          decisiontree,
          gan
        },
      },
      {
        title: 'Natural Language Processing',
        data: {
          nltk,
          spacy,
          dialogflow,
          alexa
        },
      },
      {
        title: 'Image Processing',
        data: {
          opencv
        },
      },
      {
        title: 'Miscellaneous',
        data: {
          scikitlearn,
          pandas,
          tensorflow,
          tflearn,
          keras,
          matplotlib
        },
      },
    ],
  },
  {
    title: 'AWS',
    data: [
      {
        title: 'Compute',
        data: {
          ec2,
          lambda
        },
      },
      {
        title: 'Developer Tools',
        data: {
          codecommit,
          cloud9
        },
      },
      {
        title: 'Database',
        data: {
          rds
        },
      },
      {
        title: 'Storage',
        data: {
          s3
        },
      },
      {
        title: 'Machine Learning',
        data: {
          sagemaker,
          notebook
        },
      },
      {
        title: 'Security, Identity, Compliance',
        data: {
          iam,
          waf
        },
      },
      {
        title: 'Networking and Content Delivery',
        data: {
          cloudfront,
          cloudwatch
        },
      },
    ],
  },
  {
    title: 'Backend',
    data: [
      {
        title: 'Languages',
        data:{
          python,
          csharp
        },
      },
      {
        title:'Framework',
        data:{
          serverless,
          sam,
          flask,
          django
        },
      },
      {
        title: 'Deploy',
        data: {
          aws,
          docker,
          git,
          heroku,
          android,
          cordova,
          xamarin,
          ios
        },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [
      {
        title: 'Logic',
        data: {
          jquery,
          js
        },
      },
      {
        title: 'Markup',
        data: {
          html,
          markdown,
          xaml,
          jinja,
          wordpress
        },
      },
      {
        title: 'Style',
        data: {
          css,
          less
        },
      }
    ],
  },
  {
    title:'Miscellaneous',
    data:{
      cybersecurity,
      anaconda,
      pip
    },
  },
  {
    title:'Data',
    data:{
      api,
      mongodb,
      mysql,
      postgresql,
      redis
    },
  },
];





/*******************
 * Curriculum Vitae *
 *******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: 'Cyber ​​Matrix Co. Ltd.',
    website: 'https://www.cybermatrix.co',
    workdescription: ` Responsible for developing AI models for cyber security
                       Integrating whole system into AWS with serverless framework. `,
    startsAt: new Date('2019-04-01'),
    endsAt: undefined,
    remote: true,
    position: [
      'Artificial Intelligence Lead',
      'Cloud Developer',
    ],
    skills: {
      serverless,
      sam,
      cybersecurity,
      logisticregression,
      outlierdetection,
      svm,
      cnn,
      decisiontree,
      scikitlearn,
      python,
      aws,
      lambda,
      mongodb,
      sagemaker
    },
  },
  {
    company: 'Soulputs Technologies Pvt. Ltd.',
    website: 'https://www.soulputs.com',
    workdescription: `Founded Soulputs.
                      Responsible for developing Textual Analysis Platform with NLP and chatbots.`,
    startsAt: new Date('2018-05-01'),
    endsAt: new Date('2019-03-15'),
    remote: false,
    position: [
      'Director',
      'Machine Learning Engineer'
    ],
    skills: {
      wordpress,
      spacy,
      python,
      flask,
      git,
      css,
      html,
      jinja,
      jquery,
      redis,
      aws
    }   
  },
  {
    company: 'Blinkware Technology sdn bhd',
    website: 'http://www.blinkwaretechnology.com',
    workdescription: `Built Face Recognition System.
                      Also developed Face spoof detection sytem to prevent attacks.`,
    startsAt: new Date('2017-12-01'),
    endsAt: new Date('2018-04-15'),
    remote: false,
    position: [
      'Machine Learning Engineer'
    ],
    skills: {
      cnn,
      dnn,
      gan,
      opencv,
      python,
      flask,
      css,
      html,
      jinja,
      jquery,
      mongodb,
      aws
    }
  },
  {
    company: 'InstaReM India Pvt. Ltd.',
    website: 'https://www.instarem.com/en-in/',
    workdescription: `Built chatbot for Instarem.
                      This chatbot served for customers doing remmittance using Instarem.`,
    startsAt: new Date('2017-06-01'),
    endsAt: new Date('2017-11-30'),
    remote: false,
    position: [
      'Machine Learning Engineer'
    ],
    skills: {
      nltk,
      maxentropy,
      scikitlearn,
      pandas,
      python,
      flask,
      less,
      css,
      html,
      js
    }
  },
  {
    company: 'Cybage Software Pvt. Ltd.',
    website: 'https://www.cybage.com',
    workdescription: `I was a mobile developer in Cybage.
                      Developed cross platform apps that could be available for Windows, Android and iOS.`,
    startsAt: new Date('2015-02-23'),
    endsAt: new Date('2017-05-30'),
    remote: false,
    position: [
      'Software Developer'
    ],
    skills: {
      cordova,
      xaml,
      csharp,
      xamarin,
      css,
      html,
      js
    }
  },

];



/***********
 * Projects *
 ***********/

export const projects: ShowCase[] = [
  {
    name: 'URL-check',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    I developed an AI model for checking web defacement, with respect to url check.
    So whenver our website is defaced or attacked, this AI model can accurately detect any malicious content.
    For achieving this I researched on various classification algorithms.
    Also the outlier detection algorithms.
    I used Serverless Framework, scikit-learn, pandas, jupyter notebook, codecommit, cloud9, ec2,
      logisticregression, svm, decisiontree, cnn, dnn, Python, AWS-lambda, AWS-s3, AWS-cloudwatch, AWS-SageMaker, mongodb, sql.
    `,
    urls: [],
    media: [],
    skills: {}
  },
  {
    name: 'BOT-detection',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    TAP is a Textual Analysis Platform. I was responsible to plan overall product and design the architecture.
    With a view on Client/User perspective. I lead and managed whole team of 5 people.
    I researched on what should be the purpose of Textual Analysis and ways to achieve it.
    Finally I settled for Spacy to achieve this goal given the complexity for problem stated for smalll scale
      and medium scale companies.
    I used scikit-learn, keras, pandas, jupyter notebook, ec2, isolationforest,
      randomforest, Python, AWS-lambda, AWS-s3, AWS-SageMaker, and github.
    `,
    urls: [],
    media: [],
    skills: {}
  },
  {
    name: 'TAP',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    I developed an AI model to detect whether the site is accessed by bot or normal user or by proxy browser.
    This system can automatically detect malicious access when the site is accessed and returns the result within 5 secs.
    Currently I am trying to reduce this time frame.
    For this I experimented on outlier detection algorithms.
    I used scikit-learn, keras, pandas, jupyter notebook, ec2, isolationforest,
      randomforest, Python, AWS-lambda, AWS-s3, AWS-SageMaker, and github.
    `,
    urls: [
      'https://tap.soulputs.com/',
      'https://medium.com/@rutuja.wanjari2/an-overview-on-natural-language-processing-60dddde4d4b5'
    ],
    media: [],
    skills: {}
  },
  {
    name: 'Chatbot',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    I have developed few chatbots using different technologies each time.
      asks performed under this projects were - Integrating 3rd party APIs like bank APIs, data cleaning,
      lemmatization, entity classification, entity recognition, etc.
    The technologies I used were, Maxentclassifier and Naive Bayes Classifier, spacy, nltk, keras, Amazon
      Alexa, Google Dialogflow.
    For back-end I used Python, Flask, postgresql, mongodb and bitbucket. Front-end : html5, css3, jquery.
    `,
    urls: [],
    media: [],
    skills: {}
  },
  {
    name: 'Face Recognition System',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    Designed and developed architecture of the system for recognizing faces of people.
    Achieved this goal by capturing faces of people coming to Malls. Where out team inserted 2 cameras in 2
      different malls and captured real-time faces.
    I developed front-end as well as back-end of this system. Used openCV, Python, Flask, postgresql,
      mongodb and github. For front-end I used html5, css3, jquery.
    `,
    urls: [],
    media: [],
    skills: {}
  },
  {
    name: 'Face Spoof Detection System',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    Researched and developed a system for detecting face spoof.
    I did research on various techniques like Deep Convolutional Generative Adversarial Networks (DCGAN),
      Deep neural networks, Convolutional Neural Networks, Convolutional Autoencoders for detecting face
      spoof by using a photo, video or a different substitute for an authorized person’s face.
    We settled on Convolutional Autoencoders for achieving this goal. Other techniques failed for photos in
      different lighting conditions and video of authorized person. Whereas Autoencoder gave better accuracy
      on such conditions.
    Also developed a MVP for showcasing the same. Skills used were - Python, Flask, Autoencoder, Keras,
      tensorflow, math, html5, css3, jquery. 
    `,
    urls: [],
    media: [],
    skills: {}
  },
  {
    name: 'Mobile App Development',
    startsAt: undefined,
    endsAt: undefined,
    workdescription: `
    Worked on technologies like xamarin and cordova for developing mobile applications that could work all
      platforms ( like windows, ios, android) from single code.
    Some of our clients for whom I developed apps were American College of Cardiology, Rakuten.
    `,
    urls: [
      'https://play.google.com/store/apps/dev?id=5189912010956845696&hl=en'
    ],
    media: [],
    skills: {}
  },
];
