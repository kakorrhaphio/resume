function viewModel() {
    this.firstName = "Jeet";
    this.lastName = "Gajjar";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "";
    this.email = "gajjarjm@vcu.edu | j211668@gmail.com";
    this.github = "github.com/kakorrhaphio";
    this.website = "kakorrhaphio.github.io/resume"

    this.sections = [{
            header: ["Employment"],
            subsections: [
              {
                  header: [
                      "New York, New York (Remote)",
                      "Major League Hacking",
                      "Aug 2017 - Present"
                  ],
                  bullets: [
                      "Oversee North America University Hackathons", [
                          "Support organizers to run successful events",
                          "Emergency procedure experience"
                      ]
                  ]
              },
                {
                    header: [
                        "Greenville, SC",
                        "BMW Manufacturing (Co-op)",
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
                {
                    header: [
                        "Richmond, VA",
                        "Timmons Group (Intern)",
                        "Oct 2016 - Dec 2016"
                    ],
                    bullets: [
                        "Researched possible avenues for Geo-Information Systems scripting"
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "authentic. (Intern)",
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
                        "Richmond, VA",
                        "VCU Biological Network Lab",
                        "Sept 2015 - Dec 2016"
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
                        "Richmond, VA",
                        "Virginia Commonwealth University",
                        "Fall 2014 - May 2018"
                    ],
                    // bullets: [
                    //     "Senior studying Computer Science"
                    //     "Member of Computer Science Student Advisory Board", [
                    //         "Acted as intermediary between faculty and students",
                    //         "Active in selecting future faculty members",
                    //         "Assist with CS events, such as open house"
                    //     ],
                    // ]
                }
                // {
                //     header: [
                //         "Yorktown, VA",
                //         "York High school",
                //         "2010 - 2014"
                //     ]
                // }
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
                        "Java, Python, JavaScript"
                    ]
                }

            //Atlassian/API, Git Version Control, BeautifulSoup, Selenium, Chromedriver, REST, Terminal,
            //Hippo CMS, Django, D3js, LaTex, Gephi,
        },
        {
            header: ["Prominent Projects"],
            subsections: [
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/vcu-swim-lab/stack-intheflow"
                    },
                    header: [
                        "StackInTheFlow",
                        "Sept 2016 - May 2017"
                    ],
                    bullets: [
                        "IntelliJ Plugin which queries Stack Overflow", [
                          "Mutli-faceted search capabilities with productivity in mind"
                        ],
                        "First place winner for VCU Senior Design Expo in Computer Science 2017"
                    ]
                },
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/kakorrhaphio/SocialNetworksPenguins"
                    },
                    header: [
                        "Penguin",
                        "Sept 2016 - Dec 2016"
                    ],
                    bullets: [
                        "Top websites from Alexa Page Rank analysis", [
                          "Created a network of pixel-pixel interractions with large generated dataset"
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
                        "Spring 2016 - Dec 2017"
                    ],
                    bullets: [
                        "Maintained successful event 2 years with 250 attendees"
                        // "Director of Food Logistics",
                        // "Vendor Management",
                        // "Sought out and trained talented underclassmen to maintain RamHacks",
                        // "Assisted in participants' technical questions",
                    ]
                },
                {
                    header: [
                        "(Cofounder) Cyber Security Club at VCU",
                        "Aug 2015 - December 2016"
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
        }
    ]
};
