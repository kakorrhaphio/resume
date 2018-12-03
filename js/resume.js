function viewModel() {
    this.firstName = "Jeet";
    this.lastName = "Gajjar";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "";
    this.email = "j211668@gmail.com";
    this.github = "github.com/kakorrhaphio";
    this.website = "";

    this.sections = [{
            header: ["Employment"],
            subsections: [
                {
                    header: [
                      "",//first one is for location
                        "Ippon Technologies (Software Engineer Consultant)",
                        "Aug 2018 - Present"
                    ],
                    bullets: [
                        "Completed Jhipster Masterclass & Workshops",
                        "Client: Horizon Blue Cross Blue Shield of New Jersey", 
                        [
                            "Project: HPRMS Oct 2018 - Present",
                            "Create Full stack JHipster application",
                            "Tools: Spring, Maven, Jenkins, Mongo, AWS, Splunk"
                           ],
                        "Client: Horizon Blue Cross Blue Shield of New Jersey", 
                           [
                            "Project: Hadoop Cloud Platform Sept 2018 - Oct 2018",
                            "Assisted in migration from on-premises to open source cloud platform",
                            "Created automation scripts for jenkins’ consumption",
                            "Tools: Ansible, Ambari, Apache, Jenkins"
                           ],

                    ]
                },
              {
                  header: [
                    "",//first one is for location
                      "Major League Hacking (Hackathon Evangelist)",
                      "Aug 2017 - Present"
                  ],
                  bullets: [
                      "Regularly attend student computer programming competitions as official representative of national organizing body, Major League Hacking (MLH)",
                          "Act as primary primary point of contact for university, student & faculty volunteers, and event attendees while on-site",
                          "Regular public speaking experience in front of 500+ people", [
                           "Presentations involve communicating technical topics to audience of varying skill levels"
                         ],
                          "Teach developers how to solve a wide variety of programming challenges and actively help them debug problems across a variety of languages & platforms"
                  ]
              },
                {
                    header: [
                      "",
                        "BMW Manufacturing (Software Developer Co-op)",
                        "Jan 2017 - Dec 2017"
                    ],
                    bullets: [
                        "Created an automated documentation tool using JIRA and Confluence", [
                            "Created and architected entire project including front-end and database design",
                            "Used by BMW IT Associates across North America to streamline the documentation process",
                        ],
                        "JIRA & Confluence", [
                          "Administrated and trained associates across North America"
                          // "Trained Associates on best practices in person and virtually",
                        ]
                    ]
                },
                // {
                //     header: [
                //         "Richmond, VA",
                //         "Timmons Group (Intern)",
                //         "Oct 2016 - Dec 2016"
                //     ],
                //     bullets: [
                //         "Wrote Python and with ESRI to determine "
                //     ]
                // },
                {
                    header: [
                      "",
                        "authentic. (Software Engineering Intern)",
                        "May 2016 - Aug 2016"
                    ],
                    bullets: [
                        "Integrated Hippo CMS to newly designed internal site",
                        "Integrated Harvest Time Logging with JIRA",
                        "Used Greenscreen, a digital signage software, to demultiplex multiple Chromecast device channels"
                        // "Documented client functional requirements as Business Analyst",
                        // "Shadowed client calls as Business Analyst"
                    ]
                },
                // {
                //     header: [
                //         "Richmond, VA",
                //         "VCU CS Department",
                //         "May 2016 - June 2016"
                //     ],
                //     bullets: [
                //         "Completed an existing scheduling website using JavaScript"
                //     ]
                // },
                {
                    header: [
                      "",
                        "VCU Biological Network Lab (Research Asst.)",
                        "Sep 2015 - Dec 2016"
                    ],
                    bullets: [
                        "Worked with PhD Candidates in:", [
                          "Implementing the Traveling Salesman Problem with a large dataset",
                          "Designing and tested network robustness using Django Framework",
                          "Creating a front end and back end correlated disease database",
                          "Relating diseases to visualize the evolution of miRNA",
                          // "Peer Reviewed journal papers"
                        ]
                    ]
                }
            ]
        },
        {
            header: ["Education"],
            subsections: [{
                    header: [
                        "",
                        "Virginia Commonwealth University",
                        "Aug 2014 - May 2018"
                    ],
                    bullets: [
                      "B.S Computer Science",
                    ]
                }
            ]
        },
        {
            header: ["Noteworthy Projects"],
            subsections: [
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/vcu-swim-lab/stack-intheflow"
                    },
                    header: [
                        "StackInTheFlow",
                        "",
                        "Sep 2016 - May 2017"
                    ],
                    bullets: [
                        "An IntelliJ Plugin that uses NLP and StackOverflow to provide coding reccomendations",
                        "First place, Excellence in Design, VCU Senior Capstone Design Expo 2017",
                        // [
                        //   "Mutli-faceted search capabilities with productivity in mind" //TODO: Review commits and see how I contributed.
                        // ],
                    ]
                },
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/kakorrhaphio/SocialNetworksPenguins"
                    },
                    header: [
                        "Penguin",
                        "",
                        "Sep 2016 - Dec 2016"
                    ],
                    bullets: [
                        "Analyzed top websites from Alexa Page Rank analysis", [
                          "Created a network of pixel-pixel interactions with large generated dataset"
                          // "Designed compression/decompression algorithm for data management",
                          // "Observed power-law from acrued data"
                        ]
                    ]
                },
                // {
                //     header: ["Personal Life Hacks"],
                //     bullets: [
                //     ]
                // },
                // {
                //     noPrint: true,
                //     decorators: {
                //         icon: "github",
                //         url: "https://github.com/kakorrhaphio/khe16-Penguin-harassment"
                //     },
                //     header: [
                //         "Hack HarRESTment",
                //         "September 2014"
                //     ],
                //     bullets: [
                //         "Created a Chrome extension with text filtering options", [
                //
                //         ]
                //     ]
                // },
                // {
                //     decorators: {
                //         icon: "github",
                //         url: "https://github.com/kakorrhaphio/OperatingSystem"
                //     },
                //     header: [
                //         "Operating System Simulator",
                //         "Fall 2016"
                //     ],
                //     bullets: [
                //         "Operating System Simulator built in Java", [
                //             "Implements an IOScheduler",
                //             "Simulates virtual memory/swapping",
                //             "Implements priority queue"
                //
                //         ]
                //     ]
                // },
            ]
        },
        {
            noPrint: true,
            header: ["Leadership"],
            subsections: [{
                    header: [
                        "RamHacks Organizer",
                        "",
                        "Jan 2016 - Dec 2017"
                    ],
                    bullets: [
                        "Co-organized RamHacks 2 years with 500 total attendees",
                        "Lead Vendor Manager for all meals and snacks"
                        // "Vendor Management",
                        // "Sought out and trained talented underclassmen to maintain RamHacks",
                        // "Assisted in participants' technical questions",
                    ]
                },
                {
                    header: [
                        "Cyber Security Club, VCU (Co-Founder)",
                        // "(Co-Founder)",
                        "",
                        "Aug 2015 - Dec 2016"
                    ],
                    bullets: [
                        "Organized weekly tech-talks by companies and students",
                        // "Created partnership with General Electric's Cyber Security Department ", [
                        //     "Exposed Red/Blue team to students"
                        //   ],
                        "Aided in the development of the Cyber Security Lab sandbox environment"
                    ]
                },
            ]
        },
        {
            header: ["Skills"],
            // bullets: [
            //   "Languages:",
            //   list: ["Java", "Python", "JavaScript" ]
            //   "Other:"
            //   list: ["Maven", "Atlassian/API", "Git", "BeautifulSoup", "Selenium", "Gephi"]
            // ],
            subsections: [
                {
                    header: [
                        "Languages"
                    ],
                    bullets: [
                        "Java, Python, JavaScript, JSON, XML, Perl"
                    ]
                },
                {
                    header: [
                        "Frameworks"
                    ],
                    bullets: [
                        "Spring, Angular"
                    ]
                },
                {
                  header: [
                    "Software"
                  ],
                  bullets: [
                    "Atlassian Plugin Development, Atlassian API, Git, GitHub, Bitbucket, REST, BeautifulSoup, Selenium, Chromedriver, Hippo CMS, Django, LaTeX, Gephi, ESRI, ArcPy, Microsoft Office"
                  ]
                }
              ]


        }
    ]
};
