import { PrismaClient, UserType, JobPostStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seeding process...");

  // Create company users
  const companyUsers = await Promise.all([
    createUser("acme@example.com", "COMPANY"),
    createUser("techcorp@example.com", "COMPANY"),
    createUser("globalinc@example.com", "COMPANY"),
    createUser("innovate@example.com", "COMPANY"),
    createUser("futuretech@example.com", "COMPANY"),
    createUser("nexusdev@example.com", "COMPANY"),
    createUser("dataflow@example.com", "COMPANY"),
    createUser("webcraft@example.com", "COMPANY"),
  ]);

  // Create job seeker users
  const jobSeekerUsers = await Promise.all([
    createUser("john.doe@example.com", "JOB_SEEKER"),
    createUser("jane.smith@example.com", "JOB_SEEKER"),
    createUser("alex.jones@example.com", "JOB_SEEKER"),
    createUser("sara.wilson@example.com", "JOB_SEEKER"),
    createUser("michael.brown@example.com", "JOB_SEEKER"),
    createUser("emma.johnson@example.com", "JOB_SEEKER"),
    createUser("james.williams@example.com", "JOB_SEEKER"),
    createUser("olivia.miller@example.com", "JOB_SEEKER"),
    createUser("noah.davis@example.com", "JOB_SEEKER"),
    createUser("sophia.garcia@example.com", "JOB_SEEKER"),
  ]);

  // Create companies
  const companies = await Promise.all([
    createCompany({
      name: "Acme Corporation",
      location: "New York, NY",
      logo: "https://placehold.co/400x400?text=Acme",
      website: "https://acme-example.com",
      xAccount: "@acmecorp",
      about:
        "A leading technology company specializing in innovative solutions for enterprise clients.",
      userId: companyUsers[0].id,
    }),
    createCompany({
      name: "TechCorp",
      location: "San Francisco, CA",
      logo: "https://placehold.co/400x400?text=TechCorp",
      website: "https://techcorp-example.com",
      xAccount: "@techcorp",
      about: "Building the future of AI and machine learning applications.",
      userId: companyUsers[1].id,
    }),
    createCompany({
      name: "Global Inc.",
      location: "Austin, TX",
      logo: "https://placehold.co/400x400?text=GlobalInc",
      website: "https://globalinc-example.com",
      xAccount: "@globalinc",
      about:
        "A global technology provider helping businesses transform their digital landscape.",
      userId: companyUsers[2].id,
    }),
    createCompany({
      name: "Innovate Solutions",
      location: "Boston, MA",
      logo: "https://placehold.co/400x400?text=Innovate",
      website: "https://innovate-example.com",
      xAccount: "@innovatesolutions",
      about: "Innovative software solutions for modern business challenges.",
      userId: companyUsers[3].id,
    }),
    createCompany({
      name: "FutureTech",
      location: "Seattle, WA",
      logo: "https://placehold.co/400x400?text=FutureTech",
      website: "https://futuretech-example.com",
      xAccount: "@futuretech",
      about:
        "Pioneering technologies that shape the future of digital innovation.",
      userId: companyUsers[4].id,
    }),
    createCompany({
      name: "Nexus Development",
      location: "Chicago, IL",
      logo: "https://placehold.co/400x400?text=Nexus",
      website: "https://nexusdev-example.com",
      xAccount: "@nexusdev",
      about: "Custom software development for businesses of all sizes.",
      userId: companyUsers[5].id,
    }),
    createCompany({
      name: "DataFlow Analytics",
      location: "Denver, CO",
      logo: "https://placehold.co/400x400?text=DataFlow",
      website: "https://dataflow-example.com",
      xAccount: "@dataflowanalytics",
      about:
        "Data analytics solutions helping businesses make better decisions.",
      userId: companyUsers[6].id,
    }),
    createCompany({
      name: "WebCraft Solutions",
      location: "Miami, FL",
      logo: "https://placehold.co/400x400?text=WebCraft",
      website: "https://webcraft-example.com",
      xAccount: "@webcraftsolutions",
      about:
        "Web development agency focused on creating beautiful and functional websites.",
      userId: companyUsers[7].id,
    }),
  ]);

  // Create job seekers
  const jobSeekers = await Promise.all([
    createJobSeeker({
      name: "John Doe",
      about:
        "Experienced full-stack developer with 5 years of experience in React, Node.js, and AWS.",
      resume: "https://example.com/resumes/john-doe.pdf",
      userId: jobSeekerUsers[0].id,
    }),
    createJobSeeker({
      name: "Jane Smith",
      about:
        "Product manager with expertise in agile methodologies and 7 years of experience in tech.",
      resume: "https://example.com/resumes/jane-smith.pdf",
      userId: jobSeekerUsers[1].id,
    }),
    createJobSeeker({
      name: "Alex Jones",
      about:
        "Backend developer specializing in Python, Django, and database optimization.",
      resume: "https://example.com/resumes/alex-jones.pdf",
      userId: jobSeekerUsers[2].id,
    }),
    createJobSeeker({
      name: "Sara Wilson",
      about:
        "Frontend developer with 3 years of experience in React, Vue.js, and responsive design.",
      resume: "https://example.com/resumes/sara-wilson.pdf",
      userId: jobSeekerUsers[3].id,
    }),
    createJobSeeker({
      name: "Michael Brown",
      about:
        "DevOps engineer experienced in CI/CD pipelines, Docker, Kubernetes, and AWS.",
      resume: "https://example.com/resumes/michael-brown.pdf",
      userId: jobSeekerUsers[4].id,
    }),
    createJobSeeker({
      name: "Emma Johnson",
      about:
        "UX/UI designer with a passion for creating intuitive user experiences and interfaces.",
      resume: "https://example.com/resumes/emma-johnson.pdf",
      userId: jobSeekerUsers[5].id,
    }),
    createJobSeeker({
      name: "James Williams",
      about:
        "Mobile developer skilled in React Native, Flutter, and native Android/iOS development.",
      resume: "https://example.com/resumes/james-williams.pdf",
      userId: jobSeekerUsers[6].id,
    }),
    createJobSeeker({
      name: "Olivia Miller",
      about:
        "Data scientist with expertise in machine learning, Python, and statistical analysis.",
      resume: "https://example.com/resumes/olivia-miller.pdf",
      userId: jobSeekerUsers[7].id,
    }),
    createJobSeeker({
      name: "Noah Davis",
      about:
        "Quality assurance specialist with experience in automated testing and test-driven development.",
      resume: "https://example.com/resumes/noah-davis.pdf",
      userId: jobSeekerUsers[8].id,
    }),
    createJobSeeker({
      name: "Sophia Garcia",
      about:
        "Project manager with PMP certification and 6 years of experience in software development projects.",
      resume: "https://example.com/resumes/sophia-garcia.pdf",
      userId: jobSeekerUsers[9].id,
    }),
  ]);

  // Create job posts
  const employmentTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Remote",
  ];
  const benefits = [
    "Health insurance",
    "Dental insurance",
    "Vision insurance",
    "Life insurance",
    "401(k) matching",
    "Remote work options",
    "Flexible schedule",
    "Paid time off",
    "Parental leave",
    "Professional development",
    "Home office stipend",
    "Gym membership",
    "Company events",
    "Stock options",
    "Performance bonuses",
    "Wellness programs",
  ];

  // Create job posts for each company
  for (const company of companies) {
    // Each company will have 3-5 job posts
    const numJobPosts = Math.floor(Math.random() * 3) + 3; // 3-5 job posts

    for (let i = 0; i < numJobPosts; i++) {
      const status =
        Math.random() > 0.2 ? JobPostStatus.ACTIVE : JobPostStatus.DRAFT;
      const applications =
        status === JobPostStatus.ACTIVE ? Math.floor(Math.random() * 20) : 0;

      // Random salary range with minimum $50k difference
      const salaryFrom = Math.floor(Math.random() * 70000) + 50000;

      const salaryTo = salaryFrom + Math.floor(Math.random() * 50000) + 50000;

      // Random job titles based on company focus
      let jobTitles;
      if (
        company.name.includes("Tech") ||
        company.name.includes("Future") ||
        company.name.includes("Innovate")
      ) {
        jobTitles = [
          "Senior Software Engineer",
          "Full Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "DevOps Engineer",
          "Product Manager",
          "UI/UX Designer",
          "Data Scientist",
          "AI Engineer",
        ];
      } else if (
        company.name.includes("Data") ||
        company.name.includes("Analytics")
      ) {
        jobTitles = [
          "Data Analyst",
          "Business Intelligence Analyst",
          "Database Administrator",
          "Data Engineer",
          "Machine Learning Engineer",
          "Analytics Manager",
          "Big Data Specialist",
          "Data Architecture Lead",
          "ETL Developer",
        ];
      } else if (
        company.name.includes("Web") ||
        company.name.includes("Craft")
      ) {
        jobTitles = [
          "Web Developer",
          "UI Designer",
          "UX Researcher",
          "Frontend Specialist",
          "WordPress Developer",
          "E-Commerce Developer",
          "SEO Specialist",
          "Digital Marketing Specialist",
          "Content Manager",
        ];
      } else {
        jobTitles = [
          "Project Manager",
          "Business Analyst",
          "QA Engineer",
          "Technical Writer",
          "Customer Success Manager",
          "Sales Representative",
          "Marketing Specialist",
          "HR Specialist",
          "IT Support Engineer",
        ];
      }

      // Select random job title
      const jobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];

      // Select random employment type
      const employmentType =
        employmentTypes[Math.floor(Math.random() * employmentTypes.length)];

      // Select random benefits (3-6)
      const numBenefits = Math.floor(Math.random() * 4) + 3; // 3-6 benefits
      const selectedBenefits: string[] = [];
      for (let j = 0; j < numBenefits; j++) {
        const benefit = benefits[Math.floor(Math.random() * benefits.length)];
        if (!selectedBenefits.includes(benefit)) {
          selectedBenefits.push(benefit);
        }
      }

      // Create job post
      await createJobPost({
        jobTitle,
        employmentType,
        location: company.location,
        salaryFrom,
        salaryTo,
        jobDescription: generateJobDescription(jobTitle, company.name),
        listingDuration: 30, // 30 days
        benefits: selectedBenefits,
        status,
        applications,
        companyId: company.id,
      });
    }
  }

  // Create saved job posts for job seekers
  for (const jobSeeker of jobSeekerUsers) {
    // Get random number of job posts to save (2-5)
    const numSavedJobs = Math.floor(Math.random() * 4) + 2; // 2-5 saved jobs

    // Get random job posts
    const jobPosts = await prisma.jobPost.findMany({
      where: { status: JobPostStatus.ACTIVE },
      take: 30,
    });

    // Save random job posts
    for (let i = 0; i < numSavedJobs && i < jobPosts.length; i++) {
      const randomIndex = Math.floor(Math.random() * jobPosts.length);
      const jobPost = jobPosts[randomIndex];

      // Check if already saved to avoid unique constraint violation
      const existingSaved = await prisma.savedJobPost.findUnique({
        where: {
          userId_jobId: {
            userId: jobSeeker.id,
            jobId: jobPost.id,
          },
        },
      });

      if (!existingSaved) {
        await prisma.savedJobPost.create({
          data: {
            userId: jobSeeker.id,
            jobId: jobPost.id,
          },
        });
      }
    }
  }

  console.log("Seeding completed successfully!");
}

async function createUser(email: string, userType: UserType) {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return existingUser;
  }

  return prisma.user.create({
    data: {
      email,
      name: email
        .split("@")[0]
        .replace(".", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      onboardingCompleted: true,
      userType,
      stripeCustomerId: `cus_${Math.random().toString(36).substring(2, 10)}`,
    },
  });
}

async function createCompany(data: {
  name: string;
  location: string;
  logo: string;
  website: string;
  xAccount?: string;
  about: string;
  userId: string;
}) {
  return prisma.company.create({
    data,
  });
}

async function createJobSeeker(data: {
  name: string;
  about: string;
  resume: string;
  userId: string;
}) {
  return prisma.jobSeeker.create({
    data,
  });
}

async function createJobPost(data: {
  jobTitle: string;
  employmentType: string;
  location: string;
  salaryFrom: number;
  salaryTo: number;
  jobDescription: string;
  listingDuration: number;
  benefits: string[];
  status: JobPostStatus;
  applications: number;
  companyId: string;
}) {
  return prisma.jobPost.create({
    data,
  });
}

function generateJobDescription(jobTitle: string, companyName: string): string {
  // Base description templates
  const introTemplates = [
    `${companyName} is looking for a talented ${jobTitle} to join our growing team.`,
    `We are seeking an experienced ${jobTitle} to help us build the next generation of our products.`,
    `${companyName} has an exciting opportunity for a ${jobTitle} who is passionate about innovation.`,
    `Join our team at ${companyName} as a ${jobTitle} and be part of something extraordinary.`,
    `${companyName} is expanding and we need a skilled ${jobTitle} to help us reach our goals.`,
  ];

  // Role description templates based on job title category
  let roleDescription = "";

  if (
    jobTitle.includes("Engineer") ||
    jobTitle.includes("Developer") ||
    jobTitle.includes("Full Stack")
  ) {
    roleDescription = `
As a ${jobTitle} at ${companyName}, you will be responsible for designing, developing, and maintaining our software solutions. You'll work closely with product managers, designers, and other engineers to implement new features and ensure the performance and reliability of our systems.

Your responsibilities will include:
- Developing and maintaining high-quality software components
- Collaborating with cross-functional teams to define, design, and ship new features
- Identifying and resolving performance bottlenecks
- Writing clean, maintainable, and well-documented code
- Participating in code reviews and providing constructive feedback
- Troubleshooting production issues and implementing solutions

Requirements:
- ${Math.floor(Math.random() * 5) + 3}-${
      Math.floor(Math.random() * 5) + 8
    } years of experience in software development
- Proficiency in ${
      jobTitle.includes("Frontend")
        ? "JavaScript, React, and modern CSS"
        : jobTitle.includes("Backend")
        ? "Python, Java, or Node.js"
        : "one or more programming languages such as JavaScript, Python, Java, or Go"
    }
- ${
      jobTitle.includes("Frontend")
        ? "Experience with modern frontend frameworks and tools"
        : jobTitle.includes("Backend")
        ? "Knowledge of database systems and API design"
        : "Understanding of software development lifecycle and best practices"
    }
- Strong problem-solving skills and attention to detail
- Excellent communication and collaboration abilities
- ${
      jobTitle.includes("DevOps")
        ? "Experience with CI/CD pipelines, Docker, and Kubernetes"
        : "Knowledge of version control systems, particularly Git"
    }
`;
  } else if (
    jobTitle.includes("Data") ||
    jobTitle.includes("Analyst") ||
    jobTitle.includes("ML")
  ) {
    roleDescription = `
As a ${jobTitle} at ${companyName}, you will work with large datasets to extract valuable insights and build models that drive business decisions. You'll collaborate with various teams to understand their data needs and deliver solutions that meet those requirements.

Your responsibilities will include:
- Collecting, processing, and analyzing large datasets
- Developing machine learning models and algorithms
- Creating data visualizations and dashboards
- Communicating findings and recommendations to stakeholders
- Identifying opportunities for data-driven optimization
- Maintaining data quality and integrity

Requirements:
- ${Math.floor(Math.random() * 3) + 2}-${
      Math.floor(Math.random() * 3) + 5
    } years of experience in ${
      jobTitle.includes("Data Scientist")
        ? "data science"
        : "data analysis or business intelligence"
    }
- Proficiency in Python, R, or similar data analysis tools
- Experience with SQL and database systems
- ${
      jobTitle.includes("Data Scientist") || jobTitle.includes("ML")
        ? "Knowledge of machine learning algorithms and frameworks like TensorFlow or PyTorch"
        : "Strong analytical and statistical skills"
    }
- Ability to communicate complex findings in a clear, concise manner
- Bachelor's or Master's degree in Computer Science, Statistics, or related field
`;
  } else if (jobTitle.includes("Manager") || jobTitle.includes("Lead")) {
    roleDescription = `
As a ${jobTitle} at ${companyName}, you will oversee ${
      jobTitle.includes("Product")
        ? "product development"
        : jobTitle.includes("Project")
        ? "project execution"
        : "team operations"
    } and ensure successful delivery of our initiatives. You'll lead a team of professionals and collaborate with stakeholders across the organization.

Your responsibilities will include:
- ${
      jobTitle.includes("Product")
        ? "Defining product vision, strategy, and roadmap"
        : jobTitle.includes("Project")
        ? "Planning, executing, and closing projects"
        : "Managing and mentoring team members"
    }
- ${
      jobTitle.includes("Product")
        ? "Gathering and prioritizing product requirements"
        : jobTitle.includes("Project")
        ? "Managing project scope, schedule, and resources"
        : "Setting team goals and tracking performance"
    }
- Collaborating with cross-functional teams to ensure alignment
- ${
      jobTitle.includes("Product")
        ? "Conducting market research and competitive analysis"
        : jobTitle.includes("Project")
        ? "Identifying and mitigating project risks"
        : "Facilitating communication and removing obstacles"
    }
- ${
      jobTitle.includes("Product")
        ? "Creating product specifications and user stories"
        : jobTitle.includes("Project")
        ? "Reporting project status to stakeholders"
        : "Conducting performance reviews and providing feedback"
    }

Requirements:
- ${Math.floor(Math.random() * 3) + 5}-${
      Math.floor(Math.random() * 5) + 8
    } years of experience in ${jobTitle.toLowerCase()}
- Proven track record of ${
      jobTitle.includes("Product")
        ? "successful product launches"
        : jobTitle.includes("Project")
        ? "delivering projects on time and within budget"
        : "leading high-performing teams"
    }
- ${
      jobTitle.includes("Product")
        ? "Understanding of product development lifecycle"
        : jobTitle.includes("Project")
        ? "PMP certification or equivalent"
        : "Strong leadership and mentoring skills"
    }
- Excellent communication and presentation abilities
- Strong analytical and problem-solving skills
- Bachelor's degree in Business, Computer Science, or related field
`;
  } else if (
    jobTitle.includes("Designer") ||
    jobTitle.includes("UI") ||
    jobTitle.includes("UX")
  ) {
    roleDescription = `
As a ${jobTitle} at ${companyName}, you will create intuitive and engaging user interfaces that delight our customers. You'll work closely with product managers, developers, and other designers to ensure our products provide exceptional user experiences.

Your responsibilities will include:
- Designing user interfaces for web and mobile applications
- Creating wireframes, mockups, and prototypes
- Conducting user research and usability testing
- Developing and maintaining design systems
- Collaborating with developers to ensure proper implementation
- Gathering and incorporating user feedback

Requirements:
- ${Math.floor(Math.random() * 3) + 2}-${
      Math.floor(Math.random() * 3) + 5
    } years of experience in UI/UX design
- Proficiency in design tools such as Figma, Sketch, or Adobe XD
- Knowledge of design principles, interaction design, and visual design
- Experience with user research and usability testing
- Understanding of web and mobile design constraints
- Portfolio demonstrating your design process and solutions
`;
  } else {
    roleDescription = `
As a ${jobTitle} at ${companyName}, you will play a crucial role in our organization's success. You'll bring your expertise and skills to help us achieve our business objectives and deliver value to our customers.

Your responsibilities will include:
- Executing key tasks and projects related to your domain
- Collaborating with team members and stakeholders
- Identifying opportunities for improvement and innovation
- Maintaining high standards of quality and performance
- Contributing to a positive and productive work environment
- Staying current with industry trends and best practices

Requirements:
- ${Math.floor(Math.random() * 3) + 2}-${
      Math.floor(Math.random() * 3) + 5
    } years of experience in a similar role
- Strong knowledge of relevant tools and technologies
- Excellent communication and interpersonal skills
- Problem-solving mindset and attention to detail
- Ability to work independently and as part of a team
- Bachelor's degree in a relevant field or equivalent experience
`;
  }

  // Outro templates
  const outroTemplates = [
    `If you're passionate about ${
      jobTitle.includes("Developer") || jobTitle.includes("Engineer")
        ? "technology"
        : jobTitle.includes("Designer")
        ? "design"
        : jobTitle.includes("Manager")
        ? "leadership"
        : "excellence"
    } and ready for a new challenge, we'd love to hear from you!`,
    `${companyName} offers a competitive salary, excellent benefits, and opportunities for professional growth. Apply today and join our amazing team!`,
    `We value diversity and inclusion and encourage all qualified candidates to apply. Join us at ${companyName} and help shape the future of our industry.`,
    `At ${companyName}, we believe in empowering our employees to do their best work. If you're ready to make an impact, we want to talk to you.`,
    `This is an exciting opportunity to join a dynamic team and contribute to our growth. We look forward to reviewing your application!`,
  ];

  // Randomly select templates
  const intro =
    introTemplates[Math.floor(Math.random() * introTemplates.length)];
  const outro =
    outroTemplates[Math.floor(Math.random() * outroTemplates.length)];

  // Combine all parts
  return `${intro}\n\n${roleDescription}\n\n${outro}`;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
